var nodemailer = require('nodemailer')


// mail ===========================
// get /composermail/

function mailComposer(req,res){
    res.render('User/ComposerMail');
}
//  get  /composermail/:email
function mailComposerById(req,res){
    res.render('User/ComposerMail',{ toEmail: req.params.email });
}

function sendMail(req,res){
    // var {service , }


}
//==================================



// authentication===================
// get   ->oke
function getLogin(req,res){
    res.render('Auth/UserLogin');
}

function getRegister(req,res){
    res.render('Auth/Register');
    
}


//post
function postRegister(req,res){

}
function postLogin(req,res){

}
// ===================================




//profile ============================
async function getProfile(req,res){
    try {
        
        res.status(200).render('User/Profile')
    } catch (error) {
        res.send(error);
    }
}

function updateInfor(req,res){

}
function updatePassWord(req,res){

}


// ====================================



//News ================================

async function getNews(req,res){
    try {
        
        res.status(200).render('User/Your New Post')


    } catch (error) {
        res.status(400).send(error);
    }
}
function postNews(req,res){

}
function deleteNews(req,res){

}




async function index(req,res){
    try {

        res.status(200).render('User/')

    } catch (error) {
        res.status(400).send(error);
    }
}


async function getNewHome(req,res){
    try {

        res.status(200).render('User/PostNewHome');

    } catch (error) {
        res.status(400).send(error);
    }
}

async function getModifyHome(req,res){
    try {
        var id = req.params.id;
        res.status(200).render('User/Update&Delete');

    } catch (error) {
        res.status(400).send(error);
    }
}





module.exports={
    sendMail:sendMail,
    mailComposer:mailComposer,
    mailComposerById:mailComposerById,
    getLogin:getLogin,
    postLogin:postLogin,
    getRegister:getRegister,
    postRegister:postRegister,
    getProfile :getProfile,
    updateInfor:updateInfor,
    updatePassWord:updatePassWord,
    getNews:getNews,
    postNews:postNews,
    deleteNews:deleteNews,
    index:index,
    getNewHome:getNewHome,
    getModifyHome:getModifyHome

}