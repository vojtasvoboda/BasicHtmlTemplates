$(document).ready(function() {

    /* external links */
    $('a').filter(function() {
        return this.hostname && this.hostname !== location.hostname;
    }).addClass("external");

    $(".external").click(function() {
        return !window.open(this.href);
    });

    $(".js").each(function (i) {
        $(this).css({
            'display': 'block'
        });
    });

    $(".non-js").each(function (i) {
        $(this).css({
            'display': 'none'
        });
    });

});
