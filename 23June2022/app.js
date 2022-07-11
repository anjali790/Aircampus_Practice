//-------------------------------HOF(High Order Function)----------------------------------------------//

function b(x,y){
    return x+y;
}
function a(b){
    return b(9,8);
}
console.log(a(b));





//Check whether given number is EVEN or ODD
function evenNumber(num){
    if(num%2==0){
        return "EVEN";
    }else{
        return "ODD";
    }
}
function z(evenNumber){
    return evenNumber(786);
}
console.log(z(evenNumber));





//Find factorial of number
function factorial(num){
    let facto=1;
    for(i=num; i>=1; i--){
    facto=facto*i;
    }
    return facto;
}
function x(factorial){
    return factorial(6);
}
console.log(x(factorial));






//Print table for any number
// function table(num){
//     for(i=1; i<=10; i++){
//         console.log(num,'X',i,'=',num*i);
//     }
// }
// function y(table){
//     return table(11);
// }
// console.log(y(table));     





//-----------------------------------------Set Time Out----------------------------------------------//
function n(){
    console.log("Anjali");
}
setTimeout(n,2000);






//----------------------------------------Set Inteval-------------------------------------------------//
function interval(){
    console.log("Anjali");
}
setInterval(interval,5000);