(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={li:"ContactList_li__UAvMU",button:"ContactList_button__3KlIW"}},19:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(11),i=n.n(r),u=(n(19),n(7)),l=n(13),s=n(2),b=n(4),j=n.n(b),m=n(12),f=n.n(m);function d(t){var e=t.onSubmitData,n=t.onCheckUnique,o=Object(c.useState)(""),r=Object(s.a)(o,2),i=r[0],u=r[1],l=Object(c.useState)(""),b=Object(s.a)(l,2),m=b[0],d=b[1],h=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":u(a);break;case"number":d(a)}},O=function(){return i&&m?n(i):(alert("Some field is empty!"),!1)},p=function(){u(""),d("")};return Object(a.jsxs)("form",{className:j.a.form,onSubmit:function(t){t.preventDefault(),O()&&(e({id:f.a.generate(),name:i,number:m}),p())},autoComplete:"off",children:[Object(a.jsxs)("label",{className:j.a.label,children:["Name"," ",Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:i,onChange:h})]}),Object(a.jsxs)("label",{className:j.a.label,children:["Number"," ",Object(a.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:m,onChange:h})]}),Object(a.jsx)("button",{type:"submit",className:j.a.submit_button,children:"Add contact"})]})}var h=n(9),O=n.n(h),p=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:O.a.filter_title,children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",placeholder:"Enter contact name",className:O.a.filter_input,value:e,onChange:n})]})},_=n(10),x=n.n(_),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsxs)("li",{className:x.a.li,children:[t.name,": ",t.number,Object(a.jsx)("button",{className:x.a.button,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})};var C={width:"500px",margin:"0 auto",paddingTop:"30px"},g={textAlign:"center",color:"#6B5EAC"};function S(){var t=function(t,e){var n=Object(c.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),a=Object(s.a)(n,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(o))}),[t,o]),[o,r]}("contacts",""),e=Object(s.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),b=i[0],j=i[1];return Object(a.jsxs)("div",{style:Object(u.a)({},C),children:[Object(a.jsx)("h1",{style:Object(u.a)({},g),children:"Phonebook"}),Object(a.jsx)(d,{onSubmitData:function(t){o((function(e){return[].concat(Object(l.a)(e),[t])}))},onCheckUnique:function(t){var e=!!n.find((function(e){return e.name===t}));return e&&alert("Contact is already exist!"),!e}}),Object(a.jsx)("h2",{style:Object(u.a)({},g),children:"Contacts"}),Object(a.jsx)(p,{value:b,onChange:function(t){j(t.target.value)}}),Object(a.jsx)(v,{contacts:function(){var t=b.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){o(n.filter((function(e){return e.id!==t})))}})]})}i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={form:"ContactForm_form__1jGXr",label:"ContactForm_label__36boj",submit_button:"ContactForm_submit_button__aiPhI"}},9:function(t,e,n){t.exports={filter_title:"Filter_filter_title__3XsaL",filter_input:"Filter_filter_input__ApgbL"}}},[[28,1,2]]]);
//# sourceMappingURL=main.86fdab4f.chunk.js.map