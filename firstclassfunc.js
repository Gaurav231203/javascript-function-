//first class function means function ko hum variable kay andar store kar sakte hai or usko hum as a parameter bhej sakte hai or return bhi kar sakte hai
//or hum function ko values ki tarah use kar sakte hai
/* function abc(val){
     
    val();
    
 }
 abc(function()
 {console.log("Hello, World!");

 });*/

 function add( v1, v2,v3){
  let sum=v1 + v2;
  v3(sum);
 
 }
 add(10,20,function(result){
   console.log (result);
 }
);
