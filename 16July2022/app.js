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
