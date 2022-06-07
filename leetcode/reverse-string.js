/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function (s) {
    let st = 0
    let end = s.length - 1
    while (st < end) {
        [s[st], s[end]] = [s[end], s[st]]
        st++
        end--
    }
    return s
};

console.log(reverseString(["h", "e", "l", "l", "o"]))