
define(function () {
  var goTop = (function GoTop() {
    function _goTop($ct) {
      this.$ct = $ct
      this.bind()
    }

    _goTop.prototype = {
      bind: function () {
        var _this = this

        $(window).on('scroll', function () {
          var scrollTop = $(this).scrollTop()

          if (scrollTop > 600) {
            _this.$ct.css({
              display: "block"
            })
          } else if (scrollTop <= 550) {
            _this.$ct.css({
              display: "none"
            })
          }
        })

        _this.$ct.on('click', function () {
          $('body').animate({scrollTop: "0px"}, 1500)
        })
      }
    }

    return {
      go: function ($node) {
        new _goTop($node);
      }
    }
  })()
  return goTop
})

