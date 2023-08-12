const express = require("express");

const router = express.Router();

const mailgunService = require("../services/mailgunService");

router.post("/send-mailgun", async (req, res) => {
  console.log("req body", req.body);
  try {
    const result = await mailgunService.sendMail(req, res);
    res.status(200).json({
      status: "success",
      message: "Email sent successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Email not sent",
    });
  }
});

module.exports = router;
