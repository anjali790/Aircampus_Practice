//Given an array of numbers, create a new array by multiplying each number with its square root from the given array. Return original array concatenated with the new array. Use map callback method.
function multiply(arr){
  return arr.map(function square(num){
  return (Math.sqrt(num))*num;
 })
}
console.log(multiply([5, 9, 49, 40, 15]))
exports.multiply = multiply