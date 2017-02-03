problems[10] = function() {
  limit = 2000000;
  sieveLimit = Math.ceil(Math.sqrt(limit));
  sieve = {};
  
  for(i=2; i<=sieveLimit; i++) {
    if( !sieve[i] ) {
      for(j=i*i; j<=limit; j+=i) {
        sieve[j] = true;
      }
    }
  }

  sum = 0;
  for(i=2; i<=limit; i++) {
    if( !sieve[i]) {
      sum += i;
    }
  }

  return sum;
}

problems[9] = function() {
  let c = 330
  while(c < 999) {
    for(let a = Math.floor(1000-2*c)+1; a<(1000-c)/2;a++) {
      let b = 1000 - a - c
      if(a*a+b*b==c*c) { return (a*b*c) }
    }
    c++
  }
  return -1
}