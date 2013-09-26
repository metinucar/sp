$(document).ready(function() {

	// Secondary Navigation Show/Hide & Controlling the Content Width
		$('.nav-secondary .page-header span').on('click', function(){
			$(this).parents('.nav-secondary').toggleClass('minimized');
			$('.app .content').toggleClass('full-width');
		});

		$('.nav-primary a').on('click', function(){
			$('.nav-secondary.minimized').toggleClass('minimized');
			$('.app .content.full-width').toggleClass('full-width');
		});

	// Panel Toggle
		$('.panel-toggle').on('click', function(){
			$(this).parents('.panel').find('.panel-body').slideToggle(700);
		});

	// Primary Navigation
		// on page load
		var activePrimaryNavTitle = $('.nav-primary li.active').data('section');
		$('.nav-secondary ul.hidden[data-section-parent="'+activePrimaryNavTitle+'"]').toggleClass('hidden');
		$('.nav-secondary h2').text(activePrimaryNavTitle);

		// when clicked
		$('.nav-primary a').on('click', function(event){
			event.preventDefault();
			$(this).parent('li').siblings('.active').removeClass('active');
			$(this).parent('li').addClass('active');

			var sectionTitle = $(this).parents('li').data('section');
			$('.nav-secondary ul').not('.hidden').toggleClass('hidden');
			$('.nav-secondary ul.hidden[data-section-parent="'+sectionTitle+'"]').toggleClass('hidden');
			$('.nav-secondary h2').text(sectionTitle);
		});

});