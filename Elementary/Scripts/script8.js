let userInput = document.getElementById('primeinput');

/* Checks if a number is prime */
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num ;
  }

/* Uses the isPrime function to get all prime numbers from 2 (the first prime number) to the number that the user inputs. */
function primeNumbers() {
    let userNumber = parseInt(document.getElementById('primeinput').value);
    let primes = [];
    let appendResult = document.getElementById('problem');
    if (userNumber <= 1) {
        primes.push('Prime numbers begin at the number 2, you silly billy.');
    } else {
        for (let i = 2; i <= userNumber; i++) {
            if (isPrime(i)) {
                primes.push(' ' + i);
            }
        }
    }
    appendResult.textContent = primes;
}

/* When the Go button is clicked, run the primeNumbers() function. */
const goBtn = document.getElementById('gobtn');
goBtn.addEventListener('click', primeNumbers);

/* Gives the user the option to press enter instead of clicking Go */
userInput.addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
      event.preventDefault();
      goBtn.click();
    }
});