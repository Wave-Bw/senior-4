define(['jquery', 'com/carousel', 'com/goTop'],
  function($, Carousel, goTop){
    new Carousel($('#header .carousel'))

    goTop.go($('.go-top'))
  })


