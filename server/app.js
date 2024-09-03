const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan"); //* HTTP request logger for middleware for Node.js
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss");
const cors = require("cors");
const dotenv = require("dotenv");

//*  Routes
const appRoutes = require("./routes/index");

//* dotenv
dotenv.config();

const app = express();

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(mongoSanitize());

const limiter = rateLimit({
  limit: 3000,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, Please try again in an hour.",
});

app.use("/tawk", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());

if (process.env.NODE_ENV == "developement") {
  app.use(morgan("dev"));
}

// app.use(xss());

app.use(appRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ status: "error", message: message, data: data });
});

const port = process.env.PORT || 3000;
const db_uri = process.env.DB_URI.replace(
  "<password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(db_uri)
  .then((res) => {
    console.log("db connected.");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("listening on port 3000");
});
// process.on("unhandledRejection", (error) => {
//   console.log(error);
//   app.close(() => {
//     process.exit(1);
//   });
// });
