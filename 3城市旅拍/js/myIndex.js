/**
 * Created by Administrator on 2017/9/29 0029.
 */

/*�ڵ���*/

//var mask = document.querySelector(".mask");
//var black = document.querySelector(".black");
//var uu=document.getElementById("uul");
//var lists=uu.children;
//console.log(lists);
//for(var i=0;i<lists.length;i++) {
//
//
//    lists[i].onmouseover = function () {
//        //��ǰ�������liû���ڵ���
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


/*�ֲ�ͼ*/

//
////��ȡ�������div
//var box = my$("box");
////��ȡ����div
//var screen = box.children[0];
////��ȡ���ĵĿ��
////var imgWidth=screen.offsetWidth;
////��ȡ���
//var ulObj = screen.children[0];
////��ȡli----��Ƭ
//var list = ulObj.children;
////��ȡarr
//var arr = document.getElementById("arr");
////��ȡspan
//
////��ȡ��ߵĽ���
//var left = document.getElementById("left");
////��ȡ�ұߵĽ���
//var right = document.getElementById("right");
//
//
////�Զ�����
//var timeId = setInterval(clickHandle, 1000);
////������������ʾ
//left.onmouseover = function () {
//    this.style.backgroundImage = "url(images/shang1.png)";
//    //�����������ʱ��
//    clearInterval(timeId);
//};
//left.onmouseout = function () {
//    this.style.backgroundImage = "url(images/shang.png)";
//    //����뿪�Զ�����
//    timeId = setInterval(clickHandle, 1000);
//};
//right.onmouseover = function () {
//    this.style.backgroundImage = "url(images/xia1.png)";
//    //�����������ʱ��
//    clearInterval(timeId);
//};
//right.onmouseout = function () {
//    this.style.backgroundImage = "url(images/xia.png)";
//    //����뿪�Զ�����
//    timeId = setInterval(clickHandle, 1000);
//};
////��¡
//ulObj.appendChild(list[0].cloneNode(true));
//ulObj.appendChild(list[1].cloneNode(true));
//ulObj.appendChild(list[2].cloneNode(true));
//ulObj.appendChild(list[3].cloneNode(true));
//ulObj.appendChild(list[4].cloneNode(true));
//
////�ұ߰�ť
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
////��߰�ť
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
////���������һ��Ԫ��,�ƶ���ָ����Ŀ��λ��
//function animate(element, target) {
//    clearInterval(element.timeId);
//    //��ʱ����idֵ�洢�������һ��������
//    element.timeId = setInterval(function () {
//        //��ȡԪ�صĵ�ǰ��λ��,��������
//        var current = element.offsetLeft;
//        //ÿ���ƶ��ľ���
//        var step = 10;
//        step = current < target ? step : -step;
//        //��ǰ�ƶ���λ��
//        current += step;
//        if (Math.abs(current - target) > Math.abs(step)) {
//            element.style.left = current + "px";
//        } else {
//            //����ʱ��
//            clearInterval(element.timeId);
//            //ֱ�ӵ���Ŀ��
//            element.style.left = target + "px";
//        }
//    }, 10);
//}
//
