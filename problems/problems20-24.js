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
    })
    $('#result').text(total)
  })

  return "processing"
}

problems[23] = function(max = 20161) { 
  function isAbundant(n) {
    let sum = 1
    for(let i=2;i<=n/2;i++) {
      if(n%i == 0)
        sum += i
    }
    return sum > n
  }

  // finding abundant numbers
  let abundants = []
  for(let n=1;n<=max;n++) {
    if(isAbundant(n)) {
      abundants.push(n)
    }
  }
  console.log(abundants.length + " abundants numbers found")

  // creating of sieve of all sum of abundants numbers
  let sieve = {}
  for(let a=0; a<abundants.length; a++) {
    for(let b=a; b<abundants.length; b++) {
      if( abundants[a] + abundants[b] <= max) {
        sieve[ abundants[a] + abundants[b] ] = true
      }
    }
  }

  // checking all numbers
  let total = 0
  for(let n=1;n<=max;n++) {
    if(!sieve[n]) total+=n
  }

  return total
}

problems[24] = function() {
  // 2x9! = 725 760 permutations starting with 0/1 > 274 240 left > 2...
  // 6x8! = 241 920 permutations starting with 0/1/3/4/5/6 > 32 320 left > 27...
  // 6x7! = 30 240 permutations starting with 0/1/3/4/5/6 > 2 080 left > 278...
  // 2x6! = 1 440 permutations starting with 0/1 > 640 left > 2783....
  // 5x5! = 600 permutations starting with 0/1/4/5/6 > 40 left > 27839....
  // 1x4! = 24 permutations starting with 0 > 16 left > 278391...
  // 2x3! = 12 permutations starting with 0/4 > 4 left > 2783915..
  // 1x2! = 2 permutations starting with 0 > 2 left > 27839154..
  // skipping 2783915406
  // 2783915460
  return 2783915460
}