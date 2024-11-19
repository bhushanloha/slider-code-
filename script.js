let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".slides");
const maxVisibleSlides = 5; // Number of visible slides

// Clone slides for seamless looping
const clonedSlidesStart = [...slides].slice(0, maxVisibleSlides).map((slide) => slide.cloneNode(true));
const clonedSlidesEnd = [...slides].slice(-maxVisibleSlides).map((slide) => slide.cloneNode(true));

// Append clones to the start and end of the container
clonedSlidesStart.forEach((clone) => slidesContainer.appendChild(clone));
clonedSlidesEnd.forEach((clone) => slidesContainer.insertBefore(clone, slidesContainer.firstChild));

// Adjust the container width to account for the cloned slides
slidesContainer.style.width = `${(totalSlides + 2 * maxVisibleSlides) * (100 / maxVisibleSlides)}%`;

// Offset the slider to start at the original first slide
slidesContainer.style.transform = `translateX(${-maxVisibleSlides * (100 / maxVisibleSlides)}%)`;
currentIndex = maxVisibleSlides;

// Function to display slides
function showSlide(index) {
    const offset = -index * (100 / maxVisibleSlides);
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(${offset}%)`;

    // Adjust for seamless looping
    setTimeout(() => {
        if (index >= totalSlides + maxVisibleSlides) {
            currentIndex = maxVisibleSlides;
            slidesContainer.style.transition = "none"; // Disable animation
            slidesContainer.style.transform = `translateX(${-currentIndex * (100 / maxVisibleSlides)}%)`;
        } else if (index < maxVisibleSlides) {
            currentIndex = totalSlides + maxVisibleSlides - maxVisibleSlides;
            slidesContainer.style.transition = "none"; // Disable animation
            slidesContainer.style.transform = `translateX(${-currentIndex * (100 / maxVisibleSlides)}%)`;
        }
    }, 500); // Match the duration of the CSS transition
}

// Function to move slides
function moveSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
}

// Autoplay slider every 3 seconds
let autoplay = setInterval(() => {
    moveSlide(1);
}, 3000);

// Pause autoplay on hover
document.querySelector(".slider-container").addEventListener("mouseenter", () => {
    clearInterval(autoplay);
});

document.querySelector(".slider-container").addEventListener("mouseleave", () => {
    autoplay = setInterval(() => {
        moveSlide(1);
    }, 3000);
});

// let currentIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;
// const slidesContainer = document.querySelector(".slides");

// const maxVisibleSlides = 5; // Number of visible slides

// // Function to display slides
// function showSlide(index) {
//     // Prevent sliding into empty spaces
//     if (index > totalSlides - maxVisibleSlides) {
//         currentIndex = totalSlides - maxVisibleSlides; // Stop at the last full set
//     } else if (index < 0) {
//         currentIndex = 0; // Stop at the first set
//     } else {
//         currentIndex = index;
//     }

//     // Calculate and apply the offset
//     const offset = -currentIndex * (100 / maxVisibleSlides);
//     slidesContainer.style.transform = `translateX(${offset}%)`;
// }

// // Function to move slides manually
// function moveSlide(direction) {
//     showSlide(currentIndex + direction);
// }

// // Autoplay slider every 3 seconds
// let autoplay = setInterval(() => {
//     moveSlide(1);
// }, 3000);

// // Pause autoplay on hover
// document.querySelector(".slider-container").addEventListener("mouseenter", () => {
//     clearInterval(autoplay);
// });

// document.querySelector(".slider-container").addEventListener("mouseleave", () => {
//     autoplay = setInterval(() => {
//         moveSlide(1);
//     }, 3000);
// });
