
let game = confirm('Do you want to play a game?');
let maxRange = 9;
let minRange = 0;
let quantityOfatempts = 3;
let prize = 0;
let flag = 0;
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;
let possiblePrize = [firstPrize, secondPrize, thirdPrize];
let koef = 1;
let doubleKoef = 2;
let incrMaxRange = 4;



while(game) {
	let number = Math.floor(Math.random() * (maxRange - minRange)) + minRange;
	flag = 0;
	for (let i = 0; i < quantityOfatempts; i++) {
		let numberOfPocket = +prompt('Choose a roulatte pocket number from 0 to ' + (maxRange -1) + 
		'\n Atempts left: ' + (quantityOfatempts - i) + '\n Total Prize: ' + prize + '\n Posible Prise: ' + 
		possiblePrize[i] * koef + '$\n');
		if(number === numberOfPocket) {
			flag ++;
			if(i === 0) {
				prize = prize + possiblePrize[i] * koef;
				break;
				
			} else if(i === 1) {
				prize = prize + possiblePrize[i] * koef;
				break;
				
			} else {
				prize = prize + possiblePrize[i] * koef;
			}
			
		}
	} 
	if (flag > 0) {
		alert('Congratulation, you won! Your prize is: ' + prize + '$.');
		let continu = confirm('Do you want to continue?');
		if(!continu) {
			alert('Thank you for your participation. Your prize is: ' + prize + '$');
			game = confirm('Do you want to play again?');
		} else {
			koef *= doubleKoef;
			maxRange = maxRange + incrMaxRange;
		}

	} else {
		prize = 0;
		alert('Thank you for your participation. Your prize is: ' + prize + '$');
		game = confirm('Do you want to play again?');
	}
} 
alert('You did not become a billionaire, but can.');
