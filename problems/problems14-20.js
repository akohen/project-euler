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