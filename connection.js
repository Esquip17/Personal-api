const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/api", { useNewUrlParser: true });

module.exports = mongoose;
