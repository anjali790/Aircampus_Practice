//Filter:- is used to filter the elements based on a speific condition and it does not effect original array, it create a new array and return values in it.
//Filter have inbuild for loop.
//Filter method do the comparison only.

let nums = [1,2,3,4,5,2,4];
let newArray=nums.filter(function(num){
    return num<4;
})   
console.log(newArray);





let names=['anjali', 'shubro', 'aarav', 'shubhankar'];
let array=names.filter(function (name){
    return name.length>5;
})
console.log(array);






let ages=[14,18,23,20,16];
let ageArray=ages.filter(function (age){
    return age>=18;
})
console.log(ageArray);





//---------------------------------------------------------------------------------------------------------------------------------------
//Map:-is used to perform any opertaion and comparison.
//Find the square
let numbers=[1,2,3,4,5];
let squareArray=numbers.map(function (square){
    return square**2;
})
console.log(squareArray);






//Find the factorial
let num1=[3,4,5,6,7];
let factorialArray=num1.map(function (num){
    let facto=1;
    for(i=num; i>0; i--){
        facto*=i;
    }
    return facto;
})
console.log(factorialArray);






//--------------------------------------------------------------------------------------------------------------------------------
//Truthy values:-
//remove all the falsy values
let truthyArray=[1,[],{},'',false,true,'anjali',null,undefined];
let truthyValues = truthyArray.filter(Boolean);
console.log(truthyValues);




//Falsy values:-
//remove all the truthy values
let falsyArray=[1,[],{},'',false,true,'anjali',null,undefined];
let falsyValues = falsyArray.filter((nums) => !nums);
console.log(falsyValues);


