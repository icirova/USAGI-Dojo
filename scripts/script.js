const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel__item");
const buttons = document.querySelectorAll(".carousel__button");


let currentIndex = 0;

//automatické přetáčení snímků

function showSlideAuto(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
    
}

function updateButtons() {
    buttons.forEach((button, buttonIndex) => {
        button.classList.remove("carousel__button--active");
        if (buttonIndex === currentIndex) {
            button.classList.add("carousel__button--active");
        }
    });
}

const autoAdvanceInterval = 4000;

setInterval(function() {
    currentIndex++;
    showSlideAuto(currentIndex);
}, autoAdvanceInterval);


//ruční výběr slidů

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("carousel__item--active");
    });

    buttons.forEach((button, buttonIndex) => {
        button.classList.remove("carousel__button--active");
        if (buttonIndex === index) {
            button.classList.add("carousel__button--active");
        }
    });
    carousel.style.transform = `translateX(-${index * 100}%)`;
}


buttons.forEach((button, buttonIndex) => {
    button.addEventListener("click", function () {
        currentIndex = buttonIndex;
        showSlide(currentIndex);
    });
});


 



