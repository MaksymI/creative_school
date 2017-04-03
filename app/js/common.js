$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'effect-menu-slide', "pagedim-no", "fx-menu-zoom" ],
		navbar: {
			title: 'creative'
		},

		offCanvas: {
			position: 'left'
		},


	});
	

	var API = $('#my-menu').data("mmenu");
	

	API.bind('open:finish', function() {
		$('.hamburger').addClass("is-active");
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});


});
