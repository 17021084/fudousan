


async function getMeeting (req,res){
    try {

        res.render('Admin/Meeting',{ 
            userInfor: 'admin'
        })


    } catch (error) {
        console.log(error)
        res.send(error)
    }

}
async function putMeeting (){

}
async function deleteMeeting (){

}
async function getHome (req,res){
    try {

        res.render('Admin/Home',{userInfor: 'admin'})


    } catch (error) {
        console.log(error)
        res.send(error)
    }

}
async function putHome (){

}
async function deleteHome (){

}
async function getNews (req,res){

    try {

        res.render('Admin/News',{userInfor: 'admin'})


    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
async function deleteNews (){

}
async function putNews (){

}





module.exports ={

getMeeting:getMeeting,
putMeeting:putMeeting,
deleteMeeting:deleteMeeting,
getHome:getHome,
putHome:putHome,
deleteHome:deleteHome,
getNews:getNews,
putNews:putNews,
deleteNews:deleteNews
}