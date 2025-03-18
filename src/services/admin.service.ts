import { IBooks } from "../repositories/admin.repository";

const AdminRepository = require('../repositories/admin.repository');

class AdminService{

    async addBook(book_data: IBooks){
        return await AdminRepository.addBook(book_data);
    }

    async updateBook(book_data: IBooks){
        return await AdminRepository.updateBook(book_data);
    }

    async removeBook(book_id: number){
        return await AdminRepository.removeBook(book_id);
    }
}

module.exports = new AdminService();