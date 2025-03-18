const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    direction : 'horizontal',
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});

const swiperHero = new Swiper('.swiperHero', {
    slidesPerView: 1,
    direction : 'horizontal',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoints: {
    //     640: {
    //     slidesPerView: 2,
    //     },
    //     768: {
    //     slidesPerView: 3,
    //     },
    //     1024: {
    //     slidesPerView: 4,
    //     },
    // },
});