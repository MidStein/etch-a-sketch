const container = document.querySelector('.container');
let row;
let columnBox;
for (let i = 0; i < 16; i++) {
    row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        columnBox = document.createElement('div');
        columnBox.classList.add('column-box');
        columnBox.style.height = `${600/16}px`;
        columnBox.style.width = columnBox.style.height;
        if (i === 0) {
            columnBox.style.borderTop = "4px solid #444";
        }
        if (i === 15) {
            columnBox.style.borderBottom = "4px solid #444";
        }
        if (j === 0) {
            columnBox.style.borderLeft = "4px solid #444";
        }
        if (j === 15) {
            columnBox.style.borderRight = "4px solid #444";
        }
        row.appendChild(columnBox);
    }
}