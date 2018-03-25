
window.onload = function () {

        var closeJoin = document.getElementById("closes_join");
        var close_login = document.getElementById("closes_login");
        var join = document.getElementById("join");
        var login = document.getElementById("login");
        var box_join = document.getElementById("boxx_join");
        var mask = document.getElementById("maskk");
        var box_login = document.getElementById("boxx_login");

        join.onclick = function () {
            box_join.style.display = 'block';
            mask.style.display = "block";
        };
        closeJoin.onclick = function () {
            box_join.style.display = "none";
            mask.style.display = "none";
        };
        login.onclick = function () {
            box_login.style.display = 'block';
            mask.style.display = "block";
        };
        close_login.onclick = function () {
            box_login.style.display = "none";
            mask.style.display = "none";
        };


        var slider = document.getElementById("slider");
        var arrower = document.getElementById("arrower");

        slider.onmouseover = function () {
            arrower.style.display = "block";
        };
        slider.onmouseout = function () {
            arrower.style.display = "none";
        };


        var close = document.getElementById("close_banner");
        var banner = document.getElementById("top_banner");

        close.onclick = function () {
            banner.style.display = "none";
        };


        var th1 = document.getElementById("th1");
        var th2 = document.getElementById("th2");
        var th3 = document.getElementById("th3");
        var th4 = document.getElementById("th4");
        var th5 = document.getElementById("th5");
        var th6 = document.getElementById("th6");
        var pic = document.getElementById("pic");
        var _new_pic = 1;

        th1.onmouseover = function () {
            th1.style.backgroundColor = "#B61B1F";
            _new_pic = 1;
            th2.style.backgroundColor = "#3E3E3E";
            th3.style.backgroundColor = "#3E3E3E";
            th4.style.backgroundColor = "#3E3E3E";
            th5.style.backgroundColor = "#3E3E3E";
            th6.style.backgroundColor = "#3E3E3E";
            pic.src = "images/11.jpg"
        };
        th2.onmouseover = function () {
            th2.style.backgroundColor = "#B61B1F";
            _new_pic = 2;
            th1.style.backgroundColor = "#3E3E3E";
            th3.style.backgroundColor = "#3E3E3E";
            th4.style.backgroundColor = "#3E3E3E";
            th5.style.backgroundColor = "#3E3E3E";
            th6.style.backgroundColor = "#3E3E3E";
            pic.src = "images/22.jpg"
        };
        th3.onmouseover = function () {
            th3.style.backgroundColor = "#B61B1F";
            _new_pic = 3;
            th2.style.backgroundColor = "#3E3E3E";
            th1.style.backgroundColor = "#3E3E3E";
            th4.style.backgroundColor = "#3E3E3E";
            th5.style.backgroundColor = "#3E3E3E";
            th6.style.backgroundColor = "#3E3E3E";
            pic.src = "images/33.jpg"
        };
        th4.onmouseover = function () {
            th4.style.backgroundColor = "#B61B1F";
            _new_pic = 4;
            th2.style.backgroundColor = "#3E3E3E";
            th3.style.backgroundColor = "#3E3E3E";
            th1.style.backgroundColor = "#3E3E3E";
            th5.style.backgroundColor = "#3E3E3E";
            th6.style.backgroundColor = "#3E3E3E";
            pic.src = "images/44.jpg"
        };
        th5.onmouseover = function () {
            th5.style.backgroundColor = "#B61B1F";
            _new_pic = 5;
            th2.style.backgroundColor = "#3E3E3E";
            th3.style.backgroundColor = "#3E3E3E";
            th4.style.backgroundColor = "#3E3E3E";
            th1.style.backgroundColor = "#3E3E3E";
            th6.style.backgroundColor = "#3E3E3E";
            pic.src = "images/55.jpg"
        };
        th6.onmouseover = function () {
            th6.style.backgroundColor = "#B61B1F";
            _new_pic = 6;
            th2.style.backgroundColor = "#3E3E3E";
            th3.style.backgroundColor = "#3E3E3E";
            th4.style.backgroundColor = "#3E3E3E";
            th5.style.backgroundColor = "#3E3E3E";
            th1.style.backgroundColor = "#3E3E3E";
            pic.src = "images/66.jpg";
        };

        var arrow_left = document.getElementById("arrow-left");
        var arrow_right = document.getElementById("arrow-right");

        /*当鼠标点击事件监听到的话那么1.改背景图 2.改红点*/
        /*left点击*/
        arrow_left.onclick = function () {
            if(_new_pic === 1){
                pic.src = "images/66.jpg";
                th6.style.backgroundColor = "#B61B1F";
                th1.style.backgroundColor = "#3E3E3E";
                _new_pic = 6;
            }else if(_new_pic === 2){
                pic.src = "images/11.jpg";
                th1.style.backgroundColor = "#B61B1F";
                th2.style.backgroundColor = "#3E3E3E";
                _new_pic = 1;
            }else if(_new_pic === 3){
                pic.src = "images/22.jpg";
                th2.style.backgroundColor = "#B61B1F";
                th3.style.backgroundColor = "#3E3E3E";
                _new_pic = 2;
            }else if(_new_pic === 4){
                pic.src = "images/33.jpg";
                th3.style.backgroundColor = "#B61B1F";
                th4.style.backgroundColor = "#3E3E3E";
                _new_pic = 3;
            }else if(_new_pic === 5){
                pic.src = "images/44.jpg";
                th4.style.backgroundColor = "#B61B1F";
                th5.style.backgroundColor = "#3E3E3E";
                _new_pic = 4;
            }else if(_new_pic === 6){
                pic.src = "images/55.jpg";
                th5.style.backgroundColor = "#B61B1F";
                th6.style.backgroundColor = "#3E3E3E";
                _new_pic = 5;
            }
        };
        /*left点击结束*/
        /*right点击*/
        arrow_right.onclick = function () {
            if(_new_pic === 1){
                pic.src = "images/22.jpg";
                th2.style.backgroundColor = "#B61B1F";
                th1.style.backgroundColor = "#3E3E3E";
                _new_pic = 2;
            }else if(_new_pic === 2){
                pic.src = "images/33.jpg";
                th3.style.backgroundColor = "#B61B1F";
                th2.style.backgroundColor = "#3E3E3E";
                _new_pic = 3;
            }else if(_new_pic === 3){
                pic.src = "images/44.jpg";
                th4.style.backgroundColor = "#B61B1F";
                th3.style.backgroundColor = "#3E3E3E";
                _new_pic = 4;
            }else if(_new_pic === 4){
                pic.src = "images/55.jpg";
                th5.style.backgroundColor = "#B61B1F";
                th4.style.backgroundColor = "#3E3E3E";
                _new_pic = 5;
            }else if(_new_pic === 5){
                pic.src = "images/66.jpg";
                th6.style.backgroundColor = "#B61B1F";
                th5.style.backgroundColor = "#3E3E3E";
                _new_pic = 6;
            }else if(_new_pic === 6){
                pic.src = "images/11.jpg";
                th1.style.backgroundColor = "#B61B1F";
                th6.style.backgroundColor = "#3E3E3E";
                _new_pic = 1;
            }
        };
        /*right点击结束*/
};

