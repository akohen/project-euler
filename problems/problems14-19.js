problems[14] = function() {
  const seen = {} // 
  let maxSteps = 0
  let maxStart = 0
  for(let start=1; start<1000000; start++) {
    let n = start
    let steps = [] // list of steps for this cycle
    let skipped = 0 // how many steps were skipped (already seen)
    while(n>1) {
      if(seen[n]) {
        skipped = seen[n]
        break
      }
      steps.push(n)
      if(n%2==0) { n= n/2}
      else { n = 3*n + 1}
    }
    let totalSteps = steps.length + skipped
    for(let i=0; i<steps.length; i++) {
      seen[steps[i]] = totalSteps - i
    }
    if( totalSteps > maxSteps ) {
      maxSteps = totalSteps
      maxStart = start
    }
  }
  return maxStart
}

problems[15] = function(n=20) {
  let permutations = 1
  for (let i = 2; i<=2*n; i++) {
    permutations *= i
  }
  let duplicates = 1
  for (let i = 2; i<=n; i++) {
    duplicates *= i*i
  }
  return permutations/duplicates
}

problems[16] = function(n=1000) {
  let digits = [1]
  for(let i=1; i<=n;i++) {
    let remainder = 0
    digits = digits.map(d => {
      let digit = (2*d+remainder)%10
      if(d>4) remainder = 1
      else remainder = 0
      return digit
    })
    if(remainder) digits.push(remainder)
  }

  let total = 0
  digits.forEach(d => {total+=d})
  return total
}

problems[18] = function() {
  const text = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`
  let grid = text.split('\n').map(l => {return l.split(' ')})
  
  for(let i=grid.length-2;i>=0;i--) {
    for(let j=0; j<grid[i].length; j++) {
      if(grid[i+1][j] > grid[i+1][j+1]) {
        grid[i][j] = Number(grid[i][j]) + Number(grid[i+1][j])
      } else {
        grid[i][j] = Number(grid[i][j]) + Number(grid[i+1][j+1])
      }
    }
  }

  return grid[0][0]
}