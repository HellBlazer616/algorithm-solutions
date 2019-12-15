function toWeirdCase(string) {
	let index = 0;
	return string
		.split("")
		.map((c, i, a) => {
			if (c === " ") {
				index = -1;
			}
			if (index % 2 === 0 || index === 0) {
				index++;
				return c.toUpperCase();
			}
			index++;
			return c.toLowerCase();
		})
		.join("");
}

console.log(toWeirdCase("This is a test"));
