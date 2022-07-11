//------------------------------------------------------------Question1-------------------------------------------------------------
//Take a number and return all the even digits of the number.Return a list of even digits of the number if multiple digits are combine it in string.Return -1 in case there are no even digits
function even(n){
    let str="",digit;
    if(n==0){
        return "0";
    }else{
    while(n!=0){
        digit=n%10;
        n=Math.floor(n/10);
        if(digit%2==0){
           str=digit+str; 
        }
    }
        return str==""? "-1": str;
    
  }
}
console.log(even(12067));





//------------------------------------------------------------Question2-------------------------------------------------------------
//Take an integer and print 'aircampus' if the input integer is an Aircampus number, otherwise print 'no'.
//A number is called Aircampus number if the sum of its own digits each raised to the power of the number of digits is equal to the original number itself.
function sum(n){
    let temp=n,digit,count,sum=0;
    while(n!=0){
        n=Math.floor(n/10);
        count++;
    }
    n=temp;
    while(n>0){
        digit=n%10;
        n=Math.floor(n/10);
        sum+=digit**count;
    }
    return sum==temp ? "aircampus" : "no";
}
console.log(sum(123));







//------------------------------------------------------------Question3-------------------------------------------------------------
//This will be pattern: 
//5
//4 5
//3 4 5
//2 3 4 5
//1 2 3 4 5
//sum of every element in this is 55
function sum(n){
    let sum=0;
    for(let i=5; i>0; i--){
        for(j=i; j<=n; j++){
            sum+=j;
        }
    }
    return sum;
}
console.log(sum(5))







//------------------------------------------------------------Question4-------------------------------------------------------------
//Take an integer as input and print 'YES' if the number is a special number. Otherwise, print 'NO'.
//A special number is a number which is equal to the sum of the factorials of its digits. Example: For number = 145, the output should be 1! + 4! + 5! = 145 Hence 145 is a special number.
function specialNumber(n){
    let digit,sum=0,temp=n;
    if(n==0){
        return "NO"
    }
    while(n!=0){
        facto=1
        digit=n%10;
        n=Math.floor(n/10);
        for(let i=digit; i>0; i--){
            facto*=i;
        }
        sum+=facto;
    }
    return sum==temp ? "YES" : "NO";
}
console.log(specialNumber(145))








//------------------------------------------------------------Question5-------------------------------------------------------------
//1
//01
//010
//1010
//01010
    let count=0,n=5;
    for(i=1; i<=n; i++){
        let num=""
        for(j=1; j<=i; j++){
            if((i+j)%2!=0){
                count=0;
            }else{
                count=1;
            }
            num+=count;
        }
        console.log(num);
    }
   
   

