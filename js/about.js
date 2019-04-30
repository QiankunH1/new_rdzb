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
        $(".list_2 .l_wrap").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInLeft");
            }
            else {
                $(this).removeClass("fadeInLeft");
            }
        });
        $(".list_2 .r_wrap").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("fadeInRight");
            }
            else {
                $(this).removeClass("fadeInRight");
            }
        });
        $(".list_3 .container").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("rotateInDownLeft");
            }
            else {
                $(this).removeClass("rotateInDownLeft");
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

