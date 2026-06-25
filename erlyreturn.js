//isaka matlab hai value ko phle he return krr dena agr condition match hoo jaye
//taki baad ka program run na ho
function bigger(a,b){
    if (a>b){
        console.log("a is bigger");
        return a;
    }
    else{
        console.log("b is bigger");
        return b;
    }
}
console.log(bigger(20, 15));