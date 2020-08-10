$(document).ready(function() {

  // wistia custom button play
  window._wq = window._wq || [];
  _wq.push({
    id: "4j5wwfsko0", onReady: function (video) {}
  });

  $(".wistia-play").click(function (e) {
    e.preventDefault();
    $('.wistia-btn-wrapper').fadeOut("slow");

    _wq.push({
      id: "4j5wwfsko0", onReady: function (video) {
        video.play();
      }
    });
  })

})