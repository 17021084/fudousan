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




// module.exports = newsModel;
// exports.getNews = getNews;

module.exports = {
    getHomes:getHomes,
    getHomeById:getHomeById,
  
};


