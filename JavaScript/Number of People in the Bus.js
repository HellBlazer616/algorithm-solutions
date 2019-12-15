function numberOfPeople(busStops) {
	numberOfStops = busStops.length;
	let total = 0;

	for (let i = 0; i < numberOfStops; i++) {
		total += busStops[i][0] - busStops[i][1];
	}

	sum = busStops.reduce((sum, [on, off]) => {
		return sum + on - off;
	}, 0);
	busStops.reduce((rem, [on, off]) => rem + on - off, 0);
	console.log(sum);

	return total;
}
ans = numberOfPeople([
	[10, 0],
	[3, 5],
	[5, 8],
]);

console.log(ans);
