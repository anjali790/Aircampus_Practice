//Sum of all elements of a given matrix:-
let matrix = [[2,6,7,9],
              [8,1,4,5],
              [4,7,3,8]]
let rows = matrix.length;
let columns = matrix[0].length;
let sum = 0;
for(let i=0; i<rows; i++){
    for(let j=0; j<columns; j++){
        sum+=matrix[i][j];
    }
}
console.log(sum);