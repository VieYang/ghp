(this["webpackJsonpdev-news"]=this["webpackJsonpdev-news"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),s=n(3),o=n.n(s),j=(n(10),n(4)),a=function(e){var t=e.post;return Object(c.jsx)("a",{href:t.url,className:"post",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("img",{src:t.social_image,alt:t.title}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t.amount}),Object(c.jsx)("p",{children:t.direction}),Object(c.jsx)("p",{children:t.status})]})]})},t.id)},u=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://rpc1.newchain.newtonproject.org/newbridge/history?newchain_recipient_address=0x30ed7EDb10d058407ca74B4849d5A051554Bf0AF&direction=eth2new").then((function(e){return e.json()})).then(r)}),[]),n.map((function(e){return Object(c.jsx)(a,{post:e})}))};var d=function(){return Object(c.jsx)(u,{})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),h()}},[[11,1,2]]]);
//# sourceMappingURL=main.9c25ae0b.chunk.js.map