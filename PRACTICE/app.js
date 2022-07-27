 //copy an object
 let person = {
    name : 'anjali',
    branch : 'eee',
    place : 'new delhi',
 };
 let copy = {...person};
 console.log(copy)



//setTimeout:-
setTimeout(function(){
    console.log("calling");
},2000);

function hello(){
    console.log("hello,world");
}setTimeout(hello,4000);



//setInterval:-
function interval(){
    console.log("hey, hii");
}(setInterval(interval,6000))
