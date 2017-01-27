smoothScroll.init();
$(function() {
    $(".element").typed({
        strings: ["Fashion Photographer", "Wildlife Photographer", "Graduation Photographer", "Wedding Photographer"],
        typeSpeed: 0
    });
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});
$(document).ready(function() {
    $('.honeycombs').honeycombs({
        combWidth: 355,
        margin: 2
    });
});
