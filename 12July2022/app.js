//2D Array:-
let arrayMatrix = [[1,2,3,4],
                   [4,5,6,7],
                   [8,9,10,11]];

//Number of rows:-
console.log("rows of matrix",arrayMatrix.length);

//Number of columns:-
console.log("columns of matrix",arrayMatrix[0].length);

//Elements of matrix:-
for(let i=0; i<arrayMatrix.length; i++){
    for(let j=0; j<arrayMatrix[0].length; j++){
        console.log(arrayMatrix[i][j]);
    }
}

//Print matrix:-
console.log(arrayMatrix);


//Index of element of matrix:-
for(let i=0; i<arrayMatrix.length; i++){
    for(let j=0; j<arrayMatrix[0].length; j++){
        console.log(`${i}${j}`);
    }
}


//--------------------------------------------------------------------------------------------------------------------------
//Every:-It will take all values and compare if all the values passes the given condition then it return true else false.
let nums = [1,5,4,6,7,8];
console.log(nums.every(function (num){
    return num > 6;
}));




//--------------------------------------------------------------------------------------------------------------------------
//Some:-It will take all values and compare if any one values passes the given condition then it return true else false.
let numbers = [1,5,4,6,7,8];
console.log(numbers.some(function (num){
    return num > 7;
}));




let names = ['anjali', 'shalini', 'divya', 'ankita'];
console.log(names.some(function (name){
    return name.length>6;
}))