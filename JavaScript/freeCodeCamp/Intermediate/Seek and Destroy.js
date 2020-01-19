function destroyer(arr) {
	let check;
	const variable = ([, ...check] = [...arguments]);

	return arr.filter((value) => {
		if (!check.includes(value)) return value;
	});
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
