$(document).ready(function() {
  var prevScrollpos = $(window).scrollTop();
  $(window).scroll(function (event) {
    var currentScrollPos = $(window).scrollTop();
    if($(window).scrollTop() >= $('.top-header').height()) {
      $('.header-event').removeClass('.top-header'),
      $('.navbar').addClass('customNav'),
      $('.img-menu').addClass('customImg');
      if (prevScrollpos > currentScrollPos) {
        $('.header-event').removeClass('.top-header'),
        $('.navbar').addClass('customNav').css('top',''),
        $('.img-menu').addClass('customImg').css({'display':'', 'transition':'display .3s ease-in-out'});
      }
      else {
        $('.navbar').addClass('customNav').css({'top':'-100px', 'transition':'top .3s ease-in-out'}),
        $('.img-menu').addClass('customImg').css({'display':'none', 'transition':'display .3s ease-in-out'});
      }
    }
    else {
      $('.top-header').css('display','block'),
      $('.navbar').removeClass('customNav'),
      $('.img-menu').removeClass('customImg');
    }
    prevScrollpos = currentScrollPos;
  })
});
