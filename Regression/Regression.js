const fs = require('fs');
const csv = require('csv-parser');
// const trainTestSplit = require('train-test-split');
const MLR = require("ml-regression-multivariate-linear");


/**
 * convert array contain obj to array contain is array
 * 
 * such as
 * a=[{a:11 , b :20 , c:7 },
 *    {a:71 , b :12 , c:3 },
 *    {a:11 , b :21 , c:7 },
 *    {a:21 , b :72 , c:3 }
 * ]
 * 
 * become 
 * a=[[11 , 20 , 7 ],
 *    [71 , 12 , 3 ],
 *    [11 , 21 , 7 ],
 *    [21 , 72 , 3 ]
 * ]
 *            a     b    c
 * average[ 28.5 , 31.5, 5 ]
 * 
 * NAN value will be replace by average value
 * 
 * 
 *  return  matrixObj = {
 *        matrix : 2d array
 *        average :  average of each column.
 *        }
 */

function covertToMultilDimesionArray(arrObj) {

    // number of row must be even  ( because the module Regression need 2 dataset which the numbers of row is equal)
    if(arrObj.length%2!=0){ arrObj.pop()}
  
    let matrix = [];
  
    //init average array  , all element is 0
    let numOfColumn = Object.keys(arrObj[0]).length; 
    let sumOfColumn =[];
    for (let index = 0; index < numOfColumn; ++index) {
      sumOfColumn.push(0);
    }
    
    let j =1; // current row
      arrObj.forEach((obj) => {
      let row = [];
      
      let i=0; // currents Column 
  
          for (let key in obj) {
        
        let value = parseFloat(obj[key]);
        
        
        // replace NaN value by average.
        if( isNaN(value )){
          // ko phai so thi thay bang gia tri trung binh
          
          value = sumOfColumn[i]/j;
          sumOfColumn[i]+= value;
          i++;
          row.push(value);
  
        }else{
          sumOfColumn[i]+= value;
          i++;
          row.push(value);
  
        }
        
          }
      matrix.push(row);
      j++
    });
    
    //change sumOfColumn to become average array
    for (let index = 0; index < sumOfColumn.length; ++index) {
       sumOfColumn[index] /= arrObj.length;
    }
  
    return { 
            matrix : matrix ,
            average : sumOfColumn  //now is average aray;
            };
  }
  
  /**
   * purpose is slice a column at from x to y ( not include y) 
   * 
   * 
   * @param {*} arr : array which contain rows
   * @param {*} x : position ( default =0 &&  x>=0 )
   * @param {*} y : position (  y<= arr.length )
   * x<y
   */
  function sliceMatrix(arr, x,y) {
      if ( y > arr[0].length || x < 0 || x>=y ) {
      
      throw ` start from  ${x} to ${y} got problem `;
      
      } else {
          let newArr = [];
          arr.forEach((row) => {
              // newArr.push([ ...row.slice(x, ), ...row.slice(x + 1, row.length) ]);
              newArr.push([ ...row.slice(x,y)]);
          });
          return newArr;
      }
  }
  

  /**buil Model From flie 
   * @param {*} path : dataset's Path
   * @return  promise mlr model
   * 
   * mlr.toJSON() :  summary;
   * mlr.toJSON().summary.variables : summary varriable
   * mlr.predict(incomeArray) => return outcome array
   */

   function builModelFrom( path ){
    let results=[];
    return new Promise( (resolve , reject)=>{
      fs.createReadStream(path).pipe(csv()).on('data' ,(data) => results.push(data)).on('end',  (err) => {
          if (err) reject(err);
          //format
          let matrixObj= covertToMultilDimesionArray(results);     
          let income = sliceMatrix(matrixObj.matrix,0,matrixObj.matrix[0].length-1);
          // //outcome matrix is last comlumn
          let outcome = sliceMatrix(matrixObj.matrix,matrixObj.matrix[0].length-1,matrixObj.matrix[0].length);
           // //build model
           let mlr = new MLR(income, outcome);
          return resolve(mlr);
          
      });
    });
  }

  module.exports = builModelFrom;


 
  
  

  