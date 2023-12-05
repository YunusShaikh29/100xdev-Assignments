/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  const reversedString = cleanedString.split('').reverse().join('')
  // const enteredStringInLowerCase = str.toLowerCase()
  // let palindrom = "";
  // for(let i = str.length - 1; i >= 0; i--){
  //   palindrom += enteredStringInLowerCase[i]
  // }
  
  // if(palindrom === enteredStringInLowerCase){
  //   return true;
  // }else{
  //   return false
  // }

  return cleanedString === reversedString
}
console.log(isPalindrome('Nan'))

module.exports = isPalindrome;
