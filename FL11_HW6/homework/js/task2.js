let a = +prompt('Input side a');
let b = +prompt('Input side b');
let c = +prompt('Input side c');


if (a + b > c && a + c > b && b + c > a) {
	if (a === b === c) {		
		console.log('Equivalent triangle');
	} else if (a === b || a === c || b === c) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');
	}
} else {
	console.log('Triangle doesn\'t exist');
}
