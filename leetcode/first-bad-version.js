/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    return function(n) {
        for (let i = 0; i < n; i++){
            if(isBadVersion(i)){
                return i
            }
        }
        return n
    };
};