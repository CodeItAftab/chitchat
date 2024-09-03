const { Router } = require("express");

// * Routes

const authRoutes = require("./auth");

const router = Router();

router.use("/auth", authRoutes);

module.exports = router;
