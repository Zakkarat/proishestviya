(this.webpackJsonpproishestviya=this.webpackJsonpproishestviya||[]).push([[0],{40:function(e,t,n){e.exports=n(71)},45:function(e,t,n){},46:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(13),o=n.n(c),l=(n(45),n(46),n(14)),s=n(3),u=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(s.n,{color:"elegant-color",dark:!0,expand:"md"},r.a.createElement(s.o,{className:"black-text",center:!0},r.a.createElement(s.l,{active:n,onClick:function(){return c(!0)}},r.a.createElement(s.m,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0421\u043e\u0431\u044b\u0442\u0435\u0439\u043d\u0430\u044f")),r.a.createElement(s.l,{active:!n,onClick:function(){return c(!1)}},r.a.createElement(s.m,{to:"/history"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043d\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0438\u0448\u0435\u0441\u0442\u0432\u0438\u0439"))))},i=n(10),m=n.n(i),f=n(18),h=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),i=u[0],h=u[1],p=Object(a.useState)(!1),E=Object(l.a)(p,2),v=E[0],b=E[1];Object(a.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/proishestviya").then(function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:t=e.sent,h(function(e){var t=e.time;if(t){var n=(new Date).getTime()-t,a=Math.floor(n/1e3/60/60);n-=1e3*a*60*60;var r=Math.floor(n/1e3/60);return n-=1e3*r*60,{hours:a,minutes:r}}}(t[t.length-1]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(i)}),[]);var g=function(){console.log(i),fetch("/proishestviya",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({story:n})}).then((function(e){console.log(e)})),c(""),b(!0)};return r.a.createElement(s.h,null,r.a.createElement(s.c,null,v?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,{className:"img-fluid mx-auto rounded-circle mt-3",style:{height:"300px"},src:"./natalie.jpg",waves:!0}),r.a.createElement(s.d,null,r.a.createElement(s.g,{className:"black-text"},"C\u043f\u0430\u0441\u0438\u0431\u043e, \u0447\u0442\u043e \u0443\u0432\u0435\u0434\u043e\u043c\u0438\u043b\u0438! \u0422\u0435\u043f\u0435\u0440\u044c \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043d\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0438\u0448\u0435\u0441\u0442\u0432\u0438\u0439!"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,{className:"img-fluid mx-auto rounded-circle mt-3",style:{height:"300px"},src:"./natalie.jpg",waves:!0}),r.a.createElement(s.d,null,r.a.createElement(s.g,{className:"black-text"},"\u0427\u0442\u043e-\u0442\u043e \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0441 \u041d\u0430\u0442\u0430\u043b\u0438? \u0410 \u0442\u043e \u043d\u0435 \u0441\u043b\u0443\u0447\u0430\u043b\u043e\u0441\u044c \u0443\u0436\u0435 \u0446\u0435\u043b\u044b\u0445"," ","".concat(i.hours?"".concat(i.hours," ").concat(i?1===i.hours?"\u0447\u0430\u0441":i.hours>1&&i.hours<5?"\u0447\u0430\u0441\u0430":"\u0447\u0430\u0441\u043e\u0432":""):""," ").concat(i.minutes," \u043c\u0438\u043d\u0443\u0442!"),(function(){console.log(i)})),r.a.createElement(s.f,null,r.a.createElement(s.k,{value:n,onChange:function(e){var t=e.target;return c(t.value)},label:"\u0410 \u0447\u0442\u043e \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c?",onKeyDown:function(e){return"Enter"===e.key?g():null}})),r.a.createElement(s.b,{onClick:g,href:"#"},"\u041e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u043e\u0431 \u044d\u0442\u043e\u043c \u043d\u0430 \u0432\u0435\u0441\u044c \u043c\u0438\u0440!")))))},p=n(39),E=n.n(p),v=(n(67),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/proishestviya").then(function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:t=e.sent,c(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(n)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.r,{className:"mb-4"},n.reverse().map((function(e){return r.a.createElement(s.h,{xl:"12",className:"mb-5"},r.a.createElement(s.c,null,r.a.createElement(s.d,null,r.a.createElement(s.g,{style:{color:"black"}},e.story),r.a.createElement(s.f,null,"\u0412\u043e\u0442 \u0442\u0430\u043a\u043e\u0435 \u0441 \u041d\u0430\u0442\u0430\u043b\u0438 \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c ",r.a.createElement(E.a,{locale:"ru",fromNow:!0},parseInt(e.time))))))}))))}),b=n(16),g=n(15);var d=function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(s.i,{className:"App-header mt-5"},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,component:h}),r.a.createElement(g.a,{path:"/history",component:v})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(68),n(69),n(70);o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.25ddee93.chunk.js.map