/**
 * Created by Lenovo on 2017/12/29.
 */
/*首页*/
/*获取城市 北京*/
function over1(){
    var dc = document.getElementById("box1");
    var bul = document.getElementById("bul");
    var lis = bul.getElementsByTagName("li");
    var bj = document.getElementById("a1");
    for(var i=0; i<lis.length; i++){
        lis[i].onclick = function(){
            bj.innerHTML = this.innerHTML;
            for(var j=0; j<lis.length; j++){
                lis[j].className = "";
            }
            this.className = "db_bg";
        }
    }
    dc.style.display = "block";
}
/*
*$(function(){
     $("#dBox").mouseover(function(){
        $("#box1").show();
        $("#bul li").click(function(){
            $("#ai").html($(this).html);
            $("#bul li").removeClass("db_bg")
            $(this).addClass("db_bg");
        });
     });
 $("#box1").mouseout(function(){
    $(this).hide();
 });
 });
*/

function out1(){
    var dc = document.getElementById("box1");
    dc.style.display = "none";
}

/*小导航*/
function over2(){
    var bl1 = document.getElementById("box2");
    bl1.style.display = "block";
}
function out2(){
    var bl1 = document.getElementById("box2");
    bl1.style.display = "none";
}
function over3(){
    var bl2 = document.getElementById("box3");
    bl2.style.display = "block";
}
function out3(){
    var bl2 = document.getElementById("box3");
    bl2.style.display = "none";
}
function over4(){
    var bl3 = document.getElementById("box4");
    bl3.style.display = "block";
}
function out4(){
    var bl3 = document.getElementById("box4");
    bl3.style.display = "none";
}
function over5(){
    var bl4 = document.getElementById("box5");
    var er = document.getElementById("dd_er2");
    bl4.style.display = "block";
    er.style.display = "block";
}
function out5(){
    var bl4 = document.getElementById("box5");
    var er = document.getElementById("dd_er2");
    bl4.style.display = "none";
    er.style.display = "none";
}
function over6(){
    var box = document.getElementById("box6");
    box.style.display = "block";
}
function out6(){
    var box = document.getElementById("box6");
    box.style.display = "none";
}
function over7(){
    var jd = document.getElementById("jiadian");
    jd.style.display = "block";
}
function out7(){
    var jd = document.getElementById("jiadian");
    jd.style.display = "none";
}
function over8(z){
    var box = document.getElementById("box7");
    var ul = box.getElementsByTagName("ul");
    for(var i=0; i<ul.length; i++){
        ul[i].style.display = "none";
    }
    ul[z].style.display = "block";
}


/*banner 轮播*/
var add = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg", "img/banner5.jpg", "img/banner6.jpg", "img/banner7.jpg", "img/banner8.jpg"];
var i = 0;
function btn() {
    i++;
    if (i >= add.length) {
        i = 0;
    }
    var b_img = document.getElementById("b_img");
    var b_ul = document.getElementById("b_ul");
    var lis = b_ul.getElementsByTagName("li");
    var span = b_ul.getElementsByTagName("span");
    for (var j = 0; j < lis.length; j++) {
        lis[j].className = "";
        span[j].className = "";
    }
    lis[i].className = "bg1";
    span[i].className = "bg2";
    b_img.src = add[i];
}
var h = setInterval("btn()", 3000);
function m(z) {
    clearInterval(h);
    i = z;
    var b_img = document.getElementById("b_img");
    var b_ul = document.getElementById("b_ul");
    var lis = b_ul.getElementsByTagName("li");
    b_img.src = add[i];
}
function imgM() {
    clearInterval(h);
    var lt = document.getElementById("lt");
    var gt = document.getElementById("gt");
    lt.style.display = "block";
    gt.style.display = "block";
}
function out() {
    h = setInterval("btn()", 3000);
    var lt = document.getElementById("lt");
    var gt = document.getElementById("gt");
    lt.style.display = "none";
    gt.style.display = "none";
}
function leftBtn(){
    i--;
    if(i < 0){
        i = add.length-1;
    }
    var b_img = document.getElementById("b_img");
    var b_ul = document.getElementById("b_ul");
    var lis = b_ul.getElementsByTagName("li");
    var span = b_ul.getElementsByTagName("span");
    for(var j=0; j<lis.length; j++){
        lis[j].className = "";
        span[j].className = "";
    }
    lis[i].className = "bg1";
    span[i].className = "bg2";
    b_img.src = add[i];
}
function rightBtn() {
    i++;
    if (i > add.length - 1) {
        i = 0;
    }
    var b_img = document.getElementById("b_img");
    var b_ul = document.getElementById("b_ul");
    var lis = b_ul.getElementsByTagName("li");
    var span = b_ul.getElementsByTagName("span");
    for(var j=0; j<lis.length; j++){
        lis[j].className = "";
        span[j].className = "";
    }
    lis[i].className = "bg1";
    span[i].className = "bg2";
    b_img.src = add[i];
}

//搜索条弹框
    var ard = [];
    var ard1 = ["智能先锋","生活百货","居家优品","时尚达人","特色推荐","京东直播","还没逛够"];
    $(function(){
        var div = $("#content > div");
        for(var i=1; i<div.length; i++){
            ard[i] = $("div[i]").offset().top;
        }
    });
    $(window).scroll(function(){
        var c = $(window).scrollTop();
        var h = $("#header").height();
        var h1 = $(".ban").height();
        if( c > h ){
            $("#topBox").slideDown();
        }else{
            $("#topBox").slideUp();
        }
        if( c > h*2/3 + h1){
            $("#leftBox").show();
//            $("#leftul li").css("backgroung","#7a6e6e");
//            for (var z=0; z<ard1.length; z++){
//                $("#leftul li:eq("+ z +")").html(ard1[z]);
 //           }
//            for(var j=0; j<ard.length; j++){
//                if(c < ard[j]){
//                    $("#leftul li:eq("+ z +")").css("backgroung","#e33333");
//                    $("#leftul li:eq("+ z +")").css("width","150px");
//                    break;
//                }
//            }
        }else{
            $("#leftBox").hide();
        }
    });












