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



function hello(){
  console.log("hello,how are you");
}setTimeout(hello,5000);




// function hello1(){
//   console.log("hello,how are you");
// }setInterval(hello1,5000);
// clearInterval(hello1)


//merge two arrays:-
let merge = (first, second)=>{
  for(let i=0; i<second.length; i++){
    first.push(second[i]);
  }
  return first;
}
console.log(merge([1,3,5,7],[2,4,6,8]))



//reduce
let array=[1,2,3,4];
let squ=array.reduce(function(pre,curr){
return pre*curr
  
});
console.log(squ,array);