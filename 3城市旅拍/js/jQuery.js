/**
 * Created by Administrator on 2017/10/13 0013.
 */
//��������

$(function () {
    //��ȡ���е�li,�����꾭���¼�
    $(".shouy>.uuone>li").mouseenter(function () {
        var json = {"border-bottom": "1px solid #FFFFFF", "padding-bottom": "6px"};
        $(this).css(json).siblings("li").css("border-bottom", "");
    });
});
//ͻ����ʾ
$(function () {
    //��ȡ���е�li
    $(".mask>ul>li").mouseenter(function () {
        //��ǰli͸����Ϊ1���ֵ�Ԫ��Ϊ0.3
        $(this).css("opacity", 1).siblings("li").css("opacity", 0.5);
    });
    //����뿪
    $(".mask").mouseleave(function () {
        //���е�li͸����Ϊ1
        $(this).find("li").css("opacity", 1);
    });
});


//��������
$(function () {
    //��ȡÿ��li
    //$(".moon .none").hide();
    $(".moon>ul>li").mouseenter(function () {
        //����꾭��ÿ��li����ǰli�ı���ͼ����,����li�ı���ͼû��
        var json1 = {"top": "0", "left": "0", "opacity": "1"};
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(this).children(".none").css(json1);
        $(this).siblings().children(".none").css(json2);

    });
    //����뿪��ʱ������li��û�б���ͼ
    $(".moon").mouseleave(function () {
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(".moon>ul>li").children(".none").css(json2);
    });


});


//���ǵ�ʮ��
$(function () {
    //��ȡÿ��li
    //$(".moon .none").hide();
    $(".wedding>ul>li").mouseenter(function () {
        //����꾭��ÿ��li����ǰli�ı���ͼ����,����li�ı���ͼû��
        var json1 = {"top": "0", "left": "0", "opacity": "1"};
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(this).children(".none").css(json1);
        $(this).siblings().children(".none").css(json2);

    });
    //����뿪��ʱ������li��û�б���ͼ
    $(".wedding").mouseleave(function () {
        var json2 = {"top": "-450px", "left": "0", "opacity": "0"};
        $(".wedding>ul>li").children(".none").css(json2);
    });


});


//�ֲ�ͼ

$(function () {
    //��ȡԪ��
    //��ȡ�������div
    var box = $("#box");
    //�󽹵�
    var left = $("#left");
    //�ҽ���
    var right = $("#right");
    //��ȡ���
    var screen = $(".screen ul");
    //��ȡli
    var list = $(screen).find("li");

    //��¡ǰ�ĸ�li
    screen.append(list.eq(0).clone()).append(list.eq(1).clone()).append(list.eq(2).clone()).append(list.eq(3).clone());
    var timeId = setInterval(toEast, 2000);
    //������ֹͣ�Զ����ź��뿪�Զ�����
    box.mouseenter(function () {
        clearInterval(timeId);
    }).mouseleave(function () {
        timeId = setInterval(toEast, 2000);
    });

    //���������ҽ�����ʾ������
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


    //�ұ�
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













