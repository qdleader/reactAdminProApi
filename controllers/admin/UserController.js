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

  }
}

module.exports = UserController