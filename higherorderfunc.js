//high order function wo hpota hai jo return kkre ek function yya fir accept kre ek function apne parameter mai
function add( val){

}
add(function(){});
//
//agar accept na krr raha hota too bhi ye ek high order function hoga  pr  hume function akay andar say ek or function  return krna hoga  
function abc(){
    return function(){ console.log("Hello, World!");}

}
abc()();