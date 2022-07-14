//------------------------------------------------STRING----------------------------------------------------------
//To get all the characters of a string:-
let fname = 'anjali';
console.log(fname[0],fname[1]);

//Using loop:-
for(let i=0; i<fname.length; i++){
    console.log(fname[i]);
}

//To reverse the all chararter of a string:-
for(let i=fname.length-1; i>=0; i--){
    console.log(fname[i]);
}




//Strings are unmutable(not changeable):- we can not change each character but we can change entire string
let names = 'divya';
names[0]='p';
console.log(names); //so here we can not change 'd' with 'p' becoz we can't change each character of string

let lname = 'priya';
lname = 'aarav';
console.log(lname); // so here entire string get changed, i.e 'priya' with 'aarav'
