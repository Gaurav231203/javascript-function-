//high order function wo hpota hai jo return kkre ek function yya fir accep kre ek function apne parameter mai
function add( val){

}
add(function(){});
//
//agar accept na krr raha hota too bhi ye ek high order function hoga  agr hum iiskay andr say ek functuion return krte hai too bhi ye high order function hoga
function abc(){
    return function(){ console.log("Hello, World!");}

}
abc()();