$(document).ready(function() {

// PANEL ACTIONS
	$('.panel-heading .btn-group').on('click', '.btn', function(){
		
		var panelWrap = $(this).parents('.panel');
		$(this).toggleClass('active').siblings('.btn.active').removeClass('active');

		// Panel Toggle
		if($(this).hasClass('panel-toggle')) {
			panelWrap.toggleClass('minimized').find('.panel-body').slideToggle(400);
		}
		
		// Panel Toggle Settings
		if($(this).hasClass('panel-toggle-settings')) {
			if(panelWrap.hasClass('minimized') === true) {
				panelWrap.toggleClass('minimized').find('.panel-body').slideToggle(400);
				panelWrap.find('.panel-settings').slideToggle(400);
			} else {
				panelWrap.find('.panel-settings').slideToggle(600);
			}
		}
		
		// Panel Toggle Add
		if($(this).hasClass('panel-toggle-add')) {
			if(panelWrap.hasClass('minimized') === true) {
				panelWrap.toggleClass('minimized').find('.panel-body').slideToggle(400);
				panelWrap.find('.panel-add').slideToggle(400);
			} else {
				panelWrap.find('.panel-add').slideToggle(600);
			}
		}

	});

	// Close the panel
	$('.panel-hidden').on('click', '.close', function(){
		$(this).parent().slideToggle(400);
		$(this).parents('.panel').find('.panel-heading .btn.active').toggleClass('active');
	});

// PRIMARY NAVIGATION
	$('.nav-primary a').on('click', function(event){
		event.preventDefault();
		$(this).parent('li').addClass('active').siblings('.active').removeClass('active');

		var sectionTitle = $(this).parents('li').data('section'),
			linkedSection = $('.nav-secondary ul[data-section-parent="'+sectionTitle+'"]');

		if(linkedSection.length > 0) {

			$('.nav-secondary h2').text(sectionTitle);
			$('.nav-secondary.minimized').toggleClass('minimized');
			$('.app .content.full-width, header.full-width, .section-header.full-width').removeClass('full-width');

			linkedSection.removeClass('hidden').siblings('ul').addClass('hidden');
		} else {
			$('.nav-secondary').addClass('minimized', 800);
			$('.app .content, header, .section-header').addClass('full-width', 800);
		}
		
	});

	// Secondary Navigation Show/Hide & Controlling the Content Width
		$('.nav-minimize').on('click', function(){
			$('.nav-secondary').toggleClass('minimized');
			$('.app .content, .section-header, header').toggleClass('full-width');
		});
});