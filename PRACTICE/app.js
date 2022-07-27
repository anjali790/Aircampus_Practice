 let person = {
    name : 'anjali',
    branch : 'eee',
    place : 'new delhi',
 };
 let copy = {...person};
 console.log(copy)



//setTimeout
setTimeout(function(){
    console.log("calling");
},2000);

function hello(){
    console.log("hello,world0");
}setTimeout(hello,4000);