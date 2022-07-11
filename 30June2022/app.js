//Print the pattern given below, using loops.
// 1
// 01
// 101
// 0101
// 10101
// 01010
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







//Print the pattern given below, using loops.
// 1
// 12
// 123
// 1234
// 12345
let n=5;
for(let i=1; i<=n; i++){
  let stars= '';
  for(let j=1; j<=i; j++){
    stars =stars+j;
  }
  console.log(stars);
}






//Print the pattern given below, using loops.
// 1
// 22
// 333
// 4444
// 55555
let number=5;
for(let i=1; i<=number; i++){
  let stars= '';
  for(let j=1; j<=i; j++){
    stars =stars+i;
  }
  console.log(stars);
}