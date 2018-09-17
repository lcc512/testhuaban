$(function () {

  // 广告切换
  ;(function () {

    function doit() {
      var index = 0

      return function () {
        $('.slideBanner li').css('opacity', '0')

        $($('.slideBanner li')[index]).css('opacity', '1');

        index++

        if (index > 6) {
          index = 0
        }

        // console.log(index)
      }


    }

    var tt = null

    clearInterval(tt)

    // setInterval(doit(), 2000)


  }())

  // 吸顶栏
  ;(function () {
    function gundong() {

      var $xiding = $('.topNav')

      $(window).scroll(function () {

        if ($(document).scrollTop() > 200) {

          $xiding.fadeIn(200)
        }
        else {
          $xiding.fadeOut(200)
        }


      })
    }

    gundong()

  }())


  // 选项卡
  function tab() {
    var dom = $('.tapContent .dom')

    $('.tapTitle ul').delegate('li', 'click', function () {

      $(this).siblings().removeClass('current')
      $(this).addClass('current')

      dom.css('display', 'none')
      dom.eq($(this).index()).css('display', 'block')

    })

  }

  tab()
})