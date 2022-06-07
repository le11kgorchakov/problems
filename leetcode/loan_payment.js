
// Input:
// charges: [[0, 500]]
// payments: []
// as_of_days: 30
// Expected Output:
// 514.38


const solution = (charges, payments) => {
    let totalSpended = 0
    let totalPayd = 0
    let res = 0
    for (const month of charges) {
        for (const charge of month) {
        totalSpended+=charge
        }
    }
    
    for (const month of payments) {
        for (const pay of month) {
        totalPayd+=pay
        }
    }
    totalSpended-totalPayd
    res = (500 * 12) * 0.35 / 365
     console.log('Spend', res)      
    // Write your solution here
}