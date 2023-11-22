const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
const port = 3000;

app.use(cors())
app.use(bodyParser.json())

app.get("/date", (req, res) => {
  res.send(new Date().toUTCString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
