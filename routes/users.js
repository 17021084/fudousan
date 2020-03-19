var express = require('express');
var router = express.Router();
var user = require('../Controllers/User/userPageControllers');






//log oute
router.get('/logout', (req,res)=>{
    res.clearCookie('auth_token')
    res.redirect( '/users/');
} );



//profile
router.get('/profile',user.getProfile);
router.put('/profile/updateInfor',user.updateProfile);
router.put('/profile/password',user.updatePassWord);



// home and meeting = index
router.get('/',user.index);

router.get('/newhome',user.getNewHome);

router.post('/newhome',user.postNewHome);
// router.post('/newhome/predict');


//Modify Homes'information

router.get('/home/:id',user.getModifyHome);
router.delete('/home',user.deleteHome);
router.put('/home',user.putHome);

router.post( '/home/predictSalePrice',user.predictSalePrice);


router.get('/meeting/delete/:MeetingId',user.deleteMeetingByMeetingId);


//news
router.get('/news',user.getNews )
router.post('/news',user.postNews )// post new
router.delete('/news',user.deleteNews )// delete new

router.get('/news/:NewsId',user.getNewsDetails )// delete new
router.put('/news/',user.putNews )// delete new



//mail
router.get('/composermail/:email', user.mailComposerByParam); // index button

router.get('/composermail', user.mailComposer);
router.post('/composermail', user.sendMail);



module.exports = router;
