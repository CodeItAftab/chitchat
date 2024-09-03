const { Router } = require("express");
const { body } = require("express-validator");
const User = require("../models/user");

//* Auth controllers
const {
  register,
  login,
  sendOTP,
  forgotPassword,
  resetPassword,
  verifyOTP,
} = require("../controllers/auth");

const router = Router();

router.post("/login", [
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Please enter a valid email.")
    .normalizeEmail(),
  body("password").notEmpty().trim().isLength({ min: 6 }),
  login,
]);

router.post(
  "/register",
  [
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail(),
    body("password").notEmpty().trim().isLength({ min: 6 }),
    body("name").trim().not().notEmpty(),
  ],
  register,
  sendOTP
);

router.post("/send-otp", sendOTP);

router.post("/verify", verifyOTP);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

module.exports = router;
