function generateHashtag(str) {
	if (str.trim().length <= 0) return false;
	const ans = str.split(' ').reduce((acc, value, index, array) => {
		if (value == '') acc += '';
		else {
			let a, b;
			[a, ...b] = value;
			acc += a.toUpperCase() + b.join('');
		}

		return acc;
	}, '');
	if (ans.length > 140) return false;
	if (ans[0] !== '#') return `#${ans}`;
	else return ans;
}

console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'));
