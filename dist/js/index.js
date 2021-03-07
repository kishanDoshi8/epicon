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
// demo section
const videoOverlay = document.querySelector('.video-overlay');
const video =  document.querySelector('video');
const cursor = document.querySelector('.cursor');
const speakers = document.querySelectorAll('.speakers');

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

// Demo section
videoOverlay.addEventListener('mouseover', () => {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.x + 'px';
        cursor.style.top = e.y + 'px';
    })
})

let isPause = false;
cursor.addEventListener('click', () => {
    if(isPause) {
        isPause = false;
        video.play();
        cursor.children[0].remove();
        let child = document.createElement("i");
        child.classList.add("fas");
        child.classList.add("fa-pause");
        cursor.appendChild(child);
    } else {
        isPause = true;
        video.pause();
        cursor.children[0].remove();
        let child = document.createElement("i");
        child.classList.add("fas");
        child.classList.add("fa-play");
        cursor.appendChild(child);
    }
})

speakers.forEach(speaker => {
    speaker.addEventListener('click', () => {
        if(video.muted) {
            turnOnAudio();
        } else {
            turnOffAudio();
        }
    })
})

const turnOnAudio = () => {
    video.muted = false;
    speakers.forEach(speaker => {
        speaker.classList.add('on');
        speaker.classList.remove('off');
    })
}

const turnOffAudio = () => {
    video.muted = true;
    speakers.forEach(speaker => {
        speaker.classList.remove('on');
        speaker.classList.add('off');
    })
}