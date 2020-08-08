const canvas = document.getElementsByTagName('BODY')[0];
console.log(canvas);

function createGrid() {
    // for (let rowNum = 0; rowNum < 16; rowNum++){
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        console.log(gridRow);

        // gridRow.id = `grid-row-${rowNum}`;
        
        // for (let colNum = 0; colNum < 16; colNum++) {
        //     const gridColumn = document.createElement('div');
        //     gridColumn.className = 'grid-square';
        //     gridColumn.id = `grid-${rowNum}-${colNum}`);

        //     gridRow.appendChild(gridColumn);            
        // }
        canvas.appendChild(gridRow);
    // }
}

createGrid();