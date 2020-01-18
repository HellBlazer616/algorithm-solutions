function oddOrEven(array) {
	const ans = array.reduce((total, value) => {
		return (total += value);
	}, 0);

	if (ans % 2 === 0 || ans === 0) return "even";

	return "odd";
}

console.log(oddOrEven([0, -1, -5]));
