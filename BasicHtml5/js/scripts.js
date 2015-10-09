var main = function() {	

	/* external links */
	$('a').filter(function() {
	  return this.hostname && this.hostname !== location.hostname;
	}).addClass("external");
	
	$(".external").click(function(){
    return !window.open(this.href);
	});
	
	/* colorbox for images and videos */
	$("a[rel='lightbox']").colorbox();
	$("a[rel='youtube']").colorbox({iframe:true, innerWidth:640, innerHeight:505});
	
	$(".js").each(function (i) {
    $(this).css({
	    'display': 'block'
    });
  })
  $(".non-js").each(function (i) {
    $(this).css({
	    'display': 'none'
    });
  })
  
  //universal scroll
	if ($('.scrool').length != 0) {
		if ($('.scrool').length != 0) {
			$('.scrool').bind('click',function(event){
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1500,'easeInOutExpo');
				event.preventDefault();
			});
		};
	}
	
	if ($('.datepicker').length != 0) {
		$('.datepicker').datepicker();
	}
	
	//form validation
  if ($('.form_check').length != 0) {
    $(".form_check").validate({
      invalidHandler: function(form, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          var message = 'Vyplňte prosím povinné položky';
          $("div.error").html(message);
          $("div.error").show();
        } else {
          $("div.error").hide();
        }
      }
    })
  }

};

$(document).ready(main);
