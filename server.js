const express = require("express");
const next = require("next");
const path = require("path");
const bodyParser = require("body-parser");
const keys = require("./server/config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const coinbase = require("coinbase-commerce-node");

const libr = require("./modules/coinbase");

const Client = coinbase.Client;
const Charge = coinbase.resources.Charge;
var Checkout = coinbase.resources.Checkout;

Client.init("5c0d9cd6-bbd0-4255-9aee-2254a602dda4");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const mailer = require("./mailer");
const paymentmail = require("./paymentmail");

app.prepare().then(() => {
  const server = express();
  // Static image files
  // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
  server.use(
    "/images",
    express.static(path.join(__dirname, "images"), {
      maxAge: dev ? "0" : "365d",
    })
  );

  server.use(bodyParser.json());

  server.post("/api/contact", (req, res) => {
    const { email = "", name = "", mes = "" } = req.body;
    console.log(mes);

    mailer({ email, name, mes })
      .then(() => {
        console.log("success");
        res.send("success");
      })
      .catch((error) => {
        console.log("failed", error);
        res.send("badddd");
      });
  });
  server.post("/api/payment", (req, res) => {
    const {
      firstName = "",
      LastName = "",
      address = "",
      city = "",
      state = "",
      zip = "",
      email = "",
      phone = "",
      payment="",
    } = req.body[0];
  const products=req.body[1];

    paymentmail({firstName,LastName,address,city,state,zip,email,phone,products,payment })
      .then(() => {
        console.log("success");
        res.send("success");
      })
      .catch((error) => {
        console.log("failed", error);
        res.send("badddd");
      });
  });
  server.post("/api/stripe/checkout", async (req, res) => {
    await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      description: "Strapsession",
      source: req.body.token.id,
    });
    res.send({});
  });

  server.get("/api/checkout", async (req, res) => {
    let params = req.query || {};
    console.log(params.total);
    if (0 == 0) {
      console.log(params.total);
      return (req.body = await libr.checkout());
    }
    res.send("bad server failed to load payment");
  });
  server.post("/coinbase-webhook", async (req, res) => {
    const request = req.body;

    if (request) {
      const id = request.event.id;
      const event = request.event.type;

      if (event == "charge:confirmed") return libr.successPayment(id);
      if (event == "charge:pending") return libr.updatePayment(id);
      else if (
        event == "charge:failed" ||
        event == "charge:delayed" ||
        event == "charge:resolved"
      )
        return libr.deletePayment(id);
    }
    res.send("Coinbase Commerce Webhook endpoint");
  });

  server.post("/api/checkout", async (req, res) => {
    await Checkout.create(
      {
        description: "Strapsessions Checkout",
        local_price: {
          amount: 56,
          currency: "USD",
        },
        name: "Cart Checkout",
        pricing_type: "fixed_price",
        requested_info: ["name", "email"],
      },
      function (error, response) {
        console.log("Created checkout via create method");
        console.log(response);
        console.log(error);

        if (response && response.id) {
          // Try to update created checkout
          Checkout.updateById(
            response.id,
            { name: "new name" },
            function (error, response) {
              console.log("Updated checkout with id " + response.id);
              console.log(error);
              console.log(response);
            }
          );
        }
      }
    );
    res.send({});
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Read on http://localhost:${PORT}`);
  });
});
