function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

function switchOfStuff(val) {
  let answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff(1));

function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1));
console.log(sequentialSizes(5));
console.log(sequentialSizes(9));

// returning boolean values

function isLess(a, b) {
  // will be true or false!
  return a < b;
}

console.log(isLess(5, 10));
console.log(isLess(20, 5));

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(-2, 2));

// card count function

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  let holdBet = "Hold";
  if (count > 0) {
    holdBet = "Bet";
  }

  return `${count} - ${holdBet}`;
}

cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));

// objects
let myDog = {
  name: "Apollo",
  legs: 4,
  tails: 1,
  friends: [],
};

console.log(myDog);

let testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "trainers",
};

let hatValue = testObj.hat;
let shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

// bracket notation required if property has a space
let newObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

let entreeValue = newObj["an entree"];
let drinkValue = newObj["the drink"];

console.log(entreeValue);
console.log(drinkValue);

let betterObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

let playerNumber = 16;
let player = betterObj[playerNumber];

console.log(player);

let newDog = {
  name: "Luna",
  legs: 4,
  tails: 1,
  friends: ["Everything"],
};

console.log(newDog.name);

newDog.name = "Pancake";

console.log(newDog.name);

// works with square bracket notation as well
newDog.bark = "Woof!";

console.log(newDog);

delete newDog.bark;

console.log(newDog);

function phoenticLookup(val) {
  let result = "";

  let lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "frank",
  };

  result = lookup[val];
  return result;
}

console.log(phoenticLookup("charlie"));

let thisObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (thisObj.hasOwnProperty(checkProp)) {
    return thisObj[checkProp];
  } else {
    return "Not found!";
  }
}

console.log(checkObj("Hello"));
console.log(checkObj("gift"));

let myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    relase_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["YouTube video"],
  },
];

console.log(myMusic);

let myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      boot: "empty",
    },
  },
};

let gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

let myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

let secondTree = myPlants[1].list[1];

console.log(secondTree);

let collection = {
  2548: {
    album: "Slippery when wet",
    artist: "Bon Jovi",
    tracks: ["Let it rock", "You give love a bad name"],
  },
  2468: {
    album: 1999,
    artist: "Prince",
    tracks: [1999, "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "Test"));

let myNewArray = [];

let i = 0;
while (i < 5) {
  myNewArray.push(i);
  i++;
}

console.log(myNewArray);

let ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

console.log(ourArray);

let oddArray = [];

for (let num = 1; num < 10; num += 2) {
  oddArray.push(num);
}

console.log(oddArray);

let emptyArray = [];

for (let i = 10; i > 0; i -= 2) {
  emptyArray.push(i);
}

console.log(emptyArray);

let ourNewArray = [9, 10, 11, 12];
let ourNewTotal = 0;

for (let i = 0; i < ourNewArray.length; i++) {
  ourNewTotal += ourNewArray[i];
}

console.log(ourNewTotal);

function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

let product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

let thisNewArray = [];
let newNumber = 10;

// run at least once before checking the condition
do {
  thisNewArray.push(newNumber);
  newNumber++;
} while (newNumber < 5);

console.log(newNumber, thisNewArray);

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0000001",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0000002",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0000003",
    likes: ["Intriguing cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookupProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || `No such property for ${name}`;
    }
  }
  return "No such contact";
}

console.log(lookupProfile("Sherlock", "likes"));
console.log(lookupProfile("Harry", "magic"));
console.log(lookupProfile("Bill", "likes"));
