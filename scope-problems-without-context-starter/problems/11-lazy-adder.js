// After you initiate an object/external function, EVERY subsequent calling of that function (if it's accumulated from the last calling of the function)
// everytime you are REINITIATING/REDECLARING a new instance from the last call/return of the original object instance
// will require a nested function
// think: you can only return the internal function when you call the immediate outside one.
// If you have an object, you can only invoke the methods inside


/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

// your code here
// let lazyAdder = (num) => {
//   let sum = num;
//   let count =0
//   return function (num2) {
//     sum+=num2
//     count+=1
//     if (count === 3){
//       // reset it back to 0
//       count=0
//       return sum
//     }
//     else {
//       // return [sum, count]
//       return
//     }
//   }
// }

let lazyAdder = (num1) => {
  let sum= num1
  return function (num2) {
    sum = sum + num2
    return function (num3){
      sum += num3
      return sum
    }
  }

}



let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
console.log("After secondAdd variable declared: " + secondAdd)
let sum = secondAdd(3);
console.log(sum); // prints 6

// Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
