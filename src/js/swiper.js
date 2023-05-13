(() => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 18,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 18,
            },
        },
    });
})();
