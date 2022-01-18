const displayResult = document.getElementById('display-result');
const submit = document.getElementById('submit');
submit.addEventListener('click', leapYears);
let results = document.getElementById('results');

function leapYears() {
    displayResult.textContent="";
    let inputYear = document.getElementById('inputyear').value;
    inputYear = Number(inputYear);
	let newYear = [];
    if (document.getElementById('inputyear').value.length == 0) {
        displayResult.textContent = "ERROR: Please enter a valid year, you silly billy."
        displayResult.style.color = "red";
    } else if (inputYear % 4 === 0) {	
		newYear[0] = inputYear;
		for (let i = 0; i < 19; i++) {
			newYear.push(newYear[i] + 4);
		}
        displayResult.innerHTML = "<strong>Next 20 leap years:</strong>";
        displayResult.style.color="black";
	} else if ((inputYear + 3) % 4 === 0) {
		newYear[0] = inputYear + 3;
		for(let i = 0; i < 19; i++) {
			newYear.push(newYear[i] + 4);
		}
        displayResult.innerHTML = "<strong>Next 20 leap years:</strong>";
        displayResult.style.color="black";
	} else if ((inputYear + 2) % 4 === 0) {
		newYear[0] = inputYear + 2;
		for (let i = 0; i < 19; i++) {
			newYear.push(newYear[i] + 4);
		}
        displayResult.innerHTML = "<strong>Next 20 leap years:</strong>";
        displayResult.style.color="black";
	} else if ((inputYear + 1) % 4 === 0) {
		newYear[0] = inputYear + 1;
		for (let i = 0; i < 19; i++) {
			newYear.push(newYear[i] + 4);
		}
        displayResult.innerHTML = "<strong>Next 20 leap years:</strong>";
        displayResult.style.color="black";
	}
    let newYearOutput = newYear.join(', ');
    results.textContent = newYearOutput;
    displayResult.appendChild(results);
}