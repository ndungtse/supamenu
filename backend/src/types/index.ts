import { Request } from 'express';

export interface UserRequest extends Request {
    user?: any;
}

export interface UserToken {
    id: string;
    email: string;
}