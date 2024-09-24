const { Schema, model, default: mongoose } = require("mongoose");

const friendRequestSchema = new Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    recipient: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const FriendRequest = new model("FriendRequest", friendRequestSchema);

module.exports = FriendRequest;
