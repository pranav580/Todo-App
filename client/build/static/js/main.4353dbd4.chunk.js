(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(4),i=c.n(s),j=(c(16),c(2)),r=c(6),d=(c(17),c(1));function l(e){var t=e.setInput,c=e.setpageList,n=Object(a.useState)(""),s=Object(j.a)(n,2),i=s[0],l=s[1];return Object(d.jsxs)("div",{className:"pageinput",children:[Object(d.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)}}),Object(d.jsx)("button",{type:"submit",onClick:function(){!function(){var e={P_ID:Math.floor(1e3*Math.random()),pageName:i};c((function(t){return[].concat(Object(r.a)(t),[e])})),t(!1)}()},children:"Add"})]})}var b=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),i=Object(j.a)(s,2),b=i[0],o=i[1];return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("div",{className:"signIn",children:Object(d.jsx)("h4",{children:"Sign in"})}),Object(d.jsxs)("div",{className:"modes",children:[Object(d.jsx)("div",{className:"Dark",children:"Dark"}),Object(d.jsx)("div",{className:"Light",children:"Light"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"fav",children:[Object(d.jsx)("h1",{className:"favhead",children:"FAVORITES"}),Object(d.jsx)("div",{className:"favList",children:"Empty"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("h1",{className:"pagehead",children:"PAGES"}),Object(d.jsx)("div",{className:"pageList",children:c.map((function(e){return Object(d.jsxs)("div",{className:"PageItems",children:[Object(d.jsx)("div",{className:"name",children:e.pageName}),Object(d.jsx)("div",{className:"deleteBTN",onClick:function(){!function(e){var t=Object(r.a)(c).filter((function(t){return t.P_ID!==e}));n(t)}(e.P_ID)},children:"D"})]},e.P_ID)}))}),b?Object(d.jsx)(l,{setInput:o,setpageList:n}):null,Object(d.jsx)("div",{className:"addBTN",onClick:function(){o(!0)},children:"+ Add Page"})]})]})};c(19);var o=function(e){e.setId;var t=e.setTitle,c=e.setDiscription,a=e.setStatus,n=e.setCreated_at,s=e.setDue_date,i=function(){var e=new Date,t=e.getFullYear(),c=e.getMonth()+1;return e.getDate()+"-"+c+"-"+t+"  "+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",onChange:function(e){t(e.target.value)}})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)}})}),Object(d.jsx)("td",{children:Object(d.jsxs)("select",{name:"status",onChange:function(e){a(e.target.value)},children:[Object(d.jsx)("option",{value:"To Do",children:"To Do"}),Object(d.jsx)("option",{value:"Doing",children:"Doing"}),Object(d.jsx)("option",{value:"Done",children:"Done"})]})}),Object(d.jsxs)("td",{children:[i(),n(i)]}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"date",onChange:function(e){s(e.target.value)}})})]})})};var O=function(e){var t=e.tableData,c=e.setTableData,n=Object(a.useState)(!1),s=Object(j.a)(n,2),i=s[0],l=s[1],b=Object(a.useState)(100),O=Object(j.a)(b,2),u=O[0],h=O[1],x=Object(a.useState)(),p=Object(j.a)(x,2),v=p[0],f=p[1],g=Object(a.useState)(),m=Object(j.a)(g,2),D=m[0],N=m[1],S=Object(a.useState)("To do"),T=Object(j.a)(S,2),C=T[0],I=T[1],_=Object(a.useState)(),k=Object(j.a)(_,2),P=k[0],B=k[1],L=Object(a.useState)(),y=Object(j.a)(L,2),F=y[0],w=y[1],M=Object(a.useState)(),A=Object(j.a)(M,2),E=A[0],H=A[1],R=function(){return Object(d.jsx)("div",{className:"addBTN",onClick:function(){l(!0)},children:"+ Add"})},V=function(){return Object(d.jsx)("div",{className:"addBTN",onClick:function(){!function(){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate()+"-"+n+"-"+a+"  "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();w(s),B(s),h((function(e){return e+1}));var i={id:u,title:v,discription:D,status:C,created_at:P,updated_at:F,due_date:E};c((function(e){return[].concat(Object(r.a)(e),[i])})),console.log(t),l(!1)}()},children:"+ Submit"})};return Object(d.jsxs)("div",{className:"Table",children:[Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Status"}),Object(d.jsx)("th",{children:"Created_at"}),Object(d.jsx)("th",{children:"Updated_at"}),Object(d.jsx)("th",{children:"Due_Date"})]})}),Object(d.jsxs)("tbody",{children:[t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["#",e.id]}),Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.discription}),Object(d.jsx)("td",{children:e.status}),Object(d.jsx)("td",{children:e.created_at}),Object(d.jsx)("td",{children:e.updated_at}),Object(d.jsx)("td",{children:e.due_date})]},e.id)})),i?Object(d.jsx)(o,{setTableData:c,id:u,setId:h,setTitle:f,setDiscription:N,setStatus:I,setCreated_at:B,setDue_date:H}):null]})]}),i?Object(d.jsx)(V,{}):Object(d.jsx)(R,{})]})},u=c(3),h=c(7);c(20);var x=function(e){var t=e.tableData,c=Object(a.useState)([]),n=Object(j.a)(c,2),s=n[0];return n[1],Object(d.jsx)(h.a,{onDragEnd:function(){},children:Object(d.jsxs)("div",{className:"BoardView",children:[Object(d.jsx)(h.c,{droppableId:"TodosList",children:function(e){return Object(d.jsxs)("div",Object(u.a)(Object(u.a)({className:"Todos",ref:e.innerRef},e.droppableProps),{},{children:[Object(d.jsx)("span",{className:"TodoHead",children:"Todos"}),t.map((function(e,t){return Object(d.jsx)(h.b,{draggableId:t.toString(),children:function(c){return Object(d.jsx)("div",Object(u.a)(Object(u.a)(Object(u.a)({className:"Card"},c.draggableProps),c.dragHandleProps),{},{ref:c.innerRef,children:e.title}),t)}})}))]}))}}),Object(d.jsx)(h.c,{droppableId:"TodosDone",children:function(e){return Object(d.jsxs)("div",Object(u.a)(Object(u.a)({className:"Done",ref:e.innerRef},e.droppableProps),{},{children:[Object(d.jsx)("span",{className:"TodoHead",children:"Done"}),s.map((function(e,t){return Object(d.jsx)("div",{className:"Card",children:e},t)}))]}))}})]})})};var p=function(e){var t=e.tableData,c=e.setTableData,n=Object(a.useState)(!0),s=Object(j.a)(n,2),i=s[0],r=s[1];return Object(d.jsxs)("div",{className:"mainWorkspace",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"WorkSpace",children:[Object(d.jsxs)("div",{className:"TableBoard",children:[Object(d.jsx)("div",{className:"tableView",onClick:function(){r(!0)},children:"Table"}),Object(d.jsx)("div",{className:"boardView",onClick:function(){r(!1)},children:"Board"})]}),i?Object(d.jsx)(O,{tableData:t,setTableData:c}):Object(d.jsx)(x,{tableData:t})]})]})};c(25);var v=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p,{tableData:c,setTableData:n})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.4353dbd4.chunk.js.map