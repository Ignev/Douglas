$(".center__slider").slick({
  infinite: true,
  draggable: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  swipeToSlide: true,
  touchThreshold: 100,
  speed: 500,
  pauseOnHover: true,
  autoplaySpeed: 3000,
  arrows: true,
//   autoplay: true,
  prevArrow: ".slider__pre",
  nextArrow: ".slider__next",
  dots: true
});
let deg1 = 0;
let deg2 = 0;
let deg3 = 0;

plus1.addEventListener('click', () => {
    deg1 += 90;
    plus__media1.style.transform = `rotate(${deg1}deg)`;
    setTimeout(() => {
        popup.style.display = "flex";
    }, 500)
})
plus2.addEventListener('click', () => {
    deg2 += 90;
    plus__media2.style.transform = `rotate(${deg2}deg)`;
})
plus3.addEventListener('click', () => {
    deg3 += 90;
    plus__media3.style.transform = `rotate(${deg3}deg)`;
})
btn.addEventListener('click', () => {
    popup.style.display = "none";
})