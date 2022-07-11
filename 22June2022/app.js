//IIFE(Immediately invoked function expression) function
//Sum of two number
let ans=(function sum(x,y){
    return (x+y);
})(35,87);
console.log(ans);






//Find the cube of digits of a number
let res=(function sumOfCubeOfDigits(n){
    let sum=0;
    while(n!=0){
        let rem=n%10;
        sum=sum+rem**3;
        n=Math.floor(n/10);
    }
    return sum;
})(33)
console.log(res);






//Find the square of n number
// let square=(function squareOfNumber(n){
//     let square=0;
//     while(n){
//         square=square+n**2;
//     }
//     return square;
// })(12);
// console.log(square);






//Find the square of n number
let square=(function squareOfNumber(n){
    let square=n**2;
    return square;
})(111);
console.log(square);






//---------------------------------------------------------------------------------------------------------------//

//Find middle digit of n number
function middleDigit(n){
    let digits=parseInt(Math.log10(n)+1);
    n=parseInt(parseInt(n/Math.pow(10,parseInt(digits/2)))%10);
    return n;
}
console.log(middleDigit(3458907));