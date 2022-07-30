 //copy an object
 let person1 = {
    name : 'anjali',
    branch : 'eee',
    place : 'new delhi',
 };
 let copy1 = {...person1};
 console.log(copy1)



//setTimeout:-
setTimeout(function(){
    console.log("calling");
},2000);

function hello(){
    console.log("hello,world");
}setTimeout(hello,4000);



//setInterval:-
// function interval(){
//     console.log("hey, hii");
// }(setInterval(interval,6000))



// let array = ['bike', 'scooter', 'truck', 'bus', 'car', 'bicycle', 'scooty'];
// for(let i=0; i<array.length; i++){
//     if(i=2){
//         // console.log(array[i]);
//     }
// }
// console.log(i)






//DEEP AND SHALLOW COPY
let person={
    name: 'anjali',
    branch: 'EEE',
    friend:{
      college: 'kec',
    }
    };
    let copy={...person}
     copy=JSON.stringify(person)
    copy=JSON.parse(copy)
    
  console.log(person.name,copy.name);
  copy['name']='sakshi'
  console.log(person.name,copy.name);
  copy['friend']['college']='abs'
  console.log(person,copy);

  



//HOF:-
let arr=[1,2,3,4];
let sum=arr.map(function(num){
  console.log(num)
  return num*2
})
console.log(sum)
//map is higher order function
//the function passed to the map is callback function







//this keyword in arrow function
function sum1(){
    console.log(this)
  }
  sum1()
  let person2={
    name:function(){
      console.log(this)
      let mul=()=>{
        console.log(this)
      }
      mul()
    }
  }
  person2.name()





  // //DEEP AND SHALLOW COPY
// let person={
//     name: 'anjali',
//     branch: 'EEE',
//     friend:{
//       college: 'kec',
//     }
//     };
//     // let copy={...person}
//     let copy=JSON.stringify(person)
//     copy=JSON.parse(copy)
    
//   console.log(person.name,copy.name);
//   copy['name']='sakshi'
//   console.log(person.name,copy.name);
//   copy['friend']['college']='abs'
//   console.log(person,copy);

  



// //HOF:-
// let arr=[1,2,3,4];
// let sum=arr.map(function(num){
//   console.log(num)
//   return num*2
// })
// console.log(sum)
// //map is higher order function
// //the function passed to the map is callback function







// //this keyword in arrow function
// function sum(){
//     console.log(this)
//   }
//   sum()
//   let person2={
//     name:function(){
//       console.log(this)
//       let mul=()=>{
//         console.log(this)
//       }
//       mul()
//     }
//   }
//   person2.name()



function num1(){
  console.log("hello,how are you");
}setTimeout(num1,5000);




// function num(){
//   console.log("hello,how are you");
// }setInterval(num,5000);
// clearInterval(num)




