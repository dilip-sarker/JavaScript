function capitalizeWords(str) {
	return str
		.split(' ') // split by spaces
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
}

// Example
let text = 'hello world from javascript';
console.log(capitalizeWords(text));
// Output: "Hello World From Javascript"
