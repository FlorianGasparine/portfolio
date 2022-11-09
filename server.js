const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static("./"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
