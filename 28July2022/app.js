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





