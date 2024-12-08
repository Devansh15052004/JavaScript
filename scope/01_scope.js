var c=300
  
// scope is all content writen in {}

// var is like global variable 
const b=20
let a=20
if(true){
    let a=10//applicable only in {}
   const  b=10//applicable only in {}
    var c=30//available over enitre program
    console.log(`inner a : ${a}`);
    console.log(`inner b : ${b}`);
    

    
}
console.log(a);
console.log(b);
// console.log(c);
