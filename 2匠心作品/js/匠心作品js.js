/**
 * Created by Administrator on 2017/10/3 0003.
 */
//----------顶部导航--------------------------------------
// -------左侧北京部分的显示与隐藏-------
//获取北京div标签,注册点击事件
//var city = document.getElementsByClassName("city");
//var beijing = document.getElementsByClassName("beijing");
//var top_nav = document.getElementsByClassName("top_nav");
//city[0].onclick = function () {
//    beijing[0].className = "beijing";
//    beijing[0].style.backgroundColor = "#fff";
//    city[0].style.backgroundColor = "#fff";
//    city[0].getElementsByTagName("a")[0].style.color = "#666";
//    beijing[0].style.color = "#666";
//    window.event.cancelBubble = true;
//};
//
//top_nav[0].onclick = function () {
//    beijing[0].className = "beijing current";
//    city[0].getElementsByTagName("a")[0].style.color = "#fff";
//    city[0].style.backgroundColor = "";
//
//};
//
//// -------导航右侧部分的鼠标经过和离开的状态-------
//
//var top_nav_r = document.getElementsByClassName("top_nav_r");
//var topObjs = top_nav_r[0].getElementsByTagName("a");
//for (var i = 0; i < topObjs.length; i++) {
//    var span = topObjs[i].children[0];
//    topObjs[i].onmouseover = function () {
//        for (var j = 0; j < topObjs.length; j++) {
//            topObjs[j].className = "";
//        }
//        this.className = "dibian";
//    };
//    topObjs[i].onmouseout = function () {
//        for (var j = 0; j < topObjs.length; j++) {
//            topObjs[j].className = "";
//        }
//    };
//}
//
//<!--广告图片-->
//
//var marginLeft=document.getElementsByClassName("marginLeft")[0];
//var aObj=document.getElementById("aObj");
//var imgObj=document.getElementById("imgObj");
//marginLeft.onmouseover=function(){
//    imgObj.src="images/111.jpg";
//
//}
//marginLeft.onmouseout=function(){
//    imgObj.src="images/2017091904443029.jpg";
//}
////-----作品展示----------
////鼠标进去每个li标签时表框变色,排他功能
//var theme = my$("theme");
//var list = theme.getElementsByTagName("a");
//for (var i = 0; i < list.length; i++) {
//    list[i].onmouseover = function () {
//        for (var j = 0; j < list.length; j++) {
//            list[j].style.border = "";
//        }
//        ;
//        this.style.border = "1px solid #b08546";
//    }
//    list[i].onmouseout = function () {
//        for (var j = 0; j < list.length; j++) {
//            list[j].style.border = "";
//        }
//    };
//}
//var theme_others = my$("theme_others");
//var list1 = theme_others.getElementsByTagName("a");
//for (var i = 0; i < list1.length; i++) {
//    list1[i].onmouseover = function () {
//        for (var j = 0; j < list1.length; j++) {
//            list1[j].style.border = "";
//        }
//        this.style.border = "1px solid #b08546";
//    };
//    list1[i].onmouseout = function () {
//        for (var j = 0; j < list1.length; j++) {
//            list1[j].style.border = "";
//        }
//    };
//}
//
////-------展示图片的图层---------
////获取的是photo这个div
//var photos = document.getElementsByClassName("photo");
////获取的是所有的div标签
//var dvObj = photos[0].getElementsByTagName("div");
////获取所有的i标签
//var iObjs = photos[0].getElementsByTagName("i");
////获取每一个img标签
//var imgObjs = photos[0].getElementsByTagName("img");
//for (var i = 0; i < dvObj.length; i++) {
//    dvObj[i].setAttribute("pic_index", i);
//    var pic;
//    dvObj[i].onmouseover = function () {
//        pic = this.getAttribute("pic_index");
//        animate(iObjs[pic], {"top": 0, "opacity": 1});
//        animate(imgObjs[pic], { "width": 318,"height":480});
//    };
//    dvObj[i].onmouseout = function () {
//        animate(iObjs[pic], {"top": -450, "opacity": 0});
//        animate(imgObjs[pic], { "width": 288,"height":450});
//    };
//}


function getAttrValue(element, attr) {
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr] || 0;
}
function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;//假设都达到了目标
        for (var attr in json) {
            if (attr == "opacity") {//判断属性是不是opacity
                var current = getAttrValue(element, attr) * 100;
                //每次移动多少步
                var target = json[attr] * 100;//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//判断属性是不是zIndex
                element.style[attr] = json[attr];
            } else {//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //每次移动多少步
                var target = json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step = (target - current) / 10;//(目标-当前)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//如果没到目标结果就为false
            }
        }
        if (flag) {//结果为true
            clearInterval(element.timeId);
            if (fn) {//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
        console.log("target:" + target + "current:" + current + "step:" + step);
    }, 10);
}
function animate1(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 50);
}

//-------------轮播图---------------
//获取相框
var screen = my$("screen");
//获取ul
var ulObj = screen.children[0];
//获取所有li标签
var list2=ulObj.children;
var index = 0;
//追加一个li
ulObj.appendChild(ulObj.children[0].cloneNode(true));
ulObj.appendChild(ulObj.children[1].cloneNode(true));
ulObj.appendChild(ulObj.children[2].cloneNode(true));
ulObj.appendChild(ulObj.children[3].cloneNode(true));
ulObj.appendChild(ulObj.children[4].cloneNode(true));
//自动播放
var timeId=setInterval(clickHandle,1000);
//鼠标进入box停止播放
my$("box").onmouseover=function(){
  clearInterval(timeId);
};
my$("box").onmouseout=function(){
    timeId=setInterval(clickHandle,1000);
};
//为焦点按钮注册点击事件
my$("right").onclick = clickHandle;
function clickHandle() {
    if (index == list2.length - 5) {
        index = 0;
        ulObj.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
    }
    index++;
    animate1(ulObj, -index * 204)
};





