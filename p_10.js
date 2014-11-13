// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.


// Sieve of Eratosthenes
// To find all the prime numbers less than or equal to a given integer n by Eratosthenes' method:
// 1. Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
// 2. Initially, let p equal 2, the first prime number.
// 3. Starting from p, enumerate its multiples by counting to n in increments of p, and mark them in the list (these will be 2p, 3p, 4p, etc.; the p itself should not be marked).
// 4. Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.


solution = function solution(limit) {
	var a = [2];

	// create an array from 2 to limit without the even numbers
	for (var i =2; i < limit; i++) {
		if(i%2 !== 0) a.push(i);
	}

	var index = 0;
	var p = a[index];

	// loop through every prime and delete the multiples
	// don't need to loop through the primes which multiples be over the limit and therefore not in the array
	while(index < a.length && (p*2 <= limit)) {
		p = a[index];	
		// loop through and delete multiples
		// start at last known prime
		for (var x= a.indexOf(p); x < a.length; x++) {
			var val = a[x];
			if (!(val%p) && val !== p) a.splice(x,1);
		}

		index += 1;
	}

	return a.reduce(function(prev,curr) {
		return prev+curr;
	});
};
	
var startTime = new Date().getTime();
console.log(solution(2000000));
var endTime = new Date().getTime();
console.log("it took: ", (endTime-startTime)/1000);
