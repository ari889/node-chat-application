//external imports
const express = require("express");
const router = express.Router();

// internal imports
const { getInbox } = require("../controlles/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  checkLogin,
  redirectLoggedIn,
} = require("../middlewares/common/checkLogin");

// login page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
