

const path = require("path");

const publicPath = path.resolve("public");
const imgPath = path.join(publicPath, "img");
const jwtSecret = "qdleader";


module.exports = {
  jwtSecret,
  publicPath,
  imgPath
};