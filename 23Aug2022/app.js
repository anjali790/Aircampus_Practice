//[].anjali(); throw an error
Array.prototype.newMethod = function(){
    console.log('new method');
};
// let nums = [1,2,3,4];
[].newMethod();


//----------------------------------//
//object prototype:-
let person = {
    name: 'anjali',
    branch: 'EEE',
    getData: function(){
        console.log(`${this.name} branch is ${this.branch}`)
    },
};
person.getData();



let person2 = {
    name: 'sakshi',
    branch: 'EC',
    getData: function(){
        console.log(`${this.name} branch is ${this.branch}`);
    },
};
person2.getData();



//--------------------------------//
//don't need to create function again and again so use 'call'
let person3 = {
    name: 'mahi',
    branch: 'CS',
};

let person4 = {
    name: 'ravi',
    branch: 'ME',
};

let getData = function(){
    console.log(`${this.name} branch is ${this.branch}`);
}

getData.call(person3);
getData.call(person4);