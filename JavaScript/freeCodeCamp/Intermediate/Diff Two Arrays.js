function diffArray(arr1, arr2) {
	const firstArray = arr1.filter((value) => {
		if (!arr2.includes(value)) return value;
	});

	const secondArray = arr2.filter((value) => {
		if (!arr1.includes(value)) return value;
	});

	return firstArray.concat(secondArray);
}

console.log(
	diffArray(
		['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
		['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
	)
);
