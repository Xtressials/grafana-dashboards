(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{x9oW:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("/MKj"),a=n("t8hP"),c=n("kDLi"),l=n("ZGyg"),u=n("0Tfw"),f=n("gKHt"),s=n("lzJ5"),p=n("4vLh"),b=n("qOGI");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){var e,n;v(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=g(this,(e=w(t)).call.apply(e,[this].concat(o)))).onSubmit=function(e){n.props.createNotificationChannel(Object(f.c)(O({},f.a,{},e)))},n.onTestChannel=function(e){n.props.testNotificationChannel(Object(f.d)(O({},f.a,{},e)))},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.props.loadNotificationTypes()}},{key:"render",value:function(){var e=this,t=this.props,n=t.navModel,r=t.notificationChannelTypes;return o.a.createElement(l.a,{navModel:n},o.a.createElement(l.a.Contents,null,o.a.createElement("h2",{className:"page-sub-heading"},"New notification channel"),o.a.createElement(c.Form,{onSubmit:this.onSubmit,validateOn:"onChange",defaultValues:f.a,maxWidth:600},(function(t){var n=t.register,i=t.errors,c=t.control,l=t.getValues,s=t.watch,p=r.find((function(e){return e.value===l().type.value}));return o.a.createElement(u.a,{selectableChannels:Object(f.b)(r,!0),selectedChannel:p,onTestChannel:e.onTestChannel,register:n,errors:i,getValues:l,control:c,watch:s,imageRendererAvailable:a.config.rendererAvailable,resetSecureField:e.props.resetSecureField,secureFields:{}})}))))}}])&&m(n.prototype,r),i&&m(n,i),t}(r.PureComponent),P={createNotificationChannel:p.c,loadNotificationTypes:p.i,testNotificationChannel:p.l,resetSecureField:b.g};t.default=Object(i.connect)((function(e){return{navModel:Object(s.a)(e.navIndex,"channels"),notificationChannelTypes:e.notificationChannel.notificationChannelTypes}}),P)(C)}}]);
//# sourceMappingURL=NewNotificationChannel.88f3571bf814cd85c9d4.js.map