//add property in object:-
let person1 = {
    fname : 'Anjali',
    branch : 'EEE',
    place : 'New Delhi',
};
person1['country'] = 'India';
console.log(person1);




//delete value from an object:-
let person2 = {
    fname : 'Anjali',
    branch : 'EEE',
    place : 'New Delhi',
};
person2['country'] = 'India';
delete person2.branch;
console.log(person2);




//
let person3 = {
    fname : 'Anjali',
    branch : 'EEE',
    place : 'New Delhi',
};
for(let key in person3){
    console.log(key,person3[key]);
}

