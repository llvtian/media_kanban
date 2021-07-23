var cdn_url = "https://cdn.jsdelivr.net/gh/llvtian/media_kanban@main/player/";
//js写入视频内容
function writeFromUrl(){
    let c = "https://lvtianxinyuanqiniu.lvtian.vip/huhuigongxiangbanquan.mp4";
    let url = new URL(window.location.href);
    let openurl = url.searchParams.get("url");
    if (validURL(openurl) === true) c = openurl;
    // let c = "//cdn-cf-east.streamable.com/video/mp4/v0j9sa.mp4?Expires=1626292200&Signature=QRJLaIIXfnlFA8TUoHYRqy1DokYSO-CsnxvoIG0XmACzx2Bhm7Dn6-ebn6Nhe6V01bJFUPugMp3HENlXRDJeqLAkEiYc35fsYV82t7jE12g7rNpQWRs-uzp9fEyj4avoFD2dm4OpwyPrNV605nxTjJYySdPeA8fwurFmus-uD4LKnOu0Ug7kijXt0sI0BaiMGLshS7Oue~tGbAphOD0l~OeSFJlcCXwZMLJ1V96OQS7e4RC6pLAx6Rslver5rwReUZxgnE34CXzCpLwET0rbZ-C5YqR0zZSMw8qDO~RdTW-TAR4sTZcfv7LWPQV7Q8EMKyh3P0hP-eCosvxQeBfeVg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
    let type = videoTypeFromUrl(c);
    document.write(
        '<div style="width: 100%;height: 97%">\n' +
        '<video id="my-video">\n' +
        '<source data-fluid-hd  title="1080p" src="'+c+'"  type="'+type+'"/>\n' +
        '<source data-fluid-hd  title="720p" src="'+c+'"  type="'+type+'"/>\n' +
        '<source data-fluid-hd  title="480p" src="'+c+'"  type="'+type+'"/>\n' +
        '</video>\n' +
        '</div>'
    );
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

//获取视频type类型
function videoTypeFromUrl(url){
    let video = url.split(/[#?]/)[0].split('.').pop().trim();//获取后缀
    let videoType = "video/mp4";
    if (equalStr(video,'m3u8')){
        videoType = "application/x-mpegURL";
    }
    return videoType;
}
//判断是否相等
function equalStr(originalStr,definedStr){
    return originalStr == definedStr || originalStr === definedStr ? true : false;
}
writeFromUrl();
setTimeout(function() {
    var player = fluidPlayer(
        'my-video',
        {
            layoutControls: {
                primaryColor:           "#0cac41",//配置使用颜色
                // posterImage: 'https://lvtianxinyuanqiniu.lvtian.vip/huhuigongxiangxiaochengxu.gif',//视频封面海报
                playButtonShowing:      true,//播放按钮显示  没测试成功,不知道在哪
                playPauseAnimation:     true,//播放暂停动画 没测试成功,不知道在哪
                fillToContainer:        true,//视频填充到整个容器  width and height to 100%.
                autoPlay:               true,//自动播放 (video 中必须设置 muted  才可以播放,否则不生效,但是这个是静音设置)
                preload:                true,//预载  没测试成功
                mute:                   false,//静音模式 没测试成功
                doubleclickFullscreen:  true,//双击全屏
                subtitlesEnabled:       false,//启用字幕 右下角图标(不知如何写字幕)
                keyboardControl:        true,//键盘控制  貌似多个失效
                layout:                 'default',//布局 未测试
                allowDownload:          true,//允许下载视频
                playbackRateEnabled:    true,//播放率已启用(右下角图标)
                allowTheatre:           true,//允许剧院 没测试成功
                theatreAdvanced: {
                    //戏剧高级   没测试成功
                    theatreElement: 'container-id',
                    classToApply: 'my-theatre-class'
                },
                theatreSettings: {
                    //剧院设置  没测试成功
                    width:     '60%', // Default '100%'
                    height:    '400px', // Default '60%'
                    marginTop: 50, // Default 0
                    horizontalAlign:     'center' // 'left', 'right' or 'center'
                },
                title:                  '<i style="font-size: 6px;color:#8c3675"><font color="">脚踏实地修正果,欲走捷径衰万年;日赚斗金有其事,汝之亏钱彼赚也。<br/>真有免费送斗金,唯有年迈老椿萱;养肥再宰随处是,汝不贪心保安定。<br/>如有侵权联删除,草根不靠此赚钱。视频不出换线路,全屏隐藏啰嗦词!</font> </i>',//设置标题
                loop:                   false,//视频循环
                logo: {
                    //图标设置
                    imageUrl:           cdn_url+"/img/youxijiao.png?v=12",//图片路径
                    position:           'bottom right',//放置位置 top left, top right, bottom left,bottom right 四个选择
                    // clickUrl:           "//v.psc.app",//点击跳转位置
                    opacity:            0.5,//透明度 0 就完全透明
                    mouseOverImageUrl: cdn_url+'/img/qrcode.jpg',//鼠标悬停显示另外的图片
                    imageMargin: "0 0 40px 0",//margin设置
                    hideWithControls: false,//徽标仅与视频控件   没测试成功
                },
                controlBar: {
                    //控制栏     没测试成功
                    autoHide:           false,//是否隐藏控件
                    autoHideTimeout:    3,//多长时间后隐藏
                    animated:           false//false 控件会立即消失
                },
                timelinePreview:        {
                    //时间线预览
                    //文件引入格式
                    // file: cdn_url+'/vtt/thumbnails.vtt',
                    // type: 'VTT'
                    //静态格式
                    type: 'static',
                    frames: [
                        {
                            startTime: 0,
                            endTime: 9999999999999999999999999999999,
                            image: cdn_url+'/img/loading.gif',
                            x: 0,
                            y: 0,
                            w: 25,
                            h: 25,
                        },
                    ]
                },
                htmlOnPauseBlock: {
                    //暂停时播放的显示
                    html:               "<img src='"+cdn_url+"/img/pause_2.png' />",//支持html设置
                    height:             200,
                    width:              200
                },
                playerInitCallback:     (function() {console.log('想要此播放器,关注公众号联系小编获取')}),//播放器初始化回调
                persistentSettings: {
                    //持久设置
                    // volume:  false, // Default true  音量
                    // quality: false, // Default true 质量
                    // speed:   false, // Default true 速度
                    // theatre: false // Default true 剧院
                },
                captions: {
                    //字幕  貌似没成功
                    play: 'Play',
                    pause: 'Pause',
                    mute: 'Mute',
                    unmute: 'Unmute',
                    fullscreen: 'Fullscreen',
                    exitFullscreen: 'Exit Fullscreen'
                },
                controlForwardBackward: {
                    //控制前进后退  左下角图标
                    show: true // Default: false
                },
                contextMenu: {
                    //上下文菜单  貌似没有成功
                    controls: true,
                    links: [
                        {
                            href: '//v.ksc.app',
                            label: '关注我们'
                        }
                    ]
                }
                // Parameters to customise the look and feel of the player
            },
            vastOptions: {
                // autoPlay: true,
                // adList:                     [
                //     //广告列表
                //     {
                //         roll: 'preRoll', //multiple preRoll Ads 可用的时间轴位置
                //         vastTag: cdn_url+'/xml/ads.xml',//广告内容在xml设置
                //         timer: "100%",//右下角暂时倒计时
                //         fallbackVastTags: [cdn_url+'/xml/ads.xml', cdn_url+'/xml/ads.xml'],//备用线路,当 vastTag 设置的线路出错时
                //         adText: "微信公众号播放更流畅[微信搜索: 互惠共享]",//广告描述 不支持标签
                //         adTextPosition: 'top right',//广告描述所在位置
                //         adClickable: true,//点击广告做跳转并暂停播放,false时禁止点击打开新窗口
                //         vAlign: 'top',//非视频广告 不测试
                //         nonlinearDuration: 10,//非线性持续时间 未测试
                //         size: '300x250',//非线性广告尺寸
                //
                //         //下面的配置貌似没生效
                //         skipButtonCaption:          '跳过 [seconds]',//跳过按钮标题
                //         skipButtonClickCaption:     '跳过广告 <span class="skip_button_icon"></span>',//跳过按钮点击标题
                //         // adText:                     '关注公众号发现更多',//广告文字
                //         // adTextPosition:             'top left',//广告文本位置
                //         adCTAText:                  '立即访问!',//广告CTA文本
                //         adCTATextPosition:          'top right',//广告CTA文本位置
                //         vastTimeout:                1000,//超时
                //         vastAdvanced: {
                //             //广大高级
                //             vastLoadedCallback:       (function() { console.log("Here one event") }),
                //             noVastVideoCallback:      (function() { console.log("Here another") }),
                //             vastVideoSkippedCallback: (function() { console.log("Here one more") }),
                //             vastVideoEndedCallback:   (function() { console.log("Here's the last") })
                //         },
                //         showProgressbarMarkers: true,//显示进度条标记
                //         showPlayButton:             true,//显示播放按钮
                //         maxAllowedVastTagRedirects: 10,//最大允许的 Vast 标签重定向 默认3
                //     },
                // ],
            }
        }
    );
    player.setVolume(0.5);//设置音量
}, 1500);