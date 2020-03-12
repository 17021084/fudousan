const pool = require('./pool');


// var newsModel={}
// newsModel.getAll=()=>{
//     return new Promise( (reject, resolve)=>{
//         pool.query( "select * from news ",(err, result)=>{
//             if(err) {
//                  reject(err);
//             }else{
//                 console.log('result')
//                  resolve(result);
//             }
//         });
//     });
// }

const getNews = () => {
    return new Promise((resolve,reject) => {
        pool.query( "select  u.FullName , u.Email , n.* from news n inner join user u on u.UserId = n.UserId ", (err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

//user Id
const getNewsByUsersId = (id) => {
    return new Promise((resolve,reject) => {
        pool.query( "select u.UserId , u.FullName , u.Email , n.* from news n inner join user u on u.UserId = n.UserId  where u.UserId = ?  order by CreatedDate desc ", [id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

//NewsId
const getNewsByNewsId = (id) => {
    return new Promise((resolve,reject) => {
        pool.query( "select u.UserId , u.FullName , u.Email , n.* from news n inner join user u on u.UserId = n.UserId  where n.NewsId = ?  ", [id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

//NewsId
/**
 * 
 * @param {*} Newsid 
 * @param {*} UserId 
 */
const getNewsByNewsId_UserId = (NewsId , UserId) => {
    return new Promise((resolve,reject) => {
        pool.query( "select u.UserId , u.FullName , u.Email , n.* from news n inner join user u on u.UserId = n.UserId  where n.NewsId = ? and u.UserId =?  ", [NewsId,UserId],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}


const updateNewsById = (News ,per = 0) => {
    let {NewsId , Title, Place , Image, Brief, Content} = News;
    let sql=`update news set  Title =?, Place =?, Image =?, Brief =?, Content =?  where NewsId = ?  `
    return new Promise((resolve,reject) => {
        pool.query( sql,[  Title, Place , Image, Brief, Content ,NewsId   ],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}

const updatePermissionNews = (id ,per = 0) => {
    return new Promise((resolve,reject) => {
        pool.query( `update news set Permission=${per}  where NewsId = ?  `, [id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}



const deleteNewsById = (id) => {
    return new Promise((resolve,reject) => {
        pool.query( "delete from news   where NewsId = ?  ", [id],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}



const insertNews = (news ,per = 0) => {

    return new Promise((resolve,reject) => {
        let {UserId  , Brief ,Title,Content , Image ,Place} = news;    
        
        pool.query( `insert into   news (UserId, Permission , Brief ,Title ,Content , Image ,Place) values (?,?,?,?,?,?,?) `, [UserId ,per , Brief ,Title , Content , Image ,Place],(err, result)=>{
            if(err) {
                 reject(err);
            }else{
               
                 resolve(result);
            }
        });
    })
}



// module.exports = newsModel;
// exports.getNews = getNews;

module.exports = {
    getNews:getNews,
    getNewsByUsersId:getNewsByUsersId,
    getNewsByNewsId:getNewsByNewsId,
    updateNewsById:updateNewsById,
    getNewsByNewsId_UserId:getNewsByNewsId_UserId,
    updatePermissionNews:updatePermissionNews,
    deleteNewsById:deleteNewsById,
    insertNews:insertNews
};


