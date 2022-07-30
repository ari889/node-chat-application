//external imports
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controlles/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUploads = require("../middlewares/users/avatarUploads");

const {
  addUserValidator,
  addUserValidationHandle,
} = require("../middlewares/users/userValidator");

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add users
router.post(
  "/",
  avatarUploads,
  addUserValidator,
  addUserValidationHandle,
  addUser
);

// delete user
router.delete("/:id", removeUser);

module.exports = router;
