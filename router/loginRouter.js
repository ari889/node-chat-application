//external imports
const express = require("express");
const router = express.Router();
const { redirectLoggedIn } = require("../middlewares/common/checkLogin");
// internal imports
const { getLogin, login, logout } = require("../controlles/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");

// set page title
const page_title = "Login";

// login page
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

//process login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

// logout route
router.delete("/", logout);

module.exports = router;
