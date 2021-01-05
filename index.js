const express = require("express");
require("dotenv").config();

const app = express();

const { PORT } = process.env;

app.listen(5000, () => {
  console.log("listening...");
});

app.get("/health", (req, res) => res.json({ status: "Health ok" }));
