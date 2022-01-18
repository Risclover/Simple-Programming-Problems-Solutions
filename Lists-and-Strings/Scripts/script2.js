const submit = document.getElementById('submit');
const list = document.getElementById('listresults');
const reverse = document.getElementById('reverse');
const reset = document.getElementById('reset');
const yourList = document.getElementById('yourlist');
let listItem;
let arr1 = [];

submit.addEventListener('click', arrayInput);
reverse.addEventListener('click', reverseList);
reset.addEventListener('click', resetProgram);

function arrayInput() {
    yourList.innerHTML = "<strong>Your list:</strong>";
    const userInput = document.getElementById('userinput');
    if (userInput.value != '' && userInput.value != ' ') {
        arr1.push(userInput.value);
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

function reverseList() {
    list.innerHTML = '';
    yourList.innerHTML = "<strong>Your list:</strong>";
    arr1.reverse();
    for (let i = 0; i < arr1.length; i++) {
        listItem = document.createElement('li');
        listItem.textContent = arr1[i];
        list.appendChild(listItem);
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
      reverse.click();
    }
});

/* Gives the user the option to press ctrl + x instead of clicking Reset */
document.addEventListener("keyup", function(event) {
    if (event.ctrlKey && event.key === "x") {
      event.preventDefault();
      reset.click();
    }
});