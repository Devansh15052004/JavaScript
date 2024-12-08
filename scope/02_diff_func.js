// two way to declare function

// HOISTING
 
console.log(myfunc1(2));//can be call before function implementation
// 1st
function myfunc1(num){
    return num+1
}

// console.log(myfunc1(2)); can be after as usual

//2nd

// console.log(func(2));  will give error as funtion is implemented after call it
//call the function by variable
const func=function myfunc2(num){
    return num+1;
}

console.log(func(2));//will work properly
