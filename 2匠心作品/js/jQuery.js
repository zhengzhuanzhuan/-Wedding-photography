//------ͼƬչʾ--------
//������Сͼչʾ��Ӧ��ͼ
$("#small>ul>li").mouseenter(function () {
    var index = $(this).index() + 1;
    $("#big_img").attr("src", "images/0" + index + "-" + index + ".jpg");
    $(this).find("img").css({"opacity": 1, "border": "1px solid #f4ce74"});
    $(this).siblings().find("img").css({"opacity": 0.5, "border": ""});
});
$("#small>ul>li img").mouseleave(function () {
    $(this).css({"opacity": 0.5, "border": ""});
});
//--------��Ʒչʾ-------
//��������ʾ��ǰ�ı߿�
$(".theme li").mouseenter(function () {
    $(this).find("a").css("border", "1px solid #b08646")
    $(this).siblings("li").find("a").css("border", "");
});
//����뿪,�߿��Ƴ�
$(".theme li").mouseleave(function () {
    $(".theme li a").css("border", "");
});
//��������ʾ��ǰ�ı߿�
$(".theme_others li").mouseenter(function () {
    $(this).find("a").css("border", "1px solid #b08646")
    $(this).siblings("li").find("a").css("border", "");
});
//����뿪,�߿��Ƴ�
$(".theme_others li").mouseleave(function () {
    $(".theme_others li a").css("border", "");
});

//----------չʾͼƬ---------
//��ȡdiv,ע���������¼�
$(".photo li div").mouseenter(function () {
    //���ݵ�ǰԪ���ҵ��ڵ���i,���ö�������,�޸�͸���Ⱥ�topֵ
    $(this).find("i").animate({"top": 0, "opacity": 1});
}).mouseleave(function () {
    $(this).find("i").animate({"top": -450, "opacity": 0});
});

//������ÿ��liʱ,չʾ��ͬ�Ķ�Ӧ������ul
$(".photo>ul:eq(0)").show().siblings().hide();
$(".link>ul>li").click(function () {
    //��ȡ��ǰli������ֵ
    var index = $(this).index();
    console.log(index);
    $(this).attr("id", "bgc1").siblings().attr("id", "");
    $(".photo>ul:eq(" + index + ")").show().siblings("ul").hide();
});

//----------�ֲ�ͼ---------

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

//�Զ�����
var timeId = setInterval(f1, 1000);
//���������ʱ,����ʱ��
$("#screen").mouseenter(function () {
    clearInterval(timeId);
}).mouseleave(function () {
    timeId = setInterval(f1, 1000);
});
//����ҽ���,ul�ƶ�
$("#right").mouseenter(function () {
    clearInterval(timeId);
}).mouseleave(function () {
    timeId = setInterval(f1, 1000);
}).click(function () {
    f1();
});





