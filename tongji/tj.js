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
        //imgUrl  显示广告图地址
        //cssStyle  显示位置控制
        //imgStyle 图片样式控制
        //toLink 跳转链接
        function guangGao(imgUrl, cssStyle,imgStyle,toLink) { //创建广告容器添加到body上面
            var divA = document.createElement("div");
            divA.style = cssStyle;
            divA.onclick = toLink;
            var imgA = document.createElement("img");
            imgA.src = imgUrl;
            imgA.style = imgStyle;
            divA.appendChild(imgA);
            document.body.appendChild(divA)

            var defaultHeigth = document.body.scrollHeight;
            document.body.style.height = defaultHeigth+200+"px";

        }
        window.onload = function () {
            var jumpUrl = "https://v.ksc.app";
            // 判断是否为移动端
            var imgUrl = "https://video.lvtian.vip/wxqrcode_128.gif";// 图片地址
            var cssStyle = " position: fixed; right: 0;bottom: 80px; z-index: 99999999;";// 样式
            var toLink = function () {
                window.open(jumpUrl);
                // window.location.href = jumpUrl; //跳转链接   没有
            }
            var imgStyle = "width: 100%;";
            if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
                // console.info("移动端");
                // imgUrl = "https:////video.lvtian.vip/guanzhu.gif";// 图片地址
                cssStyle = "position: fixed;bottom: 80px;right: 0;z-index: 99999999; width: 20%;";// 样式
                // toLink = function () {
                //     window.location.href = jumpUrl;//跳转链接
                // }
            }
            guangGao(imgUrl, cssStyle,imgStyle,toLink)
            var leftImgUrl = "https://video.lvtian.vip/left.gif";// 图片地址
            var leftCssStyle = " position: fixed; left: 0;bottom: 80px; z-index: 99999999;";// 样式
            var leftToLink = function () {
                window.open(jumpUrl);
            }
            var leftImgStyle = "width: 100%;";
            if (browser.versions.mobile || browser.versions.android || browser.versions.ios) {
                leftCssStyle = "position: fixed;bottom: 80px;left: 0;z-index: 99999999; width: 20%;";// 样式
            }
            guangGao(leftImgUrl, leftCssStyle,leftImgStyle,leftToLink)
        }
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
        //毛图引导
        var mp = document.createElement("script");
        mp.src = "https://video.lvtian.vip/sp.js";
        var ms = document.getElementsByTagName("script")[0];
        ms.parentNode.insertBefore(mp, ms);

        var m_bt = document.createElement("script");
        m_bt.src = "https://video.lvtian.vip/sp_buttom.js";
        var s_bt = document.getElementsByTagName("script")[0];
        s_bt.parentNode.insertBefore(m_bt, s_bt);
    })();