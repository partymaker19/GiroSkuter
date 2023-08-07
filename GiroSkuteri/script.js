// When the user scrolls down 370px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 370 || document.documentElement.scrollTop > 370) {
        document.getElementById("scrolTop").style.display = "block";
    } else {
        document.getElementById("scrolTop").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


let offset = 0;
const BTN_prev = document.querySelector('.arrow-left');
const BTN_next = document.querySelector('.arrow-right');
const sliderLine = document.querySelector('.slider__wrapper');


function movePrev () {
    offset += 25;

    if (offset > 75) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'rem';
}

function moveNext () {
    offset -= 25;

    if (offset < 0) {
        offset = 75;
    }
    sliderLine.style.left = -offset + 'rem';
}

BTN_next.addEventListener('click', movePrev);
BTN_prev.addEventListener('click', moveNext);
