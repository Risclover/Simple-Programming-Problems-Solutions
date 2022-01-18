const submit = document.getElementById('submit');
const list = document.getElementById('listresults');
const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');
const yourList = document.getElementById('yourlist');
const yourCalc = document.getElementById('yourcalc');
const calcResults = document.getElementById('calcresults');
let listItem;

submit.addEventListener('click', arrayInput);
calculate.addEventListener('click', calculateArray);
reset.addEventListener('click', resetProgram);

function sortByLength(arr) {
    return arr.sort((x,y) => x.length - y.length);
}

function arrayInput() {
    yourList.innerHTML = "<strong>Your list:</strong>";
    const userInput = document.getElementById('userinput');
    if (userInput.value != '') {
        listItem = document.createElement('li');
        yourList.style.display = 'block';
        yourList.classList.add('ptop');
        listItem.textContent = userInput.value + ' ';
        list.appendChild(listItem);
        userInput.value = '';
    } else if (userInput.value === '') {
        return false;
    }
}

function calculateArray() {
    if(listItem.textContent === '') {
        return false;
    } else {
        calcResults.textContent = '';
        let newArr = list.textContent.split(' ');
        if (!newArr.some(isNaN)) {
            newArr.sort((a, b) => a - b);
        } else {
                sortByLength(newArr);
        }
        let biggestElement = document.createElement('li');
        calcResults.appendChild(biggestElement);
        biggestElement.textContent = newArr[newArr.length-1];
        yourCalc.innerHTML = "<strong>Biggest element:</strong>";
        yourCalc.classList.add('ptop');
    }
}

function resetProgram() {
    location.reload();
}

const userInput = document.getElementById('userinput');

/* Gives the user the option to press enter instead of clicking Go */
userInput.addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
      event.preventDefault();
      submit.click();
    }
});

/* Gives the user the option to press ctrl + z instead of clicking Calculate */
document.addEventListener("keyup", function(event) {
    if (event.ctrlKey && event.key === "z") {
      event.preventDefault();
      calculate.click();
    }
});

/* Gives the user the option to press ctrl + x instead of clicking Reset */
document.addEventListener("keyup", function(event) {
    if (event.ctrlKey && event.key === "x") {
      event.preventDefault();
      reset.click();
    }
});