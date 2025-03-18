
const loginRepo = require('../repositories/login.repository');

class LoginService{
    async loginUser(name:string,email:string){
        return await loginRepo.loginUser(name,email);
    }
}

module.exports = new LoginService()

export {}