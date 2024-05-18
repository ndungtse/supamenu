import { Router } from "express";
import prisma from "../config/prisma";
import { UserRequest } from "../types";
import ApiResponse from "../utils/ApiResponse";

const itemRouter = Router();

itemRouter.get("/", async (req, res) => {
  /* #swagger.tags = ['Item'] */
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json(error);
  }
});

itemRouter.post("/create", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Item'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const { name, price, description, image } = req.body;
    const item = await prisma.item.create({
      data: {
        name,
        priceInRwf: price,
        price,
        description,
        image,
        imagePath: image,
      },
    });
    res.status(201).json(new ApiResponse(item, "Item created successfully", true));
  } catch (error: any) {
    res.status(500).json(error);
  }
});

export default itemRouter;