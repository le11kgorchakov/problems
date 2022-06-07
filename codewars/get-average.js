function getAverage(marks) {
  return Math.floor(marks.reduce((sum, curr) => sum + curr) / marks.length)
  //   let result = 0;
  //   let count = 0;
  //   for (let i = 0; i < marks.length; i++) {
  //     count++;
  //     result += marks[i];
  //   }
  //  return Math.floor(result / count)
  }
  
  console.log(getAverage([2, 2, 2, 2]));
  //console.log(getAverage([1, 2, 3, 4, 5]));