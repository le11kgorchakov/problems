/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    // run thru the array
    for (let i = 0; i < nums.length; i++){
     // if target === nums[i]
        if(target === nums[i]){
        //return index
            return i
    // else return -1   
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9))