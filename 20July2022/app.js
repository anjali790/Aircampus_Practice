//Find max
// let arr=[13,45,67,23];
// let max=0;
// for(let i=0; i<arr.length; i++){
//   if(max<arr[i]){
//     max=arr[i];
//  }
// }
// console.log(max);




//Find min 
// let arr1=[1,-23,45,70];
// let min=0;
// for(let i=0; i<arr1.length; i++){
//   if(min>arr1[i]){
//     min=arr1[i];
//  }
// }
// console.log(min);





// //Search an element in the given array:-
// let array1=[1,2,3,4];
// let searchElement=3;
// for(let i=0; i<array1.length; i++){
//   if(array1[i]==searchElement){
//     console.log('element is present');
//   }
// }



//sorting an array:-
// let array = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (let i = 1; i < array.length; i++)
//     for (let j = 0; j < i; j++)
//         if (array[i] < array[j]) {
//           let x = array[i];
//           array[i] = array[j];
//           array[j] = x;
//         }

// console.log(array);

let array=[9,8,5,3,4,10];
for(let i=0; i<array.length; i++){
  for(let j=0; j<i; j++){
    if(array[i]<array[j]){
      let x=array[i];
      array[i]=array[j];
      array[j]=x;
    }
  }
}
console.log(array)






//delete an element from an array:-
// let array=[12,34,2,45,67,32];
// let index=3 
// for(let i=0; i<array.length; i++){
//   if(i==index){
//    array.splice(i,1);
//   }
// }
// console.log(array);


// //updating
// let array=[1,23,4,5,6];
// array.forEach((res,i,output)=>output[i]=res+10)
// console.log(array)



