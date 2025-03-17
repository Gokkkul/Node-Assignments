const { poolPromise } = require("../config/database");

export interface IBooks {
  id: number;
  name: string;
  author: string;
  quantity: number;
  current_quantity: number;
  show: number;
}

class AdminRepository {
  async addBook(data: IBooks) {
    const pool = await poolPromise;
    await pool.request()
    .input('name', data.name)
    .input('author', data.author)
    .input('quantity', data.quantity)
    .query(
        `insert into book2008 (id, name, author, quantity, current_quantity) values (@id, @name, @author, @quantity, @quantity)`
    );

    return "Book added successfully...!";
  }

  async updateBook(data: IBooks) {
    const pool = await poolPromise;
    await pool
      .request()
      .input("id", data.id)
      .input("name", data.name)
      .input("author", data.author)
      .input("quantity", data.quantity)
      .query(
        `update book2008 set name = @name, author = @author, quantity = @quantity where id = @id )`
      );
    return "Book updated successfully...!";
  }

  async removeBook(id: number) {
    const pool = await poolPromise;
    await pool
      .request()
      .input("id", id)
      .query(`update book2008 set show = 0 where id = @id )`);
    return "Book removed successfully...!";
  }
}

module.exports = new AdminRepository();
