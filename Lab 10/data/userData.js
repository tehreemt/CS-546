const bcrypt = require('bcryptjs');
const users = require('./users');
let data;

async function getUserData(username){
for (let i=0; i< users.length; i++){
    if(username==users[i].username){
      data=users[i];
      break;
    }
}
return data;
}

async function authenticate(username,password){
for(let j=0;j<users.length;j++){
    if(username==users[j].username){
        let hashPwd=users[j].hashedPassword;
        if(bcrypt.compareSync(password,hashPwd)){
            return true;
        };
    }
}
}

module.exports= {getUserData,authenticate}