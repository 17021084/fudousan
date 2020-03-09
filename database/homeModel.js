const pool = require('./pool');




const getHomes = () => {
    return new Promise((resolve,reject) => {
        pool.query( "select u.FullName ,u.Email , h.* from home h inner join user u on h.UserId= u.UserId ", (err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

const getHomeById = (id) => {
    return new Promise((resolve,reject) => {
        pool.query( "select u.FullName ,u.Email , h.* from home h inner join user u on h.UserId= u.UserId  where h.HomeId = ?  ", [id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}
const getHomeByUsersId = (id) => {
    return new Promise((resolve,reject) => {
        pool.query( "select u.FullName ,u.Email , h.* from home h inner join user u on h.UserId= u.UserId  where u.UserId = ?  ", [id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}


const getHomeByUsersId_HomeId = (Usersid , HomeId) => {
    let sql=`select u.FullName ,u.Email , h.* from home h inner join user u on h.UserId= u.UserId  
                where u.UserId = ? and h.HomeId =?  `
    return new Promise((resolve,reject) => {
        pool.query( sql, [Usersid , HomeId],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}


// const updateHomeById = (id ,per = 1) => {
//     return new Promise((resolve,reject) => {
//         pool.query( `update news set Permission={per}  where NewsId = ?  `, [id],(err, result)=>{
//             if(err) {
//                  reject(err);
//             }else{
               
//                  resolve(result);
//             }
//         });
//     })
// }

// const getHomesById = (id) => {
//     return new Promise((resolve,reject) => {
//         pool.query( "delete from news   where NewsId = ?  ", [id],(err, result)=>{
//             if(err) {
//                  reject(err);
//             }else{
               
//                  resolve(result);
//             }
//         });
//     })
// }


const insertHome = ( col, data  ) => {
    let sql = `insert into  home${col}    values ${data} `;
    console.log('sql :',sql);
    return new Promise((resolve,reject) => {
        pool.query(sql ,(err, result)=>{
            if(err) {
                 reject(err);
            }else{
                console.log(sql);
                 resolve(result);
            }
        });
    })
    
}


const deleteByHomeId = (HomeId) => {
    return new Promise((resolve,reject) => {
        pool.query( " delete from home   where HomeId = ?  ", [HomeId],(err, result)=>{
            if(err) {
                 reject(err);
            }else{

                 resolve(result);
            }
        });
    })
}


const updatePermissionHome = (id ,per = 0) => {
	let sql=  `update home set Permission=?  where HomeId = ?  `;
	return new Promise((resolve,reject) => {
        pool.query(sql, [per , id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{

                 resolve(result);
            }
        });
    })
}

module.exports = {
    getHomes:getHomes,
    insertHome:insertHome,
    getHomeById:getHomeById,
    getHomeByUsersId:getHomeByUsersId,
    deleteByHomeId:deleteByHomeId,
    updatePermissionHome:updatePermissionHome,
    getHomeByUsersId_HomeId:getHomeByUsersId_HomeId
};


