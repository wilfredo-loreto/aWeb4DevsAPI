var nodemailer = require("nodemailer");
var config = require("./../config");
var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.GMAIL_USER,
    pass: config.GMAIL_PASSWORD,
  },
});

//Send the Content of the Mail to support@aweb4devs.com

function sendMails(req, res) {
    
  var mailOptionsAweb4devs = {
    from: req.body.email,
    to: "support@aweb4devs.com",
    subject: "New mail from aweb4devs.com by: " + req.body.email,
    text: req.body.content
  };

  //Send the a Verification Mail to the user
  var mailOptionsVerification = {
    from: "AWeb4Devs",
    to: req.body.email,
    subject:
      "You have successfully sent an email to aweb4devs.com" + req.body.email,
    text: req.body.content
  };

  transporter.sendMail(mailOptionsAweb4devs, function (err, info) {
    if (err) {
      console.log(err);
      res.send(500, err.message);
    } else {
      transporter.sendMail(mailOptionsVerification, function (error, info2) {
        if (error) {
          console.log(error);
          res.send(500, error.message);
        } else {
          console.log("Emails sent");
          res.status(200).jsonp(req.body);
        }
      });
    }
  });
}

module.exports = {
  sendMails,
};
