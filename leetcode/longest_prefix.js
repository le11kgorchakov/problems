/**
 * @param {string[]} strs
 * @return {string}
 */
//  var longestCommonPrefix = function(strs) {
//  let res = ''
//  for (let i = 0; i < strs[0].length; i++){
//      const cur = strs[0][i]
//      for (let j = 0; j < strs.length; j++){
//         const char = strs[j][i]
//         if(cur !== char) return res
//      }
//     res += cur
//  }
//  return res
// };

const longestCommonPrefix = (strs) => {
    let res = ''
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) return res
        }
        res += strs[0][i]
    }
    return res
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))