require("dotenv").config();
const express = require("express");
const mailgunController = require("./controllers/mailgunController");
const mailTrapController = require("./controllers/mailtrapController");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/api", mailgunController);
app.use("/api", mailTrapController);

app.listen(7000, () => {
  console.log("Server is running on PORT 7000");
});
