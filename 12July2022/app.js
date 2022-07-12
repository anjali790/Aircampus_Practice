//2D Array:-
let arrayMatrix = [[1,2,3,4],
                   [4,5,6,7],
                   [8,9,10,11]];

//Number of rows:-
console.log("rows of matrix",arrayMatrix.length);

//Number of columns:-
console.log("columns of matrix",arrayMatrix[0].length);

for(let i=0; i<arrayMatrix.length; i++){
    for(let j=0; j<arrayMatrix[0].length; j++){
        console.log(arrayMatrix[i][j]);
    }
}
