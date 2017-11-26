;(function($){
	"use strict";
	$(function(){
		$('.ba-slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			centerMargin: '10px',
			arrows: false
		});
	});
	$(function(){
		$('.ba-slider__test').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false
		});
	});
})(jQuery);
