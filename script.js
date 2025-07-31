console.log("Hello, world!");

// variables

var test = "Test";

test = "Testing";

// we don't use var anymore
let myName = "JB";
myName = "Joshua";

// can never change
const number = "31";

// assignment operator
let a;
let b = 2;

console.log(a);

a = 7;

b = a;

console.log(a);

let x = 5;
let y = 10;
let z = "I am a";

x = x + 1;
y = y + 5;
z = z + " string!";

console.log(x);
console.log(y);
console.log(z);

// adding numbers
let sum = 10 + 10;
console.log(sum);

// subtracting numbers
let difference = 45 - 33;
console.log(difference);

// multiplication
let product = 8 * 10;
console.log(product);

// division
let quotient = 66 / 33;
console.log(quotient);

// incrementing number
let increment = 87;
increment++;
console.log(increment);

// decrementing number
let decrement = 11;
decrement--;
console.log(decrement);

// decimal numbers
let ourDecimal = 5.7;
let myDeciaml = 0.009;

let testDecimal = 2.0 * 2.5;
console.log(testDecimal);

let divideDecimal = 4.4 / 2.2;
console.log(divideDecimal);

// remainder
let remainder = 11 % 3;
console.log(remainder);

// compound assignment with augmented addition and subtraction etc

let a1 = 3;
let b1 = 17;
let c1 = 12;

a1 += 12;
b1 += 9;
c1 += 7;

a1 -= 12;
b1 -= 9;
c1 -= 7;

let d1 = 5;
let e1 = 12;
let f1 = 4.6;

d1 *= 5;
e1 *= 3;
f1 *= 10;

console.log(f1);

let x1 = 48;
let y1 = 108;
let z1 = 33;

x1 /= 12;
y1 /= 4;
z1 /= 11;

// string variables

let firstName = "Alan";
let lastName = "Turing";

// best use a back tick
let myString = `I am a "double quoted" string inside "double quotes"`;
console.log(myString);

/*
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

let mySpecialString = `First line\n\tSecond line\nThird line`;
console.log(mySpecialString);

let ourString = `I come first. ` + `I come second`;
console.log(ourString);

let concatString = `First sentence. `;
concatString += `This is the second sentence`;

console.log(concatString);

let myFirstName = `Josh`;
let myCompleteString = `My name is ` + myFirstName + " and I am well!";
console.log(myCompleteString);
// or...
myCompleteString = `My first name is ${myFirstName}`;
console.log(myCompleteString);

let someAdjective = "worthwile";
let mySentence = "Learning to code is ";
mySentence += someAdjective;

// find length of string

console.log(myFirstName);
let myFirstNameLength = myFirstName.length;

console.log(myFirstNameLength);

// bracket notation
firstLetterOfFirstName = myFirstName[0];
console.log(firstLetterOfFirstName);

console.log(myFirstName[2]);

// find the last value in a string
let lastLetterOfFirstName = myFirstName[myFirstName.length - 1];
console.log(lastLetterOfFirstName);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  let result = "";

  result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}`;

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// arrays

let myArray = ["Josh", 32];
let nestedArray = [
  ["the universe", 42],
  ["everything", 101010],
];

let newArray = [50, 60, 70];
let myData = newArray[0]; // equals 50
console.log(myData);

newArray[1] = 45;

console.log(newArray);

let largeArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

console.log(largeArray[0][0]); // logs 1

console.log(largeArray[2][1]); // equals 8

let nextArray = ["Me", "Myself", "I"];
console.log(nextArray);
nextArray.push("Dog");
console.log(nextArray);
// removed last element
let removedFromNextArray = nextArray.pop();
console.log(removedFromNextArray);
// removed first element
let shiftFromNextArray = nextArray.shift();
console.log(shiftFromNextArray);
console.log(nextArray);
// add element to start of array
nextArray.unshift("Me");
console.log(nextArray);

// shopping list example
let shoppinglist = [
  ["Apples", 2],
  ["Pasta", 1],
  ["Cucumber", 1],
  ["Onions", 4],
];
console.log(shoppinglist);

// functions
function myFirstFunction() {
  console.log("Yo, world");
}

myFirstFunction();

function myFunctionWithArgs(a, b) {
  console.log(a - b);
}

myFunctionWithArgs(10, 3);

// global scope - can be seen everywhere!
let myGlobal = 10;

function globalTestFunction() {
  // local to this function!
  let localScope = 5;
  console.log(localScope);
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += `myGlobal: ${myGlobal}`;
  }
  console.log(output);
}

globalTestFunction();

// local and global variables with the same name
// local variable takes precedent over the global variable

let outerWear = "T-shirt";

function myOutfit() {
  let outerWear = "Sweater";

  return outerWear;
}

console.log(myOutfit()); // Sweater
console.log(outerWear); // T-shirt

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

let functionValue = minusSeven(17);

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

console.log(`Before: ${JSON.stringify(testArr)}`);
console.log(nextInLine(testArr, 6));
console.log(`After: ${JSON.stringify(testArr)}`);

// boolean values

function welcomeToBooleans() {
  return true; //or false
}

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

console.log(ourTrueOrFalse(true));

// comparison

function testEqual(val) {
  if (val === 12) {
    return "Equal";
  }
  return "Not equal";
}

console.log(testEqual("12"));

/*
strict equality operator
doesn't do type conversion
3 === 3 is true
3 === "3" is false
*/

function testNotEqual(val) {
  if (val !== 99) {
    return "Not equal";
  }
  return "Equal";
}

console.log(testNotEqual("99"));

/* there is the strict inequality operator as well */

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or under";
}

console.log(testGreaterThan(50));

function testGreaterThanOrEqual(val) {
  if (val >= 20) {
    return "20 or over";
  }

  if (val >= 10) {
    return "10 or over";
  }

  return "Less than 10";
}

console.log(testGreaterThanOrEqual(10));

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or over";
}

console.log(testLessThan(10));

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller than or euqal to 12";
  }

  if (val <= 24) {
    return "Smaller than or equal to 24";
  }

  return "More than 24";
}

console.log(testLessOrEqual(10));

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(35));

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

console.log(testLogicalOr(15));

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}

console.log(testElse(10));

// order is very important in else if statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(7));

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(17));
console.log(testSize(50));

let names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Dobule Bogey",
  "Go home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}

console.log(golfScore(5, 4));
console.log(golfScore(5, 2));
console.log(golfScore(5, 8));
