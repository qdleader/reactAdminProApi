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
    return registerRes
  },
  add: async ({ name, title, description, address, hobby }) => {
    let registerRes = await PersonModel.create({
      name: name,
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
    return registerRes
  },
  userList: async () => {
    return PersonModel.find()
  },
  userDelete: async (deleteId) => {
    if (deleteId) {
      return PersonModel.findByIdAndRemove({ _id: deleteId }).then(user => {
        // user.save().then(user => {
        //   return true
        //   // return res.json(user)
        // })
        return true
      })
    }
    // const product = await PersonModel.findById(deleteId)
    // console.log("product", product);
    // await product.delete()
    // return true
  },
}
module.exports = UserService