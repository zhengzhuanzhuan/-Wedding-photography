/**
 * Created by zzz on 2017/10/14.
 */
 $(function(){
     $(".right li").mouseenter(function(){
         $(this).addClass("b");
         $("<img src='images/lujing.png'>").appendTo($(this));
     }).mouseleave(function(){
         $(this).find("img").remove();
         $(this).removeClass("b");
         $(".right li").eq(5).append($("<img src='images/lujing.png'>")).addClass("b");
     });
 });
$(function(){
    $("#ct").mouseenter(function(){
       $(".left>ul").show();
    }).mouseleave(function(){
        $(".left>ul").hide();
    });
});