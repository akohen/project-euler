problems[10] = function() {
  number = 2;
  primes = [];
  sum = 0;
  while(number<2000000) {
    if(!primes.some(function(prime) { return (number%prime == 0); })) {
      primes.push(number);
      sum += number;
    }
    number++;
  }
  return sum;
}