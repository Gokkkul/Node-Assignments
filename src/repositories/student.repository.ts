const { poolPromise } = require('../config/database');

class StudentRepository{
    async searchBook(name:string){
        const pool = await poolPromise;
        await pool.request()
        .input('name', name)
        .query(
            `select * from book2008 where name = @name`
        )
    }

    async viewBook(){
        const pool = await poolPromise;
        const result = await pool.request().query('select * from book2008');
        return result.recordset;
    }

    async borrowBook(book_id: number){
        const pool = await poolPromise;
        await pool.request()
        .input('id', book_id)
        .query(
            'update book2008 set current_quantity = current_quantity - 1 where id = @id'
        )

        await pool.request()
        .input()
        .query()
    }

    async returnBook(book_id: number){
        const pool = await poolPromise;
        await pool.request()
        .input('id', book_id)
        .query(
            'update book2008 set current_quantity = current_quantity + 1 where id = @id'
        )

        await pool.request()
        .input()
        .query()
    }
}
module.exports = new StudentRepository();