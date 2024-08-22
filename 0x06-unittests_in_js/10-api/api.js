const express = require("express");

const port = 7865;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
  const id = req.params.id;
  if (!/^[+-]?\d+(\.\d+)?$/.test(id)) {
    res.statusCode = 400;
    res.send();
    return;
  }
  res.statusCode = 200;
  res.send(`Payment methods for cart ${id}`);
});

app.get("/available_payments", (req, res) => {
  res.send(
    JSON.stringify({
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    })
  );
});

app.post("/login", (req, res) => {
  username = req.body.userName;

  res.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log("API available on localhost port 7865");
});
