import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserRequest } from '../types';
import ApiResponse from '../utils/ApiResponse';
import prisma from '../config/prisma';

export const checkAdmin = async (req: UserRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json(new ApiResponse(null, 'Access Denied', false));

    try {
        const verified: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        const user = await prisma.user.findUnique({
            where: {
                id: verified.id
            }
        });
        if(!user) return res.status(404).json(new ApiResponse(null, 'User not found', false))
        if(user.role !== 'ADMIN') return res.status(401).json(new ApiResponse(null, 'You are not authorized to perform this action', false))
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json(new ApiResponse(null, 'Invalid Token', false));
    }
}