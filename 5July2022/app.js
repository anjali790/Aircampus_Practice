//-------------------------------------------Array-------------------------------------------------------
let names=['anjali', 'priya', 'monika', 'nidhi', true]
console.log(names[0]);//anjali
console.log(names);//all names
console.log(typeof names);//object






let branches=['EEE', 'CS', 'IT', 'ME', 'CS', 'CE']
branches[10]='CHEMICAL';
console.log(branches[0], branches[3]);//EEE ME
console.log(branches[6]);//undefined
console.log(branches);//[ 'EEE', 'CS', 'IT', 'ME', 'CS', 'CE', <4 empty items>, 'CHEMICAL' ]






//-------------------------------------------------object-----------------------------------------------
let college={
    collegeName: 'KIET',
    name: 'Anjali',
    branch: 'EEE',
    otherBranch:{
        name: 'Shubro',
        branch: 'CS',
    }
}
console.log(college);
console.log(college.collegeName);
console.log(college.otherBranch);
console.log(college.otherBranch.name);
console.log(typeof college);
console.log(college['name']);
console.log(college['otherBranch']['branch'])