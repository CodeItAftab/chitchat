const http = require("http");
const path = require("path");
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
const { Server } = require("socket.io");
const User = require("./models/user");
const FriendRequest = require("./models/friendRequest");

//*  Routes
const appRoutes = require("./routes/index");

dotenv.config();

const app = express();
const server = http.createServer(app);

// ! Socket IO

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

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Access-Control-Allow-Origin"],
    methods: ["GET", "POST"],
  },
});

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

server.listen(port, () => {
  console.log("listening on port 3000");
});

io.on("connection", async (socket) => {
  // console.log(JSON.stringify(socket.handshake.query));
  const { user_id } = socket.handshake.query;
  const socket_id = socket.id;
  console.log("User connected: ", socket_id);

  if (Boolean(user_id)) {
    await User.findByIdAndUpdate(user_id, {
      socket_id,
      status: "Online",
    });
  }

  // ! Socket event listeners...

  socket.on("friend_request", async (data) => {
    // console.log(data);

    // TODO Create a friend Request

    // * data=>(to,from)
    const to = await User.findById(data.reciever).select("socket_id");
    const from = await User.findById(data.sender).select("socket_id");

    // Create a friend request

    const existing_friend_request = await FriendRequest.find({
      $or: [
        { sender: data.sender, recipient: data.reciever },
        { sender: data.reciever, recipient: data.sender },
      ],
    });
    if (existing_friend_request.length > 0) {
      console.log(existing_friend_request);
      return;
    }

    await FriendRequest.create({
      sender: data.sender,
      recipient: data.reciever,
    });

    // emit event new_friend_request
    io.to(to.socket_id).emit("new_friend_request", {
      message: "New Friend Request Recieved!",
    });

    // emit event request_sent
    io.to(from.socket_id).emit("request_sent", {
      message: "Request Sent Successfully!",
    });
  });

  socket.on("accept_request", async (data) => {
    console.log(data);

    const req_doc = await FriendRequest.findById(data.request_id);
    console.log(req_doc);

    const sender = await User.findById(req_doc.sender);
    const recipient = await User.findById(req_doc.recipient);

    sender.friends.push(req_doc.recipient);
    await sender.save({ new: true, validateModifiedOnly: true });
    recipient.friends.push(req_doc.sender);
    await recipient.save({ new: true, validateModifiedOnly: true });

    await FriendRequest.findByIdAndDelete(data.request_id);

    io.to(sender.socket_id).emit("request_accepted", {
      message: `${recipient.name} accepted your friend request.`,
    });

    io.to(recipient.socket_id).emit("request_accepted", {
      message: `You accepted your friend request of ${sender.name}`,
    });
  });

  socket.on("end", async (data) => {
    // FindUserById and set set status offline
    if (Boolean(data.user_id)) {
      await User.findByIdAndUpdate(data.user_id, {
        socket_id: undefined,
        status: "Online",
      });
    }

    // todo => broadcast this user disconnected.

    console.log("Closing connection");
    socket.disconnect(0);
  });

  // handle text and link messages

  socket.on("text_message", async (data) => {
    console.log("recieved message: ", data);

    // data => {sender,reciever,text}

    // create a new conversation only if it dosen't exist or add new message to messages list

    // save to db

    // emit incomming_message => reciever

    // emit outgoing message => sender
  });

  socket.on("file_message", async (data) => {
    console.log("recieved message: ", data);

    // data: {sender,reciever,text,file}

    // get the file extension

    const fileExtension = path.extname(data.file.name);

    // generate an unique file name

    const fileName = `${Date.now()}_${Math.floor(Math.random() * 1000)}
    ${fileExtension}`;

    // upload the file to AWS x3

    // create a new conversation if it doesn't exist yet or add new message to messages list

    // save to db

    // emit incomming_message => reciever

    // emit outgoing message => sender
  });
});

// process.on("unhandledRejection", (error) => {
//   console.log(error);
//   app.close(() => {
//     process.exit(1);
//   });
// });
