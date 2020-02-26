const builModelFrom = require('../../Regression/Regression');
const { getNews, getNewsById } = require('../../database/newsModel');
const { getHomes, getHomeById } = require('../../database/homeModel');
const { getMeetings, insertMeetings } = require('../../database/meetingModel');

// const path = 'C:/Users/Admin/Desktop/fudousanApp/Regression/data/Credit_Data.csv';
const path = process.env.CREDIT_DATA_PATH;

// :/   ->ok
async function index(req, res) {
	try {
		let home = await getHomes();
		let news = await getNews();

		res.send(news);
	} catch (error) {
		console.log(error);
	}
}

// /homelist  ->ok
async function homeList(req, res) {
	try {
		let home = await getHomes();
		res.send(home);
	} catch (error) {
		console.log(error);
	}
}

// /homelist/:id  ->ok
async function homeDetails(req, res) {
	try {
		let home = await getHomeById(req.params.id);
		res.send(home);
	} catch (error) {
		console.log(error);
	}
	// res.render('HomePage/Home details');
}

// /news/:id   ->ok
async function newsDetails(req, res) {
	try {
		let newsById = await getNewsById(req.params.id); // main
		let news = await getNews(); // othernews

		// res.json(news);
	} catch (error) {
		console.log(error);
	}
}

// /news   ->ok
async function newsList(req, res) {
	try {
		let news = await getNews();

		res.json(news);
	} catch (error) {
		console.log(error);
	}
}

// asyn   ->ok
async function predict(req, res) {
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

		// console.log("income", income)

		// let result = model.predict(income) ;
		// console.log('Quang day .....')

		// console.log("ketqua :", result[0]);
		let summary = model.toJSON();

		// console.log('Ko dung bo gameeeeeee')

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
		// [ HomeId ,MeetingDate,EmailBooker,duaration,Message ]
		var { HomeId, MeetingDate, EmailBooker, duaration, Message } = req.body;

		// check valid data
		if (!HomeId || !MeetingDate || !EmailBooker || !duaration || !Message) {
			return res.status(400).send({
				error: 'HomeId ,MeetingDate,EmailBooker,duaration,Message . one of them isnt exist!! check your json '
			});
		}
		// check required data
		if (MeetingDate == '' || EmailBooker == '') {
			return res.status(400).send({
				error: 'You must provide us Email or Meeting Date'
			});
		}

		var arrayBooking = [ HomeId, MeetingDate, EmailBooker, duaration || 1, Message || '' ];

		var insert = await insertMeetings(arrayBooking);

		res.status(200).send(insert);

		// inser = {
		// 	fieldCount: 0,
		// 	affectedRows: 1,
		// 	insertId: 5,
		// 	serverStatus: 2,
		// 	warningCount: 2,
		// 	message: '',
		// 	protocol41: true,
		// 	changedRows: 0
		// };
	} catch (error) {
		res.status(400).send(error);
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
	predict: predict,
	booking: booking,
	find: find
};
