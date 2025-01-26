document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
  });
});

// Business Video Sections carousel
const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;

nextButton.addEventListener('click', () => {
    if (index < carousel.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = carousel.children.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = document.querySelector('.carousel-item').clientWidth + 20; // 20px for margin
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}
