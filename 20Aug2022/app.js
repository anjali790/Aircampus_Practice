//scope:-
function fname(){
    var name = 'anjali'
    console.log(name);
 }
 fname();
//  console.log(name);//throw an error becoz var is function scope

var count = 1;
function counter(){
    // var count = 1;
    count++;
    console.log(count);
}
counter();
counter();
counter();

