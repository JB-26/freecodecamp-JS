function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

// random whole number
// Math.random can never be 1, can be 0

let randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5, 15));

// can also be used with a Radix
function convertToInteger(str) {
  // string to integer
  //return parseInt(str);
  return parseInt(str, 2);
}

convertToInteger("56");
convertToInteger("10011");

// ternary operator
// condition ? statement-if-true : statement-if-false

function checkEqual(a, b) {
  return a === b ? true : false;
}

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-10));

// let doesn't let you declare a variable twice

function catTalk() {
  // enables strict mode that catches common coding mistakes and unsaved actions
  // can be used at the top of a file
  "use strict";
}

function checkScope() {
  "use strict";

  let i = "function scope";

  if (true) {
    // inside the block
    let i = "block scope";
    console.log(`Block scope i is: ${i}`);
  }
  console.log(`Function scope i is: ${i}`);
  return i;
}

checkScope();

// const is read only, cannot be reassigned

function printManyTimes(str) {
  "use strict";

  // normally use capital letters
  const SENTENCE = `${str} is cool!`;

  //sentence = `${str} is amazing!`;

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}

printManyTimes("freeCodeCamp");

// Mutate an array with const

const s = [5, 7, 2];

console.log(s);

function editInPlace() {
  "use strict";

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

console.log(editInPlace());

// prevent object mutation

function freezeObj() {
  "use strict";

  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

// arrow functions to write anonymous functions

// this function is assigned to a function
//let magic = function() {
//  return new Date();
//}

const magic = () => new Date();

// let myConcat = function(arr1, arr2) {
// return arr1.concat(arr2);
//}

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  // note - there is only one argument in the filter function, therefore, the brackets are not needed
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
