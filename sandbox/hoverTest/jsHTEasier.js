const squareDiv = document.querySelector('.square');

squareDiv.addEventListener('mouseenter', function (e) {
    document.querySelector('.square').style.backgroundColor = "#25C219";
});

// squareDiv.addEventListener('mouseleave', function (e) {
//     // for testing purpose only
//     // remove the color after mouse leaves, not the spec
//     document.querySelector('.square').style.backgroundColor = '';
// });