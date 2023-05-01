$(document).ready(function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  }
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
  /************************************ States Counter ************************************/
  if ($(".statistics-sec").length > 0) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".statistics-sec").offset().top - 500
      ) {
        $(".statistic-value strong").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }
});
