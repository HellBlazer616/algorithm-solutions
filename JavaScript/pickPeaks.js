function pickPeaks(arr) {
	let ans = {
		pos: [],
		peaks: [],
	};

	arr.filter((c, i, a) => {
		console.log(` i: ${i} a[i]: ${a[i]}`);
		if (a[i] > a[i - 1] && a[i] >= a[i + 1] && !(a[i + 2] > a[i] && a[i + 2] > a[i + 1])) {
			ans.peaks.push(c);
			ans.pos.push(i);
		}
	});

	let lastPos = ans.pos[ans.pos.length - 1];
	let lastPeak = ans.peaks[ans.peaks.length - 1];
	let check = 0;
	const checkLength = arr.length - lastPos;

	for (; lastPos < arr.length; lastPos++) {
		if (lastPeak === arr[lastPos]) check++;
	}

	if (checkLength === check && ans.pos.length >= 1) {
		ans.peaks.pop();
		ans.pos.pop();
	}

	return ans;
}
const ans = pickPeaks([0, 4, 15, 1, 6, -4, -3, 9, -4, 11, 3, 4, 2, 0, 3, -2, 10, -4, -4]);

console.log(ans);
