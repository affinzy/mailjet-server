require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;

const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api", async (req, res, next) => {
  try {
    const { name, subject, message, from, to, toName } = req.body;
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: from,
            Name: name,
          },
          To: [
            {
              Email: to,
              Name: toName,
            },
          ],
          Subject: subject,
          TextPart: message,
        },
      ],
    });
    res.send({
      status: request.response.status,
      data: request.response.statusText
    })
  } catch (e) {
    console.log(e.message);
    res.send({
      status: 400,
      error: e.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app;