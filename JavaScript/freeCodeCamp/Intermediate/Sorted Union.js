function uniteUnique(...arr) {
	const ans = arr.flat().reduce((acc, value) => {
		if (!acc.includes(value)) acc.push(value);

		return acc;
	}, []);

	return ans;
}

const answer = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(answer);
