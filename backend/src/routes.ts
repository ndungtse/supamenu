import { Router } from "express";
import AuthRouter from "./controllers/auth.controller";
import userRouter from "./controllers/user.controller";
import { authMiddleware } from "./middlewares/auth.middleware";

const router = Router();

router.use("/api/auth", AuthRouter);
router.use("/api/user", authMiddleware, userRouter);

export default router;
