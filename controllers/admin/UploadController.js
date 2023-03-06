var UserService = require("../../services/admin/UserService")
const JWT = require("../../utils/jwtUtil")
const UserController = {
  UploadFile: async (req, res) => {
    console.log(110, req)
    // let result = await UserService.login(req.body)
    // let { username, password } = req.body
    // res.json({
    //     files:req.files
    // })

    const des_file = imgPath + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err, data) {
      fs.writeFile(des_file, data, function (err) {
        if (err) {
          console.log(err);
          res.json(err)
        } else {
          response = {
            username: req.body.username,
            message: "File uploaded successfully",
            filename: req.files[0].originalname,
          };
        }
        console.log(response);
        res.json(response);
      });
    });


    // 如果登录成功 记录之
    // let token = null;
    // if (result.length === 0) {
    //   res.send({
    //     code: '4001',
    //     msg: "账号或密码错误"
    //   })
    // } else {
    //   token = JWT.generate({ username, password });
    //   console.log("login:token=", token);
    //   res.send({
    //     ActionType: 'ok',
    //     token: token,
    //     msg: "操作成功"
    //   })
    // }
  }
}

module.exports = UserController