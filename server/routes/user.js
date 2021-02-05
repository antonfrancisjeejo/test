const express = require("express");

const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const result = await bcrypt.compare(req.body.password, user.password);
  if (result) {
    res.json(user);
  } else {
    res.json({
      msg: "Wrong password",
    });
  }
});

router.post("/signup", async (req, res) => {
  bcrypt.genSalt(15, (err, salt) => {
    bcrypt.hash(req.body.password, salt).then(async (hash) => {
      const user = await new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      const result = await user.save();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "complaintmanagementsystem1@gmail.com",
          pass: "cms@1234",
        },
      });
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "complaintmanagementsystem1@gmail.com", // sender address
        to: req.body.email, // list of receivers
        subject: "Complaint Details", // Subject line
        text: "Welcome to our website...", // plain text body
        html: "<h1>Welcome to our website</h1>",
      });
      if (info.messageId) {
        console.log(info);
      }

      res.json(result);
    });
  });
});

module.exports = router;
