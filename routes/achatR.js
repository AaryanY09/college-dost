const express = require("express");
const router = express.Router();
const achatC = require("../controllers/achatC");

// chat list
router.get("/", achatC.showChatList);

// start chat
router.get("/start/:prn", achatC.startChat);

// open chat
router.get("/:id", achatC.openChat);

module.exports = router;