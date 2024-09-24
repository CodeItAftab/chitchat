const { Schema, model, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      index: true,
      required: [true, "Email is required."],
      validate: {
        validator: function (email) {
          return String(email)
            .toLocaleLowerCase()
            .match(
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            );
        },
        message: (props) => `Email (${props}) is invalid.`,
      },
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    passwordChangedAt: {
      type: Date,
    },
    bio: {
      type: String,
      default: "Hey, I'm new here!",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
    },
    otp_expiry_time: {
      type: Date,
    },
    avatar: {
      type: String,
    },

    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpires: {
      type: Date,
    },
    dob: {
      type: Date,
    },
    socket_id: {
      type: String,
    },
    friends: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    status: {
      type: String,
      enum: ["Online", "Offline"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew || !this.password)
    return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("otp")) return next();

//   this.otp = await bcrypt.hash(this.otp, 12);
//   next();
// });

userSchema.methods.verifyPassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

userSchema.methods.correctOTP = async function (inputOTP, userOTP) {
  return await bcrypt.compare(inputOTP, userOTP);
};

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;

  console.log(resetToken);
  await this.save();
  return resetToken;
};

userSchema.methods.changedPasswordAfter = function (timestamp) {
  return timestamp < this.passwordChangedAt;
};

module.exports = model("User", userSchema);
