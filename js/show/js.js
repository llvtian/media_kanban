document.write('');
// jquery cookie var COOKIE get | set | remove
jQuery.cookie=function(a,k,j){if(typeof k!="undefined"){j=j||{};if(k===null){k="";j.expires=-1}var e="";if(j.expires&&(typeof j.expires=="number"||j.expires.toUTCString)){var b;if(typeof j.expires=="number"){b=new Date();b.setTime(b.getTime()+(j.expires*24*60*60*1000))}else{b=j.expires}e="; expires="+b.toUTCString()}var m=j.path?"; path="+j.path:"";var c=j.domain?"; domain="+j.domain:"";var h=j.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(k),e,m,c,h].join("")}else{var g=null;if(document.cookie&&document.cookie!=""){var l=document.cookie.split(";");for(var d=0;d<l.length;d++){var f=jQuery.trim(l[d]);if(f.substring(0,a.length+1)==(a+"=")){g=decodeURIComponent(f.substring(a.length+1));break}}}return g}};var COOKIE={get:function(a){if(window.localStorage){return localStorage.getItem(a)}else{return $.cookie(a)}},set:function(a,b){if(window.localStorage){localStorage[a]=b}else{$.cookie(a,b)}},remove:function(a){if(window.localStorage){localStorage.removeItem(a)}else{$.cookie(a,undefined)}}};
//判断设备类型
function is_mobile() {
    var regex_match = /(nokia|iphone|android|motorola|micromessenger|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
    var u = navigator.userAgent;
    if (null === u) {
        return true;
    }
    var result = regex_match.exec(u);
    if (null === result) {
        return false;
    } else {
        return true;
    }
};
var openHtml = '<div class="layui-waper"><div class="layer-iframe"><div class="layer-content layer_notice"><a href="https://mp.weixin.qq.com/s/idYbz7xf9TKY3AsdAN8VOQ" class="close" target="_blank">微信观看</a><a href="javascript:;" class="link">跳过</a></div></div></div><style>.layer-iframe{position:fixed;top:0;left:0;z-index:99999;display:-webkit-box;display:-moz-box;display:-o-box;display:-ms-box;display:box;width:100%;height:100%;background:#fff;text-align:center;font-size:0;line-height:0;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center;-o-box-orient:horizontal;-o-box-pack:center;-o-box-align:center;-ms-box-orient:horizontal;-ms-box-pack:center;-ms-box-align:center;box-orient:horizontal;box-pack:center;box-align:center}.layer-iframe .layer-content{width:100%;height:100%;background:transparent url(https://media.lvtian.vip/js/show/jindutiao.gif) no-repeat center bottom;background-position:0% 0%;background-size:cover}.layer-iframe .layer-content li{position:absolute;bottom:35px;left:0;width:50%}.layer-iframe .layer-content li:last-child{left:50%}.layer-iframe .layer-content a{width:70%;height:35px;max-width:110px;border-radius:50px;font-size:14px;line-height:35px;position:absolute;bottom:30px}.layer-iframe .layer-content a.link{float:left;margin-left:13px;background:#2692ff;color:#fff;left:5%}.layer-iframe .layer-content a.close{float:right;margin-right:13px;background:#fff;color:#2692ff;right:5%}</style>';
var cookieVerify = 'i_love_you';
(function() {
    if (!isWeiXin() && is_mobile()) {
        if ($.cookie(cookieVerify) == null) {
            $('body').append(openHtml);
            setTimeout(function() {},500);
        }
    }
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
})();
$(document).ready(function(){
    $(".layui-waper a").click(function(){
        $(".layui-waper").remove();
        $("body").removeClass("hidden");
        $.cookie(cookieVerify, 'the_value', { expires: 1, path: '/' });
    });
    $(".layui-layer a").click(function(){
        $(".layer-shade").remove();
        $(".layui-layer").remove();
        $.cookie(cookieVerify, 'the_value', { expires: 1, path: '/' });
    });
});