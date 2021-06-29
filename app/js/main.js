$(function () {
  $(".hero__left-slider").slick({
    arrows: false,
    fade: true,
    cssEase: "linear",
    draggable: false,
    swipe: false,
  });
});

var $slider = $(".hero__right-slider");
if ($slider.length) {
  var currentSlide;
  var sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    $(sliderCounter).text("0" + currentSlide);
  };

  $slider.on("init", function (event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    slidesToShow: 3,
    asNavFor: ".hero__left-slider",
    variableWidth: true,
    speed: 1000,
  });
}

$(".hero__right-slider .slick-prev").on("click", function () {
  $(".bg__slider, .slick-prev").click();
});
$(".hero__right-slider .slick-next").on("click", function () {
  $(".bg__slider, .slick-next").click();
});


$(".bg__slider").slick({
  arrows: true,
  draggable: false,
    speed: 1000,
    swipe: false,
});

$(".tourism__slider").slick({
  slidesToShow: 5,
  infinite: true,
  variableWidth: true,
});

$('.nomad__slider').slick({
  slidesToShow: 3,
});

$(document).ready(function() {
  $('.fancybox').fancybox();
});

$('[data-fancybox]').fancybox({
  youtube : {
      controls : 0,
      showinfo : 0
  }
});
