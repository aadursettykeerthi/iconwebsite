const menuOpenButton =document.querySelector("#menu-open-button");
const menuCloseButton =document.querySelector("#menu-close-button");
const navLink =document.querySelectorAll(".nav-menu .nav-link");



menuOpenButton.addEventListener("click" ,()=>{
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click" , () => menuOpenButton.click());

//closing menu whenn the nav link iscliked

navLink.forEach(link => {
    link.addEventListener("click",()=> menuOpenButton.click())
})

//initializing swiper
const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    spaceBetween:25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive break points
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

  //initializing swiper
const sp = new Swiper('.hero-section .slider-wrapper', {

    loop: true,
    spaceBetween:25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive break points
    breakpoints:{
        0:{
            slidesPerView: 1
        }
    }
  });