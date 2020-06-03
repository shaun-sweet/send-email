var express = require("express");
var router = express.Router();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

/* GET home page. */
// router.get("/", function (req, res, next) {
//   const msg = {
//     to: "vanessa.mercado24@gmail.com",
//     from: "vanessa.mercado24@gmail.com",
//     subject: "Sending with Twilio SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   };
//   sgMail
//     .send(msg)
//     .then(() => console.log("send mail success"))
//     .catch(console.log);
// });

router.get("/", (req, res, next) => {
  res.send("this is the index.js page");
});
module.exports = router;
