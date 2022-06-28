// Write a character map function that takes a string and returns an object mapping

/*

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
const charCount = (string) => {
	create charMap object to return at end

	loop over lowercase string for each character
		if the char is a number/letter AND is a key in object add one
		if char is a number/letter is not in object add it and set value to one
		if character is something else (space, period, etc.) do nothing

	return charMap
}
```
const charCount = (string) => {
	const charMap = {}

	for (char in string.split("")){
		charMap[char] = charMap[char] + 1 || 1
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
*/