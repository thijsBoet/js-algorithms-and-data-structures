# JavaScript Algorithms and Data Structures Masterclass

### Problem with time measurements
1. Timing code performance varies between machines
2. The same machine will record different times
3. For fast algorithms, speed measurement may not be precise enough

### Problem with counting operations
1. Operations vary with every extra loop
2. Number of operations grows roughly proportionally with every extra loop and is therefor not an exact figure

### Introducing Big O
Big O allows us to talk formally about how the runtime grows as the input grows

1. Always worst case scenario
```
O(n2 + 5n +8) === O(n2)
```
2. Remove constants
```
O(5n + 10) === O(n)
O(500) === O(1)
O(13n2) === O(n2)
```
3. - Different inputs have different variables O(a+b)
   - A and B arrays nested would be O(a*b)
4. Drop non dominant terms

![Big O Chart](big-o-chart.png)

- O(1)Constant –no loops
- O(log N) Logarithmic –usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear –for loops, while loops through n itemsO(n log(n))
- O(n log(n)) Log Linear –usually sorting operationsO(n^2)
- O(n^2) Quadratic –every element in a collection needs to be compared to ever other element. Two nested loopsO(2^n)
- O(2^n) Exponential –recursive algorithms that solves a problem of size NO(n!)
- O(n!) Factorial –you are adding a loop for every element

1. Arithmetic operations are constant time
2. Variable assignments are constant time
3. Accessing elements in an array (index) or object (key) are constant time
4. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside the loop

### Space Complexity
Space complexity measures how much additional memory we need to allocate in order to run the code in our algorithm

1. Most primitives (booleans, numbers, undefined, null) are constant space
```
myArray.reduce((sum, value) => sum += value)
```
2. Strings require O(n) space (where n is the string length)
```
myString.split("").reverse().join("")
```
4. Reference types are generally O(n), where n is the length (arrays) or number of keys (objects)
```
myArray.map(number => number * 2)
```

### Analyzing performance of Objects
Use objects when you don't need order and fast access / insertion / deletion
1. Insertion - O(1)
2. Access - O(1)
3. Deletion - O(1)
4. Searching - O(n)

- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)
- hasOwnProperty() - O(1)

### Analyzing performance of Arrays
Use Arrays when you need order and sort of fast access / insertion / deletion
1. Insertion - depends on index end = O(1) begin = O(n)
2. Access - O(1)
3. Deletion - depends on index end = O(1) begin = O(n)
4. Searching - O(n)

- push - O(1)
- pop - O(1)
- shift - O(1)
- unshift - O(n)
- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n log(n))
- forEach/map/filter/reduce/etc - O(n)

### How to improve solving algorithms
An algorithm is a process or set of steps to accomplish a certain task.

1. Devise a plan for solving problems
2. Master common problem solving patterns

1. Understand the problem
   - Explore concrete examples
   - Identify the inputs and outputs of the problem
   - Look for edge cases

   1.  Can I restate the problem in my own words?
		- Start with simple example
		- Progress to more complex examples
   2.  What are the inputs that go into the problem?
		- Explore examples with empty inputs
		- Explore examples with invalid inputs
   3.  What are the outputs that should come from the solution to the problem?
   4.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
   5.  How should I label the important pieces of data that are a part of the problem?

2. Break it down into steps (forces you to thing about code and helps you catch any lingering conceptual issues or misunderstandings, before you dive in)
   - solve/simplify the problem
   - break the problem down into smaller parts

3. Write the code
4. Test the code
5. Refactor the code

### Example
Write a character map function that takes a string and returns an object mapping

UNDERSTAND THE PROBLEM AND EXPLORE CONCRETE EXAMPLES
----------------------------------------------------
1. Differentiate numbers?
2. Differentiate upper and lower case?
3. Differentiate punctuation?
4. Differentiate spaces?
5. Count zero occurrences?
6. Empty input?
7. Invalid types. like booleans and numbers?

BREAK IT DOWN
-------------
```
const charCount = (string) => {
// create charMap object to return at end

// loop over lowercase string for each character
	// if the char is a number/letter AND is a key in object add one
	// if char is a number/letter is not in object add it and set value to one
	// if character is something else (space, period, etc.) do nothing

// return charMap
}

const isAlphaNumeric = (char) => {
	let code = char.charCodeAt(0);
	if(!(code > 47 && code < 58) &&
		 !(code > 64 && code < 91) &&
		 !(code > 96 && code < 123)) {
		return false
	}
	return true
}

const charCount = (string) => {
	const charMap = {}

	for (let char of string){
	//if(/[a-z0-9]/.test(char)) charMap[char] = charMap[char] + 1 || 1
		if(isAlphaNumeric(char)) {
			char = char.toLowerCase()
			charMap[char] = charMap[char] + 1 || 1
		}
	}

	return charMap
}

```
SOLVE THE PROBLEM if you can't SOLVE A SIMPLER PROBLEM
------------------------------------------------------
1. Find the core difficulty in what you are trying to do
2. Temporarily ignore that difficulty
3. Write a simplified solution
4. Then incorporate that difficulty back in

REFACTOR QUESTIONS
------------------
- Can you improve the performance of your solution?
- Can you derive the result differently?
- Can you think of other ways to refactor?
- How have other people solved this problem?
- Can you understand it at a glance?
- Can you check the result?
- Can you use the result or method for some other problem?

### Common problem solving patterns
About 10-20% of problems follow a common problem solving patterns
- Some Examples are:
1. Divide and Conquer
  - Mergesort
	- Quicksort
	- Median
	- Karatsuba’s Integer Multiplication
	- Matrix Multiplication
	- FFT
	- Nearest Neighbors
2. Decrease and Conquer
	- Binary search
	- Factorial
	- Selection Sort
	- Insertion Sort
	- Largest Number
	- Greatest Common Divisor
	- Topological Sort
	- Insertion or lookup in a binary search tree
	- Computing the median
3. The Greedy Method
	- Minimum Spanning Trees
	- Naive coin changing
	- Huffman Compression
	- Dijkstra’s Shortest Path
4. Dynamic Programming
	- Interval scheduling
	- Longest common subsequence
	- Coin changing
	- Levenshtein distance
	- Matrix-chain multiplication
	- Integer knapsack
	- Shortest path
	- Word wrap
	- Traveling salesperson
5. Backtracking
	- Map coloring
	- Eight queens
	- Knight’s Tour
	- Maze solving
	- Regular expression matching
	- Generic path finding
6. Branch and Bound
	- Satisfiability
	- Traveling salesperson
	- Integer programming
	- Nearest neighbor search
	- Nonlinear programming
7. Hill Climbing
8. Particle Swarm Optimization
	- Neural network training
	- Finite element updating
9. Las Vegas
	- Finding a value in a collection
	- Randomized Quicksort
10. Monte Carlo
	- Miller-Rabin primality test
	- Approximating π (by throwing darts)
	- Approximating integrals
	- Game playing
11. Reduction (Transformation) a.k.a. transform and conquer.
12. Preprocessing
	- Table of counts for counting sort
	- Boyer-Moore pattern matching
	- Storing often used data in a hashtable
	- Store often used data in a search tree (B-tree, BST, Red-black, ...)
	- Heapify, prior to heapsort