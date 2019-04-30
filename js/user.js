$(document).ready(function () {
    animated();

});

function animated() {
    var a, b, c;
    a = $(window).height();
    $(window).scroll(function () {
        var b = $(this).scrollTop();
        $("h3").each(function () {
            c = $(this).offset().top;
            if (a + b >= c) {
                $(this).addClass("animated");
                $(this).addClass("bounceInLeft");
            }
            else {
                $(this).removeClass("bounceInLeft");
            }
        });

        $(".list_1 .animated_wrap img").each(function () {
            c = $(this).offset().top;
            $(this).removeClass("fadeInLeftBig");
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInLeftBig");
            }
            else {
                $(this).removeClass("fadeInLeftBig");
            }
        });



        $(".foot").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInUp");
            }
            else {
                // $(this).removeClass("fadeInUp");
            }
        });
    });
}