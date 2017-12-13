/**
 * Created by Admin on 2017/10/13.
 */
$(function () {
    //北京鼠标进入/离开事件
    $("#select-open").click(function () {
        $("#select-block").show();
        $("#select-open").css("backgroundColor","#fff").css("color","#757c85");
        return false;
    });
    $(document).click(function(){
        $("#select-block").hide();
        $("#select-open").css("backgroundColor","").css("color","#fff");

    });


    //顶部导航鼠标进入/离开事件
    $(".lis>a").mouseenter(function(){
        $(this).addClass("hover").siblings($(".lis>a")).removeClass("hover");
    }).mouseleave(function(){
        $(this).removeClass();
    })


    //顶部导航栏鼠标进入二维码显示
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


    //广告
    //广告小按钮
    var index=0;
    $(".screen>ol>li").mouseenter(function(){
        $(this).addClass("current").siblings($(".screen>ol>li")).removeClass("current");
        var index=$(this).index();
        $(".screen>ul").animate({"left":-index*1349+"px"},800);
    });

    //克隆第一张图片
    $(".screen>ul").append($(".screen>ul>li:eq(0)").clone());

    //自动播放
    var timeId=setInterval(toLeft,2000);
    function toLeft(){
        if(index*1920>=9600){
            $(".screen>ul").css("left",0);
            index=0;
        }
        index++;
        $(".screen>ul").stop().animate({"left":-index*1349+"px"},"slow");

        //小按钮跟随自动播放显示颜色
        if(index==5){
        $(".screen>ol>li:eq(0)").addClass("current").siblings(".screen>ol>li").removeClass("current");
        }else{
            $(".screen>ol>li:eq("+index+")").addClass("current").siblings(".screen>ol>li").removeClass("current");
        }
    }


    //广告左右焦点
    $(".banner").mouseenter(function(){
        $("#arr").css("display","block");
        clearInterval(timeId);
    });
    $(".banner").mouseleave(function(){
        $("#arr").css("display","none");
        timeId=setInterval(toLeft,2000);
    });

    //右边按钮
    $("#right").click(function(){
        toLeft();
    });
    //左边按钮
    $("#left").click(function(){
        if(index==0){
            index=5;
            $(".screen>ul").css("left",-index*1349+"px");

        }
        index--;
        $(".screen>ul").stop().animate({"left":-index*1349+"px"});
        $(".screen>ol>li:eq("+index+")").addClass("current").siblings(".screen>ol>li").removeClass("current");
    });


    //最美客照遮挡层
    $(".photo_top").mouseenter(function(){
        $(this).children("i").animate({"top":0,"opacity":1},500);
    });
    $(".photo_top").mouseleave(function(){
        $(this).children("i").animate({"top":-450,"opacity":0},500);
    });



    //底部客照隐藏显示
    $("#subnav>li>ul").hide();
    //找到id为u1下面的直接的子元素li添加点击事件
    $("#subnav>li>h3").mouseenter(function () {
        //当前点击的li里面的ul显示
        $(this).siblings("ul").slideDown(800);
        //隐藏当前被点击的li的兄弟元素的li中的ul
        $(this).parent("li").siblings("li").find("ul").slideUp(800);
    });














});