(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),o=c(9),i=c.n(o),l=(c(17),c(3)),s=c(10),r=c(4),d=c(11),j=c(2),b=function(e){var t=e.children,c=e.outline,a=e.className,o=Object(d.a)(e,["children","outline","className"]),i=Object(j.a)("button",a,c&&"outline");return Object(n.jsx)("button",Object(l.a)(Object(l.a)({},o),{},{className:i,children:t}))},m=(c(18),function(e){var t=e.task,c=e.onRemove,a=e.showCompleted,o=e.onEdit,i=e.theme,l=t.completed?"completed":"",s=Object(j.a)("task-title",i),r=Object(j.a)("edit",i);return Object(n.jsxs)("div",{className:"task-container ".concat(l),children:[Object(n.jsxs)("div",{className:"task-content",onClick:function(){return a(t.id)},children:[Object(n.jsx)("h3",{className:"".concat(s," ").concat(l),children:t.title}),Object(n.jsx)("p",{className:s,children:t.content})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{className:r,onClick:function(){o(t)},children:"Edit"}),Object(n.jsx)(b,{className:"remove",onClick:function(){return c(t.id)},children:"Remove"})]})]})}),u=(c(19),function(e){var t=e.tasks,c=e.onRemove,a=e.showCompleted,o=e.onEdit,i=e.byCompleted,l=e.byTodo,s=e.todo,r=e.finished,d=e.byAll,u=e.all,O=e.theme,h=Object(j.a)("task-list-container",O),f=Object(j.a)("filter",O);return Object(n.jsxs)("div",{className:h,children:[Object(n.jsx)("div",{className:f,children:Object(n.jsxs)("div",{className:"filter-content",children:[Object(n.jsx)("h3",{children:"Filter by:"}),Object(n.jsxs)("div",{className:"filter-btn-container",children:[Object(n.jsx)(b,{className:"finished",onClick:i,children:"Completed"}),Object(n.jsx)(b,{className:"todo",onClick:l,children:"Todo"}),Object(n.jsx)(b,{className:"unfiltered",onClick:d,children:"All"})]})]})}),u&&t.map((function(e){return Object(n.jsx)(m,{task:e,onRemove:c,showCompleted:a,onEdit:o,theme:O},e.id)})),s&&t.map((function(e){return 0==e.completed?Object(n.jsx)(m,{task:e,onRemove:c,showCompleted:a,onEdit:o,theme:O},e.id):Object(n.jsx)(n.Fragment,{})})),r&&t.map((function(e){return 1==e.completed?Object(n.jsx)(m,{task:e,onRemove:c,showCompleted:a,onEdit:o,theme:O},e.id):Object(n.jsx)(n.Fragment,{})}))]})}),O=(c(20),function(e){var t=e.label,c=e.value,a=e.onChange,o=e.hasError,i=e.theme,l=Object(j.a)("title-input input",o&&"required"),s=Object(j.a)("text-box",i),r=Object(j.a)("label-box",i);return Object(n.jsxs)("div",{className:l,children:[Object(n.jsx)("label",{htmlFor:t,className:r,children:t}),Object(n.jsx)("input",{id:t,type:"text",className:s,value:c,onChange:a})]})}),h=(c(21),c(8)),f=function(e){var t=e.addTask,c=e.onEditCancel,o=e.editTask,i=e.saveEditTask,s=e.theme,d=e.changeTheme,b=Object(a.useState)(o?o.title:""),m=Object(r.a)(b,2),u=m[0],f=m[1],x=Object(a.useState)(o?o.content:""),v=Object(r.a)(x,2),p=v[0],k=v[1],g=Object(a.useState)({title:!1,content:!1}),N=Object(r.a)(g,2),C=N[0],E=N[1],S=Object(j.a)("task-tracker",s),T=Object(j.a)("btn",s),y=Object(j.a)("theme-button",s),w=Object(j.a)("btn edit margin",s),I=Object(j.a)("btn cancel",s);return Object(n.jsxs)("div",{className:"add-todo-container",children:[Object(n.jsxs)("div",{className:"task-tracker-container",children:[Object(n.jsx)("h2",{className:S,children:"Task Tracker"}),Object(n.jsxs)("div",{className:"btns-container-add",children:[!o&&Object(n.jsx)("button",{className:y,onClick:d,"aria-label":"Switch theme",children:"dark"==s?Object(n.jsx)(h.b,{}):Object(n.jsx)(h.a,{})}),!o&&Object(n.jsx)("button",{className:T,onClick:function(){u.trim()&&p.trim()&&(t(u,p),f(""),k("")),E({title:!u.trim(),content:!p.trim()})},children:"Add"})]}),o&&Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:w,onClick:function(){return e=p,u.length>0&&e.length>0&&(i(o.id,u,p),f(""),k("")),void E({title:0===u.length,content:0===p.length});var e},children:"Edit"}),Object(n.jsx)("button",{className:I,onClick:function(){c(),f(""),k("")},children:"Cancel"})]})]}),Object(n.jsxs)("div",{className:"todo-create-container",children:[Object(n.jsx)(O,{label:"Title:",value:u,onChange:function(e){f(e.target.value),E(Object(l.a)(Object(l.a)({},C),{},{title:!e.target.value}))},hasError:C.title,theme:s}),Object(n.jsx)(O,{label:"Todo:",value:p,onChange:function(e){k(e.target.value),E(Object(l.a)(Object(l.a)({},C),{},{content:!e.target.value}))},hasError:C.content,theme:s})]})]})},x=(c(22),[{id:0,title:"Example Task",content:"Tap to mark as completed",completed:!1},{id:1,title:"Example Task",content:"I'm completed",completed:!0},{id:2,title:"Example Task",content:"Press the add button to create a new task",completed:!1}]),v=localStorage.getItem("theme"),p=JSON.parse(localStorage.getItem("todos")),k=function(){var e=Object(a.useState)(p||x),t=Object(r.a)(e,2),c=t[0],o=t[1],i=Object(a.useState)(null),d=Object(r.a)(i,2),b=d[0],m=d[1],O=Object(a.useState)(!1),h=Object(r.a)(O,2),k=h[0],g=h[1],N=Object(a.useState)(!1),C=Object(r.a)(N,2),E=C[0],S=C[1],T=Object(a.useState)(!0),y=Object(r.a)(T,2),w=y[0],I=y[1],R=Object(a.useState)(v||"dark"),F=Object(r.a)(R,2),J=F[0],A=F[1];Object(a.useEffect)((function(){document.body.style="light"==J?"background:var(--pagecolorLight)":" background:var(--pagecolor)",localStorage.setItem("theme",J),localStorage.setItem("todos",JSON.stringify(c))}),[J,c]);var M=function(){m(null)},q=Object(j.a)("container",J);return Object(n.jsxs)("div",{className:q,children:[Object(n.jsx)(f,{addTask:function(e,t){var n={id:Math.floor(1e3*Math.random()),title:e,content:t};o([].concat(Object(s.a)(c),[n]))},onCancel:function(e,t){setEditMode(!1),t(""),e("")},editTask:b,saveEditTask:function(e,t,n){o(c.map((function(c){return c.id==e?Object(l.a)(Object(l.a)({},c),{},{title:t,content:n}):c}))),m(null)},onEditCancel:M,theme:J,setTheme:A,changeTheme:function(){A("light"===J?"dark":"light")}},b&&b.id),c.length>0&&Object(n.jsx)(u,{tasks:c,onRemove:function(e){b&&e===b.id&&M(),o(c.filter((function(t){return t.id!==e})))},showCompleted:function(e){o(c.map((function(t){return t.id==e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))},onEdit:function(e){m(e)},byCompleted:function(){g(!0),S(!1),I(!1)},byTodo:function(){S(!0),g(!1),I(!1)},todo:E,finished:k,byAll:function(){I(!0),S(!1),g(!1)},all:w,theme:J})]})};function g(){return Object(n.jsx)(k,{})}Number.parseFloat(localStorage.getItem("version")||0)<1.2&&(console.log("Outdated app: removing local storage"),localStorage.removeItem("todos")),localStorage.setItem("version",JSON.stringify(1.2)),i.a.render(Object(n.jsx)(g,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e0fbf96e.chunk.js.map