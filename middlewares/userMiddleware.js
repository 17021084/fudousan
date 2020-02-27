const jwt = require('jsonwebtoken');

function userMiddleware( req, res ,next){
    
    const token = req.cookies.auth_token;
   
   

    if(!token) return res.redirect('/auth/login');
   
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;

        //ko can thiet
        // res.locals = verified;

        console.log( 'req.user= ', req.user);     
        //log out just excuted  in front end
        next();
    } catch (error) {
         res.status(400).send(error);
    }

}

module.exports=userMiddleware;