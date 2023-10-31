$(document).ready(function(){
	////////////for sp menu //
	$('.hambMenu').click(function(){
		$('.overlay').fadeIn(150);
		$('body').css('overflow', 'hidden');
	});
	
	$('.spMenu ul li a').click(function(){
		event.preventDefault();
	});
	$('.btnClose').click(function(){
		$('.overlay').fadeOut(150);
		$('body').css('overflow-y', 'scroll');
	});
});