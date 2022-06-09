/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = nums => nums.map(c => Math.pow(c, 2)).sort((a,b) => a-b);

console.log(sortedSquares([-4,-1,0,3,10]))// [0,1,9,16,100]