/**
 * Created by Administrator on 2017/10/13 0013.
 */
//导航部分

$(function () {
    //获取所有的li,添加鼠标经过事件
    $(".shouy>.uuone>li").mouseenter(function () {
        var json = {"border-bottom": "1px solid #FFFFFF", "padding-bottom": "6px"};
        $(this).css(json).siblings("li").css("border-bottom", "");
    });
});
//突出显示
$(function () {
    //获取所有的li
    $(".mask>ul>li").mouseenter(function () {
        //当前li透明度为1，兄弟元素为0.3
        $(this).css("opacity", 1).siblings("li").css("opacity", 0.5);
    });
    //鼠标离开
    $(".mask").mouseleave(function () {
        //所有的li透明度为1
        $(this).find("li").css("opacity", 1);
    });
});


//动画部分
$(function () {
    //获取每个li
    //$(".moon .none").hide();
    $(".moon>ul>li").mouseenter(function () {
        //当鼠标经过每个li，当前li的背景图出现,其他li的背景图没有
        var json1 = {"top": "0", "left": "0", "opacity": "1"};
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(this).children(".none").css(json1);
        $(this).siblings().children(".none").css(json2);

    });
    //鼠标离开的时候，所有li都没有背景图
    $(".moon").mouseleave(function () {
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(".moon>ul>li").children(".none").css(json2);
    });


});


//三亚第十季
$(function () {
    //获取每个li
    //$(".moon .none").hide();
    $(".wedding>ul>li").mouseenter(function () {
        //当鼠标经过每个li，当前li的背景图出现,其他li的背景图没有
        var json1 = {"top": "0", "left": "0", "opacity": "1"};
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(this).children(".none").css(json1);
        $(this).siblings().children(".none").css(json2);

    });
    //鼠标离开的时候，所有li都没有背景图
    $(".wedding").mouseleave(function () {
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(".wedding>ul>li").children(".none").css(json2);
    });


});


//轮播图

$(function () {
    //获取元素
    //获取最外面的div
    var box = $("#box");
    //左焦点
    var left = $("#left");
    //右焦点
    var right = $("#right");
    //获取相框
    var screen = $(".screen ul");
    //获取li
    var list = $(screen).find("li");

    //克隆前四个li
    screen.append(list.eq(0).clone()).append(list.eq(1).clone()).append(list.eq(2).clone()).append(list.eq(3).clone());
    var timeId = setInterval(toEast, 2000);
    //鼠标进入停止自动播放和离开自动播放
    box.mouseenter(function () {
        clearInterval(timeId);
    }).mouseleave(function () {
        timeId = setInterval(toEast, 2000);
    });

    //鼠标进入左右焦点显示和隐藏
    left.mouseenter(function () {
        $(this).css("backgroundImage", "url(images/shang1.png)");
    }).mouseleave(function () {
        $(this).css("backgroundImage", "url(images/shang.png)");
    }).click(function () {
        toWest();
    });
    right.mouseenter(function () {
        $(this).css("backgroundImage", "url(images/xia1.png)");
    }).mouseleave(function () {
        $(this).css("backgroundImage", "url(images/xia.png)");
    }).click(function () {
        toEast();
    });


    //右边
    var index = 0;

    function toEast() {
        if (index * 297 >= 2376) {
            screen.css("left", "0");
            index = 0;
        }
        index++;
        screen.animate({left: -(index * 297 + 100)}, 700, function () {
            screen.animate({left: -index * 297}, 300);
        });
    }

    function toWest() {
        if (index === 0) {
            screen.css("left", "-2376px");
            index = 7;
            screen.animate({left: -(index * 297 - 100)}, 700, function () {
                screen.animate({left: -index * 297}, 300);
            });
        }else {
            index--;
            screen.animate({left: -(index * 297 - 100)}, 700, function () {
                screen.animate({left: -index * 297}, 300);
            });
    }
    }

});













