
const s=document.querySelectorAll('.hero-slider img');
let i=0;
setInterval(()=>{s[i].classList.remove('active');i=(i+1)%s.length;s[i].classList.add('active');},4000);
const c=document.querySelector('.carousel');
document.querySelector('.next').onclick=()=>c.scrollBy({left:900,behavior:'smooth'});
document.querySelector('.prev').onclick=()=>c.scrollBy({left:-900,behavior:'smooth'});

document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.getElementById("carousel");
    const slides = document.querySelectorAll(".project-card");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
        index++;
        if (index >= slides.length) index = 0;
        updateCarousel();
    });

    prev.addEventListener("click", () => {
        index--;
        if (index < 0) index = slides.length - 1;
        updateCarousel();
    });

    // AUTO SLIDE
    setInterval(() => {
        index++;
        if (index >= slides.length) index = 0;
        updateCarousel();
    }, 7000);

});
const videoCarousel = document.querySelector(".video-carousel");
const videoCards = document.querySelectorAll(".video-card");
const videoNext = document.querySelector(".video-next");
const videoPrev = document.querySelector(".video-prev");

let videoIndex = 0;

function updateVideoSlider() {
    videoCarousel.style.transform =
        `translateX(-${videoIndex * 100}%)`;
}

videoNext.addEventListener("click", () => {
    videoIndex = (videoIndex + 1) % videoCards.length;
    updateVideoSlider();
});

videoPrev.addEventListener("click", () => {
    videoIndex =
        (videoIndex - 1 + videoCards.length) %
        videoCards.length;
    updateVideoSlider();
});
const biogasCarousel = document.querySelector(".biogas-carousel");
const biogasCards = document.querySelectorAll(".biogas-card");

const biogasPrev = document.querySelector(".biogas-prev");
const biogasNext = document.querySelector(".biogas-next");

let biogasIndex = 0;

biogasNext.addEventListener("click", () => {
    biogasIndex++;

    if (biogasIndex >= biogasCards.length) {
        biogasIndex = 0;
    }

    biogasCarousel.style.transform =
        `translateX(-${biogasIndex * 100}%)`;
});

biogasPrev.addEventListener("click", () => {
    biogasIndex--;

    if (biogasIndex < 0) {
        biogasIndex = biogasCards.length - 1;
    }

    biogasCarousel.style.transform =
        `translateX(-${biogasIndex * 100}%)`;
});