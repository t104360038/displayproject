(function(e){function t(t){for(var r,a,i=t[0],s=t[1],c=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4254f866","chunk-03604c24":"29baa178","chunk-0623dfa5":"ba93daca","chunk-0a53ec71":"90a66541","chunk-16c01060":"0681c527"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-03604c24":1,"chunk-16c01060":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-03604c24":"8aab8624","chunk-0623dfa5":"31d6cfe0","chunk-0a53ec71":"31d6cfe0","chunk-16c01060":"5e216ce9"}[e]+".css",o=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-ivew/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"03f5":function(e,t,n){},2737:function(e,t,n){"use strict";n("03f5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("Layout",[n("Header",[n("Menu",{attrs:{mode:"horizontal",theme:"Primary","active-name":"1"}},[n("div",{staticClass:"layout-logo1"}),n("div",{staticClass:"layout-nav"},[n("MenuItem",{attrs:{name:"1"}},[n("Icon",{attrs:{type:"ios-paper"}}),n("router-link",{attrs:{to:"/todo"}},[e._v("今日待辦")])],1),n("MenuItem",{attrs:{name:"2"}},[n("Icon",{attrs:{type:"ios-keypad"}}),n("router-link",{attrs:{to:"/login"}},[e._v("登入")])],1),n("MenuItem",{attrs:{name:"3"}},[n("Icon",{attrs:{type:"ios-analytics"}}),n("router-link",{attrs:{to:"/About"}},[e._v("服務")])],1),n("MenuItem",{attrs:{name:"4"}},[n("Icon",{attrs:{type:"ios-paper"}}),n("router-link",{attrs:{to:"/registered"}},[e._v("註冊")])],1)],1)])],1),n("Layout",{staticStyle:{height:"90vh"},attrs:{theme:"light"}},[n("Sider",{ref:"side1",attrs:{breakpoint:"md","hide-trigger":"",collapsible:"","collapsed-width":0},model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[n("Menu",{attrs:{"active-name":"1-2",theme:"dark",width:"auto","open-names":["0"]}},[n("Submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-navigate"}}),e._v(" 總公司 ")],1),n("MenuItem",{attrs:{name:"1-1"}},[n("router-link",{attrs:{to:"/About"}},[e._v("服務")])],1),n("MenuItem",{attrs:{name:"1-2"}},[n("router-link",{attrs:{to:"/registered"}},[e._v("註冊")])],1),n("MenuItem",{attrs:{name:"1-3"}},[n("router-link",{attrs:{to:"/todo"}},[e._v("今日待辦")])],1)],2),n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-keypad"}}),e._v(" 季節活動 ")],1),n("MenuItem",{attrs:{name:"2-1"}},[n("router-link",{attrs:{to:"/text"}},[e._v("活動快報")])],1),n("MenuItem",{attrs:{name:"2-2"}},[e._v("Option 2")])],2),n("Submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),e._v(" Item 3 ")],1),n("MenuItem",{attrs:{name:"3-1"}},[e._v("Option 1")]),n("MenuItem",{attrs:{name:"3-2"}},[e._v("Option 2")])],2)],1)],1),n("Layout",[n("Header",{staticClass:"layout-header-bar",style:{padding:0}},[n("Icon",{class:e.rotateIcon,style:{margin:"0 20px"},attrs:{type:"md-menu",size:"24"},nativeOn:{click:function(t){return e.collapsedSider(t)}}})],1),n("Content",{style:{padding:"24px",minHeight:"280px",background:"#fff"}},[n("router-view")],1)],1)],1),n("Layout",[n("Footer",{style:{background:"#fff"}},[e._v(" 台灣 © 2021 Poming-text, Inc. All Rights Reserved 指南 銷售條款 使用條款 Poming "),n("a",{attrs:{href:"https://agreementservice.svs.nike.com/tw/zh_tw/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.commerce.nikedotcom.web&country=TW&language=zh&requestType=redirect",target:"_blank"}},[e._v("隱私權政策")])])],1)],1)],1)},o=[],u={data:function(){return{isCollapsed:!1}},computed:{rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function(){this.$refs.side1.toggleCollapse()}}},i=u,s=(n("034f"),n("2737"),n("abcc"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"97aea7bc",null),l=c.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},f=[],m={name:"Home"},h=m,v=Object(s["a"])(h,p,f,!1,null,null,null),b=v.exports;r["default"].use(d["a"]);var g=[{path:"/",name:"Home",component:b,class:"active"},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-03604c24").then(n.bind(null,"dd7b"))}},{path:"/text",name:"Text",component:function(){return n.e("chunk-16c01060").then(n.bind(null,"ff9b"))}},{path:"/registered",name:"Registered",component:function(){return n.e("chunk-0623dfa5").then(n.bind(null,"829f"))}},{path:"/todo",name:"Todo",component:function(){return n.e("chunk-0a53ec71").then(n.bind(null,"e2a4"))}}],y=new d["a"]({mode:"history",base:"/vue-ivew/",routes:g}),k=y,_=n("2f62");r["default"].use(_["a"]);var w=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=n("f825"),C=n.n(I),x=n("3e96"),O=n.n(x);n("f8ce");r["default"].use(C.a,{locale:O.a});var M=n("bc3a"),S=n.n(M);r["default"].config.productionTip=!1,r["default"].prototype.$http=S.a,new r["default"]({router:k,store:w,render:function(e){return e(l)}}).$mount("#app")},6249:function(e,t,n){},"85ec":function(e,t,n){},abcc:function(e,t,n){"use strict";n("6249")}});
//# sourceMappingURL=app.ee6ef20f.js.map