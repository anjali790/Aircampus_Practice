let num=2000;
let years=Math.floor(num/365);
let months=Math.floor((num-years*365)/30);
let days=(num-((years*365)+(months*30)));
console.log(years+months+days)