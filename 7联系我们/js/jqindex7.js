/**
 * Created by Administrator on 2017/10/7.
 */
//��ȡ����div
$("#bj dt").click(function () {
    $(this).nextAll("dd").show();
    return false;
});
$(document).click(function () {
    $("#bj dt").nextAll("dd").hide();
    return false;
});
//������ά����������ʾ
//��ȡ������wb wxspan ע���������¼�
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

//��ȡ�����е�ul
$("#top_ul>li").mouseenter(function () {
    $(this).css("borderBottom","2px solid #fff").siblings("li").css("border","");
    $(this).children("a").children("span").addClass("displayBlock");
    $(this).siblings("span").children("a").children("span").removeClass("displayBlock");
}).mouseleave(function () {
    $(this).children("a").children("span").removeClass("displayBlock");
});


//��ȡmap3��ul
$(".map3 #uu>li").mouseenter(function () {
    $(this).css("backgroundColor","#b08746").siblings("li").css("backgroundColor","");

}).mouseleave(function () {
    $(this).parent().children("li").css("backgroundColor","");
});
