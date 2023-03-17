const UserModel = require("../../models/UserModel")
const PersonModel = require("../../models/PersonModel")

const UserService = {
  login: async ({ username, password }) => {
    console.log("username, password ", username, password)
    return UserModel.find({
      username, password
    })
  },
  register: async ({ username, password }) => {
    console.log("username, password ", username, password)
    let registerRes = await UserModel.create({
      username: username,
      password: password,
      createTime: new Date()
    }).then(() => {
      console.log("注册插入成功");
      return true
    }).catch((err) => {
      console.log(err);
      return false
    })
    console.log("registerRes", registerRes);
    return registerRes
  },
  add: async ({ title, description, address, hobby }) => {
    console.log("title, description, address, hobby ", title, description, address, hobby)
    let registerRes = await PersonModel.create({
      title: title,
      description: description,
      address: address,
      hobby: hobby,
      createTime: new Date()
    }).then(() => {
      console.log("用户注册插入成功");
      return true
    }).catch((err) => {
      console.log(err);
      return false
    })
    console.log("registerRes", registerRes);
    return registerRes
  },

}
module.exports = UserService