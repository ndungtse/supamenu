import { Router } from "express";
import { UserRequest } from "../types";
import prisma from "../config/prisma";

const cartRouter = Router();

cartRouter.get("/", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Cart'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const cart = await prisma.cart.findMany({
      where: {
        userId: req.user.id,
      },
    });
    res.status(200).json(cart);
  } catch (error: any) {
    res.status(500).json(error);
  }
});

// get my cart
cartRouter.get("/myCart", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Cart'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const cart = await prisma.cart.findFirst({
      where: {
        userId: req.user.id,
      },
      include: {
        items: {
          include: {
            item: true,
          },
        },
      },
    });
    res.status(200).json(cart);
  } catch (error: any) {
    res.status(500).json(error);
  }
});

cartRouter.post("/addToCart", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Cart'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const { itemId, quantity } = req.body;
    // find user's cart, create one if not exists
    let cart = await prisma.cart.findFirst({
      where: {
        userId: req.user.id,
      },
      include: {
        items: true,
      },
    });

    if (!cart) {
      cart = (await prisma.cart.create({
        data: {
          userId: req.user.id,
          totalPrice: 0, // Initialize total price as 0
        },
      })) as any;
    }

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Create a new cart item
    const cartItem = await prisma.cartItem.create({
      data: {
        itemId,
        quantity,
        cartId: cart.id,
      },
      include: {
        item: true,
      },
    });

    // Update the total price of the cart
    const totalPrice =
      cart.totalPrice + cartItem.quantity * cartItem.item.priceInRwf;
    await prisma.cart.update({
      where: { id: cart.id },
      data: { totalPrice },
    });

    res.status(201).json(cartItem);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

cartRouter.delete(
  "/removeFromCart/:cartItemId",
  async (req: UserRequest, res) => {
    /* #swagger.tags = ['Cart'] */
    /* #swagger.security = [{
            "authToken": []
    }] */
    try {
      const { cartItemId } = req.params;
      const cartItem = await prisma.cartItem.findUnique({
        where: { id: cartItemId },
        include: {
          cart: true,
          item: true,
        },
      });

      if (!cartItem) {
        return res.status(404).json({ error: "Cart item not found" });
      }

      await prisma.cartItem.delete({
        where: { id: cartItemId },
      });

      // Update the total price of the cart
      const totalPrice =
        cartItem.cart.totalPrice - cartItem.quantity * cartItem.item.priceInRwf;
      await prisma.cart.update({
        where: { id: cartItem.cartId },
        data: { totalPrice },
      });

      res.status(200).json({ message: "Cart item removed successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default cartRouter;