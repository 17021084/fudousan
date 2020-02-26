const mysql= require('mysql');



const pool = mysql.createPool({
	connectionLimit: 100,
	password: process.env.DATA_BASE_PASSWORD||'',
	database: process.env.DATA_BASE_NAME || 'fudousan',
	user: process.env.DATA_BASE_USER ||'root',
	host: 3306
});


module.exports = pool;