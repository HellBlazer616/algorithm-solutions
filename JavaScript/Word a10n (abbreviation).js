function abbreviate(string) {
	const words = string.split(' ');
	const ans = [];
	words.forEach(value => {
		let check = value.search(/[^A-Za-z,]/);
		if (value.length < 4) {
			ans.push(value);
		} else if (check > 1 && value.length > 4) {
			let temp = value.split(/[^A-Za-z]/);
			ans.push(
				`${temp[0][0]}${temp[0].length - 2}${temp[0][temp[0].length - 1]}${value[check]}${
					temp[1][0]
				}${temp[1].length - 2}${temp[1][temp[1].length - 1]}`
			);
		} else if (value.length >= 4)
			if (value[value.length - 1] === ',') {
				ans.push(
					`${value[0]}${value.length - 3}${value[value.length - 2]}${
						value[value.length - 1]
					}`
				);
			} else ans.push(`${value[0]}${value.length - 2}${value[value.length - 1]}`);
		else {
			ans.push(value);
		}
	});

	return ans.join(' ');
}

console.log(abbreviate('You need, need not want, to complete this code-wars mission'));
