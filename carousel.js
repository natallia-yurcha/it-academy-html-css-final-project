
var carousels = document.querySelectorAll('#carousels .carousel'); /*получаем все слайды из контейнера*/
var currentCarousel = 0; /*создаем переменную для текущего слайда*/
var carouselInterval = setInterval(nextCarousel, 4000); /*Интервал между картинками */

function nextCarousel() {
    carousels[currentCarousel].className = 'carousel'; /*меняем класс для текущего слайда, чтобы спрятать его*/
    currentCarousel = (currentCarousel + 1) % carousels.length; /*добавляем класс к текущему слайду. Мы используем оператор % на случай, если это был последний слайд, чтобы вернуться к первому*/
    carousels[currentCarousel].className = 'carousel demonstration'; /*После получения индекса слайда мы меняем класс и показываем новый*/
}