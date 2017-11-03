$(document).ready(function () {

  $(window).on('load scroll', function () {
    var scrolled = $(this).scrollTop();
    $('#headerVideo').css('transform', 'translate3d(0, ' + (scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
  });

  // $("body").niceScroll({
  //   scrollspeed: 100,
  //   zindex:-1,
  //   touchbehavior: true,
  //   emulatetouch: true
  // });
});
