/**
 * 
 * @param {*} array :input array
 * @function : filter element . if Permission == 0 then it will be ignore
 */
function  permission ( array ){
   return array.filter( element  => element.Permission !=0 );
}



module.exports =permission;
