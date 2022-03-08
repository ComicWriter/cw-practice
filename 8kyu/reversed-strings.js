// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){

// }

// My Solution

// Arrow function. Split the string to convert it into an array of letters using JS built-in method. Reverse the order of the array letters. Join the array items to convert them back into a string.

const solution = (str) => str.split('').reverse().join('');
