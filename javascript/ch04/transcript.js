//Creating finite state machines

//Conditional: if/else
var answer = window.confirm("Click OK, get true. Click cancel, get false.");
answer;

if (answer === true) {
    console.log("You said true!");
} else {
    console.log("You said something else!");
}

var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");
if (answer === "YES") {
    console.log("You said YES!");
} else if (answer === "MAYBE") {
    console.log("You said maybe. I don't know what to make of that."); //note the double primes
} else if (answer === "NO") {
    console.log("You said no. :(");
} else {
    console.log("You're a rebel!");
}

var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");
if (answer === "YES" || answer === "NO") {
    //Do some common actions for 'YES' and 'NO'
    if (answer === "YES") {
        console.log("You said YES!");
        //Do some other things
    } else {
        console.log("You said no. :(");
        //Do some action only for NO
    }
} else if (answer === "MAYBE") {
    console.log("You said maybe. I don't know what to make of that.");
} else {
    console.log("Youre a rebel!");
}

//Conditional: switch/break
switch (answer) {
    case "YES":
        console.log("You said YES!");
        break; //if you do not include a break, blocks will continue to execute
    case "MAYBE":
        console.log("You said maybe. I don't know what to make of that.");
        break;
    case "NO":
        console.log("You said no. :(");
        break;
    default:
        console.log("You're a rebel!");
        break;
}

