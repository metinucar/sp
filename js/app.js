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
			$(this).toggleClass('active').parents('.panel').toggleClass('minimized').find('.panel-body').slideToggle(700);
			if($(this).siblings('.btn').prop('disabled') === true) {
				$(this).siblings('.btn').prop('disabled',false);
			} else {
				$(this).siblings('.btn').prop('disabled',true);
			}
		});

	// Panel Settings
		$('.panel-toggle-settings').on('click',function(){
			$(this).toggleClass('active').parents('.panel').not('.minimized').find('.panel-settings').slideToggle(400);
		});
		$('.panel-toggle-add').on('click',function(){
			$(this).toggleClass('active').parents('.panel').not('.minimized').find('.panel-add').slideToggle(400);
		});
		$('.panel-hidden .close').on('click',function(){
			$(this).parent().slideToggle(400);
			$(this).parents('.panel').find('.panel-heading .btn.active').toggleClass('active');
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

	if (Modernizr.mq('only screen and (max-width: 991px)')) {

		// Re-organize primary and secondary navigation elements for responsive navigation
		$('#nav-responsive').appendTo('body').removeClass('nav-primary');

		$('.nav-secondary ul').each(function(){
			$(this).removeClass('hidden');
			var subNavSectionTitle = $(this).data('section-parent');
			$(this).appendTo($('#nav-responsive ul li[data-section="'+subNavSectionTitle+'"]'));
		});

		$('#nav-responsive').mmenu({
			configuration: {
			    hardwareAcceleration : true,
			    preventTabbing       : true,
			    transitionDuration   : 500
			}
		}); // Initiate plugin

		$('#nav-responsive .mm-subopen').each(function(){ $('<i class="icon-right-open-big"></i>').appendTo($(this));});
		$('#nav-responsive .mm-subclose').each(function(){ $('<i class="icon-left-open-big"></i>').appendTo($(this));});
	}

});