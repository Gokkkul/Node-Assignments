import { IBooks } from "../repositories/admin.repository";

const AdminRepository = require('../repositories/admin.repository');

class AdminService{

    async addBook(data: IBooks){
        return await AdminRepository.addBook(data);
    }

    async updateBook(data: IBooks){
        return await AdminRepository.updateBook(data);
    }

    async removeBook(id: number){
        return await AdminRepository.removeBook(id);
    }
}

module.exports = new AdminService();