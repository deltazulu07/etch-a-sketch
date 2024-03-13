const canvasLength = 3;

function drawDivs(numPerRow) {
    // function draws divis inside parent container

    // use querySelector to select the parent div 
    const parentDiv = document.querySelector('.divContainer');

    // create a new div element
    const squareDiv = document.createElement('div');

    //add static CSS styles
    squareDiv.classList.add('square');

    //use function to dynamically get the correct width for square
    squareDiv.style.borderWidth = squareWidth(numPerRow);

    // append the new div to the parent div
    parentDiv.appendChild(squareDiv);

}

function squareWidth(numPerRow) {
    // function dynamically update square width

    // get the width and border with of the parent div
    const parent = document.querySelector('.divContainer');
    // get all computed styles for the parent div
    const stylesParent = window.getComputedStyle(parent);

    // get the specific properties of parent div
    const borderWidth = stylesParent.borderWidth;
    const elementWidth = stylesParent.width;

    // get the square div's border width
    const squareDiv = document.querySelector('.square');
    const stylesSquare = window.getComputedStyle(squareDiv);
    const squareBorderWidth = stylesSquare.borderWidth;

    // compute square width
    const widthOfsquare = (elementWidth - borderWidth * 2) / numPerRow - squareBorderWidth * 2;

    return widthOfsquare;

}

// squareWidth(canvasLength);

drawDivs(canvasLength);
drawDivs(canvasLength);
drawDivs(canvasLength);
drawDivs(canvasLength);
drawDivs(canvasLength);
drawDivs(canvasLength);
drawDivs(canvasLength);
drawDivs(canvasLength);
drawDivs(canvasLength);