//bind:-
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


//reduce:-
let sum = [1,2,3,4].reduce((acc, current)=>{
    return acc+current;
},10);
console.log(sum);


//own reduce function:-
// Array.prototype.myReduce = function(accValue,currentValue){
//     let 
//     for(let i=0; i<this.length; i++){
//         console.log(this[i]);
//     }
// };
// [1,2,3,4].myReduce();
