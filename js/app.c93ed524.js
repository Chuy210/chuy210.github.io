(function(t){function a(a){for(var s,o,n=a[0],i=a[1],l=a[2],v=0,d=[];v<n.length;v++)o=n[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(a);while(d.length)d.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],s=!0,o=1;o<e.length;o++){var i=e[o];0!==r[i]&&(s=!1)}s&&(c.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},c=[];function o(t){return n.p+"js/"+({about:"about",cardCodes:"cardCodes",contact:"contact"}[t]||t)+"."+{about:"514ab299",cardCodes:"c6ada8b7",contact:"8e205fb3"}[t]+".js"}function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.e=function(t){var a=[],e=r[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=r[t]=[a,s]}));a.push(e[2]=s);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.src=o(t);var l=new Error;c=function(a){i.onerror=i.onload=null,clearTimeout(v);var e=r[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+c+")",l.name="ChunkLoadError",l.type=s,l.request=c,e[1](l)}r[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(a)},n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/",n.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var v=0;v<i.length;v++)a(i[v]);var u=l;c.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0b03":function(t,a,e){t.exports=e.p+"img/clicksReactPage.2bbd10e4.png"},"0eae":function(t,a,e){t.exports=e.p+"img/foodPage.bfb913a0.png"},"21bb":function(t,a,e){"use strict";e("2dad")},"237b":function(t,a,e){t.exports=e.p+"img/reactLogo.385a263a.svg"},"2dad":function(t,a,e){},"2f08":function(t,a,e){"use strict";e("8b48")},"36c3":function(t,a,e){t.exports=e.p+"img/htmlLogo.1cc74432.svg"},"371a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact mt-4"},[t.hoverCont?e("v-row",{staticClass:"mt-12 mb-2"},[e("v-col",[e("h2",{staticStyle:{color:"white"}},[t._v(t._s(t.contact))])])],1):t._e(),e("v-row",{staticClass:"mx-1 my-0 ",attrs:{"align-items":"center"}},[e("v-col"),t._l(t.img,(function(a,s){return e("v-col",{key:s,staticClass:"d-flex child-flex",attrs:{cols:"3",sm:"2",md:"1",lg:"1",xl:"1"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(s){var r=s.hover;return[e("v-img",{staticClass:"imagenes",staticStyle:{cursor:"pointer"},attrs:{src:a.src,"aspect-ratio":"1","max-width":"150px"},on:{click:function(a){return t.copyText()}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[r?e("v-expand-transition",{attrs:{hoverCont:t.hoverCont=r,contact:t.contact=a.contact}}):t._e()],1)]}}],null,!0)})],1)})),e("v-col")],2),e("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(a){var s=a.attrs;return[e("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(a){t.snackbar=!1}}},"v-btn",s,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" Copied Text ")])],1)},r=[],c={computed:{hover:function(){return console.log("teste"),""}},data:function(){return{img:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/1024px-Circle-icons-mail.svg.png",contact:"jocg210@gmail.com"},{src:"https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png",contact:"8712178872"}],contact:"jocg210@gmail.com",hoverCont:!0,snackbar:!1}},methods:{copyText:function(){navigator.clipboard.writeText(this.contact),this.snackbar=!0}}},o=c,n=(e("7a5a"),e("2877")),i=e("6544"),l=e.n(i),v=e("8336"),u=e("62ad"),d=e("0789"),g=e("ce87"),m=e("adda"),p=e("490a"),f=e("0fd9"),b=e("2db4"),h=Object(n["a"])(o,s,r,!1,null,null,null);a["a"]=h.exports;l()(h,{VBtn:v["a"],VCol:u["a"],VExpandTransition:d["a"],VHover:g["a"],VImg:m["a"],VProgressCircular:p["a"],VRow:f["a"],VSnackbar:b["a"]})},"4a84":function(t,a,e){t.exports=e.p+"img/tareasCRUD.ca63f301.png"},"50c47":function(t,a,e){"use strict";e("a9b3")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],o=(e("5c0b"),e("2877")),n={},i=Object(o["a"])(n,r,c,!1,null,null,null),l=i.exports,v=e("f309");s["a"].use(v["a"]);var u=new v["a"]({}),d=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"home"},[e("NavHeader"),e("About"),e("div",{staticClass:"separador"}),e("Tec"),e("div",{staticClass:"separador"}),e("CardCodes"),e("Contact")],1)},m=[],p=e("cce9"),f=e("84ba"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tec my-4"},[e("v-row",{staticClass:"mt-2"},[e("v-col",{staticClass:"text-center yellow--text"},[e("h1",[t._v("Technologies")])])],1),e("v-row",[e("v-col",[e("div",{staticClass:"marquee"},[e("div",{staticClass:"marquee--inner"},[e("span",[e("v-row",{staticClass:"mx-1"},t._l(t.img,(function(a,s){return e("v-col",{key:s,staticClass:"d-flex child-flex logos"},[e("v-img",{staticClass:"TecImgs",staticStyle:{"border-radius":"50%"},attrs:{src:a.src,"aspect-ratio":"1","max-width":"100px","min-width":"30px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1),e("span",[e("v-row",{staticClass:"mx-1"},t._l(t.img2,(function(a,s){return e("v-col",{key:s,staticClass:"d-flex child-flex logos"},[e("v-img",{staticClass:"TecImgs",staticStyle:{"border-radius":"50%"},attrs:{src:a.src,"aspect-ratio":"1","max-width":"100px","min-width":"30px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)])])])],1)],1)},h=[],x={data:function(){return{img:[{src:"https://cdn-icons-png.flaticon.com/512/919/919827.png"},{src:"https://cdn-icons-png.flaticon.com/512/919/919826.png"},{src:"https://cdn-icons-png.flaticon.com/512/5968/5968292.png"},{src:"https://cdn-icons-png.flaticon.com/512/919/919831.png"}],img2:[{src:"https://assets-global.website-files.com/5e9996a6531fea7d1003b18e/61435271fbe52607ec50931d_vue.png"},{src:"https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png"},{src:"https://download.logo.wine/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.png"},{src:"https://cdn-icons-png.flaticon.com/512/919/919827.png"}]}}},w=x,C=(e("2f08"),e("6544")),k=e.n(C),y=e("62ad"),_=e("adda"),P=e("490a"),j=e("0fd9"),V=Object(o["a"])(w,b,h,!1,null,null,null),T=V.exports;k()(V,{VCol:y["a"],VImg:_["a"],VProgressCircular:P["a"],VRow:j["a"]});var E=e("371a"),O=e("9f56"),S={name:"Home",components:{NavHeader:p["a"],About:f["a"],Tec:T,Contact:E["a"],CardCodes:O["a"]},data:function(){return{}}},L=S,A=(e("21bb"),e("7496")),R=Object(o["a"])(L,g,m,!1,null,null,null),I=R.exports;k()(R,{VApp:A["a"]}),s["a"].use(d["a"]);var $=[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"d7a9"))}},{path:"/contact",name:"contact",component:function(){return e.e("contact").then(e.bind(null,"ea79"))}},{path:"/cardCodes",name:"cardCodes",component:function(){return e.e("cardCodes").then(e.bind(null,"0575"))}}],H=new d["a"]({mode:"history",base:"/",routes:$}),M=H,N=e("2f62");s["a"].use(N["a"]);var B=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({vuetify:u,router:M,store:B,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";e("9c0c")},"79b1":function(t,a,e){t.exports=e.p+"img/PokerPage.dc4546ce.png"},"7a29":function(t,a,e){},"7a5a":function(t,a,e){"use strict";e("ebf5")},8491:function(t,a,e){t.exports=e.p+"img/CalcReactPage.30f5fc21.png"},"84ba":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("v-row",{staticClass:"mt-3"},[s("v-col",{staticClass:"text-center yellow--text"},[s("h1",[t._v("About Me")])])],1),s("v-row",{staticClass:"mt-2"},[s("v-col"),s("v-col",{attrs:{cols:"10"}},[s("v-card",{class:t.cardClass,attrs:{color:"#1FAAEE",sm:"d-flex flex-row"}},[s("v-img",{staticClass:"imgPerfil rounded-circle",attrs:{height:"250","max-width":"250",src:e("8ad3")}}),s("v-card-text",{staticClass:"titulo text-center white--text"},[t._v(" Hi. I am Jesus Omar Cervantes Gonzalez "),s("br"),t._v(" Frontend Developer with 1+ years of experience."),s("br"),t._v(" Passionate about learning new technologies and growing professionally."),s("br"),t._v(" This portfolio contains some of my work, and some projects I have done to learn new technologies. ")])],1)],1),s("v-col")],1)],1)},r=[],c=(e("b0c0"),{computed:{cardClass:function(){var t="";switch(this.$vuetify.breakpoint.name){case"xs":t="d-flex flex-column justify-center align-center";break;case"sm":t="d-flex flex-column justify-center align-center";break;case"md":t="d-flex flex-row justify-center align-center";break;case"lg":t="d-flex flex-row justify-center align-center";break;case"xl":t="d-flex flex-row justify-center align-center";break}return t}},data:function(){return{}}}),o=c,n=(e("50c47"),e("2877")),i=e("6544"),l=e.n(i),v=e("b0af"),u=e("99d9"),d=e("62ad"),g=e("adda"),m=e("0fd9"),p=Object(n["a"])(o,s,r,!1,null,null,null);a["a"]=p.exports;l()(p,{VCard:v["a"],VCardText:u["a"],VCol:d["a"],VImg:g["a"],VRow:m["a"]})},"8a56":function(t,a,e){t.exports=e.p+"img/cssLogo.653a55bd.svg"},"8ad3":function(t,a,e){t.exports=e.p+"img/PhotoPerfil.f9caa51f.png"},"8b48":function(t,a,e){},"8beb":function(t,a,e){t.exports=e.p+"img/agregarTareasReactPage.dc56125c.png"},"930f":function(t,a,e){t.exports=e.p+"img/testimoniosReactPage.a4489d5b.png"},"9c0c":function(t,a,e){},"9e3d":function(t,a,e){t.exports=e.p+"img/hospitalPage.d3fee25c.png"},"9f56":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-row",{staticClass:"mt-2"},[s("v-col",{staticClass:"text-center yellow--text"},[s("h1",[t._v("Portfolio")])])],1),s("v-row",{staticClass:"ma-0"},[s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(1)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("a586"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" LogIn Page ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{staticClass:"techUsed",attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("f73f")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(2)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("0eae"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" Food Page ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("f73f")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(3)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("4a84"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" Tasks CRUD Page ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("b504")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("c4f2")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("f73f")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(4)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("8beb"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" Tasks List ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("b504")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("237b")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(5)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("8491"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" Calculator ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("b504")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("237b")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(6)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("0b03"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" Click Counter ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("b504")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("237b")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(7)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("930f"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" FCC Students Comments ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("b504")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("237b")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(8)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("79b1"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" Poker Page ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("b504")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("c4f2")}})],1),s("v-col")],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[s("v-card",{staticClass:"tarjetas mx-auto",attrs:{"max-width":"344",color:"rgb(52, 73, 94)"},on:{click:function(a){return t.linkPage(9)}}},[s("v-img",{staticClass:"imagenes",attrs:{src:e("9e3d"),height:"200px"}}),s("v-card-title",{staticClass:"text-center orange--text"},[t._v(" Hospital Records Page ")]),s("v-row",[s("v-col"),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("36c3")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("8a56")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("b504")}})],1),s("v-col",{attrs:{cols:"2"}},[s("v-img",{attrs:{src:e("c4f2")}})],1),s("v-col")],1)],1)],1)],1)],1)},r=[],c={data:function(){return{}},methods:{linkPage:function(t){switch(t){case 1:window.open("https://dainty-sprinkles-6dfe59.netlify.app/","_blank");break;case 2:window.open("https://glowing-crepe-8267b5.netlify.app/","_blank");break;case 3:window.open("https://spectacular-palmier-7b0bb6.netlify.app/","_blank");break;case 4:window.open("https://incomparable-puffpuff-89d973.netlify.app/","_blank");break;case 5:window.open("https://glowing-medovik-6b13fa.netlify.app/","_blank");break;case 6:window.open("https://transcendent-dragon-3f423c.netlify.app/","_blank");break;case 7:window.open("https://vocal-hamster-a14a13.netlify.app/","_blank");break;case 8:window.open("https://rad-kitsune-cf0ceb.netlify.app/","_blank");break;case 9:window.open("https://cerulean-raindrop-495bf5.netlify.app/","_blank");break;default:break}}}},o=c,n=(e("b37d"),e("2877")),i=e("6544"),l=e.n(i),v=e("b0af"),u=e("99d9"),d=e("62ad"),g=e("a523"),m=e("adda"),p=e("0fd9"),f=Object(n["a"])(o,s,r,!1,null,null,null);a["a"]=f.exports;l()(f,{VCard:v["a"],VCardTitle:u["b"],VCol:d["a"],VContainer:g["a"],VImg:m["a"],VRow:p["a"]})},a586:function(t,a,e){t.exports=e.p+"img/loginPage.99f5fa15.png"},a9b3:function(t,a,e){},b37d:function(t,a,e){"use strict";e("7a29")},b504:function(t,a,e){t.exports=e.p+"img/jsLogo.9e488e9e.svg"},baac:function(t,a,e){t.exports=e.p+"img/webBackground3.4ded0cc1.png"},c4f2:function(t,a,e){t.exports=e.p+"img/vueLogo.ee403782.svg"},cce9:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-card",{attrs:{color:"grey lighten-4",flat:"",tile:""}},[s("v-toolbar",{staticClass:"primary font-weight-black white--text",attrs:{prominent:"",src:e("baac")}},[s("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(a){t.drawer=!0}}}),s("v-toolbar-title",[t._v(" JESUS OMAR CERVANTES GONZALEZ ")]),s("v-spacer"),s("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,r=a.attrs;return[s("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",r,!1),e),[s("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[s("v-list",t._l(t.socials,(function(a,e){return s("v-list-item",{key:e,on:{click:function(a){return t.linkPage(1)}}},[s("v-btn",{staticClass:"white--text",attrs:{color:a.color,fab:"",icon:"",small:""}},[s("v-icon",[t._v(t._s(a.icon))])],1),s("v-list-item-title",[t._v(t._s(a.title))])],1)})),1)],1)],1),s("v-navigation-drawer",{attrs:{app:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[s("v-row",{staticClass:"flex-column"},[s("v-col",{staticClass:"d-flex align-center justify-center mt-4"},[s("v-avatar",[s("img",{attrs:{src:e("8ad3"),alt:"Omar"}})])],1),s("v-col",{staticClass:"d-flex align-center justify-center white--text mt-3 headline"},[s("p",[t._v("Omar Cervantes")])])],1),s("v-row",{staticClass:"flex-column mx-1"},[s("v-col",[s("v-btn",{staticClass:"my-2",attrs:{color:"#268E00",block:"",to:{name:"home"}}},[t._v("Home")]),s("v-btn",{staticClass:"my-2",attrs:{color:"#268E00",block:"",to:{name:"cardCodes"}}},[t._v("Portfolio Apps")]),s("v-btn",{staticClass:"my-2",attrs:{color:"#268E00",block:"",to:{name:"about"}}},[t._v("About me")]),s("v-btn",{staticClass:"my-2",attrs:{color:"#268E00",block:"",to:{name:"contact"}}},[t._v("Contact")])],1)],1)],1)],1)},r=[],c={data:function(){return{drawer:!1,socials:[{title:"Linkedin",icon:"mdi-linkedin",color:"cyan darken-1"}]}},methods:{linkPage:function(t){switch(t){case 1:window.open("https://mx.linkedin.com/in/jesusomarcervantes","_blank");break;default:break}}}},o=c,n=e("2877"),i=e("6544"),l=e.n(i),v=e("5bc1"),u=e("8212"),d=e("8336"),g=e("b0af"),m=e("62ad"),p=e("132d"),f=e("8860"),b=e("da13"),h=e("5d23"),x=e("e449"),w=e("f774"),C=e("0fd9"),k=e("2fa4"),y=e("71d9"),_=e("2a7f"),P=Object(n["a"])(o,s,r,!1,null,null,null);a["a"]=P.exports;l()(P,{VAppBarNavIcon:v["a"],VAvatar:u["a"],VBtn:d["a"],VCard:g["a"],VCol:m["a"],VIcon:p["a"],VList:f["a"],VListItem:b["a"],VListItemTitle:h["a"],VMenu:x["a"],VNavigationDrawer:w["a"],VRow:C["a"],VSpacer:k["a"],VToolbar:y["a"],VToolbarTitle:_["a"]})},ebf5:function(t,a,e){},f73f:function(t,a,e){t.exports=e.p+"img/sassLogo.9c645368.svg"}});
//# sourceMappingURL=app.c93ed524.js.map