$(document).ready(function() {

	// smooth scroll anchor #
	$('.nav-link[href^="#"]').bind('click.smoothscroll', function(e) {
		var target = $(this.hash);
		e.preventDefault();

		if (target) {
			$('html, body').stop().animate({
				'scrollTop': target.offset().top
			   }, 800, 'swing', function() {
			});
		}
		
	});

  // Video Button
	$(document).on("click", ".video-button", function() {
		var $video = $(this).closest('.video-section').find('.video-wrapper iframe');
		var src = $video.attr('src');
		var videoWrapper = $(this).closest('.video-section').find('.video-bkgr');
		var buttonWrapper = $(this).closest('.button-wrapper');

		$video.attr('src', src + '&autoplay=1');
		// videoWrapper.css("display", "none");
		videoWrapper.removeClass('active');
		buttonWrapper.css("display", "none");
	});

})