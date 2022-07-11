//Filter:-
let names=['anjali', 'shubro', 'aarav', 'shubhankar'];
let array=names.filter(function (name){
    return name.length>5;
})
console.log(array);





let ages=[14,18,23,20,16];
let ageArray=ages.filter(function (age){
    return age>=18;
})
console.log(ageArray);
