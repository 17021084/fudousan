//VALIDATION input data from front end 
// just for Authen


// doc : https://hapi.dev/family/joi/

const Joi = require('@hapi/joi');

const registerValidation = (data) => {
	
	const schema = Joi.object({
		Email: Joi.string().min(8).max(1024).email(),
		Password: Joi.string().min(8).max(1024).required(),		
		Phone: Joi.string().min(8).max(1024).required(),
		FullName: Joi.string().min(8).required(),
		Dob: Joi.string().min(8).required()
	});
	
	
	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = Joi.object({
		Email: Joi.string().min(8).max(1024).email(),
		Password: Joi.string().min(8).max(1024).required()
	});

	//return a func
	return schema.validate(data);
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
