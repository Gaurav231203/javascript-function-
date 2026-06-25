/* clouser is a function jo ki retun kare ek orr function or return 
hone wala function humesha use karega parent function ka koi variable 
yaa fir parent function ka koi parameter ko use karega*/
 let fun=function(){
  let a=10;
    return function(){
        console.log(a);
    }
 }
 fun()(); //10  
