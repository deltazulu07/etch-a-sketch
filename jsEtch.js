let squaresPerRow = 16;

/* Set up grid */
function setUpAllRows() {
    function setUpOneRow(numSquares) {
        //draw one row with x squares
    
        // use querySelector to select the parent div 
        const gridContainer = document.querySelector('.gridContainer');
    
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
    
                // hoverEffect(squareDiv);
            }
        }
    
        addSquaresToRow(newRow);
    
        //add CSS styles for row
        newRow.classList.add('row');
    
        //append the new row div to the parent div
        gridContainer.appendChild(newRow);
    }
    // create x rows
    for (let i = 1; i<= squaresPerRow; i++) {
        setUpOneRow(squaresPerRow);
    }
}

/* Change canvas size by slider */
function canvasSizeUserInput() {
    const input = document.querySelector('#slider');
    const output = document.querySelector('#value');
    sliderLabel(input, output);

    input.addEventListener("input", function(e) {
        sliderLabel(input, output);
        removeExistingGrid();
        squaresPerRow = input.value;
        setUpAllRows();
    })

    function sliderLabel(input, output) {
        output.textContent = input.value + ' x ' + input.value;
    }

    function removeExistingGrid () {
        const gridContainer = document.querySelector('.gridContainer');
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }
}

/* Clear canvas button */
function clearCanvas() {
    const clearBtn = document.querySelector('#clearCanvas');
    clearBtn.addEventListener('click', removeBkgColor);

    function removeBkgColor() {
        //remove background color of all elements within a parent
        const parent = document.querySelector('.gridContainer');
        const allDescendants = parent.querySelectorAll('*');

        for (let i = 0; i <allDescendants.length; i++) {
            const descendant = allDescendants[i];
            if (descendant.style.backgroundColor) {
                descendant.style.backgroundColor = '';
            }
        }
    }
}

/* Eraser button */

//select the 'eraser' button
// (optional) event listener for 'click', mouse turns into an eraser icon within gridContainer's confines
//         - use a custom icon for eraser
//click on a square, remove the backgroundColor
// need to make sure the 'hover effect' is no longer on. otherwise, it'll continue to draw purple divs


const eraseBtn = document.querySelector('#btnEraser');
eraseBtn.addEventListener('click', function(e) {
    const grid = document.querySelector('.gridContainer');
    grid.classList.add('eraseIcon');
})


/* Chnge pen color */ 
//NOT WORKING. GET ONE COLOR TO WORK FIRST
function penColor(elementId) {
    let penColor = '';
    const colorBtn = document.querySelector(elementId);
    colorBtn.addEventListener('click', function() {
        if (elementId === '#btnPurple') {
            penColor = '#862494';
            // console.log('pen color is ' + penColor);
        } 
        else if (elementId === '#btnRainbow') {
            penColor = '#249478';
            console.log('pen color is ' + penColor);

        }
        else if (elementId === '#btnColorPicker') {
            penColor = '#909424';
            console.log('pen color is ' + penColor);

        }
        else {
            penColor = '';
        }
    })
}

penColor('#btnPurple');
penColor('#btnRainbow');
penColor('#btnColorPicker');

/* hover effect */
function hoverEffect(element) {
    //removed hoverEffect from setting up the grid. hoevereffect() should only be active when a color button is clicked
     
    element.addEventListener('mouseenter', function (e) {
        element.style.backgroundColor = mouseColor;
    });
}


setUpAllRows();
canvasSizeUserInput();
clearCanvas();
