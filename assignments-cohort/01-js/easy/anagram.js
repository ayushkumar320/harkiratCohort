/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const newStr1 = str1.toLowerCase();
  const newStr2 = str2.toLowerCase();

  if(newStr1.length !== newStr2.length) {
    return false;
  }

  // Now we need to split and sort and then join to create an alphabetic so that we can check
  const sortedStr1 = newStr1.split('').sort().join('');
  const sortedStr2 = newStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
