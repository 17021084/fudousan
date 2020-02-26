const pool = require('./pool');

var userModel={};

// chua check
userModel.getAll=()=>{
    return new Promise( (reject, resolve)=>{

        pool.query( "select * from user ",(err, result)=>{
            if(err) {
                return reject(err);
            }else{
                return resolve(result);
            }


        });
    });

}

module.exports = userModel;