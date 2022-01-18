const addBtn = document.getElementById('addbtn');
const multiplyBtn = document.getElementById('multiplybtn');
var result = document.getElementById('problem-result');
var numberArr = [];
var newNum;
var sum = 0;
var total = 1;

addBtn.addEventListener('click', function() {
    let userInput = parseInt(document.getElementById('userinput').value, "0");
    for (let i = 0; i < userInput; i++) {
        newNum = parseInt(userInput) - i;
        numberArr.push(newNum);
    }

    for (let j = 0; j < numberArr.length; j++) {
        sum += numberArr[j];
    }

    result.textContent = sum;
    document.getElementById('userinput').value = '';
    sum = 0;
    numberArr = [];
});

multiplyBtn.addEventListener('click', function() {
    let userInput = parseInt(document.getElementById('userinput').value, "0");
    for (let i = 0; i < userInput; i++) {
        newNum = parseInt(userInput) - i;
        numberArr.push(newNum);
    }

    for (let j = 0; j < numberArr.length; j++) {
        total = total * numberArr[j];
    }

    result.textContent = total;
    document.getElementById('userinput').value = '';
    total = 1;
    numberArr = [];
})