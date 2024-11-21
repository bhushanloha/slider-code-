const sliderTrack = document.querySelector('.slider-track');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;
let currentIndex = 0;

// Function to update the image classes
function updateSlider() {
  images.forEach((img, i) => {
    img.classList.remove('active', 'prev', 'next');
  });

  const active = images[currentIndex];
  const prev = images[(currentIndex - 1 + totalImages) % totalImages];
  const next = images[(currentIndex + 1) % totalImages];

  active.classList.add('active');
  prev.classList.add('prev');
  next.classList.add('next');
}

// Move to the next image
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

// Move to the previous image
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Reset auto-slide on button click
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}

// Event listeners for navigation buttons
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Initialize the slider
updateSlider();
