const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const builModelFrom = require('../../Regression/Regression');
const { loginValidation, registerValidation } = require('../../validation');
const { getUsers, insertUser, updateUserById, getUserByEmail, getUserById } = require('../../database/userModel');
const { insertHome } = require('../../database/homeModel');


const path = process.env.KOREA_HOME_DATA_PATH  || 'C:/Users/Admin/Desktop/fudousanApp/Regression/data/Home_Data.csv';

// mail ===========================
// get /composermail/

function mailComposer(req, res) {
	// header
	var userInfor = res.locals;
	res.render('User/ComposerMail', { userInfor: userInfor, toEmail: '' });
}
//  get  /composermail/:email
function mailComposerById(req, res) {
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
		var UserId = 1;

		res.status(200).render('User/Profile', {
			userInfor: userInfor
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
		var userInfor = res.locals;

		res.status(200).render('User/Your New Post', {
			userInfor: userInfor
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
		var userInfor = res.locals;

		res.status(200).render('User/', {
			userInfor: userInfor
		});
	} catch (error) {
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

		var id = req.params.id;
		res.status(200).render('User/Update&Delete', {
			userInfor: userInfor
		});
	} catch (error) {
		res.status(400).send(error);
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
	predictSalePrice:predictSalePrice
	
};
