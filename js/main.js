$(document).ready(function () {
  /************************************ Mobile Menu ************************************/
  $(".menu-btn").on("click", function (e) {
    $(".header-navbar").fadeToggle(300);
    $(".overlay").fadeToggle(300);
    $(".header-list,.menu-btn").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".overlay").on("click", function (e) {
    $(".header-navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".header-list,.menu-btn").removeClass("active");
    $("body").removeClass("overflow");
  });
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    effect: "fade",
    pagination: {
      el: ".main-slider .custom-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });
});
