let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function changeSlide() {
    currentIndex++;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeSlide, 8000);

function scrollToContact(event) {
    event.preventDefault();

    const contactSection = document.getElementById('kontakt');
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
}