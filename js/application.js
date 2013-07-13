$(document).ready(function() {
	$('.lumia-top-navbar').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 750,
    scrollOffset: 0,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',

    begin: function() {
      //I get fired when the animation is starting
      //Hack so you can click other menu items after the initial click
      $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
    },
    
    end: function() {
      //I get fired when the animation is ending
      $('#device-dummy').remove();
    },
    
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
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
  
	$('.lumia-device-info-category-title').click(function() {

		$('.lumia-device-info-category-title').removeClass('active');	  
	 	$('.lumia-device-info-category-content').slideUp('normal');
 
		if($(this).next().is(':hidden')) {		
			$(this).addClass('active');
			$(this).next().slideDown('normal');
		 } 
	  
	 });

   $('.lumia-device-info-category-content').hide();
});