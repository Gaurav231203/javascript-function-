/* clouser is a function jo ki retun kare ek orr function or 
an dar wala function bahr wale function ki value ko use kre*/
 let fun=function(){
  let a=10;
    return function(){
        console.log(a);
    }
 }
 fun()(); //10  
