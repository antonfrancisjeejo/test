const mongoose = require("mongoose");

const User = mongoose.model("student", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = User;
