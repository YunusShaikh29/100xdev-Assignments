/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const regexVowels = /[aeiou]/gi;
    const matchVowels = str.match(regexVowels)

    return matchVowels ? matchVowels.length : 0
}
// console.log(countVowels('aeiou, this is just a random text, lets counts all the vowels from it'))  //21
module.exports = countVowels;