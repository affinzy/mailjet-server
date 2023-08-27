require("dotenv").config();
const express = require("express");
const mailgunController = require("./controllers/mailgunController");
const mailTrapController = require("./controllers/mailtrapController");
const mailjetController = require("./controllers/mailjetController");

const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", mailgunController);
app.use("/api", mailTrapController);
app.use("/api", mailjetController);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
