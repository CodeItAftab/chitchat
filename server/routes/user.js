const { Router } = require("express");
const { isAuth } = require("../middlewares/is-auth");
const {
  updateMe,
  getAllUsers,
  getAllFriends,
  getAllRequests,
  getAllSentRequests,
} = require("../controllers/user");

const router = Router();

router.post("/update-me", isAuth, updateMe);
router.get("/get-users", isAuth, getAllUsers);
router.get("/get-friends", isAuth, getAllFriends);
router.get("/get-friend-requests", isAuth, getAllRequests);
router.get("/get-sent-requests", isAuth, getAllSentRequests);

module.exports = router;
