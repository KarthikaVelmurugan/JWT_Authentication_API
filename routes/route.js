const express = require("express");
const loginService = require("../services/login.service");
const logoutService = require("../services/logout.service");
const registerService = require("../services/register.service");
const router = express.Router();

router.route("/register").post(registerService.registerService);
router.route("/login").post(loginService.loginService);

router.route("/logout").post(logoutService.logoutService)
module.exports = router;
