/* token校验登录 */
const JWT = require("../utils/jwtUtil");
const regToken = /Bearer (.+)/
const loginCheck = function (req, res, next) {
  // const token = regToken.exec(req.headers["authorization"])[1]
  const token = req.headers["token"]
  if (token) {
    const info = JWT.verify(token);
    info ? next() : res.json({
      token,
      info,
      msg: "请先登录！"
    });
  } else {
    res.json({
      code: 4001,
      msg: "请先登录"
    });
  }
};

module.exports = loginCheck

