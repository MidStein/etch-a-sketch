const container = document.querySelector('.container');
let row;
let columnBox;
for (let i = 0; i < 16; i++) {
    row = document.createElement('div');
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        columnBox = document.createElement('div');
        row.appendChild(columnBox);
    }
}