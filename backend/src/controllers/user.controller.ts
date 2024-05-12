import { Router } from "express";
import prisma from "../config/prisma";
import ApiResponse from "../utils/ApiResponse";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
    /* #swagger.tags = ['User'] */
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(new ApiResponse(users, "Users fetched successfully", true));
    }
    catch (error: any) {
        res.status(500).json(new ApiResponse(null, "Internal server error", false, error?.message));
    }
});

userRouter.get("/:id", async (req, res) => {
    /* #swagger.tags = ['User'] */
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id,
            },
        });
        if (!user)
            return res.status(404).json(new ApiResponse(null, "User not found", false));
        res.status(200).json(new ApiResponse(user, "User fetched successfully", true));
    }
    catch (error: any) {
        res.status(500).json(new ApiResponse(null, "Internal server error", false, error?.message));
    }
});

userRouter.put("/:id", async (req, res) => {
    /* #swagger.tags = ['User'] */
    try {
        const { email, fullName, phoneNumber } = req.body;
        const user = await prisma.user.update({
            where: {
                id: req.params.id,
            },
            data: {
                email,
                fullName,
                phoneNumber,
            },
        });
        res.status(200).json(new ApiResponse(user, "User updated successfully", true));
    }
    catch (error: any) {
        res.status(500).json(new ApiResponse(null, "Internal server error", false, error?.message));
    }
});

userRouter.delete("/:id", async (req, res) => {
    /* #swagger.tags = ['User'] */
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(new ApiResponse(null, "User deleted successfully", true));
    }
    catch (error: any) {
        res.status(500).json(new ApiResponse(null, "Internal server error", false, error?.message));
    }
});

export default userRouter;