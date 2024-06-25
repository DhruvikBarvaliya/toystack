const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.json({ Message: "Test" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
