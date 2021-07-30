var _hmt = _hmt || [];
(function() {
    //百度统计
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?11740b0dd7ace43f2845ac346a0b50ef";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    //百度推送
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
    //cnzz统计
    setTimeout(function() {
        var cnzz = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        cnzz.src = 'https://v1.cnzz.com/z_stat.php?id=1280004378&web_id=1280004378';
        var cnzzs = document.getElementsByTagName("script")[0];
        cnzzs.parentNode.insertBefore(cnzz, cnzzs);
    }, 5000);
})();

function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
var isWeixin = is_weixin();
var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
function loadHtml(){
    var div = document.createElement('div');
    div.id = 'weixin-tip';
    div.innerHTML = '<p><img src="https://wxvideo.ilvtian.com/static/images/live_weixin.png" alt="微信打开"/></p>';
    document.body.appendChild(div);
}

function loadStyleText(cssText) {
    var style = document.createElement('style');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    try {
        style.appendChild(document.createTextNode(cssText));
    } catch (e) {
        style.styleSheet.cssText = cssText;
    }
    var head=document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}";
if(isWeixin){
    loadHtml();
    loadStyleText(cssText);
}