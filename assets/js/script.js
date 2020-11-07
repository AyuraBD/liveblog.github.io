// owl-carousel
// home
$(document).ready(function(){
  $("#home .owl-carousel").owlCarousel({
	  items:1,
		nav:true,
		dots:false,
  });
});
// owl-carousel
//project
$(document).ready(function(){
  $("#project .owl-carousel").owlCarousel({
	  items:3,
	  nav:true,
		dots:false,
		margin:20,
  });
});
// blog
$(document).ready(function(){
  $("#blog .owl-carousel").owlCarousel({
	  items:2,
	  nav:true,
		dots:false,
  });
});
// client
$(document).ready(function(){
  $("#client .owl-carousel").owlCarousel({
	  items:1,
	  loop:true,
	  autoplay:false,
	  autoplayTimeout:2200,
	  autoplaySpeed:1000,
  });
});
// accordion
$(document).ready(function(){
	$( "#accordion" ).accordion();
});
// project
$(document).ready(function(){
	$('.test-popup-link').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
});
// mixitup


    
