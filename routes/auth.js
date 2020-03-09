const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { loginValidation, registerValidation } = require('../validation');
const { getUsers, insertUser, updateUserById, getUserByEmail, getUserById } = require('../database/userModel');




//auth users
router.get('/login',  (req, res) =>{
	
	var userInfor = res.locals ;

	res.render('Auth/UserLogin' ,{userInfor:'login', alert:false});
} );

router.get('/register' ,  (req, res)=> {
	var userInfor = res.locals ;
	res.render('Auth/Register',{userInfor:userInfor});
});



router.post('/login' ,async  (req, res)=> {
	try {
			
		//validation
		const { error } = loginValidation(req.body);
		if (error)
			return res.status(200).render('Auth/UserLogin', {
				alert: error.details[0].message,
				userInfor:'login'
		});

		let { Email, Password } = req.body;

        // CHECK IF EMAIL IS EXIST ?
		const emailExist = await getUserByEmail(Email);
		if (!emailExist.length) 
			return res.status(200).render('Auth/UserLogin', {
				alert: 'Email not found',
				userInfor:'login'
			});


        // CHECK PASSWORD IS CORRECT ?
        const validPassword = await bcrypt.compare(Password, emailExist[0].Password);
      

        if (!validPassword) {
				return res.status(200).render('Auth/UserLogin',{ 
						alert: 'Password is Invalid',
						userInfor:'login'
				});
			
		}else {

				const token = jwt.sign({
					_id:   emailExist[0].UserId,
					_email: emailExist[0].Email,
					_name: emailExist[0].FullName,
					_phone: emailExist[0].Phone,
					_dob: emailExist[0].Dob,
					_role: emailExist[0].Role

					}, process.env.TOKEN_SECRET)
			
				
				res.cookie('auth_token',token,{ expires: new Date(Date.now() + 36000000), httpOnly: true });
				res.header('auth_token',token);
				res.redirect('/users/');;
				// res.redirect('/');;
				
			
        	}	

	} catch (error) {
		res.status(400).send(error);
	}
});






router.post('/register', async  (req, res) =>{
    try {
        
        const { Email, Password ,Phone , Dob , FullName } = req.body;
		//validation
		const { error } = registerValidation(req.body);
        if (error)
			return res.status(200).send({
				alert: error.details[0].message
        });
        
         // CHECK IF EMAIL IS EXIST ?
		const emailExist = await getUserByEmail(Email);
        if (emailExist.length) {
			return res.status(200).send({
				alert: 'Email is registed'
			});
        }
         
        //HASH PASSWORDS
        const salt = await bcrypt.genSalt(10); //gen salt to add in password
        const hashPassword = await bcrypt.hash(Password, salt);
        
        // [Email,PassWord , FullName, Dob, Phone ]
        const user =[Email,hashPassword , FullName, Dob, Phone ];      
        var users = await insertUser(user);
        var users = await getUsers();
        return res.status(200).send({
            success: 'Email is registed'
        });

    } catch (error) {
        res.status(400).send(error);
    }

   
});


// ========================================================================



// admin

// auth
router.get('/admin/login',  (req, res) =>{
	
	res.render('Auth/AdminLogin' ,{userInfor:'logout', alert:false});
} );


router.post('/admin/login' ,async  (req, res)=> {
	try {
		
		
		// //validation
		const { error } = loginValidation(req.body);
		
		console.log(error);
		if (error)
			return res.status(200).render('Auth/AdminLogin', {
				alert: error.details[0].message,
				userInfor:'login'
		});

		let { Email, Password } = req.body;

        // CHECK IF EMAIL IS EXIST  ? IF IT EXIST ,WHAT IT ROLE ?
		const emailExist = await getUserByEmail(Email);
		if (!emailExist.length || !emailExist[0].Role ) 
			return res.status(200).render('Auth/AdminLogin', {
				alert: 'Email not found'
		});



        // CHECK PASSWORD IS CORRECT ?
        const validPassword = await bcrypt.compare(Password, emailExist[0].Password);
      


        if (!validPassword) {
				return res.status(200).render('Auth/AdminLogin',{ 
						alert: 'Password is Invalid'
				});
			
		}else {

				const token = jwt.sign({
						_id:   emailExist[0].UserId,
						_email: emailExist[0].Email,
						_name: emailExist[0].FullName,
						_phone: emailExist[0].Phone,
						_dob: emailExist[0].Dob,
						_role: emailExist[0].Role

					}, process.env.TOKEN_SECRET)
			
				res.cookie('admin_auth_token',token,{ expires: new Date(Date.now() + 36000000), httpOnly: true });
				res.header('admin_auth_token',token);			
				res.redirect('/admin/home');;
							
        	}	

	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}

});




module.exports= router;