const express = require("express");
//const app = express();
const giftExchange = require("../models/gift-exchange");
const router = express.Router();
const { NotFoundError, BadRequestError } = require("../utils/errors");

router.post("/pairs", (req, res, next) => {
  // res.status(200).json({ names: [] });
  try {
    const newPairs = req.body.names;
    console.log(newPairs);

    if (!newPairs) {
      return next(new BadRequestError());
    }

    const pairs = giftExchange.pairs(newPairs);
    res.status(200).json(pairs);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/traditional", (req, res, next) => {
  // res.status(200).json({ names: [] });
  try {
    const newTraditional = req.body.names;
    console.log("------>>>>", newTraditional);

    if (!newTraditional) {
      return next(new BadRequestError());
    }

    const traditional = giftExchange.traditional(newTraditional);
    res.status(200).json(traditional);
    // res.send(traditional);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
