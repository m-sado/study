/*! modernizr v3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download?-webgl-webglextensions-setclasses-dontmin !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,l,r;for(var p in i)if(i.hasOwnProperty(p)){if(e=[],n=i[p],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)l=e[a],r=l.split("."),1===r.length?c[r[0]]=s:(!c[r[0]]||c[r[0]]instanceof Boolean||(c[r[0]]=new Boolean(c[r[0]])),c[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=p.className,t=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}c._config.enableClasses&&(n+=" "+t+e.join(" "+t),u?p.className.baseVal=n:p.className=n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],r={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){i.push({name:e,fn:n,options:t})},addAsyncTest:function(e){i.push({name:null,fn:e})}},c=function(){};c.prototype=r,c=new c;var f=[],p=n.documentElement,u="svg"===p.nodeName.toLowerCase();c.addTest("webgl",function(){var n=l("canvas"),t="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return t in n?n[t]("webgl")||n[t]("experimental-webgl"):"WebGLRenderingContext"in e}),c.addAsyncTest(function(){if(c.webglextensions=new Boolean(!1),c.webgl){var e,n,o;try{e=l("canvas"),n=e.getContext("webgl")||e.getContext("experimental-webgl"),o=n.getSupportedExtensions()}catch(e){return}n!==t&&(c.webglextensions=new Boolean(!0));for(var s=-1,a=o.length;++s<a;)c.webglextensions[o[s]]=!0;e=t}}),s(),a(f),delete r.addTest,delete r.addAsyncTest;for(var g=0;g<c._q.length;g++)c._q[g]();e.Modernizr=c}(window,document);



/*!
 * Useragnt
 * v0.3.1
 *
 * Copyright (c) 2016 Yuichiroh Arai
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * detects: mobile, tablet, pc, windows, mac, linux, ios, android, edge, ie, safari, chrome, firefox, opera
!*/
!function(e,o){function i(e){return n.indexOf(e)!=-1}function r(e){var o=e.split("."),i={};return i.str=e,i.float=parseFloat(e)||0,i.major=o.length>0?parseInt(o[0])||0:0,i.minor=o.length>1?parseInt(o[1])||0:0,i.build=o.length>2?parseInt(o[2])||0:0,i.revision=o.length>3?parseInt(o[3])||0:0,i}var a={};a._detects=["mobile","tablet","pc","windows","mac","linux","ios","android","edge","ie","safari","chrome","firefox","opera"];var n=a.userAgent=e.navigator.userAgent.toLowerCase();a.mobile=i("iphone")||i("ipod")||i("android")&&i("mobile")||i("windows")&&i("phone")||i("firefox")&&i("mobile")||i("blackberry"),a.tablet=i("ipad")||i("android")&&!i("mobile")||i("windows")&&i("touch")&&!i("tablet pc")||i("firefox")&&i("tablet")||i("kindle")||i("silk")||i("playbook"),a.pc=!i("iphone")&&!i("ipod")&&!i("ipad")&&!i("android")&&(!i("windows")||!i("phone")&&(!i("touch")||i("tablet pc")))&&(!i("firefox")||!i("mobile")&&!i("tablet"))&&!i("blackberry")&&!i("kindle")&&!i("silk")&&!i("playbook"),a.windows=i("windows"),a.mac=i("mac os x")&&!i("iphone")&&!i("ipad")&&!i("ipod"),a.linux=i("linux")&&!i("android"),a.ios=i("iphone")||i("ipad")||i("ipod"),a.ios&&(a.ios=new Boolean(!0),n.match(/ os ([\d_]+)/g),a.ios.version=r(RegExp.$1.replace("_","."))),a.android=i("android"),a.android&&(a.android=new Boolean(!0),n.match(/android ([\d\.]+)/g),a.android.version=r(RegExp.$1)),a.edge=i("edge"),a.ie=i("trident")||i("msie"),a.safari=i("safari")&&!i("android")&&!i("edge")&&!i("opera")&&!i("opr")&&!i("chrome"),a.chrome=i("chrome")&&!i("edge")&&!i("opera")&&!i("opr"),a.chrome&&(a.chrome=new Boolean(!0),n.match(/chrome\/([\d.]+)/g),a.chrome.version=r(RegExp.$1)),a.firefox=i("firefox")&&!i("edge"),a.opera=i("opera")||i("opr");var d,t,s,l=a._classPrefix="",p=o.documentElement,c=p.className;for(t=a._detects.length,d=0;d<t;d++)s=a._detects[d],c+=a[s]?" "+l+s:" "+l+"no-"+s;p.className=c,e.Useragnt=a}(window,document);



var ACSLD = ACSLD || {};
;(function(window, document){
    // ------------------------------ JS

    // ここで色々と判定する予定
    ACSLD.isSupported = true; // とりあえずtrue
    ACSLD.isMS = Useragnt.ie || Useragnt.edge;

    // ------------------------------ CSS
    var classPrefix = "";
    var rootElement = document.documentElement;
    var className = rootElement.className;

    if (ACSLD.isSupported) {
        className += " " + classPrefix + "acsld";
    } else {
        className += " " + classPrefix + "no-acsld";
    }

    rootElement.className = className;
})(window, document);