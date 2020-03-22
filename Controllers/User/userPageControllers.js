const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const builModelFrom = require('../../Regression/Regression');
const { loginValidation, registerValidation } = require('../../validation');
const { getUsers, insertUser, updateProfileById,updatePasswordById  , getUserByEmail, getUserById ,} = require('../../database/userModel');
const { insertHome ,getHomeByUsersId_HomeId,getHomeByUsersId ,updateHomebyHomeId_UserId ,deleteHomebyHomeId_UserId } = require('../../database/homeModel');
const { getNewsByUsersId ,insertNews ,getNewsByNewsId_UserId ,deleteNewsById ,updateNewsById} =require('../../database/newsModel');
const { getMeetingsByUserId ,deleteByMeetingId_UserId } =require('../../database/meetingModel');


const paginate = require('../../paginate');
const permission = require('../../permission');


const RowperPages =5;  // Number of rows in a table on a page

const path = process.env.KOREA_HOME_DATA_PATH  || 'C:/Users/Admin/Desktop/fudousanApp/Regression/data/Home_Data.csv';

// mail ===========================
// get /composermail/

function mailComposer(req, res) {
	// header
	var userInfor = res.locals;
	res.render('User/ComposerMail', { userInfor: userInfor, toEmail: '' });
}
//  get  /composermail/:email
function mailComposerByParam(req, res) {
	// header
	var userInfor = res.locals;
	res.render('User/ComposerMail', { userInfor: userInfor, toEmail: req.params.email });
}

function sendMail(req, res) {
	var { PassWord, Services, From, To, subject, content } = req.body;

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: From,
			pass: PassWord
		}
	});

	var mailOptions = {
		from: From,
		to: To,
		subject: subject,
		html: content
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			res.send({
				alert: error
			});
		} else {
			res.send({
				success: 'success'
			});
		}
	});
}
//==================================

//profile ============================
async function getProfile(req, res) {
	try {
		// header
		var userInfor = res.locals;
	
		var user = await getUserById( res.locals._id);
		
		res.status(200).render('User/Profile', {
			userInfor: userInfor ,
			user:user[0]
		});
	} catch (error) {
		res.send(error);
	}
}

async function updateProfile(  req , res) {
	try {
		let	{Name, Phone ,Dob}= req.body;
		


		let user ={
			FullName: Name ||res.locals._name,
			Phone: Phone||res.locals._phone,
			Dob:Dob || res.locals._dob,
			UserId : res.locals._id
			}
		
		let update = await updateProfileById(user);

		res.send({})

	} catch (error) {
		console.log(error);
		res.send({
			error : "Error"
		});
	}
}
async  function updatePassWord(req, res) {
	try {
		let {newPass , oldPass} = req.body;

		let user = await getUserById(res.locals._id);
		
        // // CHECK PASSWORD IS CORRECT ?
		const validPassword = await bcrypt.compare(oldPass, user[0].Password);
		if( !validPassword){
			return res.send({
				alert :"Old PassWord's incorrects"
			});
		}

		if(newPass ===oldPass ){
			return res.send({
				success :"update complete"
			});
		} 
		
		//  //HASH PASSWORDS
		 const salt = await bcrypt.genSalt(10); //gen salt to add in password
		 const hashPassword = await bcrypt.hash(newPass, salt);
		
		 await updatePasswordById( {
			Password:hashPassword, 
			UserId : res.locals._id
		 })

		 res.send({
			success :"update complete"
		});

	} catch (error) {
		
	}

}

// ====================================

//News ================================

async function getNews(req, res) {
	try {
		// header
		let userInfor = res.locals;
		let news = await getNewsByUsersId (res.locals._id);
		let  NumOfPage ;

		if (news.length % RowperPages === 0 ) {
			 NumOfPage = parseInt(news.length/RowperPages) ;

		} else{
			
		  NumOfPage = parseInt(news.length/RowperPages) +1;
		}
		
        news = paginate(news,RowperPages,req.query.page);  

		res.status(200).render('User/Your New Post', {
			userInfor: userInfor,
			news :news,
			
			NumOfPage:NumOfPage,
            Current :parseInt(req.query.page)|| 0
		});
	} catch (error) {
		res.status(400).send(error);
	}
}

