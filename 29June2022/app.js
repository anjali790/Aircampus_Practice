//Print given pattern:-
// 1
// 01
// 101
// 0101
// 10101
// 010101
 let num=6;
let count=0;
for(i=1; i<=num; i++){
    star='';
    for(j=1; j<=i; j++){
        if((i+j)%2!=0){
            count=0;
        }else{
            count=1;
        }
        star+=count;
    }
    console.log(star);
}






//Print hollow square:-
// * * * * 
// *     * 
// *     * 
// * * * *
let n=4;
for(let i=1; i<=n; i++){
  star='';
  for(let j=1; j<=n; j++){
    if(i==1 || i==4 || j==1 || j==4){
      star+='* ';
    }else{
      star+='  ';
    }
  }
  console.log(star)
}








//Print hollow triangle:-
// * 
// * * 
// *   * 
// *     * 
// *       * 
// * * * * * * 
for(let i=1; i<=6; i++){
  star='';
  for(j=1; j<=i; j++){
    if(i==6){
      star+=`${"*"} `;
    }else{
      if(j==1 || j==i){
        star+=`${"*"} `;
      }else{
        star+="  ";
      }
      }
    } 
    console.log(star)
}






//Print reverse left side triangle:-
// *****
// ****
// ***
// **
// *
for(let i=5; i>=1; i--){
    star='';
    for(let j=1; j<=i; j++){
      star+='*';
    }
    console.log(star)
  }
