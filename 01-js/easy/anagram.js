/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length){
    return false
  }

  const str1LowerCase = str1.toLowerCase().split("").sort().join("")
  const str2LowerCase = str2.toLowerCase().split("").sort().join("")

  // const charCount = {}
  // for(let i = 0; i < str1.length; i++){
  //   charCount[str1LowerCase[i]] = (charCount[str1LowerCase[i]] || 0) + 1
  // }

  // for(let i = 0; i < str2.length; i++){
  //   charCount[str2LowerCase[i]] = (charCount[str2LowerCase[i]] || 0) - 1
  // }

  // for(const count of Object.values(charCount)){
  //   if(count !== 0){
  //     return false
  //   }
  // }
  return str1LowerCase === str2LowerCase
}


module.exports = isAnagram;
