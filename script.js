// NAV ON SCROLL
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    $(".nav").addClass("linkScroll");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
    $(".nav").removeClass("linkScroll");
  }
});

// NAV TOGGLE
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
  $(".nav").toggleClass("navScroll");
});

// SLICK CAROUSEL
$(".slider-nav").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      // settings: "unslick"
    },
  ],
});
$(".next").click(function () {
  $(".slider").slick("slickNext");
});

$(".prev").click(function () {
  $(".slider").slick("slickPrev");
});
