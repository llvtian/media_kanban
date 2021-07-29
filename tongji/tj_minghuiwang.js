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