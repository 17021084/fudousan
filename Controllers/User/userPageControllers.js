var nodemailer = require('nodemailer')


function mailComposer(req,res){
    res.render('User/ComposerMail');
}


function sendMail(req,res){
    // var {service , }



}

module.exports={
    sendMail:sendMail,
    mailComposer:mailComposer
   
}