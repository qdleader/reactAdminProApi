const jsonwebtoken = require("jsonwebtoken");
const { jwtSecret } = require("../config");

class JWT {
  /* 生成token 返回token*/
  static generate(value, expires = "7 days") {
    console.log("JWT generate value", value);
    // value 为传入值， expires为过期时间，这两者都会在token字符串中题先
    try {
      return jsonwebtoken.sign(value, jwtSecret, { expiresIn: expires });
    } catch (e) {
      console.error("jwt sign error --->", e);
      return "";
    }
  }

  /* 校验token 返回载荷或false*/
  static verify(token) {
    try {
      // 如果过期将返回false
      return jsonwebtoken.verify(token, jwtSecret);
    } catch (e) {
      console.error("jwt verify error --->", e);
      return false;
    }
  }
}
module.exports = JWT;

