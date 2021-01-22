
var carouselItems = document.querySelectorAll('#indexCarousel .carouselItem');
var currentCarouselItem = 0; 
var carouselInterval = setInterval(nextCarousel, 5000); 
var dots = document.querySelectorAll('.dotItem');

function nextCarousel() {
    carouselItems[currentCarouselItem].className = 'carouselItem'; 
    dots[currentCarouselItem].className = 'dotItem';
    currentCarouselItem = (currentCarouselItem + 1) % carouselItems.length; 
    carouselItems[currentCarouselItem].className = 'carouselItem imageDemonstration';
    dots[currentCarouselItem].className = 'dotItem dotDemonstration';
}



function navigateToCarouselItemWithIndex(index) {
    carouselItems[currentCarouselItem].className = 'carouselItem';
    dots[currentCarouselItem].className = 'dotItem';
    currentCarouselItem = index;
    carouselItems[currentCarouselItem].className = 'carouselItem imageDemonstration';
    dots[currentCarouselItem].className = 'dotItem dotDemonstration';
}

function makeOnClickHandler(index) {
    return function () {
        navigateToCarouselItemWithIndex(index);
    }
}

window.onload = function () {
    var buttons = document.getElementsByClassName("dotsCarouselContainer")[0].getElementsByTagName("div");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = makeOnClickHandler(i);
    }
}