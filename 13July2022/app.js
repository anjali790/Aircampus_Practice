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







//Sum of diagonal element of a matrix:-
let matrix2 = [[2,6,7,9],
              [8,1,4,5],
              [4,7,3,8],
              [1,8,6,3]]
let row = matrix2.length;
let column = matrix[0].length;
let sum2 = 0;
for(let i=0; i<row; i++){
    for(let j=0; j<column; j++){
        if(i==j){
            sum2+=matrix[i][j];
        }
    }
}
console.log(sum2);