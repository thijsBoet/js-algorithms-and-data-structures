# JavaScript Algorithms and Data Structures Masterclass

## Big O
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
2. Remove constants
3. - Different inputs have different variables O(a+b)
   - A and B arrays nested would be O(a*b)
4. Drop non dominant terms

- O(1)Constant –no loops
- O(log N) Logarithmic –usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear –for loops, while loops through n itemsO(n log(n))
- O(n log(n)) Log Linear –usually sorting operationsO(n^2)
- O(n^2) Quadratic –every element in a collection needs to be compared to ever other element. Two nested loopsO(2^n)
- O(2^n) Exponential –recursive algorithms that solves a problem of size NO(n!)
- O(n!) Factorial –you are adding a loop for every element