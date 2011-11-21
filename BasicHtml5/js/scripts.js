$(document).ready(function(){	

	/* external links */
	$(".external").click(function(){
    return !window.open(this.href);
	});
	
	/* colorbox for images and videos */
	$("a[rel='lightbox']").colorbox();
	$("a[rel='youtube']").colorbox({iframe:true, innerWidth:640, innerHeight:505});

});