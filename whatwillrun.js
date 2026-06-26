function bahrawala(){
    let count =0;
    return function(){
        count++;
     console.log(count);
    };
}
 const nayawala= bahrawala() ;
 nayawala();
 nayawala();

