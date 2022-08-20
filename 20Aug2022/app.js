//scope:-
function fname(){
    var name = 'anjali'
    console.log(name);
 }
 fname();
//  console.log(name);//throw an error becoz var is function scope




function count(){
    var countNum = 1;
    countNum++;
    console.log(countNum);
}
count();//2
count();//2
count();//2



var count = 1;
function counter(){
    count++;
    console.log(count);
}
counter();//2
counter();//3
counter();//4

