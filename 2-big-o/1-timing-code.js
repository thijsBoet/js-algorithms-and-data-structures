// Timing code performance varies between machines
// The same machines will record different times
// For fast algorithms, speed measurement may not be precise enough

// function addUpto(n) {
// 	let total = 0;
// 	for (let i = 1; i <= n; i++) {
// 		total += i
// 	}
// 	return total
// }

const addUpTo = n => n * (n + 1) / 2;

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)