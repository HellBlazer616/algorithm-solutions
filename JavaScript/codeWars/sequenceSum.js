var SequenceSum = (function() {
	function SequenceSum() {}

	SequenceSum.showSequence = function(count) {
		let ans = [];
		if (count < 0) {
			ans.unshift(`${count}<0`);
			return ans.join('');
		}
		if (count == 0) {
			ans.unshift(`${count}=0`);
			return ans.join('');
		}
		const result = (count * (count + 1)) / 2;
		ans.unshift(` = ${result}`);
		while (count >= 0) {
			if (count == 0) {
				ans.unshift(`${count}`);
				count--;
			} else {
				ans.unshift(`+${count}`);
				count--;
			}
		}
		return ans.join('');
	};

	return SequenceSum;
})();

console.log(SequenceSum.showSequence(6));
