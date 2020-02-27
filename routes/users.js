var express = require('express');
var router = express.Router();
var user = require('../Controllers/User/userPageControllers');



//test api
router.get('/test', user.testGet );
router.post('/test', user.testPost );
router.put('/test', user.testPut );


router.get('/rd', (req,res)=>{
    res.redirect( '/users/');
} );






//profile
router.get('/profile',user.getProfile);
router.put('/profile/updateInfor',user.updateInfor);
router.put('/profile/password',user.updatePassWord);



// home and meeting = index
router.get('/',user.index);

router.get('/newhome',user.getNewHome);

router.post('/newhome');
router.post('/newhome/predict');


//Modify Homes'information
router.get('/home/:id',user.getModifyHome);
router.delete('/home/:id');
router.put('/home/:id');

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
