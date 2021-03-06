/********** DOM elements  **************/

//nav
const toggleMenu = document.querySelector('.toggle-menu');
const menuToggle = document.querySelector('.menu-items');
const menuItems = document.querySelectorAll('.menu-item');

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