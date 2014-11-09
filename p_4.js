// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


checkPalindrome = function(number) {
	var originalString = number.toString();
	var reverse = originalString.split("").reverse().join("");
	return originalString === reverse;
};

function largestPalidron() {
	var result = [];

	for (var x = 999; x >= 100; x--) {
		for (var y = 999; y >= 100; y--) {
			var m = x*y;
			if (checkPalindrome(m)) result.push(m);
		}
	}

	console.log(Math.max.apply(null,result));
}