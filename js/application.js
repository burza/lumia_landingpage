$(document).ready(function() {

  FastClick.attach(document.body);

  $('.slider-btn').fadeIn();

  $('.lumia-top-navbar > a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#lumia-device-infos").offset().top - $('.lumia-top-navbar').outerHeight()
    }, 2000);
  });



  if (Modernizr.csstransforms) {
    var elem = document.getElementById('slider');
    window.mySwipe = Swipe(elem, {
      continuous: true
    });

    $('#slider').prepend('<a href="javascript:;" class="slider-btn prev"></a>');
    $('#slider').prepend('<a href="javascript:;" class="slider-btn next"></a>');

    $('.slider-btn.next').click(function() {
      mySwipe.next();
    });
    $('.slider-btn.prev').click(function() {
      mySwipe.prev();
    });
  }

  $('.lumia-device-info-category-title').click(function(e) {

    $('.lumia-device-info-category-title').removeClass('active');
    $('.lumia-device-info-category-content').slideUp('normal');


    if ($(this).next().is(':hidden')) {
      $(this).addClass('active');
      $(this).next().slideDown('normal');
    }

  });

  $('.lumia-device-info-category-content').hide();


});
