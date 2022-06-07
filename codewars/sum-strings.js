function sumStrings(a, b) {
  if (a.length < b.length) {
    while (a.length != b.length) {
      a = "0" + a;
    }
  } else if (a.length > b.length) {
    while (a.length != b.length) {
      b = "0" + b;
    }
  }
  let innerSum = 0;
  let carry = 0;
  let sum = "";
  for (let i = a.length - 1; i >= 0; i--) {
    const aN = +a[i];
    const bN = +b[i];
    innerSum = aN + bN + carry;
    innerSum;
    let placeNum = innerSum;
    if (innerSum > 9) {
      placeNum = innerSum % 10;
      carry = Math.floor(innerSum / 10);
    } else {
      carry = "";
    }
    sum = placeNum + sum;
  }
  sum = carry + sum;
  while (sum[0] == 0) {
    sum = sum.slice(1);
  }
  return sum;
}

console.log(sumStrings("1", "9999"));
