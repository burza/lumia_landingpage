
$(document).ready(function() {  


  calculate_slider_button_position();

  $('.slider-btn').fadeIn();    
  
  function calculate_slider_button_position() {
    var elem = $(".swipe-wrap > div > img");
    var top_offset = elem.offset().top;
    var slider_btn = $('.slider-btn');
    var pos = (elem.height() / 2) + top_offset - (slider_btn.height() / 2);

    $('.slider-btn').css('top', pos + 'px');
  }

  $(window).resize(calculate_slider_button_position);
  
  $('.lumia-top-navbar > a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
    	scrollTop: $("#lumia-device-infos").offset().top
    }, 2000);    
  });

  

  if ( Modernizr.csstransforms ) {
    var elem = document.getElementById('slider');
    window.mySwipe = Swipe(elem, {
      // startSlide: 4,
      // auto: 3000,
      continuous: true
      // disableScroll: true,
      // stopPropagation: true,
      // callback: function(index, element) {},
      // transitionEnd: function(index, element) {}
    });
    $('.slider-btn.next').click(function() { mySwipe.next(); });
    $('.slider-btn.prev').click(function() { mySwipe.prev(); });
  }
  
	$('.lumia-device-info-category-title').click(function(e) {

		$('.lumia-device-info-category-title').removeClass('active');	  
	 	$('.lumia-device-info-category-content').slideUp('normal');

 
		if($(this).next().is(':hidden')) {		
			$(this).addClass('active');
			$(this).next().slideDown('normal');      
		} 
	  
  });

  $('.lumia-device-info-category-content').hide();


});
