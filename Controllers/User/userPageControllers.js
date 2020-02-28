const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




const { loginValidation, registerValidation } = require('../../validation');
const { getUsers, insertUser, updateUserById, getUserByEmail, getUserById } = require('../../database/userModel');

// mail ===========================
// get /composermail/

function mailComposer(req, res) {
	// header
	var userInfor = res.locals ;
	res.render('User/ComposerMail', {userInfor:userInfor ,toEmail: '' });
}
//  get  /composermail/:email
function mailComposerById(req, res) {
	// header
	var userInfor = res.locals ;
	res.render('User/ComposerMail', { userInfor:userInfor , toEmail: req.params.email });
}

function sendMail(req, res) {
	
	var {PassWord ,Services ,From ,To ,subject,content}= req.body;
	
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
        subject: subject ,
        html: content
    };
	

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
			console.log(error)
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
		var userInfor = res.locals ;
		var UserId = 1;

		res.status(200).render('User/Profile',{
			userInfor:userInfor
		});
	} catch (error) {
		res.send(error);
	}
}

function updateInfor(req, res) {}
function updatePassWord(req, res) {}

// ====================================

//News ================================

async function getNews(req, res) {
	try {
		// header
		var userInfor = res.locals ;
	
		res.status(200).render('User/Your New Post',{
			userInfor:userInfor
		});
		
	} catch (error) {
		res.status(400).send(error);
	}
}
function postNews(req, res) {}
function deleteNews(req, res) {}
// ===========================================

// home & incoming meeting
async function index(req, res) {
	try {
	
		var userInfor = res.locals ;	

		res.status(200).render('User/',{
			userInfor:userInfor
		});
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getNewHome(req, res) {
	try {
		// header
		var userInfor = res.locals ;
		res.status(200).render('User/PostNewHome',{
			userInfor:userInfor
		});
	} catch (error) {
		res.status(400).send(error);
	}
}
async function postNewHome(req, res) {
	try {
		// header
		let {nameArr,valueArr} = req.body;
		nameArr=nameArr.toString();
		res.send( req.body)
			

		
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getModifyHome(req, res) {
	try {
		// header
		var userInfor = res.locals ;

		var id = req.params.id;
		res.status(200).render('User/Update&Delete',{
			userInfor:userInfor
		});
	} catch (error) {
		res.status(400).send(error);
	}
}


/// test
async function testGet(req, res) {
	try {
		// var users = await getUsers();

		var users = await getUserByEmail('dotrunghg1999@gmail.com');

		// var users = await getUserById(10);

		res.send(users);
	} catch (error) {
		res.status(400).send(error);
	}
}

async function testPost(req, res) {
	try {
		// Email,PassWord,role =0 , FullName, Dob, Phone
		let user = [ 'abc@gmail.com', '123', 'Nguyen Phuong Linh', '15/2/1998', '12312' ];
		var users = await insertUser(user);
		var users = await getUsers();
		res.send(users);
		
	} catch (error) {
		res.status(400).send(error);
	}
}
async function testPut(req, res) {
	try {
		//  Password , FullName, Dob,Phone NewsId
		let user = [ '123', 'Tinh Thuy Trang', '15/2/2000', '12312', 2 ];
		var users = await updateUserById(user);
		var users = await getUsers();

		res.send(users);
	} catch (error) {
		res.status(400).send(error);
	}
}

module.exports = {
	sendMail: sendMail,
	mailComposer: mailComposer,
	mailComposerById: mailComposerById,	
	getProfile: getProfile,
	updateInfor: updateInfor,
	updatePassWord: updatePassWord,
	getNews: getNews,
	postNews: postNews,
	deleteNews: deleteNews,
	index: index,
	getNewHome: getNewHome,
	postNewHome: postNewHome,
	getModifyHome: getModifyHome,


	testGet: testGet,
	testPost: testPost,
	testPut: testPut
};
