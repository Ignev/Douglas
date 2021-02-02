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
let deg1 = 0;
let deg2 = 0;
let deg3 = 0;

plus1.addEventListener('click', () => {
    deg1 += 90;
    plus__media1.style.transform = `rotate(${deg1}deg)`;
    popup.classList.remove("popup-anime-off");
    setTimeout(() => {
        popup.style.display = "flex";
        popup.classList.add("popup-anime-on");
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
    popup.classList.remove("popup-anime-on");
    popup.classList.add("popup-anime-off");
    setTimeout(() => {
        popup.style.display = "none";
    }, 500)
    
})
const firstItems = document.querySelector(".animation__first");
const secondItems = document.querySelector(".animation__second");
const thirdItems = document.querySelector(".animation__third");
    
setTimeout(()=>{
    animationBlock.style.display = "none";
}, 5200)