const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "antoinenebout09@gmail.com",
    pass: "C1B68501D05FE36F561CF9D3FE9A8CC761B1",
  },
});

const mailOptions = {
  from: "antoinenebout09@gmail.com",
  to: "antoinenebout09@gmail.com",
  subject: "Test",
  text: "Hello World!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error.message);
  }
  console.log("success");
});