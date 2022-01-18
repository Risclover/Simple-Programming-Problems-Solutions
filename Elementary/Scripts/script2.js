function userName() {
    let name = prompt("Hi there! What's your name?");
    if (name === null || name === '' || name === ' ') {
        alert("Welcome, stranger!");
    } else {
        alert(`Welcome, ${name}!`)
    }
}

const runProgram = document.getElementById('run');

runProgram.addEventListener('click', userName);