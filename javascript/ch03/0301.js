//Make an object --> object literal
var myEmptyObject = {};

var notEmptyObject = {
    'label': 'value',
    'label2': 'value2',
}

//Arrays
var myArray = []; //empty array

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//An array in JavaScript is effectively the same as an object.
//Arrays have a few special properties: 
//1. Order is preserved
//2. Keys are automatically assigned

//Can contain different data types
myArray = [0, 1, 2, "string1", 'string2', true, false];

var counties = [
    'Belknap',
    'Strafford',
    'Carroll',
    'Rockingham'
];

//Arrays can contain objects
var arrayOfStuff = [
    {'name': 'value'},
    [1, 2, 3], //nested array
    true,
    'nifty'
];

arrayOfStuff.length; //Returns 4

//Manipulating arrays

//Use indexing to retrieve element from a specific location
//Arrays are zero-indexed
counties[0]; //Get first object
counties[2]; //Get third object

//Can use this notation to modify the array contents
counties[2] = "Cheshire"; //third object is changed

//Append element to last
counties[4] = "Carroll"; 

//However, you may not know where the array ends. Abstract way:
counties[counties.length] = "Merrimack"; //evaluates to next number at end

//Similar to stacks seen in previous programming languages

//Push method to add to end of array
counties.push("Coos");

//Pop to remove last element of array
counties.pop(); //Should return Coos, Coos is removed from array

//Push reference on to array once found, pop them to save them elsewhere not on the stack

delete counties[2]; //deletes an entry

counties.splice(2, 1); //removes an element entirely, cuts down length of array

/* You can make
comments like 
this */