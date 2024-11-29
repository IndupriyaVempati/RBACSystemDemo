const express = require("express");
const authorize = require("../middlewares/authorize");

const router = express.Router();

router.get("/admin", authorize(["Admin"]), (req, res) => {
  res.send("Welcome Admin!");
});

router.get("/moderator", authorize(["Admin", "Moderator"]), (req, res) => {
  res.send("Welcome Moderator!");
});

router.get("/user", authorize(["Admin", "Moderator", "User"]), (req, res) => {
  res.send("Welcome User!");
});

module.exports = router;
