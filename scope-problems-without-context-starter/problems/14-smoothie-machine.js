/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// your code here
const smoothieMachine = (...origIngredients) => {
  let str = "I'm having a smoothie with"
  let firstTime = true
  // firsTime means giving it argument values for the first time
  // (pay attention to either in initailization or future invocations(see below return function for invocations)).
  if (firstTime) {
    firstTime = false;
    for (let i=0; i<origIngredients.length; i++){
      let ele = origIngredients[i]
      if (i===0){
        // if its the first one, just + the word itself (no "and")
        str += " " + ele
      }
      else {
        str += " and " + ele
      }
    }
  }
  return function (...items) {
    // if you didnt add any initial paramters to object initialization (eg. milk case. )
      if (firstTime) {
        firstTime = false;
        for (let i = 0; i< items.length; i++){
          if (i===0){
            str += ' ' + items[i]
          }
          else {
            str += " and " + items[i]
          }
        }
        return str
      }
      for (let i=0 ; i<items.length; i++){
        let item = items[i]
        str+= " and " + item
      }
      return str
  }
}



// const smoothieMachine = (...origIngredients) => {
//   let str = "I'm having a smoothie with"
//   let firstTime = true
//   if (origIngredients.length>0){
//     return function(...ingredients){
//       // you initialize the object with the arguments
//       if (firstTime === true){
//         console.log('Initialized object has arguments!')
//         for (let i =0; i<origIngredients.length; i++){
//           if (i===0){
//             str += " " + origIngredients[i]
//           }
//           else {
//             str+= " and " + origIngredients[i]
//           }
//         }

//       }
//       ingredients.forEach( ele => {
//         str+= " and " + ele
//       })
//       return str

//     }

//   }
//   else {
//     return function (...ingredients) {
//       if (firstTime && ingredients.length===1){
//         firstTime = false
//           str += " " + ingredients[0]
//       }
//       else if (firstTime && ingredients.length>1){
//         firstTime = false
//         for (let i =0; i< ingredients.length; i++){
//           if (i===0){str+= " " + ingredients[0]}
//           else {
//             str += " and " + ingredients[i]
//           }
//         }
//       }
//       else {
//         console.log("pineapple should appear here")
//         for (let i=0; i<ingredients.length; i++){
//           str += " and " + ingredients[i]
//         }
//       }
//       return str
//     }

//   }

// }

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
// console.log("original argument: +" + smoothieMachine("apples", "bananas", "berries"));
// console.log("Smoothie2 variable: " + smoothie2)
console.log("Pineapple should appear : " + smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
