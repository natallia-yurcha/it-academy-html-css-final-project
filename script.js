
var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel = 0;
var carouselInterval = setInterval(nextCarousel,4000); /* Интервал между картинками */

function nextCarousel(){
carousels[currentCarousel].className = 'carousel';
currentCarousel = (currentCarousel+1)%carousels.length;
carousels[currentCarousel].className = 'carousel demonstration';
}

