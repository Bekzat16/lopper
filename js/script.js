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


$('.burger-menu_button').on('click', function () {
    $('.burger-menu_button').toggleClass('burger-menu_active');
    $('.burger-menu_nav').toggleClass('show')
});

$('.burger-menu_nav, .burger-menu__link').on('click', function () {
    $('.burger-menu_nav').removeClass('show');
    $('.burger-menu_button').removeClass('burger-menu_active')
});

// $('.burger-menu__link').on('click', function () {
//     $('.burger-menu_nav').toggleClass('show');
//     $('.burger-menu_button').toggleClass('burger-menu_active')
// });



var wow = new WOW(
    {
        boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
        animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
        offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
        mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
        live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
        callback:     function(box) {
            // функция срабатывает каждый раз при старте анимации
            // аргумент box — элемент, для которого была запущена анимация
        },
        scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
);
wow.init();