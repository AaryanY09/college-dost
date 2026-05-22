const express = require("express");
const router = express.Router();
const chatC = require("../controllers/chatC");

// chat list
router.get("/", chatC.showChatList);

// start chat
router.get("/start/:prn", chatC.startChat);

// open chat
router.get("/:id", chatC.openChat);

module.exports = router;