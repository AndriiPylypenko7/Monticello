const b1 = document.querySelector(".projects__button1");
const b2 = document.querySelector(".projects__button2");
const proText1 = document.querySelector(".projects__text1");
const proText2 = document.querySelector(".projects__text2");

//Projects
let open = false;
function hide(a, minW, minH, maxW, maxH) {
  if (open) {
    a.style.width = minW + "px";
    a.style.height = minH + "px";
    a.style.overflow = "hidden";
    open = false;
  } else {
    a.style.width = maxW + "px";
    a.style.height = maxH + "px";
    a.style.overflow = "visible";
    open = true;
  }
}
b1.addEventListener("click", function () {
  hide(proText1, 460, 80, 800, 950);
});
b2.addEventListener("click", function () {
  hide(proText2, 460, 80, 800, 950);
});
//News slider
new Swiper(".news__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  speed: 400,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
  },
});
//gallery
const b3 = document.querySelector(".gallery__button");
const galleryWrapper = document.querySelector(".gallery__wrapper");

b3.addEventListener("click", function () {
  hide(galleryWrapper, 1200, 453, 1200, 1360);
});
//Page slider

const bullet1 = document.querySelector(".bullet1");
const bullet2 = document.querySelector(".bullet2");
const bullet3 = document.querySelector(".bullet3");
const bullet4 = document.querySelector(".bullet4");
const bullet5 = document.querySelector(".bullet5");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");
const link1 = document.getElementById("nav__link1");
const link2 = document.getElementById("nav__link2");
const link3 = document.getElementById("nav__link3");
const link4 = document.getElementById("nav__link4");
const link5 = document.getElementById("nav__link5");
const arrow = document.querySelector(".header__arrow");
const header = document.getElementById("header-section");
const projects = document.getElementById("projects-section");
const gallery = document.getElementById("gallery-section");
const news = document.getElementById("news-section");
const footer = document.getElementById("footer-section");

document.addEventListener("click", (event) => {
  if (event.target == bullet1 || event.target == link1) {
    bullet1.classList.add("active");
    bullet2.classList.remove("active");
    bullet3.classList.remove("active");
    bullet4.classList.remove("active");
    bullet5.classList.remove("active");
    circle1.classList.add("active");
    circle2.classList.remove("active");
    circle3.classList.remove("active");
    circle4.classList.remove("active");
    circle5.classList.remove("active");
    header.scrollIntoView({ block: "center" });
  } else if (
    event.target == bullet2 ||
    event.target == link2 ||
    event.target == arrow
  ) {
    bullet1.classList.remove("active");
    bullet2.classList.add("active");
    bullet3.classList.remove("active");
    bullet4.classList.remove("active");
    bullet5.classList.remove("active");
    circle1.classList.remove("active");
    circle2.classList.add("active");
    circle3.classList.remove("active");
    circle4.classList.remove("active");
    circle5.classList.remove("active");
    projects.scrollIntoView({ block: "center" });
  } else if (event.target == bullet3 || event.target == link3) {
    bullet1.classList.remove("active");
    bullet2.classList.remove("active");
    bullet3.classList.add("active");
    bullet4.classList.remove("active");
    bullet5.classList.remove("active");
    circle1.classList.remove("active");
    circle2.classList.remove("active");
    circle3.classList.add("active");
    circle4.classList.remove("active");
    circle5.classList.remove("active");
    news.scrollIntoView({ block: "center" });
  } else if (event.target == bullet4 || event.target == link4) {
    bullet1.classList.remove("active");
    bullet2.classList.remove("active");
    bullet3.classList.remove("active");
    bullet4.classList.add("active");
    bullet5.classList.remove("active");
    circle1.classList.remove("active");
    circle2.classList.remove("active");
    circle3.classList.remove("active");
    circle4.classList.add("active");
    circle5.classList.remove("active");
    gallery.scrollIntoView({ block: "center" });
  } else if (event.target == bullet5 || event.target == link5) {
    bullet1.classList.remove("active");
    bullet2.classList.remove("active");
    bullet3.classList.remove("active");
    bullet4.classList.remove("active");
    bullet5.classList.add("active");
    circle1.classList.remove("active");
    circle2.classList.remove("active");
    circle3.classList.remove("active");
    circle4.classList.remove("active");
    circle5.classList.add("active");
    footer.scrollIntoView({ block: "center" });
  }
});
