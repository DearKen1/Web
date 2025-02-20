$(function () {

    $(".rateYo").rateYo ({
      rating: 4.5,
      starWidth: "36px",
    });

    var mixer = mixitup(".blog__content")
    $('.blog__title--text').on('click', function() {
      $('.blog__title--text').removeClass('blog__title--text--active')
      $(this).addClass('blog__title--text--active')
    });

    $('.review__items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    prevArrow: $('.team__slider-prev'),
    nextArrow: $('.team__slider-next'),
    appendDots: $('.review__bottom--lines')
    });

});
