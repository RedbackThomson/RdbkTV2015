function shuffle(){
	var items = $('#home-page-splash-shuffle > p').length;
	var max = 90*(items+1) - 130;
	$('#home-page-splash-shuffle > p').each(function(){
		h = ($(this).offset().top + 130);
		if( h > max ){
			$(this).css	('top', 0 );
			return;
		}

		if( h == 270 ){
			$(this).addClass('current' );
		}

		if( h == 360 ){
			$(this).removeClass('current' );
		}
		
		$(this).animate({
			top: h,
			easing: 'easeIn'
		}, 500, '');
		
		if( h > max ){
			$(this).css	('top', 0 );
		}
	});

	window.setTimeout(shuffle, 2500);
}

var i = 0;
		
$('#home-page-splash-shuffle > p').each(function(){
	starter = $(this).css('top', ((i * 90) ) + 'px' );
	starterWhite = ($(this).offset().top + 130);
	if((i*90) == 270)
		$(this).addClass('current');
	$(this).css('top', starter );
	i++;
});

window.setTimeout(shuffle, 2000);