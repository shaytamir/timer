(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{11:function(e,s,t){},12:function(e,s,t){},14:function(e,s,t){"use strict";t.r(s);var c=t(2),n=t.n(c),a=t(6),i=t.n(a),r=(t(11),t(12),t(4)),o=t(0);var l=function(){var e=Object(c.useContext)(y),s=e.state;return Object(o.jsxs)("div",{className:"break_changes",children:[Object(o.jsx)("h2",{id:"break-label",children:"Break Length"}),Object(o.jsxs)("div",{className:"arrow_icons_div",children:[Object(o.jsx)("img",{src:"../../images/icons/down_arrow.png",alt:"down arrow",id:"break-decrement",onClick:function(){!s.play&&s.break>1&&!s.start&&e.dispatch(["break","-"])}}),Object(o.jsx)("div",{id:"break-length",children:(s.play,s.newBreak)}),Object(o.jsx)("img",{id:"break-increment",src:"../../images/icons/up_arrow.png",alt:"up arrow",onClick:function(){!s.play&&!s.start&&e.dispatch(["break","+"])}})]})]})};var d=function(){var e=Object(c.useContext)(y),s=e.state;return Object(o.jsxs)("div",{className:"session_changes",children:[Object(o.jsx)("h2",{id:"session-label",children:"Session Length"}),Object(o.jsxs)("div",{className:"arrow_icons_div",children:[Object(o.jsx)("img",{id:"session-decrement",src:"/images/icons/down_arrow.png",alt:"down arrow",onClick:function(){!s.play&&s.session>1&&!s.start&&e.dispatch(["session","-"])}}),Object(o.jsx)("div",{id:"session-length",children:(s.play,s.newSession)}),Object(o.jsx)("img",{id:"session-increment",src:"/images/icons/up_arrow.png",alt:"up arrow",onClick:function(){!s.play&&!s.start&&e.dispatch(["session","+"])}})]})]})};var j=function(){return Object(o.jsxs)("div",{id:"changes",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{})]})};var b=function(){var e=Object(c.useContext)(y),s=e.state,t=document.getElementById("beep");function n(){return console.log(t),t.play(),t}return Object(c.useEffect)((function(){var t=setInterval((function(){return function(){var t=document.getElementById("time-left"),c=document.getElementById("timer-label");s.play&&s.playSession&&(s.seconds>0?(e.dispatch([s.seconds,"-sec"]),1===s.seconds&&0===s.session&&n()):(e.dispatch(["session","-"]),e.dispatch([59,"--sec"]),1===s.session?(t.style.color="#f30e0ee0",c.style.color="#f30e0ee0"):0===s.session&&(t.style.color="black",c.style.color="black",e.dispatch([0,"--sec"]),e.dispatch(["session","resetSession"])))),s.play&&s.playBreak&&(s.seconds>0?(e.dispatch([s.seconds,"-sec"]),1===s.seconds&&0===s.break&&n()):(e.dispatch(["break","-"]),e.dispatch([59,"--sec"]),1===s.break?(t.style.color="#f30e0ee0",c.style.color="#f30e0ee0"):0===s.break&&(t.style.color="black",c.style.color="black",e.dispatch([0,"--sec"]),e.dispatch(["break","resetBreak"]))))}()}),1e3);return function(){clearInterval(t)}})),Object(o.jsxs)("div",{id:"display",children:[Object(o.jsx)("h3",{id:"timer-label",children:s.onGoing}),Object(o.jsxs)("div",{id:"time-left",children:["Session"===s.onGoing&&"".concat(s.session<10?"0"+s.session:s.session,":").concat(s.seconds<10?"0"+s.seconds:s.seconds),"Break"===s.onGoing&&"".concat(s.break<10?"0"+s.break:s.break,":").concat(s.seconds<10?"0"+s.seconds:s.seconds)]}),Object(o.jsx)("div",{children:Object(o.jsx)("audio",{id:"beep",children:Object(o.jsx)("source",{src:"/audio/bip.wav",type:"audio/mp3"})})})]})},p=t(3),u=t(1),O={session:25,break:5,seconds:0,play:!1,playSession:!0,playBreak:!1,onGoing:"Session",newSession:25,newBreak:5,laps:3,start:!1},h=[function(e,s){var t=Object(r.a)(s,2),c=t[0],n="session"===c?"newSession":"newBreak";switch(t[1]){case"+":var a,i=e[c]+1;return i<=60?e.play?Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},c,i)):Object(u.a)(Object(u.a)({},e),{},(a={},Object(p.a)(a,c,i),Object(p.a)(a,n,i),a)):e;case"-":var o,l=e[c]-1;return l>=0?e.play?Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},c,l)):Object(u.a)(Object(u.a)({},e),{},(o={},Object(p.a)(o,c,l),Object(p.a)(o,n,l),o)):e;case"-sec":return e.play?Object(u.a)(Object(u.a)({},e),{},{seconds:[c]-1}):e;case"--sec":return e.play?Object(u.a)(Object(u.a)({},e),{},{seconds:[c]}):e;case"play":return e.play?e:Object(u.a)(Object(u.a)({},e),{},{play:!0,start:!0});case"pause":return e.play?Object(u.a)(Object(u.a)({},e),{},{play:!1}):e;case"onGo":return e.onGoing?Object(u.a)(Object(u.a)({},e),{},{onGoing:c}):e;case"resetSession":return Object(u.a)(Object(u.a)({},e),{},{session:e.newSession,playSession:!1,playBreak:!0,onGoing:"Break"});case"resetBreak":return Object(u.a)(Object(u.a)({},e),{},{break:e.newBreak,session:e.newSession,playSession:!0,playBreak:!1,onGoing:"Session"});case"reset":var d=document.getElementById("beep");return d.pause(),d.currentTime=0,O;default:return e}},O];var g=function(){var e=Object(c.useContext)(y),s=e.state;return Object(o.jsxs)("div",{id:"actions_div",children:[Object(o.jsxs)("div",{id:"start_stop",onClick:function(){e.dispatch(["play",s.play?"pause":"play"])},children:[Object(o.jsx)("img",{src:"../../images/icons/play.png",alt:"play icon"}),Object(o.jsx)("img",{src:"../../images/icons/pause.png",alt:"pause icon"})]}),Object(o.jsx)("img",{src:"../../images/icons/reset.png",id:"reset",alt:"reset icon",onClick:function(){e.dispatch(["reset","reset"])}})]})},y=n.a.createContext();var m=function(){var e=Object(r.a)(h,2),s=e[0],t=e[1],n=Object(c.useReducer)(s,t),a=Object(r.a)(n,2),i=a[0],l=a[1];return Object(o.jsx)("div",{id:"timer",children:Object(o.jsxs)("div",{id:"timer_div",children:[Object(o.jsx)("h1",{children:"Timer"}),Object(o.jsxs)(y.Provider,{value:{state:i,dispatch:l,initialState:t},children:[Object(o.jsx)(j,{}),Object(o.jsx)(b,{}),Object(o.jsx)(g,{})]})]})})};var v=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m,{})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,a=s.getLCP,i=s.getTTFB;t(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),k()}},[[14,1,2]]]);
//# sourceMappingURL=main.5c7100ec.chunk.js.map