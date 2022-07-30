//external imports
const express = require("express");
const router = express.Router();

// internal imports
const { getInbox } = require("../controlles/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
