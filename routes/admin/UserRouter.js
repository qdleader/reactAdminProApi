var UserController = require("../../controllers/admin/UserController")
/* 登录校验中间件 */
const loginCheck = require("../../middleware/loginCheck");

var express = require('express');
var UserRouter = express.Router();
var UserRouterRegister = express.Router();
var UserRouterAdd = express.Router();
var UserRouterList = express.Router();
// 登录
// UserRouter.post("/api/user/login", loginCheck, UserController.login)
UserRouter.post("/api/user/login", UserController.login)
// 注册
UserRouterRegister.post("/api/user/register", UserController.register)

// 添加用户
UserRouterAdd.post("/api/user/add", UserController.add)

// 获取用户列表
UserRouterList.get("/api/user/list", loginCheck, UserController.userList)

module.exports = { UserRouter, UserRouterRegister, UserRouterAdd, UserRouterList }