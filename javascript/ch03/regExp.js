var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/;

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

regex = /this/i; //When 'i' flag is added, becomes case-insensitive

regex = /^this/i; //Adding '^', checks at beginning of strings

regex = /this$/i; //Adding '$', checks at end of strings

regex = /ever.$/i; //Checking for different word. Checks if 'ever' appears at end, 
// dot at end - checking if 'ever' followed by any single character appears there

regex = /ever\.$/i; //If you want to check for literal dot, use escape sequence

regex = /Moun.$/i;