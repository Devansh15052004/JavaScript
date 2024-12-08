function myfirstfunction(){
    console.log("hello");
    
}
// myfirstfunction---->Reference
// myfirstfunction()----->call 

function addTwoNumber(number1,Number2){
    console.log(number1+Number2);
    
}
// addTwoNumber(10,10);---->20
 
function addTwoNumbereturn(number1,Number2){
    let result=number1+Number2;
    return result;
}

const result=addTwoNumbereturn(10,10);

// console.log(result);

function logindisplay(name){
    return `${name} is logged in`
}

const data=logindisplay("devansh");

// console.log(data);

