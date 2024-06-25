const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.json({ Message: "Test" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
