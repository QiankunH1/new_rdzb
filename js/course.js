$(document).ready(function () {
    animated();
    changetab();
    tab();
});
function animated() {
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

function changetab() {
    $(".list_5 .title li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        //获取选中元素的下标
        var index = $(this).index();
        $(".list_5 .content .dec .item").removeClass("active").eq(index).addClass("active")
    });
}
function tab() {
    $(".list_6 .container .item").click(function () {
        $(".list_8 .content .item").removeClass("active");
        $(this).addClass("active").siblings().removeClass("active");
        //获取选中元素的下标
        var index = $(this).index();
        $(".list_7 .list").removeClass("active").eq(index).addClass("active")
    });
    $(".list_8 .content .item").click(function () {
        $(".list_6 .container .item").removeClass("active");
        $(this).addClass("active").siblings().removeClass("active");
        //获取选中元素的下标
        var index = $(this).index()+4;
        $(".list_7 .list").removeClass("active").eq(index).addClass("active")
    });
}
