$(document).ready(function(){

  /* schova prvky pri aktivnim JS */
  $('.no-js').hide();

  /* skryti hlavniho menu */
  $('.nav-collapse.collapse').css("height", 0);

  /* externi odkazy */
  $('a').filter(function() {
	  return this.hostname && this.hostname !== location.hostname;
	}).addClass("external");
	$(".js").each(function (i) {
    $(this).css({
	    'display': 'block'
    });
  });

});
