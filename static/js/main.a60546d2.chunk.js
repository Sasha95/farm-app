(this["webpackJsonpfarm-app"]=this["webpackJsonpfarm-app"]||[]).push([[0],{365:function(e,a,t){e.exports=t(462)},370:function(e,a,t){},371:function(e,a,t){},462:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(370),t(371),t(90)),i=t(123),m=t(303),s=t(304),u=t(62),p=t(490),d=t(312),b=t(491),f=t(93),E=t(492),h=t(242),O=t(356),j=t.n(O),g=t(341),v=t(241),k=t.n(v),w=t(464),y=t(466),x=t(305),N=t(482),C=t(346),B=t.n(C),P=t(347),S=t.n(P),I=Object(m.a)((function(e){return Object(s.a)({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}})})),L=Object(m.a)((function(e){return Object(s.a)({link:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"}})})),M=t(92),R=t(120),D=function(e){var a=e.title,t=e.listItems,l=I(),c=L(),i=Object(n.useState)(!1),m=Object(o.a)(i,2),s=m[0],u=m[1],p=Object(M.f)();return r.a.createElement(w.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:l.root},r.a.createElement(y.a,{button:!0,onClick:function(){u(!s)}},r.a.createElement(x.a,{primary:a}),s?r.a.createElement(B.a,null):r.a.createElement(S.a,null)),r.a.createElement(N.a,{in:s,timeout:"auto",unmountOnExit:!0},t.map((function(e,a){return r.a.createElement(w.a,{component:"div",disablePadding:!0},r.a.createElement(R.b,{className:c.link,to:"/farm-app/".concat(Object.keys(e)[0])},r.a.createElement(y.a,{button:!0,className:l.nested,selected:!!Object(M.e)(p.pathname,"/".concat(Object.keys(e)[0]))},r.a.createElement(x.a,{primary:Object.values(e)[0],key:a}))))}))))},T=function(e){var a=e.title,t=e.link,n=I(),l=L(),c=Object(M.f)();return r.a.createElement(w.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:n.root},r.a.createElement(R.b,{className:l.link,to:"/farm-app/".concat(t)},r.a.createElement(y.a,{button:!0,selected:!!Object(M.e)(c.pathname,"/".concat(t))},r.a.createElement(x.a,{primary:a}))))},W=t(348),Y=t.n(W),z=t(306),J=t(182),U=t(307),A=Object(m.a)((function(e){return Object(s.a)({card:{display:"flex",flexDirection:"column",justifyContent:"center",margin:"10px"},img:{justifyContent:"center"}})})),G=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Boolean(t),i=function(){l(null)},m=A();return r.a.createElement("div",null,r.a.createElement(h.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(f.a,null,"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")),r.a.createElement(J.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:i},r.a.createElement("div",{className:m.card},r.a.createElement(z.a,{className:m.img,onClick:i},r.a.createElement(Y.a,null)),r.a.createElement(z.a,{onClick:i},"\u0427\u043e\u043b\u0430\u043a \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440"),r.a.createElement(z.a,{onClick:i},"\u0410\u0434\u043c\u0438\u043d"),r.a.createElement(U.a,{color:"inherit"},"\u0412\u044b\u0439\u0442\u0438"))))},Z=t(208),$=t(210),_=t(349),q=t.n(_),F=function(){var e=Object(n.useState)({columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}]}),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(q.a,{title:"Editable Example",columns:t.columns,data:t.data,editable:{onRowAdd:function(e){return new Promise((function(a){setTimeout((function(){a(),l((function(a){var t=Object($.a)(a.data);return t.push(e),Object(Z.a)({},a,{data:t})}))}),600)}))},onRowUpdate:function(e,a){return new Promise((function(t){setTimeout((function(){t(),a&&l((function(t){var n=Object($.a)(t.data);return n[n.indexOf(a)]=e,Object(Z.a)({},t,{data:n})}))}),600)}))},onRowDelete:function(e){return new Promise((function(a){setTimeout((function(){a(),l((function(a){var t=Object($.a)(a.data);return t.splice(t.indexOf(e),1),Object(Z.a)({},a,{data:t})}))}),600)}))}}})},H=Object(m.a)((function(e){return Object(s.a)({root:{display:"flex"},drawer:Object(i.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(i.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(i.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,toolbarLogo:{display:"flex",alignItems:"center",justifyContent:"center"},drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},profile:{marginLeft:"auto",display:"flex"}})})),K=function(e){var a=e.container,t=H(),l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],m=c[1],s=function(){m(!i)},O=r.a.createElement("div",null,r.a.createElement("div",{className:k()(t.toolbar,t.toolbarLogo)},"\u041b\u041e\u0413\u041e"),r.a.createElement(E.a,null),r.a.createElement(T,{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",link:"main"}),r.a.createElement(T,{title:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438",link:"sales"}),r.a.createElement(T,{title:"\u0421\u043a\u043b\u0430\u0434\u044b",link:"warehouse"}),r.a.createElement(D,{title:"\u041e\u0442\u0447\u0435\u0442\u044b",listItems:[{charts:"\u0413\u0440\u0430\u0444\u0438\u043a\u0438"}]}),r.a.createElement(D,{title:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0438",listItems:[{pharmacy:"\u0410\u043f\u0442\u0435\u043a\u0438"},{preparations:"\u041f\u0440\u0435\u043f\u0430\u0440\u0430\u0442\u044b"},{code:"\u041a\u043e\u0434 \u0410\u0422\u041d"},{produced:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0438"},{region:"\u0420\u0435\u0433\u0438\u043e\u043d\u044b"},{types_region:"\u0422\u0438\u043f\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432"}]}),r.a.createElement(D,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",listItems:[{users:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"},{roles:"\u0420\u043e\u043b\u0438"},{methods:"\u041c\u0435\u0442\u043e\u0434\u044b"},{access:"\u0414\u043e\u0441\u0442\u0443\u043f \u043f\u043e \u0440\u043e\u043b\u044f\u043c"},{logs:"\u041b\u043e\u0433\u0438"}]}));return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,null),r.a.createElement(p.a,{position:"fixed",className:t.appBar},r.a.createElement(d.a,null,r.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,className:t.menuButton},r.a.createElement(j.a,null)),r.a.createElement(f.a,{variant:"h6",noWrap:!0},"Responsive drawer"),r.a.createElement(f.a,{className:t.profile},r.a.createElement(G,null)))),r.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},r.a.createElement(g.a,{smUp:!0,implementation:"css"},r.a.createElement(u.a,{container:a,variant:"temporary",anchor:"left",open:i,onClose:s,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},O)),r.a.createElement(g.a,{xsDown:!0,implementation:"css"},r.a.createElement(u.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0},O))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(f.a,{paragraph:!0},r.a.createElement(F,null))))},Q=function(){return r.a.createElement(R.a,null,r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/farm-app/"},r.a.createElement(K,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[365,1,2]]]);
//# sourceMappingURL=main.a60546d2.chunk.js.map