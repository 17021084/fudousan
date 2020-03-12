const { getMeetings ,updatePermissionMeetings,deleteByMeetingId } = require('../../database/meetingModel');
const {getHomes , deleteByHomeId ,updatePermissionHome} = require('../../database/homeModel');
const {getNews , deleteNewsById ,updatePermissionNews} = require('../../database/newsModel');
const {getUsers} = require('../../database/userModel');
const paginate = require('../../paginate');


const RowperPages =10;



async function getMeeting(req, res) {
	try {
        var Meeting = await getMeetings();
        
        var NumOfPage;
       
        if (Meeting.length % RowperPages === 0 ) {
            NumOfPage   = parseInt(Meeting.length/RowperPages)  ;

       } else{
           
         NumOfPage =   parseInt(Meeting.length/RowperPages) +1;
       }


        Meeting = paginate(Meeting,RowperPages,req.query.page);    



		res.render('Admin/Meeting', {
			userInfor: 'admin',
            Meeting: Meeting,
            NumOfPage:NumOfPage,
            Current :parseInt(req.query.page)|| 0
		});
	} catch (error) {
		console.log(error);
		res.send(error);
	}
}

async function putMeeting(req,res) {
    try {
        let role=res.locals._role;
        // console.log(id) 
        // console.log(req.body) 
        // res.send(req.body) 
        let {type, id }= req.body;
 
        // set per=0
        if(type === 'Off'){
            
             await updatePermissionMeetings( id , 0);
            return res.send('set Waiting complete')
            
        }else{ //set per #0
             await updatePermissionMeetings( id , role);
             return res.send('set Accept  complete')
        }

    } catch (error) {
        console.log(error)
    }
}
async function deleteMeeting(req,res) {
    try {
        
        let {id} = req.body;
        let deleteMeeting = await deleteByMeetingId (id);
        // console.log(deleteMeeting)
        res.send(' Delete complete! ');


    } catch (error) {
        console.log(error)
    }
}


async function getHome(req, res) {
	try {
        
        var home = await getHomes();

        var NumOfPage;
       
        if (home.length % RowperPages === 0 ) {
            NumOfPage   =  parseInt(home.length/RowperPages)  ;

       } else{
           
         NumOfPage =   parseInt(home.length/RowperPages) +1;
       }


        home = paginate(home,RowperPages,req.query.page); 

        
        res.render('Admin/Home', { 
            userInfor: 'admin',
            Home:home ,
            NumOfPage:NumOfPage,
            Current :parseInt(req.query.page)|| 0
            });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
}
async function putHome(req,res) {
    try {
      
        let role=res.locals._role;
        // console.log(id) 
      
     
        let {type, id }= req.body;
 
        // set per=0
        if(type === 'Off'){
            
             await updatePermissionHome( id , 0);
             console.log('Home Off')
            return res.send('set Waiting complete')
            
        }else{ //set per #0
             await updatePermissionHome( id , role);
             console.log('Home On')
             return res.send('set Accept  complete')
        }
      
      } catch (error) {
          console.log(error);
          res.send(error);
      }
}
async function deleteHome(req,res) {
    try {
        
        let {id} = req.body;
        let deleteMeeting = await deleteByHomeId (id);
        console.log('delete home')
        res.send(' Delete complete! ');


    } catch (error) {
        console.log(error)
    }
}


async function getNewspage(req, res) {
    try {
        var news = await getNews();
        var RowperPages =5; //overwrite (number of rows / 1 pages 
      

        var NumOfPage;
       
        if (news.length % RowperPages === 0 ) {
            NumOfPage  = parseInt(news.length/RowperPages)  ;

       } else{
           
         NumOfPage = parseInt(news.length/RowperPages) +1;
       }


        news = paginate(news,RowperPages,req.query.page); 

        console.log(news.length)
        res.render('Admin/News', { 
            userInfor: 'admin',
            News :news,
            NumOfPage:NumOfPage,
            Current :parseInt(req.query.page)|| 0
        });

        console.log('news')        
        
	} catch (error) {
		console.log(error);
		res.send(error);
	}
 
}

async function deleteNews(req, res) {
    try {
        let {id} = req.body;
        let deleteMeeting = await deleteNewsById (id);
        res.send(' Delete complete! ');
	} catch (error) {
        console.log(error);
		res.send(error);
	}
}
async function putNews(req,res) {
    try {
        
        let role=res.locals._role;
        // console.log(id) 
        
        // res.send(req.body) 
        let {type, id }= req.body;
        
        // set per=0
        if(type === 'Off'){
            
            await updatePermissionNews( id , 0);
            console.log('news Off')
            return res.send('set Waiting complete')
            
        }else{ //set per #0
            await updatePermissionNews( id , role);
            console.log('news On')
            return res.send('set Accept  complete')
        }
        console.log('news Off')
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}


async function getUser(req, res) {
    try {
        var users = await getUsers();
     
        var NumOfPage;
       
        if (users.length % RowperPages === 0 ) {
            NumOfPage  =parseInt(users.length/RowperPages) +1 ;

       } else{
           
         NumOfPage = parseInt(users.length/RowperPages) +1;
       }


        users = paginate(users,RowperPages,req.query.page); 

        res.render('Admin/User', { 
            userInfor: 'admin',
            users :users,
            NumOfPage:NumOfPage,
            Current :parseInt(req.query.page)|| 0
        });

       
        
    } catch (error) {
        console.log(error);
        res.send(error);
    }
 
}


module.exports = {
	getMeeting: getMeeting,
	putMeeting: putMeeting,
	deleteMeeting: deleteMeeting,
	getHome: getHome,
	putHome: putHome,
	deleteHome: deleteHome,
	getNewspage: getNewspage,
	putNews: putNews,
    deleteNews: deleteNews,
    getUser:getUser
};
