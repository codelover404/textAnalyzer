(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),i=(n(13),n(5)),l=n(6),o=n(8),j=n(7),b=(n(14),n(3)),d=n(0);var u=function(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)({color:"gray",backgroundColor:"#eee"}),i=Object(b.a)(s,2),l=i[0];return i[1],Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container mt-5 p-3",style:l,children:[Object(d.jsx)("div",{className:"darkmode"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("form",{onClick:function(e){e.preventDefault()},children:[Object(d.jsx)("h3",{children:e.heading}),Object(d.jsx)("textarea",{placeholder:"WRITE TEXT",rows:"10",value:r,id:"textarea",className:"form-control",onChange:function(e){a(e.target.value)}}),Object(d.jsx)("button",{className:"btn btn-primary mt-3 ",onClick:function(){var e=r.toUpperCase();a(e)},children:"CONVERT TO UPPERCASE"}),Object(d.jsx)("button",{className:"btn btn-primary mt-3 mx-2",onClick:function(){a(" ")},children:"CLEAR"}),Object(d.jsx)("button",{className:"btn btn-primary mt-3 mx-2",onClick:function(){var e=document.querySelector("#textarea");e.select(),navigator.clipboard.writeText(e.value)},children:"COPY TEXT"}),Object(d.jsx)("button",{className:"btn btn-primary mt-3 mx-2",onClick:function(){var e=r.split(/[ ]+/);a(e.join(""))},children:"REMOVE SPACE"})]})}),Object(d.jsxs)("div",{className:"col-md-12 my-4",children:[Object(d.jsx)("h2",{children:"Your text summary"}),Object(d.jsxs)("p",{children:[r.split(" ").length,"Words a d ",r.length," characters."]}),Object(d.jsxs)("p",{children:[.008*r.split(" ").length," Minutes read."]})]}),Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsx)("h2",{children:"Preview Text"}),Object(d.jsx)("p",{children:r})]})]})]})})};var m=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u,{heading:"Enter The Text To Analyze"})})}}]),n}(r.a.Component),h=m,O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.7ea8d6c5.chunk.js.map