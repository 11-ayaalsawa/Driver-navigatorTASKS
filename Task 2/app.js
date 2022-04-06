"use strict";

// .Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string in upper case.
// Example string : 'the car drove fast'
// Expected Output : 'The Car Drove Fast';
// You do not have permission to send messages in this channel.


function aya(x)
{
  let arr = x.split(' ');

  let arr2= [];
    
  for(let i = 0; i < arr.length; i++){
      let z=arr[i].charAt(0);
      let y=z.toUpperCase();

     let r= y+arr[i].slice(1);
     arr2.push(r);
     
  }
  
  return arr2.join(' ');
}
console.log(aya("the car drove fast"));

document.getElementById("task2").innerHTML=aya("the car drove fast");

