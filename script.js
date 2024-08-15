const carousel = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".carousel-control.prev");
const nextButton = document.querySelector(".carousel-control.next");
let currentIndex = 0;

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 1; // 2 slides total (0 and 1)
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < 1 ? currentIndex + 1 : 0;
    updateCarousel();
});


// Hamburger menu

function toggleMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if (sideMenu.style.left === "0px") {
        sideMenu.style.left = "-300px";
        overlay.classList.remove("show");
    } else {
        sideMenu.style.left = "0px";
        overlay.classList.add("show");
    }
}

// Insight carousal

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.insights-carousel #insight-carousal-img');
    const indicator = document.getElementById('insight-indicator');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    let currentImageIndex = 0;

    const updateCarousel = () => {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentImageIndex);
        });
        indicator.textContent = `${currentImageIndex + 1} of ${images.length}`;
    };

    leftArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCarousel();
    });

    updateCarousel();
});

