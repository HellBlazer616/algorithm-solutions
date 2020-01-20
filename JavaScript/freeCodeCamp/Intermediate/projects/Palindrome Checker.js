function palindrome(str) {
	// Good luck!
	const string = str.toLowerCase().replace(/[\W\s\_]/g, '');
	const reverseString = string
		.slice()
		.split('')
		.reverse()
		.join('')
		.toLowerCase();

	return string === reverseString;
}

console.log(palindrome('1 eye for of 1 eye.'));
