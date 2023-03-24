require("./index")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserType = {
  username: String,
  password: String,
  createTime: String,
  gender: Number,
  introduction: String,
  avatar: String,
  title: String,
  name: String,
  description: String,
  address: String,
  hobby: String,
  role: Number
}

const PersonModel = mongoose.model("person", new Schema(UserType))

module.exports = PersonModel