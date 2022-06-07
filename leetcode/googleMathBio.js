// [MATH, BIO]
// [80, 70]- Pass
// [50, 10]- Fail

// [100, 30] - Pass
// [20, 50] - Pass
// [10, 10] - Fail

// [100, 100] - Pass =>COMPLAIN
// [101, 0] - Pass
// [50, 50] - Fail
// [60, 80] - Fail


const exam = (n) => {
    const res = []
    
    for (let i = 0; i < n.length; i++) {
      let j = 0
      let student = []
      for (let k = 0; k < n[i].length; k++){
             if(n[0][0] < n[1][0] || n[k+1][1] < n[k+1][1]) {
               student.push(n[k])
               j++
             }
      }
      res.push(student)
    }
 return res
}

exam([[101, 0],[50,50], [60, 80], [100, 100]]) // => [[101, 0], [100, 100]]

