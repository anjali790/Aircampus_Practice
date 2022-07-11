for(let i=1; i<=4; i++){
    let stars= '';
    for(let j=1; j<=5; j++){
      stars =stars+'*'
    }
    console.log(stars)
  }






let num=5
for(let i=1; i<=num; i++){
    let stars= '';
    for(let j=1; j<=i; j++){
      stars =stars+'*'
    }
    console.log(stars)
}







let n=5
for(let i=1; i<=n; i++){
  let stars= '';
  for(let j=1; j<=i; j++){
    stars =stars+j
  }
  console.log(stars)
}







let number=5;
let count=1;
for(let i=1; i<=number; i++){
  let stars= '';
  for(let j=1; j<=i; j++){
    stars =stars + `${count++}`;
  }
  console.log(stars)
}



  


let num1=5;
for(let i=1; i<=num1; i++){
  let num1= '';
  for(let j=1; j<=i; j++){
    num1 =num1 + i;
  }
  console.log(num1);
}