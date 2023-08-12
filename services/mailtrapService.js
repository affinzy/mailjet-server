const { MailtrapClient } = require("mailtrap");

const TOKEN = "0869832a7e55450d8b928b39441ccb48";
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "mailtrap@taofiqcode.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "abumahfuz21@gmail.com",
  },
];

exports.sendMail = (req, res) => {
  const { toEmail, fromEmail, subject, message } = req.body;

  client.send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  });
};
