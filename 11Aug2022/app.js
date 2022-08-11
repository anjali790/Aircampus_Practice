//Promises:-
// function dinnerScenario(){
//     console.log("Entering into the hotel");
//     console.log("calling the server and order paav bajji");
//     console.log("server information the chef to prepare food");
//     setTimeout(()=>{
//         console.log("preparing pavv bhaji");
//     },3000);

// console.log("server deliver the food to the table");
// setTimeout(()=>{
//     console.log("eating paav bhaji");
// },2000);

// console.log("paying the bill");
// console.log("leaving the hotel");
// }
// dinnerScenario();



//use callbacks:-
function preparationOfFood(callback){
    setTimeout(()=>{
        console.log("preparing pavv bhaji");
        console.log("server deliver the food to the table");
        // eatingFood();
        callback();
    },3000);
};

function eatingFood(){
    setTimeout(()=>{
        console.log("eating paav bhaji");
        console.log("paying the bill");
        console.log("leaving the hotel");
    },2000);
};

function dinnerScenario(){
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bajji");
    console.log("server information the chef to prepare food");
preparationOfFood(eatingFood);

};
dinnerScenario();