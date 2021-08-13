var _hmt = _hmt || [];
(function() {
    //判断访问终端
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1,                            //IE内核
                presto: u.indexOf('Presto') > -1,                              //opera内核
                webKit: u.indexOf('AppleWebKit') > -1,                         //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,    //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),                    //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),               //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1,                              //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1,                                  //是否iPad
                webApp: u.indexOf('Safari') == -1,                             //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1,                      //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq"                                  //是否QQ
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
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
    //添加右边图片
    var m_bt = document.createElement("script");
    m_bt.src = "https://tj.lvtian.vip/right_lvtian_vip.js";
    var s_bt = document.getElementsByTagName("script")[0];
    s_bt.parentNode.insertBefore(m_bt, s_bt);
})();