//---1---PUSH:-push() add element to the end of array
let array1 = [12,45,67,89];
array1.push(15);
console.log(array1); //output:- [12,45,67,89,15]


//---2---POP:-pop() remove element from end of array
let array2 = [24,45,67,32];
array2.pop();
console.log(array2); //output:- [24,45,67]


//---3---SHIFT:-shift() remove element from start of array
let array3 = [24,45,67,32];
array3.shift();
console.log(array3); //output:- [45,67,32]



//---4---UNSHIFT:-unshift() add element to the start of array
let array4 = [24,45,67,32];
array4.unshift(70);
console.log(array4); //output:- [70,24,45,67,32]


//---5---SLICE:-slice()
let array5 = [12,34,56,78,89,90];
console.log(array5.slice(2,4)); //outpu:-[56,78]


//---6---SPLICE:-splice()
let array6 = [34,57,68,90,21];
array6.splice(1,0,10)
console.log(array6);


//---7---DELETE:-
let array7 = [1,2,3,4,5];
array7.length=0;
console.log(array7);



//---8---EVERY:-every()
let array8 = [1,5,4,6,7,8];
console.log(array8.every(function (num){
    return num > 6;
}));



//---9---SOME:-some()
let array9 = [1,5,4,6,7,8];
console.log(array9.some(function (num){
    return num > 6;
}));



//---10---FILTER:-filter()
let array10 = [1,5,4,6,7,8];
console.log(array10.filter(function (num){
    return num > 6;
}));


//---11---MAP:-map()
let array11 = [1,5,4,6,7,8];
console.log(array11.map(function (num){
    return num**2;
}));


//---12---JOIN:-join()
let array12 = [12,2,3,56,76,9];
console.log(array12.join('-'));


//---13---TO STRING:-toString()
let array13 = [12,13,56,87,65];
console.log(array13.toString());


//---14---IS ARRAY:- Array.isArray:
let array14 = [12,34,2,5,78];
console.log(Array.isArray(array14));


//---15---CONCAT:-concat()
let arrayA = [13,25,78,90];
let arrayB = [34,98,97];
console.log(arrayA.concat(arrayB));




