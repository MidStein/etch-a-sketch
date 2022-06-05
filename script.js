function highlightBox() {
    if (this.style.background == '') {
        let RValue = Math.floor(Math.random() * 256);
        let GValue = Math.floor(Math.random() * 256)
        let BValue = Math.floor(Math.random() * 256);
        this.style.background = `rgba(${RValue}, ${GValue}, ${BValue}, 0.1)`;
    } else {
        let currentBackground = this.style.background;
        let beforeA = currentBackground.slice(0, currentBackground.length - 4);
        let onA = currentBackground.slice(currentBackground.length - 4, currentBackground.length - 1);
        if (onA === '1.0') {
            return;
        }
        onA = Number(onA) + 0.1;
        this.style.background = beforeA + onA + ')';
    }
}
function createGrid(n) {
    let row;
    let columnBox;
    for (let i = 0; i < n; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            columnBox = document.createElement('div');
            columnBox.classList.add('column-box');
            columnBox.style.height = `${600/n}px`;
            columnBox.style.width = columnBox.style.height;
            if (i === 0) {
                columnBox.style.borderTop = "2px solid #444";
            }
            if (i === n - 1) {
                columnBox.style.borderBottom = "2px solid #444";
            }
            if (j === 0) {
                columnBox.style.borderLeft = "2px solid #444";
            }
            if (j === n - 1) {
                columnBox.style.borderRight = "2px solid #444";
            }
            columnBox.addEventListener('mouseover', highlightBox);
            row.appendChild(columnBox);
        }
    }
}
const button = document.querySelector('button');
const container = document.querySelector('.container');
let n = 16;
createGrid(16);
button.onclick = () => {
    let userInput = prompt('Enter how many squares per side you want');
    if (userInput <= 100) {
        n = userInput;
        container.replaceChildren();
        createGrid(n);
    } else {
        alert('Maximum allowed sqaures per side are 100');
    }
}