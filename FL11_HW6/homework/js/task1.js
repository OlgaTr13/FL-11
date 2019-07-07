let a1 = +prompt('Input X of point A');
let a2 = +prompt('Input Y of point A');
let b1 = +prompt('Input X of point B');
let b2 = +prompt('Input Y of point B');
let c1 = +prompt('Input X of point C');
let c2 = +prompt('Input Y of point C');


if (c1 === (a1 + b1) / 2 && c2 === (a2 + b2) / 2) {
	console.log(true);
} else {
	console.log(false);
}
