var UploadController = require("../../controllers/admin/UploadController")
/* 登录校验中间件 */
const loginCheck = require("../../middleware/loginCheck");

var express = require('express');
var UploadFileRouter = express.Router();


// 上传
UploadFileRouter.post("/api/upload", UploadController.UploadFile)
// UploadFileRouter.post("/api/upload", loginCheck, UploadController.UploadFile)



module.exports = { UploadFileRouter }