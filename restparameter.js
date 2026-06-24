//jab bahut sare argument ho to hume utnehe parameter pass karne ki jarurat 
// hai jitne hum chahte hai or  issaye hum  bachne  kay liye  rest parameter ki help se kate hai
// (... ise rest or spread operator bolte hai)
// agar ... kisi bhi function kay parameter kay aage lagaya jaye to ye  rest parameter ban jata hai or ye function kay andar array ki tarah kaam karta hai 
//agar wo array and object  mai lage ...  to ye spread operator ban jata hai or ye array or object ko spread kar deta hai

/*function add(...gauri){
console.log(gauri);
}
add(1,2,3,4,5,6); */

// on emore way to do it
function add(a,b,c , ...val){
console.log(a,b,c,val);
}
add(1,2,3,4,5,6); 