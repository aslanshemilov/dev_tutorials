//Simple comparisons

var one = 1, two = 2;

//Strict equality
one === one; //expect true

//Strict inequality
one !== two; //expect false

one == one; //checks equality, but not the same above.

one == "1"; //returns true; strictly, these are different, but this operator just checks equality 
//between data types

one != "1"; //returns false

one !== "1"; //return false

//Relational operators
one < two; //true
one > two; //false
one <= two; //true
one >= two; //false

//Arithmetic operators
//+, -, can have negative numbers
//*, / (division), % (modulo)

20 % 2; //has remainder of 0
19 % 2; //remainder is 1

20 % 2 === 0; //check if a number is even

//incrementing and decrementing
var counter = 0;
counter = counter + 1;
counter += 1; //works with any number, including negative numbers
counter++; //only works with incrementing 1

counter -= 1; 
counter--;

counter *= 2;

//Concatenation with plus sign

"cat" + "dog"; //returns "catdog", use spaces when you want to add words to form a sentence
//do not forget plus sign

//Logical operators
//and = &&
//or = ||
var animal1 = "monkey";
var animal2 = "bear";
var animal3 = "tiger";

//Asking two things together:
animal1 === 'monkey' && animal2 === 'bear'; //should evaluate to true

animal1 === 'ape' && animal2 === 'bear'; //should evaluate to false
//if anything is false, the entire thing is false

//If you only care about one condition is true, use ||
animal1 === 'ape' || animal2 === 'bear'; //one part is true, so the entire thing is true
//if you want to return false, entire statement must be false

//Operator precedence
//&& evaluated before ||
(animal1 === 'monkey' || animal2 === 'bear') && animal3 === tiger;
//use parentheses so 'or' statements go together

//Logical not - !
!true; //evaluates to false
!false; //evaluates to true

//Wrap an entire expression
!(animal1 === 'monkey' || animal2 === 'bear');

//Not the same as !== 
//Equal to 
(animal1 !== 'monkey' && animal2 !== 'bear');