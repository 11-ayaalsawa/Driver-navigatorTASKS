"use strict";

// Driver First Round
// 1. Write a JavaScript function that return reverse a array. 
// Example x = 834848;
// Expected Output : 848438

// PC: DON'T USE ANY BUILT-IN FUNCTION

let x=[8,3,4,8 ,4,8];


function saja(x){
    let arr=[];
    let i;
    for(i=x.length-1; i>=0; i--){
        arr.push(x[i]);
        

    }
console.log(arr);
    return arr;

}

saja(x);

