define(function() {
  var detectionScreen = (function() {
    var screenWidth = screen.width
    if(screenWidth < 1918) {
      $('.carousel').css({
        "max-width": "1366px",
        "height": "768px"
      })

      $('#poster img').css({
        "width": "410px"
      })
    }
  })()

  return detectionScreen
})
