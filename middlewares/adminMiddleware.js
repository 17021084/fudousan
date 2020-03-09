const jwt = require('jsonwebtoken');

function adminMiddleware( req, res ,next){
    
    const token = req.cookies.admin_auth_token;
   
   

    if(!token) {
       
        res.locals = 'logout';
       
        return res.redirect('/auth/admin/login');
    }
   
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        res.locals = verified;        
            
        res.locals.token =token;
        next();
    } catch (error) {

      res.status(400).send(error)

       

    }

}

module.exports=adminMiddleware;