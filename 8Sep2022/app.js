//entering into hotel
//ordering the food
//preparing the food
//food is deliverd
//eating the food
//paying the bill
//leaving the hotel

function entering(){
    console.log('entering into hotel');
    console.log('ordering the food');
    eating();
};
entering();

function preparing(){
    setTimeout(()=>{
        console.log('preparing the food');
    },5000);
}
preparing();


function eating(){
    setTimeout(()=>{
        console.log('eating the food');
        console.log('paying the bill');
        console.log('leaving the hotel');
    },10000)
}
// eating();