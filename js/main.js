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
    speed: 700,
    prevArrow: $('.team__slider-prev'),
    nextArrow: $('.team__slider-next'),
    appendDots: $('.review__bottom--lines')
    });

    $('.questions__list--top').on('click', function(e) {
      // e.preventDefault();
      // $(this).toggleClass('questions__list--top-active');
      // $(this).closest('.questions__list').find('.questions__list--title').slideToggle();
      e.preventDefault();
      if ($(this).hasClass('questions__list--top-active')) {
        $(this).removeClass('questions__list--top-active')
        $(this).closest('.questions__list').find('.questions__list--title').slideUp();
      } else {
        $('.questions__list--top').removeClass('questions__list--top-active')
        $('.questions__list--title').slideUp()
        $(this).addClass('questions__list--top-active')
        $(this).closest('.questions__list').find('.questions__list--title').slideDown();
      }
  });
});
