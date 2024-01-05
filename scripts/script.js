const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel__item");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

}

if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
        currentIndex++;
        showSlide(currentIndex);
    });

    prevButton.addEventListener("click", () => {
        currentIndex--;
        showSlide(currentIndex);
    });
}

 const autoAdvanceInterval = 3000;

setInterval(function() {
    currentIndex++;
    showSlide(currentIndex);
}, autoAdvanceInterval);



