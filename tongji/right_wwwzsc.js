var sjdb_closebtn = 1;
var sjdb_logobtn = 0;

var sjdb_img_all = "https://cdn.jsdelivr.net/gh/llvtian/media_kanban@main/tongji/zscright.png";
var sjdb_img_all_jsifr = "";
var sjdb_link_all = "https://media.lvtian.vip/guanzhu.html?";
var sjdb_adwidth = 640;
var sjdb_adheight = 200;
var sjdb_sysurl = "https://cdn.jsdelivr.net/gh/llvtian/media_kanban@main/tongji/";
var sjdb_sysclickurl = sjdb_link_all;
var sjdb_userid = 172;
var sjdb_visittotal=1;
var sjdb_clickurl_2= sjdb_link_all;


var mysplit = sjdb_img_all.split(',');
var adtotal = mysplit.length;
var currshow = sjdb_visittotal % adtotal;
var sjdb_imgpath = mysplit[currshow];

mysplit = sjdb_link_all.split(',');
adtotal = mysplit.length;
currshow = sjdb_visittotal % adtotal;
var sjdb_adurl = sjdb_clickurl_2 + escape(mysplit[currshow]);


var sjdb_id=Math.floor(Math.random()*100000);
var sjdb_str='';
var sjdb_closestr='';
var sjdb_logostr='';


if(sjdb_closebtn==1){sjdb_closestr='<img id="sjdb_closeimg_' + sjdb_id + '" onclick="sjdb_close(this)" src="' + sjdb_sysurl + 'close.jpg" alt="close" style="cursor:hand;position:absolute;right:0px;top:0px;z-index:2147483647;visibility:visible;">';}

if(sjdb_logobtn==1){sjdb_logostr='<a href="' + sjdb_sysclickurl + '?userid=' + sjdb_userid + '" target="_blank"><img  onMouseOver=\'sjdb_largelogo(this)\' onMouseOut=\'sjdb_smalllogo(this)\'  src="' + sjdb_sysurl + 'close.jpg" style="cursor:hand;position:absolute;right:0px;bottom:0px;z-index:2147483647;border:0px;visibility:visible;width:27px;height:18px;"></a>';}

sjdb_str+=sjdb_closestr+sjdb_logostr;

if(sjdb_img_all_jsifr.length>0){
    sjdb_str+=sjdb_img_all_jsifr;
}else{
    if(sjdb_imgpath.toLowerCase().indexOf('.swf')>0){
        sjdb_str+='<div style="position: absolute;top:0px;left:0px;margin:0px;padding:0px;z-index:2147483646;"><a href="' + sjdb_adurl + '" target="_blank" onClick=\'sjdb_click(this)\'><img src="' + sjdb_sysurl + 'close.jpg" border=0 width="' + screen.availWidth + '" height="' + sjdb_adheight + '" id="sjdb_img_'+sjdb_id+'"></a></div>';
        sjdb_str+='<embed src="'+sjdb_imgpath+'" width="' + sjdb_adwidth + '" height="' + sjdb_adheight + '">';
        sjdb_str+='</div>';
    }else{
        sjdb_str+='<a href="' + sjdb_adurl + '" target="_blank" onClick=\'sjdb_click(this)\'><img src="' + sjdb_imgpath + '" style="width:100%;height:auto;z-index:2147483647;border:0px" id="sjdb_img_'+sjdb_id+'" referrerpolicy="no-referrer"></a>';
    }
}


var cfua = navigator.userAgent.toLowerCase();
var sjdb_w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
var sjdb_h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
var sjdb_divwidth="";
var sjdb_leftpx="0px";

if(/android|webos|iphone|ipod|ipad/i.test(cfua)) {
    // sjdb_divwidth="100%";
    sjdb_divwidth="30%";
}else{
    sjdb_divwidth="20%";
    // sjdb_divwidth=sjdb_adwidth+"px";
    // if(sjdb_adwidth>sjdb_w){sjdb_leftpx="0px";}else{sjdb_leftpx=((sjdb_w - sjdb_adwidth) / 2)+"px";}
}

var sjdb_div = document.createElement("div");
sjdb_div.id = "sjdb_div_"+sjdb_id;


if (cfua.indexOf('baiduboxapp')==-1){
    // sjdb_div.style.cssText = "position:fixed;bottom:0px;z-index:2147483647;left:"+sjdb_leftpx+";width:"+sjdb_divwidth+";text-align:center;";
    sjdb_div.style.cssText = "position:fixed;bottom:100px;z-index:2147483647;right:"+sjdb_leftpx+";width:"+sjdb_divwidth+";text-align:center;";
    sjdb_div.innerHTML = sjdb_str;
    document.body.appendChild(sjdb_div);

    document.getElementById("sjdb_img_"+sjdb_id).onload=function(){
        document.body.style.paddingBottom = document.getElementById(sjdb_div.id).offsetHeight+"px";
    }
}else{
    sjdb_div.style.cssText = "position:absolute;z-index:2147483647;left:"+sjdb_leftpx+";width:"+sjdb_divwidth+";text-align:center;";
    sjdb_div.innerHTML = sjdb_closestr+sjdb_logostr+'<a href="' + sjdb_adurl + '" target="_blank" onClick=\'sjdb_click(this)\' style="display:block;width:100%;height:'+sjdb_adheight+'px;z-index:2147483647;border:0px"></a>';
    sjdb_div.style.backgroundImage = "url('" + sjdb_imgpath + "')";
    sjdb_div.style.backgroundSize = "100% 100%";
    sjdb_div.style.backgroundPosition = "center";
    sjdb_div.style.height=sjdb_adheight+"px";
    document.body.style.paddingBottom = sjdb_adheight+"px";

    document.body.appendChild(sjdb_div);

    var myTimer = function (callback) {
        var cfst = document.body.scrollTop || document.documentElement.scrollTop;
        sjdb_div.style.display = 'inline';
        sjdb_div.style.top = cfst + sjdb_h - sjdb_div.offsetHeight + 'px';

        setInterval(function () {
            if(cfst<(document.body.scrollTop || document.documentElement.scrollTop)){
                sjdb_div.style.top = cfst + sjdb_h - sjdb_div.offsetHeight + 'px';
            }else if(cfst>(document.body.scrollTop || document.documentElement.scrollTop)){
                sjdb_div.style.top = cfst + sjdb_h - sjdb_div.offsetHeight - 50 + 'px';
            }

            cfst=document.body.scrollTop || document.documentElement.scrollTop;

            callback(cfst);
        }, 50);
    };

    myTimer(function (val){});
}

