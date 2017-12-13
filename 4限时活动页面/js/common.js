/**
 * Created by Administrator on 2017-09-16.
 */

//格式化后的指定格式的日期和时间---封装一个函数

/**
 * 获取指定格式的时间
 * @param dt 日期的对象
 * @returns {string} 返回的是字符串的日期时间
 */
function getDate(dt) {
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //获取日
    var day = dt.getDate();
    //获取小时
    var hour = dt.getHours();
    //获取分钟
    var minute = dt.getMinutes();
    //获取秒
    var second = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return year + "年" + month + "月" + day + "日 " + hour + ":" + minute + ":" + second;
}

//通过ID获取某个元素
function my$(id) {
    return document.getElementById(id);
}


//设置任意的标签中间的任意文本内容
function setInnerText(element, text) {
    //判断浏览器是否支持这个属性
    if (typeof element.textContent == "undefined") {//不支持
        element.innerText = text;
    } else {//支持这个属性
        element.textContent = text;
    }
}

//获取任意标签中间的文本内容
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

//获取任意一个父级元素的第一个子级元素
function getFirstElementChild(element) {
    if (element.firstElementChild) {//true--->支持
        return element.firstElementChild;
    } else {
        var node = element.firstChild;//第一个节点
        //当兼容该属性时,判断该节点是否为标签,向下一个节点逐个找到标签
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//获取任意一个父级元素的最后一个子级元素
function getLastElementChild(element) {
    if (element.lastElementChild) {//true--->支持
        return element.lastElementChild;
    } else {
        var node = element.lastChild;//最后一个节点
        while (node && node.nodeType != 1) {
            //当兼容该属性时,判断该节点是否为标签,向上一个节点逐个找到标签
            node = node.previousSibling;
        }
        return node;
    }
}

//获取任意一个子元素的上一个兄弟元素
function getPreviousElementSibling(element) {
    if (element.previousElementSibling) {//true--->支持
        return element.previousElementSibling;//返回值为整个元素
    } else {
        element = element.previousSibling;//该元素的上一个兄弟元素
        //判断该元素是否为标签,逐个节点向上寻找标签
        while (element && element.nodeType != 1) {
            element = element.previousSibling;
        }
        return element;
    }
}

//获取任意一个子元素的下一个兄弟元素
function getNextElementSibling(element) {
    if (element.nextElementSibling) {//true--->支持
        return element.nextElementSibling;
    } else {
        element = element.nextSibling;
        while (element && element.nodeType != 1) {
            element = element.nextSibling;
        }
        return element;
    }
}

/**
 * 获取某个元素的所有兄弟元素
 * @param element 某个元素
 * @returns {Array} 兄弟元素
 */
function getSiblings(element) {
    if (!element) return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}

//为任意元素.绑定任意的事件, 任意的元素,事件的类型,事件处理函数
function addEventListener(element, type, fn) {
    //判断浏览器是否支持这个方法
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }
}

//兼容代码:为任意元素.解除绑定任意的事件,要解绑的元素,事件类型,事件处理函数的函数名
//绑定的函数必须是命名函数
function removeEventListener(element, type, fnName) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}

/**
 * 返回当前浏览器是什么类型的浏览器
 */
function userBrowser() {
    var browserName = navigator.userAgent.toLowerCase();
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        console.log("IE");
    } else if (/firefox/i.test(browserName)) {
        console.log("Firefox");
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        console.log("Chrome");
    } else if (/opera/i.test(browserName)) {
        console.log("Opera");
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        console.log("Safari");
    } else {
        console.log("不知道什么鬼!");
    }
}

/*
*
*  终极版本的动画函数---有bug
*
* */
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
        // console.log("target:"+target+"current:"+current+"step:"+step);
    }, 10);
}

//把代码放到一个对象中,(图片跟着鼠标走兼容)
var evt = {
    //window.event和事件参数对象e的兼容
    getEvent: function (evt) {
        return window.event || evt;
    },
    //可视区域的横坐标兼容代码
    getClientX: function (evt) {
        return this.getEvent(evt).clientX
    },
    //可视区域的纵坐标兼容代码
    getClientY: function (evt) {
        return this.getEvent(evt).clientY
    },
    //页面向左卷曲出去的横坐标
    getScrollLeft: function () {
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    },
    //页面向上卷曲出去的纵坐标
    getScrollTop: function () {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    },
    //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
    getPageX: function (evt) {
        return this.getEvent(evt).pageX ? this.getEvent(evt).pageX : this.getClientX(evt) + this.getScrollLeft();
    },
    //相对于页面的纵坐标(pageX或者是clientX+scrollLeft)
    getPageY: function (evt) {
        return this.getEvent(evt).pageY ? this.getEvent(evt).pageY : this.getClientY(evt) + this.getScrollTop();
    }
};