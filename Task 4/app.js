"use strict";


console.log("task4");

function decendingarray(arr){
    for (let i=0 ; i<arr.length;i++)
    for (let a=i+1; a<arr.length ; a++){
        let b=0
        if(arr[i]<arr[a]){
          b=arr[i] ;
          arr[i]=arr[a]
          arr[a]=b

        }
    }

    return arr
}

console.log( decendingarray([2,9,0,4]));


document.getElementById("task4").innerHTML=console.log( decendingarray([2,9,0,4]));