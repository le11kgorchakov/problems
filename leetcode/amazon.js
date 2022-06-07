const findGroup = (startIndex, group, shoppingCart) => {
    if(shoppingCart.length - startIndex < group.length) return false
    let i = startIndex
    for (const el of group) {
        if(shoppingCart[i] !== el && el !== 'anything') return false
        i++
    }
    return true
}
 // changes to test 
function foo(codes, shoppingCart) {
    const codeList  = []
    for(const code of codes){
        codeList.push(code.split(' '))
    }
    if(codes.length === 0) return 1
    let k = 0
    let i = 0
    while(i < codeList.length) {
        let l = k
        while (l < shoppingCart.length && shoppingCart[l] != codeList[i][0]) {
            // console.log('shopping: ', shoppingCart[l])
            // console.log('codelist: ', codeList[i][0])
            l++
        }
        // console.log('L: ',l)
        if (l === shoppingCart.length) return 0
        const isGroupFound = findGroup(l, codeList[i], shoppingCart)         
        if(isGroupFound) {
            k += codeList[i].length
             i++
        } else k++
    }
return 1
}

// 4
// orange
// apple apple
// banana orange apple
// banana
// 7