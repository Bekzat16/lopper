$(document).ready(function() {
    $(".slider").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: ["<img src='./img/left.png'>", "<img src='./img/right.png'>"],
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});


$('.mobile-menu').on('click', function () {
    $('.mobile-menu').toggleClass('menu-active');
    $('nav').toggleClass('show')
});

$('nav').on('click', function () {
    $('nav').toggleClass('show');
    $('.mobile-menu').toggleClass('menu-active')
});