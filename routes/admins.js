var express = require('express');
var router = express.Router();

//auth
router.get('/login');
router.post('/login');


//meeting
router.get('/meeting');
router.put('/meeting');
router.delete('/meeting');

//home
router.get('/home');
router.put('/home');
router.delete('/home');

//new
router.get('/new');
router.put('/new');
router.delete('/new');




module.exports = router;
