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

1 - Devise a plan for solving problems
2 - Master common problem solving patterns

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
	// create charmap object to return at end

	// loop over lowercase string for each character
		// if the char is a number/letter AND is a key in object add one
		// if char is a number/letter is not in object add it and set value to one
		// if character is something else (space, period, etc.) do nothing

	// return charMap
}
```