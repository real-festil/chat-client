(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a.n(c),r=a(63),l=a.n(r),o=a(18),m=a(1),i=a(7),u=(a(75),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),m=l[0],u=l[1];return s.a.createElement("div",{className:"joinOuterContainer"},s.a.createElement("div",{className:"joinInnerContainer"},s.a.createElement("h1",{className:"heading"},"Join"),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),s.a.createElement(o.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},s.a.createElement("button",{className:"button mt-20",type:"submit"},"Join"))))}),A=a(69),f=a(65),E=a.n(f),g=a(66),p=a.n(g),N=(a(123),a(124),a(19)),d=a.n(N),h=a(67),v=a.n(h),b=function(e){var t=e.room;return s.a.createElement("div",{className:"infoBar"},s.a.createElement("div",{className:"leftInnerContainer"},s.a.createElement("img",{className:"onlineIcon",src:d.a,alt:"online"}),s.a.createElement("h3",null,t)),s.a.createElement("div",{className:"rightInnerContainer"},s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:v.a,alt:"close"}))))},j=(a(125),function(e){var t=e.message,a=e.sendMessage,n=e.setMessage;return s.a.createElement("form",{className:"form"},s.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message ",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),s.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),O=a(68),C=a.n(O),I=a(37),S=a.n(I),x=(a(146),function(e){var t=e.message,a=t.user,n=t.text,c=!1,r=e.name.trim().toLowerCase();return a===r&&(c=!0),c?s.a.createElement("div",{className:"messageContainer justifyEnd"},s.a.createElement("p",{className:"sentText pr-10"},r),s.a.createElement("div",{className:"messageBox backgroundBlue"},s.a.createElement("p",{className:"messageText colorWhite"},S.a.emojify(n)))):s.a.createElement("div",{className:"messageContainer justifyStart"},s.a.createElement("div",{className:"messageBox backgroundLight"},s.a.createElement("p",{className:"messageText colorDark"},S.a.emojify(n))),s.a.createElement("p",{className:"sentText pl-10"},a))}),y=(a(147),function(e){var t=e.messages,a=e.name;return s.a.createElement(C.a,{className:"messages"},t.map((function(e,t){return s.a.createElement(x,{key:t,message:e,name:a})})))}),R=(a(148),function(e){var t=e.users;return console.log(t),s.a.createElement("div",{className:"listContainer"},s.a.createElement("header",{className:"usersListHeader"},"Users Online"),s.a.createElement("ul",{className:"list"},t&&t.map((function(e){return s.a.createElement("li",{className:"listElement"},s.a.createElement("img",{src:d.a,alt:"online"}),s.a.createElement("span",null,e.name))}))))}),U=function(e){var t=e.location,a=Object(c.useState)(""),r=Object(i.a)(a,2),l=r[0],o=r[1],m=Object(c.useState)(""),u=Object(i.a)(m,2),f=u[0],g=u[1],N=Object(c.useState)([]),d=Object(i.a)(N,2),h=d[0],v=d[1],O=Object(c.useState)(""),C=Object(i.a)(O,2),I=C[0],S=C[1],x=Object(c.useState)([]),U=Object(i.a)(x,2),k=U[0],B=U[1],M="https://festil-chat-server.herokuapp.com/";Object(c.useEffect)((function(){var e=E.a.parse(t.search),a=e.name,c=e.room;return n=p()(M),o(a),g(c),n.emit("join",{name:a,room:c},(function(e){return e&&alert(e)})),function(){n.emit("disconnect"),n.off()}}),[M,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){B((function(t){return[].concat(Object(A.a)(t),[e])}))})),console.log("use effect"),n.on("roomData",(function(e){var t=e.users;v(t)}))}),[]);return console.log(h),s.a.createElement("div",{className:"outerContainer"},s.a.createElement("div",{className:"container"},s.a.createElement(b,{room:f}),s.a.createElement(y,{messages:k,name:l}),s.a.createElement(j,{message:I,sendMessage:function(e){e.preventDefault(),I&&n.emit("sendMessage",I,(function(){return S("")}))},setMessage:S})),s.a.createElement(R,{users:h}))},k=function(){return s.a.createElement(o.a,null,s.a.createElement(m.a,{path:"/",exact:!0,component:u}),s.a.createElement(m.a,{path:"/chat",component:U}))};l.a.render(s.a.createElement(k,null),document.querySelector("#root"))},19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},67:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},70:function(e,t,a){e.exports=a(149)},75:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.0ca37fa2.chunk.js.map