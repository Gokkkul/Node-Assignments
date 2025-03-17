const { poolPromise } = require('../config/database');

class StudentRepository{
    async searchBook(name:string){
        const pool = await poolPromise;
        await pool.request()
        .input('name', name)
        .query(
            `select * from books_tbl where name = @name`
        )
    }

    async borrowBook(id: number){
        const pool = await poolPromise;
        await pool.request()
        .input('id', id)
        .query(
            'update books_tbl set quantity = quantity - 1 where id = @id'
        )

        await pool.request()
        .input()
        .query()
    }

    async returnBook(id: number){
        const pool = await poolPromise;
        await pool.request()
        .input('id', id)
        .query(
            'update books_tbl set quantity = quantity + 1 where id = @id'
        )

        await pool.request()
        .input()
        .query()
    }

}