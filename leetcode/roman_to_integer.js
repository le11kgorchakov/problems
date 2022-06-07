var romanToInt = function (s) {
    const library = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const roman = [...s]
    let res = 0
    for (let i = 0; i < roman.length; i++) {
         const cur = library[roman[i]]
         const next = library[roman[i+1]]
         if(cur < next){
             res -= cur
         }else {
             res += cur
         }
    };
   return res
}
    console.log(romanToInt('III'))