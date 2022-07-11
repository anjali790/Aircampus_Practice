//Addition of two numbers
let num1=5;
let num2=6;
add= num1+num2;
console.log("sum of two number is",add);

//Squareroot of number
let num=64;
root=Math.sqrt(num);
console.log("squareroot of a number is",root);

// numbers from 1-10
for(i=1; i<=10;i++){
    console.log(i);
}

//print even numbers from 1-20
for(let i=1;i<=20;i++){
if(i%2==0){
    console.log(i);
}
}

// sum of Even numbers from 1-20
let sum=0;
for(i=1;i<=20;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log("sum of Even numbers from 1-20 is :" + sum);

//Print numbers from 20-1
for(i=20; i>=1; i--){
    console.log(i);
}

//print sum of natural numbers from 1-20
let sum1=0;
for(i=1; i<=20;i++){
    sum1=sum1+i;
}
console.log("sum of natural numbers from 1-20 is : " + sum1);

// print the table of 6
let a=6;
for(i=1;i<=10;i++){
    console.log(a*i);
}

//print odd numbers from 1-20
for(i=1; i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}

///return the factorial of 5

let factorial=1;
for(i=5; i>=1;i--){
    factorial=factorial*i;
}
console.log("factorial of 5 is :"+ factorial);

/// print "YES" if the integer is prime and "NO" if it is not.
let x= 3;
let check=true;
for(let i=2; i<x; i++){
    if(x%i==0){
        check=false;
    }
}
if(check==true){
    console.log("Yes");
}
else{
    console.log("No");
}