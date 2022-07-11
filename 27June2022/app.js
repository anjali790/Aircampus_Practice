//---------------------------------------------While Loop----------------------------------------------//
//Print all digits of a given number
let n=134678,digit;
while(n!=0){
    digit=n%10;
    console.log("Digits of a given number is",digit);
    n=Math.floor(n/10);
}






//Print the sum of all the digits of a number
let num=24537, rem, sum=0;
while(num!=0){
    rem=num%10;
    sum+=rem;
    num=Math.floor(num/10);
}
console.log("Sum of all digits of a given number is",sum);






//Print even digit of a given number
let num1=543768,even;
while(num1!=0){
    even=num1%10;
    num1=Math.floor(num1/10);
    if(even%2==0){
        console.log("Even digits of a given number is",even);
    }
}






//Print odd digits of a given number
let num2=6139047;
while(num2!==0){
    odd=num2%10;
    num2=Math.floor(num2/10);
    if(odd%2!=0){
        console.log("Odd digits of a given number is",odd);
    }
}






//Count the number of digits of a given number
let num3=273890,count=0,remain;
while(num3!=0){
    remain=num3%10;
    count+=1;
    num3=Math.floor(num3/10);
}
console.log("Number of digits of a given number is",count);






//Count the number of Even digits of a given number
let num4=254367,counter=0, x;
while(num4!=0){
    x=num4%10;
    num4=Math.floor(num4/10);
    if(x%2==0){
        counter+=1;
    }
}
console.log("Number of even digits of a given number is",counter)






//Print the sum of all digits of a given number
let num5=12342,add=0,z;
while(num5!=0){
    z=num5%10;
    num5=Math.floor(num5/10);
    if(z%2==0){
        add+=z;
    }
}
console.log("Sum of all digits of given number is",add);






//Print cube of all digits
let num6=1234, digits;
while(num6!=0){
    digits=num6%10;
    console.log("Cube of all digits is",digits**3);
    num6=Math.floor(num6/10);
}






//Print factorial of a given number
let facto=1;
i=5;
while(i>0){
    facto=facto*i;
    i--;
}
console.log("Factorial of 5 is",facto);
