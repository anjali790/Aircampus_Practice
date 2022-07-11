//Celsius to Fahrenheit//
var C=25;
var T=(9/5)*C+32;
console.log("Celsius to Fahrenheit",T);



//Fahrenheit to Celsius//
var F=77;
var C=(F-32)*(5/9);
console.log("Fahrenheit to celsius",C);



//Cube of a number//
let num=5;
let cube=(num*num*num);
console.log("Cube of 5 is",cube);



//Swap two number//
var num1=10;
var num2=2;
var swapNum=(num2+","+num1);
console.log("Swap of 10,2 is",swapNum);



//Average salary//
let salary1=50;
let salary2=45;
let salary3=60;
let salary4=55;
let salary5=65;
let average=(salary1+salary2+salary3+salary4+salary5);
console.log("Average salary is",average);



//Find profit or loss//
let cp=500;
let sp=700;
let profit=sp-cp;
let loss=cp-sp;
if(sp>cp){
    console.log("Profit is",profit)
}else{
    console.log("Loss is",loss)
}



//First digit//
var number=123
let firstDigit=Math.floor(number/100);
  let firstdigit=Math.ceil(number/100);
  if(number>=0){
  console.log("First digit of number is",firstDigit);
}else{
 console.log("First digit of number is",-1*firstDigit);
  }



//Decimal of number//
var number1=5;
var number2=2;
let x=(number1/number2);
let y=Math.floor(number1/number2);
let decimal=x-y;
console.log("Decimal of the number is",decimal)