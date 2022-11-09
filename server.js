const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static("./"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gasparine.florian@gmail.com",
      pass: "Jesuisfloria1.",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "gasparine.florian@gmail.com",
    subject: `Message de ${req.body.email}: ${req.body.name} ${req.body.lastName}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent : " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});