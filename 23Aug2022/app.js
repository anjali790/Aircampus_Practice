//[].newMethod(); throw an error
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

let getData = function(place, char = 'joyful'){
    console.log(`${this.name} branch is ${this.branch}.I'm from ${place}. I'm ${char}`);
}

getData.call(person3, 'shimla');
getData.call(person4, 'lucknow', 'cool');


getData.apply(person3, ['shimla', 'joyful']);


//array of object:-
let person5 = [
    {
        obj: {
            name: 'anjali',
            branch: 'EEE',
        },
        params: ['shimla', 'cool'],
    },
    {
        obj: {
            name: 'shantanu',
            branch: 'civil',
        },
        params: ['shillong', 'joyful'],
    },
]

for(let data of person5){
    // console.log(data.obj, data.params);
    getData.apply(data.obj, data.params);
}
    