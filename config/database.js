const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/express1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
});

const User = connection.model("User", UserSchema);

module.exports = connection;
