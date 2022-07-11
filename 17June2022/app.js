//Palindrome number
let num1=292;
let first_digit=Math.floor(num1/100);
let b=Math.floor(num1/10);
let second_digit=b%10;
let third_digit=num1%10;
let reveseNumber=((third_digit*100)+(second_digit*10)+first_digit);
if(reveseNumber==num1){
    console.log("Number is Palindrome number");
}else{
    console.log("Number is not Palindrome number");
}




//Prime number
let number=5;
let check=true;
for(i=2; i<number; i++){
    if(number%i==0){
        check=false;
    }
}if(check==true){
    console.log("YES")
}else{
    console.log("NO")
}

