document.addEventListener('mousemove', function(e) {
    document.getElementById('mouseX').textContent = e.clientX;
    document.getElementById('mouseY').textContent = e.clientY;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const element = document.getElementById('squareDiv');
    const position = element.getBoundingClientRect();

    if (mouseX >= position.left && mouseX <= position.right && mouseY >= position.top && mouseY <= position.bottom) {
        document.getElementById('mouseIn').textContent = 'Yes';
        document.getElementById('squareDiv').style.backgroundColor = "yellow";
    } else {
        document.getElementById('mouseIn').textContent = 'No';

    }


});

const element = document.getElementById('squareDiv');
const position = element.getBoundingClientRect();

document.getElementById('top').textContent = position.top;
document.getElementById('left').textContent = position.left;
document.getElementById('width').textContent = position.width;
document.getElementById('height').textContent = position.height;
document.getElementById('bottom').textContent = position.bottom;
document.getElementById('right').textContent = position.right;


