(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"4vLh":function(e,t,n){"use strict";n.d(t,"g",(function(){return b})),n.d(t,"m",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"q",(function(){return y})),n.d(t,"l",(function(){return g})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return j})),n.d(t,"f",(function(){return w})),n.d(t,"b",(function(){return E})),n.d(t,"n",(function(){return S})),n.d(t,"p",(function(){return D})),n.d(t,"o",(function(){return k})),n.d(t,"k",(function(){return x})),n.d(t,"j",(function(){return R})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return C})),n.d(t,"a",(function(){return P}));var r=n("Obii"),i=n("t8hP"),a=n("HJRA"),o=n("3SGO"),c=n("SMGL"),u=n("qOGI"),s=n("exx3");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,i,a,o){try{var c=e[a](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){d(a,r,i,o,c,"next",e)}function c(e){d(a,r,i,o,c,"throw",e)}o(void 0)}))}}function b(e){return function(){var t=v(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(u.d)()),t.next=3,Object(i.getBackendSrv)().get("/api/alerts",e);case 3:if(r=t.sent,!i.config.featureToggles.ngalert){t.next=9;break}return t.next=7,Object(i.getBackendSrv)().get("/api/alert-definitions");case 7:a=t.sent,n(Object(u.i)(a.results));case 9:n(Object(u.e)(r));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function m(e,t){return function(){var n=v(regeneratorRuntime.mark((function n(r,a){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.getBackendSrv)().post("/api/alerts/".concat(e,"/pause"),t);case 2:o=a().location.query.state||"all",r(b({state:o.toString()}));case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}function h(e){return function(){var t=v(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.getBackendSrv)().post("/api/alert-notifications",e);case 3:a.a.emit(r.AppEvents.alertSuccess,["Notification created"]),n(Object(o.d)({path:"alerting/notifications"})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a.a.emit(r.AppEvents.alertError,[t.t0.data.error]);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=v(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.getBackendSrv)().put("/api/alert-notifications/".concat(e.id),e);case 3:a.a.emit(r.AppEvents.alertSuccess,["Notification updated"]),n(Object(o.d)({path:"alerting/notifications"})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a.a.emit(r.AppEvents.alertError,[t.t0.data.error]);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function g(e){return function(){var t=v(regeneratorRuntime.mark((function t(n,r){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().notificationChannel.notificationChannel,t.next=3,Object(i.getBackendSrv)().post("/api/alert-notifications/test",f({id:a.id},e));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function O(){return function(){var e=v(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.getBackendSrv)().get("/api/alert-notifiers");case 2:n=e.sent,r=n.sort((function(e,t){return e.name>t.name?1:-1})),t(Object(u.k)(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function j(e){return function(){var t=v(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(O());case 2:return t.next=4,Object(i.getBackendSrv)().get("/api/alert-notifications/".concat(e));case 4:r=t.sent,n(Object(u.f)(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function w(e){return function(){var t=v(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.getBackendSrv)().get("/api/alert-definitions/".concat(e));case 2:r=t.sent,n(Object(u.h)(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function E(){return function(){var e=v(regeneratorRuntime.mark((function e(t,n){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(n().alertDefinition);case 2:return c=e.sent,e.next=5,Object(i.getBackendSrv)().post("/api/alert-definitions",c);case 5:a.a.emit(r.AppEvents.alertSuccess,["Alert definition created"]),t(Object(o.d)({path:"alerting/list"}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function S(){return function(){var e=v(regeneratorRuntime.mark((function e(t,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(n().alertDefinition);case 2:return o=e.sent,e.next=5,Object(i.getBackendSrv)().put("/api/alert-definitions/".concat(o.uid),o);case 5:c=e.sent,a.a.emit(r.AppEvents.alertSuccess,["Alert definition updated"]),t(Object(u.h)(c));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function D(e){return function(t,n){var r=f({},n().alertDefinition.uiState,{},e);t(Object(u.n)(r));try{c.a.setObject(u.a,r)}catch(e){console.error(e)}}}function k(e){return function(t){t(Object(u.o)(e))}}function x(e){return function(t){t(Object(u.l)(e))}}function R(){return function(e,t){var n,i=t().alertDefinition,a=i.queryRunner,o={from:"now-1h",to:"now"},c=(0,i.getQueryOptions)();a.run({timezone:"browser",timeRange:{from:r.dateMath.parse(o.from),to:r.dateMath.parse(o.to),raw:o},maxDataPoints:null!==(n=c.maxDataPoints)&&void 0!==n?n:100,minInterval:c.minInterval,queries:c.queries,datasource:c.dataSource.name})}}function T(){return function(){var e=v(regeneratorRuntime.mark((function e(t,n){var o,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n().alertDefinition.alertDefinition,e.next=3,Object(i.getBackendSrv)().get("/api/alert-definitions/eval/".concat(o.uid));case 3:c=e.sent,s=I(c.instances),t(Object(u.j)(s)),a.a.emit(r.AppEvents.alertSuccess,["Alert definition tested successfully"]);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function C(){return function(){var e=v(regeneratorRuntime.mark((function e(t,n){var o,c,s,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n().alertDefinition,c=o.alertDefinition,s=o.getQueryOptions,e.next=3,Object(i.getDataSourceSrv)().get(null);case 3:return l=e.sent,e.next=6,Object(i.getBackendSrv)().post("/api/alert-definitions/eval",{condition:c.condition,data:Q(s(),l)});case 6:f=e.sent,p=I(f.instances),t(Object(u.j)(p)),a.a.emit(r.AppEvents.alertSuccess,["Alert definition tested successfully"]);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function P(){return function(e){e(Object(u.b)(void 0))}}function q(e){return A.apply(this,arguments)}function A(){return(A=v(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getQueryOptions(),r=t.alertDefinition,e.next=4,Object(i.getDataSourceSrv)().get(null);case 4:return a=e.sent,e.abrupt("return",f({},r,{data:Q(n,a)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){var t=e.map((function(e){var t=Object(r.base64StringToArrowTable)(e);return Object(r.arrowTableToDataFrame)(t)}));return Object(r.applyFieldOverrides)({data:t,fieldConfig:{defaults:{},overrides:[]},replaceVariables:function(e){return e},theme:i.config.theme})}function Q(e,t){return e.queries.map((function(e){var n,r=e.datasource===s.a;if(r)n={name:s.a,uid:s.a};else{var a,o,c=Object(i.getDataSourceSrv)().getInstanceSettings(e.datasource);n={name:null!==(a=null==c?void 0:c.name)&&void 0!==a?a:t.name,uid:null!==(o=null==c?void 0:c.uid)&&void 0!==o?o:t.uid}}return{model:f({},e,{type:r?e.type:e.queryType,datasource:n.name,datasourceUid:n.uid}),refId:e.refId,relativeTimeRange:{From:500,To:0}}}))}},GLxE:function(e,t,n){"use strict";var r=n("q1tI"),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.a=function(e,t){var n=Object(r.useState)(t),a=n[0],o=n[1];return i((function(){var t=e.subscribe(o);return function(){return t.unsubscribe()}}),[e]),a}},LSil:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n("q1tI"),i=n.n(r),a=n("/MKj"),o=n("kDDq"),c=n("kDLi"),u=n("ZFWI"),s=n("9tWQ"),l=n("4vLh");function f(){var e=b(["\n      border: 1px solid ",";\n      border-radius: ",";\n    "]);return f=function(){return e},e}function p(){var e=b(["\n      display: flex;\n      justify-content: flex-end;\n    "]);return p=function(){return e},e}function d(){var e=b(["\n      padding: ",";\n      background-color: ",";\n      height: 100%;\n    "]);return d=function(){return e},e}function v(){var e=b(["\n      padding-left: ",";\n      height: 100%;\n    "]);return v=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D={queryOptionsChange:l.k,onRunQueries:l.j},k=Object(a.connect)((function(e){return{queryOptions:e.alertDefinition.getQueryOptions(),queryRunner:e.alertDefinition.queryRunner}}),D)(function(e){function t(){var e,n;O(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=w(this,(e=E(t)).call.apply(e,[this].concat(i)))).onQueryOptionsChange=function(e){n.props.queryOptionsChange(e)},n.onRunQueries=function(){n.props.onRunQueries()},n.onIntervalChanged=function(e){n.props.queryOptionsChange(y({},n.props.queryOptions,{minInterval:e}))},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.queryOptions,n=e.queryRunner,r=x(u.a.theme);return i.a.createElement("div",{className:r.wrapper},i.a.createElement("div",{className:r.container},i.a.createElement("h4",null,"Queries"),i.a.createElement("div",{className:r.refreshWrapper},i.a.createElement(c.RefreshPicker,{onIntervalChanged:this.onIntervalChanged,onRefresh:this.onRunQueries,intervals:["15s","30s"]})),i.a.createElement(s.a,{queryRunner:n,options:t,onRunQueries:this.onRunQueries,onOptionsChange:this.onQueryOptionsChange})))}}])&&j(n.prototype,r),a&&j(n,a),t}(r.PureComponent)),x=Object(c.stylesFactory)((function(e){return{wrapper:Object(o.css)(v(),e.spacing.md),container:Object(o.css)(d(),e.spacing.md,e.colors.panelBg),refreshWrapper:Object(o.css)(p()),editorWrapper:Object(o.css)(f(),e.colors.panelBorder,e.border.radius.md)}}))},Tiyj:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),i=n.n(r),a=n("kDDq"),o=n("kDLi");function c(){var e=f(["\n      font-size: ",";\n      color: ",";\n      margin-right: ",";\n    "]);return c=function(){return e},e}function u(){var e=f(["\n      display: flex;\n      align-items: baseline;\n    "]);return u=function(){return e},e}function s(){var e=f(["\n      padding: ",";\n      background-color: ",";\n      height: 100%;\n      border-left: 1px solid ",";\n    "]);return s=function(){return e},e}function l(){var e=f(["\n      padding-top: ",";\n      height: 100%;\n    "]);return l=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=[{value:60,label:"1m"},{value:300,label:"5m"},{value:600,label:"10m"}],d=function(e){var t=e.alertDefinition,n=e.onChange,a=e.onIntervalChange,c=e.onConditionChange,u=e.queryOptions,s=Object(o.useStyles)(v),l=Object(r.useMemo)((function(){return u.queries.map((function(e){return{value:e.refId,label:e.refId}}))}),[u.queries]);return i.a.createElement("div",{className:s.wrapper},i.a.createElement(o.TabsBar,null,i.a.createElement(o.Tab,{label:"Alert definition",active:!0})),i.a.createElement(o.TabContent,{className:s.container},i.a.createElement(o.Field,{label:"Title"},i.a.createElement(o.Input,{width:25,name:"title",value:t.title,onChange:n})),i.a.createElement(o.Field,{label:"Description",description:"What does the alert do and why was it created"},i.a.createElement(o.TextArea,{rows:5,width:25,name:"description",value:t.description,onChange:n,readOnly:!0})),i.a.createElement(o.Field,{label:"Evaluate"},i.a.createElement("div",{className:s.optionRow},i.a.createElement("span",{className:s.optionName},"Every"),i.a.createElement(o.Select,{onChange:a,value:p.find((function(e){return e.value===t.intervalSeconds})),options:p,width:10}))),i.a.createElement(o.Field,{label:"Conditions"},i.a.createElement("div",{className:s.optionRow},i.a.createElement(o.Select,{onChange:c,value:l.find((function(e){return e.value===t.condition})),options:l,noOptionsMessage:"No queries added"})))))},v=function(e){return{wrapper:Object(a.css)(l(),e.spacing.md),container:Object(a.css)(s(),e.spacing.md,e.colors.panelBg,e.colors.border1),optionRow:Object(a.css)(u()),optionName:Object(a.css)(c(),e.typography.size.md,e.colors.formInputText,e.spacing.sm)}}},fyNR:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("GLxE"),o=n("kDDq"),c=n("jYz7"),u=n("kDLi"),s=n("Obii");function l(){var e=p(["\n      padding: ",";\n    "]);return l=function(){return e},e}function f(){var e=p(["\n      height: ","px;\n    "]);return f=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v,b=function(e){var t,n=e.data,a=e.height,o=e.width,c=d(Object(r.useState)(0),2),l=c[0],f=c[1],p=Object(u.useTheme)(),v=m(p,a),b=Object(r.useMemo)((function(){return(null==n?void 0:n.series)?n.series.map((function(e,t){return{value:t,label:Object(s.getFrameDisplayName)(e)}})):[]}),[n]);return(null==n||null===(t=n.series)||void 0===t?void 0:t.length)?n.series.length>1?i.a.createElement("div",{className:v.wrapper},i.a.createElement("div",{style:{height:a-p.spacing.formInputHeight-16}},i.a.createElement(u.Table,{data:n.series[l],height:a-p.spacing.formInputHeight-16,width:o})),i.a.createElement("div",{className:v.selectWrapper},i.a.createElement(u.Select,{onChange:function(e){return f(e.value)},options:b,value:l}))):i.a.createElement(u.Table,{data:n.series[0],height:a,width:o}):i.a.createElement(u.Table,{data:Object(s.toDataFrame)([]),height:a,width:o})},m=Object(u.stylesFactory)((function(e,t){return{wrapper:Object(o.css)(f(),t),selectWrapper:Object(o.css)(l(),e.spacing.md)}})),h=function(e){var t=e.instances,n=e.isTested,r=e.onTest,a=e.height,o=e.styles,c=e.width;return n?i.a.createElement(u.Table,{data:t[0],height:a,width:c}):i.a.createElement("div",{className:o.noQueries},i.a.createElement("h4",{className:o.noQueriesHeader},"You haven’t tested your alert yet."),i.a.createElement("div",null,"In order to see your instances, you need to test your alert first."),i.a.createElement(u.Button,{onClick:r},"Test alert now"))};function y(){var e=w(["\n      color: ",";\n    "]);return y=function(){return e},e}function g(){var e=w(["\n      color: ",";\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      height: 100%;\n      width: 100%;\n    "]);return g=function(){return e},e}function O(){var e=w(["\n      background: ",";\n      height: 100%;\n    "]);return O=function(){return e},e}function j(){var e=w(["\n      label: alertDefinitionPreviewTabs;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n      padding: "," 0 0 ",";\n    "]);return j=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return D})),function(e){e.Query="query",e.Instances="instances"}(v||(v={}));var S=[{id:v.Query,text:"Query result"},{id:v.Instances,text:"Alerting instances"}],D=function(e){var t,n,o=e.getInstances,s=e.onRunQueries,l=e.onTest,f=e.queryRunner,p=e.queries,d=E(Object(r.useState)(v.Query),2),m=d[0],y=d[1],g=Object(u.useStyles)(k),O=Object(r.useMemo)((function(){return f.getData({withFieldConfig:!0,withTransforms:!0})}),[]),j=Object(a.a)(O),w=o();return i.a.createElement("div",{className:g.wrapper},i.a.createElement(u.TabsBar,null,S.map((function(e,t){return i.a.createElement(u.Tab,{key:"".concat(e.id,"-").concat(t),label:e.text,onChangeTab:function(){return y(e.id)},active:m===e.id})}))),i.a.createElement(u.TabContent,{className:g.tabContent},j&&"Error"===j.state?i.a.createElement("div",{className:g.noQueries},i.a.createElement("h4",{className:g.noQueriesHeader},"There was an error :("),i.a.createElement("div",null,null===(t=j.error)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.error)):p&&p.length>0?i.a.createElement(c.a,{style:{width:"100%",height:"100%"}},(function(e){var t=e.width,n=e.height;switch(m){case v.Instances:return i.a.createElement(h,{isTested:w.length>0,instances:w,styles:g,width:t,height:n,onTest:l});case v.Query:default:return j?i.a.createElement(b,{data:j,width:t,height:n}):i.a.createElement("div",{className:g.noQueries},i.a.createElement("h4",{className:g.noQueriesHeader},"Run queries to view data."),i.a.createElement(u.Button,{onClick:s},"Run queries"))}})):i.a.createElement("div",{className:g.noQueries},i.a.createElement("h4",{className:g.noQueriesHeader},"No queries added."),i.a.createElement("div",null,"Start adding queries to this alert and a visualisation for your queries will appear here."),i.a.createElement("div",null,"Learn more about how to create alert definitions ",i.a.createElement(u.Icon,{name:"external-link-alt"})))))},k=function(e){return{wrapper:Object(o.css)(j(),e.spacing.md,e.spacing.md),tabContent:Object(o.css)(O(),e.colors.panelBg),noQueries:Object(o.css)(g(),e.colors.textSemiWeak),noQueriesHeader:Object(o.css)(y(),e.colors.textSemiWeak)}}},zSau:function(e,t,n){"use strict";n.r(t),function(e){var r=n("q1tI"),i=n.n(r),a=n("0cfB"),o=n("/MKj"),c=n("kDDq"),u=n("kDLi"),s=n("ZFWI"),l=n("/fyT"),f=n("LSil"),p=n("Tiyj"),d=n("fyNR"),v=n("4vLh"),b=n("X+V3");function m(){var e=y(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    position: relative;\n  "]);return m=function(){return e},e}function h(){var e=y(["\n    width: calc(100% - 55px);\n    height: 100%;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    background: ",";\n    display: flex;\n    flex-direction: column;\n  "]);return h=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k={updateAlertDefinitionUiState:v.p,updateAlertDefinitionOption:v.o,evaluateAlertDefinition:v.d,updateAlertDefinition:v.n,createAlertDefinition:v.b,getAlertDefinition:v.f,evaluateNotSavedAlertDefinition:v.e,onRunQueries:v.j,cleanUpDefinitionState:v.a},x=Object(o.connect)((function(e){var t,n=Object(b.c)(e.location);return{uiState:e.alertDefinition.uiState,getQueryOptions:e.alertDefinition.getQueryOptions,queryRunner:e.alertDefinition.queryRunner,getInstances:e.alertDefinition.getInstances,alertDefinition:e.alertDefinition.alertDefinition,pageId:null!==(t=n)&&void 0!==t?t:""}}),k),R=function(e){function t(){var e,n;j(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=E(this,(e=S(t)).call.apply(e,[this].concat(i)))).onChangeAlertOption=function(e){var t=e;n.props.updateAlertDefinitionOption(O({},t.currentTarget.name,t.currentTarget.value))},n.onChangeInterval=function(e){n.props.updateAlertDefinitionOption({intervalSeconds:e.value})},n.onConditionChange=function(e){n.props.updateAlertDefinitionOption({condition:e.value})},n.onSaveAlert=function(){var e=n.props,t=e.alertDefinition,r=e.createAlertDefinition,i=e.updateAlertDefinition;t.uid?i():r()},n.onDiscard=function(){},n.onTest=function(){var e=n.props,t=e.alertDefinition,r=e.evaluateAlertDefinition,i=e.evaluateNotSavedAlertDefinition;t.uid?r():i()},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.getAlertDefinition,n=e.pageId;n&&t(n)}},{key:"componentWillUnmount",value:function(){this.props.cleanUpDefinitionState()}},{key:"renderToolbarActions",value:function(){return[i.a.createElement(u.ToolbarButton,{variant:"destructive",key:"discard",onClick:this.onDiscard},"Discard"),i.a.createElement(u.ToolbarButton,{key:"test",onClick:this.onTest},"Test"),i.a.createElement(u.ToolbarButton,{variant:"primary",key:"save",onClick:this.onSaveAlert},"Save")]}},{key:"render",value:function(){var e=this.props,t=e.alertDefinition,n=e.getInstances,r=e.uiState,a=e.updateAlertDefinitionUiState,o=e.queryRunner,c=e.getQueryOptions,v=e.onRunQueries,b=T(s.a.theme),m=c();return i.a.createElement("div",{className:b.wrapper},i.a.createElement(u.PageToolbar,{title:"Alert editor",pageIcon:"bell"},this.renderToolbarActions()),i.a.createElement("div",{className:b.splitPanesWrapper},i.a.createElement(l.a,{leftPaneComponents:[i.a.createElement(d.a,{key:"queryPreview",queryRunner:o,getInstances:n,queries:m.queries,onTest:this.onTest,onRunQueries:v}),i.a.createElement(f.a,{key:"queryEditor"})],uiState:r,updateUiState:a,rightPaneComponents:i.a.createElement(p.a,{alertDefinition:t,onChange:this.onChangeAlertOption,onIntervalChange:this.onChangeInterval,onConditionChange:this.onConditionChange,queryOptions:m})})))}}])&&w(n.prototype,r),a&&w(n,a),t}(r.PureComponent);t.default=Object(a.hot)(e)(x(R));var T=Object(u.stylesFactory)((function(e){return{wrapper:Object(c.css)(h(),e.colors.dashboardBg),splitPanesWrapper:Object(c.css)(m())}}))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=NgAlertingPage.88f3571bf814cd85c9d4.js.map