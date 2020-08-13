$(document).ready(function() {

  // Video Button
	$(document).on("click", ".video-button", function() {
		var $video = $(this).closest('.video-section').find('.video-wrapper iframe');
		var src = $video.attr('src');
		var videoWrapper = $(this).closest('.intro-video').find('.video-bkgr');
		var buttonWrapper = $(this).closest('.button-wrapper');

		$video.attr('src', src + '&autoplay=1');
		videoWrapper.css("display", "none");
		buttonWrapper.css("display", "none");
	});

})