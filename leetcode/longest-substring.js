/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let p1 = 0
    let p2 = 0
    let res = 0
    let set = new Set()
    while (p1 < s.length) {
        if (set.has(s.charAt(p1))) {
            set.delete(s.charAt(p2))
            p2++
        } else {
            set.add(s.charAt(p1))
            res = Math.max(res, set.size)
            p1++
        }
    }
    return res
};

console.log(lengthOfLongestSubstring("pwwkew"))
