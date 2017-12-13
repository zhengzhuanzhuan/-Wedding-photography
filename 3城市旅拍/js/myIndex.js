/**
 * Created by Administrator on 2017/9/29 0029.
 */

/*遮挡层*/

//var mask = document.querySelector(".mask");
//var black = document.querySelector(".black");
//var uu=document.getElementById("uul");
//var lists=uu.children;
//console.log(lists);
//for(var i=0;i<lists.length;i++) {
//
//
//    lists[i].onmouseover = function () {
//        //当前被点击的li没有遮挡层
//        for(var j=0;j<lists.length;j++){
//            lists[j].getElementsByTagName("img")[0].style.opacity= "0.3";
//            lists[j].getElementsByTagName("img")[0].style.transition="1s";
//            //console.log(lists[j].getElementsByTagName("img")[0]);
//        }
//        this.getElementsByTagName("img")[0].style.opacity = "1";
//
//    };
//    lists[i].onmouseout= function () {
//        for(var k=0;k<lists.length;k++){
//            lists[k].getElementsByTagName("img")[0].style.opacity= "1";
//            lists[k].getElementsByTagName("img")[0].style.transition="0.1s";
//        }
//
//    };
//}


/*轮播图*/

//
////获取最外面的div
//var box = my$("box");
////获取相框的div
//var screen = box.children[0];
////获取相框的的宽度
////var imgWidth=screen.offsetWidth;
////获取相框
//var ulObj = screen.children[0];
////获取li----相片
//var list = ulObj.children;
////获取arr
//var arr = document.getElementById("arr");
////获取span
//
////获取左边的焦点
//var left = document.getElementById("left");
////获取右边的焦点
//var right = document.getElementById("right");
//
//
////自动播放
//var timeId = setInterval(clickHandle, 1000);
////鼠标进入左右显示
//left.onmouseover = function () {
//    this.style.backgroundImage = "url(images/shang1.png)";
//    //鼠标进入清除定时器
//    clearInterval(timeId);
//};
//left.onmouseout = function () {
//    this.style.backgroundImage = "url(images/shang.png)";
//    //鼠标离开自动播放
//    timeId = setInterval(clickHandle, 1000);
//};
//right.onmouseover = function () {
//    this.style.backgroundImage = "url(images/xia1.png)";
//    //鼠标进入清除定时器
//    clearInterval(timeId);
//};
//right.onmouseout = function () {
//    this.style.backgroundImage = "url(images/xia.png)";
//    //鼠标离开自动播放
//    timeId = setInterval(clickHandle, 1000);
//};
////克隆
//ulObj.appendChild(list[0].cloneNode(true));
//ulObj.appendChild(list[1].cloneNode(true));
//ulObj.appendChild(list[2].cloneNode(true));
//ulObj.appendChild(list[3].cloneNode(true));
//ulObj.appendChild(list[4].cloneNode(true));
//
////右边按钮
//var pic = 0;
//my$("right").onclick = clickHandle;
//function clickHandle() {
//    if (pic * 297 > 2376) {
//        ulObj.style.left = 0 + "px";
//        pic = 0;
//    }
//    pic++;
//    animate(ulObj, -pic * 297);
//}
//
//
////左边按钮
//my$("left").onclick = function () {
//    if (pic <= 0) {
//        ulObj.style.left = "-2376px";
//        pic = 8;
//        pic--;
//        animate(ulObj, -pic * 297);
//    } else {
//        pic--;
//        animate(ulObj, -pic * 297);
//    }
//};
//
//
////设置任意的一个元素,移动到指定的目标位置
//function animate(element, target) {
//    clearInterval(element.timeId);
//    //定时器的id值存储到对象的一个属性中
//    element.timeId = setInterval(function () {
//        //获取元素的当前的位置,数字类型
//        var current = element.offsetLeft;
//        //每次移动的距离
//        var step = 10;
//        step = current < target ? step : -step;
//        //当前移动到位置
//        current += step;
//        if (Math.abs(current - target) > Math.abs(step)) {
//            element.style.left = current + "px";
//        } else {
//            //清理定时器
//            clearInterval(element.timeId);
//            //直接到达目标
//            element.style.left = target + "px";
//        }
//    }, 10);
//}
//
