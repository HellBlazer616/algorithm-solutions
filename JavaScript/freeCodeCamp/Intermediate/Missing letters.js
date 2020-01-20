function fearNotLetter(str) {
	const ans = str.split('').reduce((acc, value, index, array) => {
		if (
			array[index + 1] &&
			array[index].charCodeAt(0) + 1 === array[index + 1].charCodeAt(0)
		)
			return acc;
		else {
			if (index !== array.length - 1)
				acc = String.fromCharCode(array[index].charCodeAt(0) + 1);
		}

		return acc;
	}, undefined);

	return ans;
}

const answer = fearNotLetter('abcdefghjklmno');
console.log(answer);
