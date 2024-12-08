const myobj={
    username:"devansh",
    age:"20"
}
function details(user){
    return `user name: ${user.username} and age is: ${user.age}`;
}
console.log(details(myobj));
console.log(details({
    username:"admin",
    age:"20"
}));

// set of values given in attribute is return as array with help of ... 
function returnarray(...num){
    return num;
}
console.log(returnarray(100,200,300,400));
