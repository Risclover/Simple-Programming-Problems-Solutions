const submit = document.getElementById('submit');
const list = document.getElementById('listresults');
const oddItems = document.getElementById('returnodds');
const reset = document.getElementById('reset');
const yourList = document.getElementById('yourlist');
const yourOdds = document.getElementById('yourodds');
const oddResults = document.getElementById('oddresults');
let listItem;
let arr = [];

submit.addEventListener('click', arrayInput);
oddItems.addEventListener('click', returnOddItems);
reset.addEventListener('click', resetProgram);


function arrayInput() {
    yourList.innerHTML = "<strong>Your list:</strong>";
    const userInput = document.getElementById('userinput');
    if (userInput.value != '' && userInput.value != ' ') {
        arr.push(userInput.value);
        listItem = document.createElement('li');
        yourList.style.display = 'block';
        yourList.classList.add('ptop');
        listItem.textContent = userInput.value + ' ';
        list.appendChild(listItem);
        userInput.value = '';
    } else {
        return false;
    }
}

function returnOddItems() {
    oddResults.textContent = '';
    yourOdds.style.display = "block";
    oddResults.style.listStyle = "none";
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            listItem = document.createElement('li');
            listItem.textContent = (i + 1) + '. ' + arr[i];
            oddResults.appendChild(listItem);
            oddResults.style.listStyle = "none";
        }
    }
    oddResults.style.listStyle = "none";
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

/* Gives the user the option to press ctrl + z instead of clicking oddItems */
userInput.addEventListener("keyup", function(event) {
    if (event.ctrlKey && event.key === "z") {
      event.preventDefault();
      oddItems.click();
    }
});

/* Gives the user the option to press ctrl + x instead of clicking Reset */
userInput.addEventListener("keyup", function(event) {
    if (event.ctrlKey && event.key === "x") {
      event.preventDefault();
      reset.click();
    }
});