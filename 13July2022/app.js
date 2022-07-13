//Sum of all elements of a given matrix:-
let matrix = [[2,6,7,9],
              [8,1,4,5],
              [4,7,3,8],
              [1,8,6,3]]
let rows = matrix.length;
let columns = matrix[0].length;
let sum = 0;
for(let i=0; i<rows; i++){
    for(let j=0; j<columns; j++){
            sum+=matrix[i][j];
    }
}
console.log(sum);






//----------------------------------------------------------------------------------------------------------------------------------------
//Sum of diagonal element of a matrix:-
let matrix2 = [[2,6,7,9],
              [8,1,4,5],
              [4,7,3,8],
              [1,8,6,3]]
let row2 = matrix2.length;
let column = matrix2[0].length;
let sum2 = 0;
for(let i=0; i<row2; i++){
    for(let j=0; j<column; j++){
        if(i==j){
            sum2+=matrix[i][j];
        }
    }
}
console.log(sum2);







let matrix3 = [[1,2,3],
               [4,5,6],
               [7,8,9]]
let row3 = matrix3.length;
let sum3=0
let start3=0;
for(let i=0; i<row3; i++){
    sum3 += matrix3[i][start3];
    start3+=1;
}
console.log(sum3);







//----------------------------------------------------------------------------------------------------------------------------------------
//Sum of diagonal:-
let matrix4 = [[1,2,30],
               [4,20,6],
               [10,8,9]]
let row4=matrix4.length;
let start4=matrix4.length-1;
let sum4=0;
for(let i=0; i<row4; i++){
    sum4+=matrix4[i][start4];
    start4-=1;
}
console.log(sum4);
 







//----------------------------------------------------------------------------------------------------------------------------------------
//Sum of columns of a given matrix:-
let matrix5 = [[1,2,3,4],
               [5,6,7,8],
               [9,10,11,12],
               [13,14,15,16]]
let row=matrix5.length;
let starts=0;
let sum5=0;
for(let i=0; i<row; i++){
    sum5+=matrix5[i][starts];
}
console.log(sum5);







//----------------------------------------------------------------------------------------------------------------------------------------
//Sum of rows of a given matrix:-
let matrix6 = [[1,2,3,4],
               [5,6,7,8],
               [9,10,11,12],
               [13,14,15,16]]
let sum6=0;
let start6=0;
let row6=matrix6.length;
for(let i=0; i<row6; i++){
    sum6+=matrix6[start6][i];
}
console.log(sum6);









//----------------------------------------------------------------------------------------------------------------------------------------
//Linear search:-
let array = [1,2,3,4,5,6,7,8,9,10,11,23,12,4,5,67];
let target = 4;
for(let i=0; i<array.length; i++){
    if(array[i]==target){
        console.log(i);
        break;
    }
}






//----------------------------------------------------------------------------------------------------------------------------------------
//Binary search:-
let binaryArray = [12,13,24,78,97];
let start = 0;
let num=13;
let end = binaryArray.length;
while(start <= end){
    let middle = Math.floor((start+end)/2);
    if(binaryArray[middle] == num){
        console.log(middle);
        break;
    }else if(num > binaryArray[middle]){
        start=middle+1;
    }else{
        end=middle-1;
    }
}





//----------------------------------------------------------------------------------------------------------------------------------------
//Snake pattern in matrix:-
let matrix7 = [[1,2,3,4],
               [5,6,7,8],
               [9,10,11,12],
               [13,14,15,16]]
let column7 = matrix7[0].length;
let row7 = matrix7.length;

for(let i=0; i<row7; i++){
    if(i%2 ==0){
        for(let j=0; j<column7; j++){
            console.log(matrix7[i][j]);
        }
    }else{
        for(let j=column7-1; j>=0; j--){
            console.log(matrix7[i][[j]]);
        }
    }
}













// let  array1= [1,2,3,4,5,6,7,8,9];
// let num=7;
// let start1=0;
// let end= array.length-1;
// for(let i=0; i<array1.length; i++){
//     let middle = Math.floor(start1+end)/2;
//     if(array[middle]==num){
//         console.log(middle);
//     }else if(num>array[middle]){
//         start=middle+1;
//     }else if(num<array[middle]){
//         end=middle-1;
//     }
// }
//for i=0 start=0 end=8 middle=4 num>middle start=middle+1=5
//i=1 start=5 end= 8 middle=6