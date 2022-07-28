// //this keyword in arrow function
function sum(){
    console.log(this)
  }
  sum()



let obj={
    name:function(){
        console.log(this)
        let mul=()=>{
            console.log(this);
        }
        mul()
    }
}
obj.name()





// //DEEP AND SHALLOW COPY
let person={
    name: 'anjali',
    branch: 'EEE',
    friend:{
      college: 'kec',
    }
};
// let copy={...person}
let copy=JSON.stringify(person);
copy=JSON.parse(copy);
    
console.log(person.name,copy.name);
copy['name']='sakshi'
console.log(person.name,copy.name);
copy['friend']['college']='abs'
console.log(person,copy);
