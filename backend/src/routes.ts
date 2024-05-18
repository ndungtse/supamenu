import { Router } from "express";
import AuthRouter from "./controllers/auth.controller";
import userRouter from "./controllers/user.controller";
import { authMiddleware } from "./middlewares/auth.middleware";
import RestRouter from "./controllers/restaurant.controller";
import adminRouter from "./controllers/admin.controller";
import itemRouter from "./controllers/item.controller";
import cartRouter from "./controllers/cart.controller";
import orderRouter from "./controllers/order.controller";

const router = Router();

router.use("/api/auth", AuthRouter);
router.use("/api/user", authMiddleware, userRouter);
router.use("/api/restaurant", RestRouter);
router.use("/api/admin", adminRouter);
router.use("/api/item", itemRouter);
router.use("/api/cart", authMiddleware, cartRouter);
router.use("/api/order", authMiddleware, orderRouter);

export default router;
