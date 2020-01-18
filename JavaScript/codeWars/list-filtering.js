function filter_list(l) {
	return l.filter((value) => {
		return typeof value !== typeof "";
	});
}

const ans = filter_list([1, 2, "a", "b"]);

console.log(ans);
