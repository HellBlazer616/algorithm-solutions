function whatIsInAName(collection, source) {
	// Only change code below this line
	var arr = collection.filter((value) => {
		let filter = false;
		for (const key in source) {
			if (value.hasOwnProperty(key) && value[key] === source[key]) {
				filter = true;
				continue;
			} else {
				filter = false;
				break;
			}
		}
		if (filter) return value;
	});
	// Only change code above this line
	return arr;
}

const ans = whatIsInAName(
	[
		{ apple: 1, bat: 2 },
		{ apple: 1 },
		{ apple: 1, bat: 2, cookie: 2 },
		{ bat: 2 },
	],
	{ apple: 1, bat: 2 }
);

console.log(ans);
