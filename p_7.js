// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10001st prime number?


// importing solution 3


// algorithm from question 3. 
// improved to only check odd numbers
findFirstPrimeNumber = function(number) {
	var i = 3;
	
	while(i <= number) {
		var result = number/i;
		if (result%1 === 0) {
			return i;
		} else {
			i = i + 2;
		}
	}

	return number;
};

findingNthPrime = function findingNthPrime(n) {
	var startingNumber = 3;
	var primeFound = 1;
	var lastPrime = 0;
	
	while(primeFound < n) {
		if (findFirstPrimeNumber(startingNumber) === startingNumber) {
			primeFound +=1;
			lastPrime = startingNumber;
		}
		startingNumber = startingNumber + 2;
	}

	return lastPrime;
};

findingNthPrime(10001);