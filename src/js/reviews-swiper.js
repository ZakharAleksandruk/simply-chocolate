(() => {
    var swiper = new Swiper(".reviewsSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".reviews-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 28,
            },
        },
    });
})();
