import { NextFunction, Response } from "express";
import { AuthRequest } from "../types/auth.request";
// import { error } from "console";

const {nextFunction, Response: ExpressResponse} = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const authenticateUser = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) =>{
    const authHeader = (req.headers as unknown as Record<string,string>)["autherization"];
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({error:"Access denied. No token Provided."});
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token,secretKey);
        console.log("this is from user Middleware",decoded);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({error:"Invalid token......"});
    }
};


