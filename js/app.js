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
	// Add arrow icon to primary navigation items which have sub navigation
	$('.nav-primary li').each(function(){
		var navSectionTitle = $(this).data('section');
		if($('.nav-secondary ul[data-section-parent="'+navSectionTitle+'"]').length > 0) {
			$(this).children('a').toggleClass('has-subnav');
			$('<i class="icon-right-open subnav-open" />').appendTo($(this).children('a'));
		}
	});

	// Main navigation click function
	$('.nav-primary a.has-subnav').on('click', function(event){
		event.preventDefault();

		// Animate
		$('.nav-primary .nav').animate({left:'-16em'},{ queue: true, duration: 300});
		$('.nav-secondary').animate({left:'0'},{ queue: true, duration: 300});

		var sectionTitle = $(this).parents('li').data('section'),
			linkedSection = $('.nav-secondary ul[data-section-parent="'+sectionTitle+'"]');

		// Update navigation title and add close icon
		$('.nav-secondary h2').text(sectionTitle);
		$('<i class="icon-left-open subnav-close" />').appendTo($('.nav-secondary h2'));

		// Show the right navigation
		linkedSection.removeClass('hidden').siblings('ul').addClass('hidden');
	});

	// Close sub navigaiton
	$('.nav-secondary h2').on('click', function(){
		$('.nav-secondary').animate({left:'16em'},{ queue: true, duration: 300});
		$('.nav-primary .nav').animate({left:'0'},{ queue: true, duration: 300});
	});
});