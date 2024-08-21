document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.expo-card-wrap');
    const prevButton = document.querySelector('.expo-button-left');
    const nextButton = document.querySelector('.expo-button-right');

    let scrollAmount = 0;
    const cardWidth = document.querySelector('.expo-card').offsetWidth;
    const visibleCards = Math.floor(carousel.parentElement.offsetWidth / cardWidth);

    nextButton.addEventListener('click', () => {
        if (scrollAmount < (carousel.scrollWidth - carousel.clientWidth)) {
            scrollAmount += cardWidth;
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});



