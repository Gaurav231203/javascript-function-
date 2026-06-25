//use rest parameter to accept any number of scores and return the total
function score(...rest){//rest op use kiya
   totalscore=0; //total nikalne kay liye 
    console .log(rest)// print horha hai pura score sare element

    rest.forEach(function(rest) { // used for each item of the function 
        totalscore= totalscore + rest; // totalscore mai  baki kay elements ko add krte jayenge 
    }); 
}
score(1,2,3,4,5,6,7,8,9,10);//ye sare declared 
console.log(totalscore);//print krne ky liye

