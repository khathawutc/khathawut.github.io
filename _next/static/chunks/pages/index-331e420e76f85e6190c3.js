_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var y=h;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JsKY:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n("/PtW");function i(e,t){return function(){var n=arguments.length;if(0===n)return t();var r=arguments[n-1];return Object(a.a)(r)||"function"!==typeof r[e]?t.apply(this,arguments):r[e].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var c=n("1z8A"),u=Object(c.a)(i("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)}))),s=n("vOnD"),f=n("WlAH"),l=s.b.div.withConfig({displayName:"Introduce__Contianer",componentId:"sc-1j8r5zn-0"})(["width:100%;height:calc(var(--vh,1vh) * 100);display:flex;justify-content:center;align-items:center;"]),d=s.b.div.withConfig({displayName:"Introduce__TypoContainer",componentId:"sc-1j8r5zn-1"})(["font-size:3rem;white-space:pre;text-align:center;color:#2d2d2b;@media only screen and (max-width:","px){font-size:2rem;}"],f.a.screenSize.small);t.default=function(e){var t=Object(o.useRef)(null);return Object(o.useEffect)((function(){if(t.current){t.current.innerHTML="";var e=function e(n,r){if(r<n.length){t.current.innerHTML;t.current.innerHTML=u(0,r+1,n)+'<span class="caret"></span>',setTimeout((function(){e(n,r+1)}),100)}};setTimeout((function(){e("Hi! I'm Khathawut,\nWeb developer.\n: )",0)}),1e3)}}),[]),Object(r.jsx)(l,{children:Object(r.jsx)(d,{ref:t})})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n("g4pe"),i=n.n(a),c=n("vOnD"),u=n("YEJx"),s=function(e){var t=e.handlePage,n=Object(o.useState)(!1),a=n[0],i=n[1];Object(o.useEffect)((function(){setTimeout((function(){i(!0)}),5300)}),[]);var c=function(e){return function(){t(e)}};return Object(r.jsxs)(f,{isShow:a,children:[Object(r.jsx)(l,{children:"KHATHAWUT"}),Object(r.jsxs)(d,{children:[Object(r.jsx)(p,{onClick:c(1),children:"About"}),Object(r.jsx)(p,{onClick:c(2),children:"Works"}),Object(r.jsx)(p,{onClick:c(3),children:"Contact"})]})]})},f=c.b.div.withConfig({displayName:"Header__Contianer",componentId:"sc-26e9sz-0"})(["position:absolute;width:100%;display:flex;opacity:",";justify-content:center;align-items:center;flex-direction:column;transition:opacity 2s;"],Object(u.a)("isShow","100%","0%")),l=c.b.div.withConfig({displayName:"Header__LogoContainer",componentId:"sc-26e9sz-1"})(["height:fit-content;font-size:1rem;text-align:center;color:#f0e4d8;padding:4px 14px;background:#2d2d2b;margin-top:20px;margin-bottom:16px;transform:translate(0,0);"]),d=c.b.div.withConfig({displayName:"Header__MenuContainer",componentId:"sc-26e9sz-2"})(["display:flex;flex-direction:row;"]),p=c.b.div.withConfig({displayName:"Header__MenuItem",componentId:"sc-26e9sz-3"})(["cursor:pointer;position:relative;font-size:1.1rem;text-align:center;color:#2d2d2b;margin:8px 36px;&::after{background:none repeat scroll 0 0 transparent;bottom:-5px;content:'';display:block;height:1px;left:50%;position:absolute;background:#2d2d2b;transition:width 0.5s ease 0s,left 0.5s ease 0s;width:0;}&:hover::after{width:100%;left:0;}"]),h=n("JsKY"),y=n("z4TA");t.default=function(){var e=Object(o.useState)(0),t=e[0],n=e[1],a=function(e){n(e),function(e){var t=e.action,n=e.category,r=e.label,o=e.value;window.gtag("event",t,{event_category:n,event_label:r,value:o})}({action:"Click_Menu",value:"".concat(e)})};return Object(o.useEffect)((function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"KHATHAWUT"}),Object(r.jsx)("meta",{property:"og:title",content:"My page title"},"title")]}),0!==t&&Object(r.jsx)(y.default,{currPage:t,handlePage:a}),Object(r.jsx)(s,{handlePage:a}),Object(r.jsx)(h.default,{})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,4]]]);