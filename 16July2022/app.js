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


//---16---INDEX OF:-indexOf()
let array16 = [12,45,78,98];
console.log(array16.indexOf(78));


//---17---LAST INDEX OF:-lastIndexOf()
let array17 = [12,13,14,15,13];
console.log(array17.lastIndexOf(13));


//---18---INCLUDES:-includes()
let array18 = [1,2,3,4,5,6];
console.log(array18.includes(5));

//---19---FILL:-fill()
let array19 = [12,45,67,89];
console.log(array19.fill(5));


//---20---REDUCE:-reduce()
let array20 = [1,5,4,6,7,8];
let sum=0;
console.log(array20.reduce(function (prev,curr){
    return prev+curr;
}));


//---21---SORT:-sort()
let array21 = ['divya', 'anjali', 'zeenat', 'priya', 'sushmita'];
console.log(array21.sort());


//---22---REVERSE:-reverse()
let array22 = ['divya', 'anjali', 'zeenat', 'priya', 'sushmita'];
console.log(array22.reverse());


//--23---LINEAR SEARCH:-
let array23 = [12,45,78,90,23];
let target = 90;
for(let i=0; i<array23.length; i++){
    if(array23[i] == target){
        console.log(i);
        break;
    }
}


//---24---BINARY SEARCH:-
let binaryArray = [12,13,24,78,97];
let start = 0;
let num=13;
let end = binaryArray.length;
while(start <= end){
    let middle = Math.floor((start+end)/2);
    if(binaryArray[middle] == num){
        console.log(middle);
        break;
    }else if(num > binaryArray[middle]){
        start=middle+1;
    }else{
        end=middle-1;
    }
}


//---26---SNAKE PATTERN:-
let matrix7 = [[1,2,3,4],          //--------->
               [5,6,7,8],          //<---------
               [9,10,11,12],       //--------->
               [13,14,15,16]]      //<---------
let column7 = matrix7[0].length;
let row7 = matrix7.length;

for(let i=0; i<row7; i++){
    if(i%2 ==0){
        for(let j=0; j<column7; j++){
            console.log(matrix7[i][j]);
        }
    }else{
        for(let j=column7-1; j>=0; j--){
            console.log(matrix7[i][[j]]);
        }
    }
}