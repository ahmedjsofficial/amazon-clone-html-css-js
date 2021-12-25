const mainSwiper = document.getElementById("swiperHooks");
const swiper = new Swiper(mainSwiper, {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});
