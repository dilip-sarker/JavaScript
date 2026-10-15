const str = 'hello';
let reversed = '';

for (let i = str.length - 1; i >= 0; i--) {
	reversed += str[i];
}

const sentence = 'I am learning web dev.';
const reversed1 = sentence.split('').reverse().join('');

console.log(reversed1);
