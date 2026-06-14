
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