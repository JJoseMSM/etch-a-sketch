const screen = document.querySelector('.screen');

let squares = prompt('what grid do you want?');
function createGrid() {
    if(squares <= 100) {
        for (let i = 0; i < squares; i++) {
            for(let j = 0; j < squares; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                screen.appendChild(cell);
            }
    }
}
}
createGrid()