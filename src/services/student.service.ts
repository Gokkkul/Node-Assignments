const studentRepo = require('../repositories/student.repository')

class StudentService{
    async searchBook(name:string){
        return await studentRepo.searchBook(name);
    }

    async viewBook(){
        return await studentRepo.viewBook();
    }

    async borrowBook(book_id: number){
        return await studentRepo.borrowBook(book_id);
    }

    async returnBook(book_id: number){
        return await studentRepo.returnBook(book_id);
    }

}