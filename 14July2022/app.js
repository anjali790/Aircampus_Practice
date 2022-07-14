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



//----------------------------------------------------------------------------------------------------------------
//Strings are unmutable(not changeable):- we can not change each character but we can change entire string
let names = 'divya';
names[0]='p';
console.log(names); //so here we can not change 'd' with 'p' becoz we can't change each character of string

let lname = 'priya';
lname = 'aarav';
console.log(lname); // so here entire string get changed, i.e 'priya' with 'aarav'


//Type of names:-
console.log(typeof names) //string



//----------------------------------------------------------------------------------------------------------------
//Comparator in String:-
let name1 = 'sakshi';
let name2 = 'sakshi';
console.log(name1 == name2); //it will return TRUE becoz string stores the value not address


let nums = '1,2,3,4,5';
number = nums;
console.log(nums == number); //it return TRUE

//Comparator in Array:-
let name3 = ['shubro'];
let name4 = ['shubro'];
console.log(name3 == name4); // it will return FALSE becoz array stores address not value and address is different for name3 and name4




