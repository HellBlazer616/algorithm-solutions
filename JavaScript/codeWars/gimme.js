const gimme = function(inputArray) {
	const sortedArray = [...inputArray];
	sortedArray.sort((a, b) => a - b);
	return inputArray.indexOf(sortedArray[1]);
};

console.log(gimme([2, 3, 1]));
