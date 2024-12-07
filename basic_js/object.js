//const obj=new Object();---->singelton object


const obj={
    fullname:{
        userfullname:{
            firstname:"devansh"
        }
    }
}
// console.log(obj.fullname.userfullname.firstname);

const obj1={1:"a",2:"b",3:"e"}
const obj2={2:"c",3:"d"}

const obj3=Object.assign(obj1,obj2);

// console.log(obj1);

// console.log(obj3);

const obj4={...obj1,...obj2}
console.log(obj4);


//object with array
// const onj=[
//     {}
//     {}
// ]
//to access
//obj[1].propertyName;


console.log(Object.keys(obj));//return array of keys
