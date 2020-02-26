var express = require('express');
var router = express.Router();
var user = require('../Controllers/User/userPageControllers');


//auth
router.get('/login', user.getLogin );
router.get('/register' ,user.getRegister );
router.post('/login' ,user.postLogin);
router.post('/register', user.postRegister);


router.get('/profile',user.getProfile);
router.put('/profile/updateInfor',user.updateInfor);
router.put('/profile/password',user.updatePassWord);



// home and meeting = index
router.get('/',user.index);

router.get('/modifyhome/:id',user.getModifyHome);
router.get('/newhome',user.getNewHome);

router.post('/newhome');
router.post('/newhome/predict');


//Modify Homes'information
router.delete('/home');
router.put('/home');
router.delete('/meeting');



//news
router.get('/news',user.getNews )
router.post('/news',user.postNews )// post new
router.delete('/news',user.deleteNews )// post new



//mail
router.get('/composermail/:email', user.mailComposerById); // index button

router.get('/composermail', user.mailComposer);
router.post('/composermail', user.sendMail);



module.exports = router;
