// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unnecessary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// My Solution

// Arrow function. Trim trailing white spaces. Split the string to convert it into an array of words using JS built-in method. Reverse the order of the array words. Join the array words to convert them back into a string.

const reverse = (string) => string.trim().split(' ').reverse().join(' ');
