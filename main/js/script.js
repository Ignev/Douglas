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
  autoplay: true,
  prevArrow: ".slider__pre",
  nextArrow: ".slider__next",
  dots: true
});
plus.addEventListener('click', () => {
    plus__media.style.transform = "rotate(90deg)";
    popup.style.display = "flex";
})
btn.addEventListener('click', () => {
    popup.style.display = "none";
})