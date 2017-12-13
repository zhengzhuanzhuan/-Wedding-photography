function my$(id){
    return document.getElementById(id);
}
(function(){
   var main=my$("main");
    var list =my$("list");
    var scroll =my$("scroll");
    var bar=my$("bar");
    //设置滚动条的高度
    var height = scroll.offsetHeight * main.offsetHeight / list.offsetHeight;
    bar.style.height = height + "px";
    //移动滚动条
    bar.onmousedown = function (e) {
        //offsetTop是滚动条相对于页面的纵坐标
        var spaceY = e.clientY - bar.offsetTop;//短距离
        document.onmousemove = function (e) {//移动事件
            var y = e.clientY - spaceY;
            y=y<0?0:y;//最小值
            y=y>scroll.offsetHeight-bar.offsetHeight?scroll.offsetHeight-bar.offsetHeight:y;
            bar.style.top = y + "px";
            window.getSelection? window.getSelection().removeAllRanges():document.selection.empty();
            var moveY=y*(list.offsetHeight-main.offsetHeight)/(scroll.offsetHeight-bar.offsetHeight);
            //设置文字div的移动距离
            list.style.marginTop=-moveY+"px";
        };
    };
    document.onmouseup=function () {
        //鼠标抬起的时候,把移动事件干掉
        document.onmousemove=null;
    };

}());
