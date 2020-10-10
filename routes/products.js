const express = require("express");
const router = express.Router();
const productModel = require("../models/product");
const stripe = require("stripe")("");
  

router.get("/allproducts", async (req, res) => {
  const productData = await productModel.find();
  res.json({ productData });
  // const small = new productModel({ name: 'Huwawei',price:400,description:"Huwawei is new emerging company",image:"https://www.powerplanetonline.com/cdnassets/huawei_mate_30_pro_8gb_256gb_ds_plata_07_ad_l.jpg"});
  // small.save();
});
const stripeChargeCallback = (res) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    console.log(stripeErr)
  } else {
    console.log(stripeRes)
  }
};

router.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, stripeChargeCallback(res));
  res.json({ message: "success", body });
});

module.exports = router;
