const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jeejo13:jeejo123@cluster0.jtztq.mongodb.net/anwer-class-db?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
