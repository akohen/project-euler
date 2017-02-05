problems[25] = function(digits=1000) { // Un has more than 1000 digits <=> Un >= 1e999  
  let current = 1
  let previous = 1
  let length = 1
  let n = 2
  let zeroes = 0
  while(length < digits) {
    let next = current + previous
    previous = current
    current = next
    length = Math.floor(Math.log10(current) + 1) + zeroes
    if(Math.log10(current) > 25) {
      zeroes += 20
      current = Math.round(current/1e20)
      previous = Math.round(previous/1e20)
    }
    n++
  }
  return n
}