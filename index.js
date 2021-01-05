const express = require("express");
require("dotenv").config();

const app = express();

const { APP_PORT } = process.env;

app.listen(APP_PORT, () => {
  console.log("listening...");
});

app.get("/health", (req, res) => res.json({ status: "Health ok" }));
