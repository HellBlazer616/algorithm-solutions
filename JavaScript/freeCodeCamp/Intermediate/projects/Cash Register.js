// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

const dollarReference = {
	PENNY: 0.01,
	NICKEL: 0.05,
	DIME: 0.1,
	QUARTER: 0.25,
	ONE: 1,
	FIVE: 5,
	TEN: 10,
	TWENTY: 20,
	'ONE HUNDRED': 100,
};

const organizedCash = (array) => {
	let sum = 0;
	const ans = array.reduceRight((acc, value) => {
		acc.push({
			name: value[0],
			numberOfNotes: (value[1] / dollarReference[value[0]]).toFixed(2),
			totalValue: value[1],
		});
		sum += value[1];
		return acc;
	}, []);

	ans.push({ name: 'totalCash', total: sum.toFixed(2) });
	return ans;
};

function checkCashRegister(price, payment, cid) {
	// Here is your change, ma'am.

	const storeCash = organizedCash(cid);
	const reverseCid = cid.slice(0).reverse();
	let totalCash = storeCash[storeCash.length - 1].total;
	let changeCash = payment - price;
	if (totalCash < changeCash) {
		return { status: 'INSUFFICIENT_FUNDS', change: [] };
	}
	if (totalCash == changeCash) {
		return { status: 'CLOSED', change: [...cid] };
	}

	return reverseCid.reduce(
		(acc, value, index, array) => {
			if (changeCash === 0) return acc;
			let note = dollarReference[value[0]];
			let noteValue = value[1];
			if (note < changeCash && noteValue !== 0) {
				let takeNoteNumber = Math.floor(changeCash / note);
				let takeAmount = takeNoteNumber * note;
				while (takeAmount > noteValue) {
					takeNoteNumber -= 1;
					takeAmount = takeNoteNumber * note;
				}
				let remainChangeCash = changeCash - takeAmount;
				let remainNote = takeAmount - (changeCash - remainChangeCash);
				if (remainNote < 0) return acc;
				else {
					let usedCash = takeAmount - remainNote;
					acc.change.push([value[0], usedCash]);
					acc.status = 'OPEN';
					changeCash = (changeCash - usedCash).toFixed(2);
				}
			}
			return acc;
		},
		{ status: 'INSUFFICIENT_FUNDS', change: [] }
	);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

const ans = checkCashRegister(3.26, 100, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100],
]);

console.log(ans);
