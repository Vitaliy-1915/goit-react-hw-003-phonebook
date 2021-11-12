(this["webpackJsonpgoit-react-hw-003-phonebook"]=this["webpackJsonpgoit-react-hw-003-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"Form_form__Sqj-Y",label:"Form_label__3nsq3",input:"Form_input__3XnQX"}},,,,,,function(t,e,n){t.exports={ul:"ContactsList_ul__1TttO",li:"ContactsList_li__19Qet"}},function(t,e,n){t.exports={label:"Filter_label__3sN_B",input:"Filter_input__vzdvi"}},,function(t,e,n){t.exports={button:"Button_button__2EA3W"}},,,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(18),n(19),n(13)),i=n(3),l=n(4),u=n(6),m=n(5),b=(n(20),n(0));var d=function(t){var e=t.title;return Object(b.jsx)("h2",{children:e})},h=n(11),j=n.n(h);var f=function(t){var e=t.type,n=t.text,a=t.onClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:e,onClick:a,className:j.a.button,children:n})})},p=n(8),O=n.n(p);var v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:O.a.ul,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsxs)("li",{className:O.a.li,children:[a,": ",c,Object(b.jsx)(f,{type:"button",text:"Delete",onClick:function(){return n(e)}})]},e)}))})},C=n(12),x=n(2),g=n.n(x),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(C.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:g.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{className:g.a.label,children:["Name",Object(b.jsx)("input",{className:g.a.input,type:"text",name:"name",onChange:this.handleChange,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:g.a.label,children:["Number",Object(b.jsx)("input",{className:g.a.input,type:"tel",name:"number",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)(f,{type:"submit",text:"Add contact"})]})}}]),n}(a.Component),S=_,y=n(9),A=n.n(y);var N=function(t){var e=t.onChange,n=t.value;return Object(b.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(b.jsx)("input",{className:A.a.input,type:"text",name:"name",value:n,onChange:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},k=n(24),w=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmit=function(e){var n={id:Object(k.a)(),name:e.name,number:e.number};t.state.contacts.find((function(t){return t.name.toLowerCase().includes(n.name.toLowerCase())}))?alert("".concat(n.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))},t.onChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLocaleLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{title:"Phonebook"}),Object(b.jsx)(S,{onSubmit:this.formSubmit}),Object(b.jsx)(d,{title:"Contacts"}),Object(b.jsx)(N,{value:this.state.filter,onChange:this.onChangeFilter}),Object(b.jsx)(v,{contacts:e,onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component),z=w;o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.3e5fe5dc.chunk.js.map