const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;
const imagesPerSlide = 3; // show 3 images at a time
const totalSlides = images.length - imagesPerSlide + 1;

// Only select the buttons outside the carousel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

nextButton.addEventListener('click', () => {
  index++;
  if(index >= totalSlides) index = 0;
  slides.style.transform = `translateX(-${index * (100 / imagesPerSlide)}%)`;
});

prevButton.addEventListener('click', () => {
  index--;
  if(index < 0) index = totalSlides - 1;
  slides.style.transform = `translateX(-${index * (100 / imagesPerSlide)}%)`;
});
