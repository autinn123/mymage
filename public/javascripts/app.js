const carouselSlide = document.querySelector('.slide');
const carouselImage = document.querySelectorAll('.slide img')


const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')


let counter = 0;
const size = carouselImage[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})
prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})