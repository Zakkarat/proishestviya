(this["webpackJsonpmovies-votes"]=this["webpackJsonpmovies-votes"]||[]).push([[0],{169:function(e,t,n){e.exports=n(288)},174:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},204:function(e,t){},206:function(e,t){},242:function(e,t){},243:function(e,t){},288:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=(n(174),n(32)),u=n.n(l),s=n(49),i=n(19),m=(n(176),n(177),n(16)),d=n(321),f=n(326),g=n(331),p=n(324),v=n(329),h=n(78),b=function(e){return{type:"VOTING",payload:e}},E=n(38),O=n(330),y=n(332),j=n(327),k=n(292),w=n(328),S=n(155),N=n.n(S),x=Object(d.a)((function(e){return{formControlLang:{margin:e.spacing(1),minWidth:80,backgroundColor:"#2f3c42",borderRadius:"4px"},formControlSort:{margin:e.spacing(1),minWidth:90},formControlRole:{margin:e.spacing(1),minWidth:90,maxWidth:285},selectBackground:{backgroundColor:"#2f3c42",color:"white",paddingLeft:"5px",borderRadius:"3px"},root:{padding:"2px 4px",display:"flex",alignItems:"center",backgroundColor:"#2f3c42",width:285},input:{marginLeft:e.spacing(1),flex:1,color:"white"},iconButton:{padding:10},menuToCenter:{alignItems:"center"}}})),C={PaperProps:{style:{maxHeight:224,width:250}}},R=["Tank","Mage","Assassin","Support","Fighter","Marksman"],_=["ASC \u2191","DESC \u2193"],L={changeLang:function(e){return{type:"CHANGE_LANG",payload:{language:e}}},rolesFiltering:function(e){return{type:"ROLES_FILTERING",payload:Object(h.a)(e)}},sorting:function(e){return{type:"SORTING",payload:e}},search:function(e){return{type:"SEARCH",payload:e}}},T=Object(E.b)((function(e){return{urlReducer:e.urlReducer,filters:e.filters,votes:e.votes}}),L)((function(e){var t=e.urlReducer,n=e.filters,o=e.votes,c=e.changeLang,l=e.rolesFiltering,u=e.sorting,s=e.search,d=t.language,h=x(),b=Object(a.useState)(d),E=Object(i.a)(b,2),S=E[0],L=E[1],T=Object(a.useState)(n.roles),I=Object(i.a)(T,2),P=I[0],D=I[1],G=Object(a.useState)(n.sort),W=Object(i.a)(G,2),B=W[0],U=W[1],A=Object(a.useState)(n.searchWord),F=Object(i.a)(A,2),V=F[0],H=F[1],X=Object(a.useState)("false"),M=Object(i.a)(X,2),z=M[0],J=M[1];return console.log(d),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.l,{color:"special-color-dark",dark:!0,expand:"md"},r.a.createElement(m.m,null,r.a.createElement("strong",{className:"white-text"},"Current votes: ",o)),r.a.createElement(m.i,{id:"navbarCollapse3",isOpen:z,navbar:!0},r.a.createElement(m.n,{className:h.menuToCenter},r.a.createElement(p.a,{className:h.formControlRole},r.a.createElement(v.a,{multiple:!0,displayEmpty:!0,className:h.selectBackground,value:P,onChange:function(e){var t=e.target;D(t.value),l(t.value)},input:r.a.createElement(f.a,null),renderValue:function(e){return 0===e.length?"Roles":e.join(", ")},MenuProps:C},r.a.createElement(g.a,{disabled:!0,value:""},"Roles"),R.map((function(e){return r.a.createElement(g.a,{key:e,value:e},r.a.createElement(O.a,{checked:P.indexOf(e)>-1}),r.a.createElement(y.a,{primary:e}))})))),r.a.createElement(j.a,{component:"form",className:h.root},r.a.createElement(w.a,{className:h.iconButton,"aria-label":"menu"}),r.a.createElement(k.a,{className:h.input,placeholder:"Search",value:V,onChange:function(e){var t=e.target;H(t.value),s(t.value)},inputProps:{"aria-label":"search google maps"}}),r.a.createElement(w.a,{className:h.iconButton,"aria-label":"search"},r.a.createElement(N.a,null))),r.a.createElement(p.a,{className:h.formControlSort},r.a.createElement(v.a,{displayEmpty:!0,className:h.selectBackground,value:B,onChange:function(e){var t=e.target;U(t.value),u(t.value)}},r.a.createElement(g.a,{disabled:!0,value:""},"Sort"),_.map((function(e){return r.a.createElement(g.a,{key:e,value:e},e)}))))),r.a.createElement(m.n,{className:h.menuToCenter,right:!0},r.a.createElement(m.k,null,r.a.createElement(p.a,{variant:"outlined",className:h.formControlLang},r.a.createElement(v.a,{className:"text-white",value:S,onChange:function(e){var t=e.target;L(t.value),c(t.value)}},r.a.createElement(g.a,{value:"en_US"},"EN"),r.a.createElement(g.a,{value:"ru_RU"},"RU")))))),r.a.createElement(m.o,{onClick:function(){J(!z)}})))})),I=n(156);function P(){var e=Object(I.a)(["\n    .toSpecialColor {\n       background-color: #37474F;\n       height: 100vh;\n    }\n    .secondary-text {\n        color: #9e9e9e !important;\n    }\n    .color-apply {\n        background-color:  #37474F;\n    }\n    .color-to-card {\n        background-color: #252f33;\n        display: grid;\n    }\n    .normalize-card {\n        background-color: #252f33;\n    }\n"]);return P=function(){return e},e}var D=n(157).a.div(P()),G=n(41),W=n.n(G),B=n(160),U=n.n(B),A={voting:b},F=Object(E.b)((function(e){return{votes:e.votes}}),A)((function(e){var t=e.cookies,n=Object(a.useState)(e.counter?e.counter:0),o=Object(i.a)(n,2),c=o[0],l=o[1],d=function(){var e=Object(s.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.post("/cookies",{token:t.get("token"),votes:n}).then((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(m.c,{className:"normalize-card",style:{width:"16rem"}},r.a.createElement(m.e,{style:{height:"28rem",transform:"scale(1.08)"},src:e.poster,top:!0,hover:!0,waves:!1}),r.a.createElement(m.d,{className:"color-to-card text-white justify-content-center"},r.a.createElement(m.g,{tag:"h5",className:"mb-0 text-center"},r.a.createElement("strong",null,e.name)),r.a.createElement("p",{className:"font-weight-bold secondary-text text-center mb-0"},e.title),r.a.createElement(m.f,{className:"mt-1 text-center"},"en_US"===e.language?"Roles":"\u0420\u043e\u043b\u0438"," : "," ",e.desc.join(", ")),r.a.createElement(m.b,{rounded:!0,color:"secondary",className:"",onClick:function(n){e.votes>0&&(e.voting(e.votes-1),l(c+1),t.get("token")||t.set("token",U.a.randomBytes(16).toString("base64")),d(e.votes-1),W.a.post("/counters",{id:e.id,Count:c}).then((function(e){return console.log(e)})))}},"en_US"===e.language?"Vote":"\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("p",{className:"font-weight-bold secondary-text text-center mb-0"},"en_US"===e.language?"Votes for champion":"\u041e\u0442\u0434\u0430\u043d\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432"," : "," "," ",c)))})),V={voting:b},H=Object(E.b)((function(e){return{urlReducer:e.urlReducer,filters:e.filters}}),V)((function(e){var t=e.urlReducer,n=e.filters,o=e.cookies,c=e.votes,l=e.voting,d=t.language,f=n.sort,g=n.searchWord,p=n.roles,v=Object(a.useState)([]),h=Object(i.a)(v,2),b=h[0],E=h[1],O=Object(a.useState)([]),y=Object(i.a)(O,2),j=y[0],k=y[1];Object(a.useEffect)((function(){(c||0===c)&&l(c),function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W()("/counters").then((function(e){var t=e.data;k(t)}));case 2:return e.next=4,W()("http://ddragon.leagueoflegends.com/cdn/9.22.1/data/".concat(d,"/champion.json")).then((function(e){var t=e.data;t=t.data;var n=Object.keys(t).reduce((function(e,n,a){return e.push(t[n]),e}),[]);"DESC \u2193"===f&&n.reverse(),E(n)})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),c&&l(c)}),[d,f,c]);var w=function(e){return console.log(j),e.forEach((function(e){j.forEach((function(t){e.key===t.key.toString()&&Object.assign(e,t)}))})),e};return r.a.createElement(m.r,null,b?function(){var e=b;return 0!==p.length&&(e=e.filter((function(e){return e.tags.every((function(e){return p.indexOf(e)+1}))}))),g&&(e=e.filter((function(e){return e.name.match(new RegExp(g,"ig"))}))),w(e)}().map((function(e){return r.a.createElement(m.h,{key:e.key,className:"mt-4 mb-4 mx-auto d-flex justify-content-center"},r.a.createElement(F,{id:e.key,name:e.name,title:e.title,desc:e.tags,language:d,counter:e.counter,cookies:o,poster:"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e.id,"_0.jpg")}))})):null)})),X=n(77),M=Object(X.b)((function(e){var t=e.cookies,n=Object(a.useState)(t.get("token")),o=Object(i.a)(n,2),c=o[0],l=o[1],d=Object(a.useState)(),f=Object(i.a)(d,2),g=f[0],p=f[1];return Object(a.useEffect)((function(){c&&function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("/cookies",{params:{token:t.get("token")}}).then((function(e){var t=e.data;console.log(t),l(!1),p(t[0].votes)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()})),r.a.createElement(D,null,r.a.createElement("div",{className:"toSpecialColor"},r.a.createElement(T,null),r.a.createElement(m.j,{fluid:!0,className:"color-apply px-5 pb-5"},r.a.createElement(H,{votes:g,cookies:t}))))})),z=n(50),J=n(161);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={language:"en_US"},Q={searchWord:"",sort:"",roles:[]},Y=Object(z.b)({urlReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANG":return e=t.payload;default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORTING":return q({},e,{sort:t.payload});case"SEARCH":return q({},e,{searchWord:t.payload});case"ROLES_FILTERING":return q({},e,{roles:Object(h.a)(t.payload)});default:return e}},votes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VOTING":return e=t.payload;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(285),n(286),n(287);var Z=Object(z.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(X.a,null,r.a.createElement(E.a,{store:Z},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.54b80cee.chunk.js.map