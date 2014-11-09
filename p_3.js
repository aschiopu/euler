// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600,851,475,143 ?

findFirstPrimeNumber = function(number) {
	var i = 2;
	
	while(i <= number) {
		var result = number/i;
		if (result%1 === 0) {
			return i;
		} else {
			i++;
		}
	}

	return number;
};

var findPrime = function(targetNumber) {
	var result =[];

	while(true) {
		var prime = findFirstPrimeNumber(targetNumber);
		result.push(prime);
		if (prime === targetNumber) break;
		targetNumber = targetNumber/prime;
	}
	return Math.max.apply(null,result);
};

console.log("Highest Prime:",findPrime(600851475143));