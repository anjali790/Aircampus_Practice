let num=5;
for(i=1; i<=num; i++){
    star="";
    for(j=1; j<=num-i; j++){
        star+=" "
       }   
       for(k=1; k<=i; k++){
            star+="*"
        }
    console.log(star)
}






let num1=5;
for(i=num1; i>=1; i--){
    star="";
    for(j=1; j<=num1-i; j++){
        star+=" ";
    }
    for(let k=1; k<=i; k++){
        star+="*"
    }
    console.log(star)
}







let num2=5;
for(let i=num2; i>=1; i--){
    star="";
    for(let j=1; j<=i; j++){
        star+="*";
    }
    console.log(star)
}






let num3=5;
for(i=1; i<=num3; i++){
    star="";
    for(j=1; j<=i; j++){
        star+="*";
    }
    console.log(star)
}





function sum(n){
    n=parseFloat(n)
    let sum=0;
    for(i=1; i<=n; i++){
        let k=0;
        for(let j=0; j<=i; j++){
            k=k+j;
        }sum=sum+(i/k);
    }
    return (sum).toFixed(3);
}
console.log(sum(3))

