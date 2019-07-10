var cherub = "Cupid";
// cherub = 'Some Other Guy';

if (cherub === "Cupid") console.log("Ouch, an arrow! I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow! I'm in love!");
else console.log("I feel nothing");

var wantForXmas = "puppy";
    gotforXmas = "puppy";
    cryAboutIt = false;

if (wantForXmas === gotForXmas) {
    console.log("Very pleased.");
    cryAboutIt = false;
} else {
    console.log("Sad hours only.");
    cryAboutIt = true;
}

if (cryAboutIt) {
    console.log("Sad reacts only.");
}

if (!cryAboutIt) {
    console.log("Good on you sir!");
}

//Ternary operator
var animal = "cat";
//animal = "dog";

animal === "cat"
    ? console.log("You have a cat.")
    : console.log("You have a dog.");

//Can assign a variable in ternary operator
var job = animal === "cat" ? "cat owner" : "dog owner";

//consider tradeoffs between terseness and clarity

//Type checking
var thing = 12;
typeof thing; //"number"
thing = "twelve";
typeof thing; //should return "string"
//returns data type in string format
thing = false;
typeof thing; //should return "boolean"

//change to empty array
thing = [];
typeof thing; //returns "object"
typeof thing === "object" && thing.hasOwnProprety("length"); //check if an object has a certain property
//should return true
thing = {};
typeof thing === "object" && thing.hasOwnProprety("length"); 
//should return false

typeof NaN; //return "number" - 
Number.isNaN("number");
Number.isNull(thing);

//use lodash.com for more documentation