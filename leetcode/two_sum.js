// const twoSum = (nums, target) => {
//     let res = {}
//     return nums.forEach((cur, i) => {
//         const t = target - cur
//         if (t in res) {
//             [res[t], i]
//         } else {
//             res[cur] = i
//         }
//     })
// }

const twoSum = (nums, target) => {
    let storage = {}
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]
        const temp = target - cur
        if (temp in storage) {
            return [storage[temp], i + 1]
        } else {
            storage[cur] = i + 1
        }

    }
}

console.log(twoSum([1, 7, 2, 5], 12))