function order(words) {
	if (words.length === 0) return words;
	const wordsArray = words.split(' ');
	let ans = Array(wordsArray.length).fill(0);
	wordsArray.map(value => {
		let pos = value.search(/[1-9]/);
		ans[Number(value.charAt(pos)) - 1] = value;
	});

	return ans.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
