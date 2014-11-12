// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


sumOfSquare = function sumOfSquare(limit) {
	// use square of sum formula
	return (((limit*limit*limit)/3) + ((limit*limit)/2) + limit/6);
};

squareOfSum = function squareOfSum(limit) {
	var a = Array.apply(1,Array(limit+1)).map(function(v,index) {return index;});
	var sum = a.reduce(function(prev,curr) {return prev+curr;});
	return sum*sum;
};

solution = function solution(limit) {
	var sumOsquare = sumOfSquare(limit);
	var squareOsum = squareOfSum(limit);
	return squareOsum - sumOsquare;
};

solution(100);