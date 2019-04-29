$(document).ready(function () {
    animated();
});
function animated(){
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
        $(".list_1 .item").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInLeft");
            }
            else {
                $(this).removeClass("fadeInLeft");
            }
        });
        $(".list_3 .text_wrap").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInLeft");
            }
            else {
                $(this).removeClass("fadeInLeft");
            }
        });
        $(".list_4 .img_wrap").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInLeftBig");
            }
            else {
                $(this).removeClass("fadeInLeftBig");
            }
        });
        $(".list_4 .text_wrap").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInLeftBig");
            }
            else {
                $(this).removeClass("fadeInLeftBig");
            }
        });
        $(".list_5 .l_wrap").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("swing");
            }
            else {
                $(this).removeClass("swing");
            }
        });
        $(".list_5 .r_wrap").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeIn");
            }
            else {
                $(this).removeClass("fadeIn");
            }
        });
        $(".list_6 .container").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInDownBig");
            }
            else {
                $(this).removeClass("fadeInDownBig");
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

