const express = require("express");
const app = express();
const router = express.Router();
const { NotFoundError, BadRequestError } = require("../utils/errors");

router.post("/pairs", async (req, res, next) => {
  // res.status(200).json({ names: [] });
  try {
    res.status(200).json({ names: {} });
  } catch (err) {
    next(BadRequestError);
  }
});

router.post("/traditional", async (req, res, next) => {
  // res.status(200).json({ names: [] });
  try {
    res.status(200).json({ names: {} });
  } catch (err) {
    next(BadRequestError);
  }
});

module.exports = router;
