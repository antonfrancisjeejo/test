const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/user");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("Server has been started");
});
