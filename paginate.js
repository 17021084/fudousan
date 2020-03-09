/**
 * 
 * @param {*} array : Which will be slice 
 * @param {*} item : number of item per one page
 * @param {*} current : current page in sequecy  / defaut =0 (start couting from 0)
 * 
 * @return Array
 * 
 */


function  paginate ( array , item , current=0 ){
   
    //not enough item for a page
    if( array.length <= item){
        return array;
    }
    let start = current*item,
        end = start +item;

        // start is over arr length
    if ( start >=array.length ) {
        return [];
    }
    
    // end is over array lenght 
    if( end > array.length ){
        end = array.length;
        return array.slice(start,end);
    }
    
    return array.slice(start,end);
}

//test
// var a = [0,1,2,3,4,5,6,7,8,9,10,11,12];
// var b = paginate(a,4,0); // 1 2 3 4
// var c = paginate(a,4,1); // 4 5 6 7 
// var d = paginate(a,4,2); // 8 9 10 11
// var e = paginate(a,50,2); // 12
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// // console.log(b);

module.exports =paginate;
