var UserController = require("../../controllers/admin/UserController")
/* 登录校验中间件 */
const loginCheck = require("../../middleware/loginCheck");

var express = require('express');
var UserRouter = express.Router();
var UserRouterRegister = express.Router();
// 登录
// UserRouter.post("/api/user/login", loginCheck, UserController.login)
UserRouter.post("/api/user/login", UserController.login)
// 注册
UserRouterRegister.post("/api/user/register", UserController.register)


module.exports = { UserRouter, UserRouterRegister }