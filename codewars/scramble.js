function scramble(str1, str2) {
  const isLetter = {};
  for (const char of str1) {
    isLetter[char] = isLetter[char] || 0;
    isLetter[char]++;
  }
  for (const char of str2) {
    if (isLetter[char] > 0) {
      isLetter[char]--;
    } else {
      return false;
    }
  }
  return true;
}
 

//one liner

// const scramble = (str1,str2) => {
//   let availableChar = str1.split('').reduce((container, curLetter) => {
//       container[curLetter]? container[curLetter]++ : container[curLetter] = 1
//       return container
//   }, {})
//   return str2.split('').every((char) => --availableChar[char] >= 0)
// }

// console.log(scramble("rkqodlw", "world"), true);
// console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
// console.log(scramble("katas", "steak"), false);
// console.log(scramble("scriptjava", "javascript"), true);
// console.log(scramble("scriptingjava", "javascript"), true);
// console.log(scramble("scriptsjava", "javascripts"), true);
// console.log(scramble("jscripts", "javascript"), false);
// console.log(scramble("aabbcamaomsccdd", "commas"), true);
