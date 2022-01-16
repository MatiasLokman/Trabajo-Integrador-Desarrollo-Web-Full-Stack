const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post("/login", authController.login);
authRouter.post("/api/users", authController.signUp);

module.exports = authRouter;
