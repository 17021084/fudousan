const pool = require('./pool');

const getMeetings = () => {
	return new Promise((resolve, reject) => {
		pool.query(
			'select  u.Email ,  h.HomeId , h.HomeName , m.* from meeting m inner join home h on m.HomeId = h.HomeId inner join user u on u.UserId = h.UserId ',
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			}
		);
	});
};

const getMeetingsByUserId = (Userid) => {
    return new Promise((resolve,reject) => {

		let sql ="select  m.* ,h.HomeName , h.Address  from meeting m inner join home h on m.HomeId = h.HomeId  inner join user u on u.UserId = h.UserId     where  u.UserId = ?  "

        pool.query(sql , [Userid],(err, result)=>{
            if(err) {
                 reject(err);
            }else{

                 resolve(result);
            }
        });
    })
}

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


const deleteByMeetingId_UserId = (UserId,MeetingId) => {

	let sql = " delete from meeting  where HomeId in ( select HomeId from home where UserId =?   ) and MeetingId =? "

	return new Promise((resolve,reject) => {
		
		pool.query( sql, [UserId, MeetingId ],(err, result)=>{
            if(err) {
                 reject(err);
            }else{

                 resolve(result);
            }
        });
    })
}
const deleteByMeetingId = (meetingId) => {
    return new Promise((resolve,reject) => {
        pool.query( " delete from meeting   where MeetingId = ?  ", [meetingId],(err, result)=>{
            if(err) {
                 reject(err);
            }else{

                 resolve(result);
            }
        });
    })
}

const insertMeetings = (arrayBooking, per = 0) => {
	return new Promise((resolve, reject) => {
		// [ HomeId,   ...  ,date, Email, duaration , Message  ];
		let sql = `insert into meeting 
                (HomeId ,Permission, MeetingDate, EmailBooker ,Duration , Message)
                 Values
                 (? ,${per},?, ? , ? , ?)
                   `;
		//    [ HomeId ,MeetingDate,EmailBooker,duaration,Message ]
		pool.query(sql, arrayBooking, (err, result) => {
			if (err) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
};



const updatePermissionMeetings = (id ,per = 0) => {
	let sql=  `update meeting set Permission=?  where MeetingId = ?  `;
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
	getMeetings: getMeetings,
	getMeetingsByUserId: getMeetingsByUserId,
	// updateNewsById: updateNewsById,
	deleteByMeetingId: deleteByMeetingId,
	deleteByMeetingId_UserId:deleteByMeetingId_UserId,
	insertMeetings: insertMeetings,
	updatePermissionMeetings:updatePermissionMeetings
};
