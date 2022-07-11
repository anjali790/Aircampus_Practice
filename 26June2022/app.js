//Print all the number between given range
function range(num1,num2){
    console.log(num1);
    while(num1<num2){
        return range(num1+1,num2);
    }
}
range(1,5);






//Print the product of all the numbers in the given range
function product(num1,num2){
    if(num1<=num2){
      return num1*product(num1+1,num2);
    }else{
      return 1;
    }
  }
  console.log(product(1,6))

  





//Print sum of all the numbers in the given range
function sumOfNumber(num1,num2,sum){
    if(num1<num2){
        sum=sum+num1;
        return sumOfNumber(num1+1,num2,sum);
    }
    return sum;
}
console.log(sumOfNumber(1,10,0))









//Write a recursive program to find the power of given number and exponent
function power(num,pow){
    if(pow>0){
       return num*power(num,pow-1);
    }else{
        return 1;
    }
}
console.log(power(2,6))