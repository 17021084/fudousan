const builModelFrom = require('../../Regression/Regression');
const { getNews ,getNewsById ,updateNewsById }= require('../../database/newsModel');






// const path = 'C:/Users/Admin/Desktop/fudousanApp/Regression/data/Credit_Data.csv';
const path = process.env.CREDIT_DATA_PATH;




function index( req,res ){
    res.send('hello')

}
function homeList( req,res ){
    res.send('hello')

}
function homeDetails( req,res ){
    res.render('HomePage/Home details');

}

async function newsDetails( req,res ){
    try {
		let news = await updateNewsById(req.params.id);
		res.json(news);
	} catch (error) {
		console.log(error);
	}

}
// async function newsDetails( req,res ){
//     try {
// 		let news = await getNewsById(req.params.id);
// 		res.json(news);
// 	} catch (error) {
// 		console.log(error);
// 	}

// }



async  function newsList( req,res ){
    try {
		let news = await getNews();
		
		res.json(news);
	} catch (error) {
		console.log(error);
	}

}


// asyn
async function predict( req,res ){
    try {
        console.log('1')
        let {model,average} = await builModelFrom(path);
        console.log('2')
        // let { data } = req.body;
        let  data  = req.body;

        // console.log('Fuck this shit', req.body)
        // console.log("data", data)
        
        let income= [ 
            data.CurrentLoan	,data.CreditScore 	,data.Income
            ,data.Years 	,data.Debt	 ,data.YearsofCreditHistory	 ,data.Delinquent	
            ,data.OpenAccounts	,data.CreditProblems	,data.CreditBalance
            ];

            // console.log("income", income)

        // let result = model.predict(income) ;     
        // console.log('Quang day .....')
        
        // console.log("ketqua :", result[0]);
        let  summary = model.toJSON();
        
        // console.log('Ko dung bo gameeeeeee')
           
            
        
        res.status(200).json({
            model: summary,
            income: income,
            average:average          
        })

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
            error:error.message,
            success:false
        })
    }
}



function find( req,res ){
    res.send('hello')

}

function booking( req,res ){
    res.send('hello')

}



module.exports={
    index:index,
    homeList:homeList,
    homeDetails:homeDetails,
    newsDetails:newsDetails,
    newsList:newsList,
    predict:predict,  
    booking:booking,
    find: find
}