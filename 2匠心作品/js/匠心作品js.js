/**
 * Created by Administrator on 2017/10/3 0003.
 */
//----------��������--------------------------------------
// -------��౱�����ֵ���ʾ������-------
//��ȡ����div��ǩ,ע�����¼�
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
//// -------�����Ҳಿ�ֵ���꾭�����뿪��״̬-------
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
//<!--���ͼƬ-->
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
////-----��Ʒչʾ----------
////����ȥÿ��li��ǩʱ����ɫ,��������
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
////-------չʾͼƬ��ͼ��---------
////��ȡ����photo���div
//var photos = document.getElementsByClassName("photo");
////��ȡ�������е�div��ǩ
//var dvObj = photos[0].getElementsByTagName("div");
////��ȡ���е�i��ǩ
//var iObjs = photos[0].getElementsByTagName("i");
////��ȡÿһ��img��ǩ
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
        var flag = true;//���趼�ﵽ��Ŀ��
        for (var attr in json) {
            if (attr == "opacity") {//�ж������ǲ���opacity
                var current = getAttrValue(element, attr) * 100;
                //ÿ���ƶ����ٲ�
                var target = json[attr] * 100;//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step = (target - current) / 10;//(Ŀ��-��ǰ)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {//�ж������ǲ���zIndex
                element.style[attr] = json[attr];
            } else {//��ͨ������

                //��ȡ��ǰ��λ��----getAttrValue(element,attr)��ȡ�����ַ�������
                var current = parseInt(getAttrValue(element, attr)) || 0;
                //ÿ���ƶ����ٲ�
                var target = json[attr];//ֱ�Ӹ�ֵ��һ������,����Ĵ��붼���ø�
                var step = (target - current) / 10;//(Ŀ��-��ǰ)/10
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current = current + step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;//���û��Ŀ������Ϊfalse
            }
        }
        if (flag) {//���Ϊtrue
            clearInterval(element.timeId);
            if (fn) {//����û������˻ص��ĺ���
                fn(); //��ֱ�ӵĵ���,
            }
        }
        console.log("target:" + target + "current:" + current + "step:" + step);
    }, 10);
}
function animate1(element, target) {
    clearInterval(element.timeId);
    //��ʱ����idֵ�洢�������һ��������
    element.timeId = setInterval(function () {
        //��ȡԪ�صĵ�ǰ��λ��,��������
        var current = element.offsetLeft;
        //ÿ���ƶ��ľ���
        var step = 10;
        step = current < target ? step : -step;
        //��ǰ�ƶ���λ��
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //����ʱ��
            clearInterval(element.timeId);
            //ֱ�ӵ���Ŀ��
            element.style.left = target + "px";
        }
    }, 50);
}

//-------------�ֲ�ͼ---------------
//��ȡ���
var screen = my$("screen");
//��ȡul
var ulObj = screen.children[0];
//��ȡ����li��ǩ
var list2=ulObj.children;
var index = 0;
//׷��һ��li
ulObj.appendChild(ulObj.children[0].cloneNode(true));
ulObj.appendChild(ulObj.children[1].cloneNode(true));
ulObj.appendChild(ulObj.children[2].cloneNode(true));
ulObj.appendChild(ulObj.children[3].cloneNode(true));
ulObj.appendChild(ulObj.children[4].cloneNode(true));
//�Զ�����
var timeId=setInterval(clickHandle,1000);
//������boxֹͣ����
my$("box").onmouseover=function(){
  clearInterval(timeId);
};
my$("box").onmouseout=function(){
    timeId=setInterval(clickHandle,1000);
};
//Ϊ���㰴ťע�����¼�
my$("right").onclick = clickHandle;
function clickHandle() {
    if (index == list2.length - 5) {
        index = 0;
        ulObj.style.left = 0 + "px";//��ul��λ�û�ԭ�ɿ�ʼ��Ĭ��λ��
    }
    index++;
    animate1(ulObj, -index * 204)
};





