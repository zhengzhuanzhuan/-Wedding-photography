function my$(id){
    return document.getElementById(id);
}
(function(){
   var main=my$("main");
    var list =my$("list");
    var scroll =my$("scroll");
    var bar=my$("bar");
    //���ù������ĸ߶�
    var height = scroll.offsetHeight * main.offsetHeight / list.offsetHeight;
    bar.style.height = height + "px";
    //�ƶ�������
    bar.onmousedown = function (e) {
        //offsetTop�ǹ����������ҳ���������
        var spaceY = e.clientY - bar.offsetTop;//�̾���
        document.onmousemove = function (e) {//�ƶ��¼�
            var y = e.clientY - spaceY;
            y=y<0?0:y;//��Сֵ
            y=y>scroll.offsetHeight-bar.offsetHeight?scroll.offsetHeight-bar.offsetHeight:y;
            bar.style.top = y + "px";
            window.getSelection? window.getSelection().removeAllRanges():document.selection.empty();
            var moveY=y*(list.offsetHeight-main.offsetHeight)/(scroll.offsetHeight-bar.offsetHeight);
            //��������div���ƶ�����
            list.style.marginTop=-moveY+"px";
        };
    };
    document.onmouseup=function () {
        //���̧���ʱ��,���ƶ��¼��ɵ�
        document.onmousemove=null;
    };

}());
