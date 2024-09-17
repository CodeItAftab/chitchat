const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const optGenerator = require("otp-generator");
const crypto = require("crypto");
const mailService = require("../services/mailer");
const bcrypt = require("bcryptjs");

const signToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET);
};

exports.register = async (req, res, next) => {
  const errors = validationResult(req);

  const { name, email, password } = req.body;

  try {
    if (!errors.isEmpty()) {
      console.log(errors);
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }

    // * Check if a verified user with given email exists
    const existing_user = await User.findOne({ email });

    if (existing_user && existing_user.verified === true) {
      const error = new Error("Email is already in use, Please login.");
      error.statusCode = 422;
      throw error;
    } else if (existing_user) {
      const hashedPassword = await bcrypt.hash(password, 12);
      await User.findOneAndUpdate(
        { email },
        { name: name, password: hashedPassword },
        { new: true, validateModifiedOnly: true }
      );
      req.userId = existing_user._id;
      next();
    } else {
      const new_user = await User.create({
        name: name,
        email: email,
        password: password,
      });

      //  * Generate OTP and send email to user
      req.userId = new_user._id;
      next();
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.sendOTP = async (req, res, next) => {
  const { userId } = req;
  const new_otp = optGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  console.log(new_otp);

  const hased_otp = await bcrypt.hash(new_otp, 12);

  const otp_expiry_time = Date.now() + 10 * 60 * 1000; //10 minutes after otp is sent

  await User.findByIdAndUpdate(userId, { otp: hased_otp, otp_expiry_time });

  //   TODO Send Mail to user

  try {
    await mailService.sendEmail({
      from: "aftabalamk7a@gmail.com",
      to: "aftabalamdlm@gmail.com",
      subject: "Verify your OTP",
      text: `Here is your OTP ${new_otp}. This OTP is valid for only 10 minutes.`,
    });
    res
      .status(200)
      .json({ status: "success", message: "otp sent successfully." });
  } catch (error) {
    console.log(error);
  }
};

exports.verifyOTP = async (req, res, next) => {
  //* verifiy OTP and update user record accordingly
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({
      email,
      otp_expiry_time: { $gt: Date.now() },
    });
    if (!user) {
      const error = new Error("Invalid email or OTP expired");
      error.statusCode = 401;
      throw error;
    }

    if (!(await user.correctOTP(otp, user.otp))) {
      const error = new Error("Incorrect OTP");
      error.statusCode = 401;
      throw error;
    }

    // updating user
    user.verified = true;
    user.otp = undefined;
    user.otp_expiry_time = undefined;
    await user.save({ new: true, validateModifiedOnly: true });

    // logging in user
    const token = signToken(user._id, user.email);

    res.status(200).json({
      status: "success",
      message: "OTP verified successfully",
      email: user.email,
      userId: user._id,
      token,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res
      .status(400)
      .json({ status: "error", message: "There is no user with given email." });

    return;
  }

  const resetToken = await user.createPasswordResetToken();
  const resetURL = `http://localhost:5173/auth/new-password/${resetToken}`;
  console.log(resetURL);
  try {
    // TODO => Send email to user with reset url

    res.status(200).json({
      status: "success",
      message: "Reset Password link sent to email",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });

    res.status(500).json({
      status: "error",
      message: "There was an error sending the email, Please try again later.",
    });
    return;
  }
};

exports.resetPassword = async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpires: { $gt: Date.now() },
  });

  console.log(req.params.token, req.body.password);

  if (!user) {
    res
      .status(400)
      .json({ status: "error", message: "Token is invalid or expired." });
    return;
  }
  console.log(req.body.password);

  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpires = undefined;
  await user.save({ validateModifiedOnly: true });

  // * Login the user and send new jwt

  // TODO send an email to notify user about password change

  const token = signToken(user._id, user.email);

  res.status(200).json({
    status: "success",
    message: "Password changed successfully",
    email: user.email,
    userId: user._id,
    token,
  });
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);

  const { email, password } = req.body;

  try {
    if (!errors.isEmpty()) {
      console.log(errors);
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.verifyPassword(password, user.password))) {
      const error = new Error("Incorrect email or password");
      error.statusCode = 401;
      throw error;
    }

    const token = signToken(user._id, user.email);

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      email: user.email,
      userId: user._id,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
