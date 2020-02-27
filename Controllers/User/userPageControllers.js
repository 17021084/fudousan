const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { loginValidation, registerValidation } = require('../../validation');
const { getUsers, insertUser, updateUserById, getUserByEmail, getUserById } = require('../../database/userModel');

// mail ===========================
// get /composermail/

function mailComposer(req, res) {
	res.render('User/ComposerMail', { toEmail: '' });
}
//  get  /composermail/:email
function mailComposerById(req, res) {
	res.render('User/ComposerMail', { toEmail: req.params.email });
}

function sendMail(req, res) {
	// var {service , }
}
//==================================



//profile ============================
async function getProfile(req, res) {
	try {
		var UserId = 1;

		res.status(200).render('User/Profile');
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
		res.status(200).render('User/Your New Post');
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
		
		// console.log(verified);

		res.status(200).render('User/');
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getNewHome(req, res) {
	try {
		res.status(200).render('User/PostNewHome');
	} catch (error) {
		res.status(400).send(error);
	}
}

async function getModifyHome(req, res) {
	try {
		var id = req.params.id;
		res.status(200).render('User/Update&Delete');
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
	getModifyHome: getModifyHome,


	testGet: testGet,
	testPost: testPost,
	testPut: testPut
};
