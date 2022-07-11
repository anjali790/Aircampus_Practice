let num1=5;
let count=1;
for(let i=1; i<=num1; i++){
    let space=" ";
    let star='';
    for(let j=1; j<=i; j++){
        if(count<=9){
            space="  "
        }
        star=star + `${count++} `+ space;
    }
    console.log(star)
}







let num=6;
for(i=1; i<=num; i++){
  let star=''
  for(j=1; j<=i; j++){
    let count= 0
    if((i+j)%2!=0){
      count=0;
    }else{
      count=1;
    }
    star=star+count;
  }
  console.log(star)
}










console.log("first");
setTimeout(function(){
    console.log("hello");
},5000)
setTimeout(function(){
    console.log("calling");
},2000)
console.log("second");