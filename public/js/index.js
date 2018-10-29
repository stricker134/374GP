$(document).ready(function () {
    
    // Sticky Nav on Publications Page

    $("#sticky-nav").hide();

    if ($(window).width() > 960) {
        $('.menu-toggle').hide();
    } else {
        $('.sticky-nav a').hide();
    }

    $(window).resize(function () {
        if ($(window).width() > 960) {
            $('.sticky-nav a').show();
            $('.menu-toggle').hide();
        } else {
            $('.menu-toggle').show();
            $('.sticky-nav a').hide();
        }
    });

    var stickyNavTop = $('.sticky-nav').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.sticky-nav').addClass('sticky');
            $('.sticky-nav a').addClass();
        } else {
            $('.sticky-nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });

    $(function () {
        $('ul.nav a').bind('click', function (event) {
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'ease');

            event.preventDefault();
        });
    });

    $(window).scroll(function () {
        $('#navbar').each(function () {
            if (isScrolledIntoView($(this))) {
                $("#sticky-nav").hide();
            } else {
                $("#sticky-nav").show();
            }
        });
    });

    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $('.menu-toggle').click(function () {

        $('.sticky-nav').toggleClass('sticky-nav--open');
        $(this).toggleClass('open');

        $('.sticky-nav a').toggle();
        $('.sticky-nav').toggleClass('sticky-height');

    })

});