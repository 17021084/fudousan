var express = require('express');
var router = express.Router();
var admins = require('../Controllers/Admin/adminControllers')
var {getNews} = require('../database/newsModel');
//meeting
router.get('/meeting',admins.getMeeting);
router.put('/meeting',admins.putMeeting);
router.delete('/meeting',admins.deleteMeeting);

//home
router.get('/home',admins.getHome);
router.put('/home',admins.putHome);
router.delete('/home',admins.deleteHome);

//news
router.get('/news',admins.getNewspage);
router.put('/news',admins.putNews);
router.delete('/news',admins.deleteNews);

//user
router.get('/user',admins.getUser);



module.exports = router;
