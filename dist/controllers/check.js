"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParamQuery = void 0;
const checkParamQuery = (req, res, next) => {
    const checkParam = req.params.checkParam;
    const checkQuery = req.query.checkQuery;
    const updatedBody = req.body; // type casted into an object with text key
    res.json({
        message: "success",
        param: checkParam,
        query: checkQuery,
        text: updatedBody ? updatedBody.text : ""
    });
};
exports.checkParamQuery = checkParamQuery;
