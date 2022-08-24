//bind
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

let personData = getData.bind(person4, 'shimla');
personData();


