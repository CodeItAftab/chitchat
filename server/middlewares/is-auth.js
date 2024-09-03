const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.isAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookeies.jwt;
  } else {
    res.status(401).json({
      status: "error",
      message: "You are not authenticated. Please login to get access.",
    });
    return;
  }

  const decoded = promisify(jwt.verify(token, process.env.JWT_SECRET));

  const this_user = await User.findOne({ _id: decoded.userId });

  if (!this_user) {
    res.status(400).json({
      status: "error",
      message: "The user doesn't exist.",
    });
    return;
  }

  if (this_user.changedPasswordAfter(decode.iat)) {
    // logout other users after reseting the password.
    res.status(401).json({
      status: "error",
      message: "User recently updated password. Please log in again.",
    });
    return;
  }

  req.user = this_user;
  next();
};
