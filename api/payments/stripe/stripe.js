const secret = require("../config/config.js");
const stripe = require("stripe")(secret);
const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

router.post("/", (req, res) => {
  const { product, token } = req.body;
  const idempontencyKey = uuid();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: product.name,
        },
        { idempontencyKey }
      );
    })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => console.log(err));
});

// Front end needs to have stripeKey, token, name, amount (* 100)

module.exports = router;
