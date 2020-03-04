const mongoose = require("./connection");
const Schema = mongoose.Schema;

const language = new Schema({
  language: {
    name: String
  }
});
const Country = new Schema({
  name: String,
  capital: String,
  language: {}
});

module.exports = mongoose.model("Country", Country);
