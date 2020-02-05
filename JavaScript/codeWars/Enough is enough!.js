function deleteNth(arr, n) {
	const ans = arr.reduce((acc, value, index, array) => {
		if (count(acc, value) < n) {
			acc.push(value);
		}
		return acc;
	}, []);
	return ans;
}

function count(arrayToCheck, valueToCheck) {
	return arrayToCheck.reduce((acc, value) => {
		if (value === valueToCheck) acc += 1;
		return acc;
	}, 0);
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
