function myReplace(str, before, after) {
	const regex = RegExp(before, 'i');
	const index = str.search(regex);

	const isUpper = str[index] === str[index].toUpperCase();
	let afterCased = after;
	if (isUpper) {
		afterCased =
			after.slice(0, 1).toUpperCase() + after.slice(1, after.length);
	}

	return str.replace(regex, afterCased);
}

const ans = myReplace(
	'A quick brown fox Jumped over the lazy dog',
	'jumped',
	'leaped'
);

console.log(ans);
