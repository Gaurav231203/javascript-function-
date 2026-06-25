//fix the function using early return
/*function cheackage(age ){
    if (age<18){
        console.log("too young");}
        else{ 
            console.log("allowed");

        }
}*/
 let checkage=(age)=>{
    if (age<18){
    console.log("too young");
    return + age;}
    else{ 
        console.log("alowed");
        return + age;

    }

 }
 checkage(20);