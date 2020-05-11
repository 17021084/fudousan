const builModelFrom = require('../../Regression/Regression');
const { getNews, getNewsByNewsId } = require('../../database/newsModel');
const { getHomes, getHomeById, filterHome } = require('../../database/homeModel');
const { getMeetings, insertMeetings } = require('../../database/meetingModel');
const paginate = require('../../paginate');
const permission = require('../../permission');
var dotenv = require('dotenv');
dotenv.config();

const path = process.env.CREDIT_DATA_PATH ;
console.log(process.env.CREDIT_DATA_PATH);

async function index(req, res) {
	try {
		// header
		var userInfor = res.locals;

		var home = await getHomes();
		var news = await getNews();

		// filter by permission
		home = permission(home);
		news = permission(news);

		//paginate
		var NumOfPage_Home, NumOfPage_News; // number page
		var ItemPerPage_Home = 6;
		var ItemPerPage_News = 6;
		//Home
		if (home.length % ItemPerPage_Home === 0) {
			NumOfPage_Home = parseInt(home.length / ItemPerPage_Home);
		} else {
			NumOfPage_Home = parseInt(home.length / ItemPerPage_Home) + 1;
		}
		home = paginate(home, ItemPerPage_Home, req.query.home);

		//News
		if (news.length % ItemPerPage_News === 0) {
			NumOfPage_News = parseInt(news.length / ItemPerPage_News);
		} else {
			NumOfPage_News = parseInt(news.length / ItemPerPage_News) + 1;
		}
		news = paginate(news, ItemPerPage_News, req.query.news);

		res.render('HomePage/index', {
			userInfor: userInfor,
			home: home,
			NumOfPage_Home: NumOfPage_Home,
			Current_Home: parseInt(req.query.home) || 0,

			news: news,
			NumOfPage_News: NumOfPage_News,
			Current_News: parseInt(req.query.news) || 0
		});
	} catch (error) {
		console.log(error);
	}
}

async function homeList(req, res) {
	try {
		// header
		var userInfor = res.locals;

		let home = await getHomes();

		// filter by permission
		home = permission(home);

		//paginate
		var NumOfPage_Home; // number page
		var ItemPerPage_Home = 6;
		//Home
		if (home.length % ItemPerPage_Home === 0) {
			NumOfPage_Home = parseInt(home.length / ItemPerPage_Home);
		} else {
			NumOfPage_Home = parseInt(home.length / ItemPerPage_Home) + 1;
		}
		home = paginate(home, ItemPerPage_Home, req.query.home);

		res.status(200).render('HomePage/Home list.ejs', {
			userInfor: userInfor,
			home: home,
			NumOfPage_Home: NumOfPage_Home,
			Current_Home: parseInt(req.query.home) || 0
		});
	} catch (error) {
		console.log(error);
	}
}

async function homeDetails(req, res) {
	try {
		// header
		var userInfor = res.locals;
		let home = await getHomeById(req.params.id);
		//check valid ?
		if (home.length == 0 || home[0].Permission == 0) {
			return res.status(200).render('forbidden', { userInfor: userInfor });
		}

		res.status(200).render('HomePage/Home details', { userInfor: userInfor, home: home[0] });
	} catch (error) {
		console.log(error);
	}
	// res.render('HomePage/Home details');
}

async function newsDetails(req, res) {
	try {
		// header
		var userInfor = res.locals;
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

async function newsList(req, res) {
	try {
		// header
		var userInfor = res.locals;
		var news = await getNews();

		// filter by permission
		news = permission(news);

		//paginate
		var NumOfPage_News; // number page
		var ItemPerPage_News = 4;

		if (news.length % ItemPerPage_News === 0) {
			NumOfPage_News = parseInt(news.length / ItemPerPage_News);
		} else {
			NumOfPage_News = parseInt(news.length / ItemPerPage_News) + 1;
		}
		news = paginate(news, ItemPerPage_News, req.query.news);

		res.status(200).render('HomePage/News List', {
			userInfor: userInfor,
			NumOfPage_News: NumOfPage_News,
			Current_News: parseInt(req.query.news) || 0,
			news: news
		});
	} catch (error) {
		console.log(error);
	}
}

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

		console.log('income', average);

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

async function booking(req, res) {
	try {
		var { HomeId, date, Email, Duration, Message } = req.body;

		var arrayBooking = [ HomeId, date, Email, Duration, Message ];
		// res.send(arrayBooking);

		var insert = await insertMeetings(arrayBooking);

		res.status(200).send({
			success: true
		});
	} catch (error) {
		console.log(error);
		res.status(200).send({
			success: false
		});
	}
}

function find(req, res) {
	res.send('hello');
}

async function filter(req, res) {
	try {
		// header
		var userInfor = res.locals;
		var home = await filterHome(req.body);

		// filter by permission
		home = permission(home);

		//paginate
		var NumOfPage_Home; // number page
		var ItemPerPage_Home = 6;
		//Home
		if (home.length % ItemPerPage_Home === 0) {
			NumOfPage_Home = parseInt(home.length / ItemPerPage_Home);
		} else {
			NumOfPage_Home = parseInt(home.length / ItemPerPage_Home) + 1;
		}
		home = paginate(home, ItemPerPage_Home, req.query.home);

		res.status(200).render('HomePage/Home list.ejs', {
			userInfor: userInfor,
			home: home,
			NumOfPage_Home: NumOfPage_Home,
			Current_Home: parseInt(req.query.home) || 0
		});
	} catch (error) {
		console.log(error);
		res.send(error);
	}
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
	filter: filter
};
