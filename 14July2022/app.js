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




//----------------------------------------------------------------------------------------------------------------
//SLICE in string:- works same as in array
let firstName = 'anjali'
console.log(firstName.slice(1,-1)); // output:-njal



//SUBSTRING:-same as slice but it does not accept negative index
let firstName2 = 'shubro';
console.log(firstName2.substring(0,4)); //output:-shub
console.log(firstName2.substring(-4,-1)); //output:-blank


//SUBSTR:-substr(start index, no. of character you want)
let firstName3 = 'anjali yadav';
console.log(firstName3.substr(1,5)); //output:-njali




//----------------------------------------------------------------------------------------------------------------
//toUpperCase():-
let firstName4 = 'AnjaLi';
console.log(firstName4.toUpperCase()); //output:-ANJALI

//toLowerCase():-
let firstName5 = 'ShuBro';
console.log(firstName5.toLowerCase()); //output:-shubro
