const number = Math.floor(Math.random() * 100);
const guess = document.querySelector('#input');
const submit = document.getElementById('submit');
const result = document.getElementById('results');
const counting = document.getElementById('counting');
const user = document.getElementById('user');
const user2 = document.getElementById('user2');
const reset = document.getElementById('reset');
let guesses = [];
let counter = 0;
let unique = [];
 
submit.addEventListener('click', playGame);
reset.addEventListener('click', refreshPage);

function playGame() {
    let userGuess = guess.value;
    let newNum;
    let slash = document.createElement('span');
    slash.innerText = ' / ';
	if (userGuess < number && userGuess > 0) {
		guesses.push(userGuess);
		result.textContent = "Your guess was too low! Try again.";
		newNum = document.createElement('span');
		newNum.innerText = guess.value + ' ';
		user2.appendChild(newNum);
		user2.appendChild(slash);
	} else if (userGuess > number && userGuess >= 0 && userGuess < 101) {
		guesses.push(userGuess);
		result.textContent = "Your guess was too high! Try again.";
		newNum = document.createElement('span');
		newNum.innerText = guess.value + ' ';
		user2.appendChild(newNum);
		user2.appendChild(slash);
	} else if (userGuess == number) {
		guesses.push(userGuess);
		result.textContent = "You win!";
		user2.textContent += guess.value;
		guess.disabled = "true";
	} else if (userGuess <= 0 || userGuess > 100 || userGuess === '') {
		result.textContent = "Please enter a number from 1 - 100.";
	}

	unique = guesses.filter(onlyUnique);

	counting.innerHTML = "<strong>Guesses:</strong> " + unique.length;

	user.appendChild(user2);
	userGuess = '';
	guess.value = '';
}


function refreshPage() {
	if (guess.disabled) {
		location.reload();
	} else {
		if (confirm("Are you sure that you want to reset the game?")) {
			location.reload();
		}
	}
}

function onlyUnique (value, index, self) {
	return self.indexOf(value) === index;
}

guess.addEventListener("keyup", function(event) {
	if (event.code === "Enter") {
		event.preventDefault();
		submit.click();
	}
});