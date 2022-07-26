//1.charAt()
let names = 'anjali';
console.log(names.charAt(5));
console.log(names[5]);

//2.slice()
console.log(names.slice(1,4));

//3.substring()
console.log(names.substring(-1,-3));

//substr()
console.log(names.substr(1,4));

//toLowerCase
console.log(names.toUpperCase());

let person= 'we live in india';
console.log(person.split(' '))
console.log(person.length)
console.log(person.replace('we','all'))
console.log(`${person} ${'right'}`)


//creating a array:-
let start=10;
let end =30;
let array=[];
for(let i=start; i<=end; i++){
    array.push(i);
}
console.log(array)



let arr=[1,2,3,4,5,6,7];
for(let i=0; i<arr.length; i++){
    if(arr[i]<5){
        array[i]*2
        console.log(arr[i])
    }
    
}



let arr1=[1,23,4,5,12,56];
let array1=arr1.forEach((num)=>{
    console.log(arr1+10)
})

let array2=[1,23,4,5,6];
array.forEach((res,i,output)=>output[i]=res+10)
console.log(array2)


//sorting array:
let array3=[21,45,78,23,12,76];
for(let i=1; i<array3.length; i++){
    for(let j=0; j<i; j++){
        if(array3[i]<array[j]){
            let x=array3[j];
            array3[j]=array3[i];
            array[i]=array3[x]
        }
    }
}
console.log(array3)
