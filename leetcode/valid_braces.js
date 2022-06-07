/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    let res = []
    for (let brace of s) {
        if (brace === '(' || brace === '{' || brace === '[') {
            res.push(brace)
        } else {
            let last = res.pop()
            if (last === '(' && brace === ')') {
                continue
            } else if (last === '[' && brace === ']') {
                continue
            } else if (last === '{' && brace === '}') {
                continue
            } else {
                return false
            }
        }
    }
    return res.length === 0
};

console.log(isValid(['{', '}']))