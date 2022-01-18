function numberSum() {
    let userNumber = prompt("Please enter a number.");
    let numberArr = [];
    let newNum;
    let sum = 0;

    for (let i = 0; i < userNumber; i++) {
        newNum = parseInt(userNumber) - i;
        numberArr.push(newNum);
    }

    for (let j = 0; j < numberArr.length; j++) {
        sum += numberArr[j];
    }

    alert(`The sum of the numbers from 1 to ${userNumber} is ${sum}.`);
}

const runProgram = document.getElementById('run');

runProgram.addEventListener('click', numberSum);