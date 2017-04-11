function productCartCarousel() {
  $('.product-gallery-lead').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    infinite: false,
    asNavFor: '.product-gallery-thumbs'
  });
  $('.product-gallery-thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-gallery-lead',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    swipeToSlide: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6
        }
      }, 
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });
}
productCartCarousel();