(function(){var p=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ca=function(a,b,c){return a.call.apply(a.bind,arguments)},da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return u.apply(null,arguments)};var ea=(new Date).getTime();var x=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},fa=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ga=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ha=function(a,b){if(!a)return b;var c=a.match(ga);return c?c[0]:b};var ia=x("0.15"),ja=x("0.01"),ka=x("0.001"),la=x("0.001"),ma=x("0.2"),na=fa("true",!0),oa=x("0.001");var pa=fa("false",!1),ra=fa("true",!1);var sa=function(){},ua=function(a,b,c){switch(typeof b){case "string":ta(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),ua(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&(c.push(d),ta(f,c),c.push(":"),ua(a,e,c),
d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},va={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},wa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ta=function(a,b){b.push('"');b.push(a.replace(wa,function(a){if(a in va)return va[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return va[a]=f+b.toString(16)}));b.push('"')};var xa=function(a){xa[" "](a);return a};xa[" "]=function(){};var ya=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{xa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},z=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(f){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},za=/^(-?[0-9.]{1,30})$/,Aa=function(a){return za.test(a)&&(a=Number(a),!isNaN(a))?a:null};var Ba=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b};var Ca=document,D=window;var Da=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},La=function(a){if(!Ea.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Fa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ga,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ha,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ia,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ja,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ka,"&#0;"));return a},Fa=/&/g,Ga=/</g,Ha=/>/g,Ia=/"/g,Ja=/'/g,Ka=/\x00/g,Ea=/[\x00&<>"']/,
Ma={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},Na={"'":"\\'"},Oa=function(a,b){return a<b?-1:a>b?1:0},Pa=function(){return"transition".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})},Qa=function(a){var b="\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,f){return b+f.toUpperCase()})};var E=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},Ra=function(a){return!!a&&"function"==typeof a&&!!a.call},Sa=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},Ta=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",a)},Ua=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},Va=function(a){a=
a.google_unique_id;return"number"==typeof a?a:0},Wa=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Xa=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},Ya=/(^| )adsbygoogle($| )/;var Za=!0,$a={},cb=function(a,b,c,d){var f=ab,e,g=Za;try{e=b()}catch(h){try{var k=Ba(h);b="";h.fileName&&(b=h.fileName);var l=-1;h.lineNumber&&(l=h.lineNumber);g=f(a,k,b,l,c)}catch(m){try{var n=Ba(m);a="";m.fileName&&(a=m.fileName);c=-1;m.lineNumber&&(c=m.lineNumber);ab("pAR",n,a,c,void 0,void 0)}catch(t){bb({context:"mRE",msg:t.toString()+"\n"+(t.stack||"")},void 0)}}if(!g)throw h;}finally{if(d)try{d()}catch(v){}}return e},ab=function(a,b,c,d,f,e){var g={};if(f)try{f(g)}catch(h){}g.context=a;g.msg=
b.substring(0,512);c&&(g.file=c);0<d&&(g.line=d.toString());g.url=Ca.URL.substring(0,512);g.ref=Ca.referrer.substring(0,512);db(g);bb(g,e);return Za},bb=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+eb(a),d="http"+("http:"==D.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,d=d.substring(0,2E3);D.google_image_requests||(D.google_image_requests=[]);var f=D.document.createElement("img");f.src=d;D.google_image_requests.push(f)}}catch(e){}},db=function(a){var b=
a||{};E($a,function(a,d){b[d]=D[a]})},fb=function(a,b){return function(){var c=arguments;return cb(a,function(){return b.apply(void 0,c)},void 0,void 0)}},gb=function(a,b){return fb(a,b)},hb=function(a){return fb("aa:reactiveTag",a)},eb=function(a){var b="";E(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};var ib=Array.prototype,jb=ib.forEach?function(a,b,c){ib.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f="string"==typeof a?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};var kb=function(a){var b=arguments.length;if(1==b&&"array"==aa(arguments[0]))return kb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var G;a:{var lb=p.navigator;if(lb){var mb=lb.userAgent;if(mb){G=mb;break a}}G=""}var H=function(a){return-1!=G.indexOf(a)};var K=function(){return H("Edge")};var nb=H("Opera")||H("OPR"),L=H("Edge")||H("Trident")||H("MSIE"),M=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!K())&&!(H("Trident")||H("MSIE"))&&!K(),ob=-1!=G.toLowerCase().indexOf("webkit")&&!K(),pb=function(){var a=G;if(M)return/rv\:([^\);]+)(\)|;)/.exec(a);if(L&&K())return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ob)return/WebKit\/(\S+)/.exec(a)},qb=function(){var a=p.document;return a?a.documentMode:void 0},rb=function(){if(nb&&p.opera){var a=
p.opera.version;return"function"==aa(a)?a():a}var a="",b=pb();b&&(a=b?b[1]:"");return L&&!K()&&(b=qb(),b>parseFloat(a))?String(b):a}(),sb={},tb=function(a){var b;if(!(b=sb[a])){b=0;for(var c=Da(String(rb)).split("."),d=Da(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var m=k.exec(g)||["","",""],n=l.exec(h)||["","",""];if(0==m[0].length&&0==n[0].length)break;b=Oa(0==m[1].length?0:parseInt(m[1],
10),0==n[1].length?0:parseInt(n[1],10))||Oa(0==m[2].length,0==n[2].length)||Oa(m[2],n[2])}while(0==b)}b=sb[a]=0<=b}return b},ub=p.document,vb=qb(),wb=!ub||!L||!vb&&K()?void 0:vb||("CSS1Compat"==ub.compatMode?parseInt(rb,10):5);var xb=null,yb=M||ob||nb||"function"==typeof p.atob;var zb={overlays:1,interstitials:2};var Ab=!!window.google_async_iframe_id,Bb=function(a,b,c){var d=["<iframe"],f;for(f in a)a.hasOwnProperty(f)&&Sa(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Cb=null,Db=function(){if(!Cb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,ya(a))b=a;else break;Cb=b}return Cb};var Eb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Fb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];E(a,function(a,d){if(null!=a){var f;try{var e=[];ua(new sa,a,e);f=e.join("")}catch(g){}f&&(f=f.replace(/\\|\//,"\\$&"),Sa(b,d,"=",f,";"))}});return b.join("")};var Gb={sa:"google_auto_instream_debug",ta:"google_anchor_debug",ua:"google_infinite_scroll_debug",va:"google_inflate_debug",wa:"google_ia_debug",ya:"google_ia_debug_fi",Aa:"google_ia_debug_spa",za:"google_ia_debug_scr",xa:"google_ia_debug_allow_onclick",Ba:"google_ia_debug_verify_onclick",Ca:"google_ladder_rung_debug",Da:"google_lat_debug",Ea:"google_lat_debug_all",Fa:"google_resize_debug",Ha:"google_visible_intentful_click",Ga:"google_supersize_debug"};var N=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}},Ib=function(a){var b=!1;E(Gb,function(c){Hb(a,c)&&(b=!0)});return b},Hb=function(a,b){if(!a||!a.indexOf)return!1;if(-1!=a.indexOf(b))return!0;var c=Jb(b);return-1!=a.indexOf(c)?!0:!1},Jb=function(a){var b="";E(a.split("_"),function(a){b+=a.substr(0,2)});return b};var Kb=function(){return H("iPad")||H("Android")&&!H("Mobile")||H("Silk")};var Mb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Nb=/^([0-9.]+)px$/,Ob=/^([0-9.]+)$/,O=function(a){return(a=Nb.exec(a))?Number(a[1]):null},Pb=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var f="google_ad_"+c[d];if(!b.hasOwnProperty(f)){var e;e=(e=O(a[c[d]]))?Math.round(e):null;null!=e&&(b[f]=e)}}},Qb=function(a,b){var c=b.document.documentElement;try{var d=c.getBoundingClientRect();return a.getBoundingClientRect().top-d.top}catch(f){return 0}};var Rb={rectangle:1,horizontal:2,vertical:4},Sb=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:100,format:2},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},{width:120,
height:600,format:4},{width:120,height:240,format:4}];var Tb=function(a,b){return b.width-a.width||b.height-a.height};var Ub=kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var P=function(){this.O="";this.ca=Vb};P.prototype.s=!0;P.prototype.m=function(){return this.O};P.prototype.toString=function(){return"Const{"+this.O+"}"};var Wb=function(a){return a instanceof P&&a.constructor===P&&a.ca===Vb?a.O:"type_error:Const"},Vb={};var R=function(){this.M="";this.aa=Xb};R.prototype.s=!0;var Xb={};R.prototype.m=function(){return this.M};R.prototype.H=function(a){this.M=a;return this};var Yb=(new R).H(""),Zb=/^[-,."'%_!# a-zA-Z0-9]+$/;var S=function(){this.u="";this.ba=$b};S.prototype.s=!0;S.prototype.m=function(){return this.u};S.prototype.L=!0;S.prototype.A=function(){return 1};var $b={};var T=function(){this.W="";this.da=ac};T.prototype.s=!0;T.prototype.m=function(){return this.W};T.prototype.L=!0;T.prototype.A=function(){return 1};var ac={};var U=function(){this.u="";this.$=bc;this.T=null};U.prototype.L=!0;U.prototype.A=function(){return this.T};U.prototype.s=!0;U.prototype.m=function(){return this.u};
var cc=function(a){return a instanceof U&&a.constructor===U&&a.$===bc?a.u:"type_error:SafeHtml"},dc=/^[a-zA-Z0-9-]+$/,ec={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},fc={EMBED:!0,IFRAME:!0,LINK:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,TEMPLATE:!0},hc=function(a){var b=0,c="",d=function(a){if("array"==aa(a))jb(a,d);else{if(!(a instanceof U)){var e=null;a.L&&(e=a.A());a=gc(La(a.s?a.m():String(a)),e)}c+=cc(a);a=a.A();0==b?b=a:0!=a&&b!=a&&(b=null)}};jb(arguments,d);return gc(c,
b)},bc={},gc=function(a,b){return(new U).H(a,b)};U.prototype.H=function(a,b){this.u=a;this.T=b;return this};gc("<!DOCTYPE html>",0);gc("",0);var ic;if(!(ic=!M&&!L)){var jc;if(jc=L)jc=L&&(K()||9<=wb);ic=jc}ic||M&&tb("1.9.1");L&&tb("9");var kc={};var lc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if(L)return tb("10.0");var a=document.createElement("DIV"),b=ob?"-webkit":M?"-moz":L?"-ms":nb?"-o":null,c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");b={style:c};if(!dc.test("div"))throw Error("Invalid tag name <div>.");if("DIV"in fc)throw Error("Tag name <div> is not allowed for SafeHtml.");var c=null,d="<div";if(b)for(var f in b){if(!dc.test(f))throw Error('Invalid attribute name "'+
f+'".');var e=b[f];if(null!=e){var g;g=f;if(e instanceof P)e=Wb(e);else if("style"==g.toLowerCase()){if(!ba(e))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof e+" given: "+e);if(!(e instanceof R)){var h="",k=void 0;for(k in e){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);var l=e[k];if(null!=l){if(l instanceof P)l=Wb(l);else if(Zb.test(l)){for(var m=!0,n=!0,t=0;t<l.length;t++){var v=l.charAt(t);"'"==v&&n?
m=!m:'"'==v&&m&&(n=!n)}m&&n||(l="zClosurez")}else l="zClosurez";h+=k+":"+l+";"}}e=h?(new R).H(h):Yb}h=void 0;h=e instanceof R&&e.constructor===R&&e.aa===Xb?e.M:"type_error:SafeStyle";e=h}else{if(/^on/i.test(g))throw Error('Attribute "'+g+'" requires goog.string.Const value, "'+e+'" given.');if(g.toLowerCase()in ec)if(e instanceof T)e=e instanceof T&&e.constructor===T&&e.da===ac?e.W:"type_error:TrustedResourceUrl";else if(e instanceof S)e=e instanceof S&&e.constructor===S&&e.ba===$b?e.u:"type_error:SafeUrl";
else throw Error('Attribute "'+g+'" on tag "div" requires goog.html.SafeUrl or goog.string.Const value, "'+e+'" given.');}e.s&&(e=e.m());g=g+'="'+La(String(e))+'"';d+=" "+g}}f=void 0;null!=f?"array"==aa(f)||(f=[f]):f=[];!0===Ub.div?d+=">":(c=hc(f),d+=">"+cc(c)+"</div>",c=c.A());(b=b&&b.dir)&&(c=/^(ltr|rtl|auto)$/i.test(b)?0:null);b=gc(d,c);a.innerHTML=cc(b);a=a.firstChild;b=a.style[Pa()];"undefined"!==typeof b?a=b:(b=a.style,c=kc.transition,c||(c=f=Pa(),void 0===a.style[f]&&(f=(ob?"Webkit":M?"Moz":
L?"ms":nb?"O":null)+Qa(f),void 0!==a.style[f]&&(c=f)),kc.transition=c),a=b[c]||"");return""!=a});var mc=function(a,b){this.D=["",""];this.i=a||"";this.G=b||""},V=function(a,b,c){0>a.D[b].indexOf(c)&&(a.D[b]+=c)},W=function(a,b){0>a.i.indexOf(b)&&(a.i=b+a.i)},nc=function(a,b){0>a.G.indexOf(b)&&(a.G=b+a.G)};mc.prototype.toString=function(){return[this.D[0],this.D[1],this.i,this.G].join("|")};
var oc=function(a){var b={ka:0,ja:0,fa:!0};this.ea=null;this.R=a;var c=a.ownerDocument;this.S=c.defaultView||c.parentWindow;this.F=null;try{this.F=a.getBoundingClientRect()}catch(d){}var c=function(a){return a||0==a?+a:null},f=c(b.width);this.w=f;this.o=a=c(b.height);var e=c(b.ka);this.C=f==e?null:e;c=c(b.ja);this.B=a==c?null:c;this.U=!!b.fa;this.K=!!b.Ia&&lc();this.i=new mc;this.v=null},sc=function(a){var b=a.S;a.v=function(){};pc(a,a.R,b);var c=a.R.parentElement;if(c){for(;c;){try{var d=/^head$/i.test(c.nodeName)?
null:Xa(c,b)}catch(f){nc(a.i,"c")}qc(a,b,c,d);if(d)if("none"==d.display){W(a.i,"n");break}else if("absolute"==d.position){W(a.i,"a");break}else if("fixed"==d.position){W(a.i,"f");break}else if("hidden"==d.visibility||"collapse"==d.visibility){W(a.i,"v");break}else"hidden"==d.overflow&&W(a.i,"o");c=c.parentElement;if(!c)try{var c=b.frameElement,e=b.parent;e&&e!=b&&(b=e)}catch(g){W(a.i,"c");break}}a.K&&rc(a)}},tc=function(a,b,c){if(3!=b.nodeType&&1==b.nodeType){if(/^(head|script|style)$/i.test(b.nodeName))return 0;
try{var d=Xa(b,c)}catch(f){}if(d){if("none"==d.display||"fixed"==d.position)return 0;if("absolute"==d.position){if(!a.F)return 0;c=null;try{c=b.getBoundingClientRect()}catch(e){return 0}return(c.right>a.F.left?2:0)|(c.bottom>a.F.top?4:0)}}return 1}return 0},pc=function(a,b,c){var d=0;if(!b||!b.parentElement)return!0;for(var f=!1,e=0,g=b.parentElement.childNodes,h=0;h<g.length;h++){var k=g[h];k==b?f=!0:(k=tc(a,k,c),d|=k,f&&(e|=k))}e&1&&(d&2&&V(a.i,0,"o"),d&4&&V(a.i,1,"o"));return!(d&1)},uc=function(a,
b,c,d,f,e,g,h){if(null!=g&&null!=h){if("string"==typeof e){if("100%"==e)return;e=Aa(e);null==e&&(nc(a.i,"n"),V(a.i,b,"d"))}if(null!=e)if(c){if(a.U){var k=Math.max(e+h-g,0);if(a.K){var l=a.v;a.v=function(a,c){a==b&&d.setAttribute(f,k-c);l(a,c)}}else d.setAttribute(f,k)}}else V(a.i,b,"d")}},vc=function(a){return!a||/^(auto|none|100%)$/.test(a)},wc=function(a){return!a||/^(0px|auto|none|0%)$/.test(a)},X=function(a,b,c,d,f,e,g,h,k){if(null!=h&&null!=k){if("string"==typeof g){if("m"==c?wc(g):vc(g))return;
g=O(g);null==g&&(nc(a.i,"p"),V(a.i,b,c))}if(null!=g)if(d&&f){if(a.U){var l=Math.max(g+k-h,0);if(a.K){var m=a.v;a.v=function(a,c){a==b&&(f[e]=l-c+"px");m(a,c)}}else f[e]=l+"px"}}else V(a.i,b,c)}},qc=function(a,b,c,d){try{var f=c.style}catch(e){nc(a.i,"s")}var g=c.getAttribute("width"),h=Aa(g),k=c.getAttribute("height"),l=Aa(k),m=pc(a,c,b),n=(b=f?f.width:null)?O(b):null,t=f?f.height:null,v=t?O(t):null,h=null!==n&&a.w>=n||null!==h&&a.w>=h,l=null!==v&&a.o>=v||null!==l&&a.o>=l,l=m||l||!(g||b||d&&(!wc(d.minWidth)||
!vc(d.maxWidth)));d=m||h||!(k||t||d&&(!wc(d.minHeight)||!vc(d.maxHeight)));uc(a,0,l,c,"width",g,a.w,a.C);uc(a,1,d,c,"height",k,a.o,a.B);X(a,0,"d",l,f,"width",b,a.w,a.C);X(a,1,"d",d,f,"height",t,a.o,a.B);X(a,0,"m",l,f,"minWidth",f&&f.minWidth,a.w,a.C);X(a,1,"m",d,f,"minHeight",f&&f.minHeight,a.o,a.B);X(a,0,"M",l,f,"maxWidth",f&&f.maxWidth,a.w,a.C);X(a,1,"M",d,f,"maxHeight",f&&f.maxHeight,a.o,a.B)},rc=function(a){var b=31.25,c=a.S,d=a.ea,f=a.C,e=a.B,g=a.v,h,k=function(){if(0<b){var a=Xa(d,c),k=O(a.width),
a=O(a.height);null!==k&&null!==f&&g(0,f-k);null!==a&&null!==e&&g(1,e-a)}else D.clearInterval(h),g(0,0),g(1,0);--b};D.setTimeout(function(){h=D.setInterval(k,16)},990)};var xc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};Za=!pa;$a={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var yc=function(a,b,c){c||(c=ra?"https":"http");return[c,"://",a,b].join("")};var zc=null;var Ac=function(a){this.l=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:u(this.qa,this)});this.na=a.google_iframe_oncopy},Bc=La("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
Ac.prototype.set=function(a,b){this.na.handlers[a]=b;this.l.addEventListener&&this.l.addEventListener("load",u(this.ha,this,a),!1)};Ac.prototype.ha=function(a){a=this.l.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};
Ac.prototype.qa=function(a,b){var c=Cc("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Cc=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var Dc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Ec,Y=function(a){this.J=[];this.l=a||window;this.j=0;this.I=null;this.Z=0},Fc=function(a,b){this.ia=a;this.ra=b};Y.prototype.ga=function(a,b){0!=this.j||0!=this.J.length||b&&b!=window?this.V(a,b):(this.j=2,this.Y(new Fc(a,window)))};Y.prototype.V=function(a,b){this.J.push(new Fc(a,b||this.l));Gc(this)};Y.prototype.la=function(a){this.j=1;if(a){var b=gb("sjr::timeout",u(this.X,this,!0));this.I=this.l.setTimeout(b,a)}};
Y.prototype.X=function(a){a&&++this.Z;1==this.j&&(null!=this.I&&(this.l.clearTimeout(this.I),this.I=null),this.j=0);Gc(this)};Y.prototype.ma=function(){return!(!window||!Array)};Y.prototype.oa=function(){return this.Z};Y.prototype.nq=Y.prototype.ga;Y.prototype.nqa=Y.prototype.V;Y.prototype.al=Y.prototype.la;Y.prototype.rl=Y.prototype.X;Y.prototype.sz=Y.prototype.ma;Y.prototype.tc=Y.prototype.oa;var Gc=function(a){var b=gb("sjr::tryrun",u(a.pa,a));a.l.setTimeout(b,0)};
Y.prototype.pa=function(){if(0==this.j&&this.J.length){var a=this.J.shift();this.j=2;var b=gb("sjr::run",u(this.Y,this,a));a.ra.setTimeout(b,0);Gc(this)}};Y.prototype.Y=function(a){this.j=0;a.ia()};
var Hc=function(a){try{return a.sz()}catch(b){return!1}},Ic=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Hc(a)&&Ra(a.nq)&&Ra(a.nqa)&&Ra(a.al)&&Ra(a.rl)},Jc=function(){if(Ec&&Hc(Ec))return Ec;var a=Db(),b=a.google_jobrunner;return Ic(b)?Ec=b:a.google_jobrunner=Ec=new Y(a)},Kc=function(a,b){Jc().nq(a,b)},Lc=function(a,b){Jc().nqa(a,b)};var Mc=Ab?1==Va(D):!Va(D),Nc=function(){var a=xa("script"),b;b=ha("","pagead2.googlesyndication.com");return["<",a,' src="',yc(b,"/pagead/js/r20150428/r20150409/show_ads_impl.js",""),'"></',a,">"].join("")},Oc=function(a,b,c,d){return function(){var f=!1;d&&Jc().al(3E4);var e=a.document.getElementById(b);e&&!ya(e.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{if(ya(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(h.open(),g.google_async_iframe_close=!0,h.write(c))}else{var k=a.document.getElementById(b).contentWindow,l;e=c;e=String(e);if(e.quote)l=e.quote();else{g=['"'];for(h=0;h<e.length;h++){var m=e.charAt(h),n=m.charCodeAt(0),t=h+1,v;if(!(v=Ma[m])){var y;if(31<n&&127>n)y=m;else{var r=m;if(r in Na)y=Na[r];else if(r in
Ma)y=Na[r]=Ma[r];else{var A=r,q=r.charCodeAt(0);if(31<q&&127>q)A=r;else{if(256>q){if(A="\\x",16>q||256<q)A+="0"}else A="\\u",4096>q&&(A+="0");A+=q.toString(16).toUpperCase()}y=Na[r]=A}}v=y}g[t]=v}g.push('"');l=g.join("")}k.location.replace("javascript:"+l)}f=!0}catch(w){k=Db().google_jobrunner,Ic(k)&&k.rl()}f&&(f=Cc("google_async_rrc",c),(new Ac(a)).set(b,Oc(a,b,f,!1)))}},Pc=function(a){var b=["<iframe"];E(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},
Rc=function(a,b,c){Qc(a,b,c,function(a,b,e){a=a.document;for(var g=b.id,h=0;!g||a.getElementById(g);)g="aswift_"+h++;b.id=g;b.name=g;g=Number(e.google_ad_width);h=Number(e.google_ad_height);16==e.google_reactive_ad_format?(e=a.createElement("div"),e.innerHTML=Bb(b,g,h),c.appendChild(e.firstChild)):c.innerHTML=Bb(b,g,h);return b.id})},Qc=function(a,b,c,d){var f=xa("script"),e={},g=b.google_ad_height;e.width='"'+b.google_ad_width+'"';e.height='"'+g+'"';e.frameborder='"0"';e.marginwidth='"0"';e.marginheight=
'"0"';e.vspace='"0"';e.hspace='"0"';e.allowtransparency='"true"';e.scrolling='"no"';e.allowfullscreen='"true"';e.onload='"'+Bc+'"';d=d(a,e,b);var e=Sc(b)?z(["c","e"],ma):null,h=b.google_ad_output,g=b.google_ad_format;g||"html"!=h&&null!=h||(g=b.google_ad_width+"x"+b.google_ad_height,"e"==e&&(g+="_as"));h=!b.google_ad_slot||Sc(b);g=g&&h?g.toLowerCase():"";b.google_ad_format=g;for(var g=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],h=[],k=0,l=c;l&&25>k;l=
l.parentNode,++k)h.push(9!=l.nodeType&&l.id||"");(h=h.join())&&g.push(h);b.google_ad_unit_key=Wa(g.join(":")).toString();g=a.google_adk2_experiment=a.google_adk2_experiment||z(["C","E"],la)||"N";if("E"==g){g=[];for(h=0;c&&25>h;++h){k="";k=(k=9!=c.nodeType&&c.id)?"/"+k:"";a:{if(c&&c.nodeName&&c.parentElement)for(var l=c.nodeName.toString().toLowerCase(),m=c.parentElement.childNodes,n=0,t=0;t<m.length;++t){var v=m[t];if(v.nodeName&&v.nodeName.toString().toLowerCase()==l){if(c==v){l="."+n;break a}++n}}l=
""}g.push((c.nodeName&&c.nodeName.toString().toLowerCase())+k+l);c=c.parentElement}c=g.join()+":";g=a;h=[];if(g)try{for(var y=g.parent,k=0;y&&y!=g&&25>k;++k){for(var r=y.frames,l=0;l<r.length;++l)if(g==r[l]){h.push(l);break}g=y;y=g.parent}}catch(A){}b.google_ad_unit_key_2=Wa(c+h.join()).toString()}else"C"==g&&(b.google_ad_unit_key_2="ctrl");y=Fb(b);r=null;c=z(["C","E"],oa);if("E"==c)a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var q=encodeURIComponent(JSON.stringify(b)),
w;if(yb)w=p.btoa(q);else{c=[];for(h=g=0;h<q.length;h++){for(var I=q.charCodeAt(h);255<I;)c[g++]=I&255,I>>=8;c[g++]=I}var B=aa(c);if("array"!=B&&("object"!=B||"number"!=typeof c.length))throw Error("encodeByteArray takes an array as a parameter");if(!xb)for(xb={},q=0;65>q;q++)xb[q]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(q);q=xb;I=[];for(B=0;B<c.length;B+=3){var F=c[B],qa=B+1<c.length,Q=qa?c[B+1]:0,Z=B+2<c.length,Lb=Z?c[B+2]:0,g=F>>2,h=(F&3)<<4|Q>>4,k=(Q&15)<<2|Lb>>
6,l=Lb&63;Z||(l=64,qa||(k=64));I.push(q[g],q[h],q[k],q[l])}w=I.join("")}r=w;break a}}catch(gd){}r=""}else"C"==c&&(r="{C}");var C;b=b.google_ad_client;if(w=Mc){if(!zc)b:{F=[D.top];w=[];for(qa=0;Q=F[qa++];){w.push(Q);try{if(Q.frames)for(var J=Q.frames.length,Z=0;Z<J&&1024>F.length;++Z)F.push(Q.frames[Z])}catch(hd){}}for(J=0;J<w.length;J++)try{if(C=w[J].frames.google_esf){zc=C;break b}}catch(id){}zc=null}w=!zc}w?(C={style:"display:none"},C["data-ad-client"]=Dc(b),C.id="google_esf",C.name="google_esf",
C.src=yc(ha("","googleads.g.doubleclick.net"),"/pagead/html/r20150428/r20150409/zrt_lookup.html"),C=Pc(C)):C="";J=(new Date).getTime();b=a.google_top_experiment;if(w=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;F=a.google_always_use_delayed_impressions_experiment;e=["<!doctype html><html><body>",C,"<",f,">",y,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,
';google_async_iframe_id="',d,'";google_start_time=',ea,";",r?'google_pub_vars = "'+r+'";':"",b?'google_top_experiment="'+b+'";':"",w?'google_async_for_oa_experiment="'+w+'";':"",F?'google_always_use_delayed_impressions_experiment="'+F+'";':"",e?'google_append_as_for_format_override="'+e+'";':"","google_bpp=",J>ea?J-ea:1,";google_async_rrc=0;</",f,">",Nc(),"</body></html>"].join("");(a.document.getElementById(d)?Kc:Lc)(Oc(a,d,e,!0))},Tc=Math.floor(1E6*Math.random()),Uc=function(a){var b;try{b={};
for(var c=a.data.split("\n"),d=0;d<c.length;d++){var f=c[d].indexOf("=");-1!=f&&(b[c[d].substr(0,f)]=c[d].substr(f+1))}}catch(e){}c=b[3];if(b[1]==Tc&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},Sc=function(a){return a.google_override_format||!Mb[a.google_ad_width+
"x"+a.google_ad_height]&&"aa"==a.google_loader_used},Vc=function(a,b){var c=navigator;if(na&&a&&b&&c){var d=a.document,c=d.createElement("script"),f=Dc(b);c.async=!0;c.type="text/javascript";c.src=yc("pagead2.googlesyndication.com","/pub-config/"+f+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var Wc=function(a){return Ya.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},Yc=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");Xc(a,b,c)},Xc=function(a,b,c){Zc(a,b,c);if(!$c(a,b,c)){Ua(c);1==Va(c)&&Vc(c,b.google_ad_client);E(Eb,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&"html"!=d)throw Error("No support for google_ad_output="+d);cb("aa::main",function(){Rc(c,b,a)})}},$c=function(a,b,c){var d;var f=b.google_ad_slot;
d=c.google_ad_modifications;if(!d||xc(d.ad_whitelist,f,b.google_tag_origin))d=null;else{var e=d.space_collapsing||"none";d=(f=xc(d.ad_blacklist,f))?{P:!0,N:f.space_collapsing||e}:d.remove_ads_by_default?{P:!0,N:e}:null}if(d&&d.P){if("none"==d.N)return!0;null!==Aa(a.getAttribute("width"))&&a.setAttribute("width",0);null!==Aa(a.getAttribute("height"))&&a.setAttribute("height",0);a.style.width="0px";a.style.height="0px";"slot_and_pub"==d.N&&sc(new oc(a));return!0}return!(d=Xa(a,c))||"none"!=d.display||
"on"==b.google_adtest||0<b.google_reactive_ad_format||b.google_reactive_ads_config?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},Zc=function(a,b,c){for(var d=a.attributes,f=d.length,e=0;e<f;e++){var g=d[e];if(/data-/.test(g.name)){var h=g.name.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(h)||(g=g.value,"google_reactive_ad_format"==h&&(g=+g,g=isNaN(g)?null:g),null===g||(b[h]=g))}}Ib(c.location.hash)&&
(b.google_adtest="on");if(b.google_enable_content_recommendations&&1==b.google_reactive_ad_format)b.google_ad_width=N(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=N(c).clientWidth||0,b.google_ad_height=N(c).clientHeight||0,a.style.display="none",Hb(c.location.hash,"google_ia_debug_spa")&&(b.google_vignette_manual_trigger=
!0);else if(d=b.google_ad_format,"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)){b.google_responsive_optimization_experiment=z(["MC","ME"],ka)||"-";var d=a.offsetWidth,f=b.google_ad_format,k;if("auto"==f)k=N(c).clientWidth,k=Math.min(1200,k),k=.25>=d/k?4:3;else{e=0;for(k in Rb)-1!=f.indexOf(k)&&(e|=Rb[k]);k=e}b&&(b.google_responsive_formats=k);a:{if(b&&"ME"==b.google_responsive_optimization_experiment){e=1+Va(c);h=Qb(a,c)/N(c).clientHeight;e=!Kb()&&(H("iPod")||H("iPhone")||H("Android")||
H("IEMobile"))?1==e?.22>h?[7,8,3,12,6,14,4,1,10,11,13,0,2,15,5,9]:.7>h?[3,7,8,14,12,4,6,1,10,2,0,13,15,11,5,9]:[3,7,8,4,6,14,12,2,1,0,10,13,5,9,11,15]:2==e?1.18>h?[3,7,8,14,12,4,1,0,6,2,10,9,5,15,11,13]:3.04>h?[3,7,8,14,4,2,1,6,0,12,10,5,9,11,15,13]:[3,7,8,4,6,1,2,14,12,0,5,10,11,9,15,13]:2.3>h?[3,7,14,8,1,12,0,2,6,4,10,5,13,11,9,15]:5.6>h?[3,7,8,14,1,2,12,4,0,6,10,5,11,9,13,15]:[3,7,8,0,12,14,1,4,2,6,5,13,10,11,15,9]:Kb()?1==e?.18>h?[3,7,8,12,6,1,14,0,4,10,2,5,13,15,9,11]:.49>h?[3,8,6,7,12,1,0,14,
2,10,4,5,13,9,11,15]:[3,8,7,6,1,12,0,2,14,4,10,5,9,13,15,11]:2==e?.7>h?[3,8,6,7,1,0,12,2,14,10,4,9,5,13,11,15]:1.58>h?[3,8,7,6,1,12,0,2,14,10,4,9,5,13,11,15]:[3,8,7,6,1,12,0,2,14,4,10,9,5,11,13,15]:1.03>h?[3,12,6,8,1,7,0,14,2,10,4,5,9,11,15,13]:2.55>h?[3,8,6,7,12,1,2,0,14,4,10,5,9,11,15,13]:[3,8,12,6,7,1,0,2,14,4,10,5,9,11,15,13]:1==e?.21>h?[3,12,7,6,1,8,0,4,2,10,14,11,5,15,9,13]:.54>h?[3,7,6,1,12,8,2,0,4,10,14,9,5,11,15,13]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:2==e?.6>h?[3,7,1,12,6,0,2,8,4,10,
14,9,5,11,13,15]:1.53>h?[3,7,1,6,12,2,0,8,4,10,14,5,9,11,13,15]:[3,7,1,6,12,2,0,8,4,10,14,5,9,11,15,13]:.74>h?[3,7,12,6,1,2,8,0,4,14,10,9,13,5,11,15]:1.95>h?[3,7,6,12,1,2,8,0,4,10,14,5,9,11,13,15]:[3,7,6,12,1,2,8,0,4,14,10,5,9,11,15,13];h=[];for(g=0;g<e.length;++g)h.push(Sb[e[g]]);e=h}else e=Sb.slice(0).sort(Tb);if(g=h=488>N(c).clientWidth)g=Math.min(N(c).clientHeight,16*N(c).clientWidth/9),g=Qb(a,c)<g-100;c=g;for(g=0;g<e.length;g++){var l=e[g];if(l.width<=d&&l.format&k&&!(320==l.width&&(h&&50==l.height||
!h&&100==l.height)||c&&250<=l.height)){c=l;break a}}c=null}if(!c)throw Error("Cannot find a responsive size for a container of width="+d+"px and data-ad-format="+f);b.google_ad_width=300<d&&300<c.height?c.width:1200<d?1200:Math.round(d);b.google_ad_height=c.height;a.style.height=c.height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else if(!Ob.test(b.google_ad_width)&&!Nb.test(a.style.width)||!Ob.test(b.google_ad_height)&&!Nb.test(a.style.height)?(d=Xa(a,
c),a.style.width=d.width,a.style.height=d.height,Pb(d,b),b.google_loader_features_used=256):(Pb(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(d=a.style.width,a.style.width="100%",f=a.offsetWidth,a.style.width=d,b.google_available_width=f)),f=b.google_ad_width,d=b.google_ad_height,f&&d&&!Mb[f+"x"+d]&&(d=z("CD ED CA EA CW EW".split(" "),ja)))"CD"==d?b.google_overflowing_ads_experiment=d:((f=/W$/.test(d)&&728>f)||(f=/^E/.test(d),k=N(c),a&&
a.getBoundingClientRect&&k&&k.getBoundingClientRect?(c=a.getBoundingClientRect(),k=k.getBoundingClientRect(),c=Math.min(c.right,k.right)-Math.max(c.left,k.left),c=Math.round(Math.max(0,c))):c=0,160>c||15>b.google_ad_width-c?a=!1:(k=a.style.width||"",a.style.width="100%",e=a.offsetWidth,160>e||0>c-e?(a.style.width=k,a=!1):(f?(b.google_ad_width=c,a.style.width=c+"px"):a.style.width=k,a=!0)),f=!a&&"ED"!=d),f||(b.google_overflowing_ads_experiment=d));0<b.google_reactive_ad_format&&!b.google_pgb_reactive&&
(b.google_pgb_reactive=3)},ad=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(Wc(d)&&(!a||d.id==a))return d;return null},bd=!1,cd=function(a){var b={};E(zb,function(c,f){a.hasOwnProperty(f)&&(b[f]=a[f])});ba(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);Yc(c,{google_reactive_ads_config:b,google_ad_client:a.google_ad_client})},
dd=function(a){if(bd)throw Error("adsbygoogle.push(): Only one 'enable_page_level_ads'  allowed per page.");bd=!0;document.body?cd(a):Ta(hb(function(){cd(a)}))},ed=function(a){var b;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){b=!0;break a}throw Error("adsbygoogle.push(): 'google_ad_client' is missing from the tag config.");}b=!1}if(b)dd(a);else{b=a.element;a=a.params||{};if(b){if(!Wc(b)&&(b=b.id&&ad(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");
if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=ad(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");Yc(b,a)}},fd=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:ya(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=D.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=
z(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],ia),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",Uc,!1):a.attachEvent&&a.attachEvent("onmessage",Uc);window.google_top_js_status=3;a={0:"google_loc_request",1:Tc};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{ed(a)}catch(f){throw window.setTimeout(fd,
0),f;}d&&d.loaded||(window.adsbygoogle={push:ed,loaded:!0})};fd();})();
