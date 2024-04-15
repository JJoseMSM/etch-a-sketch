const container = document.querySelector('.container-screen');
const squaresBtn = document.querySelector('squaresBtn');

for (let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseover',
    e => e.target.classList.add('my-color-class'));
    }
}
