const pool = require('./pool');

const getMeetings = () => {
    return new Promise((resolve,reject) => {
        pool.query( "select  h.HomeId , h.HomeName , m.* from meeting m inner join home h on m.HomeId = h.HomeId ", (err, result)=>{
            if(err) {
                 reject(err);
            }else{

                 resolve(result);
            }
        });
    })
}

// const getMeetingsById = (id) => {
//     return new Promise((resolve,reject) => {
//         pool.query( "select  u.FullName , u.Email , n.* from news n inner join user u on u.UserId = n.UserId  where u.NewsId = ?  ", [id],(err, result)=>{
//             if(err) {
//                  reject(err);
//             }else{

//                  resolve(result);
//             }
//         });
//     })
// }

// const updateMeetingsById = (id ,per = 1) => {
//     return new Promise((resolve,reject) => {
//         pool.query( `update meeting set Permission={per}  where NewsId = ?  `, [id],(err, result)=>{
//             if(err) {
//                  reject(err);
//             }else{

//                  resolve(result);
//             }
//         });
//     })
// }

// const deleteMeetingsById = (id) => {
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

const insertMeetings = (arrayBooking, per = 1) => {
	return new Promise((resolve, reject) => {
        let sql = `insert into meeting 
                (HomeId ,Permission,	MeetingDate,duaration,	EmailBooker,	Message)
                 Values
                 (? ,0,	?,?,?,?)
                   `;
                //    [ HomeId ,MeetingDate,EmailBooker,duaration,Message ]
		pool.query(sql,arrayBooking , (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};

module.exports = {
	getMeetings: getMeetings,
	// getNewsById: getNewsById,
	// updateNewsById: updateNewsById,
    // deleteNewsById: deleteNewsById,
    insertMeetings:insertMeetings
};
