function rot13(str) {
	// LBH QVQ VG!

	const cipherText = str.split('').reduce((acc, value, array, index) => {
		if (value.match(/\W/)) acc += value;
		if (value.match(/[A-M]/))
			acc += String.fromCharCode(value.charCodeAt(0) + 13);
		if (value.match(/[N-Z]/))
			acc += String.fromCharCode(value.charCodeAt(0) - 13);

		return acc;
	}, '');

	return cipherText;
}

// Change the inputs below to test
const ans = rot13('SERR PBQR PNZC?');

console.log(ans);
