$(function () {

  //上スクロールでheaderが消える//
  //下スクロールでheaderが出てくる//
  var headerHeight = $('header').outerHeight(),
    startPos = 0;
  $(window).on('load scroll', function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos > startPos && scrollPos > headerHeight) {
      $('header').css('top', '-' + headerHeight + 'px');
    } else {
      $('header').css('top', '0');
    }
    startPos = scrollPos;
  });

  //スクロールで色々出てくる//
  ScrollReveal().reveal('.scroll', {
    duration: '1500',
    reset: 'true'
  });
  ScrollReveal().reveal('.scroll-reft', {
    duration: 1600,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('.scroll-right', {
    duration: 1600,
    origin: 'right',
    distance: '50px',
    reset: true
  });
});
