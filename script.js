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
