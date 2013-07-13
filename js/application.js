$(document).ready(function() {  
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
      // continuous: true,
      // disableScroll: true,
      // stopPropagation: true,
      // callback: function(index, element) {},
      // transitionEnd: function(index, element) {}
    });
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