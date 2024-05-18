import { Router } from "express";
import prisma from "../config/prisma";
import ApiResponse from "../utils/ApiResponse";
import { checkAdmin } from "../middlewares/admin.moddleware";

const adminRouter = Router();

adminRouter.get("/", checkAdmin, async (req, res) => {
  /* #swagger.tags = ['Admin'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const users = await prisma.user.findMany();
    res
      .status(200)
      .json(new ApiResponse(users, "Users fetched successfully", true));
  } catch (error: any) {
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

// create a new admin, must provide ADMIN_SECRET secret key
adminRouter.post("/create-from-token", async (req, res) => {
  /* #swagger.tags = ['Admin'] */
  try {
    const { email, password, phoneNumber, fullName, secret } = req.body;
    if (secret !== process.env.ADMIN_SECRET)
      return res.status(401).json(new ApiResponse(null, "Unauthorized", false));
    const user = await prisma.user.create({
      data: {
        email,
        password,
        phoneNumber,
        fullName,
        role: "ADMIN",
        cart: {
          create: {
            totalPrice: 0,
          },
        },
      },
    });
    res
      .status(201)
      .json(new ApiResponse(user, "Admin created successfully", true));
  } catch (error: any) {
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

//create a new admin by an existing admin
adminRouter.post("/", checkAdmin, async (req, res) => {
  /* #swagger.tags = ['Admin'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const { email, password, phoneNumber, fullName } = req.body;
    const user = await prisma.user.create({
      data: {
        email,
        password,
        phoneNumber,
        fullName,
        role: "ADMIN",
        cart: {
          create: {
            totalPrice: 0,
          },
        },
      },
    });
    res
      .status(201)
      .json(new ApiResponse(user, "Admin created successfully", true));
  } catch (error: any) {
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

adminRouter.put("/:id", checkAdmin, async (req, res) => {
  /* #swagger.tags = ['Admin'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const { email, password, phoneNumber, fullName } = req.body;
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        email,
        password,
        phoneNumber,
        fullName,
      },
    });
    res
      .status(200)
      .json(new ApiResponse(user, "Admin updated successfully", true));
  } catch (error: any) {
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

export default adminRouter;
