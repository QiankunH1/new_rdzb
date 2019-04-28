$(document).ready(function () {
    animated();
    tab() ;

});
function tab() {
    $(".list_3 .item_l li").click(function () {
        //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
        var index = $(this).index();
        $(".list_3 .item_l .text").removeClass("active").eq(index).addClass("active");
        //获取选中元素的下标
        $(".list_3 .item_r").removeClass("active").eq(index).addClass("active")
    });
};
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
        $(".list_3 .item_r").each(function () {
            c = $(this).offset().top;
            if (a + b > c) {
                $(this).addClass("animated");
                $(this).addClass("slideInRight");
            }
            else {
                $(this).removeClass("slideInRight");
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
}