/********** DOM elements  **************/

//nav
const toggleMenu = document.querySelector('.toggle-menu');
const menuToggle = document.querySelector('.menu-items');
const menuItems = document.querySelectorAll('.menu-item');
//slide
const slides = document.querySelectorAll('.slide');
const slideTitles = document.querySelectorAll('.slide .title');
const slideDescs = document.querySelectorAll('.slide .desc');
const slideNavs = document.querySelectorAll('.slide-nav');

// Nav toggle and animations
toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');

    if(menuToggle.classList.contains('open')) {
        menuItems.forEach((menu, i) => {
            gsap.from(menu, {
                opacity: 0,
                y: 100,
                duration: 0.7,
                delay: i*0.1,
            })
        })
    }

})


// Slide animation
let currentSlide = 0;
const slideTo = index => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })

    slideNavs.forEach(sn => {
        sn.classList.remove('active');
    })

    if(index >= slides.length) {
        index = currentSlide = 0;
    }

    
    slides[index].classList.add('active');
    slideNavs[index].classList.add('active');

    // GSAP Animations
    gsap.from(slideTitles[index], {
        opacity: 0,
        duration: 0.7,
        y: 50,
        delay: 0.2,
    })

    gsap.from(slideDescs[index], {
        opacity: 0,
        duration: 0.7,
        y: 50,
        delay: 0.5,
    })
}

slideNavs.forEach((nav, i) => {
    nav.addEventListener('click', () => {
        slideTo(i);
        currentSlide = i;
    })
})

slideTo(0);
// setInterval(() => {
//     slideTo(++currentSlide);
// }, 10000);
