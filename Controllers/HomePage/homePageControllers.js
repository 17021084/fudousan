const builModelFrom = require('../../Regression/Regression');
const { getNews, getNewsByNewsId } = require('../../database/newsModel');
const { getHomes, getHomeById } = require('../../database/homeModel');
const { getMeetings, insertMeetings } = require('../../database/meetingModel');

const path = process.env.CREDIT_DATA_PATH || 'C:/Users/Admin/Desktop/fudousanApp/Regression/data/Credit_Data.csv';

// :/   ->ok
async function index(req, res) {
	try {
		// header
		var userInfor = res.locals ;

		let home = await getHomes();
		let news = await getNews();

		//paginate
		// let p = req.query.page;

		//pagination
		let start = 0;
		let end = 6;

		res.render('HomePage/index', {
			userInfor: userInfor,
			home: home,
			start: start,
			end: end,
			news: news
		});
	} catch (error) {
		console.log(error);
	}
}

// /homelist  ->ok
async function homeList(req, res) {
	try {
		// header
		var userInfor = res.locals ;
		console.log(userInfor);
		let home = await getHomes();
		res.status(200).render('HomePage/Home list.ejs', { userInfor: userInfor, home: home });
	} catch (error) {
		console.log(error);
	}
}

// /homelist/:id  ->ok
async function homeDetails(req, res) {
	try {
		// header
		var userInfor = res.locals ;
		let home = await getHomeById(req.params.id);
		//check valid ?

		res.status(200).render('HomePage/Home details', { userInfor: userInfor, home: home[0] });
	} catch (error) {
		console.log(error);
	}
	// res.render('HomePage/Home details');
}

// /news/:id   ->bug query
async function newsDetails(req, res) {
	try {
		// header
		var userInfor = res.locals ;
		let newsById = await getNewsByNewsId(req.params.id); // News Id
		let news = await getNews(); // othernews

		res.status(200).render('HomePage/News Details', {
			userInfor: userInfor,
			newsById: newsById[0],
			news: news
		});
		
	} catch (error) {
		console.log(error);
	}
}

// /news   ->ok
async function newsList(req, res) {
	try {
		// header
		var userInfor = res.locals ;

		let news = await getNews();

		res.status(200).render('HomePage/News List', {
			userInfor: userInfor,
			news: news
		});
	} catch (error) {
		console.log(error);
	}
}

// asyn   ->ok
async function predictMaxOpenCredit(req, res) {
	try {
		console.log('1');
		let { model, average } = await builModelFrom(path);
		console.log('2');
		// let { data } = req.body;
		let data = req.body;

		// console.log('Fuck this shit', req.body)
		// console.log("data", data)

		let income = [
			data.CurrentLoan,
			data.CreditScore,
			data.Income,
			data.Years,
			data.Debt,
			data.YearsofCreditHistory,
			data.Delinquent,
			data.OpenAccounts,
			data.CreditProblems,
			data.CreditBalance
		];

		console.log("income", average);

		
		// let result = model.predict(average) ;
		// console.log('Quang day .....')

		// console.log("ketqua :", result[0]);
		let summary = model.toJSON();

		// console.log('Ko dung bo gameeeeeee')

		// res.status(200).send(result);

		res.status(200).json({
			model: summary,
			income: income,
			average: average
		});

		// res.status(200).json({
		//     MaxOpenCredit: result[0],
		// })

		// res.send(req.body);
		// res.send(summary);
		// res.send(income);
		// res.send(data);
		// res.send(data.CurrentLoan);
	} catch (error) {
		res.status(400).send({
			error: error.message,
			success: false
		});
	}
}

// post  /homelist/booking  ->ok
async function booking(req, res) {
	try {
		var { HomeId, date, Email, Duration, Message } = req.body;

		
		var arrayBooking = [ HomeId, date, Email, Duration , Message  ];
		// res.send(arrayBooking);

		var insert = await insertMeetings(arrayBooking);

		res.status(200).send( {
			success:true
		});
	
		
	} catch (error) {
		console.log(error);
		res.status(200).send({
			success:false

		});
	}
}

function find(req, res) {
	res.send('hello');
}





module.exports = {
	index: index,
	homeList: homeList,
	homeDetails: homeDetails,
	newsDetails: newsDetails,
	newsList: newsList,
	predictMaxOpenCredit: predictMaxOpenCredit,
	booking: booking,
	find: find,
	
};
