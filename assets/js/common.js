
/**
 * Main js file
 */

(function( $ ) {
	"use strict";

	// Masonry
	$('.masonry-grid').imagesLoaded().done( function( instance ) {
		$('.masonry-grid').isotope({
			itemSelector: '.new-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.new-item'
			}
		});
	});

	// Preloader
	$( window ).on( "load", function() {
		$('#page-preloader, #page-preloader .spinner').delay(1000).fadeOut();
	});

	// Sticky header
	if ( $('.main-navigation').hasClass('absolute') ) {
		var headHeight = $('.top-bar').innerHeight();
		var stickyPoint = headHeight;
		if ( $(window).width() < 768) {
			var stickyPoint = headHeight-60;
		}
	} else {
		var headHeight = $('.page-header').innerHeight();
		var stickyPoint = headHeight-80;
	}

	$(window).scroll(function(){
		if ($(this).scrollTop() > stickyPoint && $("div").is(".main-navigation__wrap") ) {
			$('.header-sticky').addClass("sticky").removeClass("sticky-off");
			$('body').css('padding-top', headHeight);
		} else {
			$('.header-sticky').removeClass("sticky").addClass("sticky-off");
			$('body').css('padding-top', '0');
		}
		if ( $('.main-navigation').hasClass('active') ) {
			$('#mob-toggle').trigger('click');
		}
	});



	// SCROLL TO TOP
	$('#to-top').click(function(event) {
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	// SEARCH
	$('#js-search-btn').click(function() {
		$('.full-search-wrap').css({
			width: $(window).width(),
			height: $(window).height()
		}).fadeIn('fast');
		$('#s-full').focus()
	});
	$('.full-search__close').click(function(event) {
		$('.full-search-wrap').fadeOut('600');
	});

	// MOBILE MENU
	$('#mob-toggle').click(function(event) {
		if ( $('.main-navigation').hasClass('active') ) {
			$('.page-wraper').animate({right: 0}, 200);
		} else {
			$('.page-wraper').animate({right: 220}, 200);
		}
		$('.main-navigation').toggleClass('active');
		$(this).find('.icon').toggleClass('flaticon-menu-options flaticon-cancel-button');
	});
	if ( $(window).width() < 768 ) {
		$('.menu-item-has-children > a').after('<i class="sub-menu__toggle mdi mdi-plus"></i>');
		$('.top-bar__social .social-menu').clone().appendTo('.main-navigation');
	}
	$('.sub-menu__toggle').click(function(event) {
		$(this).closest('.menu-item-has-children').find('.sub-menu').slideToggle(400);
	});

	// SLIDER
	$('#hero-slider').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>'],
	});

	$('.carousel-control').width( ($(window).width() - $(".container").width())/2 );
	$(window).resize(function(event) {
		$('.carousel-control').width( ($(window).width() - $(".container").width())/2 );
	});

	$('.item-3').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				touchDrag: false
			},
			768:{
				items:2,
				touchDrag: false
			},
			1000:{
				items:3,
				loop:false
			}
		}
	});

	var owl = $(".custom-nav").data('owlCarousel');

	// Custom Navigation Events
	$(".next").click(function(){
		owl.next()   // Go to next slide
	});

	$(".prev").click(function(){
		owl.prev()   // Go to previous slide
	});

})(jQuery);









