/**
 * Created by Admin on 2017/10/13.
 */
$(function () {
    //����������/�뿪�¼�
    $("#select-open").click(function () {
        $("#select-block").show();
        $("#select-open").css("backgroundColor","#fff").css("color","#757c85");
        return false;
    });
    $(document).click(function(){
        $("#select-block").hide();
        $("#select-open").css("backgroundColor","").css("color","#fff");

    });


    //��������������/�뿪�¼�
    $(".lis>a").mouseenter(function(){
        $(this).addClass("hover").siblings($(".lis>a")).removeClass("hover");
    }).mouseleave(function(){
        $(this).removeClass();
    })


    //�����������������ά����ʾ
    $(".wxdl").mouseenter(function(){
        $(".wxewm").show();
    });
    $(".wxdl").mouseleave(function(){
        $(".wxewm").hide();
    });
    $(".wbdl").mouseenter(function(){
        $(".wbewm").show();
    });
    $(".wbdl").mouseleave(function(){
        $(".wbewm").hide();
    });


    //���
    //���С��ť
    var index=0;
    $(".screen>ol>li").mouseenter(function(){
        $(this).addClass("current").siblings($(".screen>ol>li")).removeClass("current");
        var index=$(this).index();
        $(".screen>ul").animate({"left":-index*1349+"px"},800);
    });

    //��¡��һ��ͼƬ
    $(".screen>ul").append($(".screen>ul>li:eq(0)").clone());

    //�Զ�����
    var timeId=setInterval(toLeft,2000);
    function toLeft(){
        if(index*1920>=9600){
            $(".screen>ul").css("left",0);
            index=0;
        }
        index++;
        $(".screen>ul").stop().animate({"left":-index*1349+"px"},"slow");

        //С��ť�����Զ�������ʾ��ɫ
        if(index==5){
        $(".screen>ol>li:eq(0)").addClass("current").siblings(".screen>ol>li").removeClass("current");
        }else{
            $(".screen>ol>li:eq("+index+")").addClass("current").siblings(".screen>ol>li").removeClass("current");
        }
    }


    //������ҽ���
    $(".banner").mouseenter(function(){
        $("#arr").css("display","block");
        clearInterval(timeId);
    });
    $(".banner").mouseleave(function(){
        $("#arr").css("display","none");
        timeId=setInterval(toLeft,2000);
    });

    //�ұ߰�ť
    $("#right").click(function(){
        toLeft();
    });
    //��߰�ť
    $("#left").click(function(){
        if(index==0){
            index=5;
            $(".screen>ul").css("left",-index*1349+"px");

        }
        index--;
        $(".screen>ul").stop().animate({"left":-index*1349+"px"});
        $(".screen>ol>li:eq("+index+")").addClass("current").siblings(".screen>ol>li").removeClass("current");
    });


    //���������ڵ���
    $(".photo_top").mouseenter(function(){
        $(this).children("i").animate({"top":0,"opacity":1},500);
    });
    $(".photo_top").mouseleave(function(){
        $(this).children("i").animate({"top":-450,"opacity":0},500);
    });



    //�ײ�����������ʾ
    $("#subnav>li>ul").hide();
    //�ҵ�idΪu1�����ֱ�ӵ���Ԫ��li��ӵ���¼�
    $("#subnav>li>h3").mouseenter(function () {
        //��ǰ�����li�����ul��ʾ
        $(this).siblings("ul").slideDown(800);
        //���ص�ǰ�������li���ֵ�Ԫ�ص�li�е�ul
        $(this).parent("li").siblings("li").find("ul").slideUp(800);
    });














});