//---1---flat method:-syntax= flat()
//flat(depth)
let array=[1,4,5,[4,8,9],[[3,9,2]]];
console.log(array.flat());
console.log(array.flat(2));



//---2---
let person = {
    fname : 'Anjali',
    branch : 'EEE',
    location : 'New Delhi',
};
console.log(Object.keys(person));


//---3---
let person1 = {
    fname : 'Shubro',
    branch : 'ME',
    location : 'New Delhi',
};
console.log(Object.values(person1));


//---4---
let person2 = {
    fname : 'Sakshi',
    branch : 'EC',
    location : 'New Delhi',
};
console.log(Object.entries(person2));


//---5---length of an object:-
let person3 = {
    fname : 'Vaishali',
    branch : 'CS',
    location : 'New Delhi',
};
console.log(Object.keys(person3).length);



