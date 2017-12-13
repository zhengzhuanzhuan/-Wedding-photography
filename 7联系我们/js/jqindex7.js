/**
 * Created by Administrator on 2017/10/7.
 */
//获取北京div
$("#bj dt").click(function () {
    $(this).nextAll("dd").show();
    return false;
});
$(document).click(function () {
    $("#bj dt").nextAll("dd").hide();
    return false;
});
//导航二维码隐藏与显示
//获取导航栏wb wxspan 注册鼠标进入事件
$(".top_nav_bottom").find("#wxewm").mouseenter(function () {
    $(".nav_wxewm").fadeIn();
}).mouseleave(function () {
    $(".nav_wxewm").fadeOut();
})
;$(".top_nav_bottom").find("#wbewm").mouseenter(function () {
    $(".nav_wbewm").fadeIn();
}).mouseleave(function () {
    $(".nav_wbewm").fadeOut();
});

//获取导航中的ul
$("#top_ul>li").mouseenter(function () {
    $(this).css("borderBottom","2px solid #fff").siblings("li").css("border","");
    $(this).children("a").children("span").addClass("displayBlock");
    $(this).siblings("span").children("a").children("span").removeClass("displayBlock");
}).mouseleave(function () {
    $(this).children("a").children("span").removeClass("displayBlock");
});


//获取map3的ul
$(".map3 #uu>li").mouseenter(function () {
    $(this).css("backgroundColor","#b08746").siblings("li").css("backgroundColor","");

}).mouseleave(function () {
    $(this).parent().children("li").css("backgroundColor","");
});
