const studentService = require('../services/student.service');
import { Request, Response } from "express";



class StudentController{
    async searchBook(req: Request, res: Response){
        try {
            const name = req.params.id;
            const result = await studentService.searchBook(name);
            res.json(result);
    
        } catch (err: any) {
            res.status(500).json({message: 'An error occurred while search books', err});
        }
    }

    async viewBook(req: Request, res: Response){
        try {
            const result = await studentService.viewBook();
            res.json(result);
        } catch (err: any) {
            res.status(500).json({message: 'An error occurred while view books', err});
        }
    }

    async borrowBook(req: Request, res: Response){
        try {
            const book_id = req.params.book_id;
            const result = await studentService.borrowBook(book_id);
            res.json(result);
        } catch (err: any) {
            res.status(500).json({message: 'An error occurred while borrow book', err});
        }
    }

    async returnBook(req: Request, res: Response){
        try {
            const book_id = req.params.book_id;
            const result = await studentService.returnBook(book_id);
            res.json(result);
        } catch (err:any) {
            res.status(500).json({message: 'An error occurred while return book', err});
        }
    }
}

module.exports = new StudentController();