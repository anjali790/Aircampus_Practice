//Accept the number of days from the user and calculate the charge for library according to following :
//Till five days : Rs 0/day.
//Six to ten days : Rs 3/day.
//11 to 15 days : Rs 4/day
//After 15 days : Rs 5/day
function calculateCharge(number_of_days){
    if(number_of_days<=5){
      return number_of_days*0;
    }else if(number_of_days>=6 && number_of_days<=10){
      return 5*0+(number_of_days-5)*3;
    }else if(number_of_days>=11 && number_of_days<=15){
      return 5*0+5*3+(number_of_days-10)*4;
    }else if(number_of_days>15){
      return 5*0+5*3+5*4+(number_of_days-15)*5;
    }
  }
  console.log(calculateCharge(10))
  exports.calculateCharge = calculateCharge








//Hey can you really chose the government, really? Lets find out.

//You will be given day, month, year of birth You will also be given election day, month and year

//You are only allowed to vote if following condotions are fulfilled.

//1.your age should be greater than 20 years,6 months, 11 days return "I can vote"

//2.if your age is greater than 50 years 8 months 12 days and less than 70 years 5 months and 11 days than you can return "I cannot walk so cannot vote please make an app to vote"

//3.if election date is your birthday than you will recieve a "iphone" if you are eligible for vote. return "I received an iphone"

//4.if age is greater than 70 years 5 months and 11 days return "I will watch naruto rather than voting"
function eligible(
    birth_day, birth_month, birth_year,
    election_day, election_month, 
    election_year){
    if(2022-birth_year>20 && birth_month>6 && birth_day>11){
      return "I can vote";
    }else if(2022-birth_year>50 && birth_month>8 && birth_day>12 && 2022-birth_year<70 && birth_month<5 && birth_day<11){
      return "I cannot walk so cannot vote please make an app to vote";
    }else if(election_day==birth_day){
      return "I received an iphone";
    }else if(2022-birth_year>70 && birth_month>5 && birth_day>11){
      return "I will watch naruto rather than voting"
    }
  }
  console.log(eligible(10, 5, 1970, 12, 6, 2022))
  exports.eligible = eligible






  //Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
  //-> Numbers should be even
  //-> Second last digit of number is 4
  function product(a,b){
    let product=1;
    for(let i=a; i<=b; i++){
     if(i%2==0 && Math.floor(i/10)%10==4){
        product= product *i;
      }
    }
    if(product<1680){
      return 0;
    }else{
      return product;
    }
  }
  console.log(product(30,35))
  exports.product = product  







//Write a code to take temperature in Fahrenheit and convert it to Celsius.
//C=(F-32)*5/9
function temperature(temp){
    let C=(temp-32)*5/9
    return C;
}
console.log(temperature(122))
exports.temperature = temperature







//Write a code to take time in seconds and convert it into hour, mins and seonds
function time(seconds){
  let hours=Math.floor(seconds/3600);
  let minutes=Math.floor((seconds-hours*3600)/60);
  let second=seconds-(hours*3600+minutes*60);
       return ('In '+seconds+' seconds '+hours+' hours , '+minutes+' minutes and '+second+' seconds are possible');
    }
  console.log(time(5000))
  exports.time = time