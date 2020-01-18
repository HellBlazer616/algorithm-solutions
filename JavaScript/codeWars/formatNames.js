function list(names) {
	if (names.length == 0) return '';
	if (names.length == 1) return names[0].name;
	let ans = names.map((value, index, array) => {
		return value.name;
	});

	let lastValue = ans.splice(-1);

	return ans.join(', ').concat(` & ${lastValue}`);
}
// test case
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));

// best practice

// function list(names) {
// 	return names.reduce(function(prev, current, index, array) {
// 		if (index === 0) {
// 			return current.name;
// 		} else if (index === array.length - 1) {
// 			return prev + ' & ' + current.name;
// 		} else {
// 			return prev + ', ' + current.name;
// 		}
// 	}, '');
// }

// clever

// function list(names) {
// 	var xs = names.map(p => p.name);
// 	var x = xs.pop();
// 	return xs.length ? xs.join(', ') + ' & ' + x : x || '';
// }
