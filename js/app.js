$(document).ready(function() {

	$('.nav-secondary .page-header span').on('click', function(){
		$(this).parents('.nav-secondary').toggleClass('minimized');
		$('.app .content').toggleClass('full-width');
	});

	$('.nav-primary a').on('click', function(){
		$('.nav-secondary.minimized').toggleClass('minimized');
		$('.app .content.full-width').toggleClass('full-width');
	});

	$('.panel-toggle').on('click', function(){
		$(this).parents('.panel').find('.panel-body').slideToggle(700);
	});
});