"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const check_1 = __importDefault(require("./routes/check"));
dotenv_1.config();
const app = express_1.default();
const { PORT } = process.env;
app.get("/health", (req, res) => res.json({ status: "Health ok" }));
app.use("/check", check_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT || 5000, () => {
    console.log("listening... in ", PORT);
});
