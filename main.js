import './assets/scss/all.scss';

console.log("Hello world!");


// swiper
const swiper = new Swiper(".swiper", {
    // slide 間距
    spaceBetween: 24,
    slidesPerView: 3,
    // Scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",

        //需增加 draggable 可拉動下方滾動條
        draggable: true
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true
});
