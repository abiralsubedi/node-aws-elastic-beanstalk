import { RequestHandler } from "express";

export const checkParamQuery: RequestHandler<
  { checkParam: string },
  any,
  any,
  { checkQuery: string }
> = (req, res, next) => {
  const checkParam = req.params.checkParam;
  const checkQuery = req.query.checkQuery;

  const updatedBody = req.body as { text: string }; // type casted into an object with text key

  res.json({
    message: "success",
    param: checkParam,
    query: checkQuery,
    text: updatedBody ? updatedBody.text : ""
  });
};
