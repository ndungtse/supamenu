import { Router } from "express";
import appRouter from "./controllers/app.controller";

const router = Router();

router.use("/", appRouter);

export default router