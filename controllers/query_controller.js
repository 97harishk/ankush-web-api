const queryMailer = require("../mailer/querymailer");

module.exports.sendQuery = async (req, res) => {
  try {
    const obj = req.body;
    queryMailer.sendQuery(obj);
    if (req.body) {
      return res.status(200).json({
        message: "Mail sent successfully",
      });
    }
  } catch (error) {
    return res.status("500").json({
      message: "Internal server error!",
    });
  }
};
