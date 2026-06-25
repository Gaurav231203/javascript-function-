//what dose the ...operator mean in js

function arr(x,y,z,...rest){
    console.log(x,z,...rest);
}
arr(13,12,11,33,44,55,66)