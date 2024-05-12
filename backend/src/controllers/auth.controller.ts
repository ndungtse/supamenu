import { Router } from "express";
import prisma from "../config/prisma";
import ApiResponse from "../utils/ApiResponse";
import bcrypt from "bcrypt";

const AuthRouter = Router();

AuthRouter.post("/register", async (req, res) => {
  /*
    #swagger.tags = ['Auth']
     */
  try {
    const { email, password, phoneNumber, fullName } = req.body;
    if (!email || !password || !phoneNumber || !fullName)
      return res.status(400).json({ message: "Please fill all fields" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        phoneNumber,
        fullName,
      },
    });
    res
      .status(201)
      .json(new ApiResponse(user, "User created successfully", true));
  } catch (error: any) {
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

AuthRouter.post("/login", async (req, res) => {
  /*
  #swagger.tags = ['Auth']
    */
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Please fill all fields" });
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid credentials" });
    res
      .status(200)
      .json(new ApiResponse(user, "User logged in successfully", true));
  } catch (error: any) {
    res
      .status(500)
      .json(
        new ApiResponse(null, "Internal server error", false, error?.message)
      );
  }
});

export default AuthRouter;
