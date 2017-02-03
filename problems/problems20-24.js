problems[20] = function(n=100) {
  let digits = [1]
  for(let i=2; i<=n;i++) {
    let remainder = 0
    digits = digits.map(d => {
      let digit = (i*d+remainder)%10
      remainder = (i*d+remainder-digit)/10
      return digit
    })

    while(remainder > 0) {
      let lastDigit = remainder%10
      remainder = (remainder-lastDigit)/10
      digits.push(lastDigit)
    }
  }

  let total = 0
  digits.forEach(d => {total+=d})
  return total
}