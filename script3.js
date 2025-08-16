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

// if value isn't provided, use default
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

console.log(increment(5, 2));
console.log(increment(5));

// converts everything passed into argument, into an array called args
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

// now we can add an infinite amount of arguments
console.log(sum(1, 2, 3));

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];

let arr2;

//spread operator - makes the contents are different
(function () {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();

console.log(arr2);

let voxel = {
  x: 3.6,
  y: 7.4,
  z: 6.54,
};

//faster and simpler way of assigning variables the elements of an object
// destructuring

const { x: a, y: b, z: c } = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  // get tomorrow from avgTemperatures object and assign it to tempOfTomorrow variable
  const { tomorrow: tempOfTomorrow } = avgTemperatures;

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

// nested objects

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxofTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecast;

  return maxOfTomorrow;
}

console.log(getMaxofTmrw(LOCAL_FORECAST));

// skips 3
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

() => {
  "use strict";
  [a1, b1] = [b1, a1];
};

let a1 = 8;
let b1 = 6;

console.log(a1);
console.log(b1);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  // skip the first two elements, assign everything else to arr
  const [, , ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  // when the object is passed in, it's destructured and only gets max and min
  // commonly used with API calls, get exactly what you need
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();

console.log(stats);
console.log(half(stats));

const person = {
  name: "Joshua Blewitt",
  age: 32,
};

// Template literal
const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old`;

console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

function makeList(arr) {
  const resultDisplayArray = [];

  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

/*
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
 */

// this will return an object, with key value pairs
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Joshua Blewitt", 32, "Male"));

//an object can contain a function
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);

// constructor
// constructs the object
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

let zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();

const carrot = new Vegetable("carrot");
console.log(carrot.name);

// getters and setters
class Book {
  constructor(author) {
    // the underscore means a private variable, only accessible in the class
    this._author = author;
  }

  // getter
  get writer() {
    return this._author;
  }

  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

function createClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}

const Thermostat = createClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
