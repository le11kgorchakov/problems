// var addTwoNumbers = function(l1, l2) {
//     const num1 =+ l1.join("")
//     const num2 =+ l2.join("")
//     const res = num1 + num2
    
//     return Array.from(String(res), Number).reverse()
// };

var addTwoNumbers = function(l1, l2) {
    const num1 = parseInt(l1.toString().replace(/,/g, ''))
    const num2 = parseInt(l2.toString().replace(/,/g, ''))
    const res = Array.from(String(num1 + num2), Number).reverse()
    return res
};

console.log(addTwoNumbers([2,4,3], [5,6,4])) // [7,0,8]