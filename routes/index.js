var express = require('express');
var router = express.Router();

var homePageControllers = require('../Controllers/HomePage/homePageControllers');

var testcsv = "../routes/testcsv.csv";

/* GET home page. */
// router.get('/', async function(req, res, next) {
//     try {
//         const model = await builModelFrom(testcsv);  
//         console.log(model)
//     } catch (error) {
//         console.log(error)
//     }
// });


//home


router.get('/',homePageControllers.index);
router.get('/homelist',homePageControllers.homeList);
router.post('/homelist',homePageControllers.find);

router.get('/homelist/:id',homePageControllers.homeDetails);

router.post('/homelist/booking/:id',homePageControllers.booking);

router.post('/homelist/predictOpentCredit',homePageControllers.predict);




//News  routes
router.get('/news',homePageControllers.newsList);
router.get('/news/:id',homePageControllers.newsDetails);




module.exports = router;