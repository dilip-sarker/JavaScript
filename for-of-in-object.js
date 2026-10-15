const person = {
	Name: 'Dilip',
	Age: 28,
	Gender: 'Male',
	Country: 'Bangladesh',
};
// console.log(person['name']);

// person['name'] = 'Dilip Sarker';

// for (let key in person) {
// 	console.log(`${key} : ${person[key]}`);
// }

for (let [key, value] of Object.entries(person)) {
	console.log(`${key} : ${value}`);
}