async function postNews(req, res) {
	try {
		// header
		let userInfor = res.locals;
		let { Title , Place , Image , Brief , Content} =req.body;
		// 
		let newsObj ={
			UserId  : userInfor._id, 
			Brief :  Brief,
			Title : Title,
			Content : Content, 
			Image : Image,
			Place :Place 
			
		}

		await insertNews(newsObj);
		res.send('Post new News Success')
	

	} catch (error) {
		console.log(error);
		res.send(error);
	}


}

async function getNewsDetails(req, res) {
	try {
		// header
		let userInfor = res.locals;
		console.log(req.params.NewsId);
		let NewsId = req.params.NewsId;
		let News = await getNewsByNewsId_UserId(NewsId,userInfor._id);
		
		// IF the News is empty , it has 2 reasion.  
		//1: News ist exist, New has another author (users) 
		if(!News.length){				
			return res.status(200).render('forbidden', {
				userInfor: userInfor,
				
			});
		}

		console.log(News)
		res.status(200).render('User/Modify News', {
			userInfor: userInfor,
			News :News[0]			
		});

	} catch (error) {
		console.log(error);
		res.send(error);
	}
}
async function putNews(req, res) {
	try {
		// // header
		// let userInfor = res.locals;
		let { NewsId , Title, Place , Image, Brief, Content } = req.body;
		let News ={
			NewsId:NewsId , 
			Title:Title,
			Place:Place , 
			Image : Image, 
			Brief : Brief,
			Content:Content
		}
		await updateNewsById(News)

		// updateNewsById
		
		// console.log(req.body)
		res.send('sucsses');

	} catch (error) {
		console.log(error);
		res.send(error);
	}
}

async function deleteNews(req, res) {
	try {
		// header
		let userInfor = res.locals;
		let {newsId}= req.body;
		await deleteNewsById(newsId)
		
		
		res.send('complete');

	} catch (error) {
		console.log(error);
		res.send(error);
	}
}




// ===========================================

// home & incoming meeting
async function index(req, res) {
	try {

		var userInfor = res.locals;

		var home = await getHomeByUsersId(userInfor._id);
		var meeting = await getMeetingsByUserId( userInfor._id);
		meeting=permission(meeting);
		
		var  NumOfRows_Home,NumOfRows_Meeting ;
		
		
		if (home.length % RowperPages === 0 ) {
			NumOfRows_Home = parseInt(home.length/RowperPages) ;
		} else{		
			NumOfRows_Home = parseInt(home.length/RowperPages) +1;
		}
		
		home = paginate(home,RowperPages,req.query.home);  
	
		if (meeting.length % RowperPages === 0 ) {
			NumOfRows_Meeting = parseInt(meeting.length/RowperPages) ;
		} else{		
			NumOfRows_Meeting = parseInt(meeting.length/RowperPages) +1;
		}
		
		meeting = paginate(meeting,RowperPages,req.query.home);  



		console.log(home.length)
		res.status(200).render('User/index', {
			userInfor: userInfor,
			meeting :meeting,
			home:home,
			NumOfRows_Home:NumOfRows_Home,
			NumOfRows_Meeting:NumOfRows_Meeting,
			CurrentHome :parseInt(req.query.home) || 0,
			CurrentMeeting:parseInt(req.query.meeting)||0
		});


	} catch (error) {
		console.log(error)
		res.status(400).send(error);
	}
}
// /users/meeting/delete/:MeetingId  _. bug

async function deleteMeetingByMeetingId(req, res) {
	try {
		var userInfor = res.locals;	
		await deleteByMeetingId_UserId( userInfor._id,req.params.MeetingId  );
	
		 res.redirect('/users/');
	} catch (error) {
		console.log(error)
		res.status(400).send(error);
	}
}





