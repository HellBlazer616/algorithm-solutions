// write the function isAnagram
const isAnagram = function(test, original) {
	return wordSort(test) === wordSort(original) ? true : false;

	function wordSort(word) {
		return word
			.toLowerCase()
			.split('')
			.sort()
			.join('');
	}
};

console.log(isAnagram('foefet', 'toffee'));
