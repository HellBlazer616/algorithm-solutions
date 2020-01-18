function findMissingLetter(array) {
	let str = array.join("");
	// let ans;
	// for (let counter = 0; counter < str.length; counter++) {
	// 	if (str.charCodeAt(counter) !== str.charCodeAt(counter + 1) && counter + 1 !== str.length) {
	// 		ans = String.fromCharCode(str.charCodeAt(counter) + 1);
	// 		break;
	// 	}
	// }
	// return ans;

	return str.map((c, i, a) => {
		if (a.charCodeAt(i) !== a.charCodeAt(i + 1) - 1 && i + 1 !== a.length) {
			return String.fromCharCode(a.charCodeAt(i) + 1);
		}
	});
}

answer = findMissingLetter(["O", "Q", "R", "S"]);
console.log("TCL: ans", answer);
