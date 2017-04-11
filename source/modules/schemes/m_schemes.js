function schemeCarousel() {
  $('.schemes-carousel').slick({
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }, 
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}
schemeCarousel();