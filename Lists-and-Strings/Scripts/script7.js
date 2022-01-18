function genTable() {
    const tablediv = document.getElementById('problem');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    tablediv.appendChild(table);
    let varNew = [];
    let varNext = [];
    let varLast = [];
    let varS = [];
    let trow = document.createElement('tr');
    thead.appendChild(trow);

    for (let i = 0; i < 13; i++) {
        varNew[i] = document.createElement('th');
        trow.appendChild(varNew[i]);
        varNew[i].innerHTML = i;
    }

    for (let j = 1; j < 13; j++) {
        varNext[j] = document.createElement('tr');
        tbody.appendChild(varNext[j]);
        for (let k = 1; k < 2; k++) {
            varLast[k] = document.createElement('td');
            varNext[j].appendChild(varLast[k]);
            varLast[k].innerHTML = j;
            varLast[k].classList.add('trowadd');
        }
        for (let l = 1; l < 13; l++) {
            varS[l] = document.createElement('td');
            varNext[j].appendChild(varS[l]);
            varS[l].innerHTML = j * l;
            if((j === l) && (l % 2 != 0)) {
                varS[l].classList.add('darkColor');
            } else if (j === l) {
                varS[l].classList.add('colored');
        }
    }
    }

}

const runProgram = document.getElementById('run');

runProgram.addEventListener('click', genTable);
