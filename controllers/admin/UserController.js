var UserService = require("../../services/admin/UserService")
const JWT = require("../../utils/jwtUtil")
const UserController = {
  login: async (req, res) => {
    console.log(110, req)
    let result = await UserService.login(req.body)
    let { username, password } = req.body
    console.log(11, result)
    // 如果登录成功 记录之
    let token = null;
    if (result.length === 0) {
      res.send({
        code: '4001',
        msg: "账号或密码错误"
      })
    } else {
      token = JWT.generate({ username, password });
      console.log("login:token=", token);
      res.send({
        ActionType: 'ok',
        token: token,
        msg: "操作成功"
      })
    }
  },
  register: async (req, res) => {
    let result = await UserService.register(req.body)
    console.log("register", result);
    if (!result) {
      res.send({
        code: '-1',
        msg: "操作失败"
      })
    } else {
      // 注册成功
      res.send({
        ActionType: 'ok',
      })
    }
  },
  // 添加
  add: async (req, res) => {
    let result = await UserService.add(req.body)
    console.log("add", result);
    if (!result) {
      res.send({
        code: '-1',
        msg: "操作失败"
      })
    } else {
      // 注册成功
      res.send({
        ActionType: 'ok',
      })
    }
  },
  // 编辑
  userEdit: async (req, res) => {
    let result = await UserService.edit(req.body)
    console.log("edit", result);
    if (!result) {
      res.send({
        code: '-1',
        msg: "操作失败"
      })
    } else {
      // 注册成功
      res.send({
        ActionType: 'ok',
      })
    }
  },
  // 列表
  userList: async (req, res) => {
    let result = await UserService.userList(req.body)
    // console.log("userList", result);
    if (!result) {
      res.send({
        code: '-1',
        msg: "操作失败"
      })
    } else {
      // 列表返回成功
      res.send({
        ActionType: 'ok',
        data: result
      })
    }
  },
  // 列表 删除
  userDelete: async (req, res) => {
    console.log("收到参数：", req.params.id)
    let result = await UserService.userDelete(req.params.id)
    console.log("userDelete", result);

    if (!result) {
      res.send({
        code: '-1',
        msg: "操作失败"
      })
    } else {
      // 列表返回成功
      res.send({
        ActionType: 'ok',
        data: result
      })
    }
  },
}

module.exports = UserController