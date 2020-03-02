const pool = require('./pool');

// okie 
const getUsers = () => {
    return new Promise((resolve,reject) => {
        pool.query( "select * from user", (err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

//oke
const getUserById = (id) => {
    return new Promise((resolve,reject) => {
        pool.query( "select  * from user   where UserId = ?  ", [id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}
// oke
const getUserByEmail = (mail) => {
    return new Promise((resolve,reject) => {
        pool.query( "select  * from user   where Email = ?  ", [mail],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

	



//  Nen lam kieu nay 
/**
 * 
//role =0 : users
//role #0 : admin

 * @param {*} userArray = [ Password , FullName, Dob ,Phone,  UserId ]
 * @param {*} role  defautl =0
 */
const updateProfileById = (user ,role = 0) => {
    let {FullName ,Phone, Dob, UserId}=user;


    
    let sql = ` update user set    Role=${role}, FullName='${FullName}' , Dob= '${Dob}' ,Phone='${Phone}' where UserId = ${UserId}  `
    return new Promise((resolve,reject) => {
        pool.query( sql,(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

const updatePasswordById = (user ,role = 0) => {

    let {Password, UserId}=user;
    let sql = ` update user set    Role=${role}, Password='${Password}' where UserId = ${UserId}  `
    return new Promise((resolve,reject) => {
        pool.query( sql,(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}







/**
 * 
 * @param {*} user  [Email,PassWord , FullName, Dob, Phone ]
 * @param {*} role 
 */

const insertUser = (user,role=0) => {
    return new Promise((resolve,reject) => {
        let sql = `insert into user (Email,PassWord,Role , FullName, Dob, Phone  ) 
        values 
        (?,?,${role},?,?,? )`;
        pool.query( sql, user,(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}





module.exports = {
    getUsers:getUsers,
    getUserById:getUserById,
    getUserByEmail:getUserByEmail,
    insertUser:insertUser,
    updateProfileById:updateProfileById,
    updatePasswordById:updatePasswordById
};


