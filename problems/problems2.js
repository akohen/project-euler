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