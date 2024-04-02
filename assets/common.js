export default {
  name: 'common',
  subscribeCta: 'Get Email Updates',
  slickOptions: {
    lazyLoad: 'ondemand',
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: false,
    arrows: false,
    speed: 1000,
    responsive: [

      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,

          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,

          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  }
}
