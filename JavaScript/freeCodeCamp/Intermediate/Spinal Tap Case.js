function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins

	return str.split('').reduce((acc, value, index, array) => {
		if (value.match(/[A-Z]/) && index !== 0 && !acc.slice(-1).match('-'))
			acc += `-${value.toLowerCase()}`;
		else if (
			value.match(/\s/) ||
			value.match(/\W/) ||
			(value.match('_') && !acc.slice(-1).match('-'))
		)
			acc += `-`;
		else acc += value.toLowerCase();

		return acc;
	}, '');
}

const ans = spinalCase('The_Andy_Griffith_Show');
console.log(ans);
