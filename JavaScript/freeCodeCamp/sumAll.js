function sumAll(arr) {
	// if (arr[0] > arr[1]) return sum(arr[1], arr[0]);
	// else return sum(arr[0], arr[1]);
	// function sum(start, end) {
	// 	let counter = start + 1;
	// 	for (counter; counter <= end; counter++) {
	// 		start += counter;
	// 	}
	// 	return start;
	
		const sum = (start, end) => {
			if (start === end) return end;
			else return start + sum(start + 1, end);
		};
		arr.sort();
		return sum(arr[0], arr[1]);
	}

}
const sum = (start, end) => {};

console.log(sumAll([1, 4]));
