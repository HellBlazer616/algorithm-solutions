function translatePigLatin(str) {
	const regexConsonant = /^[^aeiou]+/;
	const vowel = str.match(/[aeiou]/);

	if (vowel !== null && vowel['index'] === 0) return str.concat('way');

	const ans = str.match(regexConsonant);
	return str.replace(ans[0], '').concat(`${ans[0]}ay`);
}

const answer = translatePigLatin('rhythm');

console.log(answer);
