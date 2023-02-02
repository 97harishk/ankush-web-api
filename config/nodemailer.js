const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "felipa35@ethereal.email",
    pass: "d7vY8FNt9msHJ5qQXn",
  },
});

module.exports = {
  transporter: transporter,
};
