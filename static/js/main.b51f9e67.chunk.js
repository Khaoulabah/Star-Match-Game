(this["webpackJsonpstar-match-game"]=this["webpackJsonpstar-match-game"]||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(3),o=t.n(c);t(9),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(1),l=function(e){return r.a.createElement(r.a.Fragment,null,f.range(1,e.count).map((function(e){return r.a.createElement("div",{key:e,className:"star"})})))},i=function(e){return r.a.createElement("div",{className:"game-done"},r.a.createElement("button",{onClick:e.onClick},"Play Again"))},s=function(e){return r.a.createElement("button",{className:"number",style:{backgroundColor:d[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},m=function(){var e=Object(a.useState)(f.random(1,9)),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(f.range(1,9)),m=Object(u.a)(o,2),d=m[0],g=m[1],h=Object(a.useState)([]),v=Object(u.a)(h,2),b=v[0],E=v[1],k=f.sum(b)>t,p=0===d.length,y=function(e,n){if("used"!==n){var a="available"==n?b.concat(e):b.filter((function(n){return n!==e}));if(f.sum(a)!=t)E(a);else{var r=d.filter((function(e){return!a.includes(e)}));c(f.randomSumIn(r,9)),g(r),E([])}}};return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"Pick 1 or more numbers that sum to the number of stars"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},p?r.a.createElement(i,{onClick:function(){c(f.random(1,9)),g(f.range(1,9)),E([])}}):r.a.createElement(l,{count:t})),r.a.createElement("div",{className:"right"},f.range(1,9).map((function(e){return r.a.createElement(s,{key:e,number:e,status:(n=e,d.includes(n)?b.includes(n)?k?"Wrong":"candidate":"available":"used"),onClick:y});var n})))))},d={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},f={sum:function(e){return e.reduce((function(e,n){return e+n}),0)},range:function(e,n){return Array.from({length:n-e+1},(function(n,t){return e+t}))},random:function(e,n){return e+Math.floor(Math.random()*(n-e+1))},randomSumIn:function(e,n){for(var t=[[]],a=[],r=0;r<e.length;r++)for(var c=0,o=t.length;c<o;c++){var u=t[c].concat(e[r]),l=f.sum(u);l<=n&&(t.push(u),a.push(l))}return a[f.random(0,a.length-1)]}};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,n,t){e.exports=t(10)},9:function(e,n,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.b51f9e67.chunk.js.map