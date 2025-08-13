/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const length = cleanStr.length;
  let reversedStr = "";
  for (let i = 0; i < length; i++) {
    reversedStr += cleanStr[length - i - 1];
  }
  return reversedStr === cleanStr;
}

module.exports = isPalindrome;
