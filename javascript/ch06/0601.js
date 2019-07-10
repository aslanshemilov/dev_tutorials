//Basic functions
console.log("Arf");
console.log("Woof");
console.log('Meow');
console.log('Mooooooooooo');

function speak() {
    console.log("Arf");
    console.log("Woof");
    console.log('Meow');
    console.log('Mooooooooooo');
}

speak();

//Change each instance with a function

//Arguments in functions
function fuddify(speech) {
    //If it is not a string, return an error message
    if (typeof speech != "string") {
        console.error("Nice twy, wabbit!");
        return;
    }

    //Othwerwise, make it sound like Elmer Fudd
    speech = speech.replace(/r/g, "w");
    speech = speech.replace(/R/g, "W");

    return speech;
}

var utterance = fuddify("You screwy rabbit");
utterance;

fuddify("Be very quiet, I'm hunting rabbits.");

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

//Specifying default parameters - JavaScript can do this
function speakSomething(what, howMany) {
    //This pattern works nicely for default values:
    //Check if the argument is undefined, and if it is, provide a default value
    var what = (typeof what !== "undefined") ? what : "Default speech";
    var howMany = (typeof howMany !== "undefined") ? howMany : 10;

    //Shorter version that could get tripped up by truthiness
    //what = what || "Default speech";
    //howMany = howMany || 10;

    for (var i = 0; i < howMany; i++) {
        console.log(what + " (" + i + ")");
    }
}

speakSomething("Hey hey", 5);
speakSomething("Hey hey");
speakSomething();

function addingMachine() {
    //Initialize the total we will be returning
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        //Get next number
        var number = arguments[i];

        //Check if the argument is a number
        //If so, add it to running total
        if (typeof number === "number") {
            total += number;
        }
    }
    //Done - return the total
    return total;
}

//Objects, references, and functions
var calvin = {
    name: "Calvin",
    bestFriend: "Hobbes",
    form: "human boy"
};

//You can also pass an object into a function
//Because objects are passed by reference, the argument will be modified
function transmogrifier(calvin) {
    if (typeof calvin !== "object") {
        console.error("Argument is of wrong type");
        return;
    }

    //generate a random number between 1 and 5
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    switch (randomNumber) {
        case 1:
            calvin.form = "tyrannosaurus";
            break;
        case 2:
            calvin.form = "grey wolf";
            break;
        case 3: 
            calvin.form = "bengal tiger";
            break;
        case 4:
            calvin.form = "grizzly bear";
            break;
        case 5:
            calvin.form = "canary";
        default: //he stays human
            calvin.form = "human boy";
            break;
    }
}

//Global variable - accessible anywhere; resource shared among all scripts; can modified anywhere
//  can have bugs introduced
//Local variable - accessible only by certain parts of the program
    // "use strict" at top of variable to keep it restrained
    //let, const
//Variable scope in functions
var myNum = 32;
var myResult = "Success";

function randomizer(limit) {
    var randomNumber = Math.floor(Math.random() * limit);

    var myNum = randomNumber;

    console.log("myNum is ", myNum);
    console.log("Global myNum is ", window.myNum);

    console.log("Our result is ", myResult);

    return myNum;
}

randomizer(10);

function doubleIt(num) {
    var myNum = num * 2;
    return myNum;
}

//Callback functions
var myNumbers = [1, 2, 3, 4, 5];

//map() method takes a callback with a required, specific parameter
//the callback is executed on every item in the array in turn, 
//creating a new array with a result of each execution
var myDoubles = myNumbers.map(doubleIt);

myNumbers.forEach(function(number) {
    console.log("My array contains ", number);
});

//Expected output
//My array contains 1
//My array contains 2
//My array contains 3
//My array contains 4
//My array contains 5

doubleIt = number => (number *= 2);