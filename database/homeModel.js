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


const filterHome = (data) => {
    
    let min=0, max=100000000000;

    let { Address , ForRent ,ForSale , YearBuiltFrom , YearBuiltTo , AreaFrom , AreaTo , FacilitesFrom ,FacilitesTo , TranpostationFrom , TranpostationTo  ,ParkingLotFrom,ParkingLotTo,SchoolFrom,SchoolTo } = data
   
    YearBuiltFrom = YearBuiltFrom || min;
    YearBuiltTo = YearBuiltTo|| max;
    AreaFrom = AreaFrom||min;
    AreaTo = AreaTo ||max;
    FacilitesFrom = FacilitesFrom||min;
    FacilitesTo =FacilitesTo||max ;
    TranpostationFrom= TranpostationFrom ||min ;
    TranpostationTo = TranpostationTo || max;
    ParkingLotFrom = ParkingLotFrom||min;
    ParkingLotTo = ParkingLotTo ||max;
    SchoolFrom= SchoolFrom||min;
    SchoolTo=SchoolTo ||max;    
    let Purpose;
    if (ForRent && ForSale) { Purpose =' '}
    else if (ForSale){
        Purpose=`Purpose = "ForSale"`;
    }else{
        Purpose=`Purpose = "ForRent"`;
    }
    if( Address ){
        Address = ` Address= "${Address}" `;
    }else{
        Address = `  ${true} `;
    }
    

    let sql = `select u.FullName ,u.Email , h.* from home h inner join user u on h.UserId= u.UserId
            where        
             YearBuilt >= ${YearBuiltFrom}   and  YearBuilt <= ${YearBuiltTo}   and
             Area      >= ${AreaFrom}   and  Area      <= ${AreaTo}   and           
             (DepartmentStore +Mall +PublicOffice +Other +Hospital +Park) >= ${FacilitesFrom}    and    (DepartmentStore +Mall +PublicOffice +Other +Hospital +Park) <= ${FacilitesTo}   and
             ( BusStop + Subway) >= ${TranpostationFrom}   and  ( BusStop + Subway) <= ${TranpostationTo}   and
             (Ground + Basement) >= ${ParkingLotFrom}    and  (Ground + Basement) <= ${ParkingLotTo}   and
             (Middle + University + High + Elementary) >= ${SchoolFrom}    and  (Middle + University + High + Elementary) <= ${SchoolTo} and
             ${Address} and
             ${Purpose}

    `;
        
    // console.log(sql);

    return new Promise((resolve,reject) => {
        pool.query(sql ,(err, result)=>{
            if(err) {
                 reject(err);
            }else{
                
                 resolve(result);
            }
        });
    })
}


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

const deleteHomebyHomeId_UserId = (HomeId,UserId) => {
    return new Promise((resolve,reject) => {
        pool.query( " delete from home   where HomeId = ? and UserId=? ", [HomeId ,UserId],(err, result)=>{
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

const updateHomebyHomeId_UserId = (SqlUpdate,HomeId,UserId) => {

    let sql=  `update home set ${SqlUpdate} where UserId = ${UserId} and HomeId=${HomeId}`;
    // console.log( 'sql',sql);
	return new Promise((resolve,reject) => {
        pool.query(sql,(err, result)=>{
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
    filterHome:filterHome,
    insertHome:insertHome,
    getHomeById:getHomeById,
    getHomeByUsersId:getHomeByUsersId,
    deleteByHomeId:deleteByHomeId,
    deleteHomebyHomeId_UserId:deleteHomebyHomeId_UserId,
    updatePermissionHome:updatePermissionHome,
    getHomeByUsersId_HomeId:getHomeByUsersId_HomeId,
    updateHomebyHomeId_UserId:updateHomebyHomeId_UserId
};


