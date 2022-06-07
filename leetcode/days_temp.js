const daysTemp = (days) => {
    let res = []
    for (let i = 0; i < days.length; i++) {
        console.log(days[i])
        for (let j = i + 1; j < days.length; j++) {
            if (days[j] > days[i] && j !== i) {
                console.log(days[j])
                res.push(j - i)
                break
            }
        }
    }
    return [...res, 0]
}

console.log(daysTemp([12, 11, 14, 9, 16, 17])) // 2, 1, 2, 1, 1, 0