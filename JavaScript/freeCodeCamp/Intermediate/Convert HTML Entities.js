function convertHTML(str) {
	// &colon;&rpar;
	return str
		.split('')
		.map((value) => {
			switch (value) {
				case '&':
					return '&amp;';

				case '<':
					return '&lt;';

				case '>':
					return '&gt;';

				case '"':
					return '&quot;';

				case "'":
					return '&apos;';

				default:
					return value;
			}
		})
		.join('');
}

const ans = convertHTML('Stuff in "quotation marks"');

console.log(ans);
