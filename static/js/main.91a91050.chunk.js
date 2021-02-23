(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",bgColor:"#5b039f",accentColor:"#8d38cf",activeBtnColor:"#37039f",container:"ContactForm_container__2NZPh",field:"ContactForm_field__2T9gL",label:"ContactForm_label__3ECIo",input:"ContactForm_input__2XZm9",button:"ContactForm_button__2IUnx"}},,function(e,t,n){e.exports={colors:"'../../styles/variables/colors.css'",secondaryColor:"#3968a5",container:"Sorter_container__1b3Qg",subtitle:"Sorter_subtitle__1pEzu",inputWrapper:"Sorter_inputWrapper__aVJlH",label:"Sorter_label__oZcQW",input:"Sorter_input__1ee7V"}},,,,,,,function(e,t,n){e.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",container:"Container_container__1r00t",titleWrapper:"Container_titleWrapper__18qCk",mainTitle:"Container_mainTitle__34RnU",childContainer:"Container_childContainer__1FNRd",appear:"Container_appear__mMzKR",appearActive:"Container_appearActive__vkgba"}},function(e,t,n){e.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",bgColor:"#5b039f",accentColor:"#8d38cf",activeBtnColor:"#37039f",contactItem:"ContactList_contactItem__34Emf",contactWrapper:"ContactList_contactWrapper__p-8Pu",button:"ContactList_button__NVDhi",icon:"ContactList_icon__1_7dW",contactPhoto:"ContactList_contactPhoto__fMIKm",link:"ContactList_link__3__Ro"}},function(e,t,n){e.exports={colors:"'../../styles/variables/colors.css'",secondaryColor:"#3968a5",secondaryAccentColor:"#3b8bff87",container:"Filter_container__xmYce",field:"Filter_field__LicJi",label:"Filter_label__FTCUg",input:"Filter_input__1QO-n"}},,,function(e,t,n){e.exports={wrapper:"Header_wrapper__1gd0c",title:"Header_title__24q5N",addBtn:"Header_addBtn__7wqnx"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__25vno",content:"Modal_content__2CkvZ",closeBtn:"Modal_closeBtn__jaRHc"}},,,,,,,function(e,t,n){e.exports={container:"Notice_container__1dAIS",notice:"Notice_notice__3MHqS"}},,,,,,function(e,t,n){e.exports={colors:"'../../../styles/variables/colors.css'",bgColor:"#5b039f",accentColor:"#8d38cf",activeBtnColor:"#37039f",button:"IconButton_button__2r_dN"}},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(7),l=n.n(o),i=n(5),s=n(34),u=n(22),d=n(6),b=n(10),j=n(35),h=n.n(j),p=n(36),f=n.n(p),m=n(8),O=n(2),v=n(62),x={addContact:Object(d.b)("contacts/Add",(function(e,t){return{payload:{id:Object(v.a)(),name:e,number:t,completed:!1,date:Date.now()}}})),deleteContact:Object(d.b)("contacts/Delete"),changeFilter:Object(d.b)("contacts/ChangeFilter"),changeSorting:Object(d.b)("contacts/ChangeSorting")},_=Object(d.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(m.a)(a,x.addContact,(function(e,t){var n=t.payload;return[].concat(Object(u.a)(e),[n])})),Object(m.a)(a,x.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),g=Object(d.c)("",Object(m.a)({},x.changeFilter,(function(e,t){return t.payload}))),C=Object(d.c)("date",Object(m.a)({},x.changeSorting,(function(e,t){return t.payload}))),y=Object(O.c)({items:_,filter:g,sorter:C}),w=[].concat(Object(u.a)(Object(d.d)({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})),[f.a]),N={key:"contacts",storage:h.a,blacklist:["filter"]},k=Object(d.a)({reducer:{contacts:Object(b.g)(N,y)},middleware:w,devTools:!1}),S={store:k,persistor:Object(b.h)(k)},E=n(12),M=n(13),I=n(15),P=n(14),B=n(61),F=n(18),A=n.n(F),D=n(1),L=function(e){var t=e.children;return Object(D.jsxs)("div",{className:A.a.container,children:[Object(D.jsx)("div",{className:A.a.titleWrapper,children:Object(D.jsx)(B.a,{in:!0,appear:!0,classNames:A.a,timeout:500,children:Object(D.jsx)("h1",{className:A.a.mainTitle,children:"Phonebook"})})}),Object(D.jsx)("div",{className:A.a.childContainer,children:t})]})},z=n(30),R=n(38),W=n(37),T=n.n(W),q=function(e){var t=e.children,n=e.className,a=e.onClick,r=Object(R.a)(e,["children","className","onClick"]),c=[n,T.a.button].join(" ");return Object(D.jsx)("button",Object(z.a)(Object(z.a)({type:"button",className:c,onClick:a},r),{},{children:t}))};q.defaultProps={className:"",children:null,onClick:function(){return null}};var H=q;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var U=r.createElement("path",{d:"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"});function Z(e,t){var n=e.title,a=e.titleId,c=J(e,["title","titleId"]);return r.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,U)}var Q=r.forwardRef(Z),V=(n.p,n(23)),X=n.n(V),Y=function(e){var t=e.onClick;return Object(D.jsxs)("div",{className:X.a.wrapper,children:[Object(D.jsx)("h2",{className:X.a.title,children:"Contacts"}),Object(D.jsx)(H,{className:X.a.addBtn,onClick:t,"aria-label":"Add contact",title:"Add contact",children:Object(D.jsx)(Q,{width:"16",height:"16",fill:"#fff"})})]})},G=n(9),$=n.n(G),ee=function(e){Object(I.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.contacts.some((function(e){return e.name===a}))?e.props.onSubmit(a):(e.props.onAddContact(a,r),e.props.onSave(),e.setState({name:"",number:""}))},e}return Object(M.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("form",{className:$.a.container,onSubmit:this.handleSubmit,children:[Object(D.jsxs)("label",{className:$.a.field,children:[Object(D.jsx)("span",{className:$.a.label,children:"Name"}),Object(D.jsx)("input",{className:$.a.input,type:"text",name:"name",value:t,onChange:this.handleChange,required:!0})]}),Object(D.jsxs)("label",{className:$.a.field,children:[Object(D.jsx)("span",{className:$.a.label,children:"Number"}),Object(D.jsx)("input",{className:$.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,required:!0})]}),Object(D.jsx)("button",{className:$.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(r.Component),te=Object(i.b)((function(e){return{contacts:e.contacts.items}}),(function(e){return{onAddContact:function(t,n){return e(x.addContact(t,n))}}}))(ee),ne=n(20),ae=n.n(ne);var re=Object(i.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChangeFilter:function(t){return e(x.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChangeFilter;return Object(D.jsx)("div",{className:ae.a.container,children:Object(D.jsxs)("label",{className:ae.a.field,children:[Object(D.jsx)("span",{className:ae.a.label,children:"Find contacts by name:"}),Object(D.jsx)("input",{className:ae.a.input,type:"text",name:"filter",value:t,onChange:n})]})})})),ce=n(63),oe=n(19),le=n.n(oe);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ue=r.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"}),de=r.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"});function be(e,t){var n=e.title,a=e.titleId,c=se(e,["title","titleId"]);return r.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,ue,de)}var je=r.forwardRef(be);n.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var fe=r.createElement("path",{d:"M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"});function me(e,t){var n=e.title,a=e.titleId,c=pe(e,["title","titleId"]);return r.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,fe)}var Oe=r.forwardRef(me);n.p;function ve(e){var t=e.name,n=e.number,a=e.onDelete,r=["tel:",n].join("");return Object(D.jsxs)("li",{className:le.a.contactItem,children:[Object(D.jsx)("span",{children:t}),Object(D.jsxs)("div",{className:le.a.contactWrapper,children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:n}),Object(D.jsx)("a",{className:le.a.link,href:r,children:Object(D.jsx)(H,{title:"Call up",className:le.a.button,"aria-label":"Make a call ",children:Object(D.jsx)(Oe,{className:le.a.icon,fill:"#0ce620"})})})]}),Object(D.jsx)(H,{title:"Delete contact",onClick:a,"aria-label":"Delete contact",children:Object(D.jsx)(je,{width:"14",height:"14",fill:"#fff"})})]})]})}ve.defaultProps={photo:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"};var xe=ve;n(51);var _e=Object(i.b)((function(e){var t,n,a=e.contacts,r=a.items,c=a.filter,o=a.sorter,l=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(r,c);return{contacts:(t=l,n=o,"abc"===n?t.sort((function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n<a?-1:n>a?1:0})):"date"===n?t.sort((function(e,t){return e.date<t.date?1:e.date>t.date?-1:0})):void 0)}}),(function(e){return{onDeleteContact:function(t){return e(x.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(D.jsx)(ce.a,{component:"ol",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(D.jsx)(B.a,{timeout:250,classNames:"item-fade",children:Object(D.jsx)(xe,{name:a,number:r,onDelete:function(){return n(t)}})},t)}))})})),ge=n(11),Ce=n.n(ge),ye="abc",we="date";var Ne=Object(i.b)((function(e){return{value:e.contacts.sorter}}),(function(e){return{onRadioChange:function(t){return e(x.changeSorting(t.target.value))}}}))((function(e){var t=e.value,n=e.onRadioChange;return Object(D.jsxs)("div",{className:Ce.a.container,children:[Object(D.jsx)("p",{className:Ce.a.subtitle,children:"Sort by:"}),Object(D.jsxs)("div",{className:Ce.a.inputWrapper,children:[Object(D.jsxs)("label",{className:Ce.a.label,children:[Object(D.jsx)("input",{className:Ce.a.input,type:"radio",name:"date",value:we,onChange:n,checked:t===we}),Object(D.jsx)("span",{children:"date"})]}),Object(D.jsxs)("label",{className:Ce.a.label,children:[Object(D.jsx)("input",{className:Ce.a.input,type:"radio",name:"abc",value:ye,onChange:n,checked:t===ye}),Object(D.jsx)("span",{children:"name"})]})]})]})}));function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ee=r.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"});function Me(e,t){var n=e.title,a=e.titleId,c=Se(e,["title","titleId"]);return r.createElement("svg",ke({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,Ee)}var Ie=r.forwardRef(Me),Pe=(n.p,n(24)),Be=n.n(Pe),Fe=(n(52),document.querySelector("#modal-root")),Ae=function(e){Object(I.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e.handleCloseBtnClick=function(){e.props.onClose()},e}return Object(M.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(D.jsx)("div",{className:Be.a.backdrop,onClick:this.handleBackdropClick,children:Object(D.jsx)(B.a,{in:!0,appear:!0,timeout:250,classNames:"content",unmountOnExit:!0,children:Object(D.jsxs)("div",{className:Be.a.content,children:[this.props.children,Object(D.jsx)(H,{className:Be.a.closeBtn,onClick:this.handleCloseBtnClick,"aria-label":"Close modal",title:"Close modal",children:Object(D.jsx)(Ie,{width:"12",height:"12",fill:"#fff"})})]})})}),Fe)}}]),n}(r.Component),De=n(31),Le=n.n(De),ze=function(e){var t=e.text;return Object(D.jsx)("div",{className:Le.a.container,children:Object(D.jsx)("p",{className:Le.a.notice,children:t})})},Re=(n(53),n(54),n(55),n(56),function(e){Object(I.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,error:!1,text:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.showNotice=function(t){e.setState({text:"".concat(t," is already in contacts!"),error:!0,showModal:!1}),setTimeout((function(){e.setState({error:!1})}),2e3)},e}return Object(M.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showModal,n=e.error,a=e.text;return Object(D.jsxs)(L,{children:[Object(D.jsx)(Y,{onClick:this.toggleModal}),Object(D.jsx)(B.a,{in:n,unmountOnExit:!0,classNames:"notice",timeout:250,children:Object(D.jsx)(ze,{text:a})}),Object(D.jsx)(B.a,{in:t,unmountOnExit:!0,classNames:"modal",timeout:500,children:Object(D.jsx)(Ae,{onClose:this.toggleModal,children:Object(D.jsx)(te,{onSave:this.toggleModal,onSubmit:this.showNotice})})}),Object(D.jsx)(B.a,{in:this.props.contacts.length>1,unmountOnExit:!0,classNames:"fade",timeout:250,children:Object(D.jsxs)("div",{children:[Object(D.jsx)(re,{}),Object(D.jsx)(Ne,{})]})}),Object(D.jsx)(B.a,{in:!0,appear:!0,unmountOnExit:!0,classNames:"item-fade",timeout:500,children:Object(D.jsx)(_e,{})})]})}}]),n}(r.PureComponent)),We=Object(i.b)((function(e){return{contacts:e.contacts.items}}))(Re);n(57),n(58);l.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(i.a,{store:S.store,children:Object(D.jsx)(s.a,{loading:null,persistor:S.persistor,children:Object(D.jsx)(We,{})})})}),document.getElementById("root"))}],[[59,1,2]]]);
//# sourceMappingURL=main.91a91050.chunk.js.map