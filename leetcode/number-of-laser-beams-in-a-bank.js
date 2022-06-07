/**
 * @param {string[]} bank
 * @return {number}
 */
 var numberOfBeams = function (bank) {
    let res = 0
    let temp = []
    for (let i = 0; i < bank.length; i++) {
        let sum = 0
        for (let j = 0; j < bank[i].length; j++) {
            sum += +bank[i][j]
        }
        if(sum > 0){
            temp.push(sum)
        }
    }
    
    for(let i = 0; i < temp.length; i++){
        const cur = temp[i]
        const prev = temp[i -1]
        cur
        if(prev !== undefined){
            res+= cur * prev
        }
    }
    res
    return res
};

// console.log(numberOfBeams(["1","1"]))
// console.log(numberOfBeams(["000","111","000"]))
// console.log(numberOfBeams(["011001","000000","010100","001000"]))

/*
 011001
  ||  | 
 000000
  | |
 010100
   | 
 001000
*/