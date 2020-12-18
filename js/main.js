$(document).ready(function () {
    // Start WOW Library
    new WOW().init();
    // End WOW Library

    // Start Navbar background white
    $(".back-to-top").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $('.navbar').addClass("active"); //
        } else if ($(this).scrollTop() > 1) {
            $('.navbar').removeClass('active');
        }
    });
    // End  Navbar background white

    // Start Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    // End Counter

    // Start Smooth Scroll to a Section
    $(function () {
        $('a[href*=\\#]:not([href=\\#])').on('click', function () {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1200, );
                return false;
            }
        });
    });
    // End Smooth Scroll to a Section

    // Start ScrollTop
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 200) {
                $('.back-to-top').stop().fadeIn(300); // show the button
            } else {
                $('.back-to-top').stop().fadeOut(200); // hide the button
            }
        });
    });

    $(function () {
        $(".back-to-top").on("click", function () {
            $("html, body").animate({
                scrollTop: 0,
            }, 400);
        });
    });

    // End scrollTop
});