//��������
//����ѡ��
$(".city_btn").click(function () {
    $("#nav_city").attr("class", "city_box");
    $(this).css("background", "#ffffff");
    $(this).css("color", "#666666");
});
//���е�����
$("#nav_city").children().click(function () {
    $(".city_btn").html($(this).text() + "&nbsp&nbsp<span></span>").css({
        "backgroundColor": "",
        "color": "#ffffff"
    });
    $("#nav_city").attr("class", "city_box box_none");
    // $("#nav_city").css("display", "none");
}).mouseenter(function () {
    $(this).css({"color": "#ffffff", "background": "#B08746"});
}).mouseleave(function () {
    $(this).css({"color": "#666666", "background": ""});
});
//��������
$(".nav_ul li").mouseenter(function () {
    $(this).children("a").css("color", "#B08746").parent("li").siblings("li").children("a").css("color", "");
    $(this).css({
        "background": "url(images/lujing.png) no-repeat center 0",
        "border-bottom": "1px solid #ffffff"
    }).siblings("li").css({"background": "", "border-bottom": ""});
}).click(function () {
    $(this).attr("index", "1").siblings("li").removeAttr("index");
}).mouseleave(function () {
    $(".nav_ul li[index != 1]").children("a").css("color", "").end().css({"background": "", "border-bottom": ""});
    $(".nav_ul li[index = 1]").css({
        "background": "url(images/lujing.png) no-repeat center 0",
        "border-bottom": "1px solid #ffffff"
    }).children("a").css("color", "#B08746");
});
//��������ά��
$(".nav_wb>a").mouseenter(function () {
    $(".nav_wbewm").css("display","block");
}).mouseleave(function () {
    $(".nav_wbewm").css("display","none");
});
$(".nav_wx>a").mouseenter(function () {
    $(".nav_wxewm").css("display","block");
}).mouseleave(function () {
    $(".nav_wxewm").css("display","none");
});
//=============================================================




//�ײ�==========================================================
//��ά��
$("#wberwm").mousemove(function () {
    $("#wb").css("color", "#B08746");
}).mouseout(function () {
    $("#wb").css("color", "");
});
$("#wxerwm").mousemove(function () {
    $("#wx").css("color", "#B08746");
}).mouseout(function () {
    $("#wx").css("color", "");
});