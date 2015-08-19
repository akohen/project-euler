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

problems[1] = function() {
  sum = 0;
  for(i=1; i<1000; i++) {
    if(i%3==0 || i%5==0)
      sum+=i;
  }
  return sum;
}

problems[2] = function() {
  a = 1;
  b = 2;
  sum = 2;
  while(b<4000000) {
    temp = a;
    a = b;
    b = b+temp;
    if(b%2==0)
      sum+=b;
  }
  return sum;
}

problems[8] = function() {
  var number = "73167176531330624919225119674426574742355349194934"+
    "96983520312774506326239578318016984801869478851843"+
    "85861560789112949495459501737958331952853208805511"+
    "12540698747158523863050715693290963295227443043557"+
    "66896648950445244523161731856403098711121722383113"+
    "62229893423380308135336276614282806444486645238749"+
    "30358907296290491560440772390713810515859307960866"+
    "70172427121883998797908792274921901699720888093776"+
    "65727333001053367881220235421809751254540594752243"+
    "52584907711670556013604839586446706324415722155397"+
    "53697817977846174064955149290862569321978468622482"+
    "83972241375657056057490261407972968652414535100474"+
    "82166370484403199890008895243450658541227588666881"+
    "16427171479924442928230863465674813919123162824586"+
    "17866458359124566529476545682848912883142607690042"+
    "24219022671055626321111109370544217506941658960408"+
    "07198403850962455444362981230987879927244284909188"+
    "84580156166097919133875499200524063689912560717606"+
    "05886116467109405077541002256983155200055935729725"+
    "71636269561882670428252483600823257530420752963450";
  maxProduct = 0;
  length = 13;
  for(i=0; i<1000-length; i++) {
    product = 1;
    for(j=0; j<length; j++) {
      product *= Number(number[i+j]);
    }
    if(product>maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}