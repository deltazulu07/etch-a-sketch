function drawDivs() {
    // use querySelector to select the parent div 
    const parentDiv = document.querySelector('.divContainer');

    // create a new div element & add CSS class to it
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');

    // append the new div to the parent div
    parentDiv.appendChild(squareDiv);

}

drawDivs();