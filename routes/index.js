var express = require('express');
var router = express.Router();

var homePageControllers = require('../Controllers/HomePage/homePageControllers');




//home

router.get('/', homePageControllers.index);
router.get('/homelist', homePageControllers.homeList);
router.post('/homelist', homePageControllers.find);


router.get('/homelist/:id', homePageControllers.homeDetails);

router.post('/homelist/booking', homePageControllers.booking);

router.post('/homelist/predictOpentCredit', homePageControllers.predictMaxOpenCredit);



//News  routes
router.get('/news', homePageControllers.newsList);

router.get('/news/:id', homePageControllers.newsDetails);




module.exports = router;
