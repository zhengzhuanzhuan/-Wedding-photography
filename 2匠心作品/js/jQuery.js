//------图片展示--------
//鼠标进入小图展示对应大图
$("#small>ul>li").mouseenter(function () {
    var index = $(this).index() + 1;
    $("#big_img").attr("src", "images/0" + index + "-" + index + ".jpg");
    $(this).find("img").css({"opacity": 1, "border": "1px solid #f4ce74"});
    $(this).siblings().find("img").css({"opacity": 0.5, "border": ""});
});
$("#small>ul>li img").mouseleave(function () {
    $(this).css({"opacity": 0.5, "border": ""});
});
//--------作品展示-------
//鼠标进入显示当前的边框
$(".theme li").mouseenter(function () {
    $(this).find("a").css("border", "1px solid #b08646")
    $(this).siblings("li").find("a").css("border", "");
});
//鼠标离开,边框移除
$(".theme li").mouseleave(function () {
    $(".theme li a").css("border", "");
});
//鼠标进入显示当前的边框
$(".theme_others li").mouseenter(function () {
    $(this).find("a").css("border", "1px solid #b08646")
    $(this).siblings("li").find("a").css("border", "");
});
//鼠标离开,边框移除
$(".theme_others li").mouseleave(function () {
    $(".theme_others li a").css("border", "");
});

//----------展示图片---------
//获取div,注册鼠标进入事件
$(".photo li div").mouseenter(function () {
    //根据当前元素找到遮挡层i,调用动画函数,修改透明度和top值
    $(this).find("i").animate({"top": 0, "opacity": 1});
}).mouseleave(function () {
    $(this).find("i").animate({"top": -450, "opacity": 0});
});

//鼠标进入每个li时,展示不同的对应索引的ul
$(".photo>ul:eq(0)").show().siblings().hide();
$(".link>ul>li").click(function () {
    //获取当前li的索引值
    var index = $(this).index();
    console.log(index);
    $(this).attr("id", "bgc1").siblings().attr("id", "");
    $(".photo>ul:eq(" + index + ")").show().siblings("ul").hide();
});

//----------轮播图---------

$("#screen ul>li:eq(0)").clone().appendTo($("#screen ul"));
$("#screen ul>li:eq(1)").clone().appendTo($("#screen ul"));
$("#screen ul>li:eq(2)").clone().appendTo($("#screen ul"));
$("#screen ul>li:eq(3)").clone().appendTo($("#screen ul"));
$("#screen ul>li:eq(4)").clone().appendTo($("#screen ul"));
var index = 0;
function f1() {
    if (index == $("#screen ul li").length - 5) {
        index = 0;
        //$("#screen ul").css("left", "0");
        $("#screen ul").animate({"left": "0"}, 1);
    }
    index++;
    $("#screen ul").animate({"left": -index * 204 + "px"}, 1000, "linear");
}

//自动播放
var timeId = setInterval(f1, 1000);
//鼠标进入相框时,清理定时器
$("#screen").mouseenter(function () {
    clearInterval(timeId);
}).mouseleave(function () {
    timeId = setInterval(f1, 1000);
});
//点击右焦点,ul移动
$("#right").mouseenter(function () {
    clearInterval(timeId);
}).mouseleave(function () {
    timeId = setInterval(f1, 1000);
}).click(function () {
    f1();
});





