const swiper = new Swiper(".swiper", {
  slidesPerVew: 1,
  spaceBetween: 200,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
