// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.


// a + b - 1000 = c
// c > b
// b > a

// 1 + 2 + 3 = 1000

solution = function  solution() {
	for (var a = 1; a < 1000; a++) {
		for (var b = a+1; b < a + Math.floor((1000-a)/2); b++) {
			var c = 1000 - a - b;
			if (a*a+b*b === c*c) return a*b*c;
		}
	}
};

solution();
