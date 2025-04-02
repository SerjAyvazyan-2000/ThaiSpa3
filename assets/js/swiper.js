

const massagesSwiper = new Swiper('.massages-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,

    pagination: {
        el: '.massages-pagination',
        clickable: true,

    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.2},
        779: {slidesPerView: 1.5},
        954: {slidesPerView: 2},
        1200: {slidesPerView: 2},
        1315: {slidesPerView: 3},

    }


});


const programsSwiper = new Swiper('.programs-swiper', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {slidesPerView: 1,},
        540: {slidesPerView: 1,},
        576: {slidesPerView: 1.2},
        779: {slidesPerView: 1.5},
        954: {slidesPerView: 2},
        1200: {slidesPerView: 2},
        1315: {slidesPerView: 3},

    }


});

const aboutSwiper = new Swiper('.about-us-swiper', {
    loop: true,
    slidesPerView:5,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {slidesPerView: 2,},
        540: {slidesPerView: 2,},
        576: {slidesPerView: 2.5},
        779: {slidesPerView: 3},
        954: {slidesPerView: 3.5},
        1200: {slidesPerView: 4},
        1315: {slidesPerView: 5},

    }



});