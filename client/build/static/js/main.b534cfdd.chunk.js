(this["webpackJsonpjwt-postgres-todo"]=this["webpackJsonpjwt-postgres-todo"]||[]).push([[0],{48:function(e,t,a){e.exports=a(65)},54:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a(4),s=a.n(c),l=a(9),i=a(8),m=(a(54),a(55),a(20)),u=a(6),d=a(16),p=a(23),h=a(26),f=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:""}),o=Object(l.a)(a,2),c=o[0],u=o[1],f=c.email,g=c.password,b=function(e){return u(Object(h.a)(Object(h.a)({},c),{},Object(p.a)({},e.target.name,e.target.value)))},E=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit login data"),a.preventDefault(),e.prev=2,n={email:f,password:g},e.next=6,fetch("http://localhost:5000/authentication/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:return r=e.sent,e.next=9,r.json();case 9:(o=e.sent).jwtToken?(localStorage.setItem("token",o.jwtToken),t(!0),d.a.success("Logged in Successfully")):(t(!1),d.a.error(o)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authWrapper"},r.a.createElement("div",{className:"authContainer"},r.a.createElement("h5",{className:"subHeaderSmall"},"Login"),r.a.createElement("p",null,"Not a member yet? Register",r.a.createElement(m.b,{className:"link",to:"/register"}," ","here")),r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:f,onChange:function(e){return b(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:g,onChange:function(e){return b(e)},className:"form-control my-3"}),r.a.createElement("button",{className:"submitButton"},"Submit"))))},g=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",password:"",firstname:"",lastname:""}),o=Object(l.a)(a,2),c=o[0],u=o[1],f=c.email,g=c.password,b=c.firstname,E=c.lastname,v=function(e){return u(Object(h.a)(Object(h.a)({},c),{},Object(p.a)({},e.target.name,e.target.value)))},N=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:f,password:g,firstname:b,lastname:E},e.next=5,fetch("http://localhost:5000/authentication/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(o=e.sent).jwtToken?(localStorage.setItem("token",o.jwtToken),t(!0),d.a.success("Registered Successfully")):(t(!1),d.a.error(o)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authWrapper"},r.a.createElement("div",{className:"authContainer"},r.a.createElement("h5",{className:"subHeaderSmall"},"Register here"),r.a.createElement("p",null,"Already a member, log back in",r.a.createElement(m.b,{className:"link",to:"/login"}," ","here")),r.a.createElement("form",{onSubmit:N},r.a.createElement("input",{type:"text",name:"email",value:f,placeholder:"Email",onChange:function(e){return v(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"password",name:"password",value:g,placeholder:"Password",onChange:function(e){return v(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"text",name:"firstname",value:b,placeholder:"First Name",onChange:function(e){return v(e)},className:"form-control my-3"}),r.a.createElement("input",{type:"text",name:"lastname",value:E,placeholder:"Last Name",onChange:function(e){return v(e)},className:"form-control my-3"}),r.a.createElement("button",{className:"submitButton"},"Submit"))))},b=function(e){var t=e.setTodosChange,a=Object(n.useState)(""),o=Object(l.a)(a,2),c=o[0],m=o[1],u=function(){var e=Object(i.a)(s.a.mark((function e(a){var n,r,o,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!c){e.next=23;break}return e.prev=2,(n=new Headers).append("Content-Type","application/json"),n.append("jwt_token",localStorage.token),r=new Date,o={description:c,created_at:r},console.log("body in handleSubmit",o),e.next=11,fetch("http://localhost:5000/dashboard/todos",{method:"POST",headers:n,body:JSON.stringify(o)});case 11:return l=e.sent,e.next=14,l.json();case 14:i=e.sent,console.log("parseResponse",i),t(!0),m(""),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),console.error(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"todoListContainer__form"},r.a.createElement("h5",{className:"subHeaderSmall"},"All your tings in one place"),r.a.createElement("form",{onSubmit:u,className:"todoListContainer__todoFormField d-flex"},r.a.createElement("input",{value:c,type:"text",placeholder:"Add Ting here",className:"todoForm__input form-control",onChange:function(e){return m(e.target.value)}}),r.a.createElement("button",{disabled:!c,className:"todoForm__btn mainButton  ".concat(c.length?"":"disabled")},"Add")))},E=a(43),v=a.n(E),N=function(e){var t,a=e.todo,o=e.setTodosChange,c=Object(n.useState)(a.description),m=Object(l.a)(c,2),u=m[0],d=m[1],p=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(n=new Headers).append("Content-Type","application/json"),n.append("jwt_token",localStorage.token),r={description:u},console.log("body in handleUpdate",r),e.next=9,fetch("http://localhost:5000/dashboard/todos/".concat(a.todo_id),{method:"PUT",headers:n,body:JSON.stringify(r)});case 9:c=e.sent,o(!0),console.log("updatedTodo response",c),d(""),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("button",{type:"button",className:"iconButton","data-toggle":"modal","data-target":"#id".concat(a.todo_id)},r.a.createElement(v.a,null)),r.a.createElement("div",{className:"modal modalOutline",id:"id".concat(a.todo_id),onClick:function(){return d(a.description)}},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"todoList__Item"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Edit Todo"),r.a.createElement("button",{onClick:function(){return d(a.description)},type:"button",className:"close","data-dismiss":"modal"},"\xd7")),r.a.createElement("div",{className:"todoList__Inner"},r.a.createElement("p",null,r.a.createElement("strong",null,"Description")),r.a.createElement("div",{className:"todoList__textContainer"},r.a.createElement("input",{value:(t=u,t.slice(0,1).toUpperCase()+t.slice(1,t.length)),type:"text",placeholder:"Update ting here",className:"todoForm__input form-control",onChange:function(e){return d(e.target.value)}}),r.a.createElement("button",{type:"button","data-dismiss":"modal",onClick:function(e){return p(e)},className:"todoForm__btn mainButton"},"Update"))))))))},j=a(44),y=a.n(j),O=a(82),k=function(e){var t=e.allTodos,a=e.setTodosChange,o=e.toggleComplete,c=Object(n.useState)([]),m=Object(l.a)(c,2),u=m[0],d=m[1],p=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/dashboard/todos/".concat(t),{method:"DELETE",headers:{jwt_token:localStorage.token}});case 3:d(u.filter((function(e){return e.todo_id!==t}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d(t)}),[t]);return r.a.createElement(r.a.Fragment,null,0!==u.length?r.a.createElement("ul",{className:"todoList"},0!==u.length&&null!==u[0].todo_id&&u.map((function(e,t){return r.a.createElement("li",{className:"todoList__Item",key:e.todo_id},r.a.createElement("div",{className:"todoList__createdContainer"},r.a.createElement("p",null,r.a.createElement("strong",null,"Created: "),(s=e.created_at,new Date(s).toLocaleDateString("en-EN",{year:"numeric",month:"short",day:"numeric"})))," ",r.a.createElement("p",null,r.a.createElement("strong",null,"\xa0 @ "),(c=e.created_at,new Date(c).toLocaleTimeString()))),r.a.createElement("div",{className:"todoList__Inner  ".concat(e.completed?"completed":"")},r.a.createElement("div",{className:"todoList__descriptionContainer"},r.a.createElement("div",{className:"todoList__textContainer"},r.a.createElement("p",null,r.a.createElement("strong",null,"Description")),r.a.createElement("p",{style:{textDecoration:e.completed?"line-through":"none",opacity:e.completed?"0.5 ":"1"}},(n=e.description).slice(0,1).toUpperCase()+n.slice(1,n.length)),r.a.createElement("div",{className:"todoList__infoContainer"},r.a.createElement("div",{className:"checkBoxContainer"},r.a.createElement(O.a,{tabIndex:-1,checked:e.completed,name:"checkBox",onClick:function(){return t=e.todo_id,a=e.completed,void o(t,a);var t,a}}),r.a.createElement("label",{className:"checkBoxlabel",htmlFor:"checkBox"},r.a.createElement("strong",null,"Status: "),"".concat(e.completed?"Completed":"In progress"))),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(N,{todo:e,setTodosChange:a}),r.a.createElement("button",{"aria-label":"Delete",onClick:function(){return p(e.todo_id)},className:"iconButton ml1"},r.a.createElement(y.a,null))))))));var n,c,s}))):r.a.createElement("img",{className:"noTodosImage",src:"/img/todo-list.png",alt:"no imgae?"}))},x=function(e){var t=e.firstname,a=e.logout;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("p",null,"Welcome to your Ting Dashboard, ",r.a.createElement("strong",null,t)),r.a.createElement("button",{onClick:function(e){return a(e)},className:"logOut"},r.a.createElement("i",{className:"fas fa-sign-out-alt"})))},_=function(e){var t=e.setAuth,a=Object(n.useState)(""),o=Object(l.a)(a,2),c=o[0],m=o[1],u=Object(n.useState)([]),p=Object(l.a)(u,2),h=p[0],f=p[1],g=Object(n.useState)(!1),E=Object(l.a)(g,2),v=E[0],N=E[1],j=function(){var e=Object(i.a)(s.a.mark((function e(t,a){var n,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("completedState in toggleComplete",a),e.prev=1,(n=new Headers).append("Content-Type","application/json"),n.append("jwt_token",localStorage.token),r={completed:!a},console.log("toggleComplete ? body",r),e.next=9,fetch("http://localhost:5000/dashboard/todos/completed/".concat(t),{method:"PUT",headers:n,body:JSON.stringify(r)});case 9:return o=e.sent,e.next=12,o.json();case 12:c=e.sent,console.log("parseResponse",c),N(!0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/dashboard/",{method:"GET",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,f(a),a[0].user_firstname&&m(a[0].user_firstname),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{localStorage.removeItem("token"),t(!1),d.a.success("Logout successfully",{position:d.a.POSITION.BOTTOM_LEFT,className:"toastify-this"})}catch(n){console.error(n.message)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y(),N(!1)}),[v]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{firstname:c,logout:O}),r.a.createElement(b,{setTodosChange:N}),r.a.createElement("section",{className:"todoListContainer"},r.a.createElement("div",{className:"todoListContainer__list"},r.a.createElement(k,{allTodos:h,setTodosChange:N,toggleComplete:j}))))},w=function(){return r.a.createElement("div",{className:"authWrapper"},r.a.createElement("div",{className:"authContainer"},r.a.createElement("div",{className:"introContainer"},r.a.createElement("h2",null,"Welcome to Ting"),r.a.createElement("p",null,"Sign-in and start building your Tings!"),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(m.b,{to:"/login",className:"mainButton"},"Login"),r.a.createElement(m.b,{to:"/register",className:"mainButton"},"Register")))))};d.a.configure();var C=function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/authentication/verify",{method:"POST",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(!0===a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){e.apply(this,arguments)}()}),[]);var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],d=function(e){c(e)};return r.a.createElement(m.a,null,r.a.createElement("div",{className:"appContainer"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(e){return o?r.a.createElement(u.a,{to:"/dashboard"}):r.a.createElement(w,e)}}),r.a.createElement(u.b,{exact:!0,path:"/register",render:function(e){return o?r.a.createElement(u.a,{to:"/dashboard"}):r.a.createElement(g,Object.assign({},e,{setAuth:d}))}}),r.a.createElement(u.b,{exact:!0,path:"/login",render:function(e){return o?r.a.createElement(u.a,{to:"/dashboard"}):r.a.createElement(f,Object.assign({},e,{setAuth:d}))}}),r.a.createElement(u.b,{exact:!0,path:"/dashboard",render:function(e){return o?r.a.createElement(_,Object.assign({},e,{setAuth:d})):r.a.createElement(u.a,{to:"/login"})}}))))};Object(o.render)(r.a.createElement(C,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b534cfdd.chunk.js.map