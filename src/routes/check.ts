import { Router } from "express";
import { checkParamQuery } from "../controllers/check";

const router = Router();

router.get("/:checkParam", checkParamQuery);

export default router;
