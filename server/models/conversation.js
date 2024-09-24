const { Schema, model, default: mongoose } = require("mongoose");

const conversationSchema = new Schema(
  {
    members: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        reciever: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        sender: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        type: {
          type: String,
          enum: ["Text", "Media", "Document", "Link"],
        },
        text: {
          type: String,
        },
        file: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Conversation = new model("Conversation", conversationSchema);

module.exports = Conversation;
