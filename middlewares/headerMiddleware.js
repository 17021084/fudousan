const jwt = require('jsonwebtoken');

function headerMiddleware( req, res ,next){
    
    const token = req.cookies.auth_token;
   
    if(!token ||token=='' ) {
        res.locals = 'logout';
       
        next();
    }else{
        try {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);         
            res.locals = verified;        
            res.locals.token = token;        
            next();
        } catch (error) {
             res.status(400).send(error);
        }
    }
   
    
}

module.exports=headerMiddleware;