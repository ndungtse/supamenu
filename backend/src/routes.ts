import { Router } from "express";
import appRouter from "./controllers/app.controller";
import AuthRouter from "./controllers/auth.controller";
import userRouter from "./controllers/user.controller";

const router = Router();

router.use("/api/auth", AuthRouter);
router.use("/api/user", userRouter);

export default router;
