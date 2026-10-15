function noDuplicate(array) {
	let unique = [];
	for (const item of array) {
		if (!unique.includes(item)) {
			unique.push(item);
		}
	}
	return unique;
}

let biriyaniKhor = [
	'abul',
	'kabul',
	'babul',
	'cabul',
	'dabul',
	'abul',
	'kabul',
	'babul',
	'kobul',
	'robul',
	'sobul',
	'babul',
	'cabul',
	'dabul',
];
const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);
