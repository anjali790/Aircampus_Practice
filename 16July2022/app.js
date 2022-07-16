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



//---8---


