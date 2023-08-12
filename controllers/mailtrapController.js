const express = require("express");

const router = express.Router();

const mailtrapService = require("../services/mailtrapService");

router.post("/send-mailtrap", async (req, res) => {
  console.log("req body", req.body);
  try {
    const result = await mailtrapService.sendMail(req, res);
    res.status(200).json({
      status: "success",
      message: "Email sent successfully",
      data: result,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      status: "error",
      message: "Email not sent",
    });
  }
});

module.exports = router;

// const { MailtrapClient } = require("mailtrap");

// const TOKEN = "0869832a7e55450d8b928b39441ccb48";
// const ENDPOINT = "https://send.api.mailtrap.io/";

// const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

// const sender = {
//   email: "mailtrap@taofiqcode.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   {
//     email: "abumahfuz21@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
