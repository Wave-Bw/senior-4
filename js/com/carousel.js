define(function() {
  var Carousel = function ($ct) {
    this.$ct = $ct
    this.init()
    this.bind()
    this.setBullet()
    this.autoPlay()
  }

  Carousel.prototype.init = function () {
    var $imgCt = this.$imgCt = this.$ct.find('.img-ct'),
      $preBtn = this.$preBtn = this.$ct.find('.btn-pre'),
      $nextBtn = this.$nextBtn = this.$ct.find('.btn-next'),
      $bullet = this.$bullet = this.$ct.find('.bullet > li')

    $firstImg = this.$firstImg = $imgCt.find('li').first()
    $lastImg = this.$lastImg = $imgCt.find('li').last()

    this.curPageIndex = 0
    this.imgLength = $imgCt.children().length

    this.isAnimate = false

    $imgCt.prepend($lastImg.clone())
    $imgCt.append($firstImg.clone())

    $imgCt.width($firstImg.width() * $imgCt.children().length)
    $imgCt.css({
      'left': -$firstImg.width()
    })

  }

  Carousel.prototype.bind = function () {
    var _this = this

    this.$preBtn.on('click', function (e) {
      e.preventDefault()
      _this.playPre(1)
    })

    this.$nextBtn.on('click', function (e) {
      e.preventDefault()
      _this.playNext(1)
    })
  }

  Carousel.prototype.playPre = function (num) {
    var _this = this
    if (this.isAnimate) {
      return
    }
    this.isAnimate = true
    this.$imgCt.animate({
      left: '+=' + num * $firstImg.width()
    }, function () {
      _this.curPageIndex -= num
      if (_this.curPageIndex < 0) {
        _this.$imgCt.css('left', -(_this.imgLength * _this.$firstImg.width()));
        _this.curPageIndex = _this.imgLength - 1
      }
      _this.isAnimate = false
      _this.setBullet()
    })
  }

  Carousel.prototype.playNext = function (num) {
    var _this = this
    if (this.isAnimate) {
      return
    }
    this.isAnimate = true
    this.$imgCt.animate({
      left: '-=' + num * $firstImg.width()
    }, function () {
      _this.curPageIndex += num
      if (_this.curPageIndex === _this.imgLength) {
        _this.$imgCt.css({
          'left': -$firstImg.width()
        })
        _this.curPageIndex = 0
      }
      _this.isAnimate = false
      _this.setBullet()
    })
  }

  Carousel.prototype.setBullet = function () {
    var _this = this

    _this.$bullet.removeClass('active')
      .eq(_this.curPageIndex)
      .addClass('active')

    _this.$bullet.on('click', function () {
      var index = $(this).index()
      if (index > _this.curPageIndex) {
        _this.playNext(index - _this.curPageIndex)
      } else if (index < _this.curPageIndex) {
        _this.playPre(_this.curPageIndex - index)
      }
    })
  }

  Carousel.prototype.autoPlay = function () {
    let _this = this
    setInv = setInterval(function () {
      _this.playNext(1)
    }, 5000)
  }
  return Carousel
})