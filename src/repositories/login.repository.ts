const {sql, poolPromise: loginPoolPromise} = require('../config/database')
const jwt = require('jsonwebtoken');

const secretKey = "lavanya";

class LoginRepo{
    async loginUser(name:string, email: string){
        const pool = await poolPromise;
        const result  = await pool.request().input('name',name).input('email',email).query(`select name, userEmail from user2008 where name = @name and userEmail = @email; `);
        if (!result) return "User is not register please enter a valid credential..";
        const token = jwt.sign({name:name,email:email},secretKey,{expiresIn:'1h'});
        return token
    }
}

module.exports = new LoginRepo();