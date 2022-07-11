let num1=371;
let first_digit=Math.floor(num1/100);
let d=Math.floor(num1/10);
let second_digit=d%10;
let third_digit=num1%10;
if(((first_digit**3)+(second_digit**3)+(third_digit**3))==num1){
    console.log("Number is Armstrong number");
}else{
    console.log("Number is not Armstrong number");
}