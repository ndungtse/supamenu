import { Router } from "express";
import prisma from "../config/prisma";
import { UserRequest } from "../types";
import ApiResponse from "../utils/ApiResponse";
import { $Enums } from "@prisma/client";

const orderRouter = Router();

orderRouter.get("/myOrders", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Order'] */
  /* #swagger.security = [{
                "authToken": []
        }] */
  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        cart: {
          include: {
            items: {
              include: {
                item: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json(error);
  }
});

// place order
orderRouter.post("/placeOrder", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Order'] */
  /* #swagger.security = [{
                "authToken": []
        }] */
  try {
    const { cartId } = req.body;
    const cart = await prisma.cart.findFirst({
      where: {
        id: cartId,
      },
    });
    if (!cart)
      return res.status(404).json(new ApiResponse(null, "Cart not found"));
    // create order
    const order = await prisma.order.create({
      data: {
        userId: req.user.id,
        cartId,
        totalPrice: cart.totalPrice,
      },
    });
    // clear cart
    await prisma.cartItem.deleteMany({
      where: {
        cartId,
      },
    });
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json(error);
  }
});


// complete order
orderRouter.post("/completeOrder", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Order'] */
  /* #swagger.security = [{
                "authToken": []
        }] */
  try {
    const { orderId } = req.body;
    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
      },
    });
    if (!order)
      return res.status(404).json(new ApiResponse(null, "Order not found"));
    // update order status
    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: $Enums.Status.DELIVERED,
      },
    });
    res.status(200).json(updatedOrder);
  } catch (error: any) {
    res.status(500).json(error);
  }
});

export default orderRouter;