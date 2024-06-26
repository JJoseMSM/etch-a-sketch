const grid = document.querySelector('.grid');


function createGrid() {

  let size = prompt('How many grids do you want?');
  if(size <= 100) {
  // Use a nested for loop to create the grid cells
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
      })
    }
  }
} else {
  alert("Can't create a grid above a 100 digits")
}
}
   createGrid();