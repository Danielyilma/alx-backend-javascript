const express = require("express");

const port = 7865;
const app = express();

app.get("/", (req, resp) => {
  resp.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
  const id = req.params.id;
  if (!/^[+-]?\d+(\.\d+)?$/.test(id)) {
    res.statusCode = 404;
    res.send();
    return;
  }
  res.statusCode = 200;
  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log("API available on localhost port 7865");
});
