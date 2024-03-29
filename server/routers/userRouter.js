const { login, register } = require("../controllers/userControllers");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/login", login);

userRouter.post("/register", register);

module.exports = userRouter;
