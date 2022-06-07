/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const next = nums[i + 1]
        const last = nums[nums.length - 1]
        if (current === target) {
            return i
        }
        if (current < target && target < next) {
            return i + 1
        }
        if (target > last) return nums.length
    }
    return 0
}

console.log(searchInsert([1, 3, 5, 6], 2))