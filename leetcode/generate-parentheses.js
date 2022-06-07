/**
 * @param {number} n
 * @return {string[]}
 * 
 * Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
 */
var generateParenthesis = function (N) {
    let res = [], m = 2 * N
    const dfs = (pos, open, seq) => {
        if (pos === m) {
            let temp = new Array(m)

            for (let i = 0; i < m; i++)
                temp[i] = seq & 1 * Math.pow(2, i) ? "(" : ")"

            res.push(temp.join(""))
            return
        }
        if (open) dfs(pos + 1, open - 1, seq)
        if (m - pos > open) dfs(pos + 1, open + 1, seq | 1 * Math.pow(2, pos))
    }

    dfs(0, 0, 0)
    return res
};

const genParenthesis = (n) => {
    const res = []
    const length = n * 2
    const traverse = (position, start, seq) => {
        if (position === length) {
            let temp = new Array(length)

            for (let i = 0; i < length; i++) {
                temp[i] = seq & 1 * Math.pow(2, i) ? '(' : ')'
            }
            res.push(temp.join(''))
            return

        }
        if (start) traverse(position + 1, start - 1, seq)
        if (length - position > start) traverse(position + 1, start + 1, seq | 1 * Math.pow(2, position))
    }
    traverse(0, 0, 0)
    return res
}

console.log(genParenthesis(3))
console.log(generateParenthesis(3))
