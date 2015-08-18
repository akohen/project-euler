var problems = {};

problems[4] = function() {
  function isPalindrome(product) {
    n = product;
    reverse = 0;
    while(n>0) {
      digit = n%10;
      reverse = reverse * 10 + digit;
      n = (n-digit)/10;
    }
    return reverse == product;
  }

  result = 0;
  for(i=100;i<1000;i++) {
    for (j = 100; j < 1000; j++) {
      product = i*j;
      if( isPalindrome(product) && product > result ) {
        result = product
      }
    }
  }
  return result;
}


problems[3] = function() {
  n = 600851475143;
  factors = [];
  i=2;
  while(n>1) {
    while(n%i==0) {
      n = n / i;
    }
    i++;
  }
  return --i;
}


problems[5] = function() {
  // done faster by hand
  return 232792560;
}

problems[6] = function() {
  sum = 0;
  sumOfSquares = 0;
  for(i=1; i<=100;i++){
    sum += i;
    sumOfSquares += i*i;
  }
  return (sum*sum) - sumOfSquares;
}


problems[7] = function() {
  n = 10001;
  number = 2;
  primes = [];
  while(primes.length<n) {
    if(!primes.some(function(prime) { return (number%prime == 0); })) {
      primes.push(number);
    }
    number++;
  }
  return primes[n-1];
}

