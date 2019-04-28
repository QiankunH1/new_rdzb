$(document).ready(function () {
    var a, b, c;
    a = $(window).height();
    $(window).scroll(function () {
        var b = $(this).scrollTop();
        $("h3").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("bounceInLeft");
            }
            else {
                $(this).removeClass("bounceInLeft");
            }
        });
        $(".list_2 li").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInLeft");
            }
            else {
                $(this).removeClass("fadeInLeft");
            }
        });
        $(".list_2 .list2_bg").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("rotateIn");
            }
            else {
                $(this).removeClass("rotateIn");
            }
        });
        $(".list_4 .kh_bg").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("rotateIn");
            }
            else {
                $(this).removeClass("rotateIn");
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

});