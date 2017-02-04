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



problems[21] = function() {
  function sumOfProperDivisors(n) {
    let sum = 1
    for(let i=2;i<=n/2;i++) {
      if(n%i == 0)
        sum += i
    }
    return sum
  }

  let sumOfAmiableNumbers = 0
  for (var a = 2; a < 10000; a++) {
    let b = sumOfProperDivisors(a)
    if( b > a && sumOfProperDivisors(b) == a) {
      sumOfAmiableNumbers += a + b
    }
  }

  return sumOfAmiableNumbers
}



problems[22] = function() {
  $.getJSON('/data/p022_names.txt',function(names) {
    let total = 0
    names.sort()
    names.map((name,i) => {
      let sumOfName = 0
      for(let c=0; c<name.length; c++) {
        sumOfName += name.charCodeAt(c) - 64
      }
      total += sumOfName * (i+1)
      $('#result').text(total)
    })
  })

  return "processing"
}