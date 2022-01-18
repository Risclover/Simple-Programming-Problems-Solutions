function helloAliceBob() {
    let name = prompt("Hello! What's your name?");

    if (name === 'Alice' || name === 'Bob') {
        alert(`Hello, ${name}! How are you today?`)
    } else {
        alert(`Hello! How are you today?`)
    }
}

const runProgram = document.getElementById('run');

runProgram.addEventListener('click', helloAliceBob);