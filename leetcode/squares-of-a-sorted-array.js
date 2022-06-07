/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
    let isSorted = false
    // loop thrue an array
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i]
    }
    // sort
    while(!isSorted){
        isSorted = true
       // loop thrue squared array
        for (let i = 1 ; i < nums.length; i++){
           if(nums[i-1] > nums[i]){
               isSorted = false
               let temp = nums[i-1]
               nums[i-1] = nums[i]
               nums[i] = temp
           }              
       }
    }
    return nums
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))

// var done = false;
// while (!done) {
//   done = true;
//   for (var i = 1; i < array.length; i += 1) {
//     if (array[i - 1] > array[i]) {
//       done = false;
//       var tmp = array[i - 1];
//       array[i - 1] = array[i];
//       array[i] = tmp;
//     }
//   }
// }
   
   
