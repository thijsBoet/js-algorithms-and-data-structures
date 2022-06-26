// counting - operations;

const addUpTo = n => (n * (n + 1)) / 2;
// multiplication, addition, division

function addUpto(n) {
	// assignment
	let total = 0;
	// assignment, n additions, n assignments
	for (let i = 1; i <= n; i++) {
		// n additions, n assignments
		total += i;
	}
	return total;
}
