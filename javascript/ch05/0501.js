//For loops - sequential
for (var i = 0; i < 10; i++) {
    console.log(i); //send current value of i to console
}

//Very common use case: looping over the array
var pageNames = [
    "Home",
    "About Us", 
    "Contact Us",
    "JavaScript Playground", 
    "News",
    "Blog"
];

//Loop over contents of array
for (i = 0; i < pageNames.length; i++) {
    if (document.title === pageNames[i]) {
        console.log("We are here: " + pageNames[i]);
        break; //breaks out of for loop - short-circuiting a loop
    } else {
        console.log("We are not here: " + pageNames[i]);
    }
}

//Enumerative array
for (p in pageNames) { //similar to for-each loop in Java
    console.log(p, pageNames[p]);
}

//Iterate over an object
var pages = {
    first: "Home",
    second: "About Us",
    third: "Contact Us",
    fourth: "JavaScript Playground",
    fifth: "Blog"
};

//If order matters, you can't necessarily trust a for-in loop
for (var p in pages) {
    if (pages.hasOwnProperty(p)) {
        console.log(p, pages[p]);
    }
}

//prototypal inheritance - language can be modified very deeply

//While loops - useful when you don't have a particular counter
var i = 0;
while (i < 10) { //use a conditional expression inside the parentheses
    console.log(i + "...goes until 10");
    i++;
}

var myArray = [true, true, false, true, true];

var myItem = null; 

while (myItem !== false) {
    console.log(
        "myArray has " +
        myArray.length +
        " items now. This loop goes until false."
    );
    myItem = myArray.pop();
}

var counter = 1;
while (true) {
    console.log(counter);
    counter++;
    break; //comment out the break if you want an infinite while loop
}