var UserService = require("../../services/admin/UserService")
const JWT = require("../../utils/jwtUtil")
const { imgPath } = require("../../config")
const UserController = {
  UploadFile: (req, res) => {
    console.log("req.files", req.files);
    let fileObj = null;
    let filePath = '';

    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send({
        code: 1,
        msg: 'Bad Request.'
      })
      return;
    }

    /* file 是上传时候body中的一个字段，有可以随意更改*/
    console.log(req.files, req.files.file)
    fileObj = req.files.file;

    filePath = imgPath + "/" + fileObj.name;
    fileObj.mv(filePath, (err) => {
      if (err) {
        return res.status(500).send({
          code: 1,
          msg: 'System error'
        })
      }
      res.send({
        code: 0,
        data: 'Upload Successfuly'
      })
    })

  }
}

module.exports = UserController