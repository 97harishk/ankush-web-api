const nodeMailer = require("../config/nodemailer");
exports.sendQuery = (query) => {
  nodeMailer.transporter.sendMail(
    {
      from: `${query.firstName} <${query.email}>`,
      to: "97harishkumar@gmail.com",
      subject: `You have new query from ${query.firstName} ${query.lastName}`,
      html: `<p>${query.text}</p> <p>${query.phone}</p>`,
    },
    (error, info) => {
      if (error) {
        console.log("error in sending mail", error);
        return;
      }
      console.log("Message Sent", info);
      return;
    }
  );
};
