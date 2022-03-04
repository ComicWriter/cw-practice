// DESCRIPTION:
// Create a function that removes the first and last characters of a string. One parameter: the original string. Don't worry about strings with less than two characters.
//

// My Solution

function removeChar(str) {
  //Slice first and last characters to remove.
  return str.slice(1, -1);
}
