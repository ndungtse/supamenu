import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { Request, Response } from "express";
import prisma from "../config/prisma";
import ApiResponse from "../utils/ApiResponse";
import { checkAdmin } from "../middlewares/admin.moddleware";

const RestRouter = Router();

RestRouter.get("/", authMiddleware, async (req: Request, res: Response) => {
  /* #swagger.tags = ['Restaurant'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const restaurants = await prisma.restaurant.findMany();
    res
      .status(200)
      .json(
        new ApiResponse(restaurants, "Restaurants fetched successfully", true)
      );
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

RestRouter.get("/byId/:id", authMiddleware, async (req: Request, res: Response) => {
  /* #swagger.tags = ['Restaurant'] */
  /* #swagger.security = [{
            "authToken": []
    }] */
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (!restaurant)
      return res
        .status(404)
        .json(new ApiResponse(null, "Restaurant not found", false));
    res
      .status(200)
      .json(
        new ApiResponse(restaurant, "Restaurant fetched successfully", true)
      );
  } catch (error: any) {
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

// create a new restaurant (admin only)
RestRouter.post(
  "/restaurant/create",
  checkAdmin,
  async (req: Request, res: Response) => {
    /* #swagger.tags = ['Restaurant'] */
    /* #swagger.security = [{
            "authToken": []
    }] */
    try {
      const { name, phoneNumber, address, image } = req.body;
      if (!name || !phoneNumber || !address || !image)
        return res.status(400).json({ message: "Please fill all fields" });
      const restaurant = await prisma.restaurant.create({
        data: {
          name,
          phoneNumber,
          address,
          image,
          rating: req.body.rating || 0,
        },
      });
      res
        .status(201)
        .json(
          new ApiResponse(restaurant, "Restaurant created successfully", true)
        );
    } catch (error: any) {
      res
        .status(500)
        .json(
          new ApiResponse(null, "Internal server error", false, error?.message)
        );
    }
  }
);

//edit restaurant (admin only)
RestRouter.put(
  "/restaurant/edit/:id",
  checkAdmin,
  async (req: Request, res: Response) => {
    /* #swagger.tags = ['Restaurant'] */
    /* #swagger.security = [{
            "authToken": []
    }] */
    try {
      const { name, phoneNumber, address, image } = req.body;
      if (!name || !phoneNumber || !address || !image)
        return res.status(400).json({ message: "Please fill all fields" });
      const restaurant = await prisma.restaurant.update({
        where: {
          id: req.params.id,
        },
        data: {
          name,
          phoneNumber,
          address,
          image,
        },
      });
      res
        .status(200)
        .json(
          new ApiResponse(restaurant, "Restaurant updated successfully", true)
        );
    } catch (error: any) {
      res
        .status(500)
        .json(
          new ApiResponse(null, "Internal server error", false, error?.message)
        );
    }
  }
);

// create many restaurants (admin only)
RestRouter.post(
  "/restaurant/create/many",
  checkAdmin,
  async (req: Request, res: Response) => {
    /* #swagger.tags = ['Restaurant'] */
    /* #swagger.security = [{
            "authToken": []
          }]
     */
    try {
      const { restaurants } = req.body;
      if (!restaurants)
        return res.status(400).json({ message: "Please fill all fields" });
      const _restaurants = restaurants.map((restaurant: any) => {
        return {
          name: restaurant.name,
          phoneNumber: restaurant.phoneNumber,
          address: restaurant.address,
          image: restaurant.image,
          rating: restaurant.rating || 0,
        };
      });
      const createdRestaurants = await prisma.restaurant.createMany({
        data: _restaurants,
      });
      res
        .status(201)
        .json(
          new ApiResponse(
            createdRestaurants,
            "Restaurants created successfully",
            true
          )
        );
    } catch (error: any) {
      console.log(error);
      res
        .status(500)
        .json(
          new ApiResponse(null, "Internal server error", false, error?.message)
        );
    }
  }
);

// get nearby restaurants (which includes the user's location) location is string form query
RestRouter.get(
  "/nearby",
  authMiddleware,
  async (req: Request, res: Response) => {
    /* #swagger.tags = ['Restaurant'] */
    /* #swagger.security = [{
            "authToken": []
    }] */
    try {
      const location = req.query.location as string;
      if (!location)
        return res.status(400).json({ message: "Please provide location" });
      const restaurants = await prisma.restaurant.findMany({
        where: {
          address: {
            contains: location,
          },
        },
      });
      res
        .status(200)
        .json(
          new ApiResponse(restaurants, "Restaurants fetched successfully", true)
        );
    } catch (error: any) {
      console.log(error);
      res
        .status(500)
        .json(
          new ApiResponse(null, "Internal server error", false, error?.message)
        );
    }
  }
);


export default RestRouter;
