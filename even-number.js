function evenNumbersOnly(numbers) {
	// console.log(numbers);
	for (const number of numbers) {
		if (number % 2 === 0) {
			// console.log(number);
		}
	}
}
const numbers = [10, 11, 12, 13, 14, 20, 23];
evenNumbersOnly(numbers);

const sumOfEvenNumbers = (numbers1) => {
	let sum = 0;
	for (const number of numbers1) {
		if (number % 2 === 0) {
			sum += number;
		}
	}
	return sum;
};

const result = sumOfEvenNumbers([3, 4, 8, 11, 12, 10, 2, 22]);
console.log(result);
