/*convert the impure function to pure function */
 let total=1;
function abc(num){
   let  newtotal=total;
    newtotal += num ;
    console.log(newtotal);

}
abc(3);

console.log(total);
