var express = require('express');
var router = express.Router();
var admins = require('../Controllers/Admin/adminControllers')


//meeting
router.get('/meeting',admins.getMeeting);
router.put('/meeting',admins.putMeeting);
router.delete('/meeting',admins.deleteMeeting);

//home
router.get('/home',admins.getHome);
router.put('/home',admins.putHome);
router.delete('/home',admins.deleteHome);

//new
router.get('/news',admins.getNews);
router.put('/news',admins.putNews);
router.delete('/news',admins.deleteNews);




module.exports = router;
