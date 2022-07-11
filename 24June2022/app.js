//----------------------------------------------------Recursion------------------------------------------------//
// function x(){
//     console.log("hello");
//     return x();
// }
// x();



//Print a number one time
function y(num){
    console.log(num);
    // return y(num)
}
y(8);




//Print a number infinite times
// function z(num){
//     console.log(num);
//     return z(num);
// }
// z(10);





//Print number in decending order
function dec(num){
    if(num>0){
    console.log(num);
    return dec(num-1);
    }
}
dec(16);






//Print factorial of a number
function p(num,facto){
    if(num>0){
        facto=num*facto;
        return p(num-1,facto);
    }
    return facto;
}
console.log(p(7,1));







//Print number between given range
function range(x,y){
    console.log(x);
    while(x<y){
        return range(x+1,y)
    }
}
range(30,50)






//Print Fibonacci series
function fibonacci(first,second,counter){
    if(counter<=10){
    console.log(first);
    let c=first+second;
    return fibonacci(second,c,counter+1);
    }
}
fibonacci(1,1,1);





//Print odd number between given range
function y(num1,num2){
    if(num1<num2 && num1%2==1)
    console.log(num1);
    return y(num1+1,num2);
  }
  y(9,31)