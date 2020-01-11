function partList(arr) {
	const ans = arr.map((value, index, array) => {
		return [
			array.slice(0, index + 1).join(' '),
			array.slice(index + 1, array.length).join(' '),
		];
	});

	ans.pop();

	return ans;
}

console.log(partList(['I', 'wish', 'I', "hadn't", 'come']));
