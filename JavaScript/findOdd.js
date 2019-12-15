findOdd = (number) => {
	let numberAppearances = number.filter((c, index, a) => {
		let i = 0,
			counter = 0;

		for (; i < a.length; i++) {
			if (c === a[i]) counter++;
		}

		return !(counter % 2 === 0);
	});
	console.log(numberAppearances);

	return numberAppearances[0];
};

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

ans = findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

console.log(ans);
