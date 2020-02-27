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

	

/**
 * 
//role =0 : users
//role #0 : admin

 * @param {*} userArray = [ Password , FullName, Dob ,Phone,  UserId ]
 * @param {*} role  defautl =0
 */
const updateUserById = (userArray ,role = 0) => {
    return new Promise((resolve,reject) => {
        pool.query( `update user set    Password =? , Role=${role}, FullName=?, Dob=? ,Phone=? where UserId = ?  `, userArray,(err, result)=>{
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
    updateUserById:updateUserById,
    insertUser:insertUser
};


