/**
 * Created by Administrator on 2017/10/7.
 */
//获取北京div
var bj = my$("bj");
var ad = document.getElementsByClassName("ad")[0];
var dt = bj.getElementsByTagName("dt")[0];
var d1 = document.getElementsByClassName("d1")[0];
var d2 = document.getElementsByClassName("d2")[0];
var d3 = document.getElementsByClassName("d3")[0];
window.onload= function () {
    dt.onclick = function () {
        this.style.backgroundColor="#fff";
        this.style.color="black";
        d1.style.backgroundColor=""
        d1.className = "d1";
        d2.className = "d2";
        d3.className = "d3";
        window.event.cancelable=true;
    };
    ad.onclick= function () {
        dt.style.backgroundColor="";
        dt.style.color="";
        d1.className = "d1 displayNone";
        d2.className = "d2 displayNone";
        d3.className = "d3 displayNone";
    };

//获取导航中的ul
    var ulTopObj = my$("top_ul");
    var liObjs = ulTopObj.getElementsByTagName("li");
    var spans = ulTopObj.getElementsByTagName("span");
    for (var i = 0; i < liObjs.length - 1; i++) {
        liObjs[i].setAttribute("index", i);
        liObjs[i].onmouseover = function () {
            for (var j = 0; j < liObjs.length - 1; j++) {
                for (var k = 0; k < spans.length - 1; k++) {
                    spans[k].className = "displayNone";
                }
                liObjs[j].style.borderBottom = "";
            }
            var index = this.getAttribute("index");
            spans[index].className = "displayBlock";
            this.style.borderBottom = "2px solid #fff";
        };
    }

//获取map3的ul
    var ulObj = my$("uu");
    var list = ulObj.getElementsByTagName("li");
    for (var i = 1; i < list.length; i++) {
        list[i].onmouseover = function () {
            for (var j = 1; j < list.length; j++) {
                list[j].style.backgroundColor = "#fff";
            }
            this.style.backgroundColor = "#b08746";
        };
        list[i].onmouseout = function () {
            this.style.backgroundColor = "#fff";
        };
    }
};