function sjdb_click(obj){
    if(obj.href.indexOf("MouseTop")==-1){obj.href= obj.href+'&MouseTop='+event.clientY+'&MouseLeft='+event.clientX;}
}

function sjdb_largelogo(obj){
    obj.src=sjdb_sysurl + 'images/adlogo_large.png';
    obj.style.width='78px';
}
function sjdb_smalllogo(obj){
    obj.src=sjdb_sysurl + 'images/adlogo_small.png';
    obj.style.width='27px';
}

function sjdb_close(obj){
    if (sjdb_div) sjdb_div.style.display='none';
    document.body.style.paddingBottom="0px";
}


var head = document.getElementsByTagName("head")[0];
var style = document.createElement("style");
var css = " .__cf_animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.__cf_animated.__cf_infinite{-webkit-animation-iteration-count:1;animation-iteration-count:1}.__cf_animated.__cf_hinge{-webkit-animation-duration:2s;animation-duration:2s}@-webkit-keyframes cf_a_bounce{0%,100%,20%,50%,80%{-webkit-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-30px);transform:translateY(-30px)}60%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}}@-webkit-keyframes cf_a_flash{0%,100%,50%{opacity:1}25%,75%{opacity:0}}@-webkit-keyframes cf_a_pulse{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes cf_a_rubberBand{0%{-webkit-transform:scale(1);transform:scale(1)}30%{-webkit-transform:scaleX(1.25)scaleY(0.75);transform:scaleX(1.25)scaleY(0.75)}40%{-webkit-transform:scaleX(0.75)scaleY(1.25);transform:scaleX(0.75)scaleY(1.25)}60%{-webkit-transform:scaleX(1.15)scaleY(0.85);transform:scaleX(1.15)scaleY(0.85)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes cf_a_shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}@-webkit-keyframes cf_a_swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes cf_a_tada{0%{-webkit-transform:scale(1);transform:scale(1)}10%,20%{-webkit-transform:scale(0.9)rotate(-3deg);transform:scale(0.9)rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale(1.1)rotate(3deg);transform:scale(1.1)rotate(3deg)}40%,60%,80%{-webkit-transform:scale(1.1)rotate(-3deg);transform:scale(1.1)rotate(-3deg)}100%{-webkit-transform:scale(1)rotate(0);transform:scale(1)rotate(0)}}@-webkit-keyframes cf_a_wobble{0%{-webkit-transform:translateX(0%);transform:translateX(0%)}15%{-webkit-transform:translateX(-25%)rotate(-5deg);transform:translateX(-25%)rotate(-5deg)}30%{-webkit-transform:translateX(20%)rotate(3deg);transform:translateX(20%)rotate(3deg)}45%{-webkit-transform:translateX(-15%)rotate(-3deg);transform:translateX(-15%)rotate(-3deg)}60%{-webkit-transform:translateX(10%)rotate(2deg);transform:translateX(10%)rotate(2deg)}75%{-webkit-transform:translateX(-5%)rotate(-1deg);transform:translateX(-5%)rotate(-1deg)}100%{-webkit-transform:translateX(0%);transform:translateX(0%)}}@-webkit-keyframes cf_a_circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.__cf_bounce{-webkit-animation-name:cf_a_bounce;animation-name:cf_a_bounce}.__cf_flash{-webkit-animation-name:cf_a_flash;animation-name:cf_a_flash}.__cf_pulse{-webkit-animation-name:cf_a_pulse;animation-name:cf_a_pulse}.__cf_rubberBand{-webkit-animation-name:cf_a_rubberBand;animation-name:cf_a_rubberBand}.__cf_shake{-webkit-animation-name:cf_a_shake;animation-name:cf_a_shake}.__cf_swing{-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;-webkit-animation-name:cf_a_swing;animation-name:cf_a_swing}.__cf_tada{-webkit-animation-name:cf_a_tada;animation-name:cf_a_tada}.__cf_wobble{-webkit-animation-name:cf_a_wobble;animation-name:cf_a_wobble}.__cf_circle{animation:cf_a_circle 10s ease 0s infinite normal none running !important}";
style.type = "text/css";
if (style.styleSheet) {
    style.styleSheet.cssText = css
} else {
    style.appendChild(document.createTextNode(css))
}
head.appendChild(style);

var _cf_a_c_name_=[];
_cf_a_c_name_ = ["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble"];

var csname = "__cf_"+_cf_a_c_name_[Math.floor(Math.random()*_cf_a_c_name_.length)];
sjdb_div.className= csname +" __cf_animated __cf_infinite";

setInterval(function(){
    sjdb_div.className = " ";

    setTimeout(function(){
        sjdb_div.className =  csname +" __cf_animated __cf_infinite";
    }, 1000);

},5000);
