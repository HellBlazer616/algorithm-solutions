function pairElement(str) {
	return str.split('').reduce((acc, value) => {
		if (value === 'A') acc.push([value, 'T']);
		if (value === 'T') acc.push([value, 'A']);
		if (value === 'G') acc.push([value, 'C']);
		if (value === 'C') acc.push([value, 'G']);

		return acc;
	}, []);
}

const ans = pairElement('GCG');

console.log(ans);
