import { Router } from "express";
import prisma from "../config/prisma";
import { UserRequest } from "../types";
import ApiResponse from "../utils/ApiResponse";

const menuRouter = Router();

menuRouter.get("/", async (req, res) => {
  /* #swagger.tags = ['Menu'] */
  try {
    const items = await prisma.menu.findMany();
    res.status(200).json(items);
  } catch (error: any) {
    res.status(500).json(error);
  }
});

menuRouter.post("/create", async (req: UserRequest, res) => {
  /* #swagger.tags = ['Menu'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
//   try {
//     const { name, price, description, image } = req.body;
//     const item = await prisma.menu.create({
//       data: {
//         name,
//         // priceInRwf: price,
//         // price,
//         // description,
//         // image,
//         // imagePath: image,
//       },
//     });
//     res.status(201).json(new ApiResponse(item, "Item created successfully", true));
//   } catch (error: any) {
//     res.status(500).json(error);
//   }
});