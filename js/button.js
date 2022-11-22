$(function topp() {
    var but = $('.knopka');
    

    if ($(window).scrollTop() >= 0) {
        but.fadeIn();
    } else {
        but.fadeOut();
    };
    but.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 500);
    })
})

topp();