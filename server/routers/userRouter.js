const {login} = require("../controllers/userControllers");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/login",  login);




module.exports = userRouter;