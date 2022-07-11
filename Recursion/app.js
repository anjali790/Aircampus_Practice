//factorial of a number
function factorial(num,fact){
    if(num>0){
        fact=fact*num;
        return factorial(num-1, fact)
    }
    return fact;
}
console.log(factorial(6,1));




//number between range
function range(x,y){
    console.log(x);
    while(x<y){
        return range(x+1,y)
    }
}
range(30,50)





//even number
function range1(p,q){
  
    console.log(p);
    while(p%2==0 && p<40){
        return range1(p+2)
    }
}
range1(20);





//odd number
// function odd(num1){
//     console.log(num1);
//     while(num1%2!=0 && num1<50){
//         return odd(num1+1)
//     }
// }
// odd(21);









//number in decending order
function range1(p,q){
    console.log(p);
    while(p>q){
        return range1(p-1,q)
    }
}
range1(50,30)





//number in decending order
function dec(s,t){
    console.log(t);
    while(s<t){
        return dec(s,t-1)
    }
}
dec(20,40) 







//fibonnaci series
function fibo(first, second, counter){
  if (counter<10){
    var c = first + second;
    return fibo(second,c, counter+1);
    
  }
  console.log(first);
}
fibo(1,1,1);










//count number of digits
function countDigit(num,count){
    if(num>0){
        count++;
        num=Math.floor(num/10);
        return countDigit(num,count);
    }
    console.log(count);
}
countDigit(87342,0);














// console.log(Math.log10(1000)+2)
// let nn=123456789;
// let n= nn.toString();
// let a=(n.length/2)
// console.log(a)

// var digit = Math.log10(nn)+1;
// console.log(digit);
// digit = parseInt(digit); 
// console.log(digit); // length 
// digit = parseInt(digit /2)
// console.log(digit); // 2 mid 
// digit = Math.pow(10,digit)
// console.log(digit); // power 10 by putting our digit 100
// digit = parseInt(nn / digit)
// console.log(digit); 
// digit = parseInt(digit % 10 )
// console.log(digit); 





