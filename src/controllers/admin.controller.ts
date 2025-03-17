const adminService = require('../services/admin.service');
import { Request, Response } from "express";



class AdminController{
    async addBook(req: Request, res: Response){
        try {
            const data = req.body;
            
            const addBook = await adminService.addBook({id: data.id, name: data.name, author: data.author, quantity: data.quantity});
        } catch (err: any) {
            res.status(500).json({message: 'An error occurred while adding books', err});
        }
    }

    async updateBook(req: Request, res: Response){
        try {
            const data = req.body;
            const updateBook = await adminService.updateBook({id: data.id, name: data.name, author: data.author, quantity: data.quantity})
        } catch (err: any) {
            res.status(500).json({message: 'An error occurred while updating books', err});
        }
    }

    async removeBook(req: Request, res: Response){
        try {
            const data = req.body;
            const removeBook = await adminService.removeBook({id: data.id})
        } catch (err: any) {
            res.status(500).json({message: 'An error occurred while updating books', err});
        }
    }
}

module.exports = new AdminController();