/**
 * Input: s = "Let's take LeetCode contest"
   Output: "s'teL ekat edoCteeL tsetnoc"
/**
 * @param {string} s
 * @return {string}
 */
 const flip = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}
var reverseWords = function (s) {
    const words = s.split(' ')
    let res = []
    // loop thrue each word 
    for (let i = 0; i < words.length; i++) {
        // flip each
        let chars = words[i].split('')
        flip(chars, 0, chars.length - 1)
        // join back 
        res.push(chars.join(''))
    }
    return res.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))