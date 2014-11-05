// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var findNaturalSum = function(N) {
	var array = [];
	for(var i = 0; i < N; i++) array.push(i);
	return array.reduce(function(prev,curr) {
		if(!(curr%3) || !(curr%5)) return prev+curr;
		return prev;
	});
};