async function getNewHome(req, res) {
	try {
		// header
		var userInfor = res.locals;
		res.status(200).render('User/PostNewHome', {
			userInfor: userInfor
		});
	} catch (error) {
		res.status(400).send(error);
	}
}
async function postNewHome(req, res) {
	try {
		//get UserId
		var userInfor = res.locals;
	
		let { nameArr, valueArr } = req.body;
		valueArr = valueArr.map((vl) => "'" + vl.toString() + "'");
		nameArr = '( Permission, UserId,' + nameArr.toString() + ')';
		valueArr=`( 0 , ${userInfor._id}  ,`+ valueArr.toString()+ ')';

		var insert= await insertHome( nameArr ,valueArr  );
	
		res.send({ success: insert });
		
	} catch (error) {
		console.log(error.sqlMessage) 
		res.status(400).send({ alert: error.sqlMessage });
	}
}



async function getModifyHome(req, res) {
	try {
		// header
		var userInfor = res.locals;
		var HomeId = req.params.id;

		var Home = await getHomeByUsersId_HomeId( userInfor._id, HomeId );
		if(!Home.length ){
			return res.status(200).render('forbidden', {
				userInfor: userInfor,
				
			});
		}
		else{
			return res.status(200).render('User/ModifyHome', {
				userInfor: userInfor,
				Home:Home[0]
			});


		}
		
	} catch (error) {
		res.status(400).send(error);
	}
}

async function putHome(req, res) {
	try {
		//get UserId
		let userInfor = res.locals;
		let { nameArr, valueArr ,HomeId} = req.body;
		for (let index = 0; index < nameArr.length; ++index ) {
			nameArr[index]+=`=\"${valueArr[index]}\"`
			
		}

		let sqlHome=nameArr.toString();
				
			
		await updateHomebyHomeId_UserId(sqlHome, HomeId ,userInfor._id);
	
		res.send('oke');
		
	} catch (error) {
		console.log(error) 
		res.status(400).send({ alert: error.sqlMessage });
	}
}
async function deleteHome(req, res) {
	try {
		//get UserId
		let userInfor = res.locals;
		let {HomeId}=req.body;
		

			
		await deleteHomebyHomeId_UserId( HomeId ,userInfor._id);
		// console.log('delete',HomeId)
		res.send('oke');
		
	} catch (error) {
		console.log(error) 
		res.status(400).send({ alert: error.sqlMessage });
	}
}




//just predict Sale Price, 
async function predictSalePrice(req, res) {
	try {
		let { model, average } = await builModelFrom(path);
		let {data} = req.body;

		
		// // console.log(average[20])
		// average.pop();


		//analysis data . data in average array instead req data which null valu  
		for (let i = 0; i < data.length; i++) {
			if(data[i]===""){
				data[i]=parseFloat(average[i]);
			}
		}

		
		let result = model.predict(data)	
		console.log(result);
		console.log(model.toJSON())
		// console.log(model.toJSON().summary)


		// res.send(data);

		res.send(result);
	
	} catch (error) {
		console.log(error)
		res.status(400).send(error);
	}
}






module.exports = {
	sendMail: sendMail,
	mailComposer: mailComposer,
	mailComposerByParam: mailComposerByParam,
	getProfile: getProfile,
	updateProfile: updateProfile,
	updatePassWord: updatePassWord,
	getNews: getNews,
	postNews: postNews,
	putNews: putNews,
	getNewsDetails:getNewsDetails,
	deleteNews: deleteNews,
	index: index,
	getNewHome: getNewHome,
	postNewHome: postNewHome,
	putHome:putHome,
	deleteHome:deleteHome,
	getModifyHome: getModifyHome,
	predictSalePrice:predictSalePrice,
	deleteMeetingByMeetingId:deleteMeetingByMeetingId


	
};
