"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("../controllers/check");
const router = express_1.Router();
router.get("/:checkParam", check_1.checkParamQuery);
exports.default = router;
