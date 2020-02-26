var express = require('express');
var router = express.Router();
var user = require('../Controllers/User/userPageControllers');


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  
});



router.get('/composermail', user.mailComposer);
router.post('/composermail', user.sendMail);



module.exports = router;
