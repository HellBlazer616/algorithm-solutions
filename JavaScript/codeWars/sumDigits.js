function sumDigits(number) {
	return Math.abs(number)
		.toString()
		.split('')
		.reduce((total, value) => {
			return total + parseInt(value);
		}, 0);
}
console.log(sumDigits(101));
