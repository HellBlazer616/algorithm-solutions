duplicateEncode = (word) => {
	let words = word.toLowerCase();
	console.log(words);
	let arr = words.split("");
	let duplicateElement = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === ")") continue;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j] && j === arr.length - 1) {
				console.log(
					`First The i ${i} and j ${j}  | arr[i] = ${arr[i]} and arr[j] = ${arr[j]}`,
				);
				duplicateElement.push(i);
				duplicateElement.push(j);
			} else if (arr[i] === arr[j]) {
				console.log(
					`Second The i ${i} and j ${j}  | arr[i] = ${arr[i]} and arr[j] = ${arr[j]}`,
				);
				duplicateElement.push(i);
				duplicateElement.push(j);
			}
		}
		// if (duplicateElement >= 1) arr[i] = "same";
	}

	let unique_values = [...new Set(duplicateElement)];
	unique_values.sort(function(a, b) {
		return a - b;
	});
	console.log(unique_values);
	console.log(arr);
	for (let l = 0, m = 0; l < arr.length; l++) {
		console.log(`l ${l}`);
		console.log(`dup[m] ${unique_values[m]}`);
		if (l === unique_values[m]) {
			console.log(`inside`);
			arr[l] = ")";
			m++;
		} else {
			arr[l] = "(";
		}
	}
	return (brr = arr.join(""));

	console.log(arr);
	console.log(brr);
};
// function duplicateEncode(word) {
// 	return word
// 		.toLowerCase()
// 		.split("")
// 		.map(function(alphabet, index, word) {
// 			return word.indexOf(alphabet) === word.lastIndexOf(alphabet)
// 				? "("
// 				: ")";
// 		})
// 		.join("");
// }

// ans = duplicateEncode("()()()()()(");

console.log(ans);
duplicateEncode("din");
