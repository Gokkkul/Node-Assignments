const LoginService = require('../services/login.service');
import { Request,Response } from "express";

class LoginController{
    async loginUser(req:Request, res:Response){
        const data = req.body;
        const result = await LoginService.loginUser(data.name,data.email);
        res.send(result);
    }
}

module.exports = new LoginController()