$(document).ready(function () {
    animated();
    // hover()
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

function hover(){
    var img = $('.list_1 .item img')
    $.each(img,function(i,item){
        $(item).mouseover(function(){
            rotate ()
          });
        $(item).mouseout(function(){
            rotate ()
          });
    })
}


function rotate () {
    console.log('1')
    var rotateVal = 0 // 旋转角度
    var InterVal // 定时器
    InterVal = setInterval(function () {
        var img = $('.list_1 .item img')
        rotateVal += 2
        // console.log(img)
        $.each(img,function(i,item){
            // 设置旋转属性(顺时针)
            item.style.transform = 'rotate(' + rotateVal + 'deg)'
            // 设置旋转时的动画  匀速0.1s
            item.style.transition = '0.1s linear' 
        })
     
    }, 10)
}