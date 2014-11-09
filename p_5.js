// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Euclidean agorithm
// greatest common divisor
// a number that divides both numbers without leaving a remainder
gcd = function(a,b) {
	a1 = a; 
	b1 = b;

	while(a1-b1 !== 0) {
		temp = Math.abs(a1-b1);
		b1 = Math.min(a1,b1);
		a1 = temp;
	}

	return b1;
};

lcm = function (a,b) {
	return (b/gcd(a,b))*a;
};


lowestCommonMultiple = function() {
	var range = [];
	var startTime = new Date().getTime();
	
	for (i=1;i<=20; i++) range.push(i);

	var index = 1;

	while(range.length > 1) {
		console.log(range)
		temp = lcm(range[0],range[1]);

		range.shift();
		range[0] = temp;
	}

	var endTime = new Date().getTime();
	console.log("It took:",endTime-startTime);
	return range[0];
};

console.log(lowestCommonMultiple());

// attempted to do GCD recursively but stack overflow - used while loop instead
// It took: 30.796s
