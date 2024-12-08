//immediately invoked function expression (IIFE)
//for function invoked immediatly and remove gobal pollution
(function func(){
    console.log(`hello`);//NAME IIFE
    
})();

( (name)=> {
    console.log(`arrow hello ${name}`);//UNNAMED IIFE
    
})("devansh")