var isPalindrome = function(x) {
    if(x > 0) {
        const rev =+ [...x.toString()].reverse().join("")
        if(x === rev){
            return true
        } else false
    }
};

console.log(isPalindrome(13231), true)