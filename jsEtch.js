const squaresPerRow = 16;
function createRow(numSquares) {
    //draw one row with x squares

    // use querySelector to select the parent div 
    const gridContainer = document.querySelector('.divContainer');

    //create a new row container
    const newRow = document.createElement('div');

    function addSquaresToRow(parentDiv) {
        //create X number squares & append to parent div
        for (let i = 1; i <= squaresPerRow; i++) {
            const squareDiv = document.createElement('div');
            
            //add static styles to square
            squareDiv.classList.add('square');

            //append squares to row div
            parentDiv.appendChild(squareDiv);
        }
    }

    addSquaresToRow(newRow);

    //add CSS styles for row
    newRow.classList.add('row');

    //append the new row div to the parent div
    gridContainer.appendChild(newRow);
}

function drawSquareGrid() {
    for (let i = 1; i<= squaresPerRow; i++) {
        createRow(squaresPerRow);
    }
}

drawSquareGrid();