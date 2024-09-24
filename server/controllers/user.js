const User = require("../models/user");

const FriendRequest = require("../models/friendRequest");
const user = require("../models/user");

exports.updateMe = async (req, res, next) => {
  const { user, name, bio, avatar } = req;

  const updated_user = await User.findByIdAndUpdate(
    user._id,
    { name, bio, avatar },
    { new: true, validateModifiedOnly: true }
  );

  res.status(200).json({
    status: "success",
    data: updated_user,
    message: "profile updated successfully.",
  });
};

exports.getAllUsers = async (req, res, next) => {
  const all_users = await User.find({ verified: true }).select("name _id");

  const this_user = req.user;

  const remaining_users = all_users.filter(
    (user) =>
      !this_user.friends.includes(user._id) &&
      user._id.toString() !== this_user._id.toString()
  );

  res.status(200).json({
    status: "success",
    data: remaining_users,
    message: "Users found successfully!",
  });
};

exports.getAllRequests = async (req, res, next) => {
  const requests = await FriendRequest.find({
    recipient: req.user._id,
  }).populate("sender", "_id name");

  res.status(200).json({
    status: "success",
    data: requests,
    message: "Friend Requests found successfully!",
  });
};

exports.getAllFriends = async (req, res, next) => {
  const this_user = await User.findById(req.user._id).populate(
    "friends",
    "_id name"
  );

  res.status(200).json({
    status: "success",
    data: this_user.friends,
    message: "Friends found successfully!",
  });
};

exports.getAllSentRequests = async (req, res, next) => {
  const requests = await FriendRequest.find({
    sender: req.user._id,
  }).populate("recipient", "_id name");

  res.status(200).json({
    status: "success",
    data: requests,
    message: "Sent Friend Requests found successfully!",
  });
};
