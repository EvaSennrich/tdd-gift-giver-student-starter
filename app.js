//require and module.exports go together
const express = require("express");
const morgan = require("morgan");
const { NotFoundError } = require("./utils/errors");
const giftRouter = require("./routes/gift-exchange");

const app = express();
// const admin = express(); // the sub app

app.use(morgan("tiny"));
// app.use(express.json());
app.use("/gift-exchange", giftRouter);

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
  console.log("BIG FAT ERROR");
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something wen't wrong in the application";

  return res.status(status).json({
    error: { message, status },
  });
});

// this export the application from the app.js file as its default export
module.exports = app;
