
// one liner
function sequence(x) {
  return Array.from({ length: x + 1 }, (_, i) => i + 1).sort();
}
console.log(sequence(15));

//  Classic
// function sequence(x) {
//   let xToArray = []
//   for(let i =1; i <= x; i++){
//       xToArray.push(i)
//   }
//   return xToArray.sort()
// }
// console.log(sequence(15));
