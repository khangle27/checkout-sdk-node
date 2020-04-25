(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(6),a=(n(0),n(121)),c={id:"events",title:"Events"},i={id:"events",title:"Events",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/events.md",permalink:"https://checkout.github.io/checkout-sdk-node/events",sidebar:"someSidebar",previous:{title:"Webhooks",permalink:"https://checkout.github.io/checkout-sdk-node/webhooks"}},l=[{value:"Retrieve event types",id:"retrieve-event-types",children:[]},{value:"Retrieve events",id:"retrieve-events",children:[]},{value:"Retrieve event",id:"retrieve-event",children:[]},{value:"Retrieve event notification",id:"retrieve-event-notification",children:[]},{value:"Retry webhook",id:"retry-webhook",children:[]},{value:"Retry all webhooks",id:"retry-all-webhooks",children:[]}],s=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{color:n,padding:"0.2rem"}},t)},u={rightToc:l,Highlight:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Events"}),"here"),"."),Object(a.b)("h2",{id:"retrieve-event-types"},"Retrieve event types"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const events = await cko.events.retrieveEventTypes();\n")),Object(a.b)("h2",{id:"retrieve-events"},"Retrieve events"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const events = await cko.events.retrieveEvents({\n    from: '2019-03-01T00:00:00Z'\n});\n")),Object(a.b)("h2",{id:"retrieve-event"},"Retrieve event"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const event = await cko.events.retrieveEvent('evt_c2qelfixai2u3es3ksovngkx3e');\n")),Object(a.b)("h2",{id:"retrieve-event-notification"},"Retrieve event notification"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const notification = await cko.events.retrieveEventNotification({\n    eventId: 'evt_c2qelfixai2u3es3ksovngkx3e',\n    notificationId: 'ntf_wqjkqpgjy33uxoywcej4fnw6qm'\n});\n")),Object(a.b)("h2",{id:"retry-webhook"},"Retry webhook"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const retry = await cko.events.retry({\n    eventId: 'evt_c2qelfixai2u3es3ksovngkx3e',\n    webhookId: 'wh_mpkyioafmajulnhjvwmrklenb4'\n});\n")),Object(a.b)("h2",{id:"retry-all-webhooks"},"Retry all webhooks"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const retryAll = await cko.events.retryAll('evt_c2qelfixai2u3es3ksovngkx3e');\n")))}b.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),v=r,d=b["".concat(c,".").concat(v)]||b[v]||p[v]||a;return n?o.a.createElement(d,i({ref:t},s,{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);