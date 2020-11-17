$(document).ready(function () {
    let $btns = $('.project-area .button-group button');

    $btns.click((function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');

        $('.project-area .grid').isotope({
            filter: selector
        })
        return false;
    }))

    $('.project-area .button-group #btn1').trigger("click");



    // owl-carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            554: {
                items: 2,
            }
        }

    })
    $(".modal-area .slick__carousel").slick({
        infinite: true,
        centerPadding: '5px',
        variableWidth: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });
    $(".modal-area .slick__project").slick({
        infinite: true,
        centerPadding: '5px',
        variableWidth: true,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]

    });

    // sticky navigation menu
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();
})
const handleScrollto = (content) => {
    let elmnt = document.getElementById(content);
    elmnt.scrollIntoView();
}