/*! For license information please see 502.a78294bb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[502],{854:function(t,e,n){var r=n(975),o=n(184);e.Z=function(){return(0,o.jsx)(r.gy,{heigth:"100",width:"100",color:"grey",ariaLabel:"loading"})}},815:function(t,e,n){n.d(e,{O:function(){return u},r:function(){return l}});var r,o,i=n(168),a=n(867),c=n(87),u=a.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  align-items: flex-start;\n"]))),l=(0,a.ZP)(c.OL)(o||(o=(0,i.Z)(["\n  &.active,\n  &:hover {\n    color: #d8bfd8;\n  }\n"])))},508:function(t,e,n){n.d(e,{Ai:function(){return s},Bt:function(){return p},Mc:function(){return f},Tg:function(){return l},wL:function(){return h}});var r=n(861);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new _(o||[]);return r(a,"_invoke",{value:L(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var y={};l(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(Z([])));m&&m!==e&&n.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(r,i,a,c){var u=f(t[r],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function Z(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,r(w,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),l(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=Z,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:Z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var i="https://api.themoviedb.org/3/",a="0dc1b7672e27ccf3c49c2486e3f06114";function c(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(o().mark((function t(){var e,n,r,i=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},console.log(e),t.next=5,fetch(e,n);case 5:if(!(r=t.sent).ok){t.next=12;break}return t.next=9,r.json();case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0=Promise.reject(new Error("Not found"));case 13:return t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(){return c("".concat(i,"/trending/movie/day?api_key=").concat(a))}function s(t){return console.log(t),c("".concat(i,"search/movie?api_key=").concat(a,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"))}function f(t){return console.log(t),c("".concat(i,"movie/").concat(t,"?api_key=").concat(a,"&language=en-US"))}function h(t){return c("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(a,"&language=en-US"))}function p(t){return c("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}},502:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r,o,i,a,c=n(433),u=n(439),l=n(791),s=n(87),f=n(689),h=n(508),p=n(168),d=n(867),v=n(719),y=d.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n"]))),g=d.ZP.input(o||(o=(0,p.Z)(["\n  display: inline-block;\n  width: 400px;\n  height: 30px;\n  font: inherit;\n  font-size: 20px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  border-color: #d8bfd8;\n"]))),m=d.ZP.button(i||(i=(0,p.Z)(["\n  background-color: #e6e6fa;\n  border-color: #d8bfd8;\n  display: inline-block;\n  height: 37px;\n  border: 0;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n"]))),w=(0,d.ZP)(v.wTD)(a||(a=(0,p.Z)(["\n  width: 40px;\n  heigth: 40px;\n"]))),x=n(184),b=function(t){var e=t.onSubmit,n=((0,f.TH)(),(0,l.useState)("")),r=(0,u.Z)(n,2),o=r[0],i=r[1];return(0,x.jsxs)(y,{onSubmit:function(t){if(t.preventDefault(),""===o.trim())return alert("Enter a search name");e(o),i("")},children:[(0,x.jsx)(g,{type:"text",autoComplete:"off",placeholder:"Search movie",value:o,onChange:function(t){var e=t.currentTarget.value.toLowerCase();i(e)}}),(0,x.jsxs)(m,{type:"submit",children:[" ",(0,x.jsx)(w,{})]})]})},L=n(683),j=n(815);var k=function(t){var e=t.movies,n=t.locationFrom;return(0,x.jsx)(j.O,{children:e.map((function(t){var e=t.id,r=t.title;return r&&(0,x.jsx)("li",{children:(0,x.jsx)(j.r,{to:"".concat(e),state:{from:(0,L.Z)({},n)},children:r})},e)}))})},E=n(854),_=function(){var t=(0,s.lr)(),e=(0,u.Z)(t,2),n=e[0],r=e[1],o=(0,l.useState)("idle"),i=(0,u.Z)(o,2),a=i[0],p=i[1],d=(0,l.useState)(null),v=(0,u.Z)(d,2),y=v[0],g=v[1],m=(0,l.useState)([]),w=(0,u.Z)(m,2),L=w[0],j=w[1],_=(0,f.TH)(),Z=n.get("query");(0,l.useEffect)((function(){Z&&(p("pending"),(0,h.Ai)(Z).then((function(t){j((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(t.results))})),p("resolved")})).catch((function(t){g(t),p("rejected")})))}),[Z]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b,{onSubmit:function(t){r("?query=".concat(t))}}),"pending"===a&&(0,x.jsx)(E.Z,{}),"rejected"===a&&(0,x.jsxs)("h1",{children:[y&&y.message," "]}),"resolved"===a&&(0,x.jsx)(k,{movies:L,locationFrom:_})]})}}}]);
//# sourceMappingURL=502.a78294bb.chunk.js.map