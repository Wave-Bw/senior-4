define(['jquery', 'com/detectionScreen', 'com/carousel', 'com/goTop'],
  function($, dSc, Carousel, goTop){
    new Carousel($('#header .carousel'))

    goTop.go($('.go-top'))
  })


