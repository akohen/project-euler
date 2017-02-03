problems[14] = function() {
  let maxSteps = 0
  let maxStart = 0
  for(let start=13; start<1000000; start++) {
    let n = start
    let steps = 1
    while(n>1) {
      if(n%2==0) { n= n/2}
      else { n = 3*n + 1}
      steps++
    }
    if( steps > maxSteps ) {
      maxSteps = steps
      maxStart = start
    }
  }
  return maxStart
}