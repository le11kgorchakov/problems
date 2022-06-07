var maxSequence = function (arr) {
    let curSum = 0
    let maxSum = 0
    arr.forEach(cur => {
       curSum = Math.max(curSum + cur, 0)
       maxSum = Math.max(curSum, maxSum)
    })
    return maxSum
  };

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
