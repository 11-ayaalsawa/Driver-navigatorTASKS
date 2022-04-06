"use strict";

// Driver secound Round

// 1. Write a JavaScript function that return true if the passed string palindrome false if 
// not 
// Example string:ABCDCBA
// Expected Output :True



function palindrome (str){
    let d = str.length-1;
    for(let i =0 ; i<d/2 ;i++){
        let z=str[i]
        let a=str[d-i]
        if(z!=a){
            return false
        }
        return true
    }


} 
console.log("task3:");
function palindrome( str )
  {
    let ans =  palindrome(str);
    if( ans == true )
    {
      console.log(" true" );
    }
    else
    {
      console.log("false");
    }
  }
  // test variable
  let m = 'ABCDCBA';
  palindrome(m);

  document.getElementById("task3").innerHTML=palindrome(m); 

// let iii="ABCDCBA";

// let array1 = iii.split('');

// console.log(array1);

// function saja(x){
//     let arr=[];
//     let i;
//     for(i=x.length-1; i>=0; i--){
//         arr.push(x[i]);
        

//     }
// console.log(arr);
//     return arr;

// }

// saja(array1);

// function matcharr(){
    
//     if (array1== arr) {
//         return true;
        
//     }

//     else {
//         return false;
//     }
// }

