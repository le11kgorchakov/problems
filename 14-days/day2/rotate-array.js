/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */
// const flip = (arr, s, e) => {
//     while(s < e) {
//     [arr[s], arr[e]] = [arr[e], arr[s]]
//         s++
//         e--
//     }
//     return arr
// }

// var rotate = function(nums, k) {
//      k = k % nums.length
//      flip(nums, 0, k)
//      flip(nums, k+1, nums.length-1)
//      flip(nums, 0 , nums.length-1)
//      return nums
// };

const swap = (s, e, arr) => {
    while(s<e){
        [arr[s], arr[e]] = [arr[e], arr[s]]
        s++
        e--
    }
  return arr
}

var rotate = function(nums, k) {
  k %= nums.length
  swap(0, nums.length - 1 , nums)
  swap(0, k - 1, nums)
  swap(k, nums.length -1 , nums)
  return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))