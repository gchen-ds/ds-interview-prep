(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks={exports:{}},ir={},$s={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),uc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),wc=Symbol.for("react.memo"),bc=Symbol.for("react.lazy"),Wo=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Wo&&e[Wo]||e["@@iterator"],typeof e=="function"?e:null)}var Js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zs=Object.assign,el={};function on(e,t,n){this.props=e,this.context=t,this.refs=el,this.updater=n||Js}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tl(){}tl.prototype=on.prototype;function Ua(e,t,n){this.props=e,this.context=t,this.refs=el,this.updater=n||Js}var Ha=Ua.prototype=new tl;Ha.constructor=Ua;Zs(Ha,on.prototype);Ha.isPureReactComponent=!0;var Bo=Array.isArray,nl=Object.prototype.hasOwnProperty,Ga={current:null},il={key:!0,ref:!0,__self:!0,__source:!0};function rl(e,t,n){var i,r={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)nl.call(t,i)&&!il.hasOwnProperty(i)&&(r[i]=t[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var d=Array(s),p=0;p<s;p++)d[p]=arguments[p+2];r.children=d}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Kn,type:e,key:a,ref:o,props:r,_owner:Ga.current}}function kc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function Ec(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fo=/\/+/g;function kr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ec(""+e.key):t.toString(36)}function bi(e,t,n,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case uc:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+kr(o,0):i,Bo(r)?(n="",e!=null&&(n=e.replace(Fo,"$&/")+"/"),bi(r,t,n,"",function(p){return p})):r!=null&&(ja(r)&&(r=kc(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fo,"$&/")+"/")+e)),t.push(r)),1;if(o=0,i=i===""?".":i+":",Bo(e))for(var s=0;s<e.length;s++){a=e[s];var d=i+kr(a,s);o+=bi(a,t,n,d,r)}else if(d=_c(e),typeof d=="function")for(e=d.call(e),s=0;!(a=e.next()).done;)a=a.value,d=i+kr(a,s++),o+=bi(a,t,n,d,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ii(e,t,n){if(e==null)return e;var i=[],r=0;return bi(e,i,"","",function(a){return t.call(n,a,r++)}),i}function Sc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},_i={transition:null},Tc={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:_i,ReactCurrentOwner:Ga};function al(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=on;I.Fragment=pc;I.Profiler=hc;I.PureComponent=Ua;I.StrictMode=mc;I.Suspense=vc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tc;I.act=al;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Zs({},e.props),r=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ga.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)nl.call(t,d)&&!il.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){s=Array(d);for(var p=0;p<d;p++)s[p]=arguments[p+2];i.children=s}return{$$typeof:Kn,type:e.type,key:r,ref:a,props:i,_owner:o}};I.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};I.createElement=rl;I.createFactory=function(e){var t=rl.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:yc,render:e}};I.isValidElement=ja;I.lazy=function(e){return{$$typeof:bc,_payload:{_status:-1,_result:e},_init:Sc}};I.memo=function(e,t){return{$$typeof:wc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=_i.transition;_i.transition={};try{e()}finally{_i.transition=t}};I.unstable_act=al;I.useCallback=function(e,t){return de.current.useCallback(e,t)};I.useContext=function(e){return de.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return de.current.useDeferredValue(e)};I.useEffect=function(e,t){return de.current.useEffect(e,t)};I.useId=function(){return de.current.useId()};I.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return de.current.useMemo(e,t)};I.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};I.useRef=function(e){return de.current.useRef(e)};I.useState=function(e){return de.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return de.current.useTransition()};I.version="18.3.1";$s.exports=I;var P=$s.exports;const xc=cc(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=P,Rc=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),Nc=Object.prototype.hasOwnProperty,Dc=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lc={key:!0,ref:!0,__self:!0,__source:!0};function ol(e,t,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Nc.call(t,i)&&!Lc.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:Rc,type:e,key:a,ref:o,props:r,_owner:Dc.current}}ir.Fragment=Cc;ir.jsx=ol;ir.jsxs=ol;Ks.exports=ir;var l=Ks.exports,Xr={},sl={exports:{}},be={},ll={exports:{}},dl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,N){var D=x.length;x.push(N);e:for(;0<D;){var Y=D-1>>>1,$=x[Y];if(0<r($,N))x[Y]=N,x[D]=$,D=Y;else break e}}function n(x){return x.length===0?null:x[0]}function i(x){if(x.length===0)return null;var N=x[0],D=x.pop();if(D!==N){x[0]=D;e:for(var Y=0,$=x.length,ti=$>>>1;Y<ti;){var yt=2*(Y+1)-1,_r=x[yt],vt=yt+1,ni=x[vt];if(0>r(_r,D))vt<$&&0>r(ni,_r)?(x[Y]=ni,x[vt]=D,Y=vt):(x[Y]=_r,x[yt]=D,Y=yt);else if(vt<$&&0>r(ni,D))x[Y]=ni,x[vt]=D,Y=vt;else break e}}return N}function r(x,N){var D=x.sortIndex-N.sortIndex;return D!==0?D:x.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var d=[],p=[],y=1,c=null,u=3,v=!1,_=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var N=n(p);N!==null;){if(N.callback===null)i(p);else if(N.startTime<=x)i(p),N.sortIndex=N.expirationTime,t(d,N);else break;N=n(p)}}function w(x){if(b=!1,f(x),!_)if(n(d)!==null)_=!0,wr(E);else{var N=n(p);N!==null&&br(w,N.startTime-x)}}function E(x,N){_=!1,b&&(b=!1,g(R),R=-1),v=!0;var D=u;try{for(f(N),c=n(d);c!==null&&(!(c.expirationTime>N)||x&&!Re());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,u=c.priorityLevel;var $=Y(c.expirationTime<=N);N=e.unstable_now(),typeof $=="function"?c.callback=$:c===n(d)&&i(d),f(N)}else i(d);c=n(d)}if(c!==null)var ti=!0;else{var yt=n(p);yt!==null&&br(w,yt.startTime-N),ti=!1}return ti}finally{c=null,u=D,v=!1}}var S=!1,A=null,R=-1,F=5,L=-1;function Re(){return!(e.unstable_now()-L<F)}function dn(){if(A!==null){var x=e.unstable_now();L=x;var N=!0;try{N=A(!0,x)}finally{N?cn():(S=!1,A=null)}}else S=!1}var cn;if(typeof h=="function")cn=function(){h(dn)};else if(typeof MessageChannel<"u"){var qo=new MessageChannel,dc=qo.port2;qo.port1.onmessage=dn,cn=function(){dc.postMessage(null)}}else cn=function(){C(dn,0)};function wr(x){A=x,S||(S=!0,cn())}function br(x,N){R=C(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){_||v||(_=!0,wr(E))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(x){switch(u){case 1:case 2:case 3:var N=3;break;default:N=u}var D=u;u=N;try{return x()}finally{u=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var D=u;u=x;try{return N()}finally{u=D}},e.unstable_scheduleCallback=function(x,N,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,x){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=D+$,x={id:y++,callback:N,priorityLevel:x,startTime:D,expirationTime:$,sortIndex:-1},D>Y?(x.sortIndex=D,t(p,x),n(d)===null&&x===n(p)&&(b?(g(R),R=-1):b=!0,br(w,D-Y))):(x.sortIndex=$,t(d,x),_||v||(_=!0,wr(E))),x},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(x){var N=u;return function(){var D=u;u=N;try{return x.apply(this,arguments)}finally{u=D}}}})(dl);ll.exports=dl;var Ic=ll.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=P,we=Ic;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cl=new Set,In={};function Dt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(In[e]=t,e=0;e<t.length;e++)cl.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kr=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zo={},Uo={};function Pc(e){return Kr.call(Uo,e)?!0:Kr.call(zo,e)?!1:Oc.test(e)?Uo[e]=!0:(zo[e]=!0,!1)}function qc(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wc(e,t,n,i){if(t===null||typeof t>"u"||qc(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,i,r,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ya=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ya,Va);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ya,Va);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ya,Va);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qa(e,t,n,i){var r=ne.hasOwnProperty(t)?ne[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wc(t,n,r,i)&&(n=null),i||r===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Ke=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),$r=Symbol.for("react.profiler"),ul=Symbol.for("react.provider"),pl=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),Jr=Symbol.for("react.suspense"),Zr=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ml=Symbol.for("react.offscreen"),Ho=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Ho&&e[Ho]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Er;function wn(e){if(Er===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Er=t&&t[1]||""}return`
`+Er+e}var Sr=!1;function Tr(e,t){if(!e||Sr)return"";Sr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var i=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){i=p}e.call(t.prototype)}else{try{throw Error()}catch(p){i=p}e()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var d=`
`+r[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=s);break}}}finally{Sr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Bc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Tr(e.type,!1),e;case 11:return e=Tr(e.type.render,!1),e;case 1:return e=Tr(e.type,!0),e;default:return""}}function ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Mt:return"Portal";case $r:return"Profiler";case Xa:return"StrictMode";case Jr:return"Suspense";case Zr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pl:return(e.displayName||"Context")+".Consumer";case ul:return(e._context.displayName||"Context")+".Provider";case Ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $a:return t=e.displayName||null,t!==null?t:ea(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ea(e(t))}catch{}}return null}function Fc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ea(t);case 8:return t===Xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zc(e){var t=hl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=zc(e))}function fl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hl(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Go(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gl(e,t){t=t.checked,t!=null&&Qa(e,"checked",t,!1)}function na(e,t){gl(e,t);var n=pt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&ia(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ia(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function Yt(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(bn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function yl(e,t){var n=pt(t.value),i=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,wl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Uc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function bl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function _l(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bl(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var Hc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(e,t){if(t){if(Hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,Vt=null,Qt=null;function Qo(e){if(e=Zn(e)){if(typeof da!="function")throw Error(k(280));var t=e.stateNode;t&&(t=lr(t),da(e.stateNode,e.type,t))}}function kl(e){Vt?Qt?Qt.push(e):Qt=[e]:Vt=e}function El(){if(Vt){var e=Vt,t=Qt;if(Qt=Vt=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function Sl(e,t){return e(t)}function Tl(){}var xr=!1;function xl(e,t,n){if(xr)return e(t,n);xr=!0;try{return Sl(e,t,n)}finally{xr=!1,(Vt!==null||Qt!==null)&&(Tl(),El())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var i=lr(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ca=!1;if(Ye)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ca=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ca=!1}function Gc(e,t,n,i,r,a,o,s,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var Tn=!1,Ii=null,Mi=!1,ua=null,jc={onError:function(e){Tn=!0,Ii=e}};function Yc(e,t,n,i,r,a,o,s,d){Tn=!1,Ii=null,Gc.apply(jc,arguments)}function Vc(e,t,n,i,r,a,o,s,d){if(Yc.apply(this,arguments),Tn){if(Tn){var p=Ii;Tn=!1,Ii=null}else throw Error(k(198));Mi||(Mi=!0,ua=p)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Al(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xo(e){if(Lt(e)!==e)throw Error(k(188))}function Qc(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Xo(r),e;if(a===i)return Xo(r),t;a=a.sibling}throw Error(k(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==i)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Rl(e){return e=Qc(e),e!==null?Cl(e):null}function Cl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cl(e);if(t!==null)return t;e=e.sibling}return null}var Nl=we.unstable_scheduleCallback,Ko=we.unstable_cancelCallback,Xc=we.unstable_shouldYield,Kc=we.unstable_requestPaint,V=we.unstable_now,$c=we.unstable_getCurrentPriorityLevel,Za=we.unstable_ImmediatePriority,Dl=we.unstable_UserBlockingPriority,Oi=we.unstable_NormalPriority,Jc=we.unstable_LowPriority,Ll=we.unstable_IdlePriority,rr=null,Be=null;function Zc(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(rr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:nu,eu=Math.log,tu=Math.LN2;function nu(e){return e>>>=0,e===0?32:31-(eu(e)/tu|0)|0}var si=64,li=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=_n(s):(a&=o,a!==0&&(i=_n(a)))}else o=n&~r,o!==0?i=_n(o):a!==0&&(i=_n(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Ie(t),r=1<<n,i|=e[n],t&=~r;return i}function iu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ru(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ie(a),s=1<<o,d=r[o];d===-1?(!(s&n)||s&i)&&(r[o]=iu(s,t)):d<=t&&(e.expiredLanes|=s),a&=~s}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Il(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Ar(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function au(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Ie(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}function eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ie(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var O=0;function Ml(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ol,to,Pl,ql,Wl,ma=!1,di=[],rt=null,at=null,ot=null,Pn=new Map,qn=new Map,et=[],ou="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $o(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function mn(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Zn(t),t!==null&&to(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function su(e,t,n,i,r){switch(t){case"focusin":return rt=mn(rt,e,t,n,i,r),!0;case"dragenter":return at=mn(at,e,t,n,i,r),!0;case"mouseover":return ot=mn(ot,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Pn.set(a,mn(Pn.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,qn.set(a,mn(qn.get(a)||null,e,t,n,i,r)),!0}return!1}function Bl(e){var t=_t(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Al(n),t!==null){e.blockedOn=t,Wl(e.priority,function(){Pl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);la=i,n.target.dispatchEvent(i),la=null}else return t=Zn(n),t!==null&&to(t),e.blockedOn=n,!1;t.shift()}return!0}function Jo(e,t,n){ki(e)&&n.delete(t)}function lu(){ma=!1,rt!==null&&ki(rt)&&(rt=null),at!==null&&ki(at)&&(at=null),ot!==null&&ki(ot)&&(ot=null),Pn.forEach(Jo),qn.forEach(Jo)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,ma||(ma=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,lu)))}function Wn(e){function t(r){return hn(r,e)}if(0<di.length){hn(di[0],e);for(var n=1;n<di.length;n++){var i=di[n];i.blockedOn===e&&(i.blockedOn=null)}}for(rt!==null&&hn(rt,e),at!==null&&hn(at,e),ot!==null&&hn(ot,e),Pn.forEach(t),qn.forEach(t),n=0;n<et.length;n++)i=et[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Bl(n),n.blockedOn===null&&et.shift()}var Xt=Ke.ReactCurrentBatchConfig,qi=!0;function du(e,t,n,i){var r=O,a=Xt.transition;Xt.transition=null;try{O=1,no(e,t,n,i)}finally{O=r,Xt.transition=a}}function cu(e,t,n,i){var r=O,a=Xt.transition;Xt.transition=null;try{O=4,no(e,t,n,i)}finally{O=r,Xt.transition=a}}function no(e,t,n,i){if(qi){var r=ha(e,t,n,i);if(r===null)qr(e,t,i,Wi,n),$o(e,i);else if(su(r,e,t,n,i))i.stopPropagation();else if($o(e,i),t&4&&-1<ou.indexOf(e)){for(;r!==null;){var a=Zn(r);if(a!==null&&Ol(a),a=ha(e,t,n,i),a===null&&qr(e,t,i,Wi,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else qr(e,t,i,null,n)}}var Wi=null;function ha(e,t,n,i){if(Wi=null,e=Ja(i),e=_t(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Al(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wi=e,null}function Fl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($c()){case Za:return 1;case Dl:return 4;case Oi:case Jc:return 16;case Ll:return 536870912;default:return 16}default:return 16}}var nt=null,io=null,Ei=null;function zl(){if(Ei)return Ei;var e,t=io,n=t.length,i,r="value"in nt?nt.value:nt.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[a-i];i++);return Ei=r.slice(e,1<i?1-i:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Zo(){return!1}function _e(e){function t(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ci:Zo,this.isPropagationStopped=Zo,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=_e(sn),Jn=G({},sn,{view:0,detail:0}),uu=_e(Jn),Rr,Cr,fn,ar=G({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(Rr=e.screenX-fn.screenX,Cr=e.screenY-fn.screenY):Cr=Rr=0,fn=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:Cr}}),es=_e(ar),pu=G({},ar,{dataTransfer:0}),mu=_e(pu),hu=G({},Jn,{relatedTarget:0}),Nr=_e(hu),fu=G({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),gu=_e(fu),yu=G({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vu=_e(yu),wu=G({},sn,{data:0}),ts=_e(wu),bu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ku[e])?!!t[e]:!1}function ao(){return Eu}var Su=G({},Jn,{key:function(e){if(e.key){var t=bu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_u[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tu=_e(Su),xu=G({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ns=_e(xu),Au=G({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),Ru=_e(Au),Cu=G({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nu=_e(Cu),Du=G({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lu=_e(Du),Iu=[9,13,27,32],oo=Ye&&"CompositionEvent"in window,xn=null;Ye&&"documentMode"in document&&(xn=document.documentMode);var Mu=Ye&&"TextEvent"in window&&!xn,Ul=Ye&&(!oo||xn&&8<xn&&11>=xn),is=String.fromCharCode(32),rs=!1;function Hl(e,t){switch(e){case"keyup":return Iu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function Ou(e,t){switch(e){case"compositionend":return Gl(t);case"keypress":return t.which!==32?null:(rs=!0,is);case"textInput":return e=t.data,e===is&&rs?null:e;default:return null}}function Pu(e,t){if(Pt)return e==="compositionend"||!oo&&Hl(e,t)?(e=zl(),Ei=io=nt=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ul&&t.locale!=="ko"?null:t.data;default:return null}}var qu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qu[e.type]:t==="textarea"}function jl(e,t,n,i){kl(i),t=Bi(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var An=null,Bn=null;function Wu(e){nd(e,0)}function or(e){var t=Bt(e);if(fl(t))return e}function Bu(e,t){if(e==="change")return t}var Yl=!1;if(Ye){var Dr;if(Ye){var Lr="oninput"in document;if(!Lr){var os=document.createElement("div");os.setAttribute("oninput","return;"),Lr=typeof os.oninput=="function"}Dr=Lr}else Dr=!1;Yl=Dr&&(!document.documentMode||9<document.documentMode)}function ss(){An&&(An.detachEvent("onpropertychange",Vl),Bn=An=null)}function Vl(e){if(e.propertyName==="value"&&or(Bn)){var t=[];jl(t,Bn,e,Ja(e)),xl(Wu,t)}}function Fu(e,t,n){e==="focusin"?(ss(),An=t,Bn=n,An.attachEvent("onpropertychange",Vl)):e==="focusout"&&ss()}function zu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(Bn)}function Uu(e,t){if(e==="click")return or(t)}function Hu(e,t){if(e==="input"||e==="change")return or(t)}function Gu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Gu;function Fn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kr.call(t,r)||!Oe(e[r],t[r]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,t){var n=ls(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ls(n)}}function Ql(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ql(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xl(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ju(e){var t=Xl(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ql(n.ownerDocument.documentElement,n)){if(i!==null&&so(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=ds(n,a);var o=ds(n,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yu=Ye&&"documentMode"in document&&11>=document.documentMode,qt=null,fa=null,Rn=null,ga=!1;function cs(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ga||qt==null||qt!==Li(i)||(i=qt,"selectionStart"in i&&so(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Rn&&Fn(Rn,i)||(Rn=i,i=Bi(fa,"onSelect"),0<i.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=qt)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Ir={},Kl={};Ye&&(Kl=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function sr(e){if(Ir[e])return Ir[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kl)return Ir[e]=t[n];return e}var $l=sr("animationend"),Jl=sr("animationiteration"),Zl=sr("animationstart"),ed=sr("transitionend"),td=new Map,us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){td.set(e,t),Dt(t,[e])}for(var Mr=0;Mr<us.length;Mr++){var Or=us[Mr],Vu=Or.toLowerCase(),Qu=Or[0].toUpperCase()+Or.slice(1);ht(Vu,"on"+Qu)}ht($l,"onAnimationEnd");ht(Jl,"onAnimationIteration");ht(Zl,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(ed,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xu=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function ps(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Vc(i,t,void 0,e),e.currentTarget=null}function nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],d=s.instance,p=s.currentTarget;if(s=s.listener,d!==a&&r.isPropagationStopped())break e;ps(r,s,p),a=d}else for(o=0;o<i.length;o++){if(s=i[o],d=s.instance,p=s.currentTarget,s=s.listener,d!==a&&r.isPropagationStopped())break e;ps(r,s,p),a=d}}}if(Mi)throw e=ua,Mi=!1,ua=null,e}function W(e,t){var n=t[_a];n===void 0&&(n=t[_a]=new Set);var i=e+"__bubble";n.has(i)||(id(t,e,2,!1),n.add(i))}function Pr(e,t,n){var i=0;t&&(i|=4),id(n,e,i,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function zn(e){if(!e[pi]){e[pi]=!0,cl.forEach(function(n){n!=="selectionchange"&&(Xu.has(n)||Pr(n,!1,e),Pr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,Pr("selectionchange",!1,t))}}function id(e,t,n,i){switch(Fl(t)){case 1:var r=du;break;case 4:r=cu;break;default:r=no}n=r.bind(null,t,n,e),r=void 0,!ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function qr(e,t,n,i,r){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;o=o.return}for(;s!==null;){if(o=_t(s),o===null)return;if(d=o.tag,d===5||d===6){i=a=o;continue e}s=s.parentNode}}i=i.return}xl(function(){var p=a,y=Ja(n),c=[];e:{var u=td.get(e);if(u!==void 0){var v=ro,_=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":v=Tu;break;case"focusin":_="focus",v=Nr;break;case"focusout":_="blur",v=Nr;break;case"beforeblur":case"afterblur":v=Nr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ru;break;case $l:case Jl:case Zl:v=gu;break;case ed:v=Nu;break;case"scroll":v=uu;break;case"wheel":v=Lu;break;case"copy":case"cut":case"paste":v=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ns}var b=(t&4)!==0,C=!b&&e==="scroll",g=b?u!==null?u+"Capture":null:u;b=[];for(var h=p,f;h!==null;){f=h;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,g!==null&&(w=On(h,g),w!=null&&b.push(Un(h,w,f)))),C)break;h=h.return}0<b.length&&(u=new v(u,_,null,n,y),c.push({event:u,listeners:b}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",u&&n!==la&&(_=n.relatedTarget||n.fromElement)&&(_t(_)||_[Ve]))break e;if((v||u)&&(u=y.window===y?y:(u=y.ownerDocument)?u.defaultView||u.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=p,_=_?_t(_):null,_!==null&&(C=Lt(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=p),v!==_)){if(b=es,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=ns,w="onPointerLeave",g="onPointerEnter",h="pointer"),C=v==null?u:Bt(v),f=_==null?u:Bt(_),u=new b(w,h+"leave",v,n,y),u.target=C,u.relatedTarget=f,w=null,_t(y)===p&&(b=new b(g,h+"enter",_,n,y),b.target=f,b.relatedTarget=C,w=b),C=w,v&&_)t:{for(b=v,g=_,h=0,f=b;f;f=It(f))h++;for(f=0,w=g;w;w=It(w))f++;for(;0<h-f;)b=It(b),h--;for(;0<f-h;)g=It(g),f--;for(;h--;){if(b===g||g!==null&&b===g.alternate)break t;b=It(b),g=It(g)}b=null}else b=null;v!==null&&ms(c,u,v,b,!1),_!==null&&C!==null&&ms(c,C,_,b,!0)}}e:{if(u=p?Bt(p):window,v=u.nodeName&&u.nodeName.toLowerCase(),v==="select"||v==="input"&&u.type==="file")var E=Bu;else if(as(u))if(Yl)E=Hu;else{E=zu;var S=Fu}else(v=u.nodeName)&&v.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=Uu);if(E&&(E=E(e,p))){jl(c,E,n,y);break e}S&&S(e,u,p),e==="focusout"&&(S=u._wrapperState)&&S.controlled&&u.type==="number"&&ia(u,"number",u.value)}switch(S=p?Bt(p):window,e){case"focusin":(as(S)||S.contentEditable==="true")&&(qt=S,fa=p,Rn=null);break;case"focusout":Rn=fa=qt=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,cs(c,n,y);break;case"selectionchange":if(Yu)break;case"keydown":case"keyup":cs(c,n,y)}var A;if(oo)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Pt?Hl(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ul&&n.locale!=="ko"&&(Pt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Pt&&(A=zl()):(nt=y,io="value"in nt?nt.value:nt.textContent,Pt=!0)),S=Bi(p,R),0<S.length&&(R=new ts(R,e,null,n,y),c.push({event:R,listeners:S}),A?R.data=A:(A=Gl(n),A!==null&&(R.data=A)))),(A=Mu?Ou(e,n):Pu(e,n))&&(p=Bi(p,"onBeforeInput"),0<p.length&&(y=new ts("onBeforeInput","beforeinput",null,n,y),c.push({event:y,listeners:p}),y.data=A))}nd(c,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bi(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=On(e,n),a!=null&&i.unshift(Un(e,a,r)),a=On(e,t),a!=null&&i.push(Un(e,a,r))),e=e.return}return i}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ms(e,t,n,i,r){for(var a=t._reactName,o=[];n!==null&&n!==i;){var s=n,d=s.alternate,p=s.stateNode;if(d!==null&&d===i)break;s.tag===5&&p!==null&&(s=p,r?(d=On(n,a),d!=null&&o.unshift(Un(n,d,s))):r||(d=On(n,a),d!=null&&o.push(Un(n,d,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ku=/\r\n?/g,$u=/\u0000|\uFFFD/g;function hs(e){return(typeof e=="string"?e:""+e).replace(Ku,`
`).replace($u,"")}function mi(e,t,n){if(t=hs(t),hs(e)!==t&&n)throw Error(k(425))}function Fi(){}var ya=null,va=null;function wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,Ju=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,Zu=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(ep)}:ba;function ep(e){setTimeout(function(){throw e})}function Wr(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Wn(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),We="__reactFiber$"+ln,Hn="__reactProps$"+ln,Ve="__reactContainer$"+ln,_a="__reactEvents$"+ln,tp="__reactListeners$"+ln,np="__reactHandles$"+ln;function _t(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ve]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gs(e);e!==null;){if(n=e[We])return n;e=gs(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[We]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function lr(e){return e[Hn]||null}var ka=[],Ft=-1;function ft(e){return{current:e}}function B(e){0>Ft||(e.current=ka[Ft],ka[Ft]=null,Ft--)}function q(e,t){Ft++,ka[Ft]=e.current,e.current=t}var mt={},oe=ft(mt),me=ft(!1),xt=mt;function Zt(e,t){var n=e.type.contextTypes;if(!n)return mt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function he(e){return e=e.childContextTypes,e!=null}function zi(){B(me),B(oe)}function ys(e,t,n){if(oe.current!==mt)throw Error(k(168));q(oe,t),q(me,n)}function rd(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(k(108,Fc(e)||"Unknown",r));return G({},n,i)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,xt=oe.current,q(oe,e),q(me,me.current),!0}function vs(e,t,n){var i=e.stateNode;if(!i)throw Error(k(169));n?(e=rd(e,t,xt),i.__reactInternalMemoizedMergedChildContext=e,B(me),B(oe),q(oe,e)):B(me),q(me,n)}var Ue=null,dr=!1,Br=!1;function ad(e){Ue===null?Ue=[e]:Ue.push(e)}function ip(e){dr=!0,ad(e)}function gt(){if(!Br&&Ue!==null){Br=!0;var e=0,t=O;try{var n=Ue;for(O=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Ue=null,dr=!1}catch(r){throw Ue!==null&&(Ue=Ue.slice(e+1)),Nl(Za,gt),r}finally{O=t,Br=!1}}return null}var zt=[],Ut=0,Hi=null,Gi=0,ke=[],Ee=0,At=null,He=1,Ge="";function wt(e,t){zt[Ut++]=Gi,zt[Ut++]=Hi,Hi=e,Gi=t}function od(e,t,n){ke[Ee++]=He,ke[Ee++]=Ge,ke[Ee++]=At,At=e;var i=He;e=Ge;var r=32-Ie(i)-1;i&=~(1<<r),n+=1;var a=32-Ie(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,He=1<<32-Ie(t)+r|n<<r|i,Ge=a+e}else He=1<<a|n<<r|i,Ge=e}function lo(e){e.return!==null&&(wt(e,1),od(e,1,0))}function co(e){for(;e===Hi;)Hi=zt[--Ut],zt[Ut]=null,Gi=zt[--Ut],zt[Ut]=null;for(;e===At;)At=ke[--Ee],ke[Ee]=null,Ge=ke[--Ee],ke[Ee]=null,He=ke[--Ee],ke[Ee]=null}var ve=null,ye=null,z=!1,Le=null;function sd(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ye=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:He,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ye=null,!0):!1;default:return!1}}function Ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sa(e){if(z){var t=ye;if(t){var n=t;if(!ws(e,t)){if(Ea(e))throw Error(k(418));t=st(n.nextSibling);var i=ve;t&&ws(e,t)?sd(i,n):(e.flags=e.flags&-4097|2,z=!1,ve=e)}}else{if(Ea(e))throw Error(k(418));e.flags=e.flags&-4097|2,z=!1,ve=e}}}function bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function hi(e){if(e!==ve)return!1;if(!z)return bs(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wa(e.type,e.memoizedProps)),t&&(t=ye)){if(Ea(e))throw ld(),Error(k(418));for(;t;)sd(e,t),t=st(t.nextSibling)}if(bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ve?st(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=ye;e;)e=st(e.nextSibling)}function en(){ye=ve=null,z=!1}function uo(e){Le===null?Le=[e]:Le.push(e)}var rp=Ke.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var i=n.stateNode}if(!i)throw Error(k(147,e));var r=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=r.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _s(e){var t=e._init;return t(e._payload)}function dd(e){function t(g,h){if(e){var f=g.deletions;f===null?(g.deletions=[h],g.flags|=16):f.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function i(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function r(g,h){return g=ut(g,h),g.index=0,g.sibling=null,g}function a(g,h,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<h?(g.flags|=2,h):f):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,f,w){return h===null||h.tag!==6?(h=Yr(f,g.mode,w),h.return=g,h):(h=r(h,f),h.return=g,h)}function d(g,h,f,w){var E=f.type;return E===Ot?y(g,h,f.props.children,w,f.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&_s(E)===h.type)?(w=r(h,f.props),w.ref=gn(g,h,f),w.return=g,w):(w=Di(f.type,f.key,f.props,null,g.mode,w),w.ref=gn(g,h,f),w.return=g,w)}function p(g,h,f,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=Vr(f,g.mode,w),h.return=g,h):(h=r(h,f.children||[]),h.return=g,h)}function y(g,h,f,w,E){return h===null||h.tag!==7?(h=Tt(f,g.mode,w,E),h.return=g,h):(h=r(h,f),h.return=g,h)}function c(g,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yr(""+h,g.mode,f),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ri:return f=Di(h.type,h.key,h.props,null,g.mode,f),f.ref=gn(g,null,h),f.return=g,f;case Mt:return h=Vr(h,g.mode,f),h.return=g,h;case Je:var w=h._init;return c(g,w(h._payload),f)}if(bn(h)||un(h))return h=Tt(h,g.mode,f,null),h.return=g,h;fi(g,h)}return null}function u(g,h,f,w){var E=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(g,h,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ri:return f.key===E?d(g,h,f,w):null;case Mt:return f.key===E?p(g,h,f,w):null;case Je:return E=f._init,u(g,h,E(f._payload),w)}if(bn(f)||un(f))return E!==null?null:y(g,h,f,w,null);fi(g,f)}return null}function v(g,h,f,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(f)||null,s(h,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ri:return g=g.get(w.key===null?f:w.key)||null,d(h,g,w,E);case Mt:return g=g.get(w.key===null?f:w.key)||null,p(h,g,w,E);case Je:var S=w._init;return v(g,h,f,S(w._payload),E)}if(bn(w)||un(w))return g=g.get(f)||null,y(h,g,w,E,null);fi(h,w)}return null}function _(g,h,f,w){for(var E=null,S=null,A=h,R=h=0,F=null;A!==null&&R<f.length;R++){A.index>R?(F=A,A=null):F=A.sibling;var L=u(g,A,f[R],w);if(L===null){A===null&&(A=F);break}e&&A&&L.alternate===null&&t(g,A),h=a(L,h,R),S===null?E=L:S.sibling=L,S=L,A=F}if(R===f.length)return n(g,A),z&&wt(g,R),E;if(A===null){for(;R<f.length;R++)A=c(g,f[R],w),A!==null&&(h=a(A,h,R),S===null?E=A:S.sibling=A,S=A);return z&&wt(g,R),E}for(A=i(g,A);R<f.length;R++)F=v(A,g,R,f[R],w),F!==null&&(e&&F.alternate!==null&&A.delete(F.key===null?R:F.key),h=a(F,h,R),S===null?E=F:S.sibling=F,S=F);return e&&A.forEach(function(Re){return t(g,Re)}),z&&wt(g,R),E}function b(g,h,f,w){var E=un(f);if(typeof E!="function")throw Error(k(150));if(f=E.call(f),f==null)throw Error(k(151));for(var S=E=null,A=h,R=h=0,F=null,L=f.next();A!==null&&!L.done;R++,L=f.next()){A.index>R?(F=A,A=null):F=A.sibling;var Re=u(g,A,L.value,w);if(Re===null){A===null&&(A=F);break}e&&A&&Re.alternate===null&&t(g,A),h=a(Re,h,R),S===null?E=Re:S.sibling=Re,S=Re,A=F}if(L.done)return n(g,A),z&&wt(g,R),E;if(A===null){for(;!L.done;R++,L=f.next())L=c(g,L.value,w),L!==null&&(h=a(L,h,R),S===null?E=L:S.sibling=L,S=L);return z&&wt(g,R),E}for(A=i(g,A);!L.done;R++,L=f.next())L=v(A,g,R,L.value,w),L!==null&&(e&&L.alternate!==null&&A.delete(L.key===null?R:L.key),h=a(L,h,R),S===null?E=L:S.sibling=L,S=L);return e&&A.forEach(function(dn){return t(g,dn)}),z&&wt(g,R),E}function C(g,h,f,w){if(typeof f=="object"&&f!==null&&f.type===Ot&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ri:e:{for(var E=f.key,S=h;S!==null;){if(S.key===E){if(E=f.type,E===Ot){if(S.tag===7){n(g,S.sibling),h=r(S,f.props.children),h.return=g,g=h;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&_s(E)===S.type){n(g,S.sibling),h=r(S,f.props),h.ref=gn(g,S,f),h.return=g,g=h;break e}n(g,S);break}else t(g,S);S=S.sibling}f.type===Ot?(h=Tt(f.props.children,g.mode,w,f.key),h.return=g,g=h):(w=Di(f.type,f.key,f.props,null,g.mode,w),w.ref=gn(g,h,f),w.return=g,g=w)}return o(g);case Mt:e:{for(S=f.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(g,h.sibling),h=r(h,f.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Vr(f,g.mode,w),h.return=g,g=h}return o(g);case Je:return S=f._init,C(g,h,S(f._payload),w)}if(bn(f))return _(g,h,f,w);if(un(f))return b(g,h,f,w);fi(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(g,h.sibling),h=r(h,f),h.return=g,g=h):(n(g,h),h=Yr(f,g.mode,w),h.return=g,g=h),o(g)):n(g,h)}return C}var tn=dd(!0),cd=dd(!1),ji=ft(null),Yi=null,Ht=null,po=null;function mo(){po=Ht=Yi=null}function ho(e){var t=ji.current;B(ji),e._currentValue=t}function Ta(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){Yi=e,po=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Yi===null)throw Error(k(308));Ht=e,Yi.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var kt=null;function fo(e){kt===null?kt=[e]:kt.push(e)}function ud(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,fo(t)):(n.next=r.next,r.next=n),t.interleaved=n,Qe(e,i)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,M&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Qe(e,n)}return r=i.interleaved,r===null?(t.next=t,fo(i)):(t.next=r.next,r.next=t),i.interleaved=t,Qe(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,eo(e,n)}}function ks(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,i){var r=e.updateQueue;Ze=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var d=s,p=d.next;d.next=null,o===null?a=p:o.next=p,o=d;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=p:s.next=p,y.lastBaseUpdate=d))}if(a!==null){var c=r.baseState;o=0,y=p=d=null,s=a;do{var u=s.lane,v=s.eventTime;if((i&u)===u){y!==null&&(y=y.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,b=s;switch(u=t,v=n,b.tag){case 1:if(_=b.payload,typeof _=="function"){c=_.call(v,c,u);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,u=typeof _=="function"?_.call(v,c,u):_,u==null)break e;c=G({},c,u);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=r.effects,u===null?r.effects=[s]:u.push(s))}else v={eventTime:v,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(p=y=v,d=c):y=y.next=v,o|=u;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;u=s,s=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(1);if(y===null&&(d=c),r.baseState=d,r.firstBaseUpdate=p,r.lastBaseUpdate=y,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);Ct|=o,e.lanes=o,e.memoizedState=c}}function Es(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(k(191,r));r.call(i)}}}var ei={},Fe=ft(ei),Gn=ft(ei),jn=ft(ei);function Et(e){if(e===ei)throw Error(k(174));return e}function yo(e,t){switch(q(jn,t),q(Gn,e),q(Fe,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:aa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=aa(t,e)}B(Fe),q(Fe,t)}function nn(){B(Fe),B(Gn),B(jn)}function md(e){Et(jn.current);var t=Et(Fe.current),n=aa(t,e.type);t!==n&&(q(Gn,e),q(Fe,n))}function vo(e){Gn.current===e&&(B(Fe),B(Gn))}var U=ft(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fr=[];function wo(){for(var e=0;e<Fr.length;e++)Fr[e]._workInProgressVersionPrimary=null;Fr.length=0}var xi=Ke.ReactCurrentDispatcher,zr=Ke.ReactCurrentBatchConfig,Rt=0,H=null,X=null,J=null,Xi=!1,Cn=!1,Yn=0,ap=0;function ie(){throw Error(k(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function _o(e,t,n,i,r,a){if(Rt=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?dp:cp,e=n(i,r),Cn){a=0;do{if(Cn=!1,Yn=0,25<=a)throw Error(k(301));a+=1,J=X=null,t.updateQueue=null,xi.current=up,e=n(i,r)}while(Cn)}if(xi.current=Ki,t=X!==null&&X.next!==null,Rt=0,J=X=H=null,Xi=!1,t)throw Error(k(300));return e}function ko(){var e=Yn!==0;return Yn=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Ae(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,X=e;else{if(e===null)throw Error(k(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function Vn(e,t){return typeof t=="function"?t(e):t}function Ur(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var i=X,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,d=null,p=a;do{var y=p.lane;if((Rt&y)===y)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:e(i,p.action);else{var c={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(s=d=c,o=i):d=d.next=c,H.lanes|=y,Ct|=y}p=p.next}while(p!==null&&p!==a);d===null?o=i:d.next=s,Oe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=d,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do a=r.lane,H.lanes|=a,Ct|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hr(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);Oe(a,t.memoizedState)||(pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function hd(){}function fd(e,t){var n=H,i=Ae(),r=t(),a=!Oe(i.memoizedState,r);if(a&&(i.memoizedState=r,pe=!0),i=i.queue,Eo(vd.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Qn(9,yd.bind(null,n,i,r,t),void 0,null),Z===null)throw Error(k(349));Rt&30||gd(n,t,r)}return r}function gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yd(e,t,n,i){t.value=n,t.getSnapshot=i,wd(t)&&bd(e)}function vd(e,t,n){return n(function(){wd(t)&&bd(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function bd(e){var t=Qe(e,1);t!==null&&Me(t,e,1,-1)}function Ss(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=lp.bind(null,H,e),[t.memoizedState,e]}function Qn(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function _d(){return Ae().memoizedState}function Ai(e,t,n,i){var r=qe();H.flags|=e,r.memoizedState=Qn(1|t,n,void 0,i===void 0?null:i)}function cr(e,t,n,i){var r=Ae();i=i===void 0?null:i;var a=void 0;if(X!==null){var o=X.memoizedState;if(a=o.destroy,i!==null&&bo(i,o.deps)){r.memoizedState=Qn(t,n,a,i);return}}H.flags|=e,r.memoizedState=Qn(1|t,n,a,i)}function Ts(e,t){return Ai(8390656,8,e,t)}function Eo(e,t){return cr(2048,8,e,t)}function kd(e,t){return cr(4,2,e,t)}function Ed(e,t){return cr(4,4,e,t)}function Sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){return n=n!=null?n.concat([e]):null,cr(4,4,Sd.bind(null,t,e),n)}function So(){}function xd(e,t){var n=Ae();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&bo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ad(e,t){var n=Ae();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&bo(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Rd(e,t,n){return Rt&21?(Oe(n,t)||(n=Il(),H.lanes|=n,Ct|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function op(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var i=zr.transition;zr.transition={};try{e(!1),t()}finally{O=n,zr.transition=i}}function Cd(){return Ae().memoizedState}function sp(e,t,n){var i=ct(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nd(e))Dd(t,n);else if(n=ud(e,t,n,i),n!==null){var r=le();Me(n,e,i,r),Ld(n,t,i)}}function lp(e,t,n){var i=ct(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))Dd(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,Oe(s,o)){var d=t.interleaved;d===null?(r.next=r,fo(t)):(r.next=d.next,d.next=r),t.interleaved=r;return}}catch{}finally{}n=ud(e,t,r,i),n!==null&&(r=le(),Me(n,e,i,r),Ld(n,t,i))}}function Nd(e){var t=e.alternate;return e===H||t!==null&&t===H}function Dd(e,t){Cn=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ld(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,eo(e,n)}}var Ki={readContext:xe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},dp={readContext:xe,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,Sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=qe();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=sp.bind(null,H,e),[i.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:So,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=op.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=H,r=qe();if(z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),Z===null)throw Error(k(349));Rt&30||gd(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,Ts(vd.bind(null,i,a,e),[e]),i.flags|=2048,Qn(9,yd.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=qe(),t=Z.identifierPrefix;if(z){var n=Ge,i=He;n=(i&~(1<<32-Ie(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cp={readContext:xe,useCallback:xd,useContext:xe,useEffect:Eo,useImperativeHandle:Td,useInsertionEffect:kd,useLayoutEffect:Ed,useMemo:Ad,useReducer:Ur,useRef:_d,useState:function(){return Ur(Vn)},useDebugValue:So,useDeferredValue:function(e){var t=Ae();return Rd(t,X.memoizedState,e)},useTransition:function(){var e=Ur(Vn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:fd,useId:Cd,unstable_isNewReconciler:!1},up={readContext:xe,useCallback:xd,useContext:xe,useEffect:Eo,useImperativeHandle:Td,useInsertionEffect:kd,useLayoutEffect:Ed,useMemo:Ad,useReducer:Hr,useRef:_d,useState:function(){return Hr(Vn)},useDebugValue:So,useDeferredValue:function(e){var t=Ae();return X===null?t.memoizedState=e:Rd(t,X.memoizedState,e)},useTransition:function(){var e=Hr(Vn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:fd,useId:Cd,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xa(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ur={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=le(),r=ct(e),a=je(i,r);a.payload=t,n!=null&&(a.callback=n),t=lt(e,a,r),t!==null&&(Me(t,e,r,i),Ti(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=le(),r=ct(e),a=je(i,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=lt(e,a,r),t!==null&&(Me(t,e,r,i),Ti(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),i=ct(e),r=je(n,i);r.tag=2,t!=null&&(r.callback=t),t=lt(e,r,i),t!==null&&(Me(t,e,i,n),Ti(t,e,i))}};function xs(e,t,n,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,i)||!Fn(r,a):!0}function Id(e,t,n){var i=!1,r=mt,a=t.contextType;return typeof a=="object"&&a!==null?a=xe(a):(r=he(t)?xt:oe.current,i=t.contextTypes,a=(i=i!=null)?Zt(e,r):mt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ur,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function As(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ur.enqueueReplaceState(t,t.state,null)}function Aa(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},go(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=xe(a):(a=he(t)?xt:oe.current,r.context=Zt(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(xa(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&ur.enqueueReplaceState(r,r.state,null),Vi(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",i=t;do n+=Bc(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function Gr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ra(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function Md(e,t,n){n=je(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ji||(Ji=!0,Wa=i),Ra(e,t)},n}function Od(e,t,n){n=je(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Ra(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ra(e,t),typeof i!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Rs(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new pp;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=xp.bind(null,e,t,n),t.then(e,e))}function Cs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=je(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var mp=Ke.ReactCurrentOwner,pe=!1;function se(e,t,n,i){t.child=e===null?cd(t,null,n,i):tn(t,e.child,n,i)}function Ds(e,t,n,i,r){n=n.render;var a=t.ref;return Kt(t,r),i=_o(e,t,n,i,a,r),n=ko(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xe(e,t,r)):(z&&n&&lo(t),t.flags|=1,se(e,t,i,r),t.child)}function Ls(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!Lo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Pd(e,t,a,i,r)):(e=Di(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(o,i)&&e.ref===t.ref)return Xe(e,t,r)}return t.flags|=1,e=ut(a,i),e.ref=t.ref,e.return=t,t.child=e}function Pd(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(Fn(a,i)&&e.ref===t.ref)if(pe=!1,t.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,r)}return Ca(e,t,n,i,r)}function qd(e,t,n){var i=t.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(jt,ge),ge|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(jt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,q(jt,ge),ge|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,q(jt,ge),ge|=i;return se(e,t,r,n),t.child}function Wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ca(e,t,n,i,r){var a=he(n)?xt:oe.current;return a=Zt(t,a),Kt(t,r),n=_o(e,t,n,i,a,r),i=ko(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xe(e,t,r)):(z&&i&&lo(t),t.flags|=1,se(e,t,n,r),t.child)}function Is(e,t,n,i,r){if(he(n)){var a=!0;Ui(t)}else a=!1;if(Kt(t,r),t.stateNode===null)Ri(e,t),Id(t,n,i),Aa(t,n,i,r),i=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var d=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=xe(p):(p=he(n)?xt:oe.current,p=Zt(t,p));var y=n.getDerivedStateFromProps,c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||d!==p)&&As(t,o,i,p),Ze=!1;var u=t.memoizedState;o.state=u,Vi(t,i,o,r),d=t.memoizedState,s!==i||u!==d||me.current||Ze?(typeof y=="function"&&(xa(t,n,y,i),d=t.memoizedState),(s=Ze||xs(t,n,s,i,u,d,p))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),o.props=i,o.state=d,o.context=p,i=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,pd(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:Ne(t.type,s),o.props=p,c=t.pendingProps,u=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=xe(d):(d=he(n)?xt:oe.current,d=Zt(t,d));var v=n.getDerivedStateFromProps;(y=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==c||u!==d)&&As(t,o,i,d),Ze=!1,u=t.memoizedState,o.state=u,Vi(t,i,o,r);var _=t.memoizedState;s!==c||u!==_||me.current||Ze?(typeof v=="function"&&(xa(t,n,v,i),_=t.memoizedState),(p=Ze||xs(t,n,p,i,u,_,d)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=_),o.props=i,o.state=_,o.context=d,i=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return Na(e,t,n,i,a,r)}function Na(e,t,n,i,r,a){Wd(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return r&&vs(t,n,!1),Xe(e,t,a);i=t.stateNode,mp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,a),t.child=tn(t,null,s,a)):se(e,t,s,a),t.memoizedState=i.state,r&&vs(t,n,!0),t.child}function Bd(e){var t=e.stateNode;t.pendingContext?ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ys(e,t.context,!1),yo(e,t.containerInfo)}function Ms(e,t,n,i,r){return en(),uo(r),t.flags|=256,se(e,t,n,i),t.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fd(e,t,n){var i=t.pendingProps,r=U.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),q(U,r&1),e===null)return Sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=hr(o,i,0,null),e=Tt(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=La(n),t.memoizedState=Da,e):To(t,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return hp(e,t,o,i,s,r,n);if(a){a=i.fallback,o=t.mode,r=e.child,s=r.sibling;var d={mode:"hidden",children:i.children};return!(o&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=ut(r,d),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=ut(s,a):(a=Tt(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?La(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Da,i}return a=e.child,e=a.sibling,i=ut(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function To(e,t){return t=hr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,i){return i!==null&&uo(i),tn(t,e.child,null,n),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,i,r,a,o){if(n)return t.flags&256?(t.flags&=-257,i=Gr(Error(k(422))),gi(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,r=t.mode,i=hr({mode:"visible",children:i.children},r,0,null),a=Tt(a,r,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=La(o),t.memoizedState=Da,a);if(!(t.mode&1))return gi(e,t,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(k(419)),i=Gr(a,i,void 0),gi(e,t,o,i)}if(s=(o&e.childLanes)!==0,pe||s){if(i=Z,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Qe(e,r),Me(i,e,r,-1))}return Do(),i=Gr(Error(k(421))),gi(e,t,o,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Ap.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,ye=st(r.nextSibling),ve=t,z=!0,Le=null,e!==null&&(ke[Ee++]=He,ke[Ee++]=Ge,ke[Ee++]=At,He=e.id,Ge=e.overflow,At=t),t=To(t,i.children),t.flags|=4096,t)}function Os(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ta(e.return,t,n)}function jr(e,t,n,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function zd(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(se(e,t,i.children,n),i=U.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Os(e,n,t);else if(e.tag===19)Os(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(q(U,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),jr(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Qi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}jr(t,!0,n,null,a);break;case"together":jr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ct|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fp(e,t,n){switch(t.tag){case 3:Bd(t),en();break;case 5:md(t);break;case 1:he(t.type)&&Ui(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;q(ji,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(q(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Fd(e,t,n):(q(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);q(U,U.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return zd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),q(U,U.current),i)break;return null;case 22:case 23:return t.lanes=0,qd(e,t,n)}return Xe(e,t,n)}var Ud,Ia,Hd,Gd;Ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};Hd=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Et(Fe.current);var a=null;switch(n){case"input":r=ta(e,r),i=ta(e,i),a=[];break;case"select":r=G({},r,{value:void 0}),i=G({},i,{value:void 0}),a=[];break;case"textarea":r=ra(e,r),i=ra(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Fi)}oa(n,i);var o;n=null;for(p in r)if(!i.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var s=r[p];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(In.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in i){var d=i[p];if(s=r!=null?r[p]:void 0,i.hasOwnProperty(p)&&d!==s&&(d!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&s[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(a||(a=[]),a.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(a=a||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(In.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&W("scroll",e),a||s===d||(a=[])):(a=a||[]).push(p,d))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};Gd=function(e,t,n,i){n!==i&&(t.flags|=4)};function yn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function gp(e,t,n){var i=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return he(t.type)&&zi(),re(t),null;case 3:return i=t.stateNode,nn(),B(me),B(oe),wo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(za(Le),Le=null))),Ia(e,t),re(t),null;case 5:vo(t);var r=Et(jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hd(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(k(166));return re(t),null}if(e=Et(Fe.current),hi(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[We]=t,i[Hn]=a,e=(t.mode&1)!==0,n){case"dialog":W("cancel",i),W("close",i);break;case"iframe":case"object":case"embed":W("load",i);break;case"video":case"audio":for(r=0;r<kn.length;r++)W(kn[r],i);break;case"source":W("error",i);break;case"img":case"image":case"link":W("error",i),W("load",i);break;case"details":W("toggle",i);break;case"input":Go(i,a),W("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},W("invalid",i);break;case"textarea":Yo(i,a),W("invalid",i)}oa(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&mi(i.textContent,s,e),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&mi(i.textContent,s,e),r=["children",""+s]):In.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",i)}switch(n){case"input":ai(i),jo(i,a,!0);break;case"textarea":ai(i),Vo(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Fi)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[We]=t,e[Hn]=i,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(o=sa(n,i),n){case"dialog":W("cancel",e),W("close",e),r=i;break;case"iframe":case"object":case"embed":W("load",e),r=i;break;case"video":case"audio":for(r=0;r<kn.length;r++)W(kn[r],e);r=i;break;case"source":W("error",e),r=i;break;case"img":case"image":case"link":W("error",e),W("load",e),r=i;break;case"details":W("toggle",e),r=i;break;case"input":Go(e,i),r=ta(e,i),W("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=G({},i,{value:void 0}),W("invalid",e);break;case"textarea":Yo(e,i),r=ra(e,i),W("invalid",e);break;default:r=i}oa(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var d=s[a];a==="style"?_l(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&wl(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Mn(e,d):typeof d=="number"&&Mn(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(In.hasOwnProperty(a)?d!=null&&a==="onScroll"&&W("scroll",e):d!=null&&Qa(e,a,d,o))}switch(n){case"input":ai(e),jo(e,i,!1);break;case"textarea":ai(e),Vo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+pt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Yt(e,!!i.multiple,a,!1):i.defaultValue!=null&&Yt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Fi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Gd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(k(166));if(n=Et(jn.current),Et(Fe.current),hi(t)){if(i=t.stateNode,n=t.memoizedProps,i[We]=t,(a=i.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:mi(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[We]=t,t.stateNode=i}return re(t),null;case 13:if(B(U),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ye!==null&&t.mode&1&&!(t.flags&128))ld(),en(),t.flags|=98560,a=!1;else if(a=hi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[We]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),a=!1}else Le!==null&&(za(Le),Le=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):Do())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return nn(),Ia(e,t),e===null&&zn(t.stateNode.containerInfo),re(t),null;case 10:return ho(t.type._context),re(t),null;case 17:return he(t.type)&&zi(),re(t),null;case 19:if(B(U),a=t.memoizedState,a===null)return re(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)yn(a,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qi(e),o!==null){for(t.flags|=128,yn(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(U,U.current&1|2),t.child}e=e.sibling}a.tail!==null&&V()>an&&(t.flags|=128,i=!0,yn(a,!1),t.lanes=4194304)}else{if(!i)if(e=Qi(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!z)return re(t),null}else 2*V()-a.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,i=!0,yn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=V(),t.sibling=null,n=U.current,q(U,i?n&1|2:n&1),t):(re(t),null);case 22:case 23:return No(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?ge&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function yp(e,t){switch(co(t),t.tag){case 1:return he(t.type)&&zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),B(me),B(oe),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vo(t),null;case 13:if(B(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(U),null;case 4:return nn(),null;case 10:return ho(t.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var yi=!1,ae=!1,vp=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){j(e,t,i)}else n.current=null}function Ma(e,t,n){try{n()}catch(i){j(e,t,i)}}var Ps=!1;function wp(e,t){if(ya=qi,e=Xl(),so(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,d=-1,p=0,y=0,c=e,u=null;t:for(;;){for(var v;c!==n||r!==0&&c.nodeType!==3||(s=o+r),c!==a||i!==0&&c.nodeType!==3||(d=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)u=c,c=v;for(;;){if(c===e)break t;if(u===n&&++p===r&&(s=o),u===a&&++y===i&&(d=o),(v=c.nextSibling)!==null)break;c=u,u=c.parentNode}c=v}n=s===-1||d===-1?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(va={focusedElem:e,selectionRange:n},qi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var b=_.memoizedProps,C=_.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ne(t.type,b),C);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){j(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return _=Ps,Ps=!1,_}function Nn(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Ma(t,n,a)}r=r.next}while(r!==i)}}function pr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jd(e){var t=e.alternate;t!==null&&(e.alternate=null,jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Hn],delete t[_a],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fi));else if(i!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}function qa(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}var ee=null,De=!1;function $e(e,t,n){for(n=n.child;n!==null;)Vd(e,t,n),n=n.sibling}function Vd(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(rr,n)}catch{}switch(n.tag){case 5:ae||Gt(n,t);case 6:var i=ee,r=De;ee=null,$e(e,t,n),ee=i,De=r,ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?Wr(e.parentNode,n):e.nodeType===1&&Wr(e,n),Wn(e)):Wr(ee,n.stateNode));break;case 4:i=ee,r=De,ee=n.stateNode.containerInfo,De=!0,$e(e,t,n),ee=i,De=r;break;case 0:case 11:case 14:case 15:if(!ae&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ma(n,t,o),r=r.next}while(r!==i)}$e(e,t,n);break;case 1:if(!ae&&(Gt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){j(n,t,s)}$e(e,t,n);break;case 21:$e(e,t,n);break;case 22:n.mode&1?(ae=(i=ae)||n.memoizedState!==null,$e(e,t,n),ae=i):$e(e,t,n);break;default:$e(e,t,n)}}function Ws(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(i){var r=Rp.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ce(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,De=!1;break e;case 3:ee=s.stateNode.containerInfo,De=!0;break e;case 4:ee=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(ee===null)throw Error(k(160));Vd(a,o,r),ee=null,De=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(p){j(r,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}function Qd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(t,e),Pe(e),i&4){try{Nn(3,e,e.return),pr(3,e)}catch(b){j(e,e.return,b)}try{Nn(5,e,e.return)}catch(b){j(e,e.return,b)}}break;case 1:Ce(t,e),Pe(e),i&512&&n!==null&&Gt(n,n.return);break;case 5:if(Ce(t,e),Pe(e),i&512&&n!==null&&Gt(n,n.return),e.flags&32){var r=e.stateNode;try{Mn(r,"")}catch(b){j(e,e.return,b)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&gl(r,a),sa(s,o);var p=sa(s,a);for(o=0;o<d.length;o+=2){var y=d[o],c=d[o+1];y==="style"?_l(r,c):y==="dangerouslySetInnerHTML"?wl(r,c):y==="children"?Mn(r,c):Qa(r,y,c,p)}switch(s){case"input":na(r,a);break;case"textarea":yl(r,a);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Yt(r,!!a.multiple,v,!1):u!==!!a.multiple&&(a.defaultValue!=null?Yt(r,!!a.multiple,a.defaultValue,!0):Yt(r,!!a.multiple,a.multiple?[]:"",!1))}r[Hn]=a}catch(b){j(e,e.return,b)}}break;case 6:if(Ce(t,e),Pe(e),i&4){if(e.stateNode===null)throw Error(k(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(b){j(e,e.return,b)}}break;case 3:if(Ce(t,e),Pe(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(b){j(e,e.return,b)}break;case 4:Ce(t,e),Pe(e);break;case 13:Ce(t,e),Pe(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Ro=V())),i&4&&Ws(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(p=ae)||y,Ce(t,e),ae=p):Ce(t,e),Pe(e),i&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(c=T=y;T!==null;){switch(u=T,v=u.child,u.tag){case 0:case 11:case 14:case 15:Nn(4,u,u.return);break;case 1:Gt(u,u.return);var _=u.stateNode;if(typeof _.componentWillUnmount=="function"){i=u,n=u.return;try{t=i,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(b){j(i,n,b)}}break;case 5:Gt(u,u.return);break;case 22:if(u.memoizedState!==null){Fs(c);continue}}v!==null?(v.return=u,T=v):Fs(c)}y=y.sibling}e:for(y=null,c=e;;){if(c.tag===5){if(y===null){y=c;try{r=c.stateNode,p?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=c.stateNode,d=c.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=bl("display",o))}catch(b){j(e,e.return,b)}}}else if(c.tag===6){if(y===null)try{c.stateNode.nodeValue=p?"":c.memoizedProps}catch(b){j(e,e.return,b)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;y===c&&(y=null),c=c.return}y===c&&(y=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ce(t,e),Pe(e),i&4&&Ws(e);break;case 21:break;default:Ce(t,e),Pe(e)}}function Pe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yd(n)){var i=n;break e}n=n.return}throw Error(k(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Mn(r,""),i.flags&=-33);var a=qs(e);qa(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=qs(e);Pa(e,s,o);break;default:throw Error(k(161))}}catch(d){j(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e,t,n){T=e,Xd(e)}function Xd(e,t,n){for(var i=(e.mode&1)!==0;T!==null;){var r=T,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yi;if(!o){var s=r.alternate,d=s!==null&&s.memoizedState!==null||ae;s=yi;var p=ae;if(yi=o,(ae=d)&&!p)for(T=r;T!==null;)o=T,d=o.child,o.tag===22&&o.memoizedState!==null?zs(r):d!==null?(d.return=o,T=d):zs(r);for(;a!==null;)T=a,Xd(a),a=a.sibling;T=r,yi=s,ae=p}Bs(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,T=a):Bs(e)}}function Bs(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||pr(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ae)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Es(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Es(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var c=y.dehydrated;c!==null&&Wn(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||t.flags&512&&Oa(t)}catch(u){j(t,t.return,u)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Fs(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function zs(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pr(4,t)}catch(d){j(t,n,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(d){j(t,r,d)}}var a=t.return;try{Oa(t)}catch(d){j(t,a,d)}break;case 5:var o=t.return;try{Oa(t)}catch(d){j(t,o,d)}}}catch(d){j(t,t.return,d)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var _p=Math.ceil,$i=Ke.ReactCurrentDispatcher,xo=Ke.ReactCurrentOwner,Te=Ke.ReactCurrentBatchConfig,M=0,Z=null,Q=null,te=0,ge=0,jt=ft(0),K=0,Xn=null,Ct=0,mr=0,Ao=0,Dn=null,ue=null,Ro=0,an=1/0,ze=null,Ji=!1,Wa=null,dt=null,vi=!1,it=null,Zi=0,Ln=0,Ba=null,Ci=-1,Ni=0;function le(){return M&6?V():Ci!==-1?Ci:Ci=V()}function ct(e){return e.mode&1?M&2&&te!==0?te&-te:rp.transition!==null?(Ni===0&&(Ni=Il()),Ni):(e=O,e!==0||(e=window.event,e=e===void 0?16:Fl(e.type)),e):1}function Me(e,t,n,i){if(50<Ln)throw Ln=0,Ba=null,Error(k(185));$n(e,n,i),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(mr|=n),K===4&&tt(e,te)),fe(e,i),n===1&&M===0&&!(t.mode&1)&&(an=V()+500,dr&&gt()))}function fe(e,t){var n=e.callbackNode;ru(e,t);var i=Pi(e,e===Z?te:0);if(i===0)n!==null&&Ko(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Ko(n),t===1)e.tag===0?ip(Us.bind(null,e)):ad(Us.bind(null,e)),Zu(function(){!(M&6)&&gt()}),n=null;else{switch(Ml(i)){case 1:n=Za;break;case 4:n=Dl;break;case 16:n=Oi;break;case 536870912:n=Ll;break;default:n=Oi}n=ic(n,Kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kd(e,t){if(Ci=-1,Ni=0,M&6)throw Error(k(327));var n=e.callbackNode;if($t()&&e.callbackNode!==n)return null;var i=Pi(e,e===Z?te:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=er(e,i);else{t=i;var r=M;M|=2;var a=Jd();(Z!==e||te!==t)&&(ze=null,an=V()+500,St(e,t));do try{Sp();break}catch(s){$d(e,s)}while(1);mo(),$i.current=a,M=r,Q!==null?t=0:(Z=null,te=0,t=K)}if(t!==0){if(t===2&&(r=pa(e),r!==0&&(i=r,t=Fa(e,r))),t===1)throw n=Xn,St(e,0),tt(e,i),fe(e,V()),n;if(t===6)tt(e,i);else{if(r=e.current.alternate,!(i&30)&&!kp(r)&&(t=er(e,i),t===2&&(a=pa(e),a!==0&&(i=a,t=Fa(e,a))),t===1))throw n=Xn,St(e,0),tt(e,i),fe(e,V()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(k(345));case 2:bt(e,ue,ze);break;case 3:if(tt(e,i),(i&130023424)===i&&(t=Ro+500-V(),10<t)){if(Pi(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){le(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ba(bt.bind(null,e,ue,ze),t);break}bt(e,ue,ze);break;case 4:if(tt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-Ie(i);a=1<<o,o=t[o],o>r&&(r=o),i&=~a}if(i=r,i=V()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_p(i/1960))-i,10<i){e.timeoutHandle=ba(bt.bind(null,e,ue,ze),i);break}bt(e,ue,ze);break;case 5:bt(e,ue,ze);break;default:throw Error(k(329))}}}return fe(e,V()),e.callbackNode===n?Kd.bind(null,e):null}function Fa(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(St(e,t).flags|=256),e=er(e,t),e!==2&&(t=ue,ue=n,t!==null&&za(t)),e}function za(e){ue===null?ue=e:ue.push.apply(ue,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Oe(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ao,t&=~mr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),i=1<<n;e[n]=-1,t&=~i}}function Us(e){if(M&6)throw Error(k(327));$t();var t=Pi(e,0);if(!(t&1))return fe(e,V()),null;var n=er(e,t);if(e.tag!==0&&n===2){var i=pa(e);i!==0&&(t=i,n=Fa(e,i))}if(n===1)throw n=Xn,St(e,0),tt(e,t),fe(e,V()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,ue,ze),fe(e,V()),null}function Co(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(an=V()+500,dr&&gt())}}function Nt(e){it!==null&&it.tag===0&&!(M&6)&&$t();var t=M;M|=1;var n=Te.transition,i=O;try{if(Te.transition=null,O=1,e)return e()}finally{O=i,Te.transition=n,M=t,!(M&6)&&gt()}}function No(){ge=jt.current,B(jt)}function St(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ju(n)),Q!==null)for(n=Q.return;n!==null;){var i=n;switch(co(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zi();break;case 3:nn(),B(me),B(oe),wo();break;case 5:vo(i);break;case 4:nn();break;case 13:B(U);break;case 19:B(U);break;case 10:ho(i.type._context);break;case 22:case 23:No()}n=n.return}if(Z=e,Q=e=ut(e.current,null),te=ge=t,K=0,Xn=null,Ao=mr=Ct=0,ue=Dn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}kt=null}return e}function $d(e,t){do{var n=Q;try{if(mo(),xi.current=Ki,Xi){for(var i=H.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xi=!1}if(Rt=0,J=X=H=null,Cn=!1,Yn=0,xo.current=null,n===null||n.return===null){K=1,Xn=t,Q=null;break}e:{var a=e,o=n.return,s=n,d=t;if(t=te,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,y=s,c=y.tag;if(!(y.mode&1)&&(c===0||c===11||c===15)){var u=y.alternate;u?(y.updateQueue=u.updateQueue,y.memoizedState=u.memoizedState,y.lanes=u.lanes):(y.updateQueue=null,y.memoizedState=null)}var v=Cs(o);if(v!==null){v.flags&=-257,Ns(v,o,s,a,t),v.mode&1&&Rs(a,p,t),t=v,d=p;var _=t.updateQueue;if(_===null){var b=new Set;b.add(d),t.updateQueue=b}else _.add(d);break e}else{if(!(t&1)){Rs(a,p,t),Do();break e}d=Error(k(426))}}else if(z&&s.mode&1){var C=Cs(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ns(C,o,s,a,t),uo(rn(d,s));break e}}a=d=rn(d,s),K!==4&&(K=2),Dn===null?Dn=[a]:Dn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Md(a,d,t);ks(a,g);break e;case 1:s=d;var h=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(dt===null||!dt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Od(a,s,t);ks(a,w);break e}}a=a.return}while(a!==null)}ec(n)}catch(E){t=E,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function Jd(){var e=$i.current;return $i.current=Ki,e===null?Ki:e}function Do(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Ct&268435455)&&!(mr&268435455)||tt(Z,te)}function er(e,t){var n=M;M|=2;var i=Jd();(Z!==e||te!==t)&&(ze=null,St(e,t));do try{Ep();break}catch(r){$d(e,r)}while(1);if(mo(),M=n,$i.current=i,Q!==null)throw Error(k(261));return Z=null,te=0,K}function Ep(){for(;Q!==null;)Zd(Q)}function Sp(){for(;Q!==null&&!Xc();)Zd(Q)}function Zd(e){var t=nc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?ec(e):Q=t,xo.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yp(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(n=gp(n,t,ge),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);K===0&&(K=5)}function bt(e,t,n){var i=O,r=Te.transition;try{Te.transition=null,O=1,Tp(e,t,n,i)}finally{Te.transition=r,O=i}return null}function Tp(e,t,n,i){do $t();while(it!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(au(e,a),e===Z&&(Q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vi||(vi=!0,ic(Oi,function(){return $t(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Te.transition,Te.transition=null;var o=O;O=1;var s=M;M|=4,xo.current=null,wp(e,n),Qd(n,e),ju(va),qi=!!ya,va=ya=null,e.current=n,bp(n),Kc(),M=s,O=o,Te.transition=a}else e.current=n;if(vi&&(vi=!1,it=e,Zi=r),a=e.pendingLanes,a===0&&(dt=null),Zc(n.stateNode),fe(e,V()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ji)throw Ji=!1,e=Wa,Wa=null,e;return Zi&1&&e.tag!==0&&$t(),a=e.pendingLanes,a&1?e===Ba?Ln++:(Ln=0,Ba=e):Ln=0,gt(),null}function $t(){if(it!==null){var e=Ml(Zi),t=Te.transition,n=O;try{if(Te.transition=null,O=16>e?16:e,it===null)var i=!1;else{if(e=it,it=null,Zi=0,M&6)throw Error(k(331));var r=M;for(M|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var d=0;d<s.length;d++){var p=s[d];for(T=p;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Nn(8,y,a)}var c=y.child;if(c!==null)c.return=y,T=c;else for(;T!==null;){y=T;var u=y.sibling,v=y.return;if(jd(y),y===p){T=null;break}if(u!==null){u.return=v,T=u;break}T=v}}}var _=a.alternate;if(_!==null){var b=_.child;if(b!==null){_.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Nn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,T=g;break e}T=a.return}}var h=e.current;for(T=h;T!==null;){o=T;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,T=f;else e:for(o=h;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pr(9,s)}}catch(E){j(s,s.return,E)}if(s===o){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(M=r,gt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(rr,e)}catch{}i=!0}return i}finally{O=n,Te.transition=t}}return!1}function Hs(e,t,n){t=rn(n,t),t=Md(e,t,1),e=lt(e,t,1),t=le(),e!==null&&($n(e,1,t),fe(e,t))}function j(e,t,n){if(e.tag===3)Hs(e,e,n);else for(;t!==null;){if(t.tag===3){Hs(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dt===null||!dt.has(i))){e=rn(n,e),e=Od(t,e,1),t=lt(t,e,1),e=le(),t!==null&&($n(t,1,e),fe(t,e));break}}t=t.return}}function xp(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(K===4||K===3&&(te&130023424)===te&&500>V()-Ro?St(e,0):Ao|=n),fe(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=le();e=Qe(e,t),e!==null&&($n(e,t,n),fe(e,n))}function Ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Rp(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(k(314))}i!==null&&i.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,fp(e,t,n);pe=!!(e.flags&131072)}else pe=!1,z&&t.flags&1048576&&od(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ri(e,t),e=t.pendingProps;var r=Zt(t,oe.current);Kt(t,n),r=_o(null,t,i,e,r,n);var a=ko();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(i)?(a=!0,Ui(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,go(t),r.updater=ur,t.stateNode=r,r._reactInternals=t,Aa(t,i,e,n),t=Na(null,t,i,!0,a,n)):(t.tag=0,z&&a&&lo(t),se(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=Np(i),e=Ne(i,e),r){case 0:t=Ca(null,t,i,e,n);break e;case 1:t=Is(null,t,i,e,n);break e;case 11:t=Ds(null,t,i,e,n);break e;case 14:t=Ls(null,t,i,Ne(i.type,e),n);break e}throw Error(k(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ne(i,r),Ca(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ne(i,r),Is(e,t,i,r,n);case 3:e:{if(Bd(t),e===null)throw Error(k(387));i=t.pendingProps,a=t.memoizedState,r=a.element,pd(e,t),Vi(t,i,null,n);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=rn(Error(k(423)),t),t=Ms(e,t,i,n,r);break e}else if(i!==r){r=rn(Error(k(424)),t),t=Ms(e,t,i,n,r);break e}else for(ye=st(t.stateNode.containerInfo.firstChild),ve=t,z=!0,Le=null,n=cd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),i===r){t=Xe(e,t,n);break e}se(e,t,i,n)}t=t.child}return t;case 5:return md(t),e===null&&Sa(t),i=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,wa(i,r)?o=null:a!==null&&wa(i,a)&&(t.flags|=32),Wd(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Sa(t),null;case 13:return Fd(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=tn(t,null,i,n):se(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ne(i,r),Ds(e,t,i,r,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,a=t.memoizedProps,o=r.value,q(ji,i._currentValue),i._currentValue=o,a!==null)if(Oe(a.value,o)){if(a.children===r.children&&!me.current){t=Xe(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var d=s.firstContext;d!==null;){if(d.context===i){if(a.tag===1){d=je(-1,n&-n),d.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?d.next=d:(d.next=y.next,y.next=d),p.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Ta(a.return,n,t),s.lanes|=n;break}d=d.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ta(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}se(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Kt(t,n),r=xe(r),i=i(r),t.flags|=1,se(e,t,i,n),t.child;case 14:return i=t.type,r=Ne(i,t.pendingProps),r=Ne(i.type,r),Ls(e,t,i,r,n);case 15:return Pd(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ne(i,r),Ri(e,t),t.tag=1,he(i)?(e=!0,Ui(t)):e=!1,Kt(t,n),Id(t,i,r),Aa(t,i,r,n),Na(null,t,i,!0,e,n);case 19:return zd(e,t,n);case 22:return qd(e,t,n)}throw Error(k(156,t.tag))};function ic(e,t){return Nl(e,t)}function Cp(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,i){return new Cp(e,t,n,i)}function Lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Np(e){if(typeof e=="function")return Lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ka)return 11;if(e===$a)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Di(e,t,n,i,r,a){var o=2;if(i=e,typeof e=="function")Lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return Tt(n.children,r,a,t);case Xa:o=8,r|=8;break;case $r:return e=Se(12,n,t,r|2),e.elementType=$r,e.lanes=a,e;case Jr:return e=Se(13,n,t,r),e.elementType=Jr,e.lanes=a,e;case Zr:return e=Se(19,n,t,r),e.elementType=Zr,e.lanes=a,e;case ml:return hr(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ul:o=10;break e;case pl:o=9;break e;case Ka:o=11;break e;case $a:o=14;break e;case Je:o=16,i=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Se(o,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function Tt(e,t,n,i){return e=Se(7,e,i,t),e.lanes=n,e}function hr(e,t,n,i){return e=Se(22,e,i,t),e.elementType=ml,e.lanes=n,e.stateNode={isHidden:!1},e}function Yr(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Vr(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dp(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ar(0),this.expirationTimes=Ar(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ar(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Io(e,t,n,i,r,a,o,s,d){return e=new Dp(e,t,n,s,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Se(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(a),e}function Lp(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function rc(e){if(!e)return mt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(he(n))return rd(e,n,t)}return t}function ac(e,t,n,i,r,a,o,s,d){return e=Io(n,i,!0,e,r,a,o,s,d),e.context=rc(null),n=e.current,i=le(),r=ct(n),a=je(i,r),a.callback=t??null,lt(n,a,r),e.current.lanes=r,$n(e,r,i),fe(e,i),e}function fr(e,t,n,i){var r=t.current,a=le(),o=ct(r);return n=rc(n),t.context===null?t.context=n:t.pendingContext=n,t=je(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=lt(r,t,o),e!==null&&(Me(e,r,o,a),Ti(e,r,o)),o}function tr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Gs(e,t),(e=e.alternate)&&Gs(e,t)}function Ip(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oo(e){this._internalRoot=e}gr.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));fr(e,t,null,null)};gr.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){fr(null,e,null,null)}),t[Ve]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=ql();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Bl(e)}};function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function js(){}function Mp(e,t,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var p=tr(o);a.call(p)}}var o=ac(t,i,e,0,null,!1,!1,"",js);return e._reactRootContainer=o,e[Ve]=o.current,zn(e.nodeType===8?e.parentNode:e),Nt(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var p=tr(d);s.call(p)}}var d=Io(e,0,!1,null,null,!1,!1,"",js);return e._reactRootContainer=d,e[Ve]=d.current,zn(e.nodeType===8?e.parentNode:e),Nt(function(){fr(t,d,n,i)}),d}function vr(e,t,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var d=tr(o);s.call(d)}}fr(t,o,e,r)}else o=Mp(n,t,e,r,i);return tr(o)}Ol=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(eo(t,n|1),fe(t,V()),!(M&6)&&(an=V()+500,gt()))}break;case 13:Nt(function(){var i=Qe(e,1);if(i!==null){var r=le();Me(i,e,1,r)}}),Mo(e,1)}};to=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=le();Me(t,e,134217728,n)}Mo(e,134217728)}};Pl=function(e){if(e.tag===13){var t=ct(e),n=Qe(e,t);if(n!==null){var i=le();Me(n,e,t,i)}Mo(e,t)}};ql=function(){return O};Wl=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};da=function(e,t,n){switch(t){case"input":if(na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=lr(i);if(!r)throw Error(k(90));fl(i),na(i,r)}}}break;case"textarea":yl(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Sl=Co;Tl=Nt;var Op={usingClientEntryPoint:!1,Events:[Zn,Bt,lr,kl,El,Co]},vn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pp={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rl(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{rr=wi.inject(Pp),Be=wi}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Po(t))throw Error(k(200));return Lp(e,t,null,n)};be.createRoot=function(e,t){if(!Po(e))throw Error(k(299));var n=!1,i="",r=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Io(e,1,!1,null,null,n,!1,i,r),e[Ve]=t.current,zn(e.nodeType===8?e.parentNode:e),new Oo(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Rl(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Nt(e)};be.hydrate=function(e,t,n){if(!yr(t))throw Error(k(200));return vr(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Po(e))throw Error(k(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ac(t,null,e,1,n??null,r,!1,a,o),e[Ve]=t.current,zn(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new gr(t)};be.render=function(e,t,n){if(!yr(t))throw Error(k(200));return vr(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!yr(e))throw Error(k(40));return e._reactRootContainer?(Nt(function(){vr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};be.unstable_batchedUpdates=Co;be.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!yr(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return vr(e,t,n,!1,i)};be.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),sl.exports=be;var qp=sl.exports,Ys=qp;Xr.createRoot=Ys.createRoot,Xr.hydrateRoot=Ys.hydrateRoot;const nr={stats:{label:"Statistics",color:"#F59E0B",emoji:"📊"},sql:{label:"SQL",color:"#3B82F6",emoji:"🗃️"},python:{label:"Python",color:"#10B981",emoji:"🐍"},abtest:{label:"A/B Testing",color:"#8B5CF6",emoji:"🧪"},causal:{label:"Causal Inference",color:"#06B6D4",emoji:"🔬"},product:{label:"Product & Metrics",color:"#EF4444",emoji:"💡"},ml:{label:"ML Models",color:"#F97316",emoji:"🤖"},dl:{label:"Deep Learning",color:"#EC4899",emoji:"🧠"},review:{label:"Weekly Review",color:"#64748B",emoji:"📝"}},Wp={1:"Week 1 — Statistics & SQL Foundations",2:"Week 2 — SQL Advanced + Python",3:"Week 3 — ML Deep Dive",4:"Week 4 — A/B Testing + Causal + Product",5:"Week 5 — Rec Systems + LeetCode"},lc={Meta:"#1877F2","Meta/All":"#1877F2",Airbnb:"#FF5A5F",Netflix:"#E50914",Spotify:"#1DB954",Reddit:"#FF4500",Expedia:"#003580",Disney:"#1C5BA3"},m={bg:"#0f0c29",card:"rgba(255,255,255,.04)",border:"rgba(255,255,255,.08)",text:"#e2e8f0",muted:"#94a3b8",dim:"#64748b",purple:"#a78bfa",green:"#10b981",red:"#ef4444",yellow:"#f59e0b"},En=[{day:1,week:1,cat:"stats",title:"Probability Fundamentals",topics:["Conditional probability, Bayes' theorem — P(A|B) = P(B|A)·P(A)/P(B)","Permutations & combinations","Independence vs mutual exclusivity","Classic puzzles: birthday paradox, elevator buttons, meetings in rooms"],resources:["Think Stats 2e (free) — greenteapress.com/thinkstats2","Khan Academy: Conditional Probability — khanacademy.org/math/statistics-probability/probability-library","StatQuest: Bayes Theorem — youtube.com/watch?v=9wCnvr7Xw4E"],qKey:"statsQ",qs:[0,8],questions:[{q:"Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",a:"P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY) = (2/3)³·0.25 / [(2/3)³·0.25 + (1/3)³·0.75] = 8·0.25 / (8·0.25 + 0.75) = 2 / (2+0.75) ≈ 8/11 ≈ 0.727.",co:"Meta",freq:"High"},{q:"A fair coin and an unfair coin (both sides tails) — you pick one at random, flip 5 times, see all tails. What is the probability you picked the unfair coin?",a:"P(unfair|TTTTT) = P(TTTTT|unfair)·P(unfair) / P(TTTTT) = 1·0.5 / [1·0.5 + (0.5)^5·0.5] = 0.5 / (0.5 + 0.0156) ≈ 32/33 ≈ 0.97.",co:"Meta/All",freq:"High"},{q:"A jar has 1000 coins: 999 fair, 1 double-headed. You pick a coin at random and flip 10 heads. What is the probability the next flip is also heads?",a:"P(fair|10H)≈0.4939, P(unfair|10H)≈0.5061. P(next H) = P(fair|10H)·0.5 + P(unfair|10H)·1 = 0.4939·0.5 + 0.5061 ≈ 0.753.",co:"Meta/All",freq:"High"},{q:"A couple has two children, at least one of which is a girl. What is the probability both children are girls?",a:"Sample space: BB, BG, GB, GG. Excluding BB (no girls), we have 3 equally likely outcomes. Only GG = both girls. P(GG | at least one girl) = 1/3.",co:"Meta/All",freq:"High"},{q:"In any 15-minute interval, there is a 20% probability of seeing at least one shooting star. What is the probability of seeing at least one shooting star in an hour?",a:"P(none in 15 min) = 0.8. P(none in 1 hour) = 0.8^4 = 0.4096. P(at least one in 1 hour) = 1 - 0.4096 = 0.5904.",co:"Meta/All",freq:"Medium"},{q:"How would you generate a random number between 1 and 7 using only a fair 6-sided die?",a:"Roll the die twice → 36 outcomes. Reduce to 35 (exclude (6,6)), divide into 7 groups of 5. Roll again if (6,6). Map each group to 1-7 with equal probability 5/35 = 1/7.",co:"Meta/All",freq:"Medium"},{q:"What is the expected number of children a couple will have if they keep having children until they get a girl (gender ratio = 1:1)?",a:"Geometric distribution with p=0.5. E[X] = 1/p = 2 children on average.",co:"Meta/All",freq:"Medium"},{q:"In any 15-minute interval, P(≥1 shooting star) = 20%. What is P(≥1 shooting star in 1 hour)?",a:"P(none in 15 min) = 0.8. P(none in 1 hour) = 0.8^4 = 0.4096. P(at least one) = 1 − 0.4096 = 0.5904.",co:"Meta/All",freq:"Medium"}]},{day:2,week:1,cat:"stats",title:"Distributions & Shape Description",topics:["Binomial, Poisson, Geometric — PMF, E[X], Var[X]","Normal, Exponential, Log-Normal distributions","Right-skewed vs symmetric — mode/median/mean ordering","Meta hallmark: describe distribution of DAU metrics (posts, comments, app usage time)"],resources:["StatQuest: Probability Distributions playlist — youtube.com/@statquest","MIT 18.650 Stats for Applications — ocw.mit.edu/courses/18-650"],qKey:"statsQ",qs:[8,18],questions:[{q:"Describe the distribution of 'comments per user per day'. What is the mode, median, mean, and p95? How would the distribution of the daily median change over the next 20 days?",a:"Right-skewed / Poisson-like. Mode≈1, Median≈2-3, Mean≈8-10, P95≈100. Over 20 days the daily median regresses toward the population mean (CLT). Variance of the daily median shrinks.",co:"Meta",pos:"DS",freq:"High"},{q:"Describe the distribution of 'posts per user per day'. What is the shape? Estimate p5, p50, p95.",a:"Right-skewed / Log-normal. Most users are passive. Mode=0, Median≈1, Mean≈5 (pulled by influencers/bots/businesses). P5=0, P50=1, P95=6-8.",co:"Meta",pos:"DS",freq:"High"},{q:"Describe the distribution of 'app usage time per user per day'. What type of distribution? Where are mean, median, mode?",a:"Exponential distribution. Most users leave in first 10 sec (skeptical). P5≈0 sec, Mode≈2-3 sec, Median≈10 sec, Mean≈15-20 sec (pulled by power users).",co:"Meta",pos:"DS",freq:"High"},{q:"What is a non-Gaussian distribution you'd encounter in real data? Give an example.",a:"Count data → Poisson (comments per user per day). Time-to-event → Exponential (app session length). Highly skewed → Log-normal (income, post engagement). Binary outcomes → Bernoulli/Binomial. Heavy tails → Pareto. Using Gaussian on these leads to poor models.",co:"Meta/All",freq:"High"},{q:"What is the Binomial distribution? When does it apply?",a:"X ~ Binomial(n,p): number of successes in n independent Bernoulli trials each with probability p. E[X]=np, Var[X]=np(1-p). Applies when: fixed n, independent trials, constant p, binary outcome. Example: 100 users see an ad; each clicks with probability 0.04. Expected clicks = 4, variance = 3.84.",co:"Meta/All",freq:"High"},{q:"What is the Poisson distribution? When is it appropriate?",a:"X ~ Poisson(λ): number of events in a fixed interval. E[X]=Var[X]=λ. Appropriate for: rare events, count data, events occurring at a constant rate independently. Example: number of comments per user per day, number of server requests per second.",co:"Meta/All",freq:"High"}]},{day:3,week:1,cat:"stats",title:"CLT, Hypothesis Testing, CIs",topics:["Central Limit Theorem — formal statement + intuition + simulation","Null/alternative hypothesis, p-value, α, Type I & II errors, power","Confidence interval: formula, width interpretation","Welch's t-test vs Student's t-test"],resources:["3Blue1Brown: But what is the Central Limit Theorem? — youtube.com/watch?v=zeJD6dqJ5lo","Seeing Theory: visual stats — seeing-theory.brown.edu"],qKey:"statsQ",qs:[18,30],questions:[{q:"What is the Central Limit Theorem and why is it important for A/B testing?",a:"CLT: The sampling distribution of the sample mean is approximately Normal regardless of the underlying distribution, given a sufficiently large n. For A/B testing: even if individual user metrics are non-normal (e.g., skewed), the group means will be approximately Normal, allowing us to use z-tests and t-tests to compare them.",co:"Meta/All",freq:"High"},{q:"What is p-value? What does p=0.25 mean in plain English? What would you tell a product manager?",a:"p-value = P(observing data this extreme or more, assuming H0 is true). p=0.25 means: if there were truly no difference, we'd see this result or something more extreme 25% of the time by chance alone. Recommendation: cannot reject null. Either extend the test for more power, or the difference is not real.",co:"Netflix",freq:"High"},{q:"Explain the difference between confidence interval, significance level, and statistical power.",a:"CI: range of plausible values for the true parameter (e.g., 95% CI means 95% of such intervals will contain the truth). Significance level α: threshold for Type I error (e.g., 5% chance of false positive). Power (1-β): probability of detecting a true effect if it exists. Higher power requires larger sample size.",co:"Meta/All",freq:"High"},{q:"What is coverage probability of a confidence interval?",a:"The probability that the CI procedure produces an interval that contains the true population parameter, over many repeated samples. A 95% CI has coverage probability 0.95 — meaning if you construct 100 such intervals from different samples, about 95 will contain the true value.",co:"Meta",freq:"Medium"},{q:"Given three confidence intervals shown on a chart, interpret them. What does a very wide CI indicate? What is coverage probability?",a:"Wide CI → large SE → either small sample size or high variance in user behavior (heterogeneous population). CI that doesn't cross 0 = statistically significant. Coverage probability = P(CI contains true parameter) over repeated experiments = 1-α.",co:"Meta",pos:"DS",freq:"Medium"},{q:"What is the difference between Type I and Type II error? Which is worse and in what context?",a:"Type I (α): rejecting H0 when it's true — false positive. Type II (β): failing to reject H0 when it's false — false negative. Power = 1−β. Which is worse depends on cost of each error: cancer screening → Type II worse (miss a case). Spam filter → Type I worse (block legit email). In A/B testing: Type I = launching a feature that has no real effect.",co:"Meta/All",freq:"High"}]},{day:4,week:1,cat:"stats",title:"Statistical Tests + Ads Probability",topics:["t-test, chi-square, Mann-Whitney U (for non-normal)","Sample size formula: n = (zα/2 + zβ)² × 2σ² / δ²","Meta ad placement: 4% per post (Binomial) vs 1-per-25 (Deterministic) — same E[X], different Var","Bootstrap: sampling with replacement, when to use"],resources:["Evan Miller Sample Size Calculator — evanmiller.org/ab-testing/sample-size.html","Penn State STAT 415: Hypothesis Tests — online.stat.psu.edu/stat415"],qKey:"statsQ",qs:[30,42],questions:[{q:"Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute expected value and variance for each. Probability of seeing more than twice the expected number of ads? Which do you recommend?",a:"E[X] = 4 for both. Var(Method 1) = 100*0.04*0.96 = 3.84 (Binomial). Var(Method 2) = 0 (deterministic). P(X>8 | Method 1) = 1 - Binom.CDF(8; n=100, p=0.04). Method 2 better: predictable user experience, max 1 consecutive ad.",co:"Meta",pos:"DS",freq:"High"},{q:"What is bootstrapping? When do you use it over a parametric test?",a:"Bootstrap: resample your data with replacement B times, compute the statistic each time → get an empirical sampling distribution without parametric assumptions. Use when: small sample, unknown distribution, complex statistic without closed-form SE. Drawback: assumes data is a good proxy for population.",co:"Meta/All",freq:"Medium"},{q:"What is the Mann-Whitney U test? When is it preferred over a t-test?",a:"Mann-Whitney U: non-parametric test comparing whether one group's values tend to be higher than another's (tests rank sums). Preferred over t-test when: data is heavily non-normal, ordinal data, small sample size with clear outliers. Slight loss of power compared to t-test on normal data.",co:"Meta/All",freq:"Medium"},{q:"K meetings randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",a:"This uses size-biased sampling. E[X in room | room has meeting] = E[X^2]/E[X]. For Binomial(K, 1/N): E[X]=K/N, E[X^2]=Var+E[X]^2. Result: 1 + (K-1)/N.",co:"Meta",pos:"DS",freq:"Medium"},{q:"FB has 1M users and 1000 ads, each ad shown to each user with uniform probability. How many users will see at least one ad?",a:"P(see specific ad) = 1/1M. P(see at least 1 of 1000 ads) = 1-(1-1/1M)^1000 ≈ 1000/1M = 0.001. Expected users = 1M * 0.001 = 1000 users.",co:"Meta",pos:"DS",freq:"Medium"}]},{day:5,week:1,cat:"stats",title:"Statistics Deep Practice",topics:["Simpson's paradox — detect + handle","Bayesian fraud detection — compute P(bad|flagged) mentally","Expected value + variance of compound distributions","Coverage probability, bootstrap CI vs parametric CI"],resources:["StatQuest: Simpson's Paradox — youtube.com/watch?v=ebEkn-BiW5k","Causal Inference: The Mixtape Ch. 1 (free) — mixtape.scunning.com"],qKey:"statsQ",qs:[42,55],questions:[{q:"Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad? Estimate in your head.",a:"P(bad|flagged) = P(flagged|bad)*P(bad) / P(flagged) = 0.99*0.01 / (0.99*0.01 + 0.01*0.99) ≈ 50%. Mental shortcut: 0.95*0.01 / (0.95*0.01 + 0.05*0.99) ≈ 1/6 ≈ 16% for 95% accuracy case.",co:"Meta",pos:"DS",freq:"High"},{q:"What is Simpson's Paradox? Give an example. How do you handle it in a dataset? What would you do if a sample has inherent bias?",a:"A trend appears in subgroups but reverses when combined (usually due to a lurking/confounding variable). Example: Berkeley admissions. Handle: stratify by confounder, report results per stratum, use regression to control. For biased sample: DiD analysis or AA test.",co:"Meta",pos:"DS",freq:"High"},{q:"What is selection bias? Give an example.",a:"Selection bias: when sample is not representative of the population due to non-random selection. Example: survivorship bias — studying only successful companies gives misleading conclusions about what makes companies succeed. In A/B testing: users who opt-in to a feature differ systematically from those who don't.",co:"Meta/All",freq:"Medium"},{q:"When would you use mean vs. median to describe a dataset?",a:"Median when data is skewed or has outliers (income, house prices, app usage time). Mean when data is symmetric and outlier-free. Rule: the more skewed the distribution, the more you prefer median. In practice, report both — large divergence signals skew.",co:"Meta/All",freq:"High"},{q:"What is statistical interaction? Give an example.",a:"An interaction is when the effect of one variable on the outcome changes depending on the level of another variable. Example: the effect of a new UI feature on conversion rate differs for mobile vs. desktop users. In regression: include an interaction term X1·X2 to model this.",co:"Meta/All",freq:"Medium"},{q:"What is a confounding variable? How do you handle it?",a:"A confounder affects both the independent and dependent variable, creating a spurious association. Example: ice cream sales and drowning — both driven by hot weather. Handle by: randomization (A/B test), stratification, multivariate regression controlling for confounders, or matching (propensity score).",co:"Meta/All",freq:"High"}]},{day:6,week:1,cat:"sql",title:"SQL Foundations + Meta Table Patterns",topics:["SELECT, WHERE, GROUP BY, HAVING, ORDER BY, NULL handling","AVG(CASE WHEN condition THEN 1 ELSE 0 END) — the Meta percentage pattern","user_actions table (Meta): action types view/like/comment/report","Spam queries: % of content viewed that is spam"],resources:["LeetCode SQL Easy: #175, #176, #182, #196 — leetcode.com/problemset/database","Mode Analytics SQL Tutorial — mode.com/sql-tutorial","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[0,10],questions:[{q:"Tables: searches(date, search_id, user_id, age_group, search_query) and search_results(date, search_id, result_id, result_type, clicked). Q1: How many users searched more than 10 times in the last 7 days? Q2: What % of users clicked on an Event result?",a:"Q1: SELECT COUNT(*) FROM (SELECT user_id, COUNT(search_id) FROM searches WHERE date>=DATE_SUB(CURDATE(),INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id)>10). Q2: SELECT AVG(clicked) FROM (SELECT user_id, MAX(CASE WHEN result_type='event' AND clicked=TRUE THEN 1 ELSE 0 END) FROM search_result",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Using searches + search_results tables: What % of searches returned multiple result types? Top 10 search queries most likely to return an Event result?",a:"Multi-type %: SELECT AVG(CASE WHEN cnt>1 THEN 1 ELSE 0 END) FROM (SELECT search_id, COUNT(DISTINCT result_type) as cnt FROM search_results GROUP BY search_id). Top 10: SELECT search_query, AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as event_rate FROM searches JOIN search_results USING(sear",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, age_bucket, country, dau_flag, ds). Q1: List callers who contacted more than 2 distinct people yesterday. Q2: Time spent per DAU in the US yesterday.",a:"Q1: SELECT caller, COUNT(DISTINCT recipient) FROM video_calls WHERE ds=yesterday GROUP BY caller HAVING COUNT(DISTINCT recipient)>2. Q2: JOIN dim_all_users ON user_id=caller OR user_id=recipient, then SUM(duration)/COUNT(*) per DAU. Key: bidirectional join (caller OR recipient).",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Using video_calls + dim_all_users: What % of French DAU were on a video call yesterday?",a:"SELECT AVG(call_flag) FROM (SELECT u.user_id, CASE WHEN COUNT(c.call_id)>0 THEN 1 ELSE 0 END as call_flag FROM (SELECT user_id FROM dim_all_users WHERE country='fr' AND dau_flag=1 AND ds=yesterday) u LEFT JOIN (SELECT caller,recipient,call_id FROM video_calls WHERE ds=yesterday) c ON u.user_id=c.cal",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action: request/accept/reject). Q1: How many friend requests received a response on Aug 1st 2021? Q2: Overall acceptance rate for requests sent by user 123?",a:"Q1: SELECT COUNT(DISTINCT request_id) FROM friend_requests WHERE action<>'request' AND ds='2021-08-01'. Q2: SELECT AVG(accepted) FROM (SELECT request_id, MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) as accepted FROM friend_requests WHERE actor_id=123 GROUP BY request_id).",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table user_actions(ds, user_id, post_id, action: view/like/comment/reaction/report, extra). Table reviewer_removals(ds, reviewer_id, post_id). Q1: What % of daily content users view is spam? Q2: How many posts were reported as spam yesterday?",a:"Q1: SELECT SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END)/SUM(CASE WHEN action='view' THEN 1 ELSE 0 END) FROM user_actions WHERE ds=yesterday. Q2: SELECT COUNT(DISTINCT post_id) FROM user_actions WHERE action='report' AND extra='SPAM' AND ds=yesterday.",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table: attendance_events(date, student_id, attendance) and all_students(student_id, school_id, grade_level, date_of_birth). Q1: What % of students attended school on their birthday? Q2: Which grade level had the largest attendance drop between yesterday and today?",a:"Q1: LEFT JOIN on student_id AND date=date_of_birth, then AVG(attendance). Q2: Use LEAD() OVER (PARTITION BY grade_level ORDER BY date DESC) to get yesterday's count, compute diff, ORDER BY diff DESC LIMIT 1.",co:"Meta",pos:"DS/DA",freq:"Medium"}]},{day:7,week:1,cat:"review",title:"📝 Week 1 Review",topics:["✍️ Spend 60–90 minutes writing:","→ 1-page summary of what you learned this week","→ Derivations from memory: Bayes formula, CLT statement, sample size formula, t-test statistic, E[X] for Binomial & Poisson","→ Top 10 insights: which concepts surprised you, which felt weak"],resources:["Your own notes — no new material today","Re-read anything shaky from Days 1-6"],qKey:"statsQ",qs:[0,6],questions:[{q:"Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",a:"P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY) = (2/3)³·0.25 / [(2/3)³·0.25 + (1/3)³·0.75] = 8·0.25 / (8·0.25 + 0.75) = 2 / (2+0.75) ≈ 8/11 ≈ 0.727.",co:"Meta",freq:"High"},{q:"What is the Central Limit Theorem and why is it important for A/B testing?",a:"CLT: The sampling distribution of the sample mean is approximately Normal regardless of the underlying distribution, given a sufficiently large n. For A/B testing: even if individual user metrics are non-normal (e.g., skewed), the group means will be approximately Normal, allowing us to use z-tests and t-tests to compare them.",co:"Meta/All",freq:"High"},{q:"What is p-value? What does p=0.25 mean in plain English? What would you tell a product manager?",a:"p-value = P(observing data this extreme or more, assuming H0 is true). p=0.25 means: if there were truly no difference, we'd see this result or something more extreme 25% of the time by chance alone. Recommendation: cannot reject null. Either extend the test for more power, or the difference is not real.",co:"Netflix",freq:"High"},{q:"Explain the difference between confidence interval, significance level, and statistical power.",a:"CI: range of plausible values for the true parameter (e.g., 95% CI means 95% of such intervals will contain the truth). Significance level α: threshold for Type I error (e.g., 5% chance of false positive). Power (1-β): probability of detecting a true effect if it exists. Higher power requires larger sample size.",co:"Meta/All",freq:"High"},{q:"Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute expected value and variance for each. Probability of seeing more than twice the expected number of ads? Which do you recommend?",a:"E[X] = 4 for both. Var(Method 1) = 100*0.04*0.96 = 3.84 (Binomial). Var(Method 2) = 0 (deterministic). P(X>8 | Method 1) = 1 - Binom.CDF(8; n=100, p=0.04). Method 2 better: predictable user experience, max 1 consecutive ad.",co:"Meta",pos:"DS",freq:"High"},{q:"Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad? Estimate in your head.",a:"P(bad|flagged) = P(flagged|bad)*P(bad) / P(flagged) = 0.99*0.01 / (0.99*0.01 + 0.01*0.99) ≈ 50%. Mental shortcut: 0.95*0.01 / (0.95*0.01 + 0.05*0.99) ≈ 1/6 ≈ 16% for 95% accuracy case.",co:"Meta",pos:"DS",freq:"High"}]},{day:8,week:2,cat:"sql",title:"SQL JOINs + Bidirectional Queries",topics:["INNER, LEFT, RIGHT, FULL OUTER JOIN","Bidirectional join: ON user_id=caller OR user_id=recipient (Meta video calls)","Self-joins for network/social queries","Left join to find missing records"],resources:["LeetCode SQL: #197, #584, #595 — leetcode.com/problemset/database","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[10,22],questions:[{q:"Write a SQL query to find callers who contacted more than 2 distinct people yesterday.",a:"SELECT caller, COUNT(DISTINCT recipient) as contacts FROM video_calls WHERE ds = DATE_SUB(CURDATE(),INTERVAL 1 DAY) GROUP BY caller HAVING COUNT(DISTINCT recipient) > 2;",co:"Meta",freq:"High"},{q:"What is the difference between INNER JOIN and LEFT JOIN? When would a row appear in LEFT JOIN but not INNER JOIN?",a:"INNER JOIN returns only rows where the join condition matches in BOTH tables. LEFT JOIN returns ALL rows from the left table plus matched rows from the right (NULLs where no match). A row appears in LEFT JOIN but not INNER JOIN when: the left table row has no matching row in the right table.",co:"Meta/All",freq:"High"},{q:"Write a query: for each Airbnb listing in the US, find the date of its very first booking.",a:"SELECT l.listing_id, MIN(b.date) AS first_booking FROM listings l JOIN bookings b ON l.listing_id = b.listing_id WHERE l.country = 'US' GROUP BY l.listing_id;",co:"Airbnb",freq:"High"},{q:"What is a self-join? Write an example query that finds pairs of users who share the same country.",a:"A self-join joins a table to itself. Example: SELECT a.user_id, b.user_id, a.country FROM users a JOIN users b ON a.country = b.country AND a.user_id < b.user_id; The a.user_id < b.user_id prevents duplicate pairs.",co:"Meta/All",freq:"High"}]},{day:9,week:2,cat:"sql",title:"Window Functions + CTEs",topics:["ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD","PARTITION BY + ORDER BY, running totals SUM OVER","WITH clause (CTEs) — preferred for readability","LAG() for day-over-day drops"],resources:["LeetCode SQL Medium: #177, #178, #180, #184 — leetcode.com/problemset/database","Mode Analytics Window Functions Tutorial — mode.com/sql-tutorial/sql-window-functions","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[22,35],questions:[{q:"Write a query to rank scores using DENSE_RANK so ties share the same rank with no gaps.",a:"SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS rank FROM scores;  — Unlike RANK(), DENSE_RANK skips no numbers after a tie.",co:"Meta/All",freq:"High"},{q:"Given an attendance table, use LAG() to find which grade level had the largest attendance drop between yesterday and today.",a:"SELECT grade_level, today - yesterday AS drop FROM (SELECT grade_level, date, COUNT(*) AS today, LAG(COUNT(*),1) OVER (PARTITION BY grade_level ORDER BY date) AS yesterday FROM attendance JOIN students USING(student_id) WHERE attendance='Present' GROUP BY grade_level, date) t WHERE date = CURDATE() ORDER BY drop DESC LIMIT 1;",co:"Meta",freq:"High"},{q:"Write a query using SUM() OVER to compute a running total of games_played per player ordered by date.",a:"SELECT player_id, event_date, SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM activity;",co:"Meta/All",freq:"Medium"},{q:"What is the difference between ROW_NUMBER, RANK, and DENSE_RANK? Give an example where they produce different results.",a:"Given scores [100,100,90]: ROW_NUMBER → 1,2,3 (always unique). RANK → 1,1,3 (skips 2). DENSE_RANK → 1,1,2 (no skip). Use ROW_NUMBER for deduplication, RANK for competition standings, DENSE_RANK when you don't want gaps.",co:"Meta/All",freq:"High"},{q:"Write a CTE to find the second highest salary from an Employee table.",a:"WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM Employee) SELECT MAX(salary) AS SecondHighestSalary FROM ranked WHERE rnk = 2;  — Handle NULL if fewer than 2 distinct salaries.",co:"Meta/All",freq:"High"},{q:"Write a LEAD() query to compute day-over-day revenue change for each product.",a:"SELECT product_id, date, revenue, revenue - LEAD(revenue,1) OVER (PARTITION BY product_id ORDER BY date DESC) AS rev_change FROM sales;  — LEAD looks forward; since we ORDER DESC, LEAD gives previous day.",co:"Meta/All",freq:"Medium"}]},{day:10,week:2,cat:"sql",title:"SQL Advanced: Multi-Level Aggregation",topics:["Nested aggregations: MAX() inside subquery → AVG() outside","Search table patterns: % users clicked Event, top-10 query-to-event rate","DATE_SUB, DATEDIFF, DATE_TRUNC for time filters","A/B test SQL: join assignment + events, compute per-group stats"],resources:["LeetCode SQL Medium: #185, #262, #534, #550 — leetcode.com/problemset/database","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[35,50],questions:[{q:"Spotify A/B test pattern: given ab_bucket(user_id, bucket, first_exposed_date) and streams(date, user_id, ms_played), write SQL to compute average stream time per bucket, only counting dates after each user's first exposure.",a:"SELECT bucket, AVG(ms_played) as avg_ms FROM ab_bucket ab LEFT JOIN streams s ON ab.user_id = s.user_id AND s.date >= ab.first_exposed_date GROUP BY bucket;  — Key: filter on date >= first_exposed_date to avoid pre-exposure data.",co:"Spotify",freq:"High"},{q:"Meta search pattern: what % of searches returned at least one Event result?",a:"SELECT AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as pct FROM (SELECT DISTINCT search_id FROM search_results WHERE result_type='event') t RIGHT JOIN searches s USING(search_id);  — Or: COUNT(DISTINCT search_id with event) / COUNT(DISTINCT total search_id).",co:"Meta",freq:"High"},{q:"Write a query to find users who made more than 10 searches in the last 7 days.",a:"SELECT COUNT(*) FROM (SELECT user_id FROM searches WHERE date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id) > 10) t;",co:"Meta",freq:"High"},{q:"Airbnb: given bookings(date, reservation_id, listing_id) and listings(user_id, listing_id, created_time, country), write queries: (1) total US reservations by date, (2) first-time booking per listing in US.",a:"(1) SELECT date, COUNT(*) FROM bookings b JOIN listings l USING(listing_id) WHERE l.country='US' GROUP BY date;  (2) SELECT listing_id, MIN(date) as first_booking FROM bookings b JOIN listings l USING(listing_id) WHERE l.country='US' GROUP BY listing_id;",co:"Airbnb",freq:"High"},{q:"Meta friend requests: what is the overall acceptance rate? (handle duplicates — a request accepted multiple times still counts as 1)",a:"SELECT ROUND(IFNULL((SELECT COUNT(*) FROM (SELECT DISTINCT requester_id, accepter_id FROM request_accepted) a) / (SELECT COUNT(*) FROM (SELECT DISTINCT sender_id, send_to_id FROM friend_request) b), 0), 2) AS accept_rate;",co:"Meta",freq:"High"},{q:"Write a SQL query to find the top 3 users who initialized the most video calls this month, including ties.",a:"SELECT caller, COUNT(call_id) as call_count, DENSE_RANK() OVER (ORDER BY COUNT(call_id) DESC) as rnk FROM video_calls WHERE DATE_TRUNC('month', ds) = DATE_TRUNC('month', CURRENT_DATE) GROUP BY caller QUALIFY rnk <= 3;",co:"Meta",freq:"Medium"}]},{day:11,week:2,cat:"python",title:"Python for Stats + ML: scipy, statsmodels, sklearn",topics:["scipy.stats: ttest_ind, mannwhitneyu, chi2_contingency, proportions_ztest","Bootstrap CI: resample with replacement B=1000 times, compute statistic each time","statsmodels OLS: sm.OLS(y, sm.add_constant(X)).fit() — interpret coef, p-values, R²","sklearn pipeline: LogisticRegression, train_test_split, cross_val_score, classification_report","End-to-end A/B analysis in Python: merge → flag converted → ttest_ind → report p-value + effect size"],resources:["scipy.stats docs — docs.scipy.org/doc/scipy/reference/stats.html","statsmodels: Getting Started — statsmodels.org/stable/gettingstarted.html","scikit-learn User Guide: supervised learning — scikit-learn.org/stable/supervised_learning.html","Real Python: Python Statistics Fundamentals — realpython.com/python-statistics"],qKey:"pythonQ",qs:[4,12],questions:[{q:"Given two DataFrames — visits(id_visitor, timestamp, country, assign) and bookings(id_visitor, id_booking, timestamp) — write a full A/B analysis in Python: compute conversion rate per group and test for statistical significance.",a:"merged = visits.merge(bookings[['id_visitor']], on='id_visitor', how='left'); merged['converted'] = merged['id_visitor'].isin(bookings['id_visitor']).astype(int); ctrl = merged[merged['assign']==0]['converted']; treat = merged[merged['assign']==1]['converted']; from scipy import stats; t, p = stats.ttest_ind(treat, ctrl); print(f'Control: {ctrl.mean():.3f}, Treatment: {treat.mean():.3f}, p={p:.4f}')",co:"Airbnb",freq:"High"},{q:"When would you use scipy.stats.mannwhitneyu instead of ttest_ind? Write the call.",a:"Use Mann-Whitney U when: data is heavily non-normal (e.g., session duration, revenue — very right-skewed), small sample size, or metric is ordinal. Call: stats.mannwhitneyu(treat, ctrl, alternative='two-sided'). It tests whether one group's values tend to rank higher than the other's — does NOT assume normality.",co:"Meta/All",freq:"High"},{q:"Write a bootstrap function to compute a 95% confidence interval for the median of a sample.",a:`import numpy as np
def bootstrap_ci(data, B=1000, ci=0.95):
    stats_arr = [np.median(np.random.choice(data, size=len(data), replace=True)) for _ in range(B)]
    lo = (1 - ci) / 2
    return np.percentile(stats_arr, [lo*100, (1-lo)*100])
# Usage: bootstrap_ci(df['revenue'].values)`,co:"Meta/All",freq:"High"},{q:"Fit a statsmodels OLS regression predicting booking_rate from n_photos and avg_price. Interpret the output.",a:`import statsmodels.api as sm
X = sm.add_constant(df[['n_photos','avg_price']])
model = sm.OLS(df['booking_rate'], X).fit()
print(model.summary())
# Interpret: coef on n_photos = expected change in booking_rate for 1 more photo, holding avg_price fixed. p<0.05 = statistically significant. R² = fraction of variance explained.`,co:"Airbnb/All",freq:"High"},{q:"Build an end-to-end sklearn logistic regression pipeline to predict churn. Include train/test split, fit, and evaluation.",a:`from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LogisticRegression(class_weight='balanced', max_iter=500)
model.fit(X_train, y_train)
print(classification_report(y_test, model.predict(X_test)))
# class_weight='balanced' handles class imbalance automatically`,co:"Netflix/All",freq:"High"},{q:"A product team asks: did our new feature change the distribution of user_type across groups? Write the chi-square test in Python.",a:`from scipy.stats import chi2_contingency
contingency = pd.crosstab(df['group'], df['user_type'])
chi2, p, dof, expected = chi2_contingency(contingency)
print(f'chi2={chi2:.2f}, p={p:.4f}, dof={dof}')
# If p < 0.05 → reject H0 that group assignment and user_type are independent → possible randomization imbalance.`,co:"Meta/All",freq:"Medium"}]},{day:12,week:2,cat:"python",title:"Pandas: SQL Rewrites + A/B Analysis",topics:["merge() = JOIN, groupby() + agg(), pivot_table()","np.where() for conditional columns (Spotify stream_time by platform)","scipy.stats.ttest_ind from CSV (Airbnb DS Inference format)","Rewrite window functions: groupby().transform(), cumsum()"],resources:["SQL-to-Pandas translation — medium.com/jbennetcodes/how-to-rewrite-your-sql-queries-in-pandas","Pandas official 10 min tutorial — pandas.pydata.org/docs/user_guide/10min.html"],qKey:"pythonQ",qs:[0,4],questions:[{q:"Spotify pattern: given a streams DataFrame with columns [date, user_id, platform, streams], create a new column 'adj_streams' that halves stream count for desktop users only.",a:"df['adj_streams'] = np.where(df['platform'] == 'desktop', df['streams'] / 2, df['streams'])",co:"Spotify",freq:"High"},{q:"Generalize the above: write a function that adjusts stream counts by a given multiplier for each platform, passed as a dict.",a:"def adjust_streams(df, adjustments): df = df.copy(); df['adj_streams'] = df.apply(lambda r: r['streams'] * adjustments.get(r['platform'], 1.0), axis=1); return df",co:"Spotify",freq:"High"},{q:"Given a visitor DataFrame and booking DataFrame (Airbnb DS Inference format), join them, compute conversion rate per assignment group (0=control, 1=treatment), and run a t-test.",a:"merged = visits.merge(bookings[['id_visitor','id_booking']], on='id_visitor', how='left'); merged['converted'] = merged['id_booking'].notna().astype(int); from scipy import stats; c=merged[merged.assign==0]['converted']; t=merged[merged.assign==1]['converted']; print(stats.ttest_ind(t, c))",co:"Airbnb",freq:"High"},{q:"Rewrite this SQL in Pandas: SELECT user_id, AVG(ms_played) FROM streams WHERE date >= '2024-01-01' GROUP BY user_id HAVING AVG(ms_played) > 1000",a:"df[df['date'] >= '2024-01-01'].groupby('user_id')['ms_played'].mean().reset_index().query('ms_played > 1000')",co:"Spotify",freq:"High"}]},{day:13,week:2,cat:"python",title:"Python Coding: Data Structures",topics:["Hash maps for frequency counting, two-pointer technique","String manipulation (Netflix phone screen: split + transform list of strings)","Custom class design: iterator class for array-of-arrays (Airbnb)","Expected value: N buttons M people — compute E[unique floors]"],resources:["LeetCode Python: #1, #3, #49, #125, #344 — leetcode.com/problemset","LeetCode #341 Flatten Nested Iterator (Airbnb verbatim) — leetcode.com/problems/flatten-nested-list-iterator"],qKey:"leetcodeQ",qs:[0,8],questions:[{q:"Implement a function that takes a list of strings and returns the most frequent character overall.",a:`from collections import Counter
def most_freq(strings): c = Counter(''.join(strings)); return c.most_common(1)[0][0]`,co:"Netflix",freq:"High"},{q:"Write a function to find the second largest number in a list without sorting.",a:`def second_largest(nums): first = second = float('-inf')
  for n in nums:
    if n > first: second, first = first, n
    elif n > second and n != first: second = n
  return second if second != float('-inf') else None`,co:"Airbnb",freq:"High"},{q:"Given N buttons in an elevator and M people each pressing one button at random, what is the expected number of distinct buttons lit?",a:"E[lit buttons] = N * (1 - (1 - 1/N)^M) using linearity of expectation. For each button, P(at least one person presses it) = 1 - P(no one presses it) = 1 - ((N-1)/N)^M.",co:"Airbnb",freq:"High"}]},{day:14,week:2,cat:"review",title:"📝 Week 2 Review",topics:["✍️ Spend 60–90 minutes writing:","→ 1-page summary: SQL patterns mastered this week, Python key functions","→ Derivations from memory: write 3 SQL queries cold (Meta video call %, Airbnb conversion, Spotify AB test)","→ Top 10 insights: what patterns do all SQL questions share? What trips you up?"],resources:["Re-do your 3 weakest SQL questions from memory — no notes","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[0,8],questions:[{q:"Tables: searches(date, search_id, user_id, age_group, search_query) and search_results(date, search_id, result_id, result_type, clicked). Q1: How many users searched more than 10 times in the last 7 days? Q2: What % of users clicked on an Event result?",a:"Q1: SELECT COUNT(*) FROM (SELECT user_id, COUNT(search_id) FROM searches WHERE date>=DATE_SUB(CURDATE(),INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id)>10). Q2: SELECT AVG(clicked) FROM (SELECT user_id, MAX(CASE WHEN result_type='event' AND clicked=TRUE THEN 1 ELSE 0 END) FROM search_result",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Using searches + search_results tables: What % of searches returned multiple result types? Top 10 search queries most likely to return an Event result?",a:"Multi-type %: SELECT AVG(CASE WHEN cnt>1 THEN 1 ELSE 0 END) FROM (SELECT search_id, COUNT(DISTINCT result_type) as cnt FROM search_results GROUP BY search_id). Top 10: SELECT search_query, AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as event_rate FROM searches JOIN search_results USING(sear",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, age_bucket, country, dau_flag, ds). Q1: List callers who contacted more than 2 distinct people yesterday. Q2: Time spent per DAU in the US yesterday.",a:"Q1: SELECT caller, COUNT(DISTINCT recipient) FROM video_calls WHERE ds=yesterday GROUP BY caller HAVING COUNT(DISTINCT recipient)>2. Q2: JOIN dim_all_users ON user_id=caller OR user_id=recipient, then SUM(duration)/COUNT(*) per DAU. Key: bidirectional join (caller OR recipient).",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Using video_calls + dim_all_users: What % of French DAU were on a video call yesterday?",a:"SELECT AVG(call_flag) FROM (SELECT u.user_id, CASE WHEN COUNT(c.call_id)>0 THEN 1 ELSE 0 END as call_flag FROM (SELECT user_id FROM dim_all_users WHERE country='fr' AND dau_flag=1 AND ds=yesterday) u LEFT JOIN (SELECT caller,recipient,call_id FROM video_calls WHERE ds=yesterday) c ON u.user_id=c.cal",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action: request/accept/reject). Q1: How many friend requests received a response on Aug 1st 2021? Q2: Overall acceptance rate for requests sent by user 123?",a:"Q1: SELECT COUNT(DISTINCT request_id) FROM friend_requests WHERE action<>'request' AND ds='2021-08-01'. Q2: SELECT AVG(accepted) FROM (SELECT request_id, MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) as accepted FROM friend_requests WHERE actor_id=123 GROUP BY request_id).",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table user_actions(ds, user_id, post_id, action: view/like/comment/reaction/report, extra). Table reviewer_removals(ds, reviewer_id, post_id). Q1: What % of daily content users view is spam? Q2: How many posts were reported as spam yesterday?",a:"Q1: SELECT SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END)/SUM(CASE WHEN action='view' THEN 1 ELSE 0 END) FROM user_actions WHERE ds=yesterday. Q2: SELECT COUNT(DISTINCT post_id) FROM user_actions WHERE action='report' AND extra='SPAM' AND ds=yesterday.",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table: attendance_events(date, student_id, attendance) and all_students(student_id, school_id, grade_level, date_of_birth). Q1: What % of students attended school on their birthday? Q2: Which grade level had the largest attendance drop between yesterday and today?",a:"Q1: LEFT JOIN on student_id AND date=date_of_birth, then AVG(attendance). Q2: Use LEAD() OVER (PARTITION BY grade_level ORDER BY date DESC) to get yesterday's count, compute diff, ORDER BY diff DESC LIMIT 1.",co:"Meta",pos:"DS/DA",freq:"Medium"}]},{day:15,week:3,cat:"ml",title:"Linear Regression + Logistic Regression",topics:["OLS derivation: minimize Σ(y−ŷ)² → β = (XᵀX)⁻¹Xᵀy","Gradient descent: update rule, learning rate, convergence criteria","Logistic: sigmoid function, log-loss, decision boundary","Ridge (L2) = weight shrinkage, Lasso (L1) = feature selection — why each works geometrically"],resources:["Andrew Ng ML Specialization Week 1-3 — coursera.org/specializations/machine-learning-introduction","StatQuest: Linear Regression — youtube.com/watch?v=nk2CQITm_eo","StatQuest: Logistic Regression — youtube.com/watch?v=yIYKR4sgzI8"],qKey:"mlAlgoQ",qs:[0,7],questions:[{q:"What are the four assumptions of linear regression (LINE acronym)?",a:"Linearity: E[Y] is linear in X. Independence: errors are independent (no autocorrelation). Normality: errors are normally distributed. Equality of variance (Homoscedasticity): constant error variance across X values. Violations: use robust SE, log transforms, weighted regression.",co:"Meta/All",freq:"High"},{q:"What is the difference between R², adjusted R², and p-value in regression?",a:"R²: proportion of variance explained by model (0-1, higher=better). Adjusted R²: penalizes for adding useless predictors — use for model comparison. p-value: significance of each coefficient — does it differ from zero? Low p ≠ high practical importance. Use all three together.",co:"Meta/All",freq:"High"},{q:"What is regularization? Explain Ridge (L2) vs. Lasso (L1).",a:"Regularization adds a penalty to the loss function to prevent overfitting. Ridge (L2): penalizes sum of squared weights → shrinks all weights toward zero, keeps all features. Lasso (L1): penalizes sum of absolute weights → performs feature selection, sets some weights exactly to zero. Elastic Net: combines both.",co:"Netflix",freq:"High"},{q:"What is the bias-variance tradeoff?",a:"Total error = Bias² + Variance + Irreducible noise. Bias: error from wrong model assumptions (underfitting). Variance: sensitivity to training data fluctuations (overfitting). Tradeoff: complex models reduce bias but increase variance. Goal: find the sweet spot. Regularization, more data, and ensembles help balance.",co:"Meta/All",freq:"High"}]},{day:16,week:3,cat:"ml",title:"Decision Trees + Random Forest",topics:["Gini impurity vs entropy — formulas, when each preferred","Splitting criterion, max depth, pruning — bias-variance in trees","Bagging: why reducing variance works, out-of-bag error","Feature importance: mean decrease impurity vs permutation importance"],resources:["StatQuest: Decision Trees — youtube.com/watch?v=7VeUPuFGJHk","StatQuest: Random Forests — youtube.com/watch?v=J4Wdy0Wc_xQ","ESL Ch. 9-10 (free PDF) — hastie.su.domains/ElemStatLearn"],qKey:"mlAlgoQ",qs:[7,14],questions:[{q:"Explain Gini impurity vs. information gain (entropy) in decision trees. Which do you prefer?",a:"Gini impurity = 1 - Σpᵢ² (probability of misclassifying a random element). Entropy = -Σpᵢ·log(pᵢ). Information gain = entropy before split - weighted entropy after split. In practice, both produce similar trees. Gini is faster (no log computation). Entropy can produce more balanced trees. sklearn uses Gini by default.",co:"Netflix",freq:"High"},{q:"What is overfitting? How do you detect and combat it?",a:"Overfitting: model performs well on training data but poorly on unseen data (memorized noise). Detect: large gap between train and validation error. Combat: cross-validation, regularization (L1/L2), dropout, early stopping, simpler model, more training data, feature selection.",co:"Meta/All",freq:"High"},{q:"What is pruning in decision trees? Why is it done?",a:"Pruning reduces tree size by removing branches that provide little predictive power (low information gain). Pre-pruning: stop splitting early (max_depth, min_samples_leaf). Post-pruning: grow full tree then remove nodes based on validation error. Prevents overfitting by reducing model complexity.",co:"Meta/All",freq:"High"},{q:"What is out-of-bag (OOB) error in Random Forest and why is it useful?",a:"Each tree is trained on a bootstrap sample (~63% of data). The remaining ~37% (OOB samples) are used to estimate error for that tree without a separate validation set. Average OOB error across all trees gives an unbiased estimate of generalization error. Useful when you want cross-validation-like evaluation without extra computation.",co:"Meta/All",freq:"High"},{q:"How does Random Forest handle feature importance? What are the two main methods?",a:"1) Mean Decrease Impurity (MDI): average decrease in Gini impurity from splits on a feature across all trees. Fast but biased toward high-cardinality features. 2) Permutation importance: randomly shuffle a feature, measure increase in error. More reliable, unbiased, but slower. Always prefer permutation importance for feature selection decisions.",co:"Meta/All",freq:"High"}]},{day:17,week:3,cat:"ml",title:"Gradient Boosting + XGBoost",topics:["Boosting: train sequentially on residuals","Gradient boosting: loss function gradient, shrinkage (learning rate)","XGBoost: regularized objective, second-order approximation, column subsampling","Hyperparameters: n_estimators, max_depth, learning_rate, min_child_weight, subsample"],resources:["StatQuest: Gradient Boosting Parts 1-4 — youtube.com/watch?v=3CC4N4z3GJc","XGBoost documentation — xgboost.readthedocs.io","XGBoost original paper — arxiv.org/abs/1603.02754"],qKey:"mlAlgoQ",qs:[14,22],questions:[{q:"What is the difference between bagging and boosting?",a:"Bagging (e.g., Random Forest): trains B models on bootstrap samples independently → averages predictions. Reduces variance. Trees are uncorrelated due to feature subsampling. Boosting (e.g., XGBoost): trains sequentially — each model focuses on errors of the previous. Reduces bias. Risk: can overfit if too many rounds.",co:"Meta/All",freq:"High"},{q:"What is the difference between Random Forest and XGBoost? When would you choose each?",a:"RF: parallel bagging of deep trees → reduces variance. Each tree independent. XGBoost: sequential boosting on residuals → reduces bias. RF: faster training, less tuning, better on noisy data. XGBoost: usually better accuracy, but more tuning required, can overfit. Rule of thumb: start with RF for baseline, switch to XGBoost when you need more performance.",co:"Expedia",freq:"High"},{q:"List the key hyperparameters of XGBoost and what each controls.",a:"n_estimators: number of trees. learning_rate (eta): shrinkage on each tree's contribution (lower=more robust). max_depth: tree depth (higher=more complex). subsample: fraction of rows sampled per tree (prevents overfitting). colsample_bytree: fraction of features per tree. min_child_weight: minimum sum of instance weights in a leaf (regularization). lambda/alpha: L2/L1 regularization on weights.",co:"Meta/All",freq:"High"},{q:"What does the loss function gradient mean in gradient boosting? Walk through one boosting iteration.",a:"Iteration t: compute residuals = −∂L/∂ŷ (negative gradient of loss w.r.t. current predictions). Train tree_t to predict these residuals. Update: ŷ = ŷ + η·tree_t(x). For MSE loss: residuals = y − ŷ (actual residuals). For log-loss: residuals = y − sigmoid(ŷ). The tree learns to correct the current model's errors.",co:"Meta/All",freq:"High"},{q:"How would you handle class imbalance (e.g., 1% positive rate) in XGBoost?",a:"Set scale_pos_weight = (# negatives) / (# positives) to up-weight positives. Alternatively: use eval_metric='auc' or 'aucpr' (better for imbalanced). Adjust decision threshold after training. Or: downsample negatives / upsample positives. XGBoost's scale_pos_weight is usually the easiest first step.",co:"Netflix",freq:"High"}]},{day:18,week:3,cat:"ml",title:"SVM + Clustering + Dimensionality Reduction",topics:["SVM: max-margin hyperplane, kernel trick (RBF, polynomial), support vectors","K-Means: centroid init (k-means++), elbow method, limitations (non-spherical)","DBSCAN: density-based, no K needed, handles noise","PCA: eigendecomposition, variance explained — vs t-SNE (non-linear)"],resources:["StatQuest: PCA Step-by-Step — youtube.com/watch?v=FgakZw6K1QQ","StatQuest: K-Means Clustering — youtube.com/watch?v=4b5d3muPQmA","StatQuest: SVM — youtube.com/watch?v=efR1C6CvhmE"],qKey:"recSysQ",qs:[0,7],questions:[{q:"What is cross-validation? Why is k-fold better than a single train/test split?",a:"K-fold CV: split data into k folds, train on k-1 and evaluate on the remaining fold, repeat k times, average scores. Better than single split because: uses all data for both training and testing, gives lower-variance estimate of generalization error, detects overfitting more reliably.",co:"Meta/All",freq:"High"},{q:"Explain PCA. What are eigenvectors and eigenvalues in this context?",a:"PCA finds orthogonal directions (principal components) that explain maximum variance. Computed via eigendecomposition of the covariance matrix. Eigenvectors = directions (principal components). Eigenvalues = variance explained along each direction. You keep top k components to reduce dimensionality while preserving most variance.",co:"Spotify",freq:"High"},{q:"Explain the SVM kernel trick. Why is it needed?",a:"SVMs find a maximum-margin hyperplane in feature space. For non-linearly separable data, map features to higher-dimensional space where they are separable — but computing this explicitly is expensive. The kernel trick: compute K(x_i, x_j) = φ(x_i)·φ(x_j) directly without computing φ(x) explicitly. Common kernels: linear, polynomial, RBF (Gaussian). RBF: K(x_i,x_j) = exp(−γ‖x_i−x_j‖²).",co:"Disney",freq:"High"},{q:"What are the limitations of K-Means? When would you use DBSCAN instead?",a:"K-Means limitations: must specify K in advance; assumes spherical clusters of similar size; sensitive to outliers; can get stuck in local optima; fails on non-convex cluster shapes. Use DBSCAN when: clusters have irregular shapes, number of clusters unknown, data has noise/outliers (DBSCAN labels them as noise), clusters have varying density regions.",co:"Spotify",freq:"High"},{q:"Explain PCA. What does it mean for a principal component to explain 80% of variance?",a:"PCA finds orthogonal directions (eigenvectors of covariance matrix) along which variance is maximized. First PC = direction of max variance; second PC = orthogonal direction of next-max variance, etc. Eigenvalue = variance along that PC. '80% explained variance': first k PCs capture 80% of total variance. Means you can represent data in k dimensions with only 20% information loss.",co:"Spotify",freq:"High"}]},{day:19,week:3,cat:"ml",title:"Model Evaluation + ML System Design",topics:["Precision, recall, F1, AUC-ROC — when to use each and why they differ","Imbalanced classes: SMOTE, class weights, threshold tuning","End-to-end system: framing → features → training → evaluation → deploy → monitor","Real designs: Airbnb family-friendly listing ranker, Spotify new artist rec, fraud detection"],resources:["Chip Huyen: Designing ML Systems Ch. 5-8 — amazon.com/dp/1098107969","Airbnb Tech Blog: ML Platform — medium.com/airbnb-engineering","Google Rules of ML — developers.google.com/machine-learning/guides/rules-of-ml"],qKey:"mlDesignQ",qs:[0,13],questions:[{q:"What does AUC-ROC measure? When would you prefer it over accuracy?",a:"AUC-ROC: area under the ROC curve (True Positive Rate vs. False Positive Rate). AUC=1 is perfect; AUC=0.5 is random. Use AUC when: classes are imbalanced (accuracy paradox), threshold needs to be tuned, or you want to compare overall classifier performance independent of threshold. Accuracy only makes sense for balanced classes.",co:"Netflix",freq:"High"},{q:"Precision = TP/(TP+FP). Recall = TP/(TP+FN). When do you maximize each?",a:"Maximize precision when false positives are costly: spam detection (don't block legit email), recommending products (bad recs hurt trust). Maximize recall when false negatives are costly: cancer screening (don't miss sick patients), fraud detection (don't let fraud through). F1 score balances both.",co:"Meta/All",freq:"High"},{q:"When is accuracy a misleading metric? What should you use instead?",a:"Accuracy misleads when classes are imbalanced. Example: 99% negative data → model predicting always-negative gets 99% accuracy but 0% recall on positives. Use instead: AUC-ROC (threshold-independent), Precision-Recall curve (better for severe imbalance), F1-score (balance precision/recall), or business-specific cost-weighted metric.",co:"Netflix",freq:"High"},{q:"How do you handle imbalanced datasets in a classification problem?",a:"1) Resampling: oversample minority (SMOTE — synthetic examples) or undersample majority. 2) Class weights: set class_weight='balanced' in sklearn — upweights minority class in loss. 3) Threshold tuning: lower decision threshold to improve recall at cost of precision. 4) Use appropriate metric: AUC-PR instead of AUC-ROC. 5) Algorithm-level: XGBoost's scale_pos_weight.",co:"Meta/All",freq:"High"},{q:"Walk through designing an end-to-end ML system for Airbnb's family-friendly listing ranker.",a:"Problem: rank listings by P(family-friendly). Labels: user tags, host descriptions, past bookings by families (heuristic). Features: listing description text (NLP), amenities (high chair, crib), review mentions of 'family'/'kids', property type, location. Model: gradient boosting or two-tower neural net. Evaluation: offline AUC + online A/B test measuring family bookings. Monitoring: feature drift, label distribution shift, click-through on family filter.",co:"Airbnb",freq:"High"},{q:"What is data leakage? Give an example and explain how to prevent it.",a:"Leakage: information from the future or from the test set that wouldn't be available at prediction time leaks into training. Example: including 'time_to_resolution' as a feature when predicting if a ticket will be escalated — this is only known after resolution. Prevention: strict temporal cutoffs, never use features derived from the target, fit preprocessing (scaling, imputation) only on training data.",co:"Meta/All",freq:"High"}]},{day:20,week:3,cat:"dl",title:"Deep Learning + Transformers",topics:["Backprop: chain rule through layers — derive gradient for one dense layer","Activation functions: ReLU, sigmoid, GELU — vanishing gradient, dead neuron","Self-attention: Q·Kᵀ/√d attention scores, value weighting, multi-head","BERT (encoder-only) vs GPT (decoder-only) — when to fine-tune each"],resources:["Andrej Karpathy: Neural Networks Zero to Hero — youtube.com/watch?v=VMj-3S1tku0","The Illustrated Transformer (Jay Alammar) — jalammar.github.io/illustrated-transformer","Attention Is All You Need paper — arxiv.org/abs/1706.03762"],qKey:"mlAlgoQ",qs:[0,10],questions:[{q:"Explain backpropagation. How does the chain rule apply to compute gradients through layers?",a:"Backprop applies chain rule: dL/dW = dL/dA · dA/dZ · dZ/dW. Forward pass computes and caches activations. Backward pass propagates error gradient from output to input, computing dL/dW for each layer. Key: gradient flows through activation function derivative (e.g., ReLU': 1 if x>0 else 0).",co:"Meta/All",freq:"High"},{q:"What is the vanishing gradient problem? Which architectures suffer from it and how is it solved?",a:"In deep networks, gradients shrink exponentially as they backprop through many sigmoid/tanh layers (derivative ≤ 0.25). Network learns very slowly in early layers. Solutions: ReLU activation (derivative = 1 for x>0), batch normalization, skip connections (ResNet), LSTM gates (for RNNs), gradient clipping.",co:"Meta/All",freq:"High"},{q:"Explain self-attention: what are Q, K, V? Write the formula.",a:"Q (query), K (key), V (value) are linear projections of the input. Attention(Q,K,V) = softmax(QKᵀ / √d_k) · V. The QKᵀ dot product computes similarity between each token pair; √d_k prevents vanishingly small gradients; softmax normalizes; multiply by V weights the values by attention scores.",co:"Meta/All",freq:"High"},{q:"What is the difference between BERT and GPT architecturally? When would you fine-tune each?",a:"BERT: encoder-only (bidirectional attention) → sees full context. Best for: classification, NER, QA (understanding tasks). GPT: decoder-only (causal/unidirectional attention) → predicts next token. Best for: generation, completion, summarization. Fine-tune BERT for classification. Fine-tune GPT for text generation tasks.",co:"Netflix",freq:"High"},{q:"Spotify MLE question: assuming you can train CNN and FC layers separately, which would you run on GPU and which on CPU? Why?",a:"CNN on GPU: convolutions are massively parallelizable — same kernel applied across spatial locations simultaneously. FC on CPU: fewer parallel operations, smaller matrices, sometimes faster on CPU due to overhead of GPU memory transfers. In practice both go on GPU, but Conv benefits dramatically more from GPU parallelism.",co:"Spotify",freq:"High"}]},{day:21,week:3,cat:"review",title:"📝 Week 3 Review",topics:["✍️ Spend 60–90 minutes writing:","→ 1-page model selection decision tree: problem type → complexity → interpretability → scale","→ Derivations from memory: OLS β formula, logistic sigmoid, Gini impurity, boosting residual update, attention Q·Kᵀ/√d","→ Top 10 insights: 3 questions always asked about XGBoost? RF vs XGBoost — when each wins?"],resources:["LeetCode #94, #102, #200, #322 — leetcode.com/problemset","Your notes from Days 15-20 — review derivations cold"],qKey:"mlDesignQ",qs:[0,13],questions:[{q:"What are the four assumptions of linear regression (LINE acronym)?",a:"Linearity: E[Y] is linear in X. Independence: errors are independent (no autocorrelation). Normality: errors are normally distributed. Equality of variance (Homoscedasticity): constant error variance across X values. Violations: use robust SE, log transforms, weighted regression.",co:"Meta/All",freq:"High"},{q:"What is the difference between R², adjusted R², and p-value in regression?",a:"R²: proportion of variance explained by model (0-1, higher=better). Adjusted R²: penalizes for adding useless predictors — use for model comparison. p-value: significance of each coefficient — does it differ from zero? Low p ≠ high practical importance. Use all three together.",co:"Meta/All",freq:"High"},{q:"Explain Gini impurity vs. information gain (entropy) in decision trees. Which do you prefer?",a:"Gini impurity = 1 - Σpᵢ² (probability of misclassifying a random element). Entropy = -Σpᵢ·log(pᵢ). Information gain = entropy before split - weighted entropy after split. In practice, both produce similar trees. Gini is faster (no log computation). Entropy can produce more balanced trees. sklearn uses Gini by default.",co:"Netflix",freq:"High"},{q:"What is the difference between bagging and boosting?",a:"Bagging (e.g., Random Forest): trains B models on bootstrap samples independently → averages predictions. Reduces variance. Trees are uncorrelated due to feature subsampling. Boosting (e.g., XGBoost): trains sequentially — each model focuses on errors of the previous. Reduces bias. Risk: can overfit if too many rounds.",co:"Meta/All",freq:"High"},{q:"What does AUC-ROC measure? When would you prefer it over accuracy?",a:"AUC-ROC: area under the ROC curve (True Positive Rate vs. False Positive Rate). AUC=1 is perfect; AUC=0.5 is random. Use AUC when: classes are imbalanced (accuracy paradox), threshold needs to be tuned, or you want to compare overall classifier performance independent of threshold. Accuracy only makes sense for balanced classes.",co:"Netflix",freq:"High"},{q:"Precision = TP/(TP+FP). Recall = TP/(TP+FN). When do you maximize each?",a:"Maximize precision when false positives are costly: spam detection (don't block legit email), recommending products (bad recs hurt trust). Maximize recall when false negatives are costly: cancer screening (don't miss sick patients), fraud detection (don't let fraud through). F1 score balances both.",co:"Meta/All",freq:"High"},{q:"What is overfitting? How do you detect and combat it?",a:"Overfitting: model performs well on training data but poorly on unseen data (memorized noise). Detect: large gap between train and validation error. Combat: cross-validation, regularization (L1/L2), dropout, early stopping, simpler model, more training data, feature selection.",co:"Meta/All",freq:"High"},{q:"What is cross-validation? Why is k-fold better than a single train/test split?",a:"K-fold CV: split data into k folds, train on k-1 and evaluate on the remaining fold, repeat k times, average scores. Better than single split because: uses all data for both training and testing, gives lower-variance estimate of generalization error, detects overfitting more reliably.",co:"Meta/All",freq:"High"},{q:"Explain PCA. What are eigenvectors and eigenvalues in this context?",a:"PCA finds orthogonal directions (principal components) that explain maximum variance. Computed via eigendecomposition of the covariance matrix. Eigenvectors = directions (principal components). Eigenvalues = variance explained along each direction. You keep top k components to reduce dimensionality while preserving most variance.",co:"Spotify",freq:"High"}]},{day:22,week:4,cat:"abtest",title:"A/B Testing: Design Framework",topics:["Hypothesis setup, randomization unit (user vs session vs listing vs geo)","Primary metrics, guardrail metrics, tracking metrics","Novelty effect, selection bias, survivorship bias","Full design: Airbnb WiFi filter / Meta Events upranking"],resources:["Udacity A/B Testing Course (free) — udacity.com/course/ab-testing--ud257","Trustworthy Online Controlled Experiments — amazon.com/dp/1108724264"],qKey:"abtestQ",qs:[0,12],questions:[{q:"Design an A/B test for adding a 'Work From Home' filter on Airbnb's search page. Cover: hypothesis, randomization unit, metrics, duration, network effects, launch decision.",a:"H0: filter has no effect on booking rate. Unit: user-level (not session — same user should always see same experience). Metrics: primary=booking rate, guardrail=host satisfaction, secondary=filter usage rate. Duration: 2+ weeks (capture day-of-week effects, avoid novelty effect). Network effect: a listing seen by treatment user may be booked away from control user → consider geo or listing-level randomization. Decision: stat + practical significance on primary metric, no significant guardrail degradation.",co:"Airbnb",freq:"High"},{q:"Sample size formula: derive n for a two-proportion z-test. What inputs do you need?",a:"n = (z_α/2 + z_β)² × 2p̄(1−p̄) / δ² where p̄ = (p1+p2)/2, δ = |p1−p2| (MDE). Inputs: α (significance, usually 0.05), β (1−power, usually 0.2), baseline conversion rate p1, minimum detectable effect δ. At α=0.05, power=0.8: (1.96+0.84)² = 7.84.",co:"Meta/All",freq:"High"},{q:"What is CUPED? How does it reduce variance and what are its assumptions?",a:"CUPED (Controlled-experiment Using Pre-Experiment Data): subtract a covariate adjustment from the metric: Y_adj = Y − θ·X_pre where θ = Cov(Y,X)/Var(X). Reduces variance proportional to correlation between pre- and post-experiment metric (Var(Y_adj) = Var(Y)·(1−ρ²)). Assumption: covariate X is pre-experiment and unaffected by treatment.",co:"Netflix",freq:"High"},{q:"Design an A/B test for adding a new 'Work From Home' filter on Airbnb's search page. Cover: hypothesis, randomization unit, metrics, sample size, duration, network effects, and how to make the launch decision.",a:"H0: filter doesn't change booking rate. Unit: user-level (not session). Metrics: primary=booking rate, secondary=search usage, guardrail=host satisfaction. Network effect: listings seen by T may get booked by C users - use geo randomization or switchback. Duration: 2+ weeks. Decision: check both sta",co:"Meta",pos:"DS",freq:"High"},{q:"Given treatment avg=45% and control avg=40%, write the full z-test process. Then explain what sample size formula you'd use and why.",a:"z = (p1-p2)/sqrt(p_pooled*(1-p_pooled)*(1/n1+1/n2)). p_pooled=(x1+x2)/(n1+n2). Compare |z|>z_alpha/2. Sample size: n = 2*(z_alpha/2+z_beta)^2 * p*(1-p) / delta^2 where delta=|p1-p2|.",co:"Meta",pos:"DS",freq:"High"},{q:"You ran an A/B test and p<0.05. The treatment has higher engagement but lower DAU. Should you launch? How do you reconcile conflicting metrics?",a:"Don't launch automatically. 1) Check practical significance (effect size). 2) Is DAU drop statistically significant? 3) Which metric matters more for long-term goals? 4) Segment: which users drive the DAU drop? 5) If tradeoff persists, escalate to leadership with both scenarios modeled.",co:"Meta",pos:"DS",freq:"High"}]},{day:23,week:4,cat:"abtest",title:"A/B Testing: Analysis + Pitfalls",topics:["Two-sample z-test for proportions — write formula, walk through","Simpson's paradox in A/B results — how to catch it","Multiple testing (Bonferroni, FDR), peeking problem","Network effects, SUTVA violation, cluster randomization"],resources:["Trustworthy Online Controlled Experiments Ch. 4-7 — amazon.com/dp/1108724264","Netflix Tech Blog: CUPED — netflixtechblog.com"],qKey:"abtestQ",qs:[12,26],questions:[{q:"Your A/B test shows engagement up +8% (p<0.01) but DAU down −2% (p=0.03). Should you launch?",a:"Don't auto-launch. Steps: 1) Check practical significance of both — is −2% DAU materially bad for the business? 2) Segment: which users drive the DAU drop (new vs returning, platform)? 3) Is engagement gain durable or novelty effect? 4) Compute long-term LTV impact: does higher engagement compensate for lower DAU? 5) Escalate: bring both metrics to leadership with modeled scenarios. Never launch with a statistically significant guardrail violation without explicit sign-off.",co:"Meta",freq:"High"},{q:"What is Simpson's Paradox in A/B testing? Give a concrete example and explain how to catch it.",a:"A trend that appears in subgroups reverses when groups are combined — usually caused by different traffic mix between control and treatment. Example: treatment has higher overall conversion but lower conversion in every platform segment — because treatment was shown to more mobile users (lower baseline conversion). Catch it: always segment results by key dimensions (platform, country, user type). If subgroup trends disagree with overall trend, Simpson's paradox is likely.",co:"Meta/All",freq:"High"},{q:"What is the network effect problem in A/B testing? Give an Airbnb example and name two mitigation strategies.",a:"SUTVA violation: treatment of one unit affects outcomes for another. Airbnb example: a listing seen by a treatment user gets booked, so a control user can no longer book it — treatment artificially looks better. Mitigations: (1) Geo-based randomization — assign whole markets/cities to treatment or control. (2) Listing-level randomization — randomize at the supply unit. Both reduce cross-contamination but reduce statistical power.",co:"Airbnb",freq:"High"}]},{day:24,week:4,cat:"abtest",title:"A/B Testing: CUPED + Advanced",topics:["CUPED: variance reduction using pre-experiment covariate — formula + intuition","Bayesian A/B testing vs frequentist","Switchback experiments for two-sided platforms","Decision making: conflicting metrics, holdbacks, post-launch monitoring"],resources:["Trustworthy Online Controlled Experiments Ch. 7-9 — amazon.com/dp/1108724264"],qKey:"abtestQ",qs:[26,46],questions:[{q:"What is CUPED? Write the adjustment formula and explain what theta represents.",a:"CUPED reduces metric variance using pre-experiment data. Y_adj = Y - theta * X_pre, where theta = Cov(Y, X_pre) / Var(X_pre). Theta is the OLS coefficient of regressing Y on X_pre. Variance reduction = Var(Y) * (1 - rho^2) where rho = correlation between pre and post metric.",co:"Netflix",freq:"High"},{q:"What is the peeking problem? Why is stopping an A/B test early when p < 0.05 statistically invalid?",a:"Peeking: checking results repeatedly and stopping when significant inflates Type I error far above alpha. The p-value assumes a fixed sample size determined in advance. Checking daily for 30 days at alpha=0.05 gives a true false positive rate of ~40%. Fix: pre-register stopping rule, or use sequential testing methods (O'Brien-Fleming boundaries).",co:"Netflix",freq:"High"},{q:"Your A/B test shows engagement up 8% (p=0.01) but DAU down 2% (p=0.03). Should you launch?",a:"Do NOT auto-launch. Steps: (1) Is -2% DAU practically significant for the business? (2) Which users drive the DAU drop — segment by cohort, platform, country. (3) Is engagement gain durable or novelty effect? Run for 2 more weeks. (4) Model long-term LTV impact. (5) Never launch with a statistically significant guardrail violation without explicit leadership sign-off.",co:"Meta",freq:"High"}]},{day:25,week:4,cat:"causal",title:"Causal Inference Foundations",topics:["Potential outcomes: ATE, ATT, counterfactual","Confounders, colliders, DAGs — draw and identify","Why RCT gives unbiased ATE but observational study doesn't","Propensity Score Matching: steps, assumptions, balance check"],resources:["Causal Inference: The Mixtape Ch. 1-4 (free) — mixtape.scunning.com","Brady Neal: Intro to Causal Inference (YouTube) — bradyneal.com/causal-course"],qKey:"causalQ",qs:[0,4],questions:[{q:"What is the difference between correlation and causation? Give an example where they diverge.",a:"Correlation: X and Y move together. Causation: X causes Y. Diverge when: (1) Confounding — ice cream sales and drowning both rise in summer (common cause: heat). (2) Reverse causality — hospitals have more sick people, so 'going to hospital causes illness'. (3) Coincidence — Nicolas Cage films correlate with pool drownings.",co:"Meta/All",freq:"High"},{q:"What is the potential outcomes framework (Rubin Causal Model)? Define ATE and ATT.",a:"Each unit i has two potential outcomes: Y_i(1) if treated, Y_i(0) if not. Individual treatment effect = Y_i(1) − Y_i(0) — unobservable (fundamental problem of causal inference). ATE = E[Y(1) − Y(0)] — average over whole population. ATT = E[Y(1) − Y(0) | T=1] — average over treated units. RCT gives unbiased ATE because randomization makes E[Y(0)|T=1] = E[Y(0)|T=0].",co:"Netflix",freq:"High"},{q:"Why can't you just compare treated vs. untreated groups in observational data to estimate causal effects?",a:"Selection bias: who receives treatment is not random — it correlates with potential outcomes. Example: users who adopt a new feature voluntarily are more engaged to begin with. So treated group's Y(0) ≠ control group's Y(0). Naive comparison = ATE + selection bias. Need to control for confounders through PSM, DiD, RDD, or IV.",co:"Meta/All",freq:"High"},{q:"Explain propensity score matching. What are its key assumptions?",a:"Estimate P(treated | X) using logistic regression. Match each treated unit to the control unit with the closest propensity score. Estimate treatment effect on matched sample. Key assumptions: (1) Unconfoundedness — no unmeasured confounders. (2) Overlap/positivity — every unit has 0 < P(T=1|X) < 1. Check balance post-matching with SMD < 0.1.",co:"Netflix",freq:"High"}]},{day:26,week:4,cat:"causal",title:"Causal Inference Methods",topics:["Difference-in-Differences — parallel trends assumption, when it fails","Regression Discontinuity — continuity + bandwidth","Instrumental Variables — relevance + exclusion restriction","Practical: DiD for feature rollout without A/B test"],resources:["Causal Inference: The Mixtape DiD + PSM chapters — mixtape.scunning.com","Andrew Heiss: Program Evaluation course (free) — evalf23.classes.andrewheiss.com"],qKey:"causalQ",qs:[0,4],questions:[{q:"Explain Difference-in-Differences (DiD). What is the parallel trends assumption and when does it fail?",a:"DiD estimates: (Y_treat,post − Y_treat,pre) − (Y_control,post − Y_control,pre). Identifies causal effect if parallel trends holds: without treatment, both groups would have evolved the same way. Fails when: treatment and control have different pre-trends, there's anticipation of treatment, or an unrelated event affects only one group. Test: check pre-period trends visually and with regression.",co:"Netflix",freq:"High"},{q:"When would you use RDD instead of DiD?",a:"Regression Discontinuity Design: treatment is assigned based on a continuous threshold (e.g., users with score ≥ 50 get treatment). Estimate effect by comparing units just above vs. just below the cutoff — they're similar in all ways except treatment. Use when: (1) sharp threshold exists, (2) units can't perfectly manipulate their score. Continuity assumption: potential outcomes are continuous at the cutoff.",co:"Meta/All",freq:"High"},{q:"A product feature was rolled out region-by-region over several months — there was no clean A/B test. How would you estimate its causal effect?",a:"Use DiD: regions that got the feature early = treatment; regions that got it later or not yet = control. Compare metric change pre/post rollout for treatment vs. control regions. Validate: check parallel pre-trends. Threats: if rollout was targeted to regions with different trajectories (e.g., already struggling regions got it first), parallel trends fails. Alternative: synthetic control — construct a 'synthetic' control from weighted combination of untreated regions.",co:"Reddit",freq:"High"},{q:"What is an instrumental variable (IV)? Give an example.",a:"IV: a variable Z that affects treatment T but affects outcome Y only through T (exclusion restriction). Example: random encouragement (email nudge) to use a feature as IV for actual usage — the nudge affects usage but has no direct effect on outcome. Use when: unmeasured confounders exist between T and Y. Estimate: two-stage least squares (2SLS).",co:"Netflix",freq:"High"}]},{day:27,week:4,cat:"product",title:"Product Metrics + Meta 4-Type Framework",topics:["Type 1 — Metric ID: Goal → Actions (AARRR) → Metrics → Pick 1-2 top-line","Type 2 — Metric Investigation: decompose → time → internal/external → segment","Type 3 — Launch or Not: A/B structure (unit, size, duration, decision)","Type 4 — Applied Data: Goal → Metrics → Data → Variables → Model → Experiment"],resources:["A Collection of DS Take-Home Challenges (book) — amazon.com/dp/B07C5FQVFJ","Stellarpeers Product Q&A — stellarpeers.com"],qKey:"productQ",qs:[0,20],questions:[{q:"Facebook Group usage dropped 15% WoW. Walk through your complete investigation framework. What questions do you ask first? How do you segment and diagnose?",a:"1) Clarify: metric definition, one-time or progressive? 2) Decompose: new users vs returning, numerator vs denominator. 3) Time: sudden=tech issue; gradual=product/competition. 4) Other features: did other features also drop? 5) External: seasonality, competitor launch? 6) Segment: country, platform",co:"Meta",pos:"DS",freq:"High"},{q:"How would you define a metric to understand 'meaningful interactions' on FB Marketplace? Design it end-to-end.",a:"Goal: facilitate successful buyer-seller transactions. Actions: browse→click→message→purchase. Metrics: conversion rate (messages/views), completion rate (purchases/messages), DAU marketplace, repeat buyers/sellers, listing quality score. Guardrails: fraud rate, complaint rate.",co:"Meta",pos:"DS",freq:"High"},{q:"FB Search: number of searches for 'events' increased 10% WoW. Investigate the cause.",a:"1) Clarify: absolute or relative? One metric or multiple? 2) Decompose: search volume = users × searches_per_user. 3) Internal: did we change the algorithm, UI, or ranking? 4) External: real-world events, holidays? 5) Segment: by country, platform, age group, device.",co:"Meta",pos:"DS",freq:"High"},{q:"FB Events team wants to up-rank Events in search results so they appear higher than Groups and Pages. How do you determine if this is a good idea? Design the A/B test.",a:"Goal: increase event attendance/engagement. Metrics: event clicks, event RSVPs, event attendance, guardrail=overall search quality. A/B: user-level randomization, 2-week duration (novelty effects), check for cannibalization of Groups/Pages clicks, holdout.",co:"Meta",pos:"DS",freq:"High"},{q:"Instagram Story was launched. Engagement went up but DAU dropped. Should we launch?",a:"Don't launch immediately. Investigate: Is Story cannibalizing other engagement (Feed, Reels)? Which user segment drives the DAU drop? Short-term novelty effect? Compute long-term LTV impact. If engagement increase is meaningful and DAU drop is transient, may launch with guardrails.",co:"Meta",pos:"DS",freq:"High"},{q:"Instagram added a Checkout tab. How do you evaluate the success of this feature? If one metric drops, how do you investigate?",a:"Goal: drive commerce revenue while keeping engagement. Success metrics: GMV, conversion rate (views→purchases), seller adoption, repeat purchase rate. Guardrails: organic engagement rate, brand perception. Metric drop: decompose by seller type, product category, user segment.",co:"Meta",pos:"DS",freq:"Medium"},{q:"News Feed: Friend/Family posts vs. Public posts. Which would you recommend prioritizing? If a new algorithm up-ranks Friend/Family posts, how do you measure its impact?",a:"Prioritize Friend/Family: aligned with FB's mission of meaningful engagement, drives long-term MAU/retention. Metrics: avg engagement/post, meaningful interactions (comments>likes), time spent quality. A/B test: user-level, measure both engagement AND DAU/retention at 4 weeks.",co:"Meta",pos:"DS",freq:"Medium"},{q:"What metrics would you use for Airbnb’s Experiences feature?",a:"https://medium.com/stellarpeers/what-metrics-would-you-use-for-airbnbs-experiences-feature-9ca0b950ac08",co:"Airbnb",pos:"PM/DS Analytics",freq:""}]},{day:28,week:4,cat:"review",title:"📝 Week 4 Review",topics:["✍️ Spend 60–90 minutes writing:","→ 1-page summary: full A/B test design checklist, causal inference comparison table","→ Derivations from memory: sample size formula, z-test statistic, PSM steps, DiD estimator","→ Top 10 insights: 3 most common A/B mistakes? What makes a good metric vs a bad one?"],resources:["Your notes from Days 22-27 — write CUPED formula and PSM steps cold"],qKey:"productQ",qs:[20,38],questions:[{q:"Design an A/B test for adding a 'Work From Home' filter on Airbnb's search page. Cover: hypothesis, randomization unit, metrics, duration, network effects, launch decision.",a:"H0: filter has no effect on booking rate. Unit: user-level. Metrics: primary=booking rate, guardrail=host satisfaction. Duration: 2+ weeks. Network effect: geo randomization to avoid listing cross-contamination. Decision: stat + practical significance, no guardrail regression.",co:"Airbnb",freq:"High"},{q:"What is CUPED and why does it matter?",a:"Variance reduction by subtracting a pre-experiment covariate: Y_adj = Y − θ·X_pre. Reduces variance by (1−ρ²) where ρ = correlation between pre/post metric. Allows detecting smaller effects with the same sample size, or achieving same power with fewer users.",co:"Netflix",freq:"High"},{q:"Walk through propensity score matching step by step.",a:"1) Estimate P(treatment|X) using logistic regression on covariates. 2) Match each treated unit to control unit with closest propensity score (nearest neighbor). 3) Check balance: compare standardized mean differences (SMD < 0.1) across covariates. 4) Estimate ATE on matched sample. Assumption: unconfoundedness (no unmeasured confounders).",co:"Netflix",freq:"High"},{q:"FB Group usage dropped 15% WoW. Walk through your complete investigation framework.",a:"1) Clarify: which metric exactly? Sudden or gradual? 2) Is it statistically significant? 3) Time pattern: sudden → tech issue / bug / data pipeline. Gradual → product change / competitor. 4) Other features affected? If yes, platform-wide issue. 5) External: holiday, seasonality, competitor launch? 6) Segment: new vs returning users, country, platform, device. 7) Cannibalization: did another feature absorb usage?",co:"Meta",freq:"High"},{q:"Meta: FB Events team wants to up-rank Events in search above Groups and Pages. How do you determine if it's a good idea?",a:"Goal: increase event attendance & engagement without hurting search quality. Type 3 (Launch or Not) framework: Hypothesis: up-ranking events increases event RSVPs. Metrics: primary=event RSVPs, guardrail=overall search satisfaction + Groups/Pages engagement. Unit: user-level. Duration: 2 weeks min. Decision: launch only if RSVPs up significantly and guardrails not violated. Consider: does this hurt Groups creators? Run holdback post-launch.",co:"Meta",freq:"High"},{q:"What makes a good metric vs. a bad metric? Give an example of each.",a:"Good metric: measurable, sensitive to the change you care about, not gameable, aligned with long-term goals. Example: booking completion rate. Bad metric: avg response time from host — declines over time by construction (as time passes since requests, all eventually get responses), making the metric meaningless for tracking responsiveness. Bad metrics: lag the goal, can be gamed, or conflate unrelated signals.",co:"Airbnb",freq:"High"}]},{day:29,week:5,cat:"ml",title:"Recommendation Systems",topics:["Collaborative filtering: user-based vs item-based, cosine similarity","Matrix factorization: SVD/ALS, latent factors, implicit vs explicit feedback","Content-based filtering: TF-IDF, feature representations","Cold start, popularity bias, diversity/serendipity tradeoff"],resources:["Stanford CS246: Mining Massive Datasets (free) — cs246.stanford.edu","Spotify Engineering: Discover Weekly — engineering.atspotify.com"],qKey:"recSysQ",qs:[0,7],questions:[{q:"What is the cold start problem in recommendation systems? Name two solutions for a new user.",a:"Cold start: no historical data to base recommendations on. Solutions for new user: (1) Onboarding flow — ask user to pick favorite genres/artists/topics. (2) Demographic-based — use similar users by age/location/device as proxy. (3) Popularity-based — recommend globally trending items in their inferred category. Hybrid: combine as more data accumulates.",co:"Spotify",freq:"High"},{q:"What is the difference between user-based and item-based collaborative filtering?",a:"User-based CF: find users similar to the target user (by cosine similarity of ratings), recommend items they liked. Item-based CF: find items similar to what the user already liked, recommend those similar items. Item-based tends to be more stable (items change less than user tastes) and scales better since item-item similarity matrix is smaller.",co:"Spotify",freq:"High"},{q:"What metrics would you use to evaluate a recommendation system offline vs online?",a:"Offline: Precision@k, Recall@k, NDCG@k (rewards relevant items ranked higher), MAP. Online (A/B test): click-through rate, completion rate, skip rate, session length, return visits, long-term retention. Key insight: offline metrics often don't correlate with online results — always validate with A/B test before concluding a new model is better.",co:"Netflix",freq:"High"}]},{day:30,week:5,cat:"python",title:"LeetCode Coding Practice",topics:["DFS/BFS on trees and graphs (Netflix + Airbnb ask these)","Dynamic programming: memoization vs bottom-up","Iterator class for array-of-arrays (Airbnb)","Expected value problems: N buttons, M people"],resources:["LeetCode #94, #102, #200, #207, #322, #341 — leetcode.com/problemset"],qKey:"leetcodeQ",qs:[8,16],questions:[{q:"Describe the DFS pattern for detecting a cycle in a directed graph. What states do you need?",a:"Use three states per node: 0=unvisited, 1=currently being visited (in current DFS path), 2=fully visited. If you encounter a node with state=1 during DFS, you've found a cycle. If state=2, skip (already processed, no cycle through this path). Time: O(V+E). This pattern solves LeetCode 207 (Course Schedule).",co:"Netflix",freq:"High"},{q:"What is the sliding window pattern? Give an example problem where it applies.",a:"Sliding window: maintain a window [left, right] over an array, expanding right and shrinking left based on a condition. Example: longest substring without repeating characters. Expand right, add char to set. If duplicate found, shrink from left until duplicate removed. O(n) time vs O(n^2) brute force.",co:"Airbnb",freq:"High"},{q:"Implement a function to find the k most frequent elements in an array.",a:`from collections import Counter
def top_k(nums, k): return [x for x, _ in Counter(nums).most_common(k)]
Or use a min-heap of size k for O(n log k). Bucket sort gives O(n): create buckets by frequency, iterate from highest.`,co:"Airbnb",freq:"High"}]},{day:8,week:2,cat:"sql",title:"SQL Window Functions",topics:["RANK vs DENSE_RANK vs ROW_NUMBER — differences with ties","LAG / LEAD — week-over-week, session gaps, first events per user","Aggregate windows — running totals, 7-day rolling averages","Top-N per group pattern — DENSE_RANK() OVER (PARTITION BY ... ORDER BY ...)"],resources:["🏷️ LeetCode #178 Rank Scores (Easy)","🏷️ LeetCode #184/#185 Dept Highest / Top 3 Salaries","🏷️ LeetCode #180 Consecutive Numbers (Medium)","Mode Analytics SQL Window Functions Tutorial"],qKey:"sqlWindowQ",qs:[],questions:[]},{day:9,week:2,cat:"sql",title:"SQL Date Functions & Time Series",topics:["DATE_TRUNC, EXTRACT, DATEDIFF, INTERVAL arithmetic","Week-over-week change with LAG(cnt, 7)","% booked within 30 days — Airbnb pattern (LEFT JOIN + CASE WHEN)","Rolling 7-day window with ROWS BETWEEN 6 PRECEDING AND CURRENT ROW"],resources:["🏷️ LeetCode #197 Rising Temperature (Easy)","🏷️ LeetCode #262 Trips and Users (Hard)","Airbnb SQL interview: bookings + listings table patterns","Reddit CVR WoW pattern — LAG(cvr, 7)"],qKey:"sqlDateQ",qs:[],questions:[]},{day:10,week:2,cat:"sql",title:"SQL Complex Patterns — Churn, Funnel, Self-Join",topics:["Churn detection — last_txn > 7 days ago (Reddit advertiser churn)","Funnel analysis — COUNT(DISTINCT CASE WHEN event='X' THEN user_id END)","Country penetration — US vs Not US based on % viewing time","Self-joins, EXISTS/NOT EXISTS, UNION ALL for bidirectional relationships"],resources:["🏷️ LeetCode #570 Managers with 5+ Direct Reports (Medium)","🏷️ LeetCode #602 Friend Requests II: Most Friends (Medium)","Reddit ad_revenue + active_ads SQL patterns","Airbnb first-booking and WoW patterns"],qKey:"sqlComplexQ",qs:[],questions:[]},{day:11,week:2,cat:"python",title:"Python Pandas Fundamentals",topics:["DataFrame creation, inspection, filtering (boolean mask with & and |)","groupby().agg() with named aggregations — visitors, bookings, rate","pd.merge() — LEFT JOIN for A/B testing, how= options, suffix handling","DateTime operations, pivot_table, apply vs vectorized operations"],resources:["Airbnb join pattern: visit + booking → LEFT JOIN → fillna(0) → groupby","Pandas groupby docs — pandas.pydata.org","Reddit/Shopify: weighted random sampling with np.random.choice","Rolling windows: daily_df['col'].rolling(7).mean()"],qKey:"pyPandasQ",qs:[],questions:[]},{day:12,week:2,cat:"python",title:"Python A/B Testing & Statistical Analysis",topics:["Two-proportion z-test — proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t])","95% CI on difference: (pt-pc) ± 1.96 * sqrt(pc*(1-pc)/nc + pt*(1-pt)/nt)","SRM check, power analysis, p-value interpretation pitfalls","Matplotlib bar chart with error bars — the Airbnb plot pattern"],resources:["Airbnb full A/B test pipeline: load → merge → agg → ztest → CI → plot","Netflix A/B test: 100k control vs treatment, 80.1% vs 80.2% retention","Reddit: dice P(A>B) with numpy broadcasting — A[:,None] > B[None,:]","scipy.stats proportions_ztest documentation"],qKey:"pyABtestQ",qs:[],questions:[]},{day:13,week:2,cat:"python",title:"Python OOP & Interview Coding",topics:["OOP: class, __init__, instance methods, __repr__ — Shopify TDD pattern","ExperimentTracker class — CTR tracking with record(), ctr(), top_n()","🏷️ LeetCode #289 Game of Life — in-place with state encoding (2 and -1)","🏷️ LeetCode #380 RandomizedSet — O(1) insert/remove/getRandom via swap-and-pop"],resources:["Shopify pair programming: TDD, test-driven class implementation","🏷️ LeetCode #289 Game of Life (Medium)","🏷️ LeetCode #380 Insert Delete GetRandom O(1) (Medium)","Expedia: weighted random sampling, OOP data structures"],qKey:"pyOOPQ",qs:[],questions:[]},{day:14,week:2,cat:"review",title:"Week 2 Review — SQL & Python Quiz (30 questions)",topics:["SQL sections: window functions, date patterns, churn/funnel/self-join","Python sections: pandas, A/B testing pipeline, OOP","Real company questions: Airbnb, Reddit, Shopify, Expedia, Netflix, LeetCode","Write from memory: WoW LAG, Airbnb pipeline, ExperimentTracker, RandomizedSet"],resources:["All Day 8–13 notes","🏷️ LeetCode SQL problems — practice any you haven't tried","DataLemur SQL Interview Questions"],qKey:"week2ReviewQ",qs:[],questions:[]},{day:15,week:3,cat:"stats",title:"A/B Testing Foundations",topics:["Type I / Type II errors: α, β, power = 1-β. Business interpretation.","Two-proportion z-test: proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t])","p-value interpretation: what it IS and what it is NOT","One-sided vs two-sided tests: when each is valid"],resources:["Evan Miller: How Not To Run an A/B Test (peeking)","Ronny Kohavi: Trustworthy Online Controlled Experiments","scipy proportions_ztest documentation"],qKey:"abFoundationsQ",qs:[],questions:[]},{day:16,week:3,cat:"stats",title:"Experiment Design & Sample Size",topics:["Randomization unit: user vs session vs geo — and why it matters","MDE: minimum detectable effect — set by business, not statistics","Sample size formula: n = 2(z_α/2 + z_β)² × p(1-p) / MDE²","Duration: minimum 2 weeks for seasonality; novelty vs primacy effects","AA test, SRM check, CUPED variance reduction"],resources:["Optimizely Sample Size Calculator","Microsoft CUPED paper","SRM Checker tool"],qKey:"expDesignQ",qs:[],questions:[]},{day:17,week:3,cat:"stats",title:"Statistical Pitfalls & Multiple Testing",topics:["Multiple testing: Bonferroni vs FDR (Benjamini-Hochberg)","Novelty and primacy effects — detection with daily effect plot","Simpson's Paradox — aggregate vs segment disagreement","SUTVA violations and network effects — when user-level A/B fails"],resources:["statsmodels multipletests documentation","Airbnb: Interference in Experimentation blog post"],qKey:"pitfallsQ",qs:[],questions:[]},{day:18,week:3,cat:"stats",title:"Causal Inference — DiD & Pre-Post",topics:["DiD: formula, regression form, parallel trends assumption","Placebo test: run DiD on pre-period to validate parallel trends","Pre-post analysis: when it works and when it fails","Regression Discontinuity Design (RDD): threshold-based causal inference","Double ML bridge: how it connects to your Amazon experience"],resources:["Scott Cunningham: Causal Inference — The Mixtape (free)","Nick Huntington-Klein: The Effect (DiD chapter, free)"],qKey:"causalInfQ",qs:[],questions:[]},{day:19,week:3,cat:"stats",title:"Incrementality & Attribution — Expedia Ads",topics:["Attribution vs incrementality: the umbrella story","iROAS = incremental revenue / ad spend. Break-even = 1 / commission_rate.","Ghost ad holdout: empty slot to 10% of eligible users → true incremental lift","Attribution models: last-touch, linear, time-decay, Shapley values","Double ML for incrementality without randomization"],resources:["Meta: Ghost Ad Methodology","DoubleML Python package documentation","Spotify: Incrementality testing blog post"],qKey:"incrementalityQ",qs:[],questions:[]},{day:20,week:3,cat:"stats",title:"Metric Design & Advanced Topics",topics:["Metric hierarchy: primary, secondary, guardrail, exploratory","Guardrail metrics: page load, organic booking rate, bounce rate","Segmentation analysis: heterogeneous treatment effects + HTE regression","Multi-armed bandits: epsilon-greedy vs Thompson Sampling vs A/B","Communicating results: 3-sentence format + business impact calculation"],resources:["Netflix: Metrics that matter","Microsoft: Surrogate metric paper"],qKey:"metricDesignQ",qs:[],questions:[]},{day:21,week:3,cat:"review",title:"Week 3 Review — A/B Testing & Causal Inference Quiz (24 questions)",topics:["Section 1: Foundations — Hypothesis Testing & z-Test (Q1–Q7)","Section 2: Experiment Design & Pitfalls (Q8–Q15)","Section 3: Causal Inference — DiD, Pre-Post & Incrementality (Q16–Q24)"],resources:["All Day 15-20 notes","Evan Miller: How Not To Run an A/B Test","Causal Inference: The Mixtape (DiD chapter)"],qKey:"week3ReviewQ",qs:[],questions:[]},{day:22,week:4,cat:"ml",title:"ML Foundations I — Regression, Classification & Evaluation",topics:["Logistic regression: sigmoid, log-loss, gradient descent","Bias-variance decomposition: sources of each and how to fix","AUC-ROC vs log-loss for CTR prediction — which metric to optimize","Feature engineering and target leakage detection"],resources:["Hands-On Machine Learning with Scikit-Learn (Ch. 4-5)","StatQuest: Logistic Regression — youtube.com/c/joshstarmer"],qKey:"mlFoundQ",qs:[],questions:[]},{day:23,week:4,cat:"ml",title:"ML Foundations II — Trees, Boosting & Calibration",topics:["Decision trees: Gini impurity, information gain, pruning","Random forests (bagging) vs gradient boosting (pseudo-residuals)","LightGBM and XGBoost: leaf-wise growth, histogram binning","Calibration: Platt scaling, ECE metric, calibration drift monitoring"],resources:["StatQuest: Gradient Boosting — youtube.com/c/joshstarmer","LightGBM documentation — lightgbm.readthedocs.io"],qKey:"treesBoostQ",qs:[],questions:[]},{day:24,week:4,cat:"ml",title:"Ranking & Personalization",topics:["Learning to Rank: pointwise vs pairwise vs listwise (LambdaMART)","NDCG@k formula: normalized discounted cumulative gain","Two-tower models for retrieval + ranking pipeline","Position bias and IPS debiasing"],resources:["LightGBM LambdaRank objective documentation","Google: Two-Tower Model for Recommendations (paper)"],qKey:"rankingQ",qs:[],questions:[]},{day:25,week:4,cat:"ml",title:"Ads Marketplace & Auction Theory",topics:["GSP auction: rank = bid × quality score, CPC = next_rank / own_quality","VCG auction: truthful bidding, social welfare maximization","pCTR calibration: calibration ratio = mean(predicted) / mean(actual)","Thompson Sampling for ads: Beta-Binomial explore-exploit","Revenue vs UX tradeoff: constrained optimization framework"],resources:["Hal Varian: Position Auctions paper (2007)","Google Ads: Auction Overview documentation"],qKey:"adsAuctionQ",qs:[],questions:[]},{day:26,week:4,cat:"ml",title:"NLP & Modern LLMs",topics:["TF-IDF, Word2Vec, sentence embeddings — when to use each","Attention mechanism: Attention(Q,K,V) = softmax(QKᵀ/√d)V","BERT (bidirectional MLM) vs GPT (autoregressive CLM) pre-training","RAG architecture: when retrieval beats fine-tuning","LLM production constraints: latency, cost, hallucination, evaluation"],resources:["Andrej Karpathy: makemore / nanoGPT YouTube series","Hugging Face: NLP with Transformers (free)"],qKey:"nlpLLMQ",qs:[],questions:[]},{day:27,week:4,cat:"ml",title:"Production ML Systems",topics:["Feature stores: offline vs online, point-in-time correctness (PIT)","Online vs batch serving: FastAPI + LGBM real-time scoring","Model monitoring: PSI (Population Stability Index), drift detection","Shadow mode vs canary deployment for ranking model rollout","Spark: DataFrame API, window functions, partitioned writes"],resources:["Chip Huyen: Designing ML Systems (free chapter)","Feast feature store documentation — feast.dev"],qKey:"prodMLQ",qs:[],questions:[]},{day:28,week:4,cat:"review",title:"Week 4 Review — ML, Ranking, Ads & Production Quiz (24 questions)",topics:["Section 1: ML Foundations & Tree Models (Q1–Q8)","Section 2: Ranking, Ads & Auction Theory (Q9–Q16)","Section 3: NLP, LLMs & Production ML (Q17–Q24)"],resources:["All Day 22-27 notes","Expedia Group Tech Blog — expediagroup.com/tech"],qKey:"week4ReviewQ",qs:[],questions:[]},{day:29,week:5,cat:"sql",title:"Data Engineering, SQL at Scale & Pipeline Debugging",topics:["Advanced SQL: window functions (ROW_NUMBER, LEAD/LAG), CTEs, anti-joins","Spark at Scale: DAG, shuffles, broadcast joins, Window API","Pipeline debugging: schema drift, late data, null explosions, fan-out joins","Expedia SQL patterns: hotel funnel, cohort analysis, session reconstruction","Python at scale: chunked processing, vectorization, generators, profiling"],resources:["Mode Analytics SQL Tutorial","Spark: The Definitive Guide (free chapters)"],qKey:"dataEngQ",qs:[],questions:[]},{day:30,week:5,cat:"interview",title:"BQ Stories, Case Study Framework & Final Expedia Prep",topics:["5 core BQ stories in STAR format (influence, wrong decision, ambiguity, pushback, Double ML)","Case study framework: clarify → guardrails → A/B feasibility → sample size → decision","Double ML project deep dive: technical depth + business impact + Expedia bridge","Expedia domain knowledge: funnel metrics, ranking signals, commission structure","Questions to ask + day-of checklist + interview strategy"],resources:["Expedia Group Tech Blog — expediagroup.com/tech","Causal Inference: The Mixtape (free) — mixtape.scunning.com"],qKey:"finalPrepQ",qs:[],questions:[]}],Vs=[{week:1,title:"Week 1 — Statistics & SQL Foundations",days:"Days 1–7",color:"#F59E0B",checklistSections:[{heading:"Probability",items:["Can state Bayes' theorem from memory: P(A|B) = P(B|A)·P(A) / P(B)","Can solve the three-friends-Seattle rain problem cold (answer: 8/11)","Can solve the double-headed coin problem cold","Know complement rule: P(at least one) = 1 − P(none)","Understand conditional probability vs independence"]},{heading:"Distributions",items:["Can describe shape of: comments/user/day → Poisson-like right-skewed (mode≈1, median≈3, mean≈8-10, p95≈100)","Can describe: posts/user/day → log-normal (mode=0, median≈1, mean≈5, right skew)","Can describe: app usage time → exponential (most leave in first 10s)","Know Binomial: E[X]=np, Var[X]=np(1-p). Know Poisson: E[X]=Var[X]=λ","Know when to use each: Binomial=fixed n binary trials; Poisson=count of rare events"]},{heading:"Hypothesis Testing & CIs",items:["Can explain p-value in plain English without using 'probability the null is true'","Know the three inputs to sample size formula: α, power, MDE (and baseline rate)","Can derive: wide CI → large SE → either small n or high variance in the population","Know Type I = false positive (α). Type II = false negative (β). Power = 1−β","Can explain when to use Mann-Whitney U vs t-test"]},{heading:"SQL Foundations",items:["Can write the AVG(CASE WHEN ... THEN 1 ELSE 0 END) percentage pattern from memory","Can write Meta video calls query: bidirectional JOIN ON caller=user_id OR recipient=user_id","Can write Meta search query: searches JOIN search_results, GROUP BY, HAVING","Know NULL handling: COALESCE, IS NULL, IFNULL","Can explain when to use LEFT JOIN vs INNER JOIN and what each produces"]}],derivationsToWrite:["Bayes' theorem: write full formula + walk through Seattle example","Sample size formula for two-proportion z-test: n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ²","E[X] and Var[X] for Binomial and Poisson (from memory)","Meta ad probability: Method 1 E[X]=4, Var=3.84 (Binomial). Method 2 E[X]=4, Var=0","P(bad|flagged) Bayesian: 0.99×0.01 / (0.99×0.01 + 0.01×0.99) ≈ 50%"],decayReminders:[{concept:"Bayes formula",risk:"High",next:"Day 14 — re-solve Seattle and coin problems cold"},{concept:"Sample size formula",risk:"High",next:"Day 22 — write it from memory before A/B Testing week"},{concept:"Binomial E[X], Var[X]",risk:"Medium",next:"Day 17 — needed when interpreting XGBoost loss"},{concept:"Meta SQL patterns",risk:"Low",next:"Practice 1 query per SQL day (Days 8-11)"}],mockQuestions:[{q:"You flip a fair coin 10 times and get 10 heads. What is the probability the 11th flip is heads?",a:"0.5 — coin flips are independent events. Past results don't affect future probability. Common interview trap: candidates confuse gambler's fallacy with the correct answer.",source:"Classic probability interview",difficulty:"Easy"},{q:"What is the probability that two people in a room of 23 share a birthday?",a:"P(at least one shared birthday) = 1 − P(all different) = 1 − (365/365 × 364/365 × ... × 343/365) ≈ 50.7%. Counterintuitive — most people guess much lower. Key insight: 23 people → 23×22/2 = 253 pairs.",source:"Birthday paradox — classic DS interview",difficulty:"Medium"},{q:"A test for a disease with 1% prevalence has 95% sensitivity and 95% specificity. If you test positive, what is the probability you have the disease?",a:"P(disease|+) = 0.95×0.01 / (0.95×0.01 + 0.05×0.99) = 0.0095/0.059 ≈ 16.1%. Despite 95% accuracy, only ~16% of positives truly have the disease because prevalence is so low. Illustrates why rare event detection is hard.",source:"FAANG Stats interview — DataLemur",difficulty:"Medium"},{q:"Explain the difference between probability and likelihood.",a:"Probability: fixed parameters, varying outcomes — P(data|θ). Likelihood: fixed data, varying parameters — L(θ|data). MLE maximizes L(θ|data) over θ. Example: probability of 7 heads in 10 flips given p=0.5 is ~11.7%. Likelihood of p=0.7 given 7 heads observed is also ~11.7% but means something different.",source:"Statistics interview — GeeksforGeeks/365DS",difficulty:"Medium"},{q:"What is the variance of a sum of two independent random variables X and Y?",a:"Var(X+Y) = Var(X) + Var(Y) if X,Y independent. Var(X+Y) = Var(X) + Var(Y) + 2·Cov(X,Y) if correlated. Key: variance adds for independent variables — this is why standard error = σ/√n (sum of n independent variables divided by n).",source:"Classic statistics",difficulty:"Easy"},{q:"You draw 2 cards from a standard 52-card deck without replacement. What is the probability both are from the same suit?",a:"P(same suit) = P(2nd same suit | 1st drawn) = 12/51 ≈ 23.5%. Dependent event: first draw was from some suit (13 cards), leaving 12 of that suit in 51 remaining. Alternatively: C(13,2)×4 / C(52,2) = 312/1326 ≈ 23.5%.",source:"StrataScratch DS probability",difficulty:"Medium"}]},{week:2,title:"Week 2 — SQL Advanced + Python",days:"Days 8–14",color:"#3B82F6",checklistSections:[{heading:"SQL Window Functions",items:["Can write ROW_NUMBER, RANK, DENSE_RANK and explain when each is correct","Can write LAG(value, 1) OVER (PARTITION BY ... ORDER BY ...) for WoW change","Can write SUM() OVER (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) for running total","Know CTE syntax: WITH cte AS (...) SELECT ... FROM cte","Can explain difference: WHERE filters rows BEFORE grouping; HAVING filters AFTER"]},{heading:"SQL Advanced Patterns",items:["Can write Spotify A/B pattern: LEFT JOIN streams ON user_id AND date >= first_exposed_date","Can write nested aggregation: AVG(CASE WHEN cnt > 1 THEN 1 ELSE 0 END) as pct","Know DATE_SUB(CURDATE(), INTERVAL 7 DAY) and DATE_TRUNC patterns","Can write Airbnb booking conversion: join bookings + listings, filter US, GROUP BY date","Can write Meta % of spam: SUM(CASE WHEN action='report' THEN 1) / SUM(CASE WHEN action='view' THEN 1)"]},{heading:"Python / Pandas",items:["Can write np.where(condition, value_if_true, value_if_false) from memory","Know: groupby().agg() vs groupby().transform() — transform returns same-size df","Can write full A/B pipeline: merge() → filter → groupby → scipy.stats.ttest_ind","Know SQL→Pandas translation: JOIN=merge(), WHERE=query() or boolean index, HAVING=groupby().filter()","Can write platform adjustment function with a dict of multipliers"]},{heading:"Python for Stats + ML",items:["Can write full Airbnb-style A/B analysis: merge visits+bookings, flag converted, call ttest_ind, print p-value","Know when to use mannwhitneyu vs ttest_ind (non-normal/skewed data → Mann-Whitney U)","Can write a bootstrap CI function: np.random.choice with replace=True, np.percentile for bounds","Can fit OLS in statsmodels: sm.add_constant + sm.OLS().fit() and interpret coef + R²","Can build sklearn logistic regression pipeline: train_test_split → fit → classification_report","Can write chi2_contingency test to check for randomization imbalance between groups"]}],derivationsToWrite:["Write Meta video call % query: bidirectional JOIN + AVG(CASE WHEN) (from memory, cold)","Write Spotify A/B SQL: join bucket + streams on user_id AND date>=first_exposed, compute avg per group","Write pandas equivalent of: SELECT user_id, AVG(ms) FROM streams WHERE date>'2024-01' GROUP BY user_id HAVING AVG(ms)>1000","Write the Airbnb t-test pipeline: merge visitor+booking, compute converted flag, call ttest_ind","Write bootstrap_ci() from memory: np.random.choice → loop B=1000 → np.percentile([2.5, 97.5])","Write statsmodels OLS from memory: sm.add_constant(X) → sm.OLS(y, X).fit() → .summary()"],decayReminders:[{concept:"Window function syntax",risk:"Medium",next:"Day 22 — will need LAG for WoW metric change in A/B analysis questions"},{concept:"Bidirectional JOIN pattern",risk:"High",next:"Actively practice any time you see a social/call graph table"},{concept:"np.where pattern",risk:"Low",next:"Low decay — mechanical once you've done it twice"},{concept:"Spotify A/B SQL",risk:"High",next:"Day 22 — this exact pattern appears in A/B Testing week questions"}],mockQuestions:[{q:"Write a SQL query to find the second highest salary. Handle the case where fewer than 2 distinct salaries exist (return NULL).",a:"SELECT (SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1) AS SecondHighestSalary;  OR: WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rk FROM Employee) SELECT MAX(salary) FROM ranked WHERE rk=2;  The OFFSET approach naturally returns NULL if no second salary exists.",source:"LeetCode #176 — classic FAANG SQL",difficulty:"Easy"},{q:"Find all numbers that appear at least 3 times consecutively in a Logs table (Id, Num).",a:"SELECT DISTINCT l1.Num AS ConsecutiveNums FROM Logs l1 JOIN Logs l2 ON l1.Id+1=l2.Id AND l1.Num=l2.Num JOIN Logs l3 ON l2.Id+1=l3.Id AND l2.Num=l3.Num;  Or with LAG/LEAD: use two LAG calls, filter where current=lag1=lag2.",source:"LeetCode #180 — window function classic",difficulty:"Medium"},{q:"Given a table of user sessions (user_id, session_start, session_end), compute the number of sessions active at any given minute over the past day.",a:"Generate a calendar spine of minutes, then LEFT JOIN sessions ON minute BETWEEN session_start AND session_end, GROUP BY minute, COUNT(*). In practice: use a numbers table or recursive CTE to generate the minute spine.",source:"FAANG DS SQL — DataLemur style",difficulty:"Hard"},{q:"In Pandas, given df with columns [user_id, date, revenue], compute each user's 7-day rolling average revenue, including days with no activity (as 0).",a:"First create full date spine per user: pd.date_range. Merge with df (left join). Fill NaN revenue with 0. Then: df.groupby('user_id')['revenue'].transform(lambda x: x.rolling(7).mean()). Rolling requires data sorted by date within each group.",source:"Classic Pandas interview question",difficulty:"Medium"},{q:"Explain the difference between RANK() and DENSE_RANK() with an example where they give different results.",a:"Given scores [100,100,90,80]: RANK → 1,1,3,4 (skips 2 because two tied at rank 1). DENSE_RANK → 1,1,2,3 (no gap, next rank is always previous+1). Use RANK for: competition results where 'no one gets 2nd'. Use DENSE_RANK for: bucketing/deciling where you want no gaps.",source:"Classic window function interview",difficulty:"Easy"}]},{week:3,title:"Week 3 — ML Deep Dive",days:"Days 15–21",color:"#F97316",checklistSections:[{heading:"Linear & Logistic Regression",items:["Can write OLS estimator: β = (XᵀX)⁻¹Xᵀy","Can state 4 linear regression assumptions: Linearity, Independence, Normality of errors, Equal variance (LINE)","Know Ridge shrinks all weights, Lasso sets some to zero exactly — explain why geometrically","Know logistic regression sigmoid: σ(z) = 1/(1+e⁻ᶻ). Decision boundary: σ(z)=0.5 when z=0","Can interpret a regression coefficient: 'holding all else equal, a 1-unit increase in X → β change in Y'"]},{heading:"Decision Trees & Ensemble",items:["Can write Gini impurity formula: G = 1 − Σpᵢ². Pure node → G=0. Equal split → G=0.5","Know RF: bagging + random feature subset per split. Why feature subset? Decorrelates trees → reduces variance","Know boosting: sequential, each tree fits residuals of previous. XGBoost adds regularization to loss","Know OOB error: ~37% of data not used per tree → free unbiased validation estimate","Know 5 key XGBoost hyperparameters: n_estimators, learning_rate, max_depth, subsample, colsample_bytree"]},{heading:"Evaluation & System Design",items:["Know when to use AUC-ROC vs AUC-PR: AUC-PR better for severe class imbalance","Know precision = TP/(TP+FP). Recall = TP/(TP+FN). F1 = 2PR/(P+R)","Know imbalanced data solutions: scale_pos_weight (XGBoost), class_weight='balanced', SMOTE, threshold tuning","Can walk through end-to-end ML system: problem framing → labels → features → model → evaluation → monitoring","Know data leakage: features derived from future data or from test set contaminate training"]},{heading:"Deep Learning",items:["Can explain backprop: chain rule, dL/dW = dL/dA × dA/dZ × dZ/dW","Know vanishing gradient: sigmoid/tanh saturate → gradients → 0. Solution: ReLU, batch norm, skip connections","Can write attention formula: Attention(Q,K,V) = softmax(QKᵀ/√d_k) × V","Know BERT=encoder (bidirectional, good for understanding), GPT=decoder (causal, good for generation)"]}],derivationsToWrite:["Write OLS β formula from memory. Then explain: why do we invert XᵀX?","Write Gini impurity: G = 1 − Σpᵢ². Compute for a pure node and a 50/50 split","Write gradient boosting update rule: ŷₜ = ŷₜ₋₁ + η·hₜ(x) where hₜ fits −∂L/∂ŷₜ₋₁","Write attention formula: softmax(QKᵀ/√d_k)·V. Explain why we divide by √d_k","Write backprop for one dense layer: dL/dW = Aᵀ·δ where δ = dL/dZ"],decayReminders:[{concept:"OLS β derivation",risk:"High",next:"Day 28 review — write it cold. Easy to forget the (XᵀX)⁻¹ step"},{concept:"Gini impurity formula",risk:"High",next:"Day 28 review — interviewers ask 'compute Gini for this split'"},{concept:"XGBoost hyperparameters",risk:"Medium",next:"Day 28 review — list all 5 cold before A/B week"},{concept:"Attention formula",risk:"High",next:"High decay — unusual notation. Re-derive in Week 4 review"},{concept:"Precision/Recall formulas",risk:"Low",next:"Low decay — very mechanical"}],mockQuestions:[{q:"You train a logistic regression and get perfect training accuracy (100%) but 60% test accuracy. What's wrong and how do you fix it?",a:"Severe overfitting. Diagnosis: large gap between train/test. Fixes: (1) Reduce model complexity — fewer features, increase regularization (C parameter in sklearn, or add L1/L2 penalty). (2) More training data. (3) Cross-validation to detect earlier. (4) Check for data leakage — maybe a feature is derived from the label. (5) Dropout if using neural net. Root cause: model memorized training noise.",source:"Classic ML interview — Netflix/Expedia style",difficulty:"Medium"},{q:"Explain the difference between bagging and boosting. Which reduces bias? Which reduces variance?",a:"Bagging (e.g., RF): trains B independent models on bootstrap samples, averages predictions. Reduces variance (averaging uncorrelated models). Doesn't help with bias. Boosting: trains sequentially, each model corrects predecessor's errors. Reduces bias primarily. Risk: can increase variance if too many rounds (overfit). Rule: RF when you have noisy data and need robustness. XGBoost when you need max accuracy and can tune carefully.",source:"FAANG ML interview — Exponent/Backprop",difficulty:"Medium"},{q:"You have a dataset with 1% positive class. Your model achieves 99% accuracy. Is this good?",a:"No — this is the accuracy paradox. A model that always predicts negative also achieves 99% accuracy. Correct metrics: Precision-Recall curve, F1 score, or AUC-PR (area under PR curve, better than AUC-ROC for severe imbalance). The model needs to demonstrate recall > 0 on the positive class to be useful.",source:"Netflix OA / Disney DS interview",difficulty:"Easy"},{q:"What is the difference between L1 and L2 regularization geometrically? Why does L1 produce sparse solutions?",a:"L2 (Ridge): penalty = Σwᵢ². Constraint region is a circle (sphere in n-D). Solution found at tangency with loss contours → shrinks weights but rarely to zero. L1 (Lasso): penalty = Σ|wᵢ|. Constraint region is a diamond (L1-ball). Diamond has corners on axes → optimal solution often hits a corner → weight = exactly 0 → feature selection. Intuition: L1 is more 'pointy' at zero.",source:"GeeksforGeeks / DataCamp stats interview",difficulty:"Medium"},{q:"How would you detect data leakage in a predictive model?",a:"Signs: suspiciously high train/test performance, feature importance of unexpected variables. Methods: (1) Check if any feature is derived post-event (future data). (2) Examine temporal ordering — was preprocessing done on full dataset before split? (3) Check target-correlated features that wouldn't be available at prediction time. (4) Run feature importance — if a variable that shouldn't predict is top, investigate. Fix: strict train/test temporal split; fit all transformers only on training data.",source:"MLsystem design interview — FAANG",difficulty:"Medium"},{q:"Walk me through self-attention in a Transformer. Why do we scale by √d_k?",a:"Q, K, V = linear projections of input. Attention scores = QKᵀ (similarity matrix). Scale by 1/√d_k because dot products grow with dimensionality → large values push softmax into saturation region → vanishing gradients. Softmax normalizes into probability distribution. Multiply by V to get weighted sum of values. Multi-head: run h parallel attention heads, concatenate, project. Allows model to attend to different representation subspaces.",source:"Netflix MLE / Spotify MLE interview",difficulty:"Hard"}]},{week:4,title:"Week 4 — A/B Testing + Causal + Product",days:"Days 22–28",color:"#8B5CF6",checklistSections:[{heading:"A/B Testing Design",items:["Can state sample size formula: n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ²  (z values: α=0.05→1.96, power=0.8→0.84)","Know 3 randomization units: user-level (most common), session-level (novelty effect risk), geo-level (network effects)","Know 5 types of metrics: primary, guardrail, secondary, tracking, diagnostic","Can explain novelty effect and how to detect it (plot metric over time in treatment — should stabilize)","Can explain network effect / SUTVA violation with an Airbnb marketplace example"]},{heading:"A/B Testing Analysis",items:["Can write two-proportion z-test: z = (p̂₁−p̂₂) / √[p̄(1−p̄)(1/n₁+1/n₂)]","Know CUPED: Y_adj = Y − θ·X_pre, θ = Cov(Y,X)/Var(X). Reduces variance by factor (1−ρ²)","Know Bonferroni correction: use α/k per test when running k simultaneous tests","Know peeking problem: stopping when p<0.05 inflates false positive rate. Fix: pre-register stopping rule, use sequential testing","Know conflict resolution when metrics diverge: check practical significance of each, segment to find which users drive the gap, escalate"]},{heading:"Causal Inference",items:["Know PSM steps: estimate propensity, match, check balance (SMD<0.1), estimate ATE on matched sample","Know DiD estimator: (Y_treat,post − Y_treat,pre) − (Y_ctrl,post − Y_ctrl,pre)","Know parallel trends assumption: both groups would have trended similarly absent treatment","Know RDD: compare just above vs just below a threshold — continuity assumption","Know IV: relevance (Z→T) + exclusion restriction (Z→Y only through T)"]},{heading:"Product Metrics",items:["Know Meta 4-type framework cold: Type 1 (Metric ID), Type 2 (Investigation), Type 3 (Launch/Not), Type 4 (Applied Data)","Know metric drop investigation order: clarify → decompose → time pattern → internal/external → segment","Can explain why 'avg response time' is a bad metric (declines by construction as time passes)","Know what makes a metric good: measurable, sensitive, aligned with long-term goals, not gameable"]}],derivationsToWrite:["Write sample size formula from memory. Plug in: α=0.05, power=0.8, p1=0.05, MDE=0.005 → what is n?","Write z-test formula for two proportions. Walk through: given treatment=45%, control=40%, n=1000 each → is it significant?","Write CUPED adjustment: Y_adj = Y − (Cov(Y,X_pre)/Var(X_pre)) × X_pre","Write DiD estimator. Draw the 2×2 table (pre/post × treat/control)","Walk through PSM 4 steps from memory"],decayReminders:[{concept:"Sample size formula",risk:"High",next:"MOST IMPORTANT — write this cold every morning this week"},{concept:"CUPED formula",risk:"High",next:"High decay — unusual formula. Re-derive from scratch before any interview"},{concept:"PSM steps",risk:"High",next:"High decay — 4 steps are easy to mix up. Write as a checklist"},{concept:"DiD parallel trends",risk:"Medium",next:"Medium decay — intuition stays, specifics fade"},{concept:"Meta product framework",risk:"Low",next:"Low decay if you've drilled the 4 types. Strong area for you"}],mockQuestions:[{q:"You run an A/B test for 2 weeks. p-value = 0.03, treatment is +5% on the primary metric. Should you launch?",a:"Not automatically. Check: (1) Is +5% practically significant? (2) Are guardrail metrics clean? (3) Is the effect stable over time (not just novelty)? (4) Any segment where it hurts (e.g., new users)? (5) Was the experiment correctly powered and not peeked? If all checks pass → launch with holdback (keep 5-10% on old experience) + post-launch monitoring plan.",source:"A/B Testing interview — Airbnb/Netflix style",difficulty:"Medium"},{q:"What is the multiple testing problem and how do you handle it?",a:"Running k tests at α=0.05 each gives 1−(0.95)^k probability of at least one false positive. k=14 tests → ~51% chance of spurious finding. Solutions: (1) Bonferroni: use α/k per test (conservative). (2) Benjamini-Hochberg (FDR): controls expected fraction of false discoveries. (3) Pre-specify primary metric, treat others as exploratory. (4) Use a composite metric / OEC.",source:"Netflix/Spotify A/B Testing",difficulty:"Medium"},{q:"A feature was rolled out to all users in Japan 3 months ago without a control group. How would you estimate its effect?",a:"Difference-in-Differences: use a comparable market (e.g., South Korea) as control. DiD estimate = (Japan post−Japan pre) − (Korea post−Korea pre). Validate: check parallel pre-trends for 6+ months before rollout. Threats: if Japan was chosen because it was struggling (selection bias), parallel trends assumption fails. Alternative: synthetic control — construct weighted combination of untreated markets that best match Japan's pre-trend.",source:"Netflix DS Causal Inference interview",difficulty:"Hard"},{q:"Explain the 'peeking problem' in A/B testing. Why is it statistically invalid to stop early when p < 0.05?",a:"Peeking: checking results repeatedly and stopping when significant inflates Type I error well above α. Example: checking daily for 30 days at α=0.05 → true false positive rate ~40%. The p-value was computed assuming a fixed sample size determined in advance. Solutions: (1) Pre-register stopping rule. (2) Sequential testing (O'Brien-Fleming boundaries). (3) Always-valid p-values (using e-values). (4) Bayesian methods with posterior stopping rules.",source:"Classic A/B testing pitfall — Trustworthy Online Experiments",difficulty:"Hard"},{q:"You want to measure the effect of adding a new search feature on Airbnb. Hosts and guests are on the same platform. What randomization strategy do you use and why?",a:"Network effect risk: a listing viewed by treatment users can be booked, making it unavailable to control users → treatment looks artificially better. Solutions: (1) Geo randomization — assign entire cities/markets to treatment or control (eliminates cross-contamination). (2) Listing-level randomization — randomize at supply side. Both sacrifice statistical power vs user-level but are unbiased. State tradeoff explicitly: geo gives cleanest estimate but requires more markets.",source:"Airbnb DS Inference interview",difficulty:"Hard"},{q:"A product manager asks: 'Our key metric dropped 15% overnight. What do you do?'",a:"Step 1 — Clarify: which metric exactly, over what time window, compared to what baseline? Step 2 — Data quality: is this a logging/pipeline issue? Check other metrics for similar anomaly. Step 3 — Time pattern: sudden=tech issue or bad deploy. Gradual=product change or external. Step 4 — Scope: did other features drop? If yes, broader issue. Step 5 — External: holiday, competitor launch, news event? Step 6 — Segment: country, platform, user cohort, device. Write SQL to break it down. Step 7 — Propose 2-3 most likely hypotheses with data to test each.",source:"Meta DS Onsite — Type 2 metric investigation",difficulty:"Medium"}]},{week:5,title:"Week 5 — Rec Systems + LeetCode",days:"Days 29–30",color:"#10B981",checklistSections:[{heading:"Recommendation Systems",items:["Know 3 approaches: collaborative filtering, content-based, hybrid","Know CF: user-user (find similar users) vs item-item (find similar items) via cosine similarity","Know matrix factorization: SVD/ALS, latent factors represent hidden features, minimizes reconstruction error","Know cold start problem: new user (no history) → use demographics/onboarding. New item → use content features","Know implicit vs explicit feedback: clicks/streams are implicit (noisy), ratings are explicit (sparse)"]},{heading:"LeetCode Patterns",items:["Know BFS pattern: queue-based, level-by-level traversal","Know DFS pattern: stack-based or recursive, explore depth first","Know DP pattern: define state, base case, recurrence. Memoize with dict or array","Know two-pointer pattern for sorted arrays","Know hash map for O(1) lookup frequency counting"]}],derivationsToWrite:["Write cosine similarity formula: cos(A,B) = (A·B) / (‖A‖·‖B‖)","Write the collaborative filtering ALS objective: minimize Σ(rᵤᵢ − uᵤ·vᵢ)² + λ(‖uᵤ‖² + ‖vᵢ‖²)","Explain AUC-PR for recommendation evaluation: why better than accuracy for sparse data"],decayReminders:[{concept:"CF vs content-based tradeoffs",risk:"Low",next:"Strong — intuition stays well"},{concept:"Cold start solutions",risk:"Medium",next:"Easy to forget the specific strategies — review before Spotify/Airbnb interview"},{concept:"Matrix factorization objective",risk:"High",next:"High decay — write from memory if targeting Spotify/Netflix MLE"}],mockQuestions:[{q:"Design a song recommendation system for a new Spotify user with no listening history (cold start problem).",a:"Cold start for new user: (1) Onboarding flow — ask user to pick 5 favorite artists/genres. Use content-based filtering on those. (2) Demographic-based — use similar users (age, country, device) as proxy. (3) Popularity-based — recommend globally trending in their inferred genre. (4) Progressive personalization — within 30 mins of listening, start updating recommendations in real time. Evaluation: diversity, serendipity, click-through rate, skip rate.",source:"Spotify MLE interview — Exponent",difficulty:"Hard"},{q:"What is the difference between collaborative filtering and content-based filtering? When does each fail?",a:"CF: recommends based on similarity between users' behavior (no item features needed). Fails: cold start (new user/item), popularity bias (popular items dominate), data sparsity. Content-based: recommends similar items to what user liked, using item features. Fails: serendipity (always recommends same type), requires rich item metadata, filter bubble. Hybrid: combine both — most production systems do this (e.g., two-tower models).",source:"Classic RecSys interview",difficulty:"Medium"},{q:"LeetCode pattern: given a list of course prerequisites as [course, prerequisite] pairs, determine if you can complete all courses.",a:"Topological sort / cycle detection in directed graph. Build adjacency list. Use DFS with states: 0=unvisited, 1=visiting, 2=visited. If you reach a node in state 1 during DFS → cycle → return false. If all nodes reach state 2 → no cycle → return true. Time: O(V+E). This is LeetCode #207 (Course Schedule).",source:"Netflix/Reddit LeetCode interview (BFS/DFS)",difficulty:"Medium"},{q:"How would you evaluate a recommendation system? What metrics would you use offline vs online?",a:"Offline: Precision@k (fraction of top-k recommendations relevant), Recall@k, NDCG (normalized discounted cumulative gain — rewards relevant items ranked higher), MAP (mean average precision). Online: Click-through rate, watch/listen completion rate, skip rate, session length, revenue, long-term retention (not just next-click). Key: offline metrics often don't correlate with online results — always run A/B test before concluding a new model is better.",source:"Spotify DS / Netflix MLE interview",difficulty:"Medium"}]}];function Qs({q:e,qKey:t,accentColor:n}){const[i,r]=P.useState(!1),[a,o]=P.useState(null),[s,d]=P.useState(!1),[p,y]=P.useState(90),c=lc[e.co]||"#666",u=e.freq==="High",v=e.freq==="Medium",_=()=>{if(s){d(!1),y(90);return}d(!0);let b=90;const C=setInterval(()=>{b--,y(b),b<=0&&(clearInterval(C),d(!1),y(90))},1e3)};return l.jsx("div",{style:{marginBottom:10,border:"1px solid "+(u?"#10b981":"rgba(255,255,255,.07)"),borderLeft:"3px solid "+(u?"#10b981":v?m.yellow:"rgba(255,255,255,.15)"),borderRadius:8,background:"rgba(0,0,0,.25)"},children:l.jsxs("div",{style:{padding:"10px 12px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6,flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:c,background:c+"22",padding:"2px 7px",borderRadius:10},children:e.co}),u&&l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"#10b981",background:"#10b98122",padding:"2px 7px",borderRadius:10},children:"★ High"}),v&&l.jsx("span",{style:{fontSize:9,fontWeight:700,color:m.yellow,background:m.yellow+"22",padding:"2px 7px",borderRadius:10},children:"◆ Med"})]}),l.jsx("div",{style:{fontSize:12,color:m.text,lineHeight:1.55},children:e.q}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:8,flexWrap:"wrap",alignItems:"center"},children:[!i&&l.jsx("button",{onClick:_,style:{fontSize:10,color:s?m.red:m.dim,background:"transparent",border:"1px solid "+(s?m.red:"rgba(255,255,255,.1)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:s?"⏱ "+p+"s":"⏱ 90s"}),e.a&&l.jsx("button",{onClick:()=>r(b=>!b),style:{fontSize:10,color:i?n||m.purple:m.dim,background:"transparent",border:"1px solid "+(i?n||m.purple:"rgba(255,255,255,.12)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:i?"Hide ▲":"Show answer ▼"}),i&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>o("got"),style:{fontSize:10,fontWeight:700,color:a==="got"?m.green:m.dim,background:a==="got"?"rgba(16,185,129,.15)":"transparent",border:"1px solid "+(a==="got"?m.green:"rgba(255,255,255,.1)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:"✓ Got it"}),l.jsx("button",{onClick:()=>o("struggled"),style:{fontSize:10,fontWeight:700,color:a==="struggled"?m.red:m.dim,background:a==="struggled"?"rgba(239,68,68,.15)":"transparent",border:"1px solid "+(a==="struggled"?m.red:"rgba(255,255,255,.1)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:"✗ Struggled"})]})]}),i&&e.a&&l.jsx("div",{style:{marginTop:8,padding:"8px 10px",background:(n||m.purple)+"12",border:"1px solid "+(n||m.purple)+"30",borderRadius:6,fontSize:11,color:"#86efac",lineHeight:1.55,fontStyle:"italic"},children:e.a})]})})}const Bp={6:[{q:`年底找朋友内推了的，年初约上了第一轮店面。有一轮实验设计大家，主页多一个filter叫“work from home", 用户可以点这个filter找出更work remote的listing。success metric就是booking/visits。. Χ

. From 1point 3acres bbs
之后面试官会当场发你两个CSV files.
..
Dataset 1: Booking - columns: id_visitor, id_booking, timestamp
Dataset 2: Visit - columns: id_visitor, timestamp, country, assign (1 or 0)  
..
让你做一个join，再算个p value，整体不难。最后再画一个plot，任何形式都可以。`,a:"",co:"Airbnb",pos:"DS Inference",freq:""},{q:`为什么要跳槽
为什么airbnb
介绍一下最近的工作经验，分析，建模，causal哪个做的比较多
python sql的熟练程度
描述一下最有impact的项目
举一个例子在工作里如何体现了你的inclusiveness

流程问题：location，是否需要sponsor

介绍了面试，

1. HM
2. 48hours takehome
2. onsite： sql，experimentation， pres on take home and past project(q&a), 2 rounds culture fit interview`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`onsite一共5轮（如果过了后面还有2轮core value interview），感觉内容设计得还算合理，不会让人觉得流程特别长，或者想抱怨“为什么要考这种玩意”。


1. experience interview：一个简短的BQ + 一个有各种followup的case。BQ围绕一个之前的project展开，如何和stakeholder沟通等等。case分好几part，主要讲思路，不需要特别深入地描述method。一开始是挺典型的experiment，后面涉及到用分析prioritize projects，从causal的角度分析如何投入资源等等。case挺有意思，感觉真的像是工作中会碰到的问题，所以也没有唯一的正确答案，自圆其说即可。
2. presentation：recruiter在约时间前就会发interview prep材料，其中会有presentation的题目。我拿到`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""}],8:[{q:`发个最近面的onsite，职位是在inference下的，感觉非常注重causal inference，
据说他们家DS最近改革，没有analytics track了，DS下面现在就是inference和algo
然后他们说感觉现在ds更独立一些，不需要dedicated support一个product area？听起来更自由一些？有没有了解的小伙伴来说一说. ----

整体experience一般，面试官一水PhD，搞得我觉得像去PhD答辩
所有人都不是特别热情比较passive （可能我不是他们的top candidate的原因）
整体感觉非常的academia，HM竟然是之前什么学校的tenure track professor跑来，也是很离奇了.

第一面experimentation
share screen，python处理数据，分析一个实验结果，要画图support分析结`,a:"",co:"Airbnb",pos:"DS Inference",freq:""},{q:`在线评估。两个问题。用于数据科学角色。测试 11。
第一个问题，sql with group 和 join and order。第二个问题，MAXPATHSUM 用于具有两个特定起点的网格。你有 90 分钟`,a:"sql很简单。他们提供了两个数据表。那么您应该加入它们，对列进行分组，排序并包括零计数",co:"Airbnb",pos:"MLE",freq:""},{q:`60 min，一个ds面试官
Recruiter会给一些tips，介绍这轮考什么
1. technical part: 几道非常简单的sql，加一道R/Python（找中位数）.1point3acres
2. case study
  (1) How do you measure the success of customer service product?
First clarified whether it's a new feature released that needs to be measured or generally measure customer service product line. Then I gave some metrics.
  (2) How would you improve representation’s platform?
List a `,a:`关于tech screen product的一些想法想跟大家交流一下，轻拍
  (1) How do you measure the success of customer service product?
product 自己本身的goal 就是帮助host 或者 customer解决问题，business goal 有了好的customer service，对user experience，更多的booking/revenue会有帮助。metrics：# tickets created per user per day or week， # of tickets solved / # of`,co:"Airbnb",pos:"DS Analytics",freq:""},{q:`2道SQL（how many US bookings per day, how many US listings got booked within 30days of creation).
1道python（算median）
3道case (怎么measure customer service team的progress；如果tickets涨了10%怎么investigate；如果我们在某个region launch了一个change，然后看到那个region的requests/user降了5%，要不要global launch）


. check 1point3acres for more.
小哥全程无比quiet，我说什么他都说cool,good，完全无followup
开场没有自我介绍，也没让我自我介绍
然后提前20分钟就结束提问了。。也太tm奇怪了。。。
最后我问他不喜欢air`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`Table 1 - Bookings
date, reservation id, listing id
. ----
Table 2 - Listing. Waral dи,
user id, listing id, listing created time, country

Question 1: write query to show total reservation in US by date

Question 2: write query to find the first-time booking for each listing in US
Question 3: calculate week over week difference for first-time booking in US`,a:"",co:"Airbnb",pos:"BA",freq:""},{q:`美国官网海投的北京DA岗位，第一轮是跟HR面，简单介绍了下岗位和问了些简历上的内容。.1point3acres
第二轮是SQL面，用的是HackerRank，可以随时run，但是没有expected resul table，30分钟三道题，时间还是比较紧张的，时间管理非常重要！！楼主就是挂在时间没管理好。有时候虽然结果对了，但是多了不需要的column也会说你答案错误（比如某些calculated field），我就是因为这个问题在第一题上拖了比较久的时间，导致最后没做完。 个人建议，如果时间紧迫而且确认自己结果没问题，不必纠结系统给的对和错。第三题没时间做完，跟面试官说了一下自己的思路，但是感觉凉凉了。面试官总体感觉都是比较礼貌，也很守时 点赞！
记得一部分原题，希望有用 （三题table一样的）
Table bookings:
-ds        .1point3acres
-id_`,a:"",co:"Airbnb",pos:"BA",freq:""},{q:`1. SQL

给了一个 booking 和 listing属性 (country之类的) 的表格，要求SQL可以run

- US每天booking的数量
- 每天的listing的第一个booking, count by date
- 每天的listing的第一个booking, count by date 每周的变化
.

2. Product

问题是现在有一个新program 目标是improve user customer service experience

- 有什么metrics来测量user customer experience
- customer service ticket变高了，有什么可能的原因
- 如果要减少tickets, 怎么知道减少多少才够`,a:`Select C.count(id_listing) from
(select A.*, B.first_date
from bookings as A
left join
(select id_listing, min(date) as first_date from bookings
group by id_listing) as B
on A.id_listing=B.id_listing) as C.
where date != first_date
group by date;
-baidu 1point3acres
####assuming the derived table fr`,co:"Airbnb",pos:"DS Analytics",freq:""},{q:`Airbnb家发的tech测试题，第一道是case，第二道是SQL。这里造福大家，就简单粗暴的把题目贴上来吧。求米~
Table介绍。原table在hr共享的Excel里，columns就是很常规的那些。.1point3acres
users: this table contains information about ALL Airbnb users. ----
listings: listings refer to the properties available on Airbnb.
reservations: each line represents a different reservation made on Airbnb..google  и
reviews: this table contains information about the reviews that hav`,a:"",co:"Airbnb",pos:"BA",freq:""},{q:"Airbnb is a two sided marketplace which matches guests to hosts. The booking flow at Airbnb is as follows: a guest finds an available room (listing) that they like, and then they contact the host. Once the guest finds a listing they are interested in, there are three ways to send the host an inquiry: ‘contact_me’, ‘book_it’, or ‘instant_book’ (detailed at the bottom of this document). Upon receivi",a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`周五下午准时收到题目，给了4天，但recruiter说其实8小时就能做完。后来做了下觉得只要把思路准备好了，8小时确实能做完，coding不难，我花了很多时间想present形式。

我面的是analytics track。一道题目，很多数据，比如request reply book time stamp其他characteristics， 然后要identify key metrics，目的是improve booking rate/matching process，然后要提各种business recommendation。具体题目我就不方便说的太详细了，但是我拿到题目当晚找了做ML的DS聊思路，第二天就按照那个思路把数据都analyze了，晚上出去吃饭，偶遇朋友及朋友的朋友（一个product manager），又聊了一下，发现PM的思路完全和ML的思路不同，不过按照我做consul`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`昂赛- ..
我去昂赛之前，他们网站上中国组的坑就被拿下来了，不知道什么情况。
1- presentation，在一个有沙发的会议室。 按要求，先自我介绍，然后讲个过去的相关的project ，再把作业再讲一遍。 来听presentation的人不是之前review作业的人，所以内容应该可以改动建议昂赛之前再好好考虑一下自己的metric们，多想想细节。 我就是没有想很多细节，也纠结很久要不要改动之前的slides。 过程中发现有些ppt有错的地方，尴尬。 全程很interactive，三个人来面，一个HM 两个DS。 过程说是会被录像。。. ----
. 1point 3acres
2- 接下来来到1-1 小屋。先和partner国人大哥聊天，大哥人很和善。 了解了一下过去的工作经历，聊了一下他们这个组的日常。然后问我觉得自己的经历和他们有什么交集不。
然后是国人小哥吃饭，全程中文，也很`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:"nference 分为两部分，第一部分是一个experiment，要求guest写长message，看这个event对于airbnb booking有什么显著影响。第二部分是想看host回复时间，然后根据这个设计一个实验。反馈是对于实验设计，要完整叙述sizing design 然后如何分析。analytics比较宽泛，给了一个地方的booking data，比如request reply book time stamp其他characteristics， 然后问举例说有哪些key metrics，然后要提各种business recommendation，增加这个地方的booking。反馈是要突出data cleaning和business sense。",a:"",co:"Airbnb",pos:"DS Analytics",freq:""}],13:[{q:`去年12月面的airbnb 电话面。题目是LeetCode 341。
要求1: 要能在iterate的过程中删除元素。比如调用一次next，再调用一次delete应该把第一个元素从原来的数据结构中删掉。但并不是每次next都会跟着一个delete操作。
要求2: 不使用额外空间。`,a:"",co:"Airbnb",pos:"MLE",freq:""},{q:`店面：具体题目不记得了，work scheduler，地里的面经有见过，有点像LC meeting rooms, 用minHeap做 LeetCode 1557

VO:
ML experience:
这一轮就是project deep dive, 既考察technical depth 又考察behavior，准备一个project, 详细讨论从头到尾怎么做的，多少人怎么分工，challenge，impact，trade-off, timeline 等等

MLSD1:
Airbnb has a list of problematic listings surfaced by user complaints, e.g., low quality, poor safety, fraudulent. They are already removed but their owners keep `,a:"",co:"Airbnb",pos:"MLE",freq:""},{q:`题目是很标准的implement queque with limited size。地里很多帖子都提到。
开始讨论的时候，我一步一步按照想法(比如linked list, circular linked list, double linked list）等等思路介绍过去。
感觉面试官要求的是要最优解法。所以开始花了一部分时间讨论应该用什么方法。`,a:"",co:"Airbnb",pos:"MLE",freq:""},{q:`技术面都是常规题：店面：外星人字典
VO 4轮技术：
算法题：滑动拼图（凄凄伞）leetcode 773
经验：聊简历
机器学习1: 价格预测系统
机器学习2: 推荐和排序系统

感受最差的可能就是2轮公司文化面试中的一轮。
问题比如：
你为什么选择我们公司？
除了专业，还有什么可以激发你强烈兴趣？
无论我的回答是什么，面试官没有反应也没有任何表情变化，感觉对方很累的样子。

整体感受：一般。大多面试官不是很热情，基本就是没啥表情。技术面试不是最难，但是有感觉对方机器学习水平在大厂中不是最强的（可能只是我的两个面试官）。`,a:"",co:"Airbnb",pos:"MLE",freq:""},{q:`刷题网leetcode 1235类似，用dp做了，需要compile，最后de完bug跑完一个test。
HR给feedback说给solution太快没有first principle...需要加面`,a:"",co:"Airbnb",pos:"MLE",freq:""},{q:`第一轮： 国人小姐姐，先让写一个函数check Palindrome， 然后写 Palindrome Pairs 那题。test全过，但是说code不够干净，于是几天后第二轮
第二轮：国人小哥哥，人挺nice，上来就说直接写题不然来不及。 那道联通kingdom的题目。之前看到但是没写，主要是题意不是很理解。虽然知道DFS肯定能解，但是光弄清楚分数怎么算花了挺久。虽然最后test也全过了，但是估计这么磕绊挂也在情理之中。`,a:"",co:"Airbnb",pos:"MLE",freq:""},{q:`店面：menu order ， 就是target sum变形
昂塞4轮
1. practical ml:设计搜索 如何排序
2. k stop flight
3. experience
4. 一个袋子里有R个红色糖果W个白色糖果，每次取一个糖果，如果取到红色就吃掉，取到白色就放回袋里，但如果下一次再取到白色那就吃掉。求袋里最后剩下一个糖果为红色的机率。dp在家想过，不大确定状态转移方程，我当时觉得a家肯定注重正确性，万一错了万劫不复，于是临机一动，临时写了个monte carlo simulation 要求输出95%confidence level 的 range

果然要求加面coding:
2轮culture : 主要准备点做公益的例子就可以应付了
1轮coding: user preference ,用topological sort即可。`,a:"",co:"Airbnb",pos:"MLE",freq:""},{q:`第一题是一个dfs 的题目，类似于找tree 的第几层的node 有啥第二题是 分析 二分复杂度
第三题是 分析 一个tensor 的shape是多少`,a:"",co:"Netflix",pos:"ML Intern",freq:""}],14:[{q:`年底找朋友内推了的，年初约上了第一轮店面。有一轮实验设计大家，主页多一个filter叫“work from home", 用户可以点这个filter找出更work remote的listing。success metric就是booking/visits。. Χ

. From 1point 3acres bbs
之后面试官会当场发你两个CSV files.
..
Dataset 1: Booking - columns: id_visitor, id_booking, timestamp
Dataset 2: Visit - columns: id_visitor, timestamp, country, assign (1 or 0)  
..
让你做一个join，再算个p value，整体不难。最后再画一个plot，任何形式都可以。`,a:"",co:"Airbnb",pos:"DS Inference",freq:""}],23:[{q:`what brings you to airbnb?/why airbnb?
·       what can you teach your co-workers after you getin?
·       describe a person whom you admire most.
·       describe your experience with Airbnb
·       where have you been to?
·       what will you do if you win a lottery such asPowerball?
·       what is the biggest fear in your life?
·       how do describe Airbnb to a people back to 2003?
·       `,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`给了一个take home challenge, 48小时内交上去。要求交你的code和一份20分钟内能理解的summary。跟recruiter联系好时间然后在定好的时候发给你。工具语言不限，说明不要写自己的名字和任何identifying information。看到这条感觉不错，匿名改卷，是个meritocratic的地方。

题目给了数据，要求做AB testing experiment result analysis, 和predictive model。感觉没什么捷径，就是多练习，多感觉数据分析。结果太好的时候要多提问题。Quora上有很多好的资源。predictive model也不需要做的太深，因为时间限制摆在哪。我主要抓住做visualization和解释我为什么要这么做，这个结果有什么意义，公司怎么使用。`,a:"",co:"Airbnb",pos:"DS Inference",freq:""},{q:`客人可以在A家申请主人的家住，但主人可以拒绝。A家想增加客人申请到住家的概率，所以做一个实验要求被抽中的人写一段至少140字的话去描述为何想住在选中的主人的家。50%的人在实验组，50%的人在控制组。问：A家应不应该将此实验推广到全部客人的申请上。 能不能提一些建议来衡量未来应不应该要求全部申请者都写一段至少140字的话。要求至少要有一个数据可视化。还要求指出真实数据与任务文档中对数据描述有差异的地方。

关键变量有： 申请人id, 主人id, 申请人申请时的绝对时间， 主人过了多久才接受。
. From 1point 3acres bbs
楼主无在业界呆过，不知道这就是A/B testing，一开始就想用logit regression去estimate要求写140字对被主人家接受的概率有无显著影响，然后发现控制组里的人也有写任意长度的描述，发现行不通。后来网上找了一下才知道这是假设检验`,a:"",co:"Airbnb",pos:"DS Inference",freq:""},{q:"大概是一个predict booking rate的，lz用的最简单的logistic regression，因为interpretability。第二题和第三题是个A/B test的问题，问你有一个新的规定要不要announce，目标要提高number of bookings。然后让你设计怎么sample，衡量什么指标，how long should you run your experience，等等。。",a:"",co:"Airbnb",pos:"DS Inference",freq:""},{q:`2. TPS1: 第一轮店面是个澳洲PhD小哥，主要集中在：
Core statistical foundation questions
Advanced topics in randomized experiments or observational studies（二选一）
我选择了实验，整个一小时基于一个case问实验细节相关问题，问得非常细，包括并不限于：定义metrics /  network effect / multivariate testing / hte / sutva / ...
【面完过两个小时通知过了约第二轮店面】
. ----
        3. TPS2: 这轮是中国PhD小姐姐（夸一句人超好，一直在引导我）：.
Case：与第一轮相似，包括定metrics 设计实验等
Coding：两道SQL（medium难度）+ 一道Python算法题，easy难度,`,a:"想请问一下如果在工作中不怎么接触到causal inference的话，是怎么准备这些面试题的呀？我看了很多Netflix自己的tech blog，了解他们平常用什么方法解决什么问题，然后再针对性地学习, 请问楼主怎么准备的实验面试部分？ 主要看面经和问ChatGPT，gpt在这方面还是很好用的",co:"Netflix",pos:"L4 DS",freq:""}],24:[{q:`第二个是technical screening 面试官是senior ds，面试内容围绕1）sql 考了window function，python 都是data manipulation. ----
2）ab test ；
3）metrics;  ab test：launch新feature你怎么设计实验，在abtest里需要注意什么，如果结果🈶问题怎么debug etc. Waral dи,
metrics：ab test里你会用什么metrics；如何和xfn partner align metrics definition etc`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`tech 面60min，说会有python，sql， 和关于ab testing stats & modeling 的问题。


sql 就是地里的题目，也是常规题目（我司面试也有类似题，问的问题和我面别人一样 哈哈）。 给了两张表， 表1， user_id, test_group, first_exposed_time. 表2：dt， stream time， platform。 问题是：在某一platform上测试一个ranking feature，goal 是提高streaming time， 有下面的data， 怎么evaluate。答：可以看一下average streaming time， 但还是要做ab testing 看是不是statisical significant。 sql需要注意的是要用left join keep all user in test groups。 `,a:"",co:"Spotify",pos:"DS",freq:""},{q:`第一轮life story：简单聊聊个人经历，为什么选他们家，职业目标。

第二轮pair programming：地里出现过的CTR，主要看对dictionary的熟练度. 1）找 bug； 计算里面有个错误的variable，只有一个bug。格式就是原来只有一个product，现在有多个。 2）根据要求改格式；3）用unit test测试

第三轮 三场on site: 1）technical deep dive: 讲讲自己的项目；2）sql: 普通group by, partition by; 3) case study：如何设计metrics，设计ml，设计AB test。`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`5.1号 hr reach out但是说下一周他pto，我们约了5.9号 聊了半小时，基本就是问问你的background，相关的项目，对他家的了解，motivation什么的
- 5.16号 tech面，45mins，一个超级nice的中国小哥。面试前领英搜他的时候发现我们是connection，后来面完发了个thank you note。本来说要考sql， python和stats，但是结果就考了sql和python。sql就是地里原题，给两个table，streaming table和ab test table，先问有什么insight，然后说他们改变了playlist的歌曲排列的algorithm，
想要test这个变化，问怎么定义metric。然后写sql query求metrics （avg streaming time）。这两个table其实有点tricky的地方，记得ab `,a:`不是的，show group的user本身就是可以选择要不要stream，你不能因为他们不听，就把他们排出，这样就是selection bias，你就成了compare show group里听音乐的人跟control听音乐的人，这叫compliance bias。这些show group 听音乐的人很可能是忠实用户，见到新的feature就马上使用，control那些听音乐的人可能就是随便听听。这样你的比较群就不对了。
但是我也有一样的问题，那就是群主为什么用了subquery， 而不是一个case when 或者sum（）就直接ignore null value啊？`,co:"Spotify",pos:"DS Music Partnership",freq:""},{q:`Tech Screen: 都是地里老题，numpy/pandas，stream SQL, A/B test, 没有leetcode。SQL有两个follow up, 都是基础题，CTE/Window function都不用写。面完第二天就说next step了。跟recruiter 约了onsite之前的call，反馈说不错，但是他们家好像挺看工作年限的，DS需要3年经验，associate DS要求就低一些，不过也要看面试表现。recruiter表示股票计算比较复杂onsite前就share了一个slide讲股票的。
.1point3acres
Takehome: 是一个playlist相关的数据，问题比较open end，有general的问题也有组specific的问题， 要做好还是有点花时间的
. Waral dи,
Onsite: 一轮director面，一轮DS，一轮PM，一轮`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`1. 地里老题Python/R 就是给一个data file， 考manipulation。要求创建一个新的column， 把desktop的stream time改变，其他数值要求保证不变。.
注意code是需要编译并且能run出正确结果的， 面试官会检查结果是否正确。所以如果有什么typo，bug都需要能够当场修正

2. SQL题
也是地里的， 两个table， 一个有userid和abtest bucket， 另一个是user behavior data。. http://1point3acres.com/
1）用这些data能回答哪些， open question。感觉主要考你是否有相关经验. 1point 3 acres
2）写出query来看不同group的avg stream time， 以及怎么和product manager解释（t test）3）追问了 如果计算出两个`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`round 1: HM - there is also HM discussion in phone screening round. This round is to have more discussion with HM. Main goal is to make sure that both sides are aligned of this positions. And the HM will access further your past experience.
round 2: take home challenge presentation. A take home challenge takes ~7-10 hours based on HR. 这个presentation主要考核你把数据变成insights并且present给stakeholders的能力。audie`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`Python:.google  и
1) 算desktop的total stream
just use np.where to specifiy the condition
2) 新创一个column, 把desktop stream减半 .
same method, using np.where
3) 把第二题写成function

根据不同platform减少stream次数 e.g desktop 减半, tablet 减少 30% 以此类推
def function_name(platform, reduce, df) <-- 用这三个parameter
一样用np.where; SQL:
给了ab_bucket 跟 streams 两个table.
1) 用这两个table能回答什么问题
2) 计算control 跟 variant 的 average stream time -`,a:"",co:"Spotify",pos:"Associate Data Analyst",freq:""},{q:`这个HR问了我超级多问题。从AB test经验到modeling经验还有团队合作的经验。感觉我们的对话像个快问快答，满满地说了半个小时。但他并没有特别深入地问。感觉就是有个list of questions给他问的感觉。语速极快，像药物广告说到副作用那种语速...

Tech screen：
四大块，Python，SQ L，AB test和linear regression. 1point 3 acres
Python是个column manipulation的题，SQL是User table和stream table。好像Spotify这两题都特别标准。
我SQL有小错，但是interviewer很chill，说不重要。

AB test和modeling的问题重点都是怎么跟non tech audience解释。解释group means解释p value这种。`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`Python的部分就是用numpy和pandas
1. 如何create一个新的column，fill column with conditional values (use np.where).
2. 如何把让第一题里面的conditions flexible to changes (写一个function，然后np.vectorize)
3. 一个很random的follow up，我有点没听懂（欧洲公司口音都令人伤心），大概是如何让上面那个function更flexible，于是我用了dictionary

SQL的部分就是我挂的部分... 也怪lz自己没好好再多刷刷题了，建议各位面试前一天还是多写写SQL练练手感
这道题就是地里之前的题，有两个表，一个是ab_buckets，ab_buckets里面有user_id, ab_buckets, first_expose_date。一个`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`一共三轮面试。第一轮和HR打电话，然后是两轮背靠背的phone interview, 第一个和HM聊经历，第二个和team member tech screen. spotify的 tech screen 挺简单的，一道python(任何会写if elif的人都会过很简单）, 一道sql也比较简单，最后一个问题记得是开放性的，给你几个columns, 问你可以想出用这些看什么insights, 想几个use case就行，没有标准答案。

一直到onsite都很顺利。tech screen 后一天 recruiter很快发邮件约onsite, 然后发了一个data challenge一个礼拜时间做. onsite 的时候一轮就是做data challenge presentation。然后一轮business case, 还有一轮tech case, 剩下就是和HM, stakeholde`,a:"",co:"Spotify",pos:"DS",freq:""},{q:`eng manager 两轮：
- how to prioritize competing engr requests (one team wants you to do this, the other wants that, etc)
- walk me thru your resume. deep dive on 1st bullet point.
- Reddit 要推出一个AI chat box（功能和search重叠）。如何设计a/b test。会有哪些impacts，要看哪些metrics。. 1point 3 acres
- 在这个chat box launch之后，公司要在chat里放广告（我面的是ads组），如何设计a/b test。这里有个budget split的概念。
-baidu 1point3acres
DS HM 一轮：
我们round 1就聊过，互相感觉不错`,a:`假设control有一个ad slot，treatment有两个。treatment花钱的速度一定比control要快。假设简单a/b test的结果是treatment的ads revenue多了30%，结论就是treatment可以increase monetization by 30%吗？答案是30%应该是inflated estimate，因为treatment抢了control的budget。

最好的solution是budget split capability http://link.1point3acres.com/?url=https%3A%2F%2Fwww.linkedi`,co:"Reddit",pos:"Sr. DS Ads",freq:""},{q:`一轮电面是直接跟hiring manager聊的 ..
职位是senior DS 偏产品类，大部分都是一些general BQ
最开始是面试官介绍自己跟组里的情况 很详细-baidu 1point3acres
然后让我介绍自己

tell me about your background? why you want this position?. 1point3acres
. Χ
do you prefer analytics or modeling track?

what motivates you to find a new job?

tell me an a/b test experimention you did? how did you decide sample size?

tell me a time you compromise to your stakeholder`,a:"",co:"Reddit",pos:"Sr. Product DS",freq:""},{q:`现在市场上竞争还是比较激烈，特别是一些senior的岗位。不仅要会，还要擅长（做的又对又快，还要优化的结果），你写的每一步code，对方还是会问你原因，为什么你做A 而不是B.
竞争对手都很强。有的公司是和他们的bar比，有的是和其他的candidate比较。大家加油。

除了attachment的4道sql题目。
还被问到了，最喜欢的产品是什么，how to define the success of the product, what metrics would you use to measure, how would you prioritize those metrics. AB testing related questions.

总共1个小时，被问到的问题还是不少的。好好准备吧，同志们。不要忘了给大米哦。=）. Waral dи,
Codewriting




Instr`,a:"",co:"Reddit",pos:"Sr. DS",freq:""},{q:`onsite一共四轮，
第一轮是Product manager，大概问了问以前的project，着重强调了AB Testing里的bias问题和是否需要做follow up的test
第二轮是隔壁组的analyst测试SQL
有一个Event table，大概记录了每一个user的event和timestamp，. http://1point3acres.com/
Q1: CVR，windows function + Case When就可以
Q2: 求出本月CVR最高的人，每一天的登录次数
Q3: 有点trick，是求每一天的CVR和一周之前CVR的关系，比如这周一的CVR是5%，上周一的CVR是3%，5%/3%等于1.666第三轮是Hire Manager，闲聊为主，她是语言学专业的，但是我觉得人家不是很喜欢我。。。
中间一轮是吃饭，伙食一般，尬聊了30分钟
第四轮是老大，case是有`,a:"",co:"Reddit",pos:"Sr. DA Ads",freq:""},{q:"HM: 问了很多ab testing的问题 非常详细: 答得很不好 一开始节奏就乱了... 还问了一些ml问题 (logistic assumption;",a:"",co:"Expedia",pos:"DS Product Analytics",freq:""},{q:`第一轮：一个Business Intelligence Analyst，内容是做一个Case Study, 面试之前提供了数据，要求是根据提供的数据进行分析并给出一些意见，在面试的时候present，大概15min左右。
Present结束后根据你的内容问一下问题，然后是一些behaviour question, 问一些你曾经的project经历以及中间遇到的问题。

第二轮：DSA的Director. 第一轮说的我口干舌燥，后面这个感觉精力被榨干，所以回答的没第一轮好。
主要问了一个和travel coupon有关的问题，问你怎么收集数据，然后怎么根据数据设计实验，AB Test什么的，然后怎么test你的实验结果。.1point3acres
然后又追加了一些Behavior Question. .`,a:"",co:"Expedia",pos:"DSA",freq:""},{q:`一轮, 和HM1小时, 白人女性, 比较nice

最骄傲的经历, 说了一个automation节约了多少FTE的的经历. follow up实现的逻辑, 涉及到的数据, 多少个人在使用我这个automation, 我这个automation在业务里会不会出现某某问题, 出现了问题怎么解决
用Data创造价值的经历, 说了一个machine learning的经历. 问有没有deployment, 有什么business impact. HM没理解我这个项目, follow up了很多细节.
给表名和列名, 在ZOOM的聊天窗口里写SQL, 用了window function, 印象中非常简单
Q&A环节, 楼主提了过多的问题HM没耐心了强行结束了这个环节...


二轮, Loop, 共四小轮
印度女性面试官, 考A/B Testing, 给你看Expedia官网搜索关键词之后的酒店排名`,a:"",co:"Expedia",pos:"DS",freq:""},{q:`sql: 1.count customer type, brand name 2022/01
做的过程中面试人问了Left join /inner join的区别
2.bookingamount every month and previous month

输入类似：. 1point3acres
jan 100 NA NA
feb 150 jan 100; statistics: 1.explain p value
2.90% confidence means?
3.ab test 如何选group`,a:"",co:"Expedia",pos:"DS",freq:""},{q:`网上海投后HR联系, hiring mgr店面面筋已发. 店面一周后收到在线表演邀请. VO总共4轮, 3个同组的sr/lead MLE和一个stakeholder组的sr DS. Coding和西桐射击都是在hackerrank内进行. 目前还在等结果, 发面筋攒人品求加米!
VO1 - Sr DS (Stakeholder, Case, 30mins)
Intro; BQs; 简历项目细节; Mini-case - 模型里有一个关于单个账户下各种观看设备时长的feature. 讨论用每种设备时长占比% vs 实际raw小时数的优缺点. 由此发散讨论granularity, data structure/table schema design, 还有某类设备数据从某时间节点后不再存在的影响. 面试官晚了一些并且case相关表格现做所以实际用时超过了30分钟, 我也就基本没有什么Q&A的时`,a:"",co:"Disney",pos:"Sr. MLE",freq:""}],27:[{q:`Onsite
签了NDA，考题不说太具体，说些tips和感受吧。另外，Recruiter会给个pdf，介绍每一轮具体考什么。
1. Experience Interview (45 minutes): HM 会先介绍下自己的team，然后就让你讲讲一个项目，这个项目不要和后面presentation的项目重复了，因为HM大概率会参加presentation。HM会问得很详细，为什么要做xxx，为什么不做xxx，把business logic和data insights挖得很细。这轮的特点是如果项目选太简单了的话，没什么好讲的；选复杂了的话，解释domain knowledge就要花很多功夫。注意表达要清晰有条理，不要太啰嗦，但要把逻辑讲明白。我的HM特别注重business impact，特别是money value，你说了engagement metrics (DAU/MAU之类的）没用`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`通过一个线上系统下载prompt和data，需要在72小时内提交。说是expect会花4-6小时（所以4-6小时是DS类take home challenge约定俗成的通识了么？）
题目是通过一个search result (click, book等用户行为) 的dataset，来做一个ranking / recommender system的model。-baidu 1point3acres
无奈楼主第一次做ranking model，花了好长时间学习ranking model的逻辑和evaluation metric。
最后交了一个巨长的iPython notebook。`,a:"",co:"Airbnb",pos:"DS Algo",freq:""},{q:`Take home 是一个data challenge让你分析怎么matching supply and demand to grow bookings
没有什么需要建模的，基本上问你想看哪些metrics，画图分析`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`空气床面经不多, 分享一下经验, 7月的onsite

Presentation环节：
有点紧张两个abc問很deep, 准备不够

Metrics 环节：
Q1: Avg. price 是不是一个好的KPI? Why?
Q2:  Propose a metric to measure how well the platform prevent fraud
Q2b: How to evaluate success of adding credit card verfication step.

Experience 环节：
国人大哥的case，如何increase booking, very open ended, 從supply/demand兩边下手


Behavioral 环节：
Enginee，特别nice，很輕鬆

结果跪了，估计是我的presentation沒有很deep，加上`,a:"",co:"Airbnb",pos:"DS Aanlytics",freq:""},{q:`1. HR pick up，简单介绍，逛了下HQ，楼设计的是不错。
2. 3 两轮behavior，没啥可说的，但请务必极其重视！重要的事情所三遍。
4. ML+coding，coding忘记了但是非常简单，medium肯定不是easy的难度，ML基本就是推logistics regression的梯度，loss用cross entropy比较好。. From 1point 3acres bbs
5. Presentation，go through了take home challange，同时讲了自己做的一个项目，全程manager微笑不说话，其他组员问了几个问题。
6. ML，如果设计一个新功能，满足客户是family的需求，怎么做，加什么feature，如何获取label，如何measure performance。
7. manager轮，behavior+design，假如你从se`,a:`感谢楼主分享！请问推logistics regression的梯度是说要描述一下如何implement logistics regression吗？不 ...

对，明确loss后就是推gradient公式 然后写了SGD的伪代码`,co:"Airbnb",pos:"DS Algo",freq:""},{q:`第一轮是data challenge 做了三天
第一次做data challenge，因为没有经验就网搜参考了这个帖子https://stellarpeers.com/blog/metrics-airbnb-experiences-feature/ 做的

就是参考那个帖子做的。。。完全没有用fancy 的任何metrics，就是最后一天报告弄的好看了一点

后面有个朋友也是同样的数据，他用了特别复杂的metrics 反而挂了。。。`,a:"https://stellarpeers.com/case-collection/what-metrics-would-you-use-for-airbnbs-experiences-feature/",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`分享一个空起床的面经 空气床家的面试跟其他家很不一样 这次去一共六轮

1. presentation

讲一下之前做的project 和data challenge 的project

2. hm 面

问了下之前和team 工作的经验和set up data pipeline 的经验 . 1point 3 acres

3. pm

讲一个自己做的project 然后做一个case study 是关于身份验证的user flow 怎么改进user flow 定义metrics

4. culture fit *2

问了一些过去经历和天马行空的问题

5. metrics

估计是挂在这一轮了 半个小时做了三个case 第一个是给了一个metrics avg days taken for host to respond 问好不好怎么改进  第二个是怎么衡量search function`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`技术面试只有一个，在白板上写写画画就好了，product sense面试有两个，但是都不太难，我狠狠的研究了他们过去的LinkedIn，聊的不错。Core Functional 面试，要熟读core values，看地里的总结题目，把从小到大的故事（真的是故事，不夸张，全是personal的故事想一次，结合core value来答就好了）。还好我过去做过不少志愿活动和社团活动在单位也是积极活跃，回答的很顺利，觉得自己简直就是AirBnB的role model。想着真的很开心，能去一个和自己生活目标match的公司。（不过还没有决定去不去）。. From 1point 3acres bbs
还有一个面试就是和HM，也是是product sense和behavior结合的问题，虽然当时答的一般，不过过了。据说HM还很满意。`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`一开始想复杂了感觉，后来觉得好像也没有那么复杂。总之尽全力写完，没有太强的信心，哎，等着吧。. http://1point3acres.com/
增长airbnb booking rate，和之前地里面的不知道是不是一种类型的题目。
总之你需要分析metrics, booking rate，画表，实验。. Waral dи,
最后需要创建一个pdf 把你的所有code，分析过程，和一个presentation 的slides 放一起`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:"作业内容就是地里有的 -  给个城市，让你分析分析用什么metric可以按时间track bookings。 地里大神说过的了- 不要想太多，好好做metric 和insights就好了。",a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`资料：就是大家可以想像到的某个城市的airbnb接洽和订房资料
（airbnb可以先谘询房东不订房，所以会有谘询接洽的纪录）
目标：增加订房率
请你根据资料提出重要的metrics和建议action items，然後把你的分析metrics和建议做成slides，简报对象是高管，简报长度要在8页之内
最後也要附上你分析时用过的代码，无论结果有没有用上，大体是要考察怎麽解一个问题吧`,a:"",co:"Airbnb",pos:"DS Analytics",freq:""},{q:`代码是KV store，大家之前发过。自认为答的很好。test case，follow up都写的比较顺。（MLE的代码轮和SDE是一样的）


两轮SD是经典推荐系统和relisting problem都是地理的，我把所有面经题都准备过，自认为准备的很充分，当时回答的时候，推荐系统答的比较好，各种问题都回答上来了。面试官问了很多问题。
第二轮比较坑，一开始上来就要share screen，答的时候感觉面试官有自己心里的答案，然后如果我没说他心坎儿，就卡在那里。问了改downstream service的evaluation output会怎么影响online metric，这个卡了一会儿，最后我问了他他怎么想的，达成共识，然后继续了。还问如何做geohash。我心想这不是SDE的SD题吗，面试时候很紧张，不过后来还是答出来了。后面的问题也都答上来了。


注意SD本身是45分钟，最后这两`,a:"",co:"Airbnb",pos:"MLE",freq:""}],29:[{q:"设计一个recommendation system，楼主用的是classification + ranking的方法，同时介绍了自己加了什么feature，另外讨论了一下model能用在什么地方等等。",a:"",co:"Airbnb",pos:"DS Algo",freq:""},{q:`有72个小时做题，类似一个recommendation system，我纠结了很久具体的methodology，是做成ranking还是recommendation。我最后选了ranking，但还是不太会处理，LTR这种算法以前从来没接触过。如果给一个比较标准的regression或者classification problem很可能会好一点，希望下次好运。
.
做完之后差不多三天收到系统发的拒信，还是很伤心的，毕竟花了很多时间。。。`,a:"",co:"Airbnb",pos:"DS Algo",freq:""},{q:`一个senior MLE，google hangout。
我介绍了自己之后，就开始一个ML case study，设计一个主页的歌曲推荐系统。
说好的根据我的经历问问题呢QAQ……我自己从来没上手做过推荐系统，面试前几天突击读paper，blog，看知乎科普和各种youtube视频，熟悉推荐系统的概念。面试的时候，大概框架我还是能答出来，但有些技术细节还是不太清楚。面试官一直guide我从不同角度思考。
问了怎么决定用feature based还是collaborative filtering，如果有multiple label怎么办，new user怎么办，new track怎么办。
面到最后，我有点stuck，跟他说，你我点hint吧。他就开始在白板上画pipeline，然后给我讲他们是怎么解决这个问题的，受益匪浅。
一个小时的面试大概35分钟他就问完问题了，之后20多分钟都是我在问问`,a:"",co:"Spotify",pos:"MLE",freq:""},{q:`coding：地里那个modlist的题，写了一问半，没时间了（后来问了hr挂在这一环，无语）
ml sd：视频推荐 疯狂问infra怎么搞，logging怎么做，面试官一脸的冷漠。。。
ml 八股：给了一个x一个y，问怎么建模啥啥的， 然后给了一个图（里面两个分布），看图说话，中间穿插各种m八股，最后一些cold start问题
bq：有没有失败经历，成功经历之类的`,a:"",co:"Reddit",pos:"MLE",freq:""},{q:`2轮ml系统设计面试
1. 和一个tl的大哥先聊天 然后给一个设计题 （这轮挂了）
论坛上有很多搞笑图片 （搞笑的图片 上面加了一些文字），问如何improve search index 能够使得google搜索某个keyword就可以搜的到reddit的
楼主的想法： 设计的模型就是为了提供keyword给做search engine optimization
文字做ocr 得到text，取keyword
图片做用cnn做image tagging这样的模型，预测出图片内容的tag，

楼主没做过search engine optimization，请问大家对这个题有什么看法？

2. ml设计，（这轮也挂了）
设计一个视频推荐系统（用户每次滑动会推荐新的视频），注意不是主页的视频推荐，而是用户点了第一个视频以后屏幕/鼠标滑动翻页的后面一系列视频
请问大家感觉这种推荐系统和Deep Ne`,a:"",co:"Reddit",pos:"MLE",freq:""}],30:[{q:`Netflix research intern时间线是：
2.12:网投
2.18:oa
2.19:做完oa
2.20:hr approach确认时间
2.28: vo 1没有问leetcode问了research background和knowledge graph相关的问题
3.4:hr 确认vo 2约时间
3.13: vo2 45 mins research presentation 15 mins hiring manager talk， 和hiring manager聊了一些intern project相关的问题比如说predict box office之类的问题，收到口头offer`,a:"",co:"Netflix",pos:"ML Research Intern",freq:""},{q:"发面经求大米！面的是一道关于merge interval的题，这个题表面上是给了一个json文件，里面有 id, time, message.需要找到某个时间段的所有message。大家可以仔细研究一下leetcode上关于merge interval的medium题。",a:"",co:"Reddit",pos:"MLE",freq:""},{q:`最近面了下旅游网的Senior ML Scientist。因为是海投练手的，加上已经有G和MS的offer了，就面得比较放飞自我。面的组是做旅游买机票之后的附加benefits的bundle定价和组合策略的，我以前完全没做过，也不知道为啥被拉去面，反正就是瞎掰。投的时候是打算去看看有没有ML/AI coding的轮次，可以攒点经验，因为ML/AI coding的面经少不好准备，结果他们连LeetCode coding竟然都不考。

第一轮30分钟，是case study。场景是假设买机票后可以附加一个benefit bundle，里面可以包括任意多的benefit种类有100多种，如何customize一个bundle来optimize整体的revenue。

第二轮45分钟，问了下第一轮30分钟case study的简化版，只要求predict某一个benefit的接受率，加上一些ml `,a:"",co:"Expedia",pos:"Sr. MLS",freq:""},{q:`需要分享屏幕，面试官当场读题当场做，不可以Google查syntax，并且需要跑出正确的结果。
题目实在是有点多已经记不太清楚了，记得最复杂的也就用到了case when, rolling window这种。应该算leetcode medium。. From 1point 3acres bbs
唯一感觉需要注意的就是得仔细读题，题干很长，尽可能和interviewer clarify好再写，结果是必须要跑出结果才可以下一题。我当时有一个syntax好像是跟string aggregation相关不太会，interviwer也给了提示，所以感觉这种不常用的function给提示也不会扣分。`,a:"",co:"Expedia",pos:"Sr. DS",freq:""},{q:`今天夜间做了一个Expedia的OA，其中3道题分为section1 和 Section2.
Section 1 有两道题目，非常简单，都是basic的DFS或者Hashmap操作
Section 2 有一道题目，题目也是非常简单，但是test case 在大数据上不过。 WTF。

题目如下，在一个给定的array里面找到一个subset的和最接近threshold。
比如 [1, 2, 4, 5] Threshold 是10， 我们可以凑成10 [1, 4, 5], 所以返回10
比如[1, 40, 50] Threshold 是48， 我们不能凑成48， 但是最多可以凑到41， 返回41.

返回subset和当中小于等于threshold的最大和。`,a:"",co:"Expedia",pos:"MLE",freq:""},{q:`1. 阐述conditional random field
2. 如何train model， 解决给一个餐厅、酒店 listing 配review的问题 （要不要显示review， 显示哪条review）
事后诸葛亮找到一个相关 post https://www.tripadvisor.com/engi ... e-actually-helpful/
3. coding: 找到array中第二大的integer, 重复的不算。比如【1，1，2，2】return 1. 复杂度O（N）

感觉类似问题DS面试很多， 之前网飞也问过， 要不要给视频加subtitle。我在想有没有一些general solution。应该会另开一个帖子， 欢迎小伙伴交流；`,a:"",co:"Expedia",pos:"DS ML Track",freq:""},{q:`第二轮问了许多过往的intern project，感觉主要是看怎么理解和解决问题的能力吧，具体的DL，LLM理论上面的东西基本没问，那个manager也说他不是做这个方面的.......


然后最坑爹的来了，面试最后剩下12分钟的时候让我做一道大概medium level的leetcode题，大概是balanced string的升级版，其实不是很难，但是当时那个环境，就剩下十分钟去解还是很紧张，最后好不容易想到用stack，解完要debug的时候，面试官打住了，说时间到了...... 他说这个题只是为了考察我会不会coding，也不知道他说的是真是假（摊手）


紧接着他又问我对这个intern的expectation是什么，我答完了之后他竟然又问了几个跟项目相关的问题（这大哥是真的很喜欢问follow-up question， 怪不得超时）。但有这时间你让我把code写完不行吗...`,a:"",co:"Salesforce",pos:"MLE Research Intern",freq:""},{q:`这周刚刚做的卖力的OA，90min，一道题。本质上是蠡口 leetcode 72 其尔的变种（edit distance）：现在有三种valid操作

1. Caesar cipher：统一将source的每一个char shift k，i.e., ‘ab’ -> 'bc' (edit cost 0)

2. delete a char from source (edit cost 1)
3. insert new char to source (edit cost 1)

求source string 变成 target string所需要最少的edit cost。

我用的遍历K（0~26） + DP （Python3），test case 9/13, 最后几个点TLE了。欢迎指导给出更好的答案`,a:"",co:"Salesforce",pos:"MLE ",freq:""}]},Fp={1:[],2:[{concept:"Bayes' theorem formula",action:"Write P(A|B) = P(B|A)·P(A)/P(B) from memory. Solve the Seattle rain problem cold.",decay:"High",fromWeek:1},{concept:"Sample size formula",action:"Write n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ² from memory. You'll need this in Week 4.",decay:"High",fromWeek:1},{concept:"Meta distribution questions",action:"Say aloud: comments/user/day → mode≈1, median≈3, mean≈8-10, p95≈100. Posts → log-normal, mode=0.",decay:"High",fromWeek:1},{concept:"Meta SQL percentage pattern",action:"Write AVG(CASE WHEN condition THEN 1 ELSE 0 END) from memory — the most-used Meta SQL pattern.",decay:"Medium",fromWeek:1}],3:[{concept:"Bayes fraud detection",action:"Compute P(bad|flagged) mentally: 1% base rate, 99% accuracy → ~50%. Say the steps aloud.",decay:"High",fromWeek:1},{concept:"p-value plain English",action:"Answer cold: 'p=0.25, what do you tell a PM?' No notes.",decay:"High",fromWeek:1},{concept:"Spotify A/B SQL pattern",action:"Write the query: LEFT JOIN streams ON user_id AND date >= first_exposed_date. Group by bucket.",decay:"High",fromWeek:2},{concept:"Meta bidirectional JOIN",action:"Write: JOIN ON user_id = caller OR user_id = recipient. When does this pattern appear?",decay:"High",fromWeek:2},{concept:"np.where Pandas pattern",action:"Write: df['adj'] = np.where(df['platform']=='desktop', df['streams']/2, df['streams'])",decay:"Medium",fromWeek:2}],4:[{concept:"OLS β formula",action:"Write β = (XᵀX)⁻¹Xᵀy from memory. Why do we invert XᵀX?",decay:"High",fromWeek:3},{concept:"Gini impurity formula",action:"Write G = 1 − Σpᵢ². Compute for a 50/50 split. Compute for a pure node.",decay:"High",fromWeek:3},{concept:"XGBoost hyperparameters",action:"List 5 key hyperparameters cold: n_estimators, learning_rate, max_depth, subsample, colsample_bytree.",decay:"Medium",fromWeek:3},{concept:"Attention formula",action:"Write: Attention(Q,K,V) = softmax(QKᵀ/√d_k)·V. Why divide by √d_k?",decay:"High",fromWeek:3},{concept:"Bayes' theorem (from Week 1)",action:"Quick 2-min drill: solve the three-friends-Seattle problem without notes.",decay:"High",fromWeek:1}],5:[{concept:"Sample size formula",action:"Write n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ². Plug in: α=0.05, power=0.8, p=0.05, MDE=0.005.",decay:"High",fromWeek:4},{concept:"CUPED formula",action:"Write Y_adj = Y − θ·X_pre where θ = Cov(Y,X)/Var(X). What does θ represent?",decay:"High",fromWeek:4},{concept:"PSM steps",action:"List 4 steps cold: (1) estimate propensity, (2) match, (3) check balance SMD<0.1, (4) estimate ATE.",decay:"High",fromWeek:4},{concept:"Meta product framework",action:"Say the 4 types: Metric ID, Metric Investigation, Launch/Not, Applied Data. One example of each.",decay:"Medium",fromWeek:4},{concept:"OLS + Gini (from Week 3)",action:"Write both derivations in 2 minutes. These come up in ML system design questions.",decay:"High",fromWeek:3}]};function zp({day:e}){const[t,n]=P.useState(!1),[i,r]=P.useState(!1),[a,o]=P.useState(!1),s=nr[e.cat]||nr.stats,d=e.cat==="review",p=Bp[e.day]||[],y=[7,14,21,28].includes(e.day)&&Fp[e.week]||[];return l.jsxs("div",{onClick:()=>n(c=>!c),style:{background:t?`linear-gradient(135deg,${s.color}18,rgba(255,255,255,.04))`:d?"rgba(100,116,139,.1)":m.card,border:"1px solid "+(t?s.color+"60":d?"#475569":m.border),borderRadius:12,padding:"16px 18px",cursor:"pointer",opacity:i?.5:1,position:"relative",transition:"all .2s"},children:[i&&l.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,.35)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,borderRadius:12,zIndex:2},children:"✓"}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:9,fontWeight:700,letterSpacing:2,color:s.color,textTransform:"uppercase"},children:["Day ",e.day]}),l.jsxs("div",{style:{fontSize:14,fontWeight:600,marginTop:3,lineHeight:1.3},children:[s.emoji," ",e.title]})]}),l.jsx("button",{onClick:c=>{c.stopPropagation(),r(u=>!u)},style:{width:22,height:22,borderRadius:"50%",border:"2px solid "+(i?s.color:"rgba(255,255,255,.2)"),background:i?s.color:"transparent",cursor:"pointer",flexShrink:0,marginLeft:8,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:11},children:i?"✓":""})]}),!t&&l.jsxs("div",{style:{fontSize:11,color:"#475569"},children:[e.topics[0],e.topics.length>1?` +${e.topics.length-1} more`:"",e.questions.length>0?` · ${e.questions.length} Qs`:""]}),t&&l.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:12,marginTop:6},children:[y.length>0&&l.jsxs("div",{style:{marginBottom:14,background:"rgba(239,68,68,.07)",border:"1px solid rgba(239,68,68,.25)",borderRadius:10,padding:"14px 16px"},children:[l.jsx("div",{style:{fontSize:10,fontWeight:700,color:m.red,letterSpacing:2,textTransform:"uppercase",marginBottom:4},children:"⏰ Weekly Review — do this first"}),l.jsx("div",{style:{fontSize:11,color:m.dim,marginBottom:12},children:"1 hour: write each derivation cold — no notes."}),y.map((c,u)=>{const v=c.risk==="High"?m.red:m.yellow;return l.jsxs("div",{style:{marginBottom:8,padding:"9px 11px",background:"rgba(0,0,0,.2)",borderRadius:8,borderLeft:"3px solid "+v},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:11,fontWeight:700,color:m.text},children:c.concept}),l.jsxs("span",{style:{fontSize:9,color:m.dim,background:"rgba(255,255,255,.06)",padding:"1px 6px",borderRadius:4},children:["Week ",c.fromWeek]}),l.jsx("span",{style:{fontSize:9,color:v,marginLeft:"auto"},children:c.risk==="High"?"🔴 High":"🟡 Med"})]}),l.jsx("div",{style:{fontSize:11,color:m.muted,lineHeight:1.5},children:c.action})]},u)})]}),l.jsxs("div",{style:{marginBottom:12},children:[l.jsx("div",{style:{fontSize:9,letterSpacing:2,color:m.dim,textTransform:"uppercase",marginBottom:6},children:"Topics"}),e.topics.map((c,u)=>l.jsx("div",{style:{fontSize:12,color:c.startsWith("→")||c.startsWith("✍")?m.purple:m.muted,marginBottom:4,paddingLeft:10,borderLeft:"2px solid "+(c.startsWith("→")||c.startsWith("✍")?m.purple:s.color+"60")},children:c},u))]}),l.jsxs("div",{style:{marginBottom:12},children:[l.jsx("div",{style:{fontSize:9,letterSpacing:2,color:m.dim,textTransform:"uppercase",marginBottom:6},children:"Resources"}),e.resources.map((c,u)=>{const v=c.match(/—\s*(\S+\.\S+)/),_=v?(v[1].startsWith("http")?"":"https://")+v[1]:null,b=v?c.replace(/—\s*\S+\.\S+$/,"").trim():c;return l.jsxs("div",{style:{fontSize:11,color:m.purple,marginBottom:3},children:["→ ",_?l.jsx("a",{href:_,target:"_blank",rel:"noreferrer",onClick:C=>C.stopPropagation(),style:{color:m.purple,textDecoration:"underline"},children:b}):c]},u)})]}),e.questions.length>0&&l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:9,letterSpacing:2,color:m.dim,textTransform:"uppercase",marginBottom:8},children:["Practice Questions (",e.questions.length,")"]}),e.questions.map((c,u)=>l.jsx(Qs,{q:c,qKey:`${e.day}-${u}`,accentColor:s.color},u))]}),p.length>0&&l.jsxs("div",{style:{marginTop:12,borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:12},children:[l.jsxs("button",{onClick:c=>{c.stopPropagation(),o(u=>!u)},style:{fontSize:10,color:m.dim,background:"transparent",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,padding:"4px 12px",cursor:"pointer",width:"100%",textAlign:"left"},children:[a?"▲ Hide":"▼ Show"," ",p.length," real interview reports (1point3acres)"]}),a&&p.map((c,u)=>l.jsx(Qs,{q:c,qKey:`raw-${e.day}-${u}`,accentColor:m.dim},u))]}),l.jsx("div",{style:{marginTop:12,paddingTop:12,borderTop:"1px solid rgba(255,255,255,.06)"},children:l.jsx("a",{href:`/day/${e.day}`,onClick:c=>c.stopPropagation(),style:{fontSize:11,color:m.purple,textDecoration:"none"},children:"📖 Open full study page →"})})]})]})}const Up=[...new Set(En.map(e=>e.week))];function Hp(){const[e,t]=P.useState("all"),[n,i]=P.useState("schedule"),[r,a]=P.useState(1),[o,s]=P.useState({}),[d,p]=P.useState({});P.useState(0);const y=e==="all"?En:En.filter(c=>c.cat===e);return l.jsxs("div",{style:{fontFamily:"Inter,system-ui,sans-serif",background:m.bg,minHeight:"100vh",color:m.text},children:[l.jsx("div",{style:{background:"rgba(255,255,255,.03)",borderBottom:"1px solid "+m.border,padding:"24px 36px 0",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"},children:l.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:12,paddingBottom:4},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:4,color:m.purple,textTransform:"uppercase",marginBottom:6},children:"DS Interview Prep · 158 Curated Questions · 6 Companies"}),l.jsxs("h1",{style:{margin:0,fontSize:28,fontWeight:700},children:["30-Day ",l.jsx("span",{style:{color:m.purple},children:"Study Schedule"})]})]}),l.jsx("div",{children:l.jsx("a",{href:"/day/3",style:{fontSize:12,color:m.purple,textDecoration:"none",padding:"6px 16px",border:"1px solid rgba(167,139,250,.3)",borderRadius:20},children:"📖 Today: Day 3"})})]}),l.jsx("div",{style:{display:"flex",gap:0,marginTop:18},children:[["schedule","📅 Schedule"],["legend","📚 Legend"],["review","📝 Weekly Review"]].map(([c,u])=>l.jsx("button",{onClick:()=>i(c),style:{padding:"8px 18px",border:"none",background:"transparent",color:n===c?m.purple:m.dim,borderBottom:"2px solid "+(n===c?m.purple:"transparent"),cursor:"pointer",fontSize:13,fontWeight:n===c?700:400,transition:"all .2s"},children:u},c))})]})}),l.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"28px 36px 48px"},children:[n==="schedule"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"},children:[l.jsx("button",{onClick:()=>t("all"),style:{padding:"4px 14px",borderRadius:20,border:"1px solid rgba(255,255,255,.2)",background:e==="all"?"rgba(167,139,250,.3)":"transparent",color:m.text,cursor:"pointer",fontSize:12},children:"All"}),Object.entries(nr).map(([c,u])=>l.jsxs("button",{onClick:()=>t(c),style:{padding:"4px 14px",borderRadius:20,border:"1px solid "+u.color+"50",background:e===c?u.color+"30":"transparent",color:e===c?u.color:m.muted,cursor:"pointer",fontSize:12},children:[u.emoji," ",u.label]},c))]}),Up.map(c=>{const u=y.filter(v=>v.week===c);return u.length?l.jsxs("div",{style:{marginBottom:40},children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:"#475569",textTransform:"uppercase",marginBottom:14},children:Wp[c]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:12},children:u.map(v=>l.jsx(zp,{day:v},v.day))})]},c):null})]}),n==="legend"&&l.jsxs("div",{children:[l.jsxs("div",{style:{background:"rgba(167,139,250,.08)",border:"1px solid rgba(167,139,250,.25)",borderRadius:14,padding:"18px 24px",marginBottom:24},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:2,textTransform:"uppercase",marginBottom:14},children:"Why This Week Order — Retention Risk"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12},children:[["Week 1","Stats + SQL","Low","#10b981","Procedural. Low decay once fluent."],["Week 2","SQL Advanced + Python","Low","#10b981","Pattern-based. Mechanical."],["Week 3","ML Deep Dive","Medium","#f59e0b","Derivations fade but fast to re-review."],["Week 4","A/B + Causal + Product","High ⚠️","#ef4444","Highest decay — must be fresh at interview time."],["Week 5","Rec Systems + LeetCode","Medium","#f59e0b","Light reinforcement week."]].map(([c,u,v,_,b])=>l.jsxs("div",{style:{background:"rgba(0,0,0,.2)",borderRadius:10,padding:"12px 14px",borderLeft:"3px solid "+_},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.text},children:c}),l.jsx("span",{style:{fontSize:9,fontWeight:700,color:_,background:_+"22",padding:"2px 7px",borderRadius:8},children:v})]}),l.jsx("div",{style:{fontSize:11,fontWeight:600,color:m.muted,marginBottom:4},children:u}),l.jsx("div",{style:{fontSize:11,color:m.dim,lineHeight:1.5},children:b})]},c))})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12},children:Object.entries(nr).map(([c,u])=>{const v=En.filter(b=>b.cat===c).length,_=En.filter(b=>b.cat===c).reduce((b,C)=>b+C.questions.length,0);return l.jsxs("div",{style:{background:m.card,border:"1px solid "+u.color+"40",borderRadius:12,padding:"14px 16px"},children:[l.jsx("div",{style:{fontSize:18},children:u.emoji}),l.jsx("div",{style:{fontSize:13,fontWeight:700,color:u.color,marginTop:6},children:u.label}),l.jsxs("div",{style:{fontSize:11,color:m.muted,marginTop:4},children:[v," day",v!==1?"s":""," · ",_," questions"]})]},c)})})]}),n==="review"&&l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",gap:10,marginBottom:24,flexWrap:"wrap"},children:Vs.map(c=>l.jsxs("button",{onClick:()=>a(c.week),style:{padding:"8px 20px",borderRadius:24,border:"2px solid "+(r===c.week?c.color:"rgba(255,255,255,.1)"),background:r===c.week?c.color+"22":"transparent",color:r===c.week?c.color:m.dim,cursor:"pointer",fontSize:13,fontWeight:r===c.week?700:400},children:["Week ",c.week]},c.week))}),Vs.filter(c=>c.week===r).map(c=>l.jsxs("div",{children:[l.jsxs("div",{style:{marginBottom:20},children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:c.color,textTransform:"uppercase",marginBottom:4},children:c.days}),l.jsx("div",{style:{fontSize:20,fontWeight:700},children:c.title})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16},children:[l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:c.color,textTransform:"uppercase",marginBottom:14},children:"✅ Can You Do All of These?"}),c.checklistSections.map((u,v)=>l.jsxs("div",{style:{marginBottom:14},children:[l.jsxs("div",{style:{fontSize:11,fontWeight:700,color:m.muted,marginBottom:8,paddingLeft:4,borderLeft:"2px solid "+c.color},children:[" ",u.heading]}),u.items.map((_,b)=>{const C=`${c.week}-${v}-${b}`,g=o[C];return l.jsxs("div",{onClick:()=>s(h=>({...h,[C]:!h[C]})),style:{display:"flex",gap:10,alignItems:"flex-start",marginBottom:7,cursor:"pointer",opacity:g?.5:1},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:4,border:"1.5px solid "+(g?c.color:"rgba(255,255,255,.2)"),background:g?c.color:"transparent",flexShrink:0,marginTop:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white"},children:g?"✓":""}),l.jsx("div",{style:{fontSize:12,color:g?m.dim:m.muted,lineHeight:1.5,textDecoration:g?"line-through":"none"},children:_})]},b)})]},v))]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:m.purple,textTransform:"uppercase",marginBottom:10},children:"✍️ Write from Memory"}),l.jsx("p",{style:{fontSize:11,color:m.dim,marginBottom:10,fontStyle:"italic"},children:"Close your notes. Write each cold."}),c.derivationsToWrite.map((u,v)=>l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8},children:[l.jsxs("div",{style:{color:m.purple,fontSize:11,flexShrink:0},children:[v+1,"."]}),l.jsx("div",{style:{fontSize:12,color:m.muted,lineHeight:1.5},children:u})]},v))]}),l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:m.red,textTransform:"uppercase",marginBottom:12},children:"⏰ Memory Decay Reminders"}),c.decayReminders.map((u,v)=>{const _=u.risk==="High"?m.red:u.risk==="Medium"?m.yellow:m.green;return l.jsxs("div",{style:{marginBottom:10,padding:"10px 12px",background:"rgba(0,0,0,.2)",borderRadius:8,borderLeft:"3px solid "+_},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[l.jsx("span",{style:{fontSize:11,fontWeight:700,color:m.text},children:u.concept}),l.jsxs("span",{style:{fontSize:9,fontWeight:700,color:_,background:_+"22",padding:"1px 6px",borderRadius:6},children:["Decay: ",u.risk]})]}),l.jsx("div",{style:{fontSize:11,color:m.dim},children:u.next})]},v)})]})]})]}),l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:"#06b6d4",textTransform:"uppercase",marginBottom:6},children:"🎯 Mock Interview Questions"}),l.jsx("div",{style:{fontSize:11,color:m.dim,marginBottom:14},children:"Classic DS interview questions from FAANG, DataLemur, StrataScratch."}),c.mockQuestions.map((u,v)=>{const _=`mock-${c.week}-${v}`,b=d[_],C=u.difficulty==="Easy"?m.green:u.difficulty==="Medium"?m.yellow:m.red;return l.jsx("div",{style:{marginBottom:12,border:"1px solid rgba(255,255,255,.07)",borderLeft:"3px solid "+C,borderRadius:10,background:"rgba(0,0,0,.2)"},children:l.jsxs("div",{style:{padding:"12px 14px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:C,background:C+"22",padding:"2px 7px",borderRadius:8},children:u.difficulty}),l.jsx("span",{style:{fontSize:10,color:"#475569"},children:u.source})]}),l.jsx("div",{style:{fontSize:13,fontWeight:500,color:m.text,lineHeight:1.6,marginBottom:10},children:u.q}),l.jsx("button",{onClick:()=>p(g=>({...g,[_]:!g[_]})),style:{fontSize:10,color:b?"#06b6d4":m.dim,background:"transparent",border:"1px solid "+(b?"#06b6d4":"rgba(255,255,255,.12)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:b?"Hide answer ▲":"Show answer ▼"}),b&&l.jsx("div",{style:{marginTop:10,padding:"10px 12px",background:"rgba(6,182,212,.08)",border:"1px solid rgba(6,182,212,.2)",borderRadius:8,fontSize:12,color:"#67e8f9",lineHeight:1.6,fontStyle:"italic"},children:u.a})]})},v)})]})]},c.week))]})]})]})}function Gp({text:e,baseColor:t}){if(!e)return null;const n=t||m.muted,i=r=>r.split(/\*\*(.*?)\*\*/g).map((o,s)=>s%2===1?l.jsx("strong",{style:{color:m.text,fontWeight:700},children:o},s):o);return l.jsx("div",{style:{lineHeight:1.8},children:e.split(`
`).map((r,a)=>{if(!r.trim())return l.jsx("div",{style:{height:8}},a);const o=(r.match(/^(\s+)/)||["",""])[1].length,s=r.trim(),d=/^[A-Z].*[:\(]/.test(s)&&s.length<60;return l.jsx("div",{style:{paddingLeft:Math.min(o*8,40),marginBottom:2,fontSize:d?13:14,color:o>0?m.muted:n,fontFamily:d?"'IBM Plex Mono', monospace":"inherit"},children:i(s)},a)})})}function jp({card:e}){const[t,n]=P.useState(!1);return l.jsxs("div",{onClick:()=>n(i=>!i),style:{background:t?"rgba(167,139,250,.1)":m.card,border:"1px solid "+(t?m.purple:m.border),borderRadius:10,padding:"14px 16px",cursor:"pointer",marginBottom:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,minHeight:56,transition:"all .2s"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:10,color:t?m.purple:m.dim,marginBottom:3,textTransform:"uppercase",letterSpacing:1},children:t?"Answer":"Question — click to flip"}),l.jsx("div",{style:{fontSize:13,color:t?m.text:m.muted,lineHeight:1.5},children:t?e.a:e.q})]}),l.jsx("div",{style:{fontSize:20,flexShrink:0,color:m.dim},children:t?"✓":"→"})]})}function Yp({data:e}){const[t,n]=P.useState({}),[i,r]=P.useState({}),[a,o]=P.useState({}),[s,d]=P.useState({});if(!e)return l.jsxs("div",{style:{background:m.bg,minHeight:"100vh",color:m.text,fontFamily:"Inter,system-ui,sans-serif",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[l.jsx("div",{style:{fontSize:48},children:"📋"}),l.jsx("h2",{style:{fontSize:22,fontWeight:700},children:"Coming soon"}),l.jsx("p",{style:{color:m.muted,fontSize:14},children:"Work with Claude to build this page"}),l.jsx("a",{href:"/",style:{color:m.purple,textDecoration:"none",fontSize:13,padding:"8px 20px",border:"1px solid rgba(167,139,250,.3)",borderRadius:20},children:"← Back to Schedule"})]});const p=e,y=c=>{var _;if((_=a[c])!=null&&_.running){clearInterval(a[c].iv),o(b=>({...b,[c]:{running:!1,secs:90}}));return}let u=90;const v=setInterval(()=>{u--,o(b=>({...b,[c]:{running:u>0,secs:u,iv:v}})),u<=0&&clearInterval(v)},1e3);o(b=>({...b,[c]:{running:!0,secs:90,iv:v}}))};return l.jsxs("div",{style:{background:m.bg,minHeight:"100vh",color:m.text,fontFamily:"Inter,system-ui,sans-serif"},children:[l.jsxs("nav",{style:{background:"rgba(255,255,255,.03)",borderBottom:"1px solid "+m.border,padding:"14px 36px",display:"flex",alignItems:"center",gap:16,position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"},children:[l.jsx("a",{href:"/",style:{fontWeight:700,color:m.purple,textDecoration:"none",fontSize:13},children:"📅 Schedule"}),l.jsx("span",{style:{color:"rgba(255,255,255,.15)"},children:"/"}),l.jsxs("span",{style:{fontSize:13},children:["Day ",p.day]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[p.prev_day&&l.jsxs("a",{href:"/day/"+p.prev_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["← Day ",p.prev_day]}),p.next_day&&l.jsxs("a",{href:"/day/"+p.next_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["Day ",p.next_day," →"]})]})]}),l.jsxs("div",{style:{padding:"40px 36px 16px",maxWidth:900,margin:"0 auto"},children:[l.jsxs("div",{style:{fontSize:10,letterSpacing:4,color:m.purple,textTransform:"uppercase",marginBottom:8},children:["Day ",p.day," · ",p.date_note]}),l.jsx("h1",{style:{fontSize:30,fontWeight:700,marginBottom:8},children:p.title}),l.jsx("p",{style:{fontSize:14,color:m.muted},children:p.week_label})]}),l.jsx("div",{style:{display:"flex",gap:3,padding:"0 36px 24px",maxWidth:900,margin:"0 auto"},children:Array.from({length:30},(c,u)=>l.jsx("div",{style:{height:4,flex:1,borderRadius:2,background:u<p.day-1?"#a78bfa":u===p.day-1?m.yellow:"rgba(255,255,255,.1)"}},u))}),l.jsxs("main",{style:{maxWidth:900,margin:"0 auto",padding:"0 36px 80px"},children:[p.recap&&l.jsxs("div",{style:{background:"rgba(167,139,250,.06)",border:"1px solid rgba(167,139,250,.2)",borderRadius:12,padding:"20px 24px",marginBottom:32},children:[l.jsxs("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:2,textTransform:"uppercase",marginBottom:12},children:["📋 ",p.recap.title]}),p.recap.points.map((c,u)=>l.jsx("div",{style:{fontSize:13,color:m.muted,padding:"4px 0 4px 16px",borderLeft:"2px solid rgba(167,139,250,.3)",marginBottom:6},children:c},u))]}),l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"Today's Content"}),p.topics.map((c,u)=>l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderLeft:"4px solid "+c.color,borderRadius:14,padding:"24px 28px",marginBottom:20},children:[l.jsx("h2",{style:{color:c.color,fontSize:18,fontWeight:700,marginBottom:16},children:c.title}),l.jsx(Gp,{text:c.content}),l.jsxs("div",{style:{marginTop:16,padding:"12px 16px",background:"rgba(167,139,250,.08)",border:"1px solid rgba(167,139,250,.2)",borderRadius:8},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:1,textTransform:"uppercase",marginBottom:6},children:"💡 Say it out loud"}),l.jsx("div",{style:{fontSize:13,color:m.muted,lineHeight:1.6},children:c.interview_tip})]})]},u)),p.flashcards&&p.flashcards.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"🃏 Flashcards — Click to Flip"}),l.jsx("div",{style:{marginBottom:32},children:p.flashcards.map((c,u)=>l.jsx(jp,{card:c},u))})]}),l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"✍️ Write from Memory"}),l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderRadius:12,padding:"20px 24px",marginBottom:32},children:[l.jsx("p",{style:{fontSize:12,color:m.dim,marginBottom:16,fontStyle:"italic"},children:"Close your notes. Check each box only when you can write it completely from memory."}),p.derivations.map((c,u)=>l.jsxs("div",{onClick:()=>n(v=>({...v,[u]:!v[u]})),style:{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,.06)",cursor:"pointer",opacity:t[u]?.5:1},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:4,border:"1.5px solid "+(t[u]?m.purple:"rgba(255,255,255,.2)"),background:t[u]?m.purple:"transparent",flexShrink:0,marginTop:2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white"},children:t[u]?"✓":""}),l.jsx("div",{style:{fontSize:13,color:t[u]?m.dim:m.muted,textDecoration:t[u]?"line-through":"none",lineHeight:1.5},children:c})]},u))]}),l.jsxs("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:["Practice Questions (",p.practice_questions.length,")"]}),p.practice_questions.map((c,u)=>{const v=s[u],_=i[u],b=a[u],C=c.difficulty==="Easy"?m.green:c.difficulty==="Medium"?m.yellow:m.red;return l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderRadius:12,marginBottom:16,overflow:"hidden"},children:[l.jsxs("div",{style:{padding:"12px 16px 8px",display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#1877F2",background:"rgba(24,119,242,.15)",padding:"2px 8px",borderRadius:8},children:c.company}),l.jsx("span",{style:{fontSize:10,fontWeight:700,color:C,background:C+"20",padding:"2px 8px",borderRadius:8,border:"1px solid "+C+"40"},children:c.difficulty}),l.jsx("button",{onClick:()=>y(u),style:{fontSize:11,padding:"3px 10px",borderRadius:6,border:"1px solid "+(b!=null&&b.running?m.red:"rgba(255,255,255,.12)"),background:"transparent",color:b!=null&&b.running?m.red:m.dim,cursor:"pointer",marginLeft:"auto"},children:b!=null&&b.running?"⏱ "+b.secs+"s":"⏱ 90s"})]}),l.jsx("p",{style:{fontSize:14,color:m.text,padding:"4px 16px 12px",lineHeight:1.6},children:c.q}),l.jsxs("div",{style:{padding:"0 16px 12px",display:"flex",gap:8,flexWrap:"wrap"},children:[l.jsx("button",{onClick:()=>d(g=>({...g,[u]:!g[u]})),style:{fontSize:11,padding:"4px 12px",borderRadius:6,border:"1px solid "+(v?m.purple:"rgba(255,255,255,.12)"),background:"transparent",color:v?m.purple:m.dim,cursor:"pointer"},children:v?"Hide ▲":"Show answer ▼"}),v&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>r(g=>({...g,[u]:"got"})),style:{fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:6,border:"1px solid "+(_==="got"?m.green:"rgba(255,255,255,.12)"),background:_==="got"?"rgba(16,185,129,.15)":"transparent",color:_==="got"?m.green:m.dim,cursor:"pointer"},children:"✓ Got it"}),l.jsx("button",{onClick:()=>r(g=>({...g,[u]:"struggled"})),style:{fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:6,border:"1px solid "+(_==="struggled"?m.red:"rgba(255,255,255,.12)"),background:_==="struggled"?"rgba(239,68,68,.15)":"transparent",color:_==="struggled"?m.red:m.dim,cursor:"pointer"},children:"✗ Struggled"})]})]}),v&&l.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,.08)",padding:16,background:"rgba(134,239,172,.04)"},children:[l.jsx("p",{style:{fontSize:13,color:m.muted,lineHeight:1.6},children:c.a}),c.say_aloud&&l.jsxs("div",{style:{marginTop:12,padding:"10px 14px",background:"rgba(167,139,250,.08)",borderRadius:8},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,marginBottom:4,textTransform:"uppercase",letterSpacing:1},children:"🎤 How to say it"}),l.jsx("div",{style:{fontSize:12,color:m.muted,lineHeight:1.6},children:c.say_aloud})]})]})]},u)}),l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"Resources"}),p.resources.map((c,u)=>l.jsxs("a",{href:c.url,target:"_blank",rel:"noreferrer",style:{display:"block",padding:"12px 16px",background:m.card,border:"1px solid "+m.border,borderRadius:8,textDecoration:"none",color:m.purple,fontSize:13,marginBottom:8},children:["→ ",c.name]},u)),p.tomorrow_preview&&l.jsxs("div",{style:{background:"rgba(16,185,129,.06)",border:"1px solid rgba(16,185,129,.2)",borderRadius:12,padding:"20px 24px",marginTop:40},children:[l.jsxs("div",{style:{fontSize:11,fontWeight:700,color:m.green,letterSpacing:2,textTransform:"uppercase",marginBottom:10},children:["👀 Tomorrow — Day ",p.next_day]}),l.jsx("p",{style:{fontSize:13,color:m.muted},children:p.tomorrow_preview})]})]})]})}const Xs={High:{color:"#4ade80",bg:"rgba(74,222,128,.12)"},Medium:{color:"#a3e635",bg:"rgba(163,230,53,.10)"}};function Vp({data:e}){const[t,n]=P.useState({}),[i,r]=P.useState({}),[a,o]=P.useState({}),s=e.sections.flatMap(f=>f.qs),d=s.length,p=Object.values(t).filter(f=>f==="correct").length,y=Object.values(t).filter(f=>f==="wrong").length,c=d-p-y,u=Math.round((p+y)/d*100),_=p+y===d?Math.round(p/d*100):null,b=f=>r(w=>({...w,[f]:!w[f]})),C=(f,w)=>n(E=>{if(E[f]===w){const S={...E};return delete S[f],S}return{...E,[f]:w}}),g=()=>{n({}),r({})},h=s.filter(f=>t[f.id]==="wrong");return l.jsxs("div",{style:{background:m.bg,minHeight:"100vh",color:m.text,fontFamily:"Inter,system-ui,sans-serif"},children:[l.jsxs("nav",{style:{background:"rgba(255,255,255,.03)",borderBottom:"1px solid "+m.border,padding:"14px 36px",display:"flex",alignItems:"center",gap:16,position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"},children:[l.jsx("a",{href:"/",style:{fontWeight:700,color:m.purple,textDecoration:"none",fontSize:13},children:"📅 Schedule"}),l.jsx("span",{style:{color:"rgba(255,255,255,.15)"},children:"/"}),l.jsxs("span",{style:{fontSize:13},children:["Day ",e.day]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[e.prev_day&&l.jsxs("a",{href:"/day/"+e.prev_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["← Day ",e.prev_day]}),e.next_day&&l.jsxs("a",{href:"/day/"+e.next_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["Day ",e.next_day," →"]})]})]}),l.jsxs("div",{style:{position:"sticky",top:57,zIndex:99,background:m.bg+"f0",backdropFilter:"blur(20px)",borderBottom:"1px solid "+m.border,padding:"10px 36px",display:"flex",alignItems:"center",gap:18},children:[l.jsx("span",{style:{fontSize:12,color:m.dim,fontWeight:600},children:"Score"}),l.jsx("span",{style:{fontSize:22,fontWeight:800,color:"#4ade80",lineHeight:1},children:p}),l.jsx("span",{style:{color:m.dim,fontSize:16},children:"·"}),l.jsx("span",{style:{fontSize:22,fontWeight:800,color:"#ef4444",lineHeight:1},children:y}),l.jsx("span",{style:{color:m.dim,fontSize:16},children:"·"}),l.jsx("span",{style:{fontSize:22,fontWeight:800,color:m.dim,lineHeight:1},children:c}),l.jsx("div",{style:{width:140,height:5,background:"rgba(255,255,255,.08)",borderRadius:3,overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:u+"%",background:"linear-gradient(90deg,#4ade80,#60a5fa)",borderRadius:3,transition:"width .3s"}})}),l.jsxs("span",{style:{fontSize:12,color:m.dim},children:[u,"%"]}),l.jsx("button",{onClick:g,style:{marginLeft:"auto",background:"rgba(255,255,255,.06)",border:"1px solid "+m.border,color:m.muted,padding:"6px 14px",borderRadius:8,fontSize:12,cursor:"pointer",fontWeight:600},children:"↺ Reset"})]}),l.jsxs("div",{style:{padding:"40px 36px 8px",maxWidth:900,margin:"0 auto"},children:[l.jsx("div",{style:{fontSize:10,letterSpacing:4,color:m.purple,textTransform:"uppercase",marginBottom:8},children:e.date_note}),l.jsx("h1",{style:{fontSize:30,fontWeight:700,marginBottom:8},children:e.title}),l.jsx("p",{style:{fontSize:14,color:m.muted},children:e.subtitle})]}),l.jsx("div",{style:{display:"flex",gap:3,padding:"16px 36px 4px",maxWidth:900,margin:"0 auto"},children:Array.from({length:30},(f,w)=>l.jsx("div",{style:{height:4,flex:1,borderRadius:2,background:w<e.day-1?"#a78bfa":w===e.day-1?m.yellow:"rgba(255,255,255,.1)"}},w))}),l.jsxs("main",{style:{maxWidth:900,margin:"0 auto",padding:"0 36px 80px"},children:[e.review_tasks&&l.jsxs("div",{style:{background:"rgba(167,139,250,.06)",border:"1px solid rgba(167,139,250,.2)",borderRadius:14,padding:"20px 24px",marginTop:32},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:2,textTransform:"uppercase",marginBottom:14},children:"✍️ Before the Quiz — Write From Memory (60–90 min)"}),e.review_tasks.map((f,w)=>l.jsx("div",{style:{fontSize:13,color:m.muted,padding:"4px 0 4px 14px",borderLeft:"2px solid rgba(167,139,250,.3)",marginBottom:6,lineHeight:1.6},children:f},w))]}),e.derivations&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:14,marginTop:40},children:"✍️ Write From Memory — Check Each When You Can Write It Cold"}),l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderRadius:12,padding:"20px 24px",marginBottom:12},children:[l.jsx("p",{style:{fontSize:12,color:m.dim,marginBottom:16,fontStyle:"italic"},children:"Close your notes. Check each box only when you can write it completely from memory."}),e.derivations.map((f,w)=>l.jsxs("div",{onClick:()=>o(E=>({...E,[w]:!E[w]})),style:{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,.06)",cursor:"pointer",opacity:a[w]?.45:1},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:4,flexShrink:0,marginTop:2,border:"1.5px solid "+(a[w]?m.purple:"rgba(255,255,255,.2)"),background:a[w]?m.purple:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white",transition:"all .15s"},children:a[w]?"✓":""}),l.jsx("div",{style:{fontSize:13,color:a[w]?m.dim:m.muted,textDecoration:a[w]?"line-through":"none",lineHeight:1.55},children:f})]},w))]})]}),e.resources&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:12,marginTop:36},children:"Resources"}),e.resources.map((f,w)=>l.jsxs("a",{href:f.url,style:{display:"block",padding:"12px 16px",background:m.card,border:"1px solid "+m.border,borderRadius:8,textDecoration:"none",color:m.purple,fontSize:13,marginBottom:8},children:["→ ",f.name]},w))]}),l.jsxs("div",{style:{marginTop:52,marginBottom:4,display:"flex",alignItems:"center",gap:16},children:[l.jsx("div",{style:{flex:1,height:1,background:m.border}}),l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:m.purple,padding:"6px 18px",border:"1px solid rgba(167,139,250,.3)",borderRadius:20},children:"50-Question Quiz"}),l.jsx("div",{style:{flex:1,height:1,background:m.border}})]}),e.sections.map((f,w)=>l.jsxs("div",{children:[l.jsxs("div",{style:{marginTop:52,marginBottom:20,display:"flex",alignItems:"center",gap:14},children:[l.jsx("span",{style:{fontSize:22},children:f.icon}),l.jsx("span",{style:{fontSize:18,fontWeight:800,color:m.text},children:f.title}),l.jsx("span",{style:{fontSize:12,color:m.dim,padding:"2px 10px",background:"rgba(255,255,255,.05)",borderRadius:12},children:f.range}),l.jsx("div",{style:{flex:1,height:1,background:m.border}})]}),f.qs.map(E=>{const S=t[E.id],A=i[E.id],R=lc[E.company]||"#94a3b8",F=Xs[E.freq]||Xs.Medium,L=S==="correct"?"rgba(74,222,128,.4)":S==="wrong"?"rgba(239,68,68,.4)":m.border;return l.jsxs("div",{style:{background:m.card,border:"1px solid "+L,borderRadius:14,marginBottom:14,overflow:"hidden",transition:"border-color .2s"},children:[l.jsxs("div",{style:{padding:"16px 20px 12px"},children:[l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:10},children:[l.jsx("span",{style:{fontSize:11,fontWeight:700,color:m.dim},children:E.id.toUpperCase()}),l.jsx("span",{style:{fontSize:11,fontWeight:700,color:R,background:R+"20",padding:"2px 8px",borderRadius:8,border:"1px solid "+R+"40"},children:E.company}),E.freq&&l.jsxs("span",{style:{fontSize:11,fontWeight:700,color:F.color,background:F.bg,padding:"2px 8px",borderRadius:8},children:[E.freq," freq"]})]}),l.jsx("p",{style:{fontSize:14,color:m.text,lineHeight:1.65,margin:0},children:E.q})]}),l.jsxs("div",{style:{display:"flex",borderTop:"1px solid "+m.border},children:[l.jsx("button",{onClick:()=>b(E.id),style:{flex:2,padding:"11px 20px",background:"transparent",border:"none",borderRight:"1px solid "+m.border,color:A?m.purple:m.dim,fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left"},children:A?"▼ Hide answer":"▶ Show answer"}),l.jsx("button",{onClick:()=>C(E.id,"correct"),style:{flex:1,padding:"11px",background:S==="correct"?"rgba(74,222,128,.1)":"transparent",border:"none",borderRight:"1px solid "+m.border,color:S==="correct"?"#4ade80":m.dim,fontSize:13,fontWeight:700,cursor:"pointer"},children:"✓ Got it"}),l.jsx("button",{onClick:()=>C(E.id,"wrong"),style:{flex:1,padding:"11px",background:S==="wrong"?"rgba(239,68,68,.1)":"transparent",border:"none",color:S==="wrong"?"#ef4444":m.dim,fontSize:13,fontWeight:700,cursor:"pointer"},children:"✗ Missed"})]}),A&&l.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,.06)",padding:"16px 20px",background:"rgba(134,239,172,.03)"},children:[l.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"#4ade80",marginBottom:10},children:"Answer"}),l.jsx("div",{className:"quiz-answer",dangerouslySetInnerHTML:{__html:E.answer}})]})]},E.id)})]},w)),p+y>0&&l.jsxs("div",{style:{background:"rgba(255,255,255,.03)",border:"1px solid "+m.border,borderRadius:16,padding:"28px 32px",marginTop:52,textAlign:"center"},children:[l.jsx("h3",{style:{fontSize:18,fontWeight:700,marginBottom:16},children:"Your Week 1 Score"}),l.jsx("div",{style:{fontSize:56,fontWeight:900,lineHeight:1,color:_===null?m.yellow:_>=80?"#4ade80":_>=60?m.yellow:"#ef4444"},children:_!==null?_+"%":p+"/"+(p+y)}),l.jsx("p",{style:{color:m.dim,marginTop:10,fontSize:13},children:_!==null?`${p} correct · ${y} missed · all ${d} answered`:`${p+y} of ${d} questions answered`}),h.length>0&&l.jsxs("div",{style:{textAlign:"left",marginTop:24},children:[l.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#ef4444",marginBottom:10},children:"⚠️ Questions to revisit:"}),h.map(f=>l.jsxs("div",{style:{fontSize:12,color:"#fca5a5",padding:"7px 0",borderBottom:"1px solid "+m.border},children:[l.jsx("span",{style:{fontWeight:700,marginRight:8},children:f.id.toUpperCase()}),f.q.length>90?f.q.slice(0,90)+"…":f.q]},f.id))]})]})]})]})}const Qp={day:1,title:"Probability Fundamentals",date_note:"Day 1 — Let's build the foundation",prev_day:null,next_day:2,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Week 1 Roadmap — What to Expect (5 min)",points:["Days 1–5 are pure statistics: probability → distributions → CLT → hypothesis testing → applied stats","Day 6 adds SQL foundations — the Meta percentage pattern is the most-tested SQL concept in DS interviews","Day 7 is a review day: write derivations from memory, take the quiz, identify weak spots","Goal for Week 1: never hesitate on Bayes theorem, p-value definition, or distribution identification","Most common DS interview mistake: knowing the formula but not being able to explain it to a PM in plain English — practice both","You don't need to have it all memorized today — focus on the 'why' behind each formula; memorization follows understanding"]},topics:[{title:"Conditional Probability & Bayes' Theorem",color:"#F59E0B",content:`**Conditional probability — the foundation:**
  P(A|B) = P(A ∩ B) / P(B)
  Read: 'Probability of A given B has occurred'
  Intuition: we restrict the sample space to outcomes where B is true, then ask how often A also holds

**Bayes' theorem — the most important formula in DS interviews:**
  P(A|B) = P(B|A) × P(A) / P(B)

  Written out fully:
  P(A|B) = P(B|A) × P(A) / [P(B|A)×P(A) + P(B|Aᶜ)×P(Aᶜ)]

  Components:
  • P(A) = prior (what you believed before seeing evidence B)
  • P(B|A) = likelihood (how probable is the evidence IF A is true)
  • P(A|B) = posterior (updated belief after seeing evidence B)

**Worked example — Seattle rain:**
  Three friends each say 'Yes, it's raining'. Each tells the truth 2/3 of the time. Prior P(rain) = 25%.

  P(YYY | rain) = (2/3)³ = 8/27
  P(YYY | no rain) = (1/3)³ = 1/27

  P(rain | YYY) = (8/27 × 0.25) / (8/27 × 0.25 + 1/27 × 0.75)
               = 2/27 / (2/27 + 0.75/27)
               = 2 / (2 + 0.75) = 2/2.75 ≈ 8/11 ≈ 0.727

**The mental model:** Bayes is about updating beliefs. You start with a prior, you observe evidence, you update. The more surprising the evidence (high likelihood ratio P(B|A)/P(B|Aᶜ)), the more you should update.`,interview_tip:"Meta asks Bayes questions constantly. Always start by defining: what is A? what is B? Then write out the formula. Never try to do it in your head without writing it. The 'three friends / Seattle rain' question is literally a top-3 Meta interview question — know it cold."},{title:"Independence, Mutual Exclusivity & The Complement Rule",color:"#8B5CF6",content:`**Independence:**
  A and B are independent if: P(A ∩ B) = P(A) × P(B)
  Equivalently: P(A|B) = P(A) — knowing B gives no information about A
  Example: two coin flips. P(H on flip 2 | H on flip 1) = P(H on flip 2) = 0.5

**Mutual exclusivity:**
  A and B are mutually exclusive if: P(A ∩ B) = 0 — they can't both happen
  Then: P(A ∪ B) = P(A) + P(B)
  Example: rolling a die: P(1) and P(2) are mutually exclusive

**Key distinction — independence ≠ mutually exclusive:**
  Mutually exclusive events with P(A) > 0 and P(B) > 0 are NEVER independent
  Why: P(A|B) = P(A∩B)/P(B) = 0/P(B) = 0 ≠ P(A)
  Knowing B occurred TELLS you A didn't occur → dependent

**The Complement Rule — 'at least one' problems:**
  P(at least one event) = 1 − P(none)
  This is almost always faster than direct calculation

  Example — shooting star:
  P(≥1 shooting star in 1 hour) where P(≥1 in 15 min) = 20%
  P(none in 15 min) = 0.8
  P(none in 1 hour) = 0.8⁴ = 0.4096
  P(at least one) = 1 − 0.4096 = 0.5904

**Addition rule (general):**
  P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
  (subtract the overlap so you don't double-count)`,interview_tip:"When you see 'at least one', ALWAYS use 1 − P(none). It's dramatically simpler. In 90% of interview problems, trying to enumerate all the 'at least one' cases is impossible, but P(none) is easy."},{title:"Permutations, Combinations & Classic Counting Puzzles",color:"#10B981",content:`**Permutations — order matters:**
  P(n, k) = n! / (n−k)! — choosing k items from n in order
  Example: 3-digit PIN from digits 1-9 (no repeats) = 9×8×7 = 504

**Combinations — order doesn't matter:**
  C(n, k) = n! / (k! × (n−k)!) — choosing k items from n, order irrelevant
  Example: 5-card poker hand from 52 cards = C(52,5) = 2,598,960
  Shorthand: 'n choose k' = C(n,k)

**Birthday paradox:**
  How many people needed so P(shared birthday) > 50%?
  Answer: 23 people!
  P(no shared birthday with n people) = 365/365 × 364/365 × ... × (365−n+1)/365
  Use complement: P(at least one shared) = 1 − P(none shared)
  At n=23: P(no shared) ≈ 0.493, so P(shared) ≈ 0.507
  Why it's counterintuitive: you're checking ALL pairs, not just against one person

**Generating 1-7 from a fair 6-sided die:**
  Roll twice → 36 equally likely outcomes (6×6 grid)
  Discard (6,6) → 35 remaining outcomes
  Divide into 7 groups of 5 → each group has P = 5/35 = 1/7
  If you roll (6,6), reroll
  This is rejection sampling — a fundamental algorithmic idea

**'Keep going until girl' — Geometric expectation:**
  Couple has children until they get a girl. P(girl) = 0.5
  X ~ Geometric(p=0.5). E[X] = 1/p = 2 children on average

**Two-children puzzle:**
  A couple has 2 children, at least one is a girl. P(both girls)?
  Sample space: {BB, BG, GB, GG}. Excluding BB: {BG, GB, GG}
  P(GG | at least one girl) = 1/3
  Trap: 'the oldest is a girl' → sample space {GB, GG} → P(GG) = 1/2. The conditioning statement matters!`,interview_tip:"The coin/die/puzzle questions test whether you can rigorously enumerate a sample space and apply conditional probability correctly. Always write out the sample space explicitly. Never guess. The two-children problem has a famously tricky variant — the answer changes depending on EXACTLY how the information was revealed."},{title:"Applied Bayes — Coin Picking & Posterior Prediction",color:"#06B6D4",content:`**Double-headed coin problem:**
  Jar: 999 fair coins, 1 double-headed coin. You pick one at random, flip 10 heads.
  P(double-headed | 10 heads) = ?

  P(10H | double-headed) = 1
  P(10H | fair) = (0.5)¹⁰ = 1/1024
  P(double-headed) = 1/1000, P(fair) = 999/1000

  Numerator: 1 × (1/1000) = 1/1000
  Denominator: 1/1000 + (1/1024) × (999/1000) ≈ 1/1000 + 999/1,024,000
             ≈ 1024/1,024,000 + 999/1,024,000 = 2023/1,024,000
  P(double-headed | 10H) = (1024/1,024,000) / (2023/1,024,000) = 1024/2023 ≈ 0.506

**Predicting the NEXT flip (the harder follow-up):**
  P(next flip = H) = P(DH | 10H) × P(H | DH) + P(fair | 10H) × P(H | fair)
  ≈ 0.506 × 1 + 0.494 × 0.5
  = 0.506 + 0.247 = 0.753

**Pattern to internalize:**
  After seeing many heads, the posterior probability of the double-headed coin grows rapidly (likelihood ratio = 2¹⁰ ≈ 1000× per flip). Even with only 1 in 1000 prior odds, 10 heads makes it a coin-flip in posterior probability.

**Fair coin vs biased coin — another pattern:**
  Pick one of two coins: fair (P(H)=0.5) vs biased (both tails, P(H)=0). Flip 5, see all tails.
  P(biased | TTTTT) = 1×0.5 / (1×0.5 + (0.5)⁵×0.5) = 0.5 / (0.5 + 0.015625) ≈ 32/33 ≈ 0.97
  After 5 tails, there's a 97% chance you have the biased coin — strong evidence accumulates fast.`,interview_tip:"The 'what's the probability the NEXT flip is heads' question is the hardest follow-up in this category. The trick is that you can't just use the posterior on the coin type directly — you have to use the Law of Total Probability: weight each scenario's prediction by its posterior probability."}],practice_questions:[{q:"Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",a:"P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY). P(YYY|rain) = (2/3)³ = 8/27. P(YYY|no rain) = (1/3)³ = 1/27. Numerator: 8/27 × 0.25 = 2/27. Denominator: 2/27 + (1/27 × 0.75) = (2 + 0.75)/27 = 2.75/27. P = 2/2.75 = 8/11 ≈ 0.727.",say_aloud:"Define A = 'it's raining', B = 'all three say yes'. Apply Bayes. P(YYY|rain) = (2/3)³ because each friend independently tells the truth, so three independent truth-tellers all saying yes when it IS raining = (2/3)³. Walk through the calculation numerically — don't try to simplify in your head.",company:"Meta",difficulty:"Hard"},{q:"A fair coin and a double-tails coin — you pick one randomly, flip 5 times, see all tails. P(double-tails coin)?",a:"P(DT|TTTTT) = P(TTTTT|DT)·P(DT) / P(TTTTT). P(TTTTT|DT) = 1. P(TTTTT|fair) = (0.5)⁵ = 1/32. P(DT|TTTTT) = (1 × 0.5) / (0.5 + 1/32 × 0.5) = 0.5 / (0.5 + 0.015625) = 32/33 ≈ 0.97.",say_aloud:"State the prior: each coin equally likely (50%). The key is P(TTTTT|fair) = 1/32 is very small, so seeing 5 tails gives huge evidence for the double-tails coin. 97% posterior is the right answer.",company:"Meta/All",difficulty:"Medium"},{q:"In any 15-minute interval, P(≥1 shooting star) = 20%. What is P(≥1 shooting star in 1 hour)?",a:"Use complement. P(none in 15 min) = 1 − 0.20 = 0.80. Four independent 15-min intervals in 1 hour: P(none in 1 hour) = 0.8⁴ = 0.4096. P(at least one) = 1 − 0.4096 = 0.5904.",say_aloud:"Always use the complement for 'at least one' problems. State this explicitly: 'The complement of at least one is none at all. I'll compute P(none) first.' This signals you know the standard trick.",company:"Meta/All",difficulty:"Easy"},{q:"A couple has two children, at least one of whom is a girl. What is P(both are girls)?",a:"Sample space: {BB, BG, GB, GG}. Conditioning on 'at least one girl' removes BB → {BG, GB, GG}. Only GG satisfies 'both girls'. P = 1/3. Trap: if told 'the FIRST child is a girl', sample space is {GB, GG} → P = 1/2. The conditioning statement changes the answer.",say_aloud:"Write out the sample space. Say: 'Given at least one girl, I remove BB, leaving three equally likely outcomes. Only one of those is GG, so the probability is 1/3.' Then mention the variant: 'If we'd been told specifically the first child is a girl, the answer would be 1/2.'",company:"Meta/All",difficulty:"Medium"},{q:"How would you generate a random number between 1 and 7 using only a fair 6-sided die?",a:"Roll twice → 36 equally likely outcomes. Discard (6,6) → 35 outcomes. Split into 7 groups of 5: each number 1-7 gets 5 outcomes. Each group has probability 5/35 = 1/7. If you roll (6,6), reroll. Expected rolls = 36/35 ≈ 1.03 (very rarely need to reroll).",say_aloud:"This is rejection sampling. State the idea: 'I want a uniform distribution over 7 values. 7 doesn't divide 36, but it divides 35. So I create 35 valid outcomes and reject the 36th.' Then describe the grouping. This shows you understand algorithmic probability.",company:"Meta/All",difficulty:"Medium"},{q:"A jar has 1000 coins: 999 fair, 1 double-headed. You pick randomly and flip 10 heads. What is P(next flip is also heads)?",a:"First find posterior. P(DH|10H) = 1·(1/1000) / [1·(1/1000) + (1/1024)·(999/1000)] = 1024/(1024+999) = 1024/2023 ≈ 0.506. Then: P(next H) = P(DH|10H)·1 + P(fair|10H)·0.5 = 0.506 + 0.494·0.5 ≈ 0.753.",say_aloud:"Two-step answer: (1) Update posterior on coin type using Bayes. (2) Use Law of Total Probability for the next flip. 'I can't just say 50% because seeing 10 heads updated my belief about which coin I'm holding.' Walk through both steps explicitly.",company:"Meta/All",difficulty:"Hard"}],derivations:["Write Bayes theorem from memory: P(A|B) = P(B|A)·P(A) / [P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ)]","Write the complement rule: P(at least one) = 1 − P(none). Apply to: P(≥1 shooting star in 1 hr)","Write the condition for independence: P(A∩B) = P(A)·P(B). Explain why mutually exclusive ≠ independent","Write the birthday paradox setup: P(shared bday | n people) = 1 − (365/365)·(364/365)·...·((365−n+1)/365)","Write E[X] for Geometric(p) and explain the memoryless property in one sentence"],resources:[{name:"StatQuest: Bayes Theorem",url:"https://www.youtube.com/watch?v=9wCnvr7Xw4E"},{name:"Khan Academy: Conditional Probability",url:"https://www.khanacademy.org/math/statistics-probability/probability-library"},{name:"Think Stats 2e (free textbook)",url:"https://greenteapress.com/thinkstats2"},{name:"3Blue1Brown: Bayes theorem visual",url:"https://www.youtube.com/watch?v=HZGCoVF3YvM"}],flashcards:[{q:"Bayes theorem — full form?",a:"P(A|B) = P(B|A)·P(A) / [P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ)]"},{q:"P(at least one event) = ?",a:"1 − P(none). Always use complement for 'at least one' problems."},{q:"Condition for A and B to be independent?",a:"P(A ∩ B) = P(A) × P(B), equivalently P(A|B) = P(A)"},{q:"Can mutually exclusive events be independent?",a:"No (if both have positive probability). If A and B are mutually exclusive, P(A|B) = 0 ≠ P(A) — knowing B tells you A didn't happen."},{q:"Number of permutations of k items from n?",a:"P(n,k) = n! / (n−k)!"},{q:"Number of combinations of k items from n?",a:"C(n,k) = n! / (k! × (n−k)!) — 'n choose k'"},{q:"Birthday paradox: how many people for >50% chance of shared birthday?",a:"23 people. Use complement: P(shared) = 1 − P(all unique)"},{q:"E[X] for Geometric(p)?",a:"1/p — expected number of trials until first success"},{q:"P(rain | all three friends say yes), prior=25%, truth rate=2/3?",a:"8/11 ≈ 0.727. Numerator: (2/3)³ × 0.25. Denominator: add (1/3)³ × 0.75."},{q:"Two children, at least one girl: P(both girls)?",a:"1/3. Sample space after conditioning: {BG, GB, GG}. Only GG works."},{q:"General addition rule for P(A ∪ B)?",a:"P(A) + P(B) − P(A ∩ B)"},{q:"Law of Total Probability?",a:"P(B) = P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ) — weight each scenario by its probability"}],tomorrow_preview:"Day 2: Probability Distributions — Binomial, Poisson, Geometric, Normal, Exponential, Log-Normal. You'll use Bayes from today to understand why Binomial approximates Poisson under certain conditions. Core skill: given a real dataset description (comments/user/day), identify the correct distribution and justify why."},Xp={day:2,title:"Probability Distributions",date_note:"Yesterday — Day 2 materials",prev_day:1,next_day:3,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Day 1 Recap — Probability Fundamentals (5 min)",points:["Bayes theorem: P(A|B) = P(B|A)·P(A) / P(B) — memorize this cold","Seattle rain problem answer: 8/11 ≈ 0.727 (three friends, 2/3 truth rate, all say yes)","Complement rule: P(at least one) = 1 − P(none) — key pattern for shooting star, birthday problems","Geometric distribution: keep flipping until first success → E[X] = 1/p","Type I error = false positive (reject true H₀). Type II = false negative (fail to reject false H₀)"]},topics:[{title:"The 6 Core Distributions",color:"#F59E0B",content:`DISCRETE DISTRIBUTIONS

**Binomial(n, p)** — count of successes in n fixed independent trials
  E[X] = np | Var(X) = np(1−p) | Support: {0, 1, ..., n}
  Use when: fixed n trials, binary outcome, constant p, independent
  Example: Out of 10,000 users shown a new ad, how many click? → Binomial(10000, 0.02)

**Poisson(λ)** — count of rare events in a fixed interval
  E[X] = λ | Var(X) = λ (mean = variance — key identifying property!)
  Support: {0, 1, 2, ...}
  Use when: counting events over time/space, no fixed upper bound, rate is constant
  Example: Server requests per second during Prime Day → Poisson(λ)
  Rule: Binomial → Poisson when n is large, p is small, λ = np stays moderate

**Geometric(p)** — number of trials until FIRST success
  E[X] = 1/p | Var(X) = (1−p)/p²
  Memoryless: P(X > s+t | X > s) = P(X > t) — past failures don't affect future probability
  Example: How many search results before user clicks? → Geometric(p)

CONTINUOUS DISTRIBUTIONS

**Normal(μ, σ²)** — the bell curve
  E[X] = μ | Var(X) = σ²
  68-95-99.7 rule: 68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ
  Justified by CLT for large samples — central to all A/B testing

**Exponential(λ)** — time between events in a Poisson process
  E[X] = 1/λ | Var(X) = 1/λ²
  Memoryless (continuous version of Geometric)
  Example: Time between customer purchases, server failure inter-arrival times

**Log-Normal(μ, σ²)** — if X ~ LogNormal, then log(X) ~ Normal
  E[X] = exp(μ + σ²/2)
  Always positive, right-skewed — classic for revenue, income, file sizes
  Key tell: mean >> median → right skew → log-normal candidate`,interview_tip:"The #1 Meta distribution question: 'What distribution does X follow?' Always start with: is it discrete or continuous? Then: is there a fixed upper bound (Binomial) or not (Poisson)? Is it counts or times between events? This decision tree takes 10 seconds and gets you 90% there."},{title:"The Identifying Properties — What Interviewers Actually Test",color:"#8B5CF6",content:`The single most-tested fact: **Poisson has mean = variance = λ**

If an interviewer says 'a metric has mean 50 and variance 50' — that's Poisson with λ=50. Instant answer.

**The relationship chain (draw this on a whiteboard):**
  Poisson process (rate λ) → counts per interval → Poisson(λ)
  Poisson process (rate λ) → time between events → Exponential(λ)
  Bernoulli trials (prob p) → count successes in n trials → Binomial(n,p)
  Bernoulli trials (prob p) → trials until first success → Geometric(p)
  Sum of many independent random variables → Normal (CLT)
  Product of many independent positive random variables → Log-Normal

**The memoryless property:**
  Only Geometric (discrete) and Exponential (continuous) are memoryless.
  'You've already flipped 5 tails — expected remaining flips?' Answer: still 1/p.
  This is the only mathematically correct answer. Any other distribution would give a different answer after conditioning on past outcomes.

**The skewness tells:**
  Mean > Median: right-skewed → Log-Normal, Exponential, Poisson (for small λ)
  Mean = Median: symmetric → Normal, Uniform
  Mean < Median: left-skewed → rare in DS interviews`,interview_tip:"When asked 'describe this distribution' on a whiteboard: state (1) discrete/continuous, (2) support range, (3) E[X] and Var[X], (4) one key property, (5) one real example. This 5-point structure takes 60 seconds and covers everything an interviewer wants."},{title:"FAANG Real-World Applications",color:"#10B981",content:`**Meta — A/B Testing (Binomial → Normal via CLT)**
'10,000 users shown new News Feed. How many will click an ad?'
Clicks ~ Binomial(n=10000, p=0.02), E=200, Var=196
By CLT, average click rate across experiments is approximately Normal → justifies z-tests

**Amazon — Server Infrastructure (Poisson)**
'How many requests hit servers per second during Prime Day?'
Request counts per interval → Poisson → drives auto-scaling decisions
Time between requests → Exponential → models server recovery time

**Airbnb — Revenue Analysis (Log-Normal)**
'Booking amounts have mean $200 but median $120. What distribution?'
Mean >> Median = right skew = Log-Normal signal
Working with log(revenue) gives you a Normal, making standard stats valid
Rule: don't use mean revenue for decisions — use median or geometric mean

**Google — Ad Click Position (Geometric)**
'How many search results does a user scroll through before clicking?'
Position of first click ~ Geometric(p) where p = CTR
E[position] = 1/p — directly informs ad placement and pricing

**Netflix — Time Between Sessions (Exponential)**
'A user hasn't streamed in X days. How likely are they to churn?'
If inter-session times ~ Exponential: memoryless property means past inactivity
doesn't predict future behavior beyond the current gap → need more sophisticated model`,interview_tip:"In a product interview, naming the distribution shows quantitative depth. 'I'd model this as a Poisson process because...' is much stronger than 'I'd count the events.' But always justify WHY that distribution fits — the reasoning matters more than the name."}],practice_questions:[{q:"A metric has mean 50 and variance 50. What distribution might this follow?",a:"Poisson with λ = 50. The defining property of Poisson is E[X] = Var[X] = λ. When you observe mean ≈ variance for count data, Poisson is the immediate answer. Follow-up: if Var >> Mean, it's overdispersed → Negative Binomial. If Var << Mean, it's underdispersed → Binomial.",say_aloud:"Open with: 'The key identifying property of Poisson is that mean equals variance, both equal to λ. Since mean = variance = 50 here, this is Poisson with λ=50.' Then offer the follow-up check proactively — it signals you know the edge cases.",company:"Meta",difficulty:"Medium"},{q:"When would you use Poisson vs Binomial? What's the key deciding factor?",a:"Binomial: fixed number of trials n, binary outcome per trial, constant p. Use when there's a clear upper bound (can't have more successes than trials). Poisson: counting events in a continuous interval with no fixed upper bound, events are rare. Use when n is large and p is small. Relationship: Binomial(n,p) → Poisson(λ=np) as n→∞, p→0.",say_aloud:"Decision tree: 'First I ask — is there a fixed upper bound on the count? If yes, Binomial. If no, Poisson. Then: Binomial approximates to Poisson when n is large and p is small, which is useful computationally.'",company:"Meta/All",difficulty:"Easy"},{q:"An Airbnb DS notices booking amounts have mean $200 but median $120. What distribution might this be? How would you analyze it?",a:"Mean >> Median is the hallmark of right-skewed data → Log-Normal. Booking amounts are always positive and right-skewed (most bookings moderate, few very expensive). Analysis: take log(booking_amount) → should be approximately Normal. Then: use median or geometric mean (exp(mean of log values)) for central tendency, not arithmetic mean. For modeling: linear regression on log(amount).",say_aloud:"Start with the key insight: 'Mean much greater than median tells me the data is right-skewed. For positive-only data with this shape, Log-Normal is the natural candidate.' Then move to the practical implication: 'This means I should work with log-transformed values for analysis.'",company:"Airbnb",difficulty:"Hard"},{q:"You flip a biased coin (P(H) = 0.3) until you get heads. Average number of flips? You've already flipped 5 tails — expected remaining flips?",a:"Geometric with p = 0.3. E[X] = 1/p = 1/0.3 ≈ 3.33 flips on average. After 5 tails: still E[remaining] = 1/0.3 = 3.33 flips. This is the memoryless property — past failures give no information about future. P(X > 5+t | X > 5) = P(X > t). The coin doesn't 'remember' the previous tails.",say_aloud:"State the distribution first: 'This is Geometric with p=0.3, so E[X]=1/p=3.33.' Then for the second part: 'The Geometric distribution is memoryless — the 5 previous tails give us no information. Expected remaining flips is still 3.33.' Saying 'memoryless property' by name signals depth.",company:"Meta/All",difficulty:"Medium"},{q:"You run an A/B test with 5,000 users per group and 2% baseline conversion. How would you model the number of conversions? What test would you use?",a:"Conversions ~ Binomial(n=5000, p=0.02), so E[X]=100, Var(X)=98, SD≈9.9. With n=5000, CLT applies: sample proportion is approximately Normal. Use two-proportion z-test: z = (p̂₁ − p̂₂) / sqrt(p̄(1−p̄)(1/n₁+1/n₂)). The Binomial→Normal approximation is valid here because np=100 >> 5.",say_aloud:"Structure: distribution first, then test. 'Each user is a Bernoulli trial, so total conversions follow Binomial(5000, 0.02). With n=5000, CLT gives us a Normal approximation, which justifies the z-test.' This shows you connect distribution theory to practical testing.",company:"Meta/Airbnb",difficulty:"Medium"},{q:"Describe the distribution of 'comments per user per day'. Estimate mode, median, mean, p95. Why not Poisson?",a:"Right-skewed with heavy tail — closer to Power Law than Poisson. Mode≈0-1, Median≈2-3, Mean≈8-15, P95≈50-100. NOT Poisson because: Poisson assumes events occur independently at constant rate — social media engagement is self-reinforcing (preferential attachment). Active commenters attract replies → more comments. Poisson would severely underestimate the frequency of extreme commenters (fat tail).",say_aloud:"This is the Meta hallmark question. Structure: distribution shape → specific statistics → why not the naive answer (Poisson). End with: 'The gap between mean and median — mean being roughly 5x median — is itself diagnostic of the right skew and the heavy tail.'",company:"Meta",difficulty:"Hard"}],derivations:["Write E[X] and Var[X] for all 6 distributions: Binomial, Poisson, Geometric, Normal, Exponential, Log-Normal","Write the Poisson identifying property: E[X] = Var[X] = λ. Name a metric that has this property.","Write the memoryless property: P(X > s+t | X > s) = P(X > t). Which two distributions have it?","Write the Binomial→Poisson limit: conditions (n large, p small, λ=np fixed) and what stays constant","Draw the distribution choice flowchart: discrete/continuous → fixed n? → count or time? → skewed?"],resources:[{name:"StatQuest: Probability Distributions playlist",url:"https://www.youtube.com/watch?v=oI3hZJqXJuc"},{name:"Seeing Theory: Probability Distributions (visual)",url:"https://seeing-theory.brown.edu/probability-distributions/index.html"},{name:"MIT 18.650 Stats for Applications",url:"https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/"}],flashcards:[{q:"E[X] for Binomial(n, p)?",a:"np"},{q:"Var(X) for Binomial(n, p)?",a:"np(1−p)"},{q:"Var(X) for Poisson(λ)?",a:"λ (same as mean — key identifying property!)"},{q:"E[X] for Geometric(p)?",a:"1/p"},{q:"E[X] for Exponential(λ)?",a:"1/λ"},{q:"Which distributions are memoryless?",a:"Geometric (discrete) and Exponential (continuous) only"},{q:"If mean ≈ variance for count data, what distribution?",a:"Poisson(λ) where λ = mean = variance"},{q:"When does Binomial ≈ Poisson?",a:"n large, p small, λ = np stays moderate"},{q:"If X ~ Log-Normal, what does log(X) follow?",a:"Normal(μ, σ²)"},{q:"Mean >> Median for positive data. Which distribution?",a:"Log-Normal (right-skewed)"},{q:"68-95-99.7 rule?",a:"68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ"},{q:"Poisson counts events per interval. What measures time between them?",a:"Exponential distribution"}],tomorrow_preview:"Day 3: CLT, Hypothesis Testing, and Confidence Intervals. You'll use the distributions from today — specifically why CLT lets us use Normal-based tests even when individual metrics are Poisson or Log-Normal."},Kp={day:3,title:"CLT, Hypothesis Testing & Confidence Intervals",date_note:"Today — working through this with Claude",prev_day:2,next_day:4,recap:{title:"Day 2 Recap — Distributions (5 min)",points:["Comments/user/day → right-skewed, power law with fat tail. Mode≈0-1, Median≈2-3, Mean≈8-15, P95≈50-100","Posts/user/day → log-normal. Mode=0, Median≈1, Mean≈5 (pulled by power users/bots)","App usage time → exponential. Most users leave in <10s, heavy right tail","Key insight: mode < median ≪ mean signals right skew. The gap between median and mean is itself diagnostic","Power law (not Poisson) because social engagement is self-reinforcing — preferential attachment mechanism","Binomial: fixed n trials, E[X]=np, Var[X]=np(1-p). Poisson: count of rare events, E[X]=Var[X]=λ"]},topics:[{title:"Central Limit Theorem",color:"#F59E0B",content:`**Formal statement:** If X₁, X₂, ..., Xₙ are i.i.d. with mean μ and variance σ², then as n→∞:
            
√n(X̄ₙ − μ)/σ → N(0,1)

**Plain English:** The sampling distribution of the sample mean is approximately normal regardless of the underlying distribution, given n is large enough (typically n≥30).

**Why it matters for A/B testing:** Even if individual user metrics are highly skewed (like comments/day), the GROUP MEANS will be approximately normal. This is what lets us use z-tests and t-tests to compare treatment vs control.

**Key conditions:**
- Observations must be i.i.d. (independent and identically distributed)
- Finite variance (rules out some extreme power law cases)
- "Large enough" n — for heavy-tailed distributions you need larger n

**Application to Day 2 question:** The daily median of comments/user/day — as you collect 20 daily medians, their distribution converges to normal by CLT. Center stays fixed (true median), variance shrinks as 1/√20.`,interview_tip:"Meta/Netflix OA tests CLT directly. Know: what it states, why it works, conditions it requires, and why it enables A/B testing even with non-normal underlying metrics."},{title:"Hypothesis Testing Framework",color:"#8B5CF6",content:`**The 4-step framework (say this out loud in interviews):**

1. **State hypotheses:** H₀ (null) vs H₁ (alternative). H₀ is usually "no effect."
2. **Choose test and significance level:** α = 0.05 (5% false positive rate acceptable)
3. **Compute test statistic and p-value**
4. **Make decision:** Reject H₀ if p < α

**p-value definition (critical — many candidates get this wrong):**
P(observing data this extreme or more, ASSUMING H₀ is true)

It is NOT: "probability the null is true" — this is the most common misconception.

**Type I error (α):** Reject H₀ when it's true → False Positive. Launch a feature that has no real effect.
**Type II error (β):** Fail to reject H₀ when it's false → False Negative. Miss a real effect.
**Power (1−β):** Probability of detecting a real effect when one exists.

**Explaining p=0.25 to a PM (Netflix question):**
"If there were truly no difference between our variants, we'd see results this extreme 25% of the time just by chance. That's too high — we can't confidently say the effect is real. We need either more data or a bigger effect."

**Welch's t-test vs Student's t-test:**
- Student's: assumes equal variance and equal n. Almost never use.
- Welch's: works with unequal variance and unequal n. Default for A/B testing.`,interview_tip:"When asked to explain p-value to a non-technical audience: 'It's like a score from 0-100% telling us how likely these results are just from random chance. Lower = more confident the effect is real. We usually require less than 5%.'"},{title:"Confidence Intervals",color:"#06B6D4",content:`**Formula:** CI = X̄ ± z_(α/2) × (σ/√n)

For 95% CI: z_(α/2) = 1.96

**Correct interpretation (interviewers test this):**
"If we repeated this experiment many times and constructed a CI each time, 95% of those intervals would contain the true parameter."

It is NOT: "95% probability the true value is in this interval" — Bayesian framing, not frequentist.

**Coverage probability:** P(CI contains true parameter) over repeated experiments = 1−α = 95%.

**Wide CI means → large SE → either:**
- Small sample size (n too small)
- High variance in the metric (heterogeneous user behavior)
- Or both

**Meta interview: given 3 CIs on a chart, what can you say?**
- If CI crosses zero: not statistically significant
- Wide CI: uncertainty is high, need more data
- CIs that don't overlap: the two groups are significantly different
- All CIs wide: heterogeneous population — consider segmenting`,interview_tip:"The CI width interpretation is a high-signal question. Wide CI → high SE → two possible causes (small n OR high variance). Always mention both and explain how you'd diagnose which."}],practice_questions:[{q:"What is the Central Limit Theorem and why is it important for A/B testing?",a:"CLT: The sampling distribution of the sample mean approaches Normal as n→∞, regardless of the underlying distribution. For A/B testing: individual user metrics (revenue, comments) are skewed, but group means are approximately Normal — this justifies using z-tests/t-tests to compare treatment vs control.",company:"Meta/Netflix OA",difficulty:"Medium",say_aloud:"Start with: 'CLT tells us that even when individual data is messy and skewed, the average of a large enough sample will be normally distributed. In A/B testing, this is the reason we can use standard statistical tests even though user behavior is highly non-normal.'"},{q:"p=0.25 in your A/B test. What does this mean in plain English? What do you tell the PM?",a:"p=0.25 means: if there were truly no difference between variants, we'd see results this extreme 25% of the time by chance alone. Too high to be confident. Tell PM: 'We can't conclude the feature has a real effect. Options: run longer to get more data, or if the effect size is this small it may not be worth launching anyway.'",company:"Netflix",difficulty:"Easy",say_aloud:"Anchor: 'p-value tells us how surprising our result would be if nothing was actually happening.' Then: 'p=0.25 is not surprising at all — 25% of the time we'd see this just by chance. We need it below 5% to be confident.'"},{q:"Given 3 confidence intervals on a chart — one wide, one narrow, one that crosses zero — interpret them.",a:"Crosses zero: not statistically significant — true effect could be positive, zero, or negative. Wide CI: high uncertainty — either small sample or high metric variance, need more data. Narrow CI: well-estimated, high confidence in the effect size. Key: width ≠ significance; a narrow CI that crosses zero is still non-significant.",company:"Meta",difficulty:"Medium",say_aloud:"Structure your answer: 'Let me go through each one. First...' Then end with the key insight: 'The most important thing isn't width, it's whether it crosses zero — that determines statistical significance.'"},{q:"What is Type I vs Type II error? In a spam detection model, which is worse?",a:"Type I (α): false positive — flag legitimate content as spam. Type II (β): false negative — let real spam through. For spam detection: Type I is worse — blocking legitimate user posts destroys trust and creates false reports. Better to let some spam through than wrongly penalize good users. Context: for medical diagnosis, Type II (missing cancer) is usually worse.",company:"Meta/All",difficulty:"Easy",say_aloud:"Always contextualize: 'It depends on the cost of each error in this specific setting.' Then map to the use case. Shows you think about practical implications, not just definitions."},{q:"A/B test result: treatment has higher engagement (p=0.01) but lower DAU (p=0.03). The CI for DAU impact is [-3%, -0.1%]. Should you launch?",a:"Don't launch automatically. The DAU CI is entirely negative — even the optimistic end shows -0.1% DAU loss. Steps: (1) Is -0.1% to -3% DAU loss acceptable for the business? (2) Which users drive the DAU drop — segment by cohort, country, platform. (3) Is engagement gain durable or novelty effect? (4) Model long-term LTV: does higher engagement compensate? Never launch with a statistically significant guardrail violation without explicit leadership sign-off.",company:"Meta",difficulty:"Hard",say_aloud:"Open with: 'I wouldn't auto-launch even though the primary metric is significant, because we have a significant guardrail violation.' Then walk through your framework step by step."}],derivations:["Write CLT statement from memory: √n(X̄ₙ − μ)/σ → N(0,1) as n→∞","Write 95% CI formula: X̄ ± 1.96 × σ/√n","Write sample size formula: n = (z_α/2 + z_β)² × 2σ² / δ² (you'll need this in Week 4)","Explain p-value without using 'probability the null is true'","State when to use Welch's vs Student's t-test"],resources:[{name:"3Blue1Brown: But what is the Central Limit Theorem?",url:"https://www.youtube.com/watch?v=zeJD6dqJ5lo"},{name:"Seeing Theory: visual hypothesis testing",url:"https://seeing-theory.brown.edu/frequentist-inference/index.html"},{name:"Penn State STAT 415: Hypothesis Tests",url:"https://online.stat.psu.edu/stat415"}],tomorrow_preview:"Day 4: Statistical Tests + Meta Ads Probability. You'll compute E[X] and Var[X] for the Meta ad placement question (4% per post vs 1-per-25). Also covers sample size formula derivation — the formula you wrote today under derivations."},$p={day:4,title:"Statistical Tests + Ads Probability",date_note:"Day 4 — Tests, sample size, and the Meta ad placement problem",prev_day:3,next_day:5,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Day 3 Recap — CLT, Hypothesis Testing & CIs (5 min)",points:["CLT: sample mean is approximately Normal for large n, regardless of underlying distribution — this is what justifies z-tests in A/B testing","p-value = P(data this extreme or more | H₀ is true). NOT the probability H₀ is true","Type I error (α) = false positive (reject true H₀). Type II error (β) = false negative (miss real effect). Power = 1 − β","95% CI = X̄ ± 1.96 × σ/√n. Correct interpretation: 95% of such intervals cover the true parameter over repeated experiments","Wide CI → large SE → either small n OR high metric variance (σ). Always diagnose which before acting","Welch's t-test (unequal variances): the default for A/B testing. Student's t-test assumes equal variance — almost never use it"]},topics:[{title:"Statistical Tests — t-test, Chi-Square, Mann-Whitney U",color:"#F59E0B",content:`**Two-sample t-test (Welch's) — comparing two group means:**
  t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)

  When to use: continuous metric (session time, revenue, watch time), comparing treatment vs control
  Assumptions: approximately normal OR n large enough (CLT), independent samples
  df: Welch-Satterthwaite approximation (automatically handled by scipy.stats.ttest_ind)

**One-sample t-test:**
  t = (X̄ − μ₀) / (s / √n)
  When: testing if a single group mean equals a hypothesized value
  Example: 'Is our new feature's avg session time significantly different from last month's 10 min?'

**Chi-square (χ²) test of independence:**
  χ² = Σ (O − E)² / E, where O = observed count, E = expected count
  df = (rows − 1) × (cols − 1)
  When: testing independence between two categorical variables
  Example: Is click rate independent of device type (mobile/desktop/tablet)?
  Example: Is there a randomization imbalance — is treatment assignment independent of user country?

**Mann-Whitney U test (Wilcoxon rank-sum):**
  Non-parametric test: compare rank distributions, not raw values
  H₀: the two distributions are identical (no location shift)
  When to prefer over t-test:
    • Data is heavily skewed (revenue, video watch time)
    • Ordinal data (ratings 1-5)
    • Small sample size with visible outliers
    • Distribution is clearly non-normal and n is too small for CLT
  Drawback: slightly less statistical power than t-test on normally distributed data
  Python: scipy.stats.mannwhitneyu(x, y, alternative='two-sided')

**Decision tree for which test:**
  Two groups, continuous metric, n large or normal? → t-test
  Two groups, continuous metric, skewed or small n? → Mann-Whitney U
  Two categorical variables, testing independence? → Chi-square
  One group vs a target value? → One-sample t-test
  More than two groups? → ANOVA (or Kruskal-Wallis for non-parametric)`,interview_tip:"Interviewers often follow 't-test' answers with 'what if the data is skewed?' → Mann-Whitney U. Then 'what if you have a binary outcome?' → proportion z-test or chi-square. Know the full decision tree — it signals you think about assumption violations, not just happy-path statistics."},{title:"Sample Size Formula — Derivation & Intuition",color:"#8B5CF6",content:`**The formula (for proportions — most common in product A/B tests):**
  n = (z_{α/2} + z_β)² × 2p̄(1 − p̄) / δ²

  where:
  • z_{α/2} = critical value for significance level (1.96 for α=0.05 two-sided)
  • z_β = critical value for desired power (0.84 for 80% power, 1.28 for 90% power)
  • p̄ = pooled baseline proportion (often ≈ baseline conversion rate)
  • δ = minimum detectable effect (MDE) — smallest lift you care about

**For means (continuous metric):**
  n = (z_{α/2} + z_β)² × 2σ² / δ²
  where σ² is the metric variance (estimate from historical data)

**Worked example:**
  Baseline conversion = 5%. You want to detect a 1pp lift (δ=0.01).
  α=0.05 (z_{α/2}=1.96), 80% power (z_β=0.84)
  p̄ = 0.05, 1−p̄ = 0.95

  n = (1.96 + 0.84)² × 2 × 0.05 × 0.95 / (0.01)²
    = 7.84 × 0.095 / 0.0001
    = 0.7448 / 0.0001
    = 74,480 users per group

**Intuitions to memorize (interviewers ask these):**
  • n ∝ 1/δ² → halving the MDE QUADRUPLES sample size — small effects are very expensive to detect
  • n ∝ σ² → higher metric variance → more users needed. Can be reduced by CUPED/variance reduction
  • n ∝ (z_{α/2} + z_β)² → going from 80% to 90% power increases n by ~33%
  • Larger baseline p̄ → variance p̄(1−p̄) is maximized at p̄=0.5 → most expensive to test near 50% CTR

**Why this matters in practice:**
  If you can't get enough users: (1) lower the power requirement, (2) increase MDE threshold, (3) run longer, (4) reduce variance (CUPED, stratification), (5) target a high-base-rate segment first`,interview_tip:"Be ready for: 'Our test ran for 2 weeks and had p=0.08. The PM wants to extend it. What do you say?' Answer: (1) Check if you were underpowered from the start — what n did you plan for vs what you got? (2) Extending CAN work but risks p-hacking if you stop at the first significant result. (3) Set a pre-defined stopping rule."},{title:"Meta Ad Placement — Binomial vs Deterministic",color:"#10B981",content:`**The problem setup:**
  100 posts in a user's feed. Two ad placement methods:
  Method 1 (Binomial): each post is an ad independently with probability 4%
  Method 2 (Deterministic): exactly 1 ad per every 25 posts (fixed positions: post 25, 50, 75, 100)

**Expected value — same for both:**
  Method 1: E[X] = np = 100 × 0.04 = 4 ads
  Method 2: 100/25 = 4 ads exactly

**Variance — this is where they differ:**
  Method 1: Var[X] = np(1−p) = 100 × 0.04 × 0.96 = 3.84
  Method 2: Var[X] = 0 (deterministic — ALWAYS exactly 4 ads)

**P(seeing > 8 ads | Method 1) — using Normal approximation:**
  X ~ Binomial(100, 0.04) ≈ Normal(μ=4, σ²=3.84)
  z = (8 − 4) / √3.84 = 4 / 1.96 ≈ 2.04
  P(X > 8) ≈ P(Z > 2.04) ≈ 1 − 0.979 = 2.1%

**Which method would you recommend to Meta and why?**
  Recommend Method 2 (Deterministic):
  • Zero variance → completely predictable user experience
  • No user will ever see 8+ ads in one scroll (which happens ~2% of the time with Method 1)
  • Easier to audit and enforce ad load policies
  • Method 1 has 'bad days' — users who see 8-12 ads are much more likely to churn

  But there are tradeoffs to mention:
  • Method 1 is easier to implement and more flexible for dynamic content
  • Method 2 may miss opportunities if some posts have higher ad relevance
  • In practice Meta uses a hybrid: targeting, pacing, and auction systems add variability within guardrails

**The key insight to communicate:**
  Both methods have the same MEAN impact on users, but Method 1 has variance — meaning some users have terrible experiences (high ad load) while others have great ones (low ad load). For user experience, you want to minimize variance around the expected ad load.`,interview_tip:"This exact problem (or a close variant) is a top-5 Meta DS interview question. Know E[X] and Var[X] for Binomial cold. Know that Var[X]=0 for deterministic is the key insight. And always have an opinion on which you'd recommend — interviewers want to see product judgment, not just math."},{title:"Bootstrap — When & How",color:"#06B6D4",content:`**What bootstrap is:**
  An empirical method to estimate the sampling distribution of any statistic without making parametric assumptions about the underlying distribution.

**The algorithm:**
  1. Start with your sample of n observations
  2. Draw a bootstrap sample: sample n observations WITH REPLACEMENT
  3. Compute your statistic on this bootstrap sample (mean, median, AUC, custom metric...)
  4. Repeat steps 2-3 B times (B = 1000 is standard)
  5. Bootstrap distribution = the collection of B statistics
  6. Bootstrap SE = std(bootstrap statistics)
  7. Bootstrap 95% CI = [2.5th percentile, 97.5th percentile] of bootstrap statistics

**Python implementation:**
\`\`\`python
import numpy as np
def bootstrap_ci(data, statistic=np.mean, B=1000, ci=95):
    boot_stats = [statistic(np.random.choice(data, size=len(data), replace=True))
                  for _ in range(B)]
    lo = (100 - ci) / 2
    return np.percentile(boot_stats, [lo, 100 - lo])
\`\`\`

**When to use bootstrap over parametric tests:**
  ✓ Complex statistic (median, AUC, Gini, ratio, percentile, correlation)
  ✓ Small sample size (n < 30) where CLT doesn't apply
  ✓ Non-normal, heavy-tailed distribution (revenue, engagement time)
  ✓ No known closed-form formula for the SE of your statistic

**When NOT to use bootstrap:**
  ✗ Large n + simple statistic (mean, proportion) → parametric CI is faster and just as valid
  ✗ Time-series data with autocorrelation → standard bootstrap breaks (need block bootstrap)
  ✗ Extreme outliers in tiny samples → bootstrap may be unstable

**Key assumption:**
  Your sample is a good approximation of the population. Bootstrap resamples FROM YOUR DATA — if your sample is biased, the bootstrap distribution is also biased.`,interview_tip:"If asked 'when would you use bootstrap vs a t-test?' — the answer is about the STATISTIC, not just the distribution. 'Bootstrap is most useful when I can't derive the analytic SE of my statistic — for example, for a median CI or an AUC CI. For a mean on large n, the t-test is computationally simpler and statistically equivalent.' This is a cleaner answer than 'when data is not normal.'"}],practice_questions:[{q:"Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute E[X] and Var[X] for each. Which do you recommend and why?",a:"E[X]=4 for both. Var(Method 1) = 100×0.04×0.96 = 3.84. Var(Method 2) = 0 (deterministic). Recommend Method 2: zero variance means perfectly predictable user experience — no user will ever see 8+ ads in one scroll. Method 1 creates ~2% of sessions with 9+ ads, which drives churn. Same expected ad revenue, better worst-case UX.",say_aloud:"State E[X] first (same for both), then show the Var calculation. Var(Binomial) = np(1-p). Var(Deterministic) = 0. Then give your recommendation with reasoning — always close with a product judgment.",company:"Meta",difficulty:"Hard"},{q:"What is bootstrapping? When do you use it over a parametric test?",a:"Bootstrap: resample your data with replacement B=1000 times, compute the statistic each time, get an empirical sampling distribution. Use it when: (1) complex statistic with no closed-form SE (median, AUC, ratio), (2) small sample where CLT doesn't apply, (3) heavily skewed distribution. Drawback: assumes your sample is representative of the population.",say_aloud:"Lead with the algorithm: 'Resample with replacement, compute statistic, repeat 1000 times, take percentiles.' Then lead with the use case: 'Most useful when I can't derive the analytic SE — for example, a median CI doesn't have a simple formula, but bootstrap gives me one immediately.'",company:"Meta/All",difficulty:"Medium"},{q:"What is the Mann-Whitney U test? When is it preferred over a t-test?",a:"Mann-Whitney U: non-parametric test comparing whether one group's values tend to be ranked higher than another's (ranks the combined data, compares rank sums). Preferred over t-test when: data is heavily non-normal (e.g., revenue), ordinal data (1-5 star ratings), small samples with outliers. Slight power loss vs t-test on normal data — but more robust to assumption violations.",say_aloud:"Start with when: 'If the data is severely skewed or we have small n with outliers, the t-test assumptions break down. Mann-Whitney U doesn't require normality — it ranks the data and compares rank distributions.' Then name the tradeoff: 'It has slightly less power on normal data.'",company:"Meta/All",difficulty:"Medium"},{q:"Baseline conversion rate is 5%. You want to detect a 1pp lift with 80% power at α=0.05. Estimate the sample size needed per group.",a:"n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². z_{0.025}=1.96, z_{0.20}=0.84. n = (1.96+0.84)² × 2×0.05×0.95 / (0.01)² = 7.84 × 0.095 / 0.0001 = 74,480 per group. Key insight: δ² in denominator means halving the MDE quadruples the needed n.",say_aloud:"Write the formula first, then label each component. Plug in numbers systematically. End with the intuition: 'Notice that the MDE is squared in the denominator — this is why small effects are so expensive to detect. Going from detecting a 2% lift to 1% lift requires 4× more users.'",company:"Meta/Airbnb",difficulty:"Hard"},{q:"K meetings randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",a:"This is size-biased sampling — you're more likely to walk into a busier room. E[X in room | meeting in progress] = E[X²]/E[X]. For Poisson(λ=K/N): E[X]=K/N, E[X²]=Var+E[X]²=K/N+(K/N)². Result: E[X²]/E[X] = 1 + K/N. For large N (sparse meetings): ≈ 1 + K/N.",say_aloud:"Name the phenomenon first: 'This is size-biased sampling — I'm conditioning on being in a room that has a meeting, so rooms with more meetings are sampled with higher probability.' The key formula is E[X|selected] = E[X²]/E[X]. This is an advanced question — if you can name it and set up the formula, that's already impressive.",company:"Meta",difficulty:"Hard"}],derivations:["Write the two-sample t-test statistic from memory: t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)","Write the chi-square statistic: χ² = Σ(O−E)²/E. State when you use it vs t-test","Write the sample size formula for proportions: n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². Plug in α=0.05, 80% power.","Write E[X] and Var[X] for Binomial(n, p). Apply: n=100, p=0.04. Show Var(deterministic)=0.","Write the bootstrap_ci() function in Python: np.random.choice with replace=True → loop B=1000 → np.percentile([2.5, 97.5])"],resources:[{name:"Evan Miller Sample Size Calculator",url:"https://www.evanmiller.org/ab-testing/sample-size.html"},{name:"Penn State STAT 415: Hypothesis Tests",url:"https://online.stat.psu.edu/stat415"},{name:"StatQuest: Bootstrapping",url:"https://www.youtube.com/watch?v=Xz0x-8-cgaQ"},{name:"StatQuest: Mann-Whitney U test",url:"https://www.youtube.com/watch?v=cqEwl0XQxpE"}],flashcards:[{q:"Two-sample t-test statistic?",a:"t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)"},{q:"Chi-square statistic?",a:"χ² = Σ(O − E)²/E. Use to test independence between two categorical variables."},{q:"When to use Mann-Whitney U vs t-test?",a:"Mann-Whitney U when data is skewed, ordinal, or small n with outliers. t-test when data is approximately normal or n is large."},{q:"Sample size formula (proportions)?",a:"n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ²"},{q:"z-values to memorize for sample size?",a:"α=0.05 two-sided: z_{α/2}=1.96. 80% power: z_β=0.84. 90% power: z_β=1.28."},{q:"If you halve the MDE, what happens to sample size?",a:"Quadruples. n ∝ 1/δ² — the MDE is squared in the denominator."},{q:"Meta ads: E[X] for Binomial(100, 0.04)?",a:"E[X] = np = 4. Var[X] = np(1-p) = 3.84. Deterministic: E[X]=4, Var[X]=0."},{q:"Bootstrap CI — 3-step algorithm?",a:"1. Resample n obs with replacement, B=1000 times. 2. Compute statistic each time. 3. Take 2.5th and 97.5th percentiles."},{q:"Best use case for bootstrap (not just 'skewed data')?",a:"Complex statistic with no closed-form SE: median CI, AUC CI, ratio CI, any custom metric."},{q:"Why is Welch's t-test preferred over Student's for A/B testing?",a:"Student's assumes equal variance. Welch's works with unequal variance and unequal group sizes — both common in A/B tests."},{q:"P(X > 8) for Binomial(100, 0.04) using Normal approx?",a:"μ=4, σ=√3.84≈1.96. z=(8-4)/1.96≈2.04. P(Z>2.04)≈2.1%."},{q:"What is size-biased sampling?",a:"When sampling probability is proportional to size. E.g., walking into a room — larger rooms are more likely to be sampled. E[X|selected] = E[X²]/E[X]."}],tomorrow_preview:"Day 5: Statistics Deep Practice — Simpson's Paradox, Bayesian fraud detection (the 1% base rate trap), compound distributions (Law of Total Expectation), and bootstrap CI vs parametric CI. These are the applied stats questions that show up most in Meta product DS rounds."},Jp={day:5,title:"Statistics Deep Practice",date_note:"Day 5 — Applied Stats: Bias, Bayes & Compound Distributions",prev_day:4,next_day:6,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Day 4 Recap — Statistical Tests & Meta Ads Probability (5 min)",points:["Two-sample t-test: t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂). Use when comparing group means, variance unknown","Chi-square test: χ² = Σ(O − E)²/E. Tests independence between categorical variables (e.g. feature × device type)","Mann-Whitney U: non-parametric alternative when data is skewed/non-normal — ranks instead of raw values","Sample size formula: n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². For 80% power, α=0.05: z_{0.025}=1.96, z_{0.2}=0.84","Meta Binomial (4% per post) vs Deterministic (1 ad per 25 posts): E[X] same ≈ 0.04, but Var[X]=0.0384 vs 0 — Deterministic has zero variance","Bootstrap CI: resample with replacement B=1000 times, compute statistic each time, take 2.5th and 97.5th percentiles"]},topics:[{title:"Simpson's Paradox — Detect & Handle",color:"#F59E0B",content:`**What it is:** A trend appears in subgroups but reverses (or disappears) when those subgroups are combined. The culprit is always a lurking confounding variable that correlates with both group membership and the outcome.

**The classic example — Berkeley Admissions (1973):**
  Overall: Women had a lower acceptance rate than men (30% vs 44%) → looks like gender bias
  By department: Women had a HIGHER acceptance rate in 4 of 6 departments
  Why: Women disproportionately applied to more competitive departments (low acceptance rate)
  The confounder: department choice

**Step-by-step detection:**
1. Compare the aggregated metric across groups
2. Stratify by any suspected confounders and compare within strata
3. If the direction flips → Simpson's Paradox

**Real DS example at FAANG:**
'Feature A has higher conversion overall (10% vs 8%), but lower conversion for both mobile and desktop users separately.'
Root cause: Feature A was rolled out to high-intent users (who convert more regardless). Group composition, not the feature, drives the aggregate number.

**How to handle:**
  Option 1: Stratify — report metrics per stratum (mobile, desktop, country, etc.)
  Option 2: Regression — include the confounder as a covariate to control for it
  Option 3: Randomized A/B test — randomization ensures groups are balanced on confounders
  Option 4: DiD (Difference-in-Differences) if you can't randomize

**Key mental model:**
Whenever you see an aggregate metric that surprises you, ask: 'What's the composition of each group? Is one group disproportionately from a high/low baseline segment?'`,interview_tip:"Meta and Airbnb ask this constantly in product cases. The answer structure: (1) Name the paradox, (2) Identify the confounder, (3) Stratify and show the flip, (4) Recommend the correct analysis. Saying 'Simpson's Paradox' by name signals senior-level stats fluency."},{title:"Bayesian Fraud Detection — The Base Rate Trap",color:"#8B5CF6",content:`**The setup:** Bad actor rate = 1% of users. Model accuracy = 99% sensitivity AND 99% specificity. A user is flagged. What's P(bad | flagged)?

**The intuitive wrong answer:** 99%  
**The correct answer:** 50%

**Why — working the math with a concrete population of 10,000 users:**
  Bad actors: 10,000 × 1% = 100
  Good users: 10,000 × 99% = 9,900

  Model flags bad actors: 100 × 99% = 99 (True Positives)
  Model flags good users: 9,900 × 1% = 99 (False Positives)

  Total flagged: 99 + 99 = 198
  P(bad | flagged) = 99 / 198 = **50%**

**Bayes theorem form:**
  P(bad|flagged) = P(flagged|bad) × P(bad) / P(flagged)
               = 0.99 × 0.01 / (0.99×0.01 + 0.01×0.99)
               = 0.0099 / 0.0198 = 0.5

**The key insight — base rate dominance:**
When a condition is rare (1%), even a highly accurate test generates roughly as many false positives as true positives. To improve precision you need either:
  (a) Higher specificity (reduce false positive RATE), or
  (b) A higher prior (target a sub-population with higher base rate)

**Variant: 95% accuracy:**
  TP: 100 × 95% = 95
  FP: 9,900 × 5% = 495
  P(bad|flagged) = 95 / (95+495) = 95/590 ≈ 16%
  Mental shortcut: FP ≈ base_rate_good × FPR >> TP when base rate is tiny

**Applied DS angle:**
This is why fraud/abuse teams at Meta, Airbnb, and Uber:
  - Don't auto-ban on a single flag — stack signals
  - Use behavioral features to raise the prior (target suspicious sub-populations)
  - Accept high recall (catch all bad actors) at cost of precision (some FP)
  - Apply human review at the precision/recall tradeoff point`,interview_tip:"ALWAYS solve with a concrete population (10,000 users). This makes the math transparent to interviewers and prevents arithmetic errors. Never try to solve P(A|B) abstractly in an interview — draw a 2×2 confusion matrix first."},{title:"Expected Value & Variance of Compound Distributions",color:"#10B981",content:`**Law of Total Expectation:**
  E[X] = E[E[X|Y]]
  'Average over Y of the conditional expectation of X given Y'

**Law of Total Variance:**
  Var[X] = E[Var[X|Y]] + Var[E[X|Y]]
  'Average within-group variance + variance of group means'

**Example — Email clicks:**
  N ~ Poisson(λ=10) emails opened per day
  Each email: click probability p = 0.2 independently
  X = total clicks per day = sum of N Bernoulli(p) trials

  E[X] = E[E[X|N]] = E[Np] = λp = 10 × 0.2 = 2
  Var[X] = E[Var[X|N]] + Var[E[X|N]]
         = E[Np(1−p)] + Var[Np]
         = λp(1−p) + p²λ
         = λp(1−p+p) = λp = 2
  → Compound Poisson-Binomial → Poisson! E[X] = Var[X] = λp

**Mean vs Median — when to use which:**
  Use MEAN when: data is symmetric, no heavy outliers, need mathematical tractability (CI formulas, regression)
  Use MEDIAN when: data is skewed (income, revenue, app usage time), presence of outliers, reporting to stakeholders
  Rule of thumb: |Mean − Median| / SD > 0.1 → distribution is skewed enough to prefer median
  Report both: a large divergence is itself informative (signals heavy tail)

**Statistical Interaction:**
  An interaction is when the effect of variable A on Y depends on the value of variable B.
  Example: A new onboarding flow lifts 7-day retention by +5pp for mobile users but −2pp for desktop.
  In regression: Y = β₀ + β₁·feature + β₂·mobile + β₃·feature·mobile (the interaction term)
  A significant β₃ means the effect of 'feature' is different on mobile vs desktop.
  Interview pattern: 'You observe the treatment effect varies by segment' → suggest including interaction terms

**Confounding variable:**
  A variable that affects BOTH the independent variable (treatment) AND the dependent variable (outcome).
  It creates a spurious association that is not causal.
  Classic: ice cream sales vs drowning deaths (both driven by summer / hot weather)
  DS example: longer session time correlates with higher revenue — but both are driven by user intent
  Fix: randomize (A/B test) so groups are balanced on all confounders, or control via regression`,interview_tip:"Law of Total Variance is an interview differentiator — most candidates know E[X|Y] but not Var[X]. Know both cold. The decomposition 'between-group + within-group variance' also connects to ANOVA, which may come up in ML context."},{title:"Coverage Probability, Bootstrap CI vs Parametric CI",color:"#06B6D4",content:`**Coverage probability:**
  The true meaning of a 95% CI: if you repeated the experiment many times and built a CI each time, 95% of those CIs would contain the true parameter.
  NOT: '95% chance the true value is in this interval' (that's a Bayesian credible interval).

**Parametric CI (the standard formula):**
  CI = X̄ ± z_{α/2} × σ/√n (or use t-distribution for small n)
  Assumptions: data is approximately Normal, or n is large enough for CLT to kick in
  Works well for: means, proportions, regression coefficients

**Bootstrap CI:**
  Algorithm:
    1. Draw B=1000 bootstrap samples: sample n observations WITH replacement
    2. Compute your statistic (mean, median, AUC, etc.) for each bootstrap sample
    3. Sort the B statistics → take 2.5th and 97.5th percentiles as the 95% CI
  Assumptions: virtually none — works for any statistic, any distribution
  Works when: you can't derive the analytic formula, data is skewed, statistic is complex (AUC, Gini, custom metric)

**When to use bootstrap vs parametric:**
  Parametric preferred: large n (CLT applies), simple statistic (mean, proportion), need speed
  Bootstrap preferred: small n, skewed distribution, complex statistic, Median CI, AUC CI, anything where the analytic formula isn't known

**Selection bias — the CI killer:**
  Selection bias: the sample is not representative because selection into the sample is non-random and correlated with the outcome.
  Examples:
    Survivorship bias: studying companies that exist today to learn about success → missing all the failures
    Opt-in bias: users who opt into a voluntary feature are different from typical users
    Collider bias (advanced): conditioning on a shared effect of two independent causes creates spurious correlation
  Effect on CI: your CI is centered on the wrong parameter — you're estimating the mean FOR YOUR BIASED SAMPLE, not for the true population
  Fix: audit the selection mechanism, use weighting (inverse probability weighting), collect data differently`,interview_tip:"If asked 'why is your CI wide?' give both causes: (1) small sample size → SE = σ/√n is large, or (2) high metric variance → σ is large. Then say how you'd diagnose which: look at n and at the raw distribution of the metric. This two-pronged answer signals statistical maturity."}],practice_questions:[{q:"Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad?",a:"P(bad|flagged) = 50%. In 10,000 users: 100 bad actors, 9,900 good. Model correctly flags 99 bad actors (TP) and incorrectly flags 99 good users (FP). Total flagged = 198. P(bad|flagged) = 99/198 = 50%. The base rate (1%) dominates — rare events produce roughly equal TP and FP even with 99% accuracy. Bayes form: 0.99×0.01 / (0.99×0.01 + 0.01×0.99) = 0.5.",say_aloud:"Open with: 'Let me use a concrete population to make this transparent.' Then: 10,000 users, 100 bad, 9,900 good. Walk through TP=99, FP=99, total flagged=198. End with: 'This is the base rate problem — rare events generate as many false positives as true positives even with high accuracy.'",company:"Meta",difficulty:"Hard"},{q:"What is Simpson's Paradox? Give a real example. How do you detect and handle it in a dataset?",a:"A trend that appears in subgroups reverses when combined — caused by a confounding variable that correlates with group membership and outcome. Classic: Berkeley admissions — women had lower overall acceptance but higher in most departments (women applied to harder departments). Detection: compare aggregate metric vs stratified metric; if direction flips, you have Simpson's Paradox. Handle: (1) stratify by confounder, (2) add confounder as covariate in regression, (3) randomize if possible.",say_aloud:"Structure: definition → example → why it happens (confounder) → how to detect → how to fix. End with the general lesson: 'Whenever an aggregate metric surprises you, always ask whether the group composition is driving the result rather than the actual effect.'",company:"Meta",difficulty:"Medium"},{q:"What is selection bias? Give an example in A/B testing. How would you address it?",a:"Selection bias: sample is non-representative because inclusion in the sample correlates with the outcome. A/B testing example: opt-in bias — if users choose whether to see the new feature, those who opt in are already more engaged. Result: the treatment group has a higher baseline, making the feature look better than it is. Fix: force randomization at the time of assignment (not opt-in), use Intent-to-Treat analysis, or apply inverse probability weighting to re-weight the sample.",say_aloud:"Start with the general definition, then give the A/B opt-in example specifically — it shows you connect stats to product work. Then propose the fix. This pattern (definition → concrete example → fix) is the gold standard structure.",company:"Meta/All",difficulty:"Medium"},{q:"When would you use mean vs median to describe a dataset? How do you decide?",a:"Median when data is skewed or has outliers: income, revenue, app usage time, session length. Mean when data is symmetric and outlier-free: standardized test scores, physical measurements. Decision rule: |Mean − Median| / SD > ~0.1 signals meaningful skew → prefer median. In practice, report both — a large gap between them is itself informative (confirms heavy tail or outliers). For business reporting: median is more honest for skewed metrics; mean is required for budgeting (total = mean × n).",say_aloud:"Give the rule, then the exception: 'Even for skewed data, you sometimes need the mean — for example, total revenue = mean revenue × n, so the mean is required for forecasting total impact. But for describing a typical user, median is better.'",company:"Meta/All",difficulty:"Easy"},{q:"You run an A/B test and find the treatment lifts engagement by +8% for mobile users but reduces it by −3% for desktop users. Overall lift is +4%. How do you interpret this? What should you do?",a:"This is a heterogeneous treatment effect (statistical interaction). The overall +4% is a weighted average that masks opposite effects by segment. Steps: (1) Confirm the interaction with a formal interaction test (add treatment×device term to regression, check if significant). (2) Report segment-specific effects — never just the aggregate. (3) Decision: launch only on mobile if desktop is a guardrail, or make the feature mobile-only. (4) Investigate WHY the effect differs — it might reveal product insight (e.g. desktop users prefer different UX).",say_aloud:"Name the concept first: 'This is a heterogeneous treatment effect — the treatment interacts with device type.' Then walk through the analysis steps and recommend the launch decision. Mention the interaction test — this signals you know how to formally test for it, not just eyeball it.",company:"Meta/Airbnb",difficulty:"Hard"},{q:"What is a confounding variable? Give an example. How does randomization fix it?",a:"A confounder affects both the treatment assignment and the outcome, creating a spurious association. Example: users who use the app during commute hours have both longer sessions AND higher purchase rates — commute timing (the confounder) drives both. If you compare high-session vs low-session users, the relationship looks causal but isn't. Randomization fixes it by breaking the link between confounders and treatment assignment. In a proper A/B test, commute-time users are equally split across treatment and control, so that confounder is balanced out.",say_aloud:"Give the definition, then a concrete example that's relevant to the interviewer's industry. End with the key insight: 'Randomization doesn't eliminate confounders — it balances them equally across groups, so they cancel out in the comparison.'",company:"Meta/All",difficulty:"Medium"}],derivations:["Draw and fill a 2×2 confusion matrix for P(bad|flagged): 10,000 users, 1% base rate, 99% accuracy. Compute precision from it.","Write Bayes theorem for P(bad|flagged) in full: numerator + denominator, then evaluate with numbers","Write Law of Total Expectation: E[X] = E[E[X|Y]]. Apply: N~Poisson(10), each email clicked with p=0.2, find E[total clicks]","Write the confounding variable definition: affects BOTH treatment AND outcome. Draw the directed acyclic graph: X ← C → Y","State the correct interpretation of a 95% CI from memory. Then state the incorrect interpretation. Know why the incorrect one is wrong."],resources:[{name:"StatQuest: Simpson's Paradox",url:"https://www.youtube.com/watch?v=ebEkn-BiW5k"},{name:"3Blue1Brown: Bayes Theorem (visual intuition)",url:"https://www.youtube.com/watch?v=HZGCoVF3YvM"},{name:"Causal Inference: The Mixtape Ch. 1 — confounding & selection bias (free)",url:"https://mixtape.scunning.com"},{name:"Bootstrap CI explainer — StatQuest",url:"https://www.youtube.com/watch?v=Xz0x-8-cgaQ"}],flashcards:[{q:"Simpson's Paradox: what causes it?",a:"A confounding variable that correlates with both group membership and outcome — causes trends to reverse when data is aggregated vs stratified"},{q:"1% base rate, 99% accuracy model. P(bad | flagged) = ?",a:"50%. TP = 99, FP = 99. P = 99/(99+99) = 0.5. Base rate dominates."},{q:"Law of Total Expectation?",a:"E[X] = E[E[X|Y]] — average over Y of the conditional expectation"},{q:"Law of Total Variance?",a:"Var[X] = E[Var[X|Y]] + Var[E[X|Y]] — within-group variance + between-group variance"},{q:"When to use median over mean?",a:"When data is skewed or has outliers (income, revenue, session length). Mean >> Median = right skew = prefer median."},{q:"Bootstrap CI — algorithm in 3 steps?",a:"1. Sample n obs WITH replacement, B=1000 times. 2. Compute statistic each time. 3. Take 2.5th and 97.5th percentiles."},{q:"Bootstrap CI vs parametric CI — when to use bootstrap?",a:"Bootstrap: complex statistic (AUC, median), skewed distribution, small n, no known analytic formula. Parametric: large n, simple statistic (mean, proportion), need speed."},{q:"Correct interpretation of 95% CI?",a:"If you repeated the experiment many times and built a CI each time, 95% of those CIs would contain the true parameter."},{q:"What is a confounding variable?",a:"A variable that affects BOTH the treatment AND the outcome, creating a spurious association. Randomization balances confounders across groups."},{q:"What is selection bias? One example?",a:"Non-random inclusion in sample correlates with outcome. Example: opt-in A/B test — users who opt in are already more engaged, biasing results upward."},{q:"How do you detect Simpson's Paradox?",a:"Compare the aggregate metric to the within-stratum metrics. If the direction flips when you stratify by a third variable, you have Simpson's Paradox."},{q:"What causes wide confidence intervals?",a:"Small sample size (n) OR high metric variance (σ). SE = σ/√n — diagnose by checking both n and the raw distribution spread."}],tomorrow_preview:"Day 6: SQL Foundations + Meta Table Patterns. You'll use the AVG(CASE WHEN condition THEN 1 ELSE 0 END) pattern to compute percentages in SQL — the single most common Meta SQL pattern. Also covers GROUP BY vs HAVING, NULL handling, and your first look at the user_actions table structure."},Zp={day:6,title:"SQL Foundations + Meta Table Patterns",date_note:"Day 6 — SQL: from basics to Meta interview patterns",prev_day:5,next_day:7,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Day 5 Recap — Applied Stats Deep Dive (5 min)",points:["Simpson's Paradox: trend reverses when subgroups are combined — always caused by a confounding variable. Fix: stratify, regression, or randomize","Bayesian fraud: 1% base rate + 99% accuracy → P(bad|flagged) = 50%, NOT 99%. Always build the 2×2 confusion matrix with a concrete population","Law of Total Expectation: E[X] = E[E[X|Y]]. Applied: N~Poisson(10), each clicks with p=0.2 → E[clicks] = 2","Bootstrap CI: resample with replacement B=1000 times → take 2.5th and 97.5th percentiles. Use for median CI, AUC CI, any complex statistic","Coverage probability: P(CI contains true parameter) over repeated experiments = 1−α. NOT 'P(true value is in this CI)'","Selection bias kills your CI by shifting the center — the interval is well-calibrated for your biased sample, but wrong for the population"]},topics:[{title:"SQL Core Clauses — The Foundation",color:"#F59E0B",content:`**Execution order (know this cold — it determines what you can reference where):**
  FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

**SELECT** — choose columns and compute expressions
  SELECT user_id, COUNT(*) AS num_actions, AVG(duration) AS avg_duration

**WHERE** — filter ROWS before aggregation (runs before GROUP BY)
  WHERE ds = '2024-01-15' AND action IN ('like', 'comment')
  Cannot reference aliases defined in SELECT — use the expression again

**GROUP BY** — define the granularity of aggregation
  GROUP BY user_id, country
  Every column in SELECT that's not an aggregate must appear in GROUP BY

**HAVING** — filter GROUPS after aggregation (runs after GROUP BY)
  HAVING COUNT(*) > 10
  Can reference aggregate functions — WHERE cannot
  WHERE vs HAVING: WHERE filters rows, HAVING filters aggregated groups

**ORDER BY** — sort the result
  ORDER BY num_actions DESC NULLS LAST

**LIMIT** — cap the output rows
  LIMIT 10

**NULL handling — critical for Meta interviews:**
  NULL ≠ 0 and NULL ≠ ''. NULL is the absence of a value.
  COUNT(*) counts all rows. COUNT(col) skips NULLs.
  AVG(col), SUM(col), MAX(col) all ignore NULLs.
  NULL in a WHERE clause: use IS NULL or IS NOT NULL — never = NULL
  COALESCE(col, 0): returns 0 when col is NULL — use to convert NULLs before aggregation
  Example: COALESCE(duration, 0) treats missing duration as 0 seconds

**IN, BETWEEN, LIKE:**
  WHERE action IN ('view', 'like', 'comment')
  WHERE ds BETWEEN '2024-01-01' AND '2024-01-31'
  WHERE search_query LIKE '%python%' (% = wildcard)`,interview_tip:"The #1 SQL mistake in interviews: using WHERE instead of HAVING to filter on aggregates. If you see yourself filtering on COUNT() or SUM(), you need HAVING. Also: always specify the date partition (WHERE ds = ...) in Meta SQL interviews — they care about query efficiency."},{title:"The Meta Percentage Pattern — AVG(CASE WHEN)",color:"#8B5CF6",content:`**The pattern:**
  AVG(CASE WHEN condition THEN 1 ELSE 0 END)

  This is the Meta standard way to compute a percentage or rate in SQL.
  It creates a binary column (1 if condition met, 0 otherwise) and averages it → gives the proportion.

**Why it works:**
  CASE WHEN gives each row a 1 or 0.
  AVG over a 0/1 column = (count of 1s) / (total rows) = the fraction meeting the condition.

**Alternative (equivalent):**
  SUM(CASE WHEN condition THEN 1 ELSE 0 END) / COUNT(*)
  Use this when you need numerator and denominator separately or want to multiply by 100.0

**Example 1 — % of users who clicked on an Event result:**
  SELECT
    AVG(CASE WHEN result_type = 'event' AND clicked = 1 THEN 1 ELSE 0 END) AS pct_event_clicks
  FROM search_results

**Example 2 — % of daily content that is spam:**
  SELECT
    SUM(CASE WHEN action = 'report' AND extra = 'SPAM' THEN 1 ELSE 0 END) /
    SUM(CASE WHEN action = 'view' THEN 1 ELSE 0 END) AS spam_rate
  FROM user_actions
  WHERE ds = CURRENT_DATE - 1

**Example 3 — acceptance rate per user (aggregated):**
  SELECT
    actor_id,
    AVG(CASE WHEN action = 'accept' THEN 1 ELSE 0 END) AS acceptance_rate
  FROM friend_requests
  WHERE actor_id = 123
  GROUP BY actor_id

**Common variants:**
  • % of DAU on video calls → LEFT JOIN users to calls, flag each DAU as call/no-call, AVG the flag
  • % of searches returning event results → JOIN searches to search_results, flag event rows, AVG
  • % of posts with ≥3 reports → GROUP BY post_id, HAVING, then wrap in outer query and AVG`,interview_tip:"In every Meta SQL round, at least one question will require this pattern. If you see 'what % of...' or 'what fraction of...' or 'what rate of...' — that's your cue. Write it in your first line to signal you know the Meta pattern: AVG(CASE WHEN ... THEN 1 ELSE 0 END)."},{title:"Meta Table Patterns — user_actions, video_calls, friend_requests",color:"#10B981",content:`**user_actions table (the core Meta table):**
  user_actions(ds, user_id, post_id, action, extra)
  • ds: date partition — ALWAYS filter on this first
  • action: 'view' | 'like' | 'comment' | 'reaction' | 'report'
  • extra: additional info (e.g., SPAM for report actions, reaction type for reactions)

  Key pattern — spam detection:
  SELECT
    SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END) AS spam_reports,
    COUNT(CASE WHEN action='view' THEN 1 END) AS total_views,
    SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END) * 1.0 /
    NULLIF(COUNT(CASE WHEN action='view' THEN 1 END), 0) AS spam_view_rate
  FROM user_actions
  WHERE ds = CURRENT_DATE - 1

**video_calls table:**
  video_calls(caller, recipient, ds, call_id, duration)
  Key challenge: BIDIRECTIONAL JOIN — a user participates as EITHER caller OR recipient

  Wrong approach: JOIN ON user_id = caller (misses half the calls)
  Correct approach:
  SELECT u.user_id, SUM(v.duration) AS total_call_time
  FROM dim_all_users u
  LEFT JOIN video_calls v
    ON (u.user_id = v.caller OR u.user_id = v.recipient)
    AND v.ds = CURRENT_DATE - 1
  WHERE u.dau_flag = 1 AND u.country = 'US' AND u.ds = CURRENT_DATE - 1
  GROUP BY u.user_id

  Alternative (cleaner with UNION):
  WITH all_participants AS (
    SELECT caller AS user_id, duration, ds FROM video_calls
    UNION ALL
    SELECT recipient AS user_id, duration, ds FROM video_calls
  )
  SELECT u.user_id, SUM(p.duration)
  FROM dim_all_users u
  LEFT JOIN all_participants p ON u.user_id = p.user_id AND p.ds = CURRENT_DATE - 1
  WHERE u.dau_flag = 1
  GROUP BY u.user_id

**friend_requests table:**
  friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action)
  action values: 'request' | 'accept' | 'reject'
  Each request_id has one 'request' row and possibly one 'accept' or 'reject' row

  Acceptance rate query:
  SELECT
    AVG(CASE WHEN action = 'accept' THEN 1 ELSE 0 END) AS acceptance_rate
  FROM (
    SELECT request_id, MAX(CASE WHEN action = 'accept' THEN 1 ELSE 0 END) AS action
    FROM friend_requests
    WHERE actor_id = 123
    GROUP BY request_id
  ) sub`,interview_tip:"The bidirectional JOIN is the single most common Meta SQL gotcha. When you see a table with 'caller' and 'recipient' (or 'sender'/'receiver', 'follower'/'followee'), immediately think: 'This user can appear in either column — I need to JOIN on both or use UNION ALL.' Writing this in your first attempt signals you've seen this pattern before."},{title:"JOINs, CTEs, and Query Structure",color:"#06B6D4",content:`**JOIN types:**
  INNER JOIN: only rows with matches in BOTH tables
  LEFT JOIN: all rows from left table, NULLs for non-matching right rows
  RIGHT JOIN: all rows from right table (rarely used — just swap tables and use LEFT)
  FULL OUTER JOIN: all rows from both tables, NULLs for non-matches on either side
  CROSS JOIN: every row from left × every row from right (Cartesian product)

**When to use LEFT vs INNER in product analytics:**
  LEFT JOIN when: you want to keep ALL users from a base table and see who participated (e.g., all DAU, whether or not they made a call)
  INNER JOIN when: you only want rows that have matching events in both tables

  Common mistake: using INNER JOIN when counting 'users who did NOT do X'
  Pattern: LEFT JOIN → WHERE right_table.key IS NULL → finds non-participants

**CTEs (WITH clauses) — use freely in interviews:**
  WITH dau AS (
    SELECT user_id FROM dim_all_users
    WHERE dau_flag = 1 AND country = 'FR' AND ds = CURRENT_DATE - 1
  ),
  calls AS (
    SELECT caller AS user_id FROM video_calls WHERE ds = CURRENT_DATE - 1
    UNION ALL
    SELECT recipient AS user_id FROM video_calls WHERE ds = CURRENT_DATE - 1
  )
  SELECT
    AVG(CASE WHEN c.user_id IS NOT NULL THEN 1 ELSE 0 END) AS pct_dau_on_calls
  FROM dau d
  LEFT JOIN calls c ON d.user_id = c.user_id

  CTE vs subquery:
  • CTEs are more readable — name your intermediate steps
  • CTEs can be referenced multiple times (subqueries can't without repeating)
  • Performance is usually equivalent in modern databases
  • Always use CTEs in interviews for readability

**Window functions (often tested):**
  RANK() OVER (PARTITION BY grade_level ORDER BY date DESC)
  ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY timestamp DESC)
  LAG(metric, 1) OVER (PARTITION BY segment ORDER BY date)
  LEAD(metric, 1) OVER (PARTITION BY segment ORDER BY date)

  Use case: 'largest attendance drop between yesterday and today'
  Use LAG or LEAD to access adjacent rows without self-joining`,interview_tip:"Structure your SQL answers like this: (1) State what table you start from, (2) Name any JOINs and why, (3) State the GROUP BY granularity, (4) State the aggregation logic. Speaking this plan out loud before writing shows structured thinking — interviewers reward this. Never just start typing SQL silently."}],practice_questions:[{q:"Tables: searches(date, search_id, user_id, age_group, search_query) and search_results(date, search_id, result_id, result_type, clicked). Q1: How many users searched more than 10 times in the last 7 days? Q2: What % of users clicked on an Event result?",a:"Q1: SELECT COUNT(*) FROM (SELECT user_id FROM searches WHERE date >= CURRENT_DATE - 7 GROUP BY user_id HAVING COUNT(search_id) > 10) sub. Q2: SELECT AVG(CASE WHEN result_type='event' AND clicked=1 THEN 1 ELSE 0 END) FROM search_results. Or per-user: GROUP BY user_id, then take MAX(event_clicked) per user, then AVG across users.",say_aloud:"For Q1: 'I'll GROUP BY user_id and use HAVING to filter for >10 searches, then wrap in a subquery to count the users.' For Q2: 'The Meta percentage pattern — AVG(CASE WHEN result_type=event AND clicked THEN 1 ELSE 0 END). This gives the fraction of all result rows that were event clicks.' Ask the interviewer: 'Do you want % of search sessions, or % of result rows?'",company:"Meta",difficulty:"Medium"},{q:"Tables: video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, age_bucket, country, dau_flag, ds). Q1: List callers who contacted more than 2 distinct people yesterday. Q2: What % of French DAU were on a video call yesterday?",a:"Q1: SELECT caller FROM video_calls WHERE ds = CURRENT_DATE-1 GROUP BY caller HAVING COUNT(DISTINCT recipient) > 2. Q2: WITH dau AS (SELECT user_id FROM dim_all_users WHERE country='FR' AND dau_flag=1 AND ds=...), calls AS (SELECT caller AS uid FROM video_calls WHERE ds=... UNION ALL SELECT recipient FROM video_calls WHERE ds=...) SELECT AVG(CASE WHEN c.uid IS NOT NULL THEN 1 ELSE 0 END) FROM dau LEFT JOIN calls c ON dau.user_id=c.uid.",say_aloud:"For Q2 — flag the bidirectional join: 'A user on a call appears as either caller OR recipient — I need to handle both. I'll UNION ALL both columns into a single participant CTE.' Then LEFT JOIN DAU to participants and use AVG(CASE WHEN matched THEN 1 ELSE 0 END).",company:"Meta",difficulty:"Hard"},{q:"Table: user_actions(ds, user_id, post_id, action, extra). Q1: What % of daily content users view is spam? Q2: How many distinct posts were reported as spam yesterday?",a:"Q1: SELECT SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END) * 1.0 / NULLIF(SUM(CASE WHEN action='view' THEN 1 ELSE 0 END), 0) AS spam_rate FROM user_actions WHERE ds = CURRENT_DATE-1. Q2: SELECT COUNT(DISTINCT post_id) FROM user_actions WHERE action='report' AND extra='SPAM' AND ds = CURRENT_DATE-1.",say_aloud:"For Q1: 'Spam rate = spam reports / total views. I'll use SUM(CASE WHEN) for numerator and denominator separately. Note: NULLIF(denom, 0) protects against division by zero.' For Q2: 'DISTINCT post_id — a post might be reported multiple times by different users, so I deduplicate.'",company:"Meta",difficulty:"Medium"},{q:"Table: friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action: request/accept/reject). Q1: How many friend requests received a response on Aug 1st 2021? Q2: Overall acceptance rate for requests sent by user 123?",a:"Q1: SELECT COUNT(DISTINCT request_id) FROM friend_requests WHERE action <> 'request' AND ds='2021-08-01'. Q2: SELECT AVG(accepted) FROM (SELECT request_id, MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) AS accepted FROM friend_requests WHERE actor_id=123 GROUP BY request_id) sub.",say_aloud:"For Q1: 'A response is any action that is not the initial request — so I filter action <> request and count distinct request_ids on that date.' For Q2: 'I need one row per request, flagged as accepted or not. I GROUP BY request_id and take MAX(CASE WHEN action=accept) to collapse multiple rows per request into a 0/1 flag, then AVG across all requests.'",company:"Meta",difficulty:"Medium"},{q:"Table: attendance_events(date, student_id, attendance) and all_students(student_id, school_id, grade_level, date_of_birth). Q1: What % of students attended school on their birthday? Q2: Which grade level had the largest attendance drop between yesterday and today?",a:"Q1: SELECT AVG(COALESCE(a.attendance, 0)) FROM all_students s LEFT JOIN attendance_events a ON s.student_id=a.student_id AND a.date=s.date_of_birth. Q2: WITH daily AS (SELECT grade_level, date, AVG(attendance) AS rate FROM attendance_events JOIN all_students USING(student_id) GROUP BY grade_level, date) SELECT grade_level, MAX(CASE WHEN date=today THEN rate END) - MAX(CASE WHEN date=yesterday THEN rate END) AS drop FROM daily WHERE date IN (today, yesterday) GROUP BY grade_level ORDER BY drop ASC LIMIT 1.",say_aloud:"For Q1: 'I JOIN on both student_id AND date = date_of_birth — this is the key. LEFT JOIN to keep students who didn't attend on their birthday, COALESCE to treat NULL as 0.' For Q2: 'I use conditional aggregation — MAX(CASE WHEN date=today) to get today's rate and subtract yesterday's. ORDER BY drop ASC to get the largest drop.'",company:"Meta",difficulty:"Hard"}],derivations:["Write the SQL execution order from memory: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT","Write the Meta percentage pattern: AVG(CASE WHEN condition THEN 1 ELSE 0 END). Apply it to: '% of DAU who made a video call'","Write the bidirectional JOIN pattern for video_calls: show both the OR-join approach and the UNION ALL CTE approach","Write the friend request acceptance rate query: GROUP BY request_id → MAX(CASE WHEN action=accept) → AVG in outer query","Write COALESCE(col, 0) and explain when you need it vs COUNT(*) vs COUNT(col)"],resources:[{name:"LeetCode SQL Easy: #175, #176, #182, #196",url:"https://leetcode.com/problemset/database"},{name:"Mode Analytics SQL Tutorial",url:"https://mode.com/sql-tutorial"},{name:"DataLemur SQL Interview Questions",url:"https://datalemur.com/questions"},{name:"W3Schools SQL Reference",url:"https://www.w3schools.com/sql"}],flashcards:[{q:"SQL execution order?",a:"FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT"},{q:"WHERE vs HAVING — what's the difference?",a:"WHERE filters rows BEFORE aggregation. HAVING filters groups AFTER aggregation. Use HAVING when filtering on COUNT(), SUM(), AVG()."},{q:"The Meta percentage pattern?",a:"AVG(CASE WHEN condition THEN 1 ELSE 0 END) — gives the proportion of rows meeting the condition."},{q:"COUNT(*) vs COUNT(col) — difference?",a:"COUNT(*) counts all rows including NULLs. COUNT(col) counts only non-NULL values in that column."},{q:"How to filter for NULL in SQL?",a:"IS NULL or IS NOT NULL. Never use = NULL — it always returns false."},{q:"What is COALESCE?",a:"COALESCE(a, b) returns the first non-NULL value. Use COALESCE(col, 0) to replace NULLs with 0 before aggregating."},{q:"video_calls has caller and recipient. How do you JOIN to get all calls per user?",a:"Bidirectional JOIN: ON (u.user_id = v.caller OR u.user_id = v.recipient). Or UNION ALL: SELECT caller AS user_id UNION ALL SELECT recipient AS user_id."},{q:"LEFT JOIN vs INNER JOIN in analytics?",a:"LEFT JOIN: keep all users from base table, NULLs for non-matching events (use to find users who did NOT participate). INNER JOIN: only users with matching events."},{q:"CTE vs subquery — when to use CTE?",a:"CTEs are cleaner and can be referenced multiple times. Use CTEs when you have multiple steps, need to name intermediate results, or need to reuse a query result."},{q:"RANK() vs DENSE_RANK() vs ROW_NUMBER()?",a:"ROW_NUMBER: unique sequential 1,2,3. RANK: ties get same rank, next rank skips (1,1,3). DENSE_RANK: ties get same rank, next rank doesn't skip (1,1,2)."},{q:"friend_requests acceptance rate pattern?",a:"GROUP BY request_id → MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) → AVG in outer query. This gives one 0/1 flag per request, then averages across requests."},{q:"NULLIF(expr, 0) — what does it do?",a:"Returns NULL if expr = 0, otherwise returns expr. Used in division to avoid divide-by-zero: SUM(x) / NULLIF(SUM(y), 0)."}],tomorrow_preview:"Day 7: Week 1 Review. Write all derivations from memory (Bayes, CLT, sample size formula, t-test statistic, E[X] for Binomial & Poisson, the Meta SQL pattern). Then take the 50-question quiz and use the weak-area tracker to build your Day 8+ study plan."},em={day:7,type:"quiz",title:"Week 1 Review & Practice Quiz",date_note:"Day 7 · Week 1 Review",prev_day:6,next_day:8,week_label:"Week 1 — Statistics & SQL Foundations",subtitle:"Write everything from memory first, then run through all 50 quiz questions and mark what you know cold vs what needs more work.",review_tasks:["✍️  Write a 1-page summary of everything you learned this week — in your own words, no notes","→   Derivations from memory: Bayes formula, CLT statement, sample size formula, t-test statistic, E[X] for Binomial & Poisson","→   Top 10 insights: which concepts surprised you, which felt weak, which you want to revisit","→   60–90 minutes total. Close all tabs. Write on paper or in a blank doc."],derivations:["Bayes' theorem — write P(A|B) = P(B|A)·P(A) / P(B) and explain each term","Central Limit Theorem — state it formally and explain why it matters for A/B tests","Sample size formula — n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². State all inputs.","t-test statistic — t = (x̄₁ − x̄₂) / SE_pooled and degrees of freedom","Binomial — E[X] = np, Var[X] = np(1−p). When to use vs Poisson.","Poisson — E[X] = Var[X] = λ. When to use vs Binomial.","Standard error — SE = σ/√n. Why it shrinks with more data.","Type I vs Type II error — write α, β, power = 1−β, and a decision table"],resources:[{name:"Your own notes from Days 1–6 — no new material today",url:"/"},{name:"Re-read any Day page that felt shaky (click ← back from the nav)",url:"/"},{name:"StatQuest playlist (re-watch one video on a weak topic)",url:"https://www.youtube.com/@statquest"}],sections:[{title:"Probability & Bayes' Theorem",icon:"🎲",range:"Q1–Q10",qs:[{id:"q1",q:`Three friends all say "Yes, it is raining" when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | all three say Yes)?`,company:"Meta",freq:"High",answer:"<p><strong>Apply Bayes:</strong> P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY)</p><code>P(YYY|rain) = (2/3)³ = 8/27 | P(YYY|no rain) = (1/3)³ = 1/27</code><p>= (8/27 × 0.25) / (8/27 × 0.25 + 1/27 × 0.75) = 2 / (2 + 0.75) ≈ <strong>8/11 ≈ 0.727</strong></p>"},{id:"q2",q:"A fair coin and an unfair coin (both sides tails) — you pick one at random, flip it 5 times, and see all tails. What is the probability you picked the unfair coin?",company:"Meta/All",freq:"High",answer:"<code>P(unfair|TTTTT) = 1·0.5 / [1·0.5 + (0.5)⁵·0.5]</code><p>= 0.5 / (0.5 + 0.0156) ≈ <strong>32/33 ≈ 0.97</strong></p><p>Intuition: 5 consecutive tails is very unlikely with a fair coin (only 3.1% chance), so seeing them makes the unfair coin overwhelmingly likely.</p>"},{id:"q3",q:"A jar has 1,000 coins: 999 fair, 1 double-headed. You pick a coin at random and flip 10 heads in a row. What is the probability the next flip is also heads?",company:"Meta/All",freq:"High",answer:"<p>First update beliefs about which coin you have:</p><p>P(double-headed | 10H) ≈ 0.5061, P(fair | 10H) ≈ 0.4939</p><p><strong>P(next H) = P(fair|10H) × 0.5 + P(double|10H) × 1 = 0.4939 × 0.5 + 0.5061 ≈ 0.753</strong></p><p>Key: don't assume it's 0.5 (gambler's fallacy) or 1. Update beliefs with Bayes first, then compute.</p>"},{id:"q4",q:"A couple has two children. At least one is a girl. What is the probability both children are girls?",company:"Meta/All",freq:"High",answer:'<p>Sample space: {BB, BG, GB, GG}. Excluding BB (violates "at least one girl"), 3 outcomes remain. Only GG satisfies both girls.</p><p><strong>P(GG | at least one girl) = 1/3 ≈ 0.333</strong></p><p>Common wrong answer: 1/2 (forgetting there are 3 valid outcomes, not 2).</p>'},{id:"q5",q:"A test for a disease has 95% sensitivity (true positive rate) and 95% specificity (true negative rate). The disease prevalence is 1%. You test positive. What is the probability you actually have the disease?",company:"Meta/All",freq:"Medium",answer:"<code>P(disease|+) = 0.95×0.01 / (0.95×0.01 + 0.05×0.99)</code><p>= 0.0095 / (0.0095 + 0.0495) = 0.0095 / 0.059 ≈ <strong>16.1%</strong></p><p>Despite 95% accuracy, only ~16% of positives truly have the disease — because the disease is rare (1%). This is the base rate fallacy.</p>"},{id:"q6",q:"In any 15-minute interval, P(seeing ≥1 shooting star) = 20%. What is P(seeing ≥1 shooting star in a full hour)?",company:"Meta/All",freq:"Medium",answer:'<p>Use complement rule: P(none in 1 hour) = P(none in 15min)⁴ = 0.8⁴ = 0.4096</p><p><strong>P(at least one in 1 hour) = 1 − 0.4096 = 0.5904</strong></p><p>Key: the complement rule — "at least one" = 1 − P(zero). Much easier than computing directly.</p>'},{id:"q7",q:"What is the expected number of children a couple will have if they keep having children until they get a girl (assume 50/50 gender ratio)?",company:"Meta/All",freq:"Medium",answer:"<p>This is the <strong>Geometric distribution</strong> with p = 0.5 (probability of success = girl on each trial).</p><p><strong>E[X] = 1/p = 1/0.5 = 2 children</strong></p><p>Variance = (1−p)/p² = 0.5/0.25 = 2. They might have G on the first try (50%), or BBBG (6.25%), etc.</p>"},{id:"q8",q:"What is the probability that two people in a room of 23 share a birthday? (The birthday paradox)",company:"Meta/All",freq:"Medium",answer:"<p>P(all different) = 365/365 × 364/365 × ... × 343/365 ≈ 0.493</p><p><strong>P(at least one shared birthday) = 1 − 0.493 ≈ 50.7%</strong></p><p>Counterintuitive because 23 people → 23×22/2 = 253 pairs, and each pair has a ~1/365 chance of matching.</p>"},{id:"q9",q:"You draw 2 cards from a standard 52-card deck without replacement. What is the probability both are from the same suit?",company:"Meta/All",freq:"Medium",answer:'<p>After drawing the first card (from some suit with 13 cards), 12 cards of that suit remain out of 51.</p><p><strong>P(same suit) = 12/51 ≈ 23.5%</strong></p><p>Alt: C(13,2)×4 / C(52,2) = 312/1326 ≈ 23.5%. "Without replacement" makes this a dependent event.</p>'},{id:"q10",q:"K meetings are randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",company:"Meta DS",freq:"Medium",answer:"<p><strong>Size-biased sampling:</strong> you're more likely to walk into a busy room, so the conditional expectation exceeds the average.</p><p>E[X in room | occupied] = E[X²]/E[X]. For Binomial(K, 1/N): E[X]=K/N, so result = <strong>1 + (K−1)/N</strong></p>"}]},{title:"Distributions & Shape Description",icon:"📊",range:"Q11–Q18",qs:[{id:"q11",q:'Describe the distribution of "comments per user per day" on a social platform. What are the mode, median, mean, and p95?',company:"Meta DS",freq:"High",answer:"<p><strong>Shape:</strong> Right-skewed / Poisson-like. Most users comment 0–1 times per day; a few power users comment dozens of times.</p><p>Mode ≈ 1 | Median ≈ 2–3 | Mean ≈ 8–10 (pulled by power users) | P95 ≈ 100</p><p>Mean > Median > Mode — the signature of right skew. Use <strong>median</strong> as the central summary, not mean.</p>"},{id:"q12",q:'Describe the distribution of "posts per user per day". What is the shape? Estimate p5, p50, p95.',company:"Meta DS",freq:"High",answer:"<p><strong>Right-skewed / Log-normal.</strong> Most users are passive consumers who post nothing. A small number (influencers, bots, businesses) post many times a day.</p><p>Mode = 0 | P5 = 0 | P50 ≈ 1 | Mean ≈ 5 (pulled right) | P95 ≈ 6–8</p>"},{id:"q13",q:'Describe the distribution of "app session duration per user". What distribution does it follow? Where are the mean, median, and mode?',company:"Meta DS",freq:"High",answer:"<p><strong>Exponential distribution</strong> — memoryless, heavy right tail. Most users bounce in the first few seconds; a small fraction are long-session power users.</p><p>Mode ≈ 2–3 sec | Median ≈ 10 sec | Mean ≈ 15–20 sec (pulled by power users) | P5 ≈ 0</p>"},{id:"q14",q:"What is the Binomial distribution? State E[X] and Var[X] from memory. Give a real-world product example.",company:"Meta/All",freq:"High",answer:"<p><strong>X ~ Binomial(n, p):</strong> number of successes in n independent Bernoulli trials with probability p each.</p><p><strong>E[X] = np | Var[X] = np(1−p)</strong></p><p>Use when: fixed n, binary outcomes, independent trials, constant p. Example: 100 users each see an ad with 4% click probability → E[clicks] = 4, Var = 3.84.</p>"},{id:"q15",q:"What is the Poisson distribution? State E[X] and Var[X]. When is Poisson the right model vs Binomial?",company:"Meta/All",freq:"High",answer:"<p><strong>X ~ Poisson(λ):</strong> number of events in a fixed interval at a constant independent rate.</p><p><strong>E[X] = Var[X] = λ</strong> (E and Var are equal — the hallmark signature to memorize)</p><p>Use Poisson when: n is large/infinite, p is very small, counting rare events over a continuous interval (server requests/second, comments/day). Binomial when n is fixed and finite.</p>"},{id:"q16",q:"What is the difference between probability and likelihood? Why does it matter in machine learning?",company:"Meta/All",freq:"Medium",answer:`<p><strong>Probability:</strong> fixed parameters, varying outcomes → P(data | θ). "Given we know the coin is fair, what's P(7 heads in 10 flips)?"</p><p><strong>Likelihood:</strong> fixed data, varying parameters → L(θ | data). "Given we observed 7 heads, how likely is each possible value of p?"</p><p>MLE (Maximum Likelihood Estimation) finds θ that maximizes L(θ|data). This is how logistic regression, GLMs, and most ML models are trained.</p>`},{id:"q17",q:"What is Var(X + Y)? When does variance add simply, and when does it not?",company:"Meta/All",freq:"Medium",answer:"<p><strong>If X, Y independent:</strong> Var(X+Y) = Var(X) + Var(Y)</p><p><strong>If correlated:</strong> Var(X+Y) = Var(X) + Var(Y) + 2·Cov(X,Y)</p><p>Why it matters: SE of a sample mean = σ/√n comes from summing n independent variables. If metrics are correlated (clicks and purchases per user), you must account for covariance.</p>"},{id:"q18",q:"For a right-skewed distribution, what is the ordering of mode, median, and mean? Give an example from product data.",company:"Meta/All",freq:"High",answer:'<p><strong>Right-skewed: Mode &lt; Median &lt; Mean</strong></p><p>The mean gets pulled toward the long right tail by extreme values. Example: user revenue — most users spend $0, a few whales spend $1,000+. Mode=0, Median=$2, Mean=$15. Using mean to describe "typical" user would be very misleading.</p>'}]},{title:"Hypothesis Testing & Confidence Intervals",icon:"🔬",range:"Q19–Q28",qs:[{id:"q19",q:"What is the Central Limit Theorem? Why does it matter for A/B testing?",company:"Meta/All",freq:"High",answer:"<p><strong>CLT:</strong> The sampling distribution of the sample mean converges to Normal as n → ∞, regardless of the underlying distribution.</p><p><strong>Why it matters for A/B testing:</strong> Individual user metrics (revenue, sessions) are extremely skewed. But the group-level means will be approximately Normal for large n — allowing us to use z-tests and t-tests even on non-normal raw data.</p>"},{id:"q20",q:"What is a p-value? Your A/B test returns p = 0.25. What do you tell a product manager?",company:"Netflix",freq:"High",answer:`<p><strong>p-value:</strong> the probability of observing data this extreme or more extreme, assuming the null hypothesis is true. It is NOT the probability that H₀ is true.</p><p><strong>p = 0.25:</strong> "If there were truly no difference, we'd see a gap this large 25% of the time by chance alone. We can't conclude the feature works. Options: (1) run longer to gain more power, or (2) accept that there's no meaningful effect."</p>`},{id:"q21",q:"What is the difference between Type I and Type II errors? Which is worse in A/B testing vs medical screening?",company:"Meta/All",freq:"High",answer:"<p><strong>Type I (α = false positive):</strong> reject H₀ when it's true → conclude feature works when it doesn't. Rate = significance level (e.g. 5%).</p><p><strong>Type II (β = false negative):</strong> fail to reject H₀ when it's false → miss a real effect. Rate = 1 − power.</p><p><strong>A/B testing:</strong> Type I worse — you ship a feature that wastes engineering and harms UX. <strong>Cancer screening:</strong> Type II worse — you miss a patient who has cancer.</p>"},{id:"q22",q:"What does a 95% confidence interval mean? What does a very wide CI tell you?",company:"Meta/All",freq:"High",answer:'<p><strong>95% CI:</strong> if you repeated this experiment many times, 95% of the resulting intervals would contain the true population parameter. It does NOT mean "95% chance the true value is in this interval."</p><p><strong>Wide CI</strong> → large standard error → either (1) small sample size, or (2) high variance in user behavior (heterogeneous population). To narrow it: increase n or reduce metric variance (e.g. via CUPED).</p>'},{id:"q23",q:"State the sample size formula for a two-proportion A/B test. What are the inputs and what does each control?",company:"Meta/All",freq:"High",answer:"<code>n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ²</code><p><strong>α = 0.05</strong> → z_{α/2} = 1.96 (controls false positive rate)</p><p><strong>Power = 0.80</strong> → z_β = 0.84 (controls false negative rate)</p><p><strong>p̄</strong> = average baseline conversion rate</p><p><strong>δ</strong> = MDE (minimum detectable effect). <strong>Halving δ quadruples n.</strong></p>"},{id:"q24",q:"What is statistical power? What happens if your experiment is underpowered?",company:"Meta/All",freq:"Medium",answer:'<p><strong>Power = 1 − β</strong> = probability of correctly detecting a true effect. Standard target: 80%.</p><p><strong>Underpowered experiment:</strong> p = 0.15 even though the feature genuinely works. You declare "no effect" (Type II error). You ship nothing, the company misses a real improvement. Increasing n, reducing metric variance, or increasing MDE threshold all raise power.</p>'},{id:"q25",q:"What is the difference between standard deviation and standard error? When would you use each?",company:"Meta/All",freq:"High",answer:"<p><strong>Standard deviation (σ):</strong> measures spread of individual data points around the mean. A property of the population/sample.</p><p><strong>Standard error (SE = σ/√n):</strong> measures uncertainty in the sample mean — how much the mean would vary if you re-sampled. Gets smaller as n grows.</p><p>Use SD to describe your data. Use SE when building confidence intervals or hypothesis tests about means.</p>"},{id:"q26",q:"What is the Mann-Whitney U test? When is it preferred over a t-test?",company:"Meta/All",freq:"Medium",answer:"<p><strong>Mann-Whitney U:</strong> non-parametric test that compares rank sums between two groups — no normality assumption.</p><p>Prefer over t-test when: data is heavily skewed (revenue, time-on-site), ordinal data (1–5 ratings), small sample with outliers. Slight power loss on truly normal data, but much more robust in practice.</p><p>In Python: <code>scipy.stats.mannwhitneyu(group1, group2, alternative='two-sided')</code></p>"},{id:"q27",q:"What is bootstrapping? When would you use it instead of a parametric test?",company:"Meta/All",freq:"Medium",answer:"<p><strong>Bootstrap:</strong> resample your data with replacement B times (~1,000), compute the statistic each time → empirical sampling distribution without distributional assumptions.</p><p>Use when: complex statistic with no closed-form SE (median, ratio, p90), small or non-normal sample. Drawback: assumes your sample is representative; won't extrapolate beyond observed data range.</p>"},{id:"q28",q:"What is the difference between a parametric and non-parametric test? Give one example of each.",company:"Meta/All",freq:"Medium",answer:"<p><strong>Parametric:</strong> assumes a specific distribution (usually Normal) for the data. More powerful when assumptions hold. Examples: t-test, z-test, ANOVA.</p><p><strong>Non-parametric:</strong> makes no distributional assumptions — operates on ranks or signs. More robust to outliers and skew. Examples: Mann-Whitney U (vs t-test), Wilcoxon signed-rank (vs paired t-test), Kruskal-Wallis (vs ANOVA).</p>"}]},{title:"Bias, Paradoxes & Applied Stats",icon:"🧩",range:"Q29–Q37",qs:[{id:"q29",q:"Bad actor rate in the user population is 1%. Your classifier has 99% sensitivity and 99% specificity. A user is flagged. What is the probability they are actually a bad actor?",company:"Meta DS",freq:"High",answer:"<code>P(bad|flagged) = 0.99×0.01 / (0.99×0.01 + 0.01×0.99) = 0.0099 / 0.0198 ≈ 50%</code><p>Despite 99% accuracy, only <strong>half of flagged users are actually bad actors</strong> — because the bad actor base rate is very low (1%). For every true bad actor caught, roughly one innocent user is also flagged. This is the base rate fallacy and a key concept in trust &amp; safety work.</p>"},{id:"q30",q:"What is Simpson's Paradox? Give an example and explain how to handle it in a dataset.",company:"Meta DS",freq:"High",answer:"<p><strong>Simpson's Paradox:</strong> a trend that appears in subgroups reverses or disappears when subgroups are combined — because of a lurking confounding variable.</p><p><strong>Classic example:</strong> Berkeley admissions — overall women were admitted at lower rates, but within every department women were admitted at equal or higher rates. Confound: women applied more to competitive departments.</p><p><strong>Handle by:</strong> stratify analysis by the confounder, report per-stratum results, or use regression to control for it. Never report aggregate averages when group composition differs.</p>"},{id:"q31",q:"What is a confounding variable? How is it different from a mediator? How do you handle confounders?",company:"Meta/All",freq:"High",answer:"<p><strong>Confounder:</strong> affects both X (cause) and Y (outcome), creating a spurious association. Example: ice cream sales and drowning — both caused by hot weather.</p><p><strong>Mediator:</strong> on the causal path between X and Y (X → M → Y). Controlling for it blocks the causal effect.</p><p><strong>Handle confounders:</strong> randomization (A/B test), stratification, multivariate regression, propensity score matching.</p>"},{id:"q32",q:"What is selection bias? Give two examples in a data science context.",company:"Meta/All",freq:"Medium",answer:"<p><strong>Selection bias:</strong> the sample is not representative of the population due to non-random selection.</p><p><strong>Example 1 — Survivorship bias:</strong> analyzing only companies still in business → overly optimistic conclusions about what makes companies succeed.</p><p><strong>Example 2 — Opt-in A/B testing:</strong> users who voluntarily use a new feature are systematically different (more engaged) from average users → results don't generalize to full population.</p>"},{id:"q33",q:"When would you use mean vs. median to summarize a dataset? When would you report both?",company:"Meta/All",freq:"High",answer:"<p><strong>Use median</strong> when data is skewed or has outliers (income, revenue, house prices, session duration). Median is robust — unaffected by extremes.</p><p><strong>Use mean</strong> when data is symmetric and outlier-free (heights, standardized test scores). Mean minimizes squared error and is used in t-tests.</p><p><strong>Report both</strong> when the distribution shape matters — a large gap between mean and median signals skew or outliers worth investigating.</p>"},{id:"q34",q:"What is correlation? What is causation? Why can't you infer causation from correlation? Give a product example.",company:"Meta/All",freq:"High",answer:'<p><strong>Correlation:</strong> statistical association between two variables (Pearson r ∈ [−1,1]).</p><p><strong>Causation:</strong> changing X directly causes a change in Y.</p><p><strong>Why not infer causation:</strong> a confounder could drive both. Example: users with more friends → more sessions → more ads seen. "Friend count causes ad revenue" is spurious — engagement is the confounder. To establish causation: run a randomized A/B test.</p>'},{id:"q35",q:"Two ad placement methods: (1) every post is an ad with 4% probability, (2) exactly 1 ad every 25 posts. Compute E[X] and Var[X] for each. Which do you recommend?",company:"Meta DS",freq:"High",answer:"<p><strong>Method 1 (Binomial):</strong> E[X] = 100×0.04 = <strong>4</strong> | Var[X] = 100×0.04×0.96 = <strong>3.84</strong></p><p><strong>Method 2 (Deterministic):</strong> E[X] = <strong>4</strong> | Var[X] = <strong>0</strong></p><p><strong>Recommend Method 2:</strong> same expected revenue but zero variance. Users never accidentally see bursts of ads. Advertiser reach is guaranteed. Predictable = better UX and more stable revenue.</p>"},{id:"q36",q:"What is a Q-Q plot? When would you use one in practice?",company:"Meta/All",freq:"Medium",answer:"<p><strong>Q-Q (Quantile-Quantile) plot:</strong> plots the quantiles of your data against the quantiles of a theoretical distribution (usually Normal). If data is Normal, points fall on a straight diagonal line. Deviations = heavy tails, skew, or multimodality.</p><p><strong>Use in practice:</strong> before running a t-test, check if the metric is approximately Normal. Heavy tails → consider Mann-Whitney U or bootstrap instead.</p>"},{id:"q37",q:"What does it mean for data to be IID? Why does the IID assumption matter in statistics?",company:"Meta/All",freq:"Medium",answer:"<p><strong>IID = Independent and Identically Distributed.</strong></p><p><strong>Independent:</strong> knowing one observation tells you nothing about another. Violated by: time series (today's sales predict tomorrow's), social networks (users influence each other — SUTVA violation in A/B tests).</p><p><strong>Identically distributed:</strong> all observations come from the same distribution. Violated by: user cohorts with different behavior patterns, seasonal effects.</p><p>Most statistical tests (t-test, CLT) assume IID. Violations require cluster-robust standard errors, mixed effects models, or geo-level A/B randomization.</p>"}]},{title:"SQL Foundations",icon:"🗄️",range:"Q38–Q50",qs:[{id:"q38",q:"What is the difference between WHERE and HAVING? When does each execute relative to GROUP BY?",company:"Meta/All",freq:"High",answer:"<p><strong>WHERE</strong> filters rows <em>before</em> aggregation. Cannot use aggregate functions. Example: <code>WHERE country = 'US'</code></p><p><strong>HAVING</strong> filters groups <em>after</em> GROUP BY. Must use aggregate functions. Example: <code>HAVING COUNT(*) &gt; 10</code></p><p>SQL execution order: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</p>"},{id:"q39",q:"What is the difference between INNER JOIN and LEFT JOIN? When does a row appear in LEFT JOIN but not INNER JOIN?",company:"Meta/All",freq:"High",answer:"<p><strong>INNER JOIN:</strong> returns only rows where the condition matches in both tables. Excludes non-matches.</p><p><strong>LEFT JOIN:</strong> returns all rows from the left table + matched rows from the right. Non-matched right side = NULL.</p><p>A row appears in LEFT but not INNER when a left-table row has no match in the right table. Common use: find users who never made a booking (<code>WHERE bookings.id IS NULL</code> after LEFT JOIN).</p>"},{id:"q40",q:"Table: user_actions(ds, user_id, post_id, action, extra). What % of content viewed is spam? How many posts were reported as spam yesterday?",company:"Meta DS",freq:"High",answer:`<p><strong>% spam of views:</strong></p><pre>SELECT
  SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END)
  / SUM(CASE WHEN action='view' THEN 1.0 ELSE 0 END) AS spam_rate
FROM user_actions
WHERE ds = DATE_SUB(CURDATE(), INTERVAL 1 DAY);</pre><p><strong>Posts reported as spam yesterday:</strong> <code>COUNT(DISTINCT post_id) WHERE action='report' AND extra='SPAM' AND ds=yesterday</code></p>`},{id:"q41",q:"Tables: video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, country, dau_flag, ds). What % of French DAU were on a video call yesterday? Why is this JOIN tricky?",company:"Meta DS",freq:"High",answer:`<p>Tricky because a user can appear in video_calls as <em>either</em> caller or recipient — you need a <strong>bidirectional JOIN</strong>.</p><pre>SELECT AVG(CASE WHEN c.call_id IS NOT NULL THEN 1 ELSE 0 END)
FROM dim_all_users u
LEFT JOIN video_calls c
  ON (u.user_id = c.caller OR u.user_id = c.recipient)
  AND c.ds = yesterday
WHERE u.country = 'fr' AND u.dau_flag = 1 AND u.ds = yesterday;</pre>`},{id:"q42",q:"Tables: searches(date, search_id, user_id, search_query) and search_results(date, search_id, result_type, clicked). Write a query: how many users searched more than 10 times in the last 7 days?",company:"Meta DS",freq:"High",answer:`<pre>SELECT COUNT(*) FROM (
  SELECT user_id
  FROM searches
  WHERE date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
  GROUP BY user_id
  HAVING COUNT(search_id) > 10
) t;</pre><p>Key: HAVING filters after GROUP BY. Can't use <code>WHERE COUNT(...) &gt; 10</code>.</p>`},{id:"q43",q:'Using the same searches + search_results tables: write a query for "What % of searches returned at least one Event result?"',company:"Meta DS",freq:"High",answer:`<pre>SELECT
  AVG(CASE WHEN result_type = 'event' THEN 1 ELSE 0 END) AS pct_event
FROM (
  SELECT search_id,
    MAX(CASE WHEN result_type='event' THEN 1 ELSE 0 END) AS result_type
  FROM search_results
  GROUP BY search_id
) t;</pre><p>The <strong>Meta percentage pattern</strong>: <code>AVG(CASE WHEN condition THEN 1 ELSE 0 END)</code> — memorize this cold.</p>`},{id:"q44",q:"What is the difference between COUNT(*), COUNT(column), and COUNT(DISTINCT column)? How does each handle NULLs?",company:"Meta/All",freq:"High",answer:"<p><strong>COUNT(*):</strong> counts all rows including NULLs.</p><p><strong>COUNT(column):</strong> counts only non-NULL values in that column.</p><p><strong>COUNT(DISTINCT column):</strong> counts unique non-NULL values.</p><p>Gotcha: after a LEFT JOIN, the right table columns will be NULL for unmatched rows. Use <code>COUNT(right_table.id)</code> to count only matched rows, not <code>COUNT(*)</code>.</p>"},{id:"q45",q:"When would you use a CTE (WITH clause) vs a subquery? What are the tradeoffs?",company:"Meta/All",freq:"Medium",answer:"<p><strong>CTE (Common Table Expression):</strong> defined once at the top, reusable, much more readable. Best for multi-step logic.</p><p><strong>Subquery:</strong> inline, can't be reused, harder to debug for complex logic.</p><p><strong>Prefer CTEs</strong> in interviews — they show you can structure readable, maintainable SQL. Use subqueries only for simple one-off filters inside a WHERE clause.</p>"},{id:"q46",q:"How do you handle NULL values in SQL? Name three functions/patterns for dealing with them.",company:"Meta/All",freq:"High",answer:"<p><strong>COALESCE(a, b, c):</strong> returns first non-NULL value. Use for default replacements: <code>COALESCE(revenue, 0)</code></p><p><strong>IS NULL / IS NOT NULL:</strong> the only correct way to check for NULL — never use <code>= NULL</code> (always false in SQL).</p><p><strong>IFNULL(col, default):</strong> MySQL-specific shorthand for COALESCE with two args.</p><p>NULLs propagate: NULL + 5 = NULL, NULL = NULL is NULL (not TRUE). Always check for NULLs explicitly.</p>"},{id:"q47",q:"Table: friend_requests(request_id, actor_id, receiver_id, action). Write a query for the overall friend request acceptance rate. What's the tricky part?",company:"Meta DS",freq:"High",answer:`<p>Tricky part: a request might have multiple rows (sent, accepted, rejected). Must deduplicate at request level.</p><pre>SELECT AVG(accepted) FROM (
  SELECT request_id,
    MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) AS accepted
  FROM friend_requests
  GROUP BY request_id
) t;</pre><p><code>MAX(CASE WHEN...)</code> collapses multiple rows per request into a single accepted flag.</p>`},{id:"q48",q:"Write a query to find the second highest salary from an Employee table. Handle the case where there is no second salary (return NULL).",company:"Meta/All",freq:"Medium",answer:`<pre>-- Method 1: OFFSET (naturally returns NULL if none)
SELECT (SELECT DISTINCT salary FROM Employee
        ORDER BY salary DESC LIMIT 1 OFFSET 1)
AS SecondHighestSalary;

-- Method 2: DENSE_RANK window function
WITH ranked AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) rk
  FROM Employee
)
SELECT MAX(salary) FROM ranked WHERE rk = 2;</pre>`},{id:"q49",q:"What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()? Give an example where they produce different results.",company:"Meta/All",freq:"High",answer:"<p>Given scores [100, 100, 90, 80]:</p><p><strong>ROW_NUMBER():</strong> 1, 2, 3, 4 — always unique, arbitrary for ties</p><p><strong>RANK():</strong> 1, 1, 3, 4 — skips rank 2 after a tie</p><p><strong>DENSE_RANK():</strong> 1, 1, 2, 3 — no gap after a tie</p><p>Use ROW_NUMBER for deduplication. RANK for competition standings. DENSE_RANK for bucketing/deciles (no gaps).</p>"},{id:"q50",q:"Tables: attendance_events(date, student_id, attendance) and all_students(student_id, grade_level, date_of_birth). What % of students attended school on their birthday?",company:"Meta DS",freq:"High",answer:`<pre>SELECT AVG(a.attendance) AS pct_attended
FROM all_students s
LEFT JOIN attendance_events a
  ON s.student_id = a.student_id
  AND a.date = s.date_of_birth;</pre><p>Key insight: JOIN condition includes both <code>student_id</code> AND <code>date = date_of_birth</code> — the date goes in the JOIN, not WHERE, so students with no birthday attendance record are still included (as NULL → no attendance).</p>`}]},{title:"Extra — Book Coverage Extensions",icon:"📖",range:"Q51–Q56",qs:[{id:"q51",q:"What is the Law of Large Numbers? How is it different from the Central Limit Theorem?",company:"Google/Meta",freq:"Medium",answer:"<p><strong>Law of Large Numbers (LLN):</strong> as n → ∞, the sample mean converges to the true population mean. It's about the <em>value</em> converging.</p><p><strong>Central Limit Theorem (CLT):</strong> as n grows, the <em>distribution</em> of the sample mean approaches normal, regardless of the underlying distribution. It's about the <em>shape</em>.</p><p>Key distinction: LLN says your estimate gets closer to the truth. CLT says the sampling distribution of that estimate becomes bell-shaped. Both are needed to justify A/B testing — LLN gives you confidence your sample mean is close to truth, CLT lets you compute p-values and CIs.</p>"},{id:"q52",q:"When would you use a Z-test vs a t-test? What changes between the two formulas?",company:"Google/Meta",freq:"High",answer:"<p><strong>Z-test:</strong> use when population variance σ² is known, or sample size is large enough for CLT to apply (n > 30). Formula: Z = (X̄ − μ₀) / (σ / √n).</p><p><strong>t-test:</strong> use when population variance is unknown and sample size is small. Uses sample variance s² instead. Formula: t = (X̄ − μ₀) / (s / √n), with n−1 degrees of freedom.</p><p>The t-distribution has heavier tails than normal — it's more conservative when sample size is small. As n → ∞, t → Z. In practice for A/B testing at Meta/Google scale with millions of users, Z-test is standard because CLT applies.</p>"},{id:"q53",q:"What is the exponential distribution? What is its key property and when would you use it in a product context?",company:"Google/Meta",freq:"Medium",answer:"<p><strong>Exponential distribution</strong> models the time between events in a Poisson process. PDF: f(x) = λe^(−λx), Mean = 1/λ, Var = 1/λ².</p><p><strong>Key property — memorylessness:</strong> P(X > s+t | X > s) = P(X > t). The probability of waiting another t units doesn't depend on how long you've already waited. This makes it the continuous analog of the geometric distribution.</p><p><strong>Product examples:</strong> time between a user's purchases, time to first click on an ad, time between payment failures, time between server errors. When you have a Poisson count process, the time between events is exponential with the same rate λ.</p>"},{id:"q54",q:"What is a Markov Chain? Give a product example and explain what a stationary distribution means.",company:"Google/Meta",freq:"Medium",answer:"<p><strong>Markov Chain:</strong> a process where the probability of the next state depends only on the current state — not on history. This is called the Markov property.</p><p><strong>Product example:</strong> user engagement states — New, Active, Churned. A transition matrix defines P(next state | current state). E.g., P(Active → Churned) = 0.05 per week.</p><p><strong>Stationary distribution π</strong> satisfies π = πP — it's the long-run proportion of time spent in each state, regardless of where you started. If π(Churned) = 0.30, in the long run 30% of your users will be churned. Useful for predicting steady-state user base composition and lifetime value.</p>"},{id:"q55",q:"What is Maximum Likelihood Estimation (MLE)? Walk through deriving the MLE for a coin flip.",company:"Google/Meta",freq:"Medium",answer:"<p><strong>MLE</strong> finds the parameters θ that maximize the probability of observing your data. Formally: θ_MLE = argmax L(θ) where L(θ) = P(data | θ).</p><p><strong>Derivation for Bernoulli (coin flip):</strong> suppose you flip n times and see k heads.</p><code>L(p) = p^k × (1−p)^(n−k)</code><p>Take log (log-likelihood): log L = k log p + (n−k) log(1−p)</p><p>Take derivative and set to 0: k/p − (n−k)/(1−p) = 0</p><p>Solve: <strong>p_MLE = k/n</strong> — the observed proportion of heads. Intuitive: the MLE is just the empirical frequency.</p><p>In ML, minimizing cross-entropy loss is equivalent to maximizing log-likelihood. MLE is the engine behind logistic regression, neural networks, and most parametric models.</p>"},{id:"q56",q:"Define covariance and correlation formulaically. What does each measure and what are their ranges?",company:"Google/Meta",freq:"High",answer:"<p><strong>Covariance:</strong> Cov(X,Y) = E[(X − μX)(Y − μY)] = E[XY] − E[X]E[Y]</p><p>Measures the direction of the linear relationship between X and Y. Range: (−∞, +∞). Units are the product of the units of X and Y, so it's hard to interpret in absolute terms.</p><p><strong>Correlation:</strong> ρ(X,Y) = Cov(X,Y) / (σX × σY)</p><p>Normalized covariance. Range: [−1, +1], unitless. +1 = perfect positive linear relationship, −1 = perfect negative, 0 = no linear relationship.</p><p><strong>Key caveat:</strong> correlation = 0 does not mean independent — there could be a nonlinear relationship. Independence implies zero correlation, but not vice versa. Always plot the data before concluding there's no relationship.</p>"}]}]},tm={day:8,title:"SQL Window Functions",date_note:"Day 8 — Week 2 begins: SQL Deep Dive",prev_day:7,next_day:9,week_label:"Week 2 — SQL Deep Dive & Python Data Manipulation",recap:{title:"Week 2 Roadmap — What to Expect (5 min)",points:["Days 8–10 are SQL: window functions → date & time series → complex patterns (churn, funnel, self-join)","Days 11–13 are Python: pandas fundamentals → A/B testing pipeline → OOP & interview coding","Day 14 is a review day: 25 SQL + 25 Python quiz questions drawn from real Airbnb, Reddit, Shopify, and Netflix interviews","Every day has real company questions from your CSV interview bank — treat each practice question as a live interview simulation","SQL pattern for this week: window functions appear in ~60% of DS SQL rounds. If you can't write RANK() OVER (PARTITION BY ... ORDER BY ...) from memory, that's your #1 fix this week","Python pattern: pandas + scipy + matplotlib is the Airbnb stack. Shopify wants OOP. Know both."]},topics:[{title:"Window Function Syntax & Execution Model",color:"#F59E0B",content:`**What is a window function?**
  Unlike GROUP BY which collapses rows, window functions compute an aggregate OVER a 'window' of rows while keeping every row intact.
  Each row keeps its original data + the window result appended as a new column.

**Core syntax:**
  function_name(expression) OVER (
    PARTITION BY col1, col2    -- define groups (optional)
    ORDER BY col3 DESC         -- define order within each group
    ROWS/RANGE BETWEEN ...     -- define frame (optional)
  )

**Where window functions execute:**
  SQL execution order: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → WINDOW → ORDER BY → LIMIT
  Window functions run in SELECT — they can see all rows, but AFTER WHERE/GROUP BY filters.
  You CANNOT use a window function result in WHERE or HAVING. Use a subquery or CTE.

**The three window function families:**
  1. Ranking: RANK(), DENSE_RANK(), ROW_NUMBER(), NTILE()
  2. Value: LAG(), LEAD(), FIRST_VALUE(), LAST_VALUE(), NTH_VALUE()
  3. Aggregate: SUM() OVER, AVG() OVER, COUNT() OVER, MAX() OVER, MIN() OVER

**PARTITION BY analogy:**
  Think of PARTITION BY as GROUP BY that doesn't collapse rows.
  PARTITION BY user_id means: 'apply this function independently to each user's set of rows'
  Without PARTITION BY: the window is the entire result set.`,interview_tip:"Always state your PARTITION BY logic out loud before writing. 'I'm partitioning by department so each department gets its own ranking independently.' This signals you understand the semantic, not just the syntax."},{title:"RANK, DENSE_RANK, ROW_NUMBER — Know the Differences Cold",color:"#8B5CF6",content:`**ROW_NUMBER() — always unique, sequential**
  Assigns 1, 2, 3, 4... with no ties — ties broken arbitrarily (or by secondary ORDER BY).
  Use when: you need exactly one row per group (e.g., 'most recent event per user')

  SELECT *, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY event_time DESC) AS rn
  FROM events
  -- Filter to rn = 1 to get each user's most recent event

**RANK() — gaps after ties**
  Two rows tied at rank 1 → both get rank 1, next row gets rank 3 (gap).
  Use when: competition-style ranking where 'tied' positions should share the same rank

  Scores: 100, 100, 90, 80
  RANK():       1, 1, 3, 4   ← rank 2 skipped

**DENSE_RANK() — no gaps**
  Two rows tied at rank 1 → both get rank 1, next row gets rank 2 (no gap).
  Use when: you want 'top N distinct ranks' (e.g., top 3 salaries in a department)

  Scores: 100, 100, 90, 80
  DENSE_RANK(): 1, 1, 2, 3   ← dense, no skips

**Classic interview pattern — top N per group:**
  WITH ranked AS (
    SELECT
      department_id,
      employee_id,
      salary,
      DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
    FROM employees
  )
  SELECT department_id, employee_id, salary
  FROM ranked
  WHERE rank <= 3

  Note: use DENSE_RANK (not RANK) so that 'top 3 salaries' means '3 distinct salary levels'
  — if you used RANK, ties at rank 1 would use up rank 2, potentially missing the true 3rd salary.

**NTILE(n) — buckets**
  Divides rows into n equal buckets. NTILE(4) → quartiles 1,2,3,4.
  Use when: percentile bucketing, user segments`,interview_tip:"LeetCode 178 (Rank Scores), 184 (Dept Highest Salary), 185 (Top 3 Salaries per Dept) are canonical examples of this pattern. If you've solved 185 cold, you can handle any 'top N per group' question in any company."},{title:"LAG and LEAD — Accessing Adjacent Rows",color:"#10B981",content:`**LAG(col, n, default) — look backward n rows**
  LAG(revenue, 1) OVER (PARTITION BY advertiser_id ORDER BY date)
  → gives the previous day's revenue for the same advertiser
  → first row per partition returns NULL (no previous row)
  Third argument (optional) is the default if no prior row: LAG(revenue, 1, 0)

**LEAD(col, n, default) — look forward n rows**
  LEAD(revenue, 1) OVER (ORDER BY date)
  → gives next day's revenue
  → last row returns NULL

**Week-over-week change pattern (Airbnb / Reddit pattern):**
  WITH daily AS (
    SELECT
      DATE_TRUNC('week', ds) AS week,
      COUNT(*) AS bookings
    FROM bookings
    WHERE country = 'US'
    GROUP BY 1
  )
  SELECT
    week,
    bookings,
    LAG(bookings, 1) OVER (ORDER BY week) AS prev_week_bookings,
    bookings - LAG(bookings, 1) OVER (ORDER BY week) AS wow_change,
    ROUND(
      (bookings - LAG(bookings, 1) OVER (ORDER BY week)) * 1.0 /
      NULLIF(LAG(bookings, 1) OVER (ORDER BY week), 0) * 100, 2
    ) AS wow_pct_change
  FROM daily
  ORDER BY week

**Session gap detection (advanced):**
  Use LAG(event_time) to detect when the gap from the previous event exceeds a threshold → new session.
  WITH gaps AS (
    SELECT
      user_id, event_time,
      event_time - LAG(event_time) OVER (PARTITION BY user_id ORDER BY event_time) AS gap
    FROM events
  )
  SELECT *, CASE WHEN gap > INTERVAL '30 minutes' OR gap IS NULL THEN 1 ELSE 0 END AS new_session
  FROM gaps

**First/last event per entity:**
  ROW_NUMBER() + rn=1 is cleaner than MIN()/MAX() when you also need other columns from that row.`,interview_tip:"Reddit asks WoW CVR change. Airbnb asks WoW first-time bookings. LAG + DATE_TRUNC is the pattern for both. Write it once from memory today. The common mistake is forgetting NULLIF in the denominator — division by zero when prev_week = 0 will crash the query."},{title:"Aggregate Window Functions — Running Totals & Moving Averages",color:"#06B6D4",content:`**SUM() OVER with frame — running total:**
  SELECT
    date,
    daily_revenue,
    SUM(daily_revenue) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
  FROM revenue

**Moving average (7-day rolling):**
  SELECT
    date,
    daily_revenue,
    AVG(daily_revenue) OVER (
      ORDER BY date
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7d_avg
  FROM revenue

**Frame clause options:**
  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW  → cumulative sum
  ROWS BETWEEN 6 PRECEDING AND CURRENT ROW          → 7-day rolling window
  ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING          → centered 3-day average
  ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING  → suffix sum

**COUNT() OVER — percentile within group:**
  SELECT
    user_id,
    total_revenue,
    ROUND(
      RANK() OVER (ORDER BY total_revenue DESC) * 100.0 /
      COUNT(*) OVER (), 1
    ) AS percentile_rank
  FROM user_revenue

**Key difference — ROWS vs RANGE:**
  ROWS: counts physical rows (precise, predictable)
  RANGE: includes all rows with equal ORDER BY value (can include ties unexpectedly)
  In practice: always use ROWS unless you explicitly want tie-inclusive behavior`,interview_tip:"Expedia asked 'last 7 day sales, each day is a row' — that's the ROWS BETWEEN 6 PRECEDING AND CURRENT ROW rolling average pattern. Moving averages smooth out daily noise and are standard in any time-series product analytics question."}],practice_questions:[{q:"🏷️ [LeetCode #178 — Rank Scores] Table: Scores(id, score). Write a query to rank scores from highest to lowest. If two scores are tied, they should have the same rank. Ranks should be consecutive integers (no gaps). Example: scores [3.5, 3.65, 4.0, 3.65, 3.5] → ranks [3, 2, 1, 2, 3].",a:"SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank' FROM Scores ORDER BY score DESC. Key: use DENSE_RANK (no gaps) not RANK (which would skip ranks after ties). In MySQL, 'rank' is a reserved keyword — wrap it in backticks or quotes.",say_aloud:"The problem says consecutive ranks with no gaps — that's the signature of DENSE_RANK. If it said 'competition-style' with skipped positions, I'd use RANK. State this distinction explicitly.",company:"LeetCode",difficulty:"Easy"},{q:"🏷️ [LeetCode #185 — Top 3 Salaries per Department] Table: Employee(id, name, salary, departmentId), Department(id, name). Find employees who have one of the top 3 salaries in their department.",a:"WITH ranked AS (SELECT e.name AS Employee, d.name AS Department, e.salary, DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS dr FROM Employee e JOIN Department d ON e.departmentId = d.id) SELECT Department, Employee, salary FROM ranked WHERE dr <= 3. Key: DENSE_RANK not RANK — ensures '3 distinct salary levels' not '3 individual employees'.",say_aloud:"I partition by departmentId so each department gets its own ranking. I use DENSE_RANK so that if two people tie at rank 1, rank 2 is still the second-highest salary, not skipped. Then filter WHERE dr <= 3. Don't forget the JOIN to get department names.",company:"LeetCode / Airbnb / Meta",difficulty:"Hard"},{q:"[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). Q1: Total reservations in the US per day. Q2: Find the first-time booking for each listing in the US. Q3: Calculate week-over-week change in the number of US first-time booked listings by day.",a:"Q1: SELECT ds, COUNT(*) AS reservations FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY ds ORDER BY ds. Q2: SELECT id_listing, MIN(ds) AS first_booking_date FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY id_listing. Q3: WITH first_bookings AS (SELECT id_listing, MIN(ds) AS first_ds FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY id_listing), daily AS (SELECT first_ds, COUNT(*) AS cnt FROM first_bookings GROUP BY first_ds) SELECT first_ds, cnt, LAG(cnt,7) OVER (ORDER BY first_ds) AS prev_week_cnt, cnt - LAG(cnt,7) OVER (ORDER BY first_ds) AS wow_diff FROM daily ORDER BY first_ds.",say_aloud:"For Q3: WoW means comparing to 7 days ago. I use LAG(cnt, 7) — not LAG(cnt, 1) — to get the same day last week. Walk through the CTEs: first find each listing's first booking date, then daily aggregate, then LAG(7) for WoW.",company:"Airbnb",difficulty:"Hard"},{q:"[Reddit] Tables: play_sessions(pt, user_id, subreddit_id, country, duration_sec), subreddit_lookup(subreddit_id, subreddit_name). On 2020-11-03, what were the top 5 subreddits ranked by total duration?",a:"SELECT sl.subreddit_name, SUM(ps.duration_sec)/3600.0 AS duration_hours, RANK() OVER (ORDER BY SUM(ps.duration_sec) DESC) AS subreddit_rank FROM play_sessions ps JOIN subreddit_lookup sl ON ps.subreddit_id = sl.subreddit_id WHERE ps.pt = '2020-11-03' GROUP BY sl.subreddit_name ORDER BY duration_hours DESC LIMIT 5. Alternative with CTE for clarity: WITH ranked AS (SELECT sl.subreddit_name, SUM(duration_sec)/3600.0 AS duration_hours, RANK() OVER (ORDER BY SUM(duration_sec) DESC) AS subreddit_rank FROM play_sessions ps JOIN subreddit_lookup sl ON ps.subreddit_id=sl.subreddit_id WHERE pt='2020-11-03' GROUP BY sl.subreddit_name) SELECT * FROM ranked WHERE subreddit_rank <= 5.",say_aloud:"Note: window functions execute AFTER GROUP BY, so I can use RANK() OVER (ORDER BY SUM(...) DESC) directly in the SELECT — the aggregate SUM has already been computed for each group. Convert seconds to hours by dividing by 3600.",company:"Reddit",difficulty:"Medium"},{q:"🏷️ [LeetCode #180 — Consecutive Numbers] Table: Logs(id, num). Find all numbers that appear at least 3 times consecutively.",a:"WITH lagged AS (SELECT num, LAG(num, 1) OVER (ORDER BY id) AS prev1, LAG(num, 2) OVER (ORDER BY id) AS prev2 FROM Logs) SELECT DISTINCT num AS ConsecutiveNums FROM lagged WHERE num = prev1 AND num = prev2. Alternative self-join: SELECT DISTINCT l1.num FROM Logs l1 JOIN Logs l2 ON l2.id = l1.id + 1 JOIN Logs l3 ON l3.id = l1.id + 2 WHERE l1.num = l2.num AND l2.num = l3.num.",say_aloud:"Two approaches: (1) LAG twice to look 1 and 2 rows back — elegant and scalable to N consecutive. (2) Self-join l1/l2/l3 — classic approach. The LAG approach is cleaner for interviews. DISTINCT handles duplicates (same number appearing in multiple consecutive runs).",company:"LeetCode",difficulty:"Medium"},{q:"[Reddit Ads] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). Q1: Distribution of number of ads per advertiser. Q2: Daily revenue trend over the past week for the ad with highest spend last week. Q4: Top 10 campaigns for each start date.",a:"Q1: SELECT num_ads, COUNT(*) AS num_advertisers FROM (SELECT advertiser_id, COUNT(DISTINCT ad_id) AS num_ads FROM active_ads GROUP BY advertiser_id) sub GROUP BY num_ads ORDER BY num_ads. Q2: WITH top_ad AS (SELECT ad_id FROM ad_revenue WHERE transaction_date >= CURRENT_DATE-7 GROUP BY ad_id ORDER BY SUM(revenue) DESC LIMIT 1) SELECT r.transaction_date, SUM(r.revenue) AS daily_revenue FROM ad_revenue r JOIN top_ad t ON r.ad_id=t.ad_id WHERE r.transaction_date >= CURRENT_DATE-7 GROUP BY r.transaction_date ORDER BY r.transaction_date. Q4: WITH ranked AS (SELECT *, RANK() OVER (PARTITION BY start_date ORDER BY impressions DESC) AS rk FROM ad_campaigns) SELECT * FROM ranked WHERE rk <= 10.",say_aloud:"Q4 is the 'top N per group' pattern using RANK() OVER (PARTITION BY start_date ORDER BY ...). For Q2, I first identify the single top ad in a CTE, then join back to get its daily trend — two-step pattern, not a correlated subquery.",company:"Reddit",difficulty:"Medium"}],derivations:["Write DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) and explain why DENSE_RANK not RANK for 'top 3 salaries'","Write the WoW change query using LAG: daily_count, LAG(daily_count,7) OVER (ORDER BY date), and the pct_change calculation with NULLIF","Write the 7-day rolling average using AVG() OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)","Write the 'first event per user' query using ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY timestamp) — filter rn=1","What's the difference between ROW_NUMBER, RANK, DENSE_RANK? Give a concrete example with ties."],resources:[{name:"🏷️ LeetCode #178 — Rank Scores (Easy)",url:"https://leetcode.com/problems/rank-scores/"},{name:"🏷️ LeetCode #184 — Department Highest Salary (Medium)",url:"https://leetcode.com/problems/department-highest-salary/"},{name:"🏷️ LeetCode #185 — Top 3 Salaries per Department (Hard)",url:"https://leetcode.com/problems/department-top-three-salaries/"},{name:"🏷️ LeetCode #180 — Consecutive Numbers (Medium)",url:"https://leetcode.com/problems/consecutive-numbers/"},{name:"🏷️ LeetCode #177 — Nth Highest Salary (Medium)",url:"https://leetcode.com/problems/nth-highest-salary/"},{name:"Mode Analytics — Window Functions Tutorial",url:"https://mode.com/sql-tutorial/sql-window-functions/"}]},nm={day:9,title:"SQL Date Functions & Time Series",date_note:"Day 9 — Dates, time windows, and WoW patterns",prev_day:8,next_day:10,week_label:"Week 2 — SQL Deep Dive & Python Data Manipulation",recap:{title:"Day 8 Recap — Window Functions (5 min)",points:["DENSE_RANK: no gaps (use for top-N salaries). RANK: gaps after ties. ROW_NUMBER: always unique (use for first event per user).","PARTITION BY defines groups — like GROUP BY that doesn't collapse rows","LAG(col, n): value from n rows back. LEAD(col, n): value from n rows forward. Require ORDER BY.","Top-N per group pattern: DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) → filter WHERE rank <= N","Running total: SUM() OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)","7-day rolling average: AVG() OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)"]},topics:[{title:"Date Arithmetic — The Functions You Must Know Cold",color:"#F59E0B",content:`**Standard SQL (works in most systems):**
  CURRENT_DATE                              -- today
  CURRENT_TIMESTAMP                         -- now (with time)
  date + INTERVAL '7 days'                  -- add 7 days
  date - INTERVAL '1 month'                 -- subtract 1 month
  DATEDIFF(end_date, start_date)            -- difference in days (MySQL)
  end_date - start_date                     -- difference in days (PostgreSQL)

**DATE_TRUNC — truncate to a period:**
  DATE_TRUNC('week', event_ts)    -- Monday of the week containing event_ts
  DATE_TRUNC('month', event_ts)   -- first day of the month
  DATE_TRUNC('day', event_ts)     -- midnight of the day (strips time)
  DATE_TRUNC('hour', event_ts)    -- start of the hour

  Use case: group by week → GROUP BY DATE_TRUNC('week', created_at)

**EXTRACT / DATE_PART — extract a component:**
  EXTRACT(YEAR FROM created_at)       -- 2024
  EXTRACT(MONTH FROM created_at)      -- 3 (March)
  EXTRACT(DOW FROM created_at)        -- 0=Sunday, 6=Saturday (PostgreSQL)
  DATE_PART('hour', event_ts)         -- PostgreSQL alternative

**Formatting:**
  TO_CHAR(created_at, 'YYYY-MM-DD')   -- PostgreSQL
  DATE_FORMAT(created_at, '%Y-%m-%d') -- MySQL

**Filtering on dates:**
  WHERE ds >= CURRENT_DATE - INTERVAL '7 days'      -- last 7 days
  WHERE DATE_TRUNC('month', ds) = DATE_TRUNC('month', CURRENT_DATE)  -- this month
  WHERE ds BETWEEN '2024-01-01' AND '2024-01-31'    -- date range

**'First 30 days of listing' pattern (Airbnb):**
  WHERE b.ds <= l.ds_listing_created + INTERVAL '30 days'
  AND b.ds >= l.ds_listing_created
  — This checks if a booking occurred within 30 days of listing creation`,interview_tip:"DATE_TRUNC is the most-used date function in DS SQL interviews. If you see 'by week' or 'by month', immediately write DATE_TRUNC. Interviewers notice when you know this vs. when you try to use EXTRACT(WEEK...) and get confused by year-boundary edge cases."},{title:"Week-over-Week & Period Comparison Patterns",color:"#8B5CF6",content:`**The core WoW pattern — LAG by 7:**
  WITH daily AS (
    SELECT
      ds AS date,
      COUNT(*) AS cnt
    FROM events
    WHERE condition
    GROUP BY ds
  )
  SELECT
    date,
    cnt,
    LAG(cnt, 7) OVER (ORDER BY date)           AS prev_week_cnt,
    cnt - LAG(cnt, 7) OVER (ORDER BY date)     AS wow_diff,
    ROUND(
      (cnt - LAG(cnt, 7) OVER (ORDER BY date)) * 100.0 /
      NULLIF(LAG(cnt, 7) OVER (ORDER BY date), 0)
    , 1) AS wow_pct_change
  FROM daily
  ORDER BY date

**Same-day-last-week vs. same-week-last-week:**
  Comparing Monday this week to Monday last week → LAG by 7 days
  Comparing week total to prior week total → DATE_TRUNC to week, then LAG by 1

  WITH weekly AS (
    SELECT DATE_TRUNC('week', ds) AS week_start, COUNT(*) AS cnt
    FROM events GROUP BY 1
  )
  SELECT week_start, cnt, LAG(cnt, 1) OVER (ORDER BY week_start) AS prev_week
  FROM weekly

**Month-over-Month pattern:**
  WITH monthly AS (
    SELECT DATE_TRUNC('month', ds) AS month, SUM(revenue) AS rev
    FROM orders GROUP BY 1
  )
  SELECT month, rev,
    LAG(rev, 1) OVER (ORDER BY month) AS prev_month_rev,
    rev / NULLIF(LAG(rev, 1) OVER (ORDER BY month), 0) - 1 AS mom_growth
  FROM monthly

**Reddit CVR WoW pattern (real interview question):**
  WITH daily_cvr AS (
    SELECT
      ds,
      SUM(conversions) * 1.0 / NULLIF(SUM(clicks), 0) AS cvr
    FROM ad_campaigns
    GROUP BY ds
  )
  SELECT
    ds,
    cvr,
    LAG(cvr, 7) OVER (ORDER BY ds)              AS prev_week_cvr,
    cvr / NULLIF(LAG(cvr, 7) OVER (ORDER BY ds), 0) AS cvr_wow_ratio
  FROM daily_cvr
  ORDER BY ds

  'This week Monday CVR is 5%, last week Monday was 3% → ratio = 5/3 = 1.667'
  This is the exact Reddit CVR WoW question format.`,interview_tip:"Reddit onsite SQL round Q3 was literally 'CVR this week / CVR last week'. The answer is a two-step CTE: (1) compute daily CVR, (2) LAG(cvr, 7) / NULLIF. Write this from memory today."},{title:"Time Series Cohort Analysis",color:"#10B981",content:`**Cohort analysis — track users by their signup week:**
  WITH cohorts AS (
    SELECT
      user_id,
      DATE_TRUNC('week', created_at) AS cohort_week
    FROM users
  ),
  activity AS (
    SELECT
      user_id,
      DATE_TRUNC('week', event_time) AS activity_week
    FROM events
  )
  SELECT
    c.cohort_week,
    a.activity_week,
    DATEDIFF(a.activity_week, c.cohort_week) / 7 AS weeks_since_signup,
    COUNT(DISTINCT a.user_id) AS active_users
  FROM cohorts c
  JOIN activity a ON c.user_id = a.user_id
  GROUP BY 1, 2, 3
  ORDER BY cohort_week, weeks_since_signup

**Retention rate at week N:**
  (active users in week N) / (cohort size) per cohort_week.
  Standard approach: pivot by week_number columns or use conditional aggregation:

  SELECT
    cohort_week,
    COUNT(DISTINCT user_id) AS cohort_size,
    COUNT(DISTINCT CASE WHEN weeks_since_signup = 1 THEN user_id END) * 1.0 /
    COUNT(DISTINCT user_id) AS week_1_retention
  FROM cohort_activity
  GROUP BY cohort_week

**Listing '% booked within first 30 days' (Airbnb interview exact question):**
  SELECT
    AVG(CASE WHEN earliest_booking <= ds_listing_created + 30 THEN 1 ELSE 0 END) AS pct_booked_in_30d
  FROM (
    SELECT
      l.id_listing,
      l.ds_listing_created,
      MIN(b.ds) AS earliest_booking
    FROM listings l
    LEFT JOIN bookings b ON l.id_listing = b.id_listing AND l.dim_country = 'US'
    WHERE l.dim_country = 'US'
    GROUP BY l.id_listing, l.ds_listing_created
  ) sub

  Note: LEFT JOIN to include listings that were NEVER booked (earliest_booking = NULL → CASE gives 0)`,interview_tip:"The '% booked within 30 days' Airbnb question has two gotchas: (1) LEFT JOIN to keep unbooked listings, and (2) the INTERVAL comparison on dates. Always state: 'I'm using LEFT JOIN here because I want to include listings that were never booked — they contribute a 0 to the average.'"},{title:"Cumulative Sums, Gaps & Islands",color:"#06B6D4",content:`**Running total — cumulative revenue:**
  SELECT
    ds,
    daily_revenue,
    SUM(daily_revenue) OVER (ORDER BY ds ROWS UNBOUNDED PRECEDING) AS cumulative_revenue
  FROM daily_revenue_table

**Detecting gaps in a time series:**
  Two rows are consecutive if their date difference = 1 day.
  A gap exists where difference > 1 day.

  WITH gaps AS (
    SELECT
      ds,
      LAG(ds) OVER (ORDER BY ds) AS prev_ds,
      ds - LAG(ds) OVER (ORDER BY ds) AS day_diff
    FROM active_dates
  )
  SELECT ds, prev_ds, day_diff
  FROM gaps
  WHERE day_diff > 1  -- these are the gap locations

**Islands problem — group consecutive active days:**
  The classic 'island' technique:
  row_number() - date value creates the same constant for consecutive days.

  WITH numbered AS (
    SELECT
      user_id, ds,
      ds - ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY ds) * INTERVAL '1 day' AS island_id
    FROM active_days
  )
  SELECT user_id, island_id, MIN(ds) AS streak_start, MAX(ds) AS streak_end, COUNT(*) AS streak_length
  FROM numbered
  GROUP BY user_id, island_id
  ORDER BY user_id, streak_start

**Expedia: Last 7-day rolling sales by day:**
  SELECT
    ds,
    SUM(sales) AS daily_sales,
    SUM(SUM(sales)) OVER (
      ORDER BY ds
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7d_sales
  FROM sales
  GROUP BY ds
  ORDER BY ds

  Note: nested SUM — outer SUM() is the window function, inner SUM(sales) is the GROUP BY aggregate.`,interview_tip:"Expedia's SQL onsite asked 'last 7 day sales, each day is a row' — this is the rolling sum with ROWS BETWEEN 6 PRECEDING. The tricky part is nesting the aggregate inside the window: SUM(SUM(sales)) OVER (...) — outer is window, inner is GROUP BY aggregate."}],practice_questions:[{q:"🏷️ [LeetCode #197 — Rising Temperature] Table: Weather(id, recordDate, temperature). Find all dates where the temperature was higher than the previous day.",a:"SELECT w1.id FROM Weather w1 JOIN Weather w2 ON w1.recordDate = w2.recordDate + INTERVAL '1 day' WHERE w1.temperature > w2.temperature. Alternative with LAG: WITH lagged AS (SELECT id, recordDate, temperature, LAG(temperature) OVER (ORDER BY recordDate) AS prev_temp, LAG(recordDate) OVER (ORDER BY recordDate) AS prev_date FROM Weather) SELECT id FROM lagged WHERE temperature > prev_temp AND recordDate = prev_date + INTERVAL '1 day'. The date check is critical — if there's a gap in dates, we don't want to compare to a non-adjacent day.",say_aloud:"Two approaches: self-join on date+1 (classic), or LAG with date gap check. The LAG approach needs an extra check that prev_date is exactly 1 day before to handle missing dates. Always mention the edge case.",company:"LeetCode",difficulty:"Easy"},{q:"[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). What % of US listings were booked within the first 30 days of creation?",a:"SELECT AVG(CASE WHEN earliest_booking IS NOT NULL AND earliest_booking <= ds_listing_created + 30 THEN 1 ELSE 0 END) AS pct_booked_30d FROM (SELECT l.id_listing, l.ds_listing_created, MIN(b.ds) AS earliest_booking FROM listings l LEFT JOIN bookings b ON l.id_listing = b.id_listing AND l.dim_country = 'US' WHERE l.dim_country = 'US' GROUP BY l.id_listing, l.ds_listing_created) sub.",say_aloud:"Key points to state: (1) LEFT JOIN — I need to keep listings that were never booked, they contribute 0. (2) Filter WHERE l.dim_country='US' on both the listings table and the JOIN condition. (3) CASE WHEN earliest_booking IS NOT NULL AND earliest_booking <= created + 30 THEN 1 ELSE 0 END handles both 'never booked' (NULL → 0) and 'booked after 30 days' (0).",company:"Airbnb",difficulty:"Hard"},{q:"[Reddit] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). Show the daily revenue trend over the past week for the ad with the highest total spend last week.",a:"WITH top_ad AS (SELECT ad_id FROM ad_revenue WHERE transaction_date >= CURRENT_DATE - 7 GROUP BY ad_id ORDER BY SUM(revenue) DESC LIMIT 1) SELECT r.transaction_date, SUM(r.revenue) AS daily_revenue FROM ad_revenue r JOIN top_ad t ON r.ad_id = t.ad_id WHERE r.transaction_date >= CURRENT_DATE - 7 GROUP BY r.transaction_date ORDER BY r.transaction_date.",say_aloud:"Two-step approach: first find the single top ad in a CTE (aggregated over the whole period), then join back to get that ad's daily revenue breakdown. The LIMIT 1 in the CTE is intentional — if the question says 'the ad', I want exactly one.",company:"Reddit",difficulty:"Medium"},{q:"[Reddit Onsite] CVR Week-over-Week. Table: events(ds, user_id, event_type: 'ad_click'|'purchase'). Write a query to show each day's conversion rate (purchases/clicks) and how it compares to the same day last week.",a:"WITH daily_cvr AS (SELECT ds, SUM(CASE WHEN event_type='purchase' THEN 1 ELSE 0 END) * 1.0 / NULLIF(SUM(CASE WHEN event_type='ad_click' THEN 1 ELSE 0 END), 0) AS cvr FROM events GROUP BY ds) SELECT ds, cvr, LAG(cvr, 7) OVER (ORDER BY ds) AS prev_week_cvr, cvr / NULLIF(LAG(cvr, 7) OVER (ORDER BY ds), 0) AS wow_ratio FROM daily_cvr ORDER BY ds.",say_aloud:"CVR = purchases / clicks, computed per day. Then LAG(cvr, 7) to look back exactly 7 days (same weekday). The ratio cvr / prev_week_cvr gives the multiplier — if today is 5% and last week was 3%, ratio = 1.667, meaning +66.7% WoW. NULLIF protects against divide-by-zero.",company:"Reddit",difficulty:"Hard"},{q:"[Expedia] Table: sales(ds DATE, product_id, sales_amount). Write a query to show, for each day, the rolling 7-day total sales (including today and the prior 6 days).",a:"SELECT ds, SUM(sales_amount) AS daily_sales, SUM(SUM(sales_amount)) OVER (ORDER BY ds ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7d_sales FROM sales GROUP BY ds ORDER BY ds.",say_aloud:"The nested SUM is intentional: the inner SUM(sales_amount) is the GROUP BY aggregate (daily total), the outer SUM() OVER (...) is the window function summing those daily totals over the 7-day frame. ROWS BETWEEN 6 PRECEDING AND CURRENT ROW means 'this row + 6 rows before' = 7 days.",company:"Expedia",difficulty:"Medium"},{q:"🏷️ [LeetCode #262 — Trips and Users] Tables: Trips(id, client_id, driver_id, city_id, status, request_at), Users(users_id, banned, role). Compute the cancellation rate of requests with unbanned clients and drivers between Oct 1 and Oct 3, 2013.",a:"SELECT t.request_at AS Day, ROUND(SUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 1.0 / COUNT(*), 2) AS 'Cancellation Rate' FROM Trips t JOIN Users c ON t.client_id = c.users_id AND c.banned = 'No' JOIN Users d ON t.driver_id = d.users_id AND d.banned = 'No' WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03' GROUP BY t.request_at.",say_aloud:"Join to Users twice — once for client (c) and once for driver (d) — filtering banned='No' for both. Cancellation rate = (completed + other) → status != completed. AVG(CASE WHEN status != 'completed' THEN 1 ELSE 0 END) is equivalent and slightly cleaner.",company:"LeetCode",difficulty:"Hard"}],derivations:["Write DATE_TRUNC('week', event_ts) and explain what it returns for a Wednesday timestamp","Write the WoW pct change formula: (cnt - LAG(cnt,7)) * 100.0 / NULLIF(LAG(cnt,7), 0). Why NULLIF?","Write the '% booked within 30 days' query from scratch — what's the LEFT JOIN for? What's the CASE WHEN for?","Write a rolling 7-day SUM using ROWS BETWEEN 6 PRECEDING AND CURRENT ROW","What is DATE_TRUNC('week', ...) vs EXTRACT(WEEK FROM ...)? When would you use each?"],resources:[{name:"🏷️ LeetCode #197 — Rising Temperature (Easy)",url:"https://leetcode.com/problems/rising-temperature/"},{name:"🏷️ LeetCode #262 — Trips and Users (Hard)",url:"https://leetcode.com/problems/trips-and-users/"},{name:"PostgreSQL Date Functions Reference",url:"https://www.postgresql.org/docs/current/functions-datetime.html"},{name:"DataLemur — Time Series SQL Problems",url:"https://datalemur.com/questions?category=SQL"}]},im={day:10,title:"SQL Complex Patterns — Churn, Funnel, Self-Join",date_note:"Day 10 — The hardest SQL patterns in DS interviews",prev_day:9,next_day:11,week_label:"Week 2 — SQL Deep Dive & Python Data Manipulation",recap:{title:"Day 9 Recap — Date Functions & Time Series (5 min)",points:["DATE_TRUNC('week', ts): truncates to Monday of the containing week — use for GROUP BY week","WoW pattern: LAG(cnt, 7) OVER (ORDER BY ds). WoW ratio: cnt / NULLIF(LAG(cnt,7), 0)","% booked within 30 days: LEFT JOIN (keep unbooked), CASE WHEN booking_date <= created + 30 THEN 1 ELSE 0 END","Rolling 7-day: SUM() OVER (ORDER BY ds ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)","CVR WoW (Reddit pattern): compute daily CVR first in a CTE, then LAG(cvr, 7)","Expedia rolling sales: nested SUM — outer is window function, inner is GROUP BY aggregate"]},topics:[{title:"Churn Detection — The 7-Day No-Activity Pattern",color:"#F59E0B",content:`**Definition (Reddit):** An advertiser has 'churned' if they have NOT spent for 7 consecutive days.
  In SQL: their most recent transaction was more than 7 days ago (or they never transacted).

**Approach 1 — Last activity date:**
  WITH last_activity AS (
    SELECT advertiser_id, MAX(transaction_date) AS last_txn
    FROM ad_revenue ar
    JOIN active_ads aa ON ar.ad_id = aa.ad_id
    GROUP BY advertiser_id
  )
  SELECT COUNT(*) AS churned_advertisers
  FROM last_activity
  WHERE last_txn < CURRENT_DATE - 7  -- no spend in last 7 days

**How many advertisers churned YESTERDAY (trickier):**
  An advertiser churned on day D if:
  - Their last transaction before D was exactly 7 days ago (D - 7)
  - They had NO transaction on days D-6 through D

  -- Advertisers whose last-ever spend was exactly 7 days before yesterday
  WITH last_spend AS (
    SELECT advertiser_id, MAX(transaction_date) AS last_txn
    FROM ad_revenue ar JOIN active_ads aa ON ar.ad_id = aa.ad_id
    GROUP BY advertiser_id
  )
  SELECT COUNT(*) AS churned_yesterday
  FROM last_spend
  WHERE last_txn = CURRENT_DATE - 8  -- last spent 8 days ago, so day 7 of no-spend = yesterday

**% of daily advertisers that are 'high value' (Reddit Q4):**
  High value = spend > $40/day OR > 2 active ads/day

  SELECT
    CAST(transaction_date AS DATE) AS dt,
    COUNT(DISTINCT aa.advertiser_id) AS total_advertisers,
    COUNT(DISTINCT CASE WHEN daily_spend > 40 OR ad_count > 2 THEN aa.advertiser_id END) AS high_value_count,
    AVG(CASE WHEN daily_spend > 40 OR ad_count > 2 THEN 1.0 ELSE 0 END) AS pct_high_value
  FROM (
    SELECT aa.advertiser_id, CAST(ar.transaction_date AS DATE) AS dt,
           SUM(ar.revenue) AS daily_spend, COUNT(DISTINCT ar.ad_id) AS ad_count
    FROM ad_revenue ar JOIN active_ads aa ON ar.ad_id = aa.ad_id
    GROUP BY aa.advertiser_id, CAST(ar.transaction_date AS DATE)
  ) sub
  GROUP BY dt`,interview_tip:"Reddit's churn question is a classic trap. Many candidates try complex window functions when the key insight is simpler: 'churned = last transaction was more than 7 days ago'. Start with MAX(transaction_date) per advertiser, then filter. Only get fancy if the question asks for 'who churned ON a specific date'."},{title:"Funnel Analysis & Conversion Rates",color:"#8B5CF6",content:`**Funnel definition:** Users progress through stages: impression → click → cart → purchase.
  Drop-off at each stage = (users entering stage N - users entering stage N+1) / users entering stage N

**Step-by-step funnel with conditional aggregation:**
  SELECT
    COUNT(DISTINCT CASE WHEN event_type = 'impression' THEN user_id END)  AS impressions,
    COUNT(DISTINCT CASE WHEN event_type = 'click' THEN user_id END)       AS clicks,
    COUNT(DISTINCT CASE WHEN event_type = 'cart' THEN user_id END)        AS cart_adds,
    COUNT(DISTINCT CASE WHEN event_type = 'purchase' THEN user_id END)    AS purchases,
    -- Conversion rates
    ROUND(
      COUNT(DISTINCT CASE WHEN event_type='click' THEN user_id END) * 100.0 /
      NULLIF(COUNT(DISTINCT CASE WHEN event_type='impression' THEN user_id END), 0)
    , 2) AS click_rate_pct
  FROM events
  WHERE ds = CURRENT_DATE - 1

**Funnel with ordered steps (user must complete steps in order):**
  For strict funnel — user must have impression BEFORE click BEFORE purchase:
  WITH user_steps AS (
    SELECT user_id,
      MIN(CASE WHEN event_type='impression' THEN ts END) AS impression_ts,
      MIN(CASE WHEN event_type='click' THEN ts END) AS click_ts,
      MIN(CASE WHEN event_type='purchase' THEN ts END) AS purchase_ts
    FROM events GROUP BY user_id
  )
  SELECT
    COUNT(*) AS had_impression,
    COUNT(CASE WHEN click_ts > impression_ts THEN 1 END) AS clicked_after_impression,
    COUNT(CASE WHEN purchase_ts > click_ts THEN 1 END) AS purchased_after_click
  FROM user_steps
  WHERE impression_ts IS NOT NULL

**Reddit CVR pattern:**
  CVR = conversions / clicks (per campaign, per day)
  See Day 9 for the WoW CVR query.`,interview_tip:"When asked for a funnel, always clarify: 'Do you want strict ordering (impression must happen before click) or just overall counts?' Most DS interviews want simple COUNT(DISTINCT user_id per event_type). Strict ordering requires MIN(timestamp) per step and comparison."},{title:"Self-Joins, EXISTS/NOT EXISTS, and Correlated Subqueries",color:"#10B981",content:`**Self-join — comparing rows within the same table:**
  Classic: find employees who earn more than their manager.
  SELECT e.name, e.salary, m.salary AS manager_salary
  FROM employees e
  JOIN employees m ON e.manager_id = m.id
  WHERE e.salary > m.salary

**Self-join for consecutive events:**
  See Day 8 LeetCode #180 (Consecutive Numbers):
  SELECT DISTINCT l1.num FROM Logs l1
  JOIN Logs l2 ON l2.id = l1.id + 1
  JOIN Logs l3 ON l3.id = l1.id + 2
  WHERE l1.num = l2.num AND l2.num = l3.num

**EXISTS — does a matching row exist?**
  SELECT d.name AS Department
  FROM Department d
  WHERE EXISTS (
    SELECT 1 FROM Employee e WHERE e.departmentId = d.id AND e.salary > 50000
  )
  -- Returns departments with at least one employee earning > 50k

**NOT EXISTS — find rows with no match (often better than LEFT JOIN + IS NULL):**
  -- Advertisers who never spent anything:
  SELECT advertiser_id FROM active_ads
  WHERE NOT EXISTS (
    SELECT 1 FROM ad_revenue
    WHERE ad_revenue.ad_id IN (
      SELECT ad_id FROM active_ads a2 WHERE a2.advertiser_id = active_ads.advertiser_id
    )
  )

  -- Equivalent LEFT JOIN pattern (often cleaner):
  SELECT DISTINCT aa.advertiser_id
  FROM active_ads aa
  LEFT JOIN ad_revenue ar ON aa.ad_id = ar.ad_id
  WHERE ar.ad_id IS NULL

**'First event per user' — a common subquery pattern:**
  SELECT * FROM events e
  WHERE e.event_time = (
    SELECT MIN(event_time) FROM events e2 WHERE e2.user_id = e.user_id
  )
  -- Or cleaner: ROW_NUMBER() method from Day 8`,interview_tip:"LEFT JOIN + IS NULL is usually more readable than NOT EXISTS, but both work. In practice, interviewers prefer whichever you can explain clearly. If you pick NOT EXISTS, immediately say 'this returns rows from the left table where no matching row exists in the subquery'."},{title:"UNION ALL, Subqueries as Tables, and the Country Penetration Pattern",color:"#06B6D4",content:`**UNION ALL — stack rows from two queries:**
  (SELECT col1, col2 FROM table1)
  UNION ALL
  (SELECT col1, col2 FROM table2)
  -- UNION removes duplicates (expensive), UNION ALL keeps all rows (faster)
  -- Use UNION ALL unless you explicitly need deduplication

**Bidirectional participant pattern (Meta/Reddit video calls):**
  WITH participants AS (
    SELECT caller AS user_id, duration, ds FROM video_calls
    UNION ALL
    SELECT recipient AS user_id, duration, ds FROM video_calls
  )
  SELECT user_id, SUM(duration) AS total_call_time FROM participants GROUP BY user_id

**Country penetration — US vs. Not US (Reddit Q4):**
  Out of users who watched video in last 30 days, how many are primarily US-based?
  'Primarily US' = 50%+ of their viewing time is in the US.

  WITH user_country AS (
    SELECT
      user_id,
      SUM(CASE WHEN country = 'US' THEN duration_sec ELSE 0 END) * 1.0 /
      NULLIF(SUM(duration_sec), 0) AS us_share
    FROM play_sessions
    WHERE pt >= CURRENT_DATE - 30
    GROUP BY user_id
  )
  SELECT
    CASE WHEN us_share >= 0.5 THEN 'US' ELSE 'Not US' END AS user_location,
    COUNT(*) AS user_count
  FROM user_country
  GROUP BY 1

**Subqueries as FROM (derived tables):**
  SELECT dept, avg_salary
  FROM (
    SELECT department_id AS dept, AVG(salary) AS avg_salary
    FROM employees GROUP BY department_id
  ) dept_stats
  WHERE avg_salary > 80000

  Equivalent CTE form (preferred in interviews):
  WITH dept_stats AS (
    SELECT department_id AS dept, AVG(salary) AS avg_salary
    FROM employees GROUP BY department_id
  )
  SELECT dept, avg_salary FROM dept_stats WHERE avg_salary > 80000`,interview_tip:"The country penetration pattern (US vs Not US based on % of activity) comes up at Reddit and Airbnb. The key is: compute per-user US share in a CTE, then CASE WHEN >= 0.5 THEN 'US'. Don't try to do this in one query — the two-step CTE approach is readable and correct."}],practice_questions:[{q:"🏷️ [LeetCode #570 — Managers with 5+ Direct Reports] Table: Employee(id, name, department, managerId). Find managers who have at least 5 direct reports.",a:"SELECT e.name FROM Employee e WHERE e.id IN (SELECT managerId FROM Employee WHERE managerId IS NOT NULL GROUP BY managerId HAVING COUNT(*) >= 5). Alternative: SELECT m.name FROM Employee m JOIN (SELECT managerId FROM Employee WHERE managerId IS NOT NULL GROUP BY managerId HAVING COUNT(*) >= 5) sub ON m.id = sub.managerId.",say_aloud:"Two steps: (1) group by managerId to count direct reports, filter HAVING COUNT >= 5, (2) join back to Employee to get the manager's name. The IN/subquery approach is concise; the JOIN approach is sometimes faster and more explicit.",company:"LeetCode",difficulty:"Medium"},{q:"🏷️ [LeetCode #602 — Friend Requests II: Who Has the Most Friends] Table: RequestAccepted(requester_id, accepter_id, accept_date). Find the user with the most total friends (as requester OR accepter).",a:"WITH all_friends AS (SELECT requester_id AS user_id FROM RequestAccepted UNION ALL SELECT accepter_id AS user_id FROM RequestAccepted) SELECT user_id, COUNT(*) AS num FROM all_friends GROUP BY user_id ORDER BY num DESC LIMIT 1.",say_aloud:"A user can be a friend as either the requester or the accepter. UNION ALL stacks both columns into one. Then GROUP BY user_id and COUNT(*). LIMIT 1 for the top user. Note: UNION (not UNION ALL) would incorrectly remove duplicate entries if someone accepted multiple requests.",company:"LeetCode",difficulty:"Medium"},{q:"[Reddit Ads] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). How many advertisers churned yesterday? Churn = have not spent for 7 consecutive days.",a:"WITH advertiser_last_spend AS (SELECT aa.advertiser_id, MAX(CAST(ar.transaction_date AS DATE)) AS last_spend_date FROM active_ads aa JOIN ad_revenue ar ON aa.ad_id = ar.ad_id GROUP BY aa.advertiser_id) SELECT COUNT(*) AS churned_yesterday FROM advertiser_last_spend WHERE last_spend_date = CURRENT_DATE - 8. Explanation: if an advertiser's last spend was 8 days ago, then yesterday was their 7th consecutive day of no spending — they churned yesterday.",say_aloud:"The logic: churned YESTERDAY means day 7 of no-spending was yesterday. So their last transaction must have been exactly 8 days ago (yesterday - 7 = 8 days before today). Walk through this reasoning explicitly — it's the part most candidates get wrong.",company:"Reddit",difficulty:"Hard"},{q:"[Reddit] Tables: play_sessions(pt, user_id, subreddit_id, country, duration_sec), subreddit_lookup(subreddit_id, subreddit_name). Out of all users who watched video in the last 30 days, how many are primarily US-based viewers (50%+ viewing time in US)?",a:"WITH user_country AS (SELECT user_id, SUM(CASE WHEN country='US' THEN duration_sec ELSE 0 END) * 1.0 / NULLIF(SUM(duration_sec), 0) AS us_share FROM play_sessions WHERE pt >= CURRENT_DATE - 30 GROUP BY user_id) SELECT CASE WHEN us_share >= 0.5 THEN 'US' ELSE 'Not US' END AS user_location, COUNT(*) AS user_count FROM user_country GROUP BY 1 ORDER BY user_count DESC.",say_aloud:"Three steps: (1) filter last 30 days, (2) compute each user's US time share (US duration / total duration), (3) CASE WHEN >= 0.5 to label US vs Not US, then COUNT. The NULLIF handles users with zero total duration to avoid divide-by-zero.",company:"Reddit",difficulty:"Medium"},{q:"[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). Write SQL to find: Q1: Total US bookings per day. Q2: % of US listings that got a first booking within their first 30 days of creation.",a:"Q1: SELECT b.ds, COUNT(*) AS us_bookings FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY b.ds ORDER BY b.ds. Q2: SELECT AVG(CASE WHEN first_booking_ds IS NOT NULL AND first_booking_ds <= ds_listing_created + 30 THEN 1 ELSE 0 END) AS pct_booked_30d FROM (SELECT l.id_listing, l.ds_listing_created, MIN(b.ds) AS first_booking_ds FROM listings l LEFT JOIN bookings b ON l.id_listing=b.id_listing WHERE l.dim_country='US' GROUP BY l.id_listing, l.ds_listing_created) sub.",say_aloud:"Q2 is a two-step query: inner query finds first booking date per listing (LEFT JOIN to keep never-booked listings), outer query uses AVG(CASE WHEN) — the Meta percentage pattern. Mention both the LEFT JOIN reasoning and the NULLIF/CASE handling.",company:"Airbnb",difficulty:"Medium-Hard"},{q:"🏷️ [LeetCode #196 — Delete Duplicate Emails / #184 context] Design a query to find the department with the highest average salary. Return department name and average salary.",a:"SELECT d.name AS Department, ROUND(AVG(e.salary), 2) AS AvgSalary FROM Department d JOIN Employee e ON d.id = e.departmentId GROUP BY d.id, d.name ORDER BY AvgSalary DESC LIMIT 1. For all departments ranked: WITH dept_avg AS (SELECT d.name, AVG(e.salary) AS avg_sal, RANK() OVER (ORDER BY AVG(e.salary) DESC) AS rk FROM Department d JOIN Employee e ON d.id=e.departmentId GROUP BY d.id, d.name) SELECT name, avg_sal FROM dept_avg WHERE rk = 1.",say_aloud:"If only the single highest, ORDER BY + LIMIT 1 is fine. If there could be ties at the top (two departments with same highest avg), use RANK() OVER and filter rk=1 to return all tied departments. Always ask the interviewer if ties are possible.",company:"LeetCode / All",difficulty:"Easy"}],derivations:["Write the churn query: advertisers who haven't spent in 7 days. What does 'churned yesterday' mean vs 'churned as of today'?","Write the country penetration query: US vs Not US users, based on >50% of viewing time being in US","Write the funnel query using COUNT(DISTINCT CASE WHEN event_type='X' THEN user_id END) for each step","Write the UNION ALL pattern for bidirectional relationships (caller/recipient or sender/receiver)","Write NOT EXISTS and the equivalent LEFT JOIN + IS NULL — when would you choose each?"],resources:[{name:"🏷️ LeetCode #570 — Managers with 5+ Direct Reports (Medium)",url:"https://leetcode.com/problems/managers-with-at-least-5-direct-reports/"},{name:"🏷️ LeetCode #602 — Friend Requests II: Most Friends (Medium)",url:"https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/"},{name:"🏷️ LeetCode #262 — Trips and Users (Hard)",url:"https://leetcode.com/problems/trips-and-users/"},{name:"DataLemur — Churn & Funnel SQL Problems",url:"https://datalemur.com/questions?category=SQL"}]},rm={day:11,title:"Python Pandas Fundamentals",date_note:"Day 11 — Python data manipulation: the Airbnb stack",prev_day:10,next_day:12,week_label:"Week 2 — SQL Deep Dive & Python Data Manipulation",recap:{title:"Day 10 Recap — SQL Complex Patterns (5 min)",points:["Churn = last transaction > 7 days ago. Churned yesterday = last_txn == CURRENT_DATE - 8","Funnel: COUNT(DISTINCT CASE WHEN event_type='X' THEN user_id END) for each step","Country penetration: per-user US share CTE → CASE WHEN >= 0.5 THEN 'US'","UNION ALL for bidirectional relationships (caller/recipient). UNION removes duplicates (slower, usually not needed)","Self-join for consecutive comparisons. NOT EXISTS or LEFT JOIN + IS NULL for 'no matching row'","Days 8–10 SQL complete. Python starts today — same energy, different syntax."]},topics:[{title:"DataFrame Basics — Creation, Selection, Filtering",color:"#F59E0B",content:`**Creating DataFrames:**
  import pandas as pd
  import numpy as np

  # From dict
  df = pd.DataFrame({'user_id': [1, 2, 3], 'score': [85, 92, 78]})

  # From CSV (Airbnb interview hands you a CSV)
  df = pd.read_csv('data.csv')
  df = pd.read_csv('data.csv', parse_dates=['date_col'])  # auto-parse dates

**Inspecting data:**
  df.shape          # (rows, cols)
  df.dtypes         # column types
  df.info()         # concise summary
  df.describe()     # numeric stats
  df.head(5)        # first 5 rows
  df.isnull().sum() # null counts per column

**Column selection:**
  df['col']           # Series
  df[['col1','col2']] # DataFrame (double brackets)
  df.col              # attribute access (only if no spaces/special chars)

**Row filtering:**
  df[df['score'] > 80]                                    # boolean mask
  df[(df['score'] > 80) & (df['country'] == 'US')]       # AND: use &
  df[(df['score'] < 60) | (df['country'] == 'CA')]       # OR: use |
  df[df['status'].isin(['active', 'trial'])]             # IN list
  df[df['col'].notna()]                                  # not null
  df[df['col'].isna()]                                   # is null

  Note: Use & and | (not 'and'/'or'). Wrap each condition in parentheses.

**iloc vs loc:**
  df.iloc[0]            # first row by integer position
  df.iloc[0:5, 1:3]     # rows 0-4, cols 1-2 by position
  df.loc[0]             # row with index label 0
  df.loc[:, 'col']      # all rows, column 'col' by label

**Adding/modifying columns:**
  df['new_col'] = df['a'] + df['b']                         # arithmetic
  df['converted'] = df['converted'].fillna(0).astype(int)   # fill nulls
  df['log_revenue'] = np.log(df['revenue'].replace(0, np.nan))  # safe log`,interview_tip:"In Airbnb share-screen interviews, they watch how fast you can inspect a new CSV and orient yourself. The sequence: df.shape → df.dtypes → df.head() → df.isnull().sum(). Do this in the first 60 seconds. It signals professional habits."},{title:"groupby + agg — The Pandas GROUP BY",color:"#8B5CF6",content:`**Basic groupby:**
  df.groupby('country')['revenue'].sum()             # sum revenue by country
  df.groupby('country')['revenue'].mean()            # mean
  df.groupby(['country', 'segment'])['revenue'].sum() # multi-column groupby

**Multiple aggregations with agg():**
  metrics = df.groupby('assign').agg(
      visitors  = ('user_id', 'nunique'),   # distinct users
      bookings  = ('converted', 'sum'),     # total conversions
      book_rate = ('converted', 'mean'),    # conversion rate
      avg_rev   = ('revenue', 'mean')
  ).reset_index()
  # reset_index() brings the group key back as a column (not the index)

**Named aggregations (pandas >= 0.25, preferred style):**
  result = df.groupby('group').agg(
      total_rev  = pd.NamedAgg(column='revenue', aggfunc='sum'),
      unique_users = pd.NamedAgg(column='user_id', aggfunc='nunique')
  ).reset_index()

**Common agg functions:**
  'sum', 'mean', 'median', 'std', 'min', 'max', 'count', 'nunique'
  lambda x: x.quantile(0.95)          # custom: 95th percentile
  lambda x: (x > 0).mean()            # custom: fraction positive

**Airbnb interview groupby pattern:**
  # After merging visit + booking tables:
  metrics = df.groupby('assign').agg(
      visitors     = ('user_id', 'nunique'),
      bookings     = ('converted', 'sum'),
      booking_rate = ('converted', 'mean')
  ).reset_index()
  metrics.columns.tolist()  # ['assign', 'visitors', 'bookings', 'booking_rate']

**Filtering groups after aggregation (like HAVING):**
  # Users who visited more than 10 times
  heavy_users = df.groupby('user_id').filter(lambda x: len(x) > 10)
  # Or:
  counts = df.groupby('user_id')['session_id'].count().reset_index()
  heavy = counts[counts['session_id'] > 10]`,interview_tip:"The agg() named syntax (visitors=('user_id','nunique')) is the professional style — it makes column names clear immediately. If you write .agg(['sum','mean']) you get ugly MultiIndex columns that need renaming. Use named agg from the start."},{title:"merge & join — The Python JOIN",color:"#10B981",content:`**pd.merge() — the primary join function:**
  # Inner join (default)
  merged = pd.merge(df1, df2, on='user_id')

  # Left join (keep all rows from df1)
  merged = pd.merge(df1, df2, on='user_id', how='left')

  # Join on different column names
  merged = pd.merge(df1, df2, left_on='uid', right_on='user_id')

  # Multiple join keys
  merged = pd.merge(df1, df2, on=['user_id', 'date'])

**how= options:**
  how='inner'  → only matching rows (default)
  how='left'   → all left rows + matching right rows (NaN where no match)
  how='right'  → all right rows + matching left rows
  how='outer'  → all rows from both, NaN where no match

**suffix handling for duplicate column names:**
  pd.merge(visits, bookings, on='user_id', how='left', suffixes=('_visit', '_booking'))
  # Disambiguates: timestamp_visit, timestamp_booking

**The Airbnb join pattern:**
  # visit table: id_visitor, timestamp, country, assign (0/1)
  # booking table: id_visitor, id_booking, timestamp

  # Add conversion flag to bookings first
  booking['converted'] = 1

  # Left join: keep ALL visitors, 1 if they booked
  df = pd.merge(visit, booking[['id_visitor', 'converted']],
                on='id_visitor', how='left')
  df['converted'] = df['converted'].fillna(0).astype(int)

  # Why left join? To count non-converters. If a visitor never booked,
  # they'd be dropped with inner join — wrong denominator for booking rate.

**Equivalent df.join():**
  df1.set_index('user_id').join(df2.set_index('user_id'), how='left')
  # Less common, requires setting index first — stick with pd.merge()

**Checking for merge quality (SRM check):**
  print(f'Rows before merge: {len(visit)}')
  print(f'Rows after merge:  {len(df)}')
  print(f'Conversion rate:  {df["converted"].mean():.4f}')
  # If rows ballooned, you have a many-to-many join — investigate`,interview_tip:"Always use 'left join' when the question is 'what % of users in group X did Y'. The denominator is all users in group X — inner join would drop non-converters. This is the same reasoning as SQL LEFT JOIN + COALESCE."},{title:"DateTime, pivot_table, and apply",color:"#06B6D4",content:`**DateTime parsing and operations:**
  df['date'] = pd.to_datetime(df['date_str'])          # parse string to datetime
  df = pd.read_csv('data.csv', parse_dates=['date'])   # parse on read

  df['date'].dt.date                  # extract date part
  df['date'].dt.year                  # year as int
  df['date'].dt.month                 # month
  df['date'].dt.dayofweek             # 0=Monday, 6=Sunday
  df['date'].dt.to_period('W')        # convert to weekly period (WoW grouping)
  df['date'].dt.floor('D')            # floor to day (strip time)

  # 7-day filter
  cutoff = pd.Timestamp.today() - pd.Timedelta(days=7)
  df_recent = df[df['date'] >= cutoff]

  # Time difference
  df['days_since_creation'] = (df['booking_date'] - df['listing_created_date']).dt.days

**pivot_table — the Python PIVOT:**
  # Cross-tabulation of avg booking rate by country and segment
  pivot = df.pivot_table(
      values='converted',
      index='country',
      columns='assign',
      aggfunc='mean'
  ).reset_index()
  # Result: rows=countries, columns=[control, treatment], values=mean conversion

**apply() — row/column-wise functions:**
  # Apply to column
  df['category'] = df['score'].apply(lambda x: 'high' if x > 80 else 'low')

  # Apply to rows (axis=1)
  df['result'] = df.apply(lambda row: row['a'] + row['b'], axis=1)

  # Prefer vectorized operations over apply when possible (much faster)
  df['result'] = df['a'] + df['b']           # vectorized (fast)
  df['result'] = df.apply(lambda r: r['a'] + r['b'], axis=1)  # apply (slow)

**value_counts() — distribution check:**
  df['country'].value_counts()               # count of each value
  df['country'].value_counts(normalize=True) # as fractions
  df['score'].describe()                     # summary stats`,interview_tip:"In Airbnb coding interviews, they give you a CSV and ask you to 'analyze the experiment results'. Your flow: (1) read_csv → (2) merge → (3) groupby.agg() → (4) z-test → (5) plot. DateTime parsing and value_counts are warm-up diagnostics. The interviewer is watching for fluency, not perfection."}],practice_questions:[{q:"[Airbnb] Two CSVs are provided: visit(id_visitor, timestamp, country, assign) and booking(id_visitor, id_booking, timestamp). Compute, for each assignment group (control=0, treatment=1): number of unique visitors, number of bookings, and booking rate.",a:`import pandas as pd
visit = pd.read_csv('visit.csv')
booking = pd.read_csv('booking.csv')
booking['converted'] = 1
df = pd.merge(visit, booking[['id_visitor','converted']], on='id_visitor', how='left')
df['converted'] = df['converted'].fillna(0).astype(int)
metrics = df.groupby('assign').agg(
    visitors=('id_visitor','nunique'),
    bookings=('converted','sum'),
    booking_rate=('converted','mean')
).reset_index()
print(metrics)`,say_aloud:"Step 1: add 'converted=1' column to booking table — this marks every booking as a conversion. Step 2: LEFT JOIN visit to booking on id_visitor — keeps all visitors, NaN for non-converters. Step 3: fillna(0) + astype(int) converts NaN to 0. Step 4: groupby assign + agg. Say: 'I'm using nunique for visitors in case there are duplicate visitor rows.'",company:"Airbnb",difficulty:"Medium"},{q:"[General] Table: orders(order_id, user_id, product_id, amount, order_date). Write Python code to: (1) find the top 5 users by total spend, (2) find the month with highest average order value, (3) compute the 7-day rolling average order count.",a:`(1) top5 = orders.groupby('user_id')['amount'].sum().nlargest(5).reset_index()
(2) orders['month'] = pd.to_datetime(orders['order_date']).dt.to_period('M')
monthly = orders.groupby('month')['amount'].mean()
best_month = monthly.idxmax()
(3) daily = orders.groupby(pd.to_datetime(orders['order_date']).dt.date)['order_id'].count().reset_index()
daily.columns = ['date','count']
daily['rolling_7d'] = daily['count'].rolling(window=7).mean()`,say_aloud:"For (1): sum by user then nlargest(5) — cleaner than sort + head. For (2): convert to period for grouping, then idxmax() for the max month. For (3): rolling(7).mean() needs the data sorted by date first — I'd add .sort_values('date') before rolling.",company:"General / Airbnb",difficulty:"Medium"},{q:"[Airbnb] After merging visit and booking tables, compute per-country metrics for the treatment group only: number of visitors, booking rate, and 95% confidence interval on booking rate.",a:`treatment = df[df['assign'] == 1]
country_metrics = treatment.groupby('country').agg(
    visitors=('id_visitor','nunique'),
    bookings=('converted','sum'),
    booking_rate=('converted','mean')
).reset_index()
from scipy.stats import norm
z = norm.ppf(0.975)  # 1.96
country_metrics['se'] = (country_metrics['booking_rate'] * (1-country_metrics['booking_rate']) / country_metrics['visitors']) ** 0.5
country_metrics['ci_lower'] = country_metrics['booking_rate'] - z * country_metrics['se']
country_metrics['ci_upper'] = country_metrics['booking_rate'] + z * country_metrics['se']`,say_aloud:"Filter to treatment group first. SE = sqrt(p*(1-p)/n) — this is the standard error for a proportion. The 95% CI uses z=1.96. Watch for edge cases: if n is small, the normal approximation may not hold — mention this if the interviewer probes.",company:"Airbnb",difficulty:"Hard"},{q:"[Reddit/Shopify] Given a DataFrame df with columns: animal (string), count (int). Generate a function that samples an animal at random, where each animal's probability equals its count / total_count.",a:`import random

def weighted_random_sample(df, n=1):
    animals = df['animal'].tolist()
    weights = df['count'].tolist()
    # Normalize weights
    total = sum(weights)
    probs = [w/total for w in weights]
    return random.choices(animals, weights=probs, k=n)

# Or using numpy:
import numpy as np
def sample_animal(df):
    probs = df['count'] / df['count'].sum()
    return np.random.choice(df['animal'], p=probs)

# How to verify randomness: run 10,000 samples and check the distribution matches probs
results = pd.Series([sample_animal(df) for _ in range(10000)]).value_counts(normalize=True)`,say_aloud:"For randomness verification: run many samples and compare empirical frequencies to theoretical probabilities. If the animal list is ['cat','dog','mouse','bird'] with counts [2,4,5,3], their probabilities are [2/14, 4/14, 5/14, 3/14]. After 10,000 samples, empirical fractions should be close to these.",company:"Reddit / Shopify",difficulty:"Medium"},{q:"[General] DataFrame df: user_id, session_date, pages_viewed, duration_sec, country. (1) Which 3 countries have the highest avg session duration? (2) What % of sessions have duration > 300s? (3) For each country, find the median pages viewed.",a:`(1) df.groupby('country')['duration_sec'].mean().nlargest(3)
(2) (df['duration_sec'] > 300).mean() * 100  # vectorized, elegant
(3) df.groupby('country')['pages_viewed'].median()`,say_aloud:"For (2): the vectorized approach (df['col'] > 300).mean() is the pythonic way — creates a boolean Series (True=1, False=0), .mean() gives the fraction. Much cleaner than groupby or apply. For (3): pandas .median() in groupby works correctly unlike SQL's need for special techniques.",company:"General",difficulty:"Easy"}],derivations:["Write the full Airbnb merge pattern from memory: visit + booking → LEFT JOIN → fillna(0) → groupby assign → agg","Write groupby.agg() with named aggregations: visitors=('user_id','nunique'), bookings=('converted','sum'), rate=('converted','mean')","What's the difference between df['col'].count() and df['col'].nunique()?","Write the datetime rolling average: daily_df['col'].rolling(7).mean() — what's the default behavior on the first 6 rows?","When should you use apply(axis=1) and when should you vectorize? Give an example of each."],resources:[{name:"Pandas Documentation — GroupBy",url:"https://pandas.pydata.org/docs/user_guide/groupby.html"},{name:"Pandas Documentation — Merge & Join",url:"https://pandas.pydata.org/docs/user_guide/merging.html"},{name:"Real Python — Pandas Tutorial",url:"https://realpython.com/pandas-dataframe/"},{name:"DataCamp — Pandas Cheat Sheet",url:"https://www.datacamp.com/cheat-sheet/pandas-cheat-sheet-for-data-science-in-python"}]},am={day:12,title:"Python A/B Testing & Statistical Analysis",date_note:"Day 12 — Build the full Airbnb A/B test pipeline",prev_day:11,next_day:13,week_label:"Week 2 — SQL Deep Dive & Python Data Manipulation",recap:{title:"Day 11 Recap — Pandas Fundamentals (5 min)",points:["Left join for conversion analysis: keeps all visitors (non-converters get NaN → fillna(0))","groupby().agg() with named syntax: visitors=('user_id','nunique'), rate=('converted','mean')","Boolean mask filtering: df[(df['a']>0) & (df['b']=='US')] — use & and |, not 'and'/'or'","DateTime: pd.to_datetime(), .dt.dayofweek, .dt.to_period('W'), rolling(7).mean()","Vectorized > apply: (df['col'] > 0).mean() for fraction — much faster than apply(axis=1)","Today: wire the full A/B test pipeline — the most-asked Airbnb coding question"]},topics:[{title:"Two-Proportion Z-Test — The Core A/B Test Engine",color:"#F59E0B",content:`**The problem:** Given control group (n_c visitors, k_c conversions) and treatment group (n_t visitors, k_t conversions), is the difference in conversion rates statistically significant?

**Formulas from scratch:**
  p_c = k_c / n_c    (control conversion rate)
  p_t = k_t / n_t    (treatment conversion rate)

  # Pooled proportion (under H0: rates are equal)
  p_pool = (k_c + k_t) / (n_c + n_t)

  # Standard error of the difference
  SE = sqrt(p_pool * (1 - p_pool) * (1/n_c + 1/n_t))

  # Z-statistic
  z = (p_t - p_c) / SE

  # p-value (two-tailed)
  from scipy.stats import norm
  p_value = 2 * (1 - norm.cdf(abs(z)))

**Using scipy directly (cleaner for interviews):**
  from scipy.stats import proportions_ztest

  # counts = [k_c, k_t], nobs = [n_c, n_t]
  z_stat, p_value = proportions_ztest(
      count=[k_c, k_t],
      nobs=[n_c, n_t],
      alternative='two-sided'
  )
  print(f'z = {z_stat:.4f}, p = {p_value:.4f}')
  print('Significant!' if p_value < 0.05 else 'Not significant')

**Confidence interval on the difference:**
  # Standard error for CI (uses each group's own proportion, not pooled)
  se_diff = sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)
  ci_lower = (p_t - p_c) - 1.96 * se_diff
  ci_upper = (p_t - p_c) + 1.96 * se_diff
  print(f'95% CI on difference: ({ci_lower:.4f}, {ci_upper:.4f})')

**Interpretation rules:**
  p < 0.05 → reject H0 → difference is statistically significant
  CI does NOT include 0 → equivalent conclusion
  Both should agree — if they don't, check your formulas`,interview_tip:"Airbnb interviewers want to see you (1) extract counts from the merged DataFrame, (2) call proportions_ztest with the right arguments, (3) interpret the output. Know that proportions_ztest takes count= (successes) and nobs= (total). Don't mix up the order."},{title:"The Full Airbnb A/B Test Pipeline",color:"#8B5CF6",content:`**Complete pipeline — memorize this flow:**

  import pandas as pd
  import numpy as np
  from scipy.stats import proportions_ztest, norm
  import matplotlib.pyplot as plt

  # Step 1: Load and merge
  visit   = pd.read_csv('visit.csv')    # id_visitor, country, assign
  booking = pd.read_csv('booking.csv')  # id_visitor, id_booking

  booking['converted'] = 1
  df = pd.merge(visit, booking[['id_visitor','converted']],
                on='id_visitor', how='left')
  df['converted'] = df['converted'].fillna(0).astype(int)

  # Step 2: Compute metrics per group
  metrics = df.groupby('assign').agg(
      visitors     = ('id_visitor',  'nunique'),
      bookings     = ('converted',   'sum'),
      booking_rate = ('converted',   'mean')
  ).reset_index()
  print(metrics)

  # Step 3: Extract values
  ctrl = metrics[metrics['assign'] == 0].iloc[0]
  trtm = metrics[metrics['assign'] == 1].iloc[0]
  n_c, k_c, p_c = int(ctrl['visitors']), int(ctrl['bookings']), ctrl['booking_rate']
  n_t, k_t, p_t = int(trtm['visitors']), int(trtm['bookings']), trtm['booking_rate']

  # Step 4: Hypothesis test
  z_stat, p_value = proportions_ztest([k_c, k_t], [n_c, n_t])

  # Step 5: Confidence interval on difference
  se_diff = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)
  ci = 1.96 * se_diff
  diff = p_t - p_c

  # Step 6: Plot
  fig, axes = plt.subplots(1, 2, figsize=(12, 5))

  axes[0].bar(['Control', 'Treatment'], [p_c, p_t],
              yerr=[ci, ci], color=['steelblue', 'coral'],
              capsize=5, alpha=0.8)
  axes[0].set_ylabel('Booking Rate')
  axes[0].set_title(f'Booking Rate by Group\\np-value = {p_value:.4f}')

  axes[1].bar(['Control', 'Treatment'], [n_c, n_t],
              color=['steelblue', 'coral'], alpha=0.8)
  axes[1].set_title('Visitor Count (SRM Check)')

  plt.tight_layout()
  plt.show()

  # Step 7: Conclusion
  if p_value < 0.05:
      print(f'Treatment {"increased" if diff > 0 else "decreased"} booking rate by {abs(diff):.3%} (p={p_value:.4f})')
  else:
      print(f'No significant difference detected (p={p_value:.4f})')`,interview_tip:"The SRM (Sample Ratio Mismatch) check — plotting visitor counts by group — is what separates good DS candidates from great ones. If n_c and n_t are wildly different when they should be ~equal, there's a bug in the randomization. Always check SRM before interpreting results."},{title:"Statistical Power, Sample Size, and Test Validity",color:"#10B981",content:`**Power calculation — why it matters before running a test:**
  from scipy.stats import norm

  def required_sample_size(p_baseline, mde, alpha=0.05, power=0.80):
      '''
      p_baseline: baseline conversion rate (e.g., 0.10 for 10%)
      mde: minimum detectable effect (e.g., 0.02 for 2pp lift)
      '''
      z_alpha = norm.ppf(1 - alpha/2)   # 1.96 for alpha=0.05
      z_beta  = norm.ppf(power)          # 0.842 for power=0.80
      p2 = p_baseline + mde
      p_bar = (p_baseline + p2) / 2
      n = (z_alpha + z_beta)**2 * 2 * p_bar * (1 - p_bar) / mde**2
      return int(np.ceil(n))

  n = required_sample_size(p_baseline=0.10, mde=0.02)
  print(f'Need {n} users per group')

**Post-hoc power check (after the test):**
  # Given n and observed difference, what power did we actually have?
  def observed_power(n, p_c, p_t, alpha=0.05):
      p_bar = (p_c + p_t) / 2
      se = np.sqrt(2 * p_bar * (1-p_bar) / n)
      z_alpha = norm.ppf(1 - alpha/2)
      z = (p_t - p_c) / se
      return norm.cdf(abs(z) - z_alpha)

**Common test validity checks:**
  1. SRM check: are group sizes approximately what was planned?
     Acceptable: within 5% of expected ratio

  2. A/A test baseline: run an A/A before the experiment
     Expected: p_value > 0.05 (no false positives)

  3. Novelty effect: lift might inflate early — run for full week+

  4. Network effects: do control/treatment users interact?
     Solution: cluster randomization instead of user-level

  5. Multiple testing: if you test 20 metrics, expect 1 false positive
     Solution: Bonferroni correction (α / number of tests) or FDR`,interview_tip:"When asked 'what else should you check?', go through this checklist: (1) SRM, (2) A/A test, (3) sufficient runtime (novelty, seasonality), (4) network effects if users interact, (5) multiple testing correction. This shows you think about experiment quality, not just the formula."},{title:"Matplotlib Plotting Patterns for DS Interviews",color:"#06B6D4",content:`**Bar chart with error bars (Airbnb pattern):**
  import matplotlib.pyplot as plt
  import numpy as np

  groups = ['Control', 'Treatment']
  rates  = [p_c, p_t]
  errors = [ci_c, ci_t]  # half-widths of 95% CI

  fig, ax = plt.subplots(figsize=(8, 5))
  bars = ax.bar(groups, rates, yerr=errors, color=['steelblue', 'coral'],
                capsize=5, alpha=0.8, edgecolor='black')
  ax.set_ylabel('Booking Rate')
  ax.set_title(f'A/B Test Results — p={p_value:.4f}')
  ax.set_ylim(0, max(rates)*1.3)
  # Add value labels on bars
  for bar, rate in zip(bars, rates):
      ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.002,
              f'{rate:.3%}', ha='center', va='bottom', fontweight='bold')
  plt.tight_layout()
  plt.show()

**Line chart for time series:**
  fig, ax = plt.subplots(figsize=(12, 5))
  ax.plot(daily_df['date'], daily_df['bookings'], label='Bookings')
  ax.plot(daily_df['date'], daily_df['rolling_7d'], label='7-day avg',
          linestyle='--', linewidth=2)
  ax.legend()
  ax.set_title('Daily Bookings with 7-Day Rolling Average')
  plt.xticks(rotation=45)
  plt.tight_layout()
  plt.show()

**Histogram of conversion distribution:**
  fig, ax = plt.subplots()
  ax.hist(control_rates, bins=30, alpha=0.6, label='Control', color='steelblue')
  ax.hist(treatment_rates, bins=30, alpha=0.6, label='Treatment', color='coral')
  ax.axvline(p_c, color='steelblue', linestyle='--')
  ax.axvline(p_t, color='coral', linestyle='--')
  ax.legend()
  ax.set_xlabel('Conversion Rate')
  ax.set_title('Bootstrap Distribution of Conversion Rates')
  plt.show()

**Saving to file (if no display):**
  plt.savefig('ab_test_results.png', dpi=150, bbox_inches='tight')
  plt.close()`,interview_tip:"In Airbnb interviews, 'plot anything' means show the key message clearly. A clean bar chart with error bars communicates the conclusion instantly. Add the p-value in the title. Add value labels on bars. The interviewer should understand the result without reading any other output."}],practice_questions:[{q:"[Airbnb] Full pipeline. CSVs: visit(id_visitor, timestamp, country, assign) and booking(id_visitor, id_booking, timestamp). Task: merge tables, compute booking rate per group, run a two-proportion z-test, compute 95% CI, and plot results.",a:`import pandas as pd, numpy as np
from scipy.stats import proportions_ztest
import matplotlib.pyplot as plt

visit = pd.read_csv('visit.csv'); booking = pd.read_csv('booking.csv')
booking['converted'] = 1
df = pd.merge(visit, booking[['id_visitor','converted']], on='id_visitor', how='left')
df['converted'] = df['converted'].fillna(0).astype(int)

metrics = df.groupby('assign').agg(visitors=('id_visitor','nunique'), bookings=('converted','sum'), rate=('converted','mean')).reset_index()
n_c, k_c, p_c = int(metrics.loc[0,'visitors']), int(metrics.loc[0,'bookings']), metrics.loc[0,'rate']
n_t, k_t, p_t = int(metrics.loc[1,'visitors']), int(metrics.loc[1,'bookings']), metrics.loc[1,'rate']

z, p_val = proportions_ztest([k_c, k_t], [n_c, n_t])
se_diff = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)
ci = 1.96 * se_diff

fig, axes = plt.subplots(1,2,figsize=(12,5))
axes[0].bar(['Control','Treatment'], [p_c,p_t], yerr=[ci,ci], color=['steelblue','coral'], capsize=5, alpha=0.8)
axes[0].set_title(f'Booking Rate (p={p_val:.4f})')
axes[1].bar(['Control','Treatment'], [n_c,n_t], color=['steelblue','coral'], alpha=0.8)
axes[1].set_title('Visitor Count (SRM)')
plt.tight_layout(); plt.show()`,say_aloud:"Walk through each step out loud: (1) load, (2) LEFT JOIN to keep all visitors, (3) fillna to convert NaN to 0, (4) agg by assign group, (5) proportions_ztest — explain count= is successes, nobs= is total, (6) CI formula, (7) two subplots: rate comparison and SRM check.",company:"Airbnb",difficulty:"Hard"},{q:"[Netflix / Reddit] Netflix ran an A/B test. Cell A (control): 100k users, 80.1% weekly retention. Cell B (treatment): 100k users, 80.2% weekly retention. Is the difference significant?",a:`from scipy.stats import proportions_ztest
import numpy as np

n = 100000
k_a = int(0.801 * n)  # 80,100
k_b = int(0.802 * n)  # 80,200

z, p = proportions_ztest([k_a, k_b], [n, n])

print(f'z = {z:.4f}')
print(f'p = {p:.4f}')
print(f'Significant: {p < 0.05}')

# Manual verification
p_a, p_b = 0.801, 0.802
p_pool = (k_a + k_b) / (2*n)
se = np.sqrt(p_pool*(1-p_pool)*(1/n + 1/n))
z_manual = (p_b - p_a) / se
print(f'Manual z = {z_manual:.4f}')`,say_aloud:"80.2% vs 80.1% with 100k users each. Run the z-test. The effect is tiny (0.1pp). SE ≈ 0.0013, z ≈ 0.77, p ≈ 0.44 — NOT significant. Key insight: even with large n, a 0.1pp difference requires enormous sample sizes to detect. Power matters: with n=100k, MDE ≈ 0.35pp at 80% power.",company:"Netflix",difficulty:"Medium"},{q:"[Reddit] Two dice: die A has m faces [1..m], die B has n faces [1..n]. What is P(A > B)? Implement in Python for general A and B.",a:`def prob_a_greater_than_b(A, B):
    '''
    A, B: lists of face values (can be arbitrary, can have duplicates)
    Returns: P(A > B)
    '''
    count = 0
    total = len(A) * len(B)
    for a in A:
        for b in B:
            if a > b:
                count += 1
    return count / total

# Example from Reddit interview:
A = [1, 4, 5]
B = [2, 2, 4]
print(prob_a_greater_than_b(A, B))  # = P(A>B)

# Vectorized version with numpy:
import numpy as np
def prob_a_greater_numpy(A, B):
    A_arr = np.array(A)
    B_arr = np.array(B)
    # Outer comparison: all pairs
    return np.mean(A_arr[:, None] > B_arr[None, :])`,say_aloud:"Brute force: enumerate all len(A)*len(B) pairs. For small dice this is O(m*n). The numpy version uses broadcasting: A[:,None] creates a column vector, B[None,:] creates a row vector, their comparison creates an m×n boolean matrix. np.mean() over the whole matrix gives P(A>B).",company:"Reddit",difficulty:"Medium"},{q:"[Airbnb] After running the A/B test, your manager asks: the p-value is 0.25, does that mean the treatment has no effect? How do you respond?",a:"p=0.25 means we failed to reject H0 — but this does NOT prove the treatment has no effect. Three possible reasons: (1) Insufficient power — the sample size may be too small to detect the effect. Check: what effect size would we need to see significance with n=current? If MDE >> observed diff, we need more data. (2) True null — the treatment genuinely doesn't help. (3) Wrong metric — the primary metric may not capture the effect; check secondary metrics. Action: compute post-hoc power. If power < 80%, extend the experiment or recompute required n. Never conclude 'no effect' from a single underpowered test.",say_aloud:"This is a communication question as much as a stats question. Structure: (1) clarify what p=0.25 means, (2) distinguish 'fail to reject' from 'prove null', (3) diagnose power, (4) recommend action. End with: 'I would compute the post-hoc power and present both the effect size estimate and confidence interval — not just the p-value.'",company:"Airbnb / General",difficulty:"Medium"}],derivations:["Write the z-test formula from scratch: pooled p̂, SE = sqrt(p̂*(1-p̂)*(1/nc + 1/nt)), z = (pt - pc)/SE","Write the 95% CI on the difference: (pt - pc) ± 1.96 * sqrt(pc*(1-pc)/nc + pt*(1-pt)/nt)","What is SRM? How do you detect it? What causes it?","Write the sample size formula: n = (z_alpha + z_beta)^2 * 2 * p_bar * (1-p_bar) / delta^2","Explain what p=0.25 means. Does it prove no effect? What should you check?"],resources:[{name:"Scipy proportions_ztest documentation",url:"https://www.statsmodels.org/stable/generated/statsmodels.stats.proportion.proportions_ztest.html"},{name:"Netflix Tech Blog — Hypothesis Testing",url:"https://netflixtechblog.com/what-is-an-a-b-test-b08cc1b57962"},{name:"Evan Miller A/B Test Sample Size Calculator",url:"https://www.evanmiller.org/ab-testing/sample-size.html"}]},om={day:13,title:"Python OOP & Interview Coding",date_note:"Day 13 — Classes, test-driven development, and coding patterns",prev_day:12,next_day:14,week_label:"Week 2 — SQL Deep Dive & Python Data Manipulation",recap:{title:"Day 12 Recap — A/B Testing Pipeline (5 min)",points:["proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t]) → (z_stat, p_value)","CI on difference: (pt - pc) ± 1.96 * sqrt(pc*(1-pc)/nc + pt*(1-pt)/nt)","SRM check: plot visitor counts per group — if unequal when they should be equal, the randomization is broken","p=0.25 ≠ no effect. It means underpowered or true null. Always check post-hoc power.","Dice P(A>B): enumerate all pairs or use np.mean(A[:,None] > B[None,:])","Today: Shopify wants OOP. Expedia wants LeetCode-style coding. Both covered today."]},topics:[{title:"Python OOP Foundations — Class, __init__, Methods",color:"#F59E0B",content:`**The minimal class structure:**
  class ClassName:
      def __init__(self, param1, param2):
          '''
          __init__ is the constructor — runs when you create an instance
          self refers to the instance being created
          '''
          self.param1 = param1       # instance attribute
          self.param2 = param2
          self.data   = []           # mutable default — always use [] not []

      def method_name(self, arg):
          # instance method — always takes self as first argument
          self.data.append(arg)
          return self.data

      def __repr__(self):
          # How the object prints (good practice)
          return f'ClassName(param1={self.param1}, param2={self.param2})'

  # Usage:
  obj = ClassName(param1='hello', param2=42)
  obj.method_name('world')
  print(obj)  # uses __repr__

**Instance vs class attributes:**
  class Counter:
      count = 0           # class attribute — shared by all instances

      def __init__(self, name):
          self.name = name    # instance attribute — per-instance
          Counter.count += 1  # increment class attribute

**Common mistake — mutable default argument:**
  # WRONG — list is shared across all instances!
  class Bag:
      def __init__(self, items=[]):
          self.items = items

  # RIGHT
  class Bag:
      def __init__(self, items=None):
          self.items = items if items is not None else []

**Test-driven development (Shopify's approach):**
  Shopify gives you tests FIRST, then asks you to write the class that passes them.
  Pattern:
  def test_my_class():
      obj = MyClass([1, 2, 3])
      assert obj.double() == [2, 4, 6]
      assert obj.total() == 6
  # Write MyClass so test_my_class() passes with no assertion errors`,interview_tip:"In Shopify pair programming, the interviewer watches you READ the test cases carefully before writing any code. Say out loud: 'Let me read the test to understand what the class needs to do.' This signals TDD discipline. Then write __init__ and the simplest method that passes the first test before moving to the next."},{title:"Shopify DS OOP Patterns — CTR, Data Manipulation, TDD",color:"#8B5CF6",content:`**CTR (Click-Through Rate) class — canonical Shopify pattern:**
  class ExperimentTracker:
      def __init__(self):
          self.clicks = {}
          self.impressions = {}

      def record(self, recommendation_id, event_type):
          if event_type == 'click':
              self.clicks[recommendation_id] = self.clicks.get(recommendation_id, 0) + 1
          elif event_type == 'impression':
              self.impressions[recommendation_id] = self.impressions.get(recommendation_id, 0) + 1

      def ctr(self, recommendation_id):
          clicks = self.clicks.get(recommendation_id, 0)
          imps   = self.impressions.get(recommendation_id, 0)
          if imps == 0:
              return 0.0
          return clicks / imps

      def top_n(self, n=3):
          all_ids = set(self.impressions.keys())
          ctrs = {rid: self.ctr(rid) for rid in all_ids}
          return sorted(ctrs, key=ctrs.get, reverse=True)[:n]

  # Usage:
  tracker = ExperimentTracker()
  tracker.record('rec_1', 'impression')
  tracker.record('rec_1', 'click')
  tracker.record('rec_2', 'impression')
  print(tracker.ctr('rec_1'))   # 1.0
  print(tracker.ctr('rec_2'))   # 0.0

**List/data manipulation class (TDD style):**
  class DataList:
      def __init__(self, data):
          self.data = list(data)

      def double(self):
          return [x * 2 for x in self.data]

      def collect(self):
          return self.data

      def map(self, func):
          return [func(x) for x in self.data]

      def filter(self, pred):
          return [x for x in self.data if pred(x)]

      def total(self):
          return sum(self.data)

  # Tests (given first in interview)
  d = DataList([1, 2, 3])
  assert d.double() == [2, 4, 6]
  assert d.total() == 6
  assert d.map(lambda x: x**2) == [1, 4, 9]

**Key edge cases to mention:**
  Empty list, single element, all zeros, negative numbers, None input`,interview_tip:"Shopify explicitly evaluates: (1) do you understand OOP fundamentals (self, __init__, methods), (2) can you communicate your approach before coding, (3) do you handle edge cases. Write the happy path first, then say 'let me also handle the edge case where impressions = 0' — this earns points."},{title:"🏷️ LeetCode #289 — Game of Life (Shopify Pattern)",color:"#10B981",content:`**Problem:** Given an m×n grid where 1=live, 0=dead. Each cell updates simultaneously based on neighbors:
  - Live cell with < 2 live neighbors → dies (underpopulation)
  - Live cell with 2-3 live neighbors → lives
  - Live cell with > 3 live neighbors → dies (overpopulation)
  - Dead cell with exactly 3 live neighbors → becomes live
  Update all cells simultaneously (use original state for neighbor counting).

**Solution — in-place with state encoding:**
  def gameOfLife(board):
      m, n = len(board), len(board[0])
      # Encode: 2 = was alive, will die. -1 = was dead, will live.
      dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]

      def count_live(r, c):
          cnt = 0
          for dr, dc in dirs:
              nr, nc = r+dr, c+dc
              if 0 <= nr < m and 0 <= nc < n and abs(board[nr][nc]) == 1:
                  cnt += 1  # abs(1)=1 (live), abs(2)=2 (was live), ignore these
          return cnt

      # WRONG: abs(board[nr][nc]) catches both 1 (live) and 2 (was live = was 1)
      # Correct: for original live cells, board value is 1 or 2 (before/after encoding)
      # Use abs(cell) == 1 to check 'was alive in original state'

      for r in range(m):
          for c in range(n):
              lives = count_live(r, c)
              if board[r][c] == 1:
                  if lives < 2 or lives > 3:
                      board[r][c] = 2  # alive → will die
              else:
                  if lives == 3:
                      board[r][c] = -1  # dead → will live

      # Finalize
      for r in range(m):
          for c in range(n):
              if board[r][c] == 2: board[r][c] = 0
              if board[r][c] == -1: board[r][c] = 1

  # Time: O(m*n), Space: O(1) in-place
  # Simpler alternative: copy the board first (O(m*n) space)`,interview_tip:"The in-place trick (encoding state transitions with 2 and -1) is the elegant solution. In interviews, start with the simple copy approach, get it working, then say 'I can optimize to O(1) space if needed.' Shopify pair programming specifically asked this exact problem."},{title:"🏷️ LeetCode #380 — Insert Delete GetRandom O(1) (Expedia/OOP Pattern)",color:"#06B6D4",content:`**Problem:** Design a data structure that supports insert, remove, and getRandom (each element with equal probability) all in O(1) average time.

**Key insight:** 
  - HashSet gives O(1) insert/remove but NOT O(1) random — you can't index into a set
  - List gives O(1) random access but O(n) remove
  - Solution: use BOTH — list for index access, hashmap for position tracking

  import random

  class RandomizedSet:
      def __init__(self):
          self.vals = []           # list of values
          self.pos  = {}           # value → index in vals

      def insert(self, val: int) -> bool:
          if val in self.pos:
              return False          # already exists
          self.pos[val] = len(self.vals)
          self.vals.append(val)
          return True

      def remove(self, val: int) -> bool:
          if val not in self.pos:
              return False          # doesn't exist
          # Swap val with last element, then pop last
          last_val = self.vals[-1]
          idx = self.pos[val]
          self.vals[idx] = last_val
          self.pos[last_val] = idx  # update last_val's position
          self.vals.pop()
          del self.pos[val]
          return True

      def getRandom(self) -> int:
          return random.choice(self.vals)  # O(1) random index

  # Why swap-and-pop? Removing from middle of list is O(n).
  # Swapping with last element + popping last is O(1).
  # The hashmap lets us find any element's index in O(1).

**Weighted random sampling (Expedia / Reddit pattern):**
  import numpy as np

  def weighted_sample(values, weights, k=1):
      probs = np.array(weights) / sum(weights)
      return np.random.choice(values, size=k, p=probs, replace=False if k <= len(values) else True)

  # Shopify search metric DCG:
  import math
  def dcg(relevance_scores):
      return sum(rel / math.log2(i + 2) for i, rel in enumerate(relevance_scores))`,interview_tip:"The RandomizedSet problem teaches the fundamental technique: when you need O(1) operations that two data structures can't each individually provide, COMBINE them. HashMap for O(1) lookup of position, list for O(1) index access. The swap-and-pop trick avoids O(n) list removal. This pattern comes up in system design too."}],practice_questions:[{q:"[Shopify TDD] Tests are given: assert tracker.ctr('rec_a') == 0.5 after recording 2 impressions and 1 click. assert tracker.top_n(1) returns the recommendation with highest CTR. Write the ExperimentTracker class.",a:`class ExperimentTracker:
    def __init__(self):
        self.clicks = {}
        self.impressions = {}

    def record(self, rec_id, event):
        if event == 'impression':
            self.impressions[rec_id] = self.impressions.get(rec_id, 0) + 1
        elif event == 'click':
            self.clicks[rec_id] = self.clicks.get(rec_id, 0) + 1

    def ctr(self, rec_id):
        imps = self.impressions.get(rec_id, 0)
        if imps == 0: return 0.0
        return self.clicks.get(rec_id, 0) / imps

    def top_n(self, n=1):
        ctrs = {r: self.ctr(r) for r in self.impressions}
        return sorted(ctrs, key=lambda r: ctrs[r], reverse=True)[:n]`,say_aloud:"Read the tests first — they tell me I need record(), ctr(), and top_n(). In __init__, I initialize two dicts (not lists). In record(), I use .get(key, 0) + 1 — handles the first occurrence without a try/except. Edge case: rec with 0 impressions → return 0.0 CTR to avoid ZeroDivisionError.",company:"Shopify",difficulty:"Medium"},{q:"[Shopify] Write a class DataList that wraps a list and supports: double() (multiply each element by 2), collect() (return the list), map(func) (apply func to each), filter(pred) (keep matching elements), total() (sum). Tests are provided and must pass.",a:`class DataList:
    def __init__(self, data):
        self.data = list(data)  # make a copy

    def double(self):
        return [x * 2 for x in self.data]

    def collect(self):
        return self.data

    def map(self, func):
        return [func(x) for x in self.data]

    def filter(self, pred):
        return [x for x in self.data if pred(x)]

    def total(self):
        return sum(self.data)

    def __repr__(self):
        return f'DataList({self.data})'`,say_aloud:"I'm naming methods map, collect, filter — these shadow built-in Python names. That's intentional per the TDD spec. In __init__, I copy the input list with list(data) so the class owns its data (defensive copy). For filter, I use a list comprehension, not Python's built-in filter() which returns an iterator.",company:"Shopify",difficulty:"Easy"},{q:"🏷️ [LeetCode #380 — Expedia] Implement RandomizedSet: insert(val)→bool, remove(val)→bool, getRandom()→int, all in O(1) average time.",a:`import random
class RandomizedSet:
    def __init__(self):
        self.vals = []
        self.pos = {}

    def insert(self, val):
        if val in self.pos: return False
        self.pos[val] = len(self.vals)
        self.vals.append(val)
        return True

    def remove(self, val):
        if val not in self.pos: return False
        last = self.vals[-1]
        i = self.pos[val]
        self.vals[i] = last
        self.pos[last] = i
        self.vals.pop()
        del self.pos[val]
        return True

    def getRandom(self):
        return random.choice(self.vals)`,say_aloud:"The key insight: HashMap for O(1) position lookup, list for O(1) random access. The hard part is remove(): I can't just pop from middle (O(n)). Instead, I swap the target with the last element and pop the last (O(1)). But then I must update the last element's position in the hashmap. This is the classic trick — state it explicitly.",company:"Expedia / LeetCode",difficulty:"Medium"},{q:"🏷️ [LeetCode #289 — Shopify] Game of Life: m×n board, 1=live, 0=dead. Apply Conway's rules simultaneously. Return updated board. Implement with O(1) extra space.",a:`def gameOfLife(board):
    m, n = len(board), len(board[0])
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]

    def live_neighbors(r, c):
        return sum(1 for dr, dc in dirs
                   if 0 <= r+dr < m and 0 <= c+dc < n
                   and abs(board[r+dr][c+dc]) == 1)

    for r in range(m):
        for c in range(n):
            nb = live_neighbors(r, c)
            if board[r][c] == 1 and (nb < 2 or nb > 3):
                board[r][c] = 2   # alive → dying (encode: was 1)
            elif board[r][c] == 0 and nb == 3:
                board[r][c] = -1  # dead → living (encode: was 0)

    for r in range(m):
        for c in range(n):
            if board[r][c] == 2:  board[r][c] = 0
            if board[r][c] == -1: board[r][c] = 1`,say_aloud:"In-place O(1) space solution: encode transitions as 2 (live→dead) and -1 (dead→live). When counting neighbors, abs(cell)==1 checks 'was alive in original state' because abs(1)=1 (original live) and abs(2)=2 (encoded dead, was 1 → ignore in neighbor count). Wait — actually abs(2)=2, not 1, so the check abs(cell)==1 correctly only matches original live cells. Two passes: first encode transitions, then finalize.",company:"Shopify / LeetCode",difficulty:"Medium"},{q:"🏷️ [LeetCode #146 — Shopify Sr. DS 2025] Implement an LRU Cache with capacity k. Methods: get(key) → value or -1 if missing, put(key, value). Both must be O(1). Explain the data structure.",a:`from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = OrderedDict()  # doubly linked list + hashmap built in

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)  # mark as most recently used
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)  # evict LRU = first item

# Manual DLL approach (if OrderedDict not allowed):
# HashMap: key → Node. DLL: head=LRU end, tail=MRU end.
# get: move node to tail. put: add to tail, if over cap evict head.
# Each Node stores: prev, next, key, val.`,say_aloud:"The key insight: we need O(1) get (hashmap) AND O(1) move-to-front (doubly linked list). Python's OrderedDict is literally a doubly linked list + hashmap under the hood. move_to_end() = mark recently used; popitem(last=False) = evict LRU. If the interviewer says 'no built-ins', describe the manual DLL approach: head=LRU side, tail=MRU side, every access moves node to tail, eviction removes from head. Shopify Sr. DS pair programming asked this exact problem in 2025.",company:"Shopify",difficulty:"Medium"},{q:"🏷️ [LeetCode #215 — Reddit DS] Given an unsorted array nums and integer k, return the kth largest element. Example: nums=[3,2,1,5,6,4], k=2 → 5. Give 3 approaches with time complexity.",a:`import heapq, random

# Approach 1: Sort — O(n log n), O(1)
def findKthLargest_sort(nums, k):
    return sorted(nums, reverse=True)[k-1]

# Approach 2: Min-heap of size k — O(n log k), O(k) — best for streaming
def findKthLargest_heap(nums, k):
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)  # keep only k largest
    return heap[0]  # root = kth largest

# Approach 3: Quickselect — O(n) average, O(n²) worst
def findKthLargest_qs(nums, k):
    pivot = random.choice(nums)
    greater = [x for x in nums if x > pivot]
    equal   = [x for x in nums if x == pivot]
    lesser  = [x for x in nums if x < pivot]
    if k <= len(greater):
        return findKthLargest_qs(greater, k)
    elif k <= len(greater) + len(equal):
        return pivot
    else:
        return findKthLargest_qs(lesser, k - len(greater) - len(equal))`,say_aloud:"Three approaches in increasing efficiency: (1) Sort — simplest, always works, O(n log n). (2) Min-heap of size k — O(n log k), great when n is huge but k is small, heap always holds the k largest seen so far. (3) Quickselect — O(n) average but tricky to implement under pressure. In DS interviews the heap approach is the sweet spot: efficient and easy to explain. Always mention all three and let the interviewer's reaction guide which to code. Reddit DS asked for the heap and quickselect approaches.",company:"Reddit",difficulty:"Medium"},{q:"🏷️ [Spotify DS — FizzBuzz, 4+ appearances] Print numbers 1 to N. Multiples of 3 → 'Fizz', multiples of 5 → 'Buzz', multiples of both → 'FizzBuzz'. Follow-up: extend to arbitrary rules without if/elif chains.",a:`# Basic — check 15 FIRST (or check Fizz+Buzz concatenation)
def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 15 == 0:
            print('FizzBuzz')
        elif i % 3 == 0:
            print('Fizz')
        elif i % 5 == 0:
            print('Buzz')
        else:
            print(i)

# Follow-up: extensible dict approach
def fizzbuzz_ext(n, rules=None):
    if rules is None:
        rules = {3: 'Fizz', 5: 'Buzz'}
    for i in range(1, n+1):
        output = ''.join(label for div, label in sorted(rules.items())
                         if i % div == 0)
        print(output if output else i)

# fizzbuzz_ext(15, {3: 'Fizz', 5: 'Buzz', 7: 'Jazz'})
# For i=15: Fizz+Buzz = 'FizzBuzz' automatically`,say_aloud:"The basic solution: always check 15 before checking 3 or 5 — checking 15 first (or equivalently checking 3%==0 AND 5%==0) avoids the subtle bug where you print 'Fizz' for 15 instead of 'FizzBuzz'. The follow-up shows design thinking: a rules dict maps divisors to labels. Iterate sorted rules, join all matching labels — this auto-handles FizzBuzz without a special case. Adding a new rule is one line. Spotify DS asked this in 4+ candidate interviews — they want the basic solution instantly and the extensible solution to test your Python instincts.",company:"Spotify",difficulty:"Easy"},{q:"🏷️ [Spotify DS — Primes] Write a function returning all prime numbers less than N. What's the time complexity? Optimize from naive to efficient.",a:`# Naive O(n√n) — mention first to show derivation
def primes_naive(n):
    def is_prime(x):
        if x < 2: return False
        for i in range(2, int(x**0.5) + 1):
            if x % i == 0: return False
        return True
    return [i for i in range(2, n) if is_prime(i)]

# Sieve of Eratosthenes — O(n log log n) time, O(n) space
def primes_below(n):
    if n < 2: return []
    sieve = [True] * n
    sieve[0] = sieve[1] = False
    for i in range(2, int(n**0.5) + 1):
        if sieve[i]:
            for j in range(i*i, n, i):  # start at i² — smaller multiples already marked
                sieve[j] = False
    return [i for i, is_prime in enumerate(sieve) if is_prime]

# primes_below(20) → [2, 3, 5, 7, 11, 13, 17, 19]`,say_aloud:"Derive the naive solution first — O(n√n) because for each of n numbers we check divisors up to √x. Then optimize to the Sieve: allocate a boolean array, mark all multiples of each prime as composite. Key insight: start marking at i² (not 2i) because all smaller multiples like 2i, 3i... were already marked by earlier primes. Only sieve up to √n because any composite ≤ n must have a factor ≤ √n. Time complexity O(n log log n) ≈ O(n) practically. Spotify DS specifically asked this and expected you to name the Sieve and explain the i² optimization.",company:"Spotify",difficulty:"Easy"},{q:"🏷️ [Spotify DS — Anagram] Check if two strings are anagrams. Example: 'listen' and 'silent' → True. Give multiple approaches and compare complexity. Follow-up: group a list of words into anagram groups.",a:`from collections import Counter, defaultdict

# Approach 1: Sort — O(n log n) time, O(n) space
def is_anagram_sort(s, t):
    return sorted(s.lower()) == sorted(t.lower())

# Approach 2: Counter — O(n) time, O(k) space (k = alphabet size ≤ 26)
def is_anagram_counter(s, t):
    if len(s) != len(t): return False  # fast early exit
    return Counter(s.lower()) == Counter(t.lower())

# Approach 3: Manual dict — O(n) explicit (same as Counter, more visible)
def is_anagram_dict(s, t):
    if len(s) != len(t): return False
    counts = {}
    for c in s.lower(): counts[c] = counts.get(c, 0) + 1
    for c in t.lower(): counts[c] = counts.get(c, 0) - 1
    return all(v == 0 for v in counts.values())

# Follow-up: group anagram words (LeetCode #49 pattern)
def group_anagrams(words):
    groups = defaultdict(list)
    for w in words:
        groups[tuple(sorted(w))].append(w)
    return list(groups.values())
# ['eat','tea','tan','ate','nat','bat'] → [['eat','tea','ate'],['tan','nat'],['bat']]`,say_aloud:"Three approaches: (1) Sort — sort both strings, compare. Simple but O(n log n). (2) Counter — O(n) using Python's Counter dict. Length check first is a fast early exit. (3) Manual dict — same complexity, more explicit. The follow-up (group anagrams) uses sorted word as the dict key — a key insight. Counter(s)==Counter(t) works because Counter supports equality comparison. Spotify asked this expecting the O(n) Counter solution. If they ask about Unicode/special chars: casefold() is more robust than lower() for international text.",company:"Spotify",difficulty:"Easy"},{q:"[Shopify OOP] Write a Python class LibrarySearch with methods: add_book(title, author, year), search_by_author(author) → list of titles, search_after_year(year) → list of titles. Ensure methods return sorted results.",a:`class LibrarySearch:
    def __init__(self):
        self.books = []  # list of dicts

    def add_book(self, title, author, year):
        self.books.append({'title': title, 'author': author, 'year': year})

    def search_by_author(self, author):
        return sorted(
            b['title'] for b in self.books
            if b['author'].lower() == author.lower()
        )

    def search_after_year(self, year):
        return sorted(
            b['title'] for b in self.books
            if b['year'] > year
        )

# Edge cases to mention:
# - Case-insensitive author search (.lower())
# - Empty library (returns [])
# - No matching results (returns [])`,say_aloud:"Store books as a list of dicts — simple and readable. For search_by_author, case-insensitive comparison is good practice and usually expected. sorted() on a generator expression is clean. Mention edge cases: empty library, no matches, and whether we need partial vs exact author matching — clarify with interviewer.",company:"Shopify",difficulty:"Easy"}],derivations:["Write a class from scratch with __init__, a state-storing attribute, and two methods. Include __repr__.","Explain the swap-and-pop trick in RandomizedSet.remove() — why is it O(1)? What must you update?","Write the Game of Life encoding trick: what values do 2 and -1 represent? How does abs(cell)==1 work for neighbor counting?","What is TDD (test-driven development)? How does Shopify use it in pair programming?","LRU Cache: why does O(1) get+put require BOTH a hashmap and a doubly linked list? What does OrderedDict provide?","Kth Largest: compare sort O(n log n), min-heap O(n log k), and quickselect O(n) — when do you use each?","FizzBuzz follow-up: rewrite using a rules dict so adding a new divisor/label requires zero changes to the loop.","Sieve of Eratosthenes: why start marking multiples at i² instead of 2i? What is the time complexity?","Anagram: what's the difference between Counter approach and sort approach in time/space? Write the group_anagrams follow-up."],resources:[{name:"🏷️ LeetCode #289 — Game of Life (Medium)",url:"https://leetcode.com/problems/game-of-life/"},{name:"🏷️ LeetCode #380 — Insert Delete GetRandom O(1) (Medium)",url:"https://leetcode.com/problems/insert-delete-getrandom-o1/"},{name:"🏷️ LeetCode #146 — LRU Cache (Medium)",url:"https://leetcode.com/problems/lru-cache/"},{name:"🏷️ LeetCode #215 — Kth Largest Element (Medium)",url:"https://leetcode.com/problems/kth-largest-element-in-an-array/"},{name:"Python OOP Guide — Real Python",url:"https://realpython.com/python3-object-oriented-programming/"},{name:"Test-Driven Development in Python",url:"https://realpython.com/python-testing/"}]},sm={day:14,type:"quiz",title:"Week 2 Review — SQL & Python Quiz",date_note:"Day 14 · Week 2 Review",prev_day:13,next_day:null,week_label:"Week 2 — SQL Deep Dive & Python Data Manipulation",subtitle:"Write SQL and Python from memory first. Then take the quiz — mark what you know cold vs what needs more work. Every question is drawn from real company interviews.",review_tasks:["✍️  Write from memory: RANK vs DENSE_RANK vs ROW_NUMBER — example with ties","→   Write from memory: the WoW LAG pattern, the Airbnb merge pipeline, and proportions_ztest call","→   Write from memory: the CTR class (__init__, record, ctr, top_n) — the Shopify TDD pattern","→   Write from memory: RandomizedSet — explain the swap-and-pop trick","→   Write from memory: LRU Cache using OrderedDict — why move_to_end() + popitem(last=False)?","→   Write FizzBuzz + the extensible rules dict follow-up. Write primes Sieve explaining why i².","→   60-90 minutes total. Close all tabs. Write on paper or in a blank IDE."],derivations:["SQL: Write DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) for top-3 salaries per department","SQL: Write WoW change: LAG(cnt, 7) OVER (ORDER BY ds), pct_change with NULLIF","SQL: Write the churn query — advertisers who haven't spent in 7 days","Python: Write the Airbnb A/B test pipeline — 6 steps from CSV to conclusion","Python: Write proportions_ztest — arguments, output, interpretation","Python: Write the ExperimentTracker class — CTR tracking with __init__, record(), ctr(), top_n()","Python: Write RandomizedSet — explain why O(1) and the swap-and-pop trick","Python: Write LRU Cache — why does it need BOTH a hashmap and a doubly linked list?","Python: Write FizzBuzz extensible version — how does the rules dict eliminate the 15-check edge case?","Python: Sieve of Eratosthenes — write it and explain why start at i² not 2i","Python: Anagram check — Counter vs sort: time/space trade-off. Write group_anagrams follow-up."],resources:[{name:"Your Day 8-13 notes — no new material today",url:"/"},{name:"🏷️ LeetCode SQL problems — practice any you haven't tried",url:"https://leetcode.com/problemset/database/"},{name:"DataLemur SQL Interview Questions",url:"https://datalemur.com/questions?category=SQL"}],sections:[{title:"SQL — Window Functions",icon:"🪟",range:"Q1–Q7",qs:[{id:"w2q1",q:"What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()? Give an example with salary = [100, 100, 90, 80].",company:"All",freq:"High",answer:'<p><strong>For values [100, 100, 90, 80]:</strong></p><code>ROW_NUMBER(): 1, 2, 3, 4  (always unique, ties broken arbitrarily)</code><code>RANK():       1, 1, 3, 4  (gaps after ties)</code><code>DENSE_RANK(): 1, 1, 2, 3  (no gaps)</code><p>Use ROW_NUMBER for "first per user". Use DENSE_RANK for "top N salary levels". Use RANK for competition-style with intentional gaps.</p>'},{id:"w2q2",q:"Write SQL to find the top 3 salaries per department. Table: Employee(id, name, salary, departmentId), Department(id, name).",company:"LeetCode #185 / All",freq:"High",answer:`<code>WITH ranked AS (
  SELECT e.name, d.name AS dept, e.salary,
    DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS dr
  FROM Employee e JOIN Department d ON e.departmentId = d.id
)
SELECT dept, name, salary FROM ranked WHERE dr &lt;= 3</code><p>DENSE_RANK ensures "3 distinct salary levels" not "3 individual employees". PARTITION BY departmentId ranks independently per department.</p>`},{id:"w2q3",q:"Write SQL to compute week-over-week change in daily booking count. Table: bookings(ds, id_reservation). Show: ds, cnt, prev_week_cnt, wow_pct_change.",company:"Airbnb / Reddit",freq:"High",answer:`<code>WITH daily AS (
  SELECT ds, COUNT(*) AS cnt FROM bookings GROUP BY ds
)
SELECT ds, cnt,
  LAG(cnt, 7) OVER (ORDER BY ds) AS prev_week_cnt,
  ROUND((cnt - LAG(cnt,7) OVER (ORDER BY ds)) * 100.0 /
        NULLIF(LAG(cnt,7) OVER (ORDER BY ds), 0), 1) AS wow_pct
FROM daily ORDER BY ds</code><p>LAG(cnt, 7) looks back exactly 7 rows (same weekday). NULLIF prevents divide-by-zero when prev week count is 0.</p>`},{id:"w2q4",q:"🏷️ [LeetCode #178] Table: Scores(id, score). Rank scores from high to low with no gaps for ties. Output: score, rank.",company:"LeetCode",freq:"High",answer:"<code>SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS `rank`\nFROM Scores ORDER BY score DESC</code><p>DENSE_RANK gives consecutive integers with no gaps. In MySQL, 'rank' is a reserved word — wrap in backticks or use 'rank' as a string alias.</p>"},{id:"w2q5",q:"🏷️ [LeetCode #180] Table: Logs(id, num). Find all numbers that appear at least 3 times consecutively.",company:"LeetCode",freq:"Medium",answer:`<code>WITH lagged AS (
  SELECT num,
    LAG(num, 1) OVER (ORDER BY id) AS p1,
    LAG(num, 2) OVER (ORDER BY id) AS p2
  FROM Logs
)
SELECT DISTINCT num AS ConsecutiveNums
FROM lagged WHERE num = p1 AND num = p2</code><p>Use LAG twice to look 1 and 2 rows back. If all 3 match, the number appears at least 3 times consecutively. DISTINCT handles multiple consecutive runs of the same number.</p>`},{id:"w2q6",q:"Write SQL for a 7-day rolling average of daily sales. Table: sales(ds, amount). Show: ds, daily_total, rolling_7d_avg.",company:"Expedia",freq:"Medium",answer:`<code>SELECT ds,
  SUM(amount) AS daily_total,
  AVG(SUM(amount)) OVER (
    ORDER BY ds
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS rolling_7d_avg
FROM sales GROUP BY ds ORDER BY ds</code><p>Nested aggregate: outer AVG() is the window function, inner SUM(amount) is the GROUP BY aggregate. ROWS BETWEEN 6 PRECEDING AND CURRENT ROW = 7 days total.</p>`},{id:"w2q6b",q:"🏷️ [LeetCode #177 — Nth Highest Salary] Table: Employee(id, salary). Write a function/query getNthHighestSalary(N) that returns the Nth highest distinct salary. Return null if there aren't N distinct salaries.",company:"LeetCode",freq:"Medium",answer:`<code>-- MySQL function syntax:
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET N = N - 1;  -- OFFSET is 0-indexed
  RETURN (
    SELECT DISTINCT salary FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET N
  );
END</code><p>Key: OFFSET N-1 (0-indexed). DISTINCT removes duplicates — we want the Nth highest <em>distinct</em> value. If N=2 and salaries are [300,200,200,100], the 2nd highest distinct = 200. Without DISTINCT you'd get 200 anyway here but it matters when there are multiple rows with the same top salary. Returns NULL automatically if fewer than N distinct salaries exist.</p><p>Alternative with DENSE_RANK: WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dr FROM Employee) SELECT DISTINCT salary FROM ranked WHERE dr = N</p>`}]},{title:"SQL — Date Functions & Complex Patterns",icon:"📅",range:"Q7–Q16",qs:[{id:"w2q7",q:"What does DATE_TRUNC('week', timestamp) return? How is it different from EXTRACT(WEEK FROM timestamp)?",company:"All",freq:"High",answer:"<p>DATE_TRUNC('week', ts) returns the Monday of the week containing ts (as a date/timestamp). Example: '2024-01-17 14:30:00' → '2024-01-15 00:00:00' (Monday).</p><p>EXTRACT(WEEK FROM ts) returns an integer week number (1–53). Problem: week numbers reset at year boundaries and don't uniquely identify a week across years.</p><p><strong>Use DATE_TRUNC for GROUP BY week, EXTRACT for seasonal analysis.</strong></p>"},{id:"w2q8",q:"[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). What % of US listings got a first booking within 30 days of creation?",company:"Airbnb",freq:"High",answer:`<code>SELECT AVG(CASE
  WHEN first_booking IS NOT NULL
       AND first_booking &lt;= ds_listing_created + 30
  THEN 1 ELSE 0 END) AS pct_booked_30d
FROM (
  SELECT l.id_listing, l.ds_listing_created,
         MIN(b.ds) AS first_booking
  FROM listings l
  LEFT JOIN bookings b ON l.id_listing = b.id_listing
  WHERE l.dim_country = 'US'
  GROUP BY l.id_listing, l.ds_listing_created
) sub</code><p>LEFT JOIN keeps listings that were never booked (they get first_booking=NULL → CASE gives 0). AVG(CASE WHEN) = Meta percentage pattern.</p>`},{id:"w2q9",q:"🏷️ [LeetCode #197] Table: Weather(id, recordDate, temperature). Find all dates where temperature was higher than the previous day.",company:"LeetCode",freq:"Easy",answer:`<code>SELECT w1.id FROM Weather w1
JOIN Weather w2
  ON w1.recordDate = w2.recordDate + INTERVAL '1 day'
WHERE w1.temperature > w2.temperature</code><p>Self-join on date+1. Critical: the INTERVAL check ensures true adjacent days — if dates have gaps, non-adjacent rows won't match. Alternative: LAG(temperature) + LAG(recordDate) with date gap check.</p>`},{id:"w2q10",q:"[Reddit] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). How many advertisers churned yesterday? Churn = 7 consecutive days without spending.",company:"Reddit",freq:"High",answer:`<code>WITH last_spend AS (
  SELECT aa.advertiser_id, MAX(CAST(ar.transaction_date AS DATE)) AS last_txn
  FROM active_ads aa JOIN ad_revenue ar ON aa.ad_id = ar.ad_id
  GROUP BY aa.advertiser_id
)
SELECT COUNT(*) AS churned_yesterday
FROM last_spend
WHERE last_txn = CURRENT_DATE - 8</code><p>If last spend was 8 days ago, then yesterday was their 7th day without spending = churn day. This is the key insight: churned YESTERDAY means last spend was exactly 8 days before today.</p>`},{id:"w2q11",q:"[Reddit] Table: play_sessions(pt, user_id, country, duration_sec). Users who have ≥50% of viewing time in US are 'primarily US'. Count US vs Not-US viewers in the last 30 days.",company:"Reddit",freq:"Medium",answer:`<code>WITH user_share AS (
  SELECT user_id,
    SUM(CASE WHEN country='US' THEN duration_sec ELSE 0 END) * 1.0 /
    NULLIF(SUM(duration_sec), 0) AS us_pct
  FROM play_sessions WHERE pt >= CURRENT_DATE - 30
  GROUP BY user_id
)
SELECT CASE WHEN us_pct >= 0.5 THEN 'US' ELSE 'Not US' END AS location,
       COUNT(*) AS user_count
FROM user_share GROUP BY 1</code>`},{id:"w2q12",q:"🏷️ [LeetCode #570] Table: Employee(id, name, department, managerId). Find managers with at least 5 direct reports.",company:"LeetCode",freq:"Medium",answer:`<code>SELECT e.name FROM Employee e
WHERE e.id IN (
  SELECT managerId FROM Employee
  WHERE managerId IS NOT NULL
  GROUP BY managerId HAVING COUNT(*) >= 5
)</code><p>Two steps: (1) find managerIds with ≥5 direct reports, (2) look up their name. Could also JOIN: join the subquery to Employee on id=managerId.</p>`},{id:"w2q13",q:"🏷️ [LeetCode #602] Table: RequestAccepted(requester_id, accepter_id). Find the user with the most total friends (as requester OR accepter).",company:"LeetCode",freq:"Medium",answer:`<code>WITH all_friends AS (
  SELECT requester_id AS user_id FROM RequestAccepted
  UNION ALL
  SELECT accepter_id FROM RequestAccepted
)
SELECT user_id, COUNT(*) AS num
FROM all_friends GROUP BY user_id
ORDER BY num DESC LIMIT 1</code><p>UNION ALL stacks requester and accepter columns. A user is a friend whether they requested or accepted. LIMIT 1 returns the top user (add RANK() if there could be ties).</p>`},{id:"w2q14",q:"[Reddit Ads] Show daily revenue for the ad with the highest total spend over the past week. Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id).",company:"Reddit",freq:"Medium",answer:`<code>WITH top_ad AS (
  SELECT ad_id FROM ad_revenue
  WHERE transaction_date >= CURRENT_DATE - 7
  GROUP BY ad_id ORDER BY SUM(revenue) DESC LIMIT 1
)
SELECT ar.transaction_date, SUM(ar.revenue) AS daily_rev
FROM ad_revenue ar JOIN top_ad t ON ar.ad_id = t.ad_id
WHERE ar.transaction_date >= CURRENT_DATE - 7
GROUP BY ar.transaction_date ORDER BY 1</code><p>CTE identifies the single top ad over the full period, then join back to get its daily breakdown. LIMIT 1 in the CTE = exactly one ad.</p>`},{id:"w2q14b",q:"🏷️ [LeetCode #262 — Trips and Users] Tables: Trips(id, client_id, driver_id, city_id, status, request_at), Users(users_id, banned, role). Find the cancellation rate of unbanned clients AND drivers between Oct 1–3, 2013. Round to 2 decimal places.",company:"LeetCode",freq:"Hard",answer:`<code>SELECT t.request_at AS Day,
  ROUND(
    SUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 1.0 /
    COUNT(*), 2
  ) AS 'Cancellation Rate'
FROM Trips t
JOIN Users c ON t.client_id = c.users_id AND c.banned = 'No'
JOIN Users d ON t.driver_id = d.users_id AND d.banned = 'No'
WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY t.request_at
ORDER BY t.request_at</code><p>Join Users table <em>twice</em> — once as client (c) and once as driver (d) — each with banned='No'. This is the key trick: both client AND driver must be unbanned for the trip to count. Cancellation = any status that is not 'completed'. AVG(CASE WHEN status!='completed') is equivalent and slightly cleaner.</p>`}]},{title:"Python — Pandas & A/B Testing",icon:"🐍",range:"Q15–Q22",qs:[{id:"w2q15",q:"Write the complete Airbnb A/B test pipeline in Python: given visit.csv and booking.csv, compute booking rate per group and run a two-proportion z-test.",company:"Airbnb",freq:"High",answer:`<code>import pandas as pd, numpy as np
from scipy.stats import proportions_ztest

visit = pd.read_csv('visit.csv')
booking = pd.read_csv('booking.csv')
booking['converted'] = 1

df = pd.merge(visit, booking[['id_visitor','converted']],
              on='id_visitor', how='left')
df['converted'] = df['converted'].fillna(0).astype(int)

metrics = df.groupby('assign').agg(
    visitors=('id_visitor','nunique'),
    bookings=('converted','sum'),
    rate=('converted','mean')
).reset_index()

n_c, k_c = int(metrics.loc[0,'visitors']), int(metrics.loc[0,'bookings'])
n_t, k_t = int(metrics.loc[1,'visitors']), int(metrics.loc[1,'bookings'])
z, p = proportions_ztest([k_c,k_t],[n_c,n_t])
print(f'p={p:.4f}, {"significant" if p<0.05 else "not significant"}')</code>`},{id:"w2q16",q:"What's the difference between pd.merge(df1, df2, how='left') and how='inner'? When do you use each in A/B testing?",company:"All",freq:"High",answer:"<p><strong>LEFT JOIN</strong> keeps all rows from df1, NaN where no match in df2. Use when computing conversion rate: keep ALL visitors (denominator), NaN for non-converters → fillna(0).</p><p><strong>INNER JOIN</strong> keeps only matching rows. Use when you only want users who appear in both tables — e.g., analyze only users who made at least one purchase.</p><p>For A/B testing, ALWAYS use LEFT JOIN as the base. Using inner would drop non-converters and inflate your conversion rate.</p>"},{id:"w2q17",q:"Write Python to compute a 95% confidence interval on the difference in two proportions. p_c=0.10, n_c=5000, p_t=0.12, n_t=5000.",company:"Airbnb / General",freq:"High",answer:`<code>import numpy as np

p_c, n_c = 0.10, 5000
p_t, n_t = 0.12, 5000

diff = p_t - p_c  # 0.02
se_diff = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)
ci_lower = diff - 1.96 * se_diff
ci_upper = diff + 1.96 * se_diff

print(f'Diff: {diff:.4f}')
print(f'95% CI: ({ci_lower:.4f}, {ci_upper:.4f})')
# If CI does not include 0 → significant
print('Significant!' if ci_lower > 0 or ci_upper < 0 else 'Not significant')</code><p>Note: SE for CI uses individual proportions (not pooled), unlike the z-test which uses pooled proportion.</p>`},{id:"w2q18",q:"DataFrame df: user_id, assign (0/1), country, converted (0/1). Write Python to compute booking rate by country for the treatment group only, with 95% CI.",company:"Airbnb",freq:"Medium",answer:`<code>trt = df[df['assign'] == 1]
by_country = trt.groupby('country').agg(
    n=('user_id','count'),
    conversions=('converted','sum'),
    rate=('converted','mean')
).reset_index()

import numpy as np
by_country['se'] = np.sqrt(by_country['rate'] * (1-by_country['rate']) / by_country['n'])
by_country['ci_lo'] = by_country['rate'] - 1.96 * by_country['se']
by_country['ci_hi'] = by_country['rate'] + 1.96 * by_country['se']
print(by_country[['country','rate','ci_lo','ci_hi']])</code>`},{id:"w2q19",q:"p-value = 0.08. Your manager says 'it's almost significant, let's run the test longer'. Is this correct? What do you say?",company:"All / Netflix",freq:"High",answer:`<p>This is 'p-value hacking' — extending the experiment AFTER seeing the result inflates false positive rate. The α=0.05 threshold only applies to a pre-committed stopping rule.</p><p><strong>Correct response:</strong> (1) Was the sample size pre-determined based on power analysis? If yes, we should stop now regardless of p-value. (2) If we extend, we must correct for multiple comparisons (e.g., sequential testing with adjusted α). (3) p=0.08 means "insufficient evidence to reject H0" — not "almost works". (4) Alternative: compute power and MDE — if the observed effect is truly there, what n do we actually need?</p>`},{id:"w2q20",q:"[Reddit] Two dice: A=[1,4,5], B=[2,2,4]. Write Python to compute P(A > B).",company:"Reddit",freq:"Medium",answer:`<code>import numpy as np

def prob_a_gt_b(A, B):
    A, B = np.array(A), np.array(B)
    # Broadcasting: all pairs comparison
    return np.mean(A[:, None] > B[None, :])

A = [1, 4, 5]
B = [2, 2, 4]
print(prob_a_gt_b(A, B))
# Pairs: (1>2)=F, (1>2)=F, (1>4)=F, (4>2)=T, (4>2)=T, (4>4)=F, (5>2)=T, (5>2)=T, (5>4)=T
# 5/9 ≈ 0.556</code><p>Broadcasting trick: A[:,None] is column vector (3×1), B[None,:] is row vector (1×3) → comparison gives 3×3 boolean matrix of all pairs. np.mean() over the whole matrix = P(A > B).</p>`},{id:"w2q21",q:"Write Python code to compute the weighted random sample from: animals=['cat','dog','mouse','bird'], counts=[2,4,5,3]. Verify it's correct.",company:"Reddit / Shopify",freq:"Medium",answer:`<code>import numpy as np
import pandas as pd

animals = ['cat','dog','mouse','bird']
counts = [2, 4, 5, 3]
total = sum(counts)
probs = [c/total for c in counts]  # [2/14, 4/14, 5/14, 3/14]

def sample(n=1):
    return np.random.choice(animals, size=n, p=probs)

# Verification: run 10,000 samples, check empirical vs theoretical
results = pd.Series(sample(10000)).value_counts(normalize=True).sort_index()
expected = pd.Series(dict(zip(animals, probs))).sort_index()
print(pd.DataFrame({'empirical': results, 'expected': expected}))</code>`},{id:"w2q22",q:"DataFrame df: user_id, date, pages_viewed, duration_sec. (1) Top 3 countries by avg session duration. (2) % sessions > 300s. (3) 7-day rolling avg of daily session count.",company:"General",freq:"Medium",answer:`<code># (1) Top 3 countries by avg duration
top3 = df.groupby('country')['duration_sec'].mean().nlargest(3)

# (2) % sessions > 300s
pct = (df['duration_sec'] > 300).mean() * 100

# (3) 7-day rolling avg of daily session count
df['date'] = pd.to_datetime(df['date'])
daily = df.groupby(df['date'].dt.date)['user_id'].count().reset_index()
daily.columns = ['date', 'sessions']
daily = daily.sort_values('date')
daily['rolling_7d'] = daily['sessions'].rolling(7).mean()
print(daily)</code><p>For (2): boolean Series.mean() is the pythonic vectorized approach. For (3): .rolling(7) returns NaN for first 6 rows (insufficient data). Add min_periods=1 to get partial averages.</p>`}]},{title:"Python — OOP & Interview Coding",icon:"🏗️",range:"Q23–Q35",qs:[{id:"w2q23",q:"Write a Python class ExperimentTracker that tracks click-through rates. Methods: record(rec_id, event_type), ctr(rec_id), top_n(n). Implement from memory.",company:"Shopify",freq:"High",answer:`<code>class ExperimentTracker:
    def __init__(self):
        self.clicks = {}
        self.impressions = {}

    def record(self, rec_id, event):
        if event == 'impression':
            self.impressions[rec_id] = self.impressions.get(rec_id, 0) + 1
        elif event == 'click':
            self.clicks[rec_id] = self.clicks.get(rec_id, 0) + 1

    def ctr(self, rec_id):
        imps = self.impressions.get(rec_id, 0)
        return 0.0 if imps == 0 else self.clicks.get(rec_id, 0) / imps

    def top_n(self, n=3):
        ctrs = {r: self.ctr(r) for r in self.impressions}
        return sorted(ctrs, key=lambda r: ctrs[r], reverse=True)[:n]</code>`},{id:"w2q24",q:"[Shopify TDD] You're given these passing tests. Write the DataList class: d=DataList([1,2,3]); assert d.double()==[2,4,6]; assert d.total()==6; assert d.filter(lambda x:x>1)==[2,3].",company:"Shopify",freq:"High",answer:`<code>class DataList:
    def __init__(self, data):
        self.data = list(data)  # defensive copy

    def double(self):
        return [x * 2 for x in self.data]

    def collect(self):
        return self.data

    def total(self):
        return sum(self.data)

    def filter(self, pred):
        return [x for x in self.data if pred(x)]

    def map(self, func):
        return [func(x) for x in self.data]</code><p>TDD approach: read the tests, understand the contract, then write the simplest code that passes each test in order. Defensive copy in __init__ prevents external mutation of self.data.</p>`},{id:"w2q25",q:"🏷️ [LeetCode #380 — Expedia] Implement RandomizedSet with O(1) insert, remove, getRandom. Explain the swap-and-pop trick.",company:"Expedia / LeetCode",freq:"High",answer:`<code>import random
class RandomizedSet:
    def __init__(self):
        self.vals, self.pos = [], {}

    def insert(self, val):
        if val in self.pos: return False
        self.pos[val] = len(self.vals)
        self.vals.append(val)
        return True

    def remove(self, val):
        if val not in self.pos: return False
        last = self.vals[-1]
        i = self.pos[val]
        self.vals[i], self.pos[last] = last, i
        self.vals.pop(); del self.pos[val]
        return True

    def getRandom(self):
        return random.choice(self.vals)</code><p>Swap-and-pop: move last element to the deleted position, update its map entry, pop the last position. This avoids O(n) middle removal. Both data structures stay consistent.</p>`},{id:"w2q26",q:"🏷️ [LeetCode #289 — Shopify] Game of Life: apply Conway's rules in-place using state encoding. What do values 2 and -1 represent?",company:"Shopify / LeetCode",freq:"Medium",answer:`<code>def gameOfLife(board):
    m, n = len(board), len(board[0])
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]

    def live_nb(r,c):
        return sum(1 for dr,dc in dirs if 0<=r+dr<m and 0<=c+dc<n
                   and abs(board[r+dr][c+dc]) == 1)

    for r in range(m):
        for c in range(n):
            nb = live_nb(r, c)
            if board[r][c]==1 and (nb<2 or nb>3): board[r][c]=2
            elif board[r][c]==0 and nb==3: board[r][c]=-1

    for r in range(m):
        for c in range(n):
            if board[r][c]==2: board[r][c]=0
            if board[r][c]==-1: board[r][c]=1</code><p>2 = was alive (1), will become dead (0). -1 = was dead (0), will become alive (1). abs(cell)==1 correctly detects "was alive in original state" for both 1 (unchanged) and NOT 2 (encoded as dying).</p>`},{id:"w2q27",q:"What is the difference between __init__ and __new__? When do you define __repr__ vs __str__?",company:"Shopify / General Python",freq:"Medium",answer:"<p><strong>__new__</strong> creates the instance (allocates memory). <strong>__init__</strong> initializes it (sets attributes). You almost never override __new__ in DS work.</p><p><strong>__repr__</strong>: unambiguous developer representation, used in debugger/REPL. Convention: should look like the code that recreates the object. E.g., ExperimentTracker() or DataList([1,2,3]).</p><p><strong>__str__</strong>: human-readable representation, used by print(). Falls back to __repr__ if not defined.</p><p>In interviews: always define __repr__ — it shows professionalism and makes debugging visible.</p>"},{id:"w2q28",q:"[Shopify] Write a LibrarySearch class: add_book(title, author, year), search_by_author(author) → sorted titles, search_after_year(year) → sorted titles. Handle case-insensitive author search.",company:"Shopify",freq:"Medium",answer:`<code>class LibrarySearch:
    def __init__(self):
        self.books = []

    def add_book(self, title, author, year):
        self.books.append({'title': title, 'author': author, 'year': int(year)})

    def search_by_author(self, author):
        return sorted(b['title'] for b in self.books
                      if b['author'].lower() == author.lower())

    def search_after_year(self, year):
        return sorted(b['title'] for b in self.books if b['year'] > year)</code><p>Case-insensitive: .lower() on both sides. Return sorted() — sorted lists are deterministic for testing. Edge cases: empty library (returns []), no matches (returns []).</p>`},{id:"w2q29",q:"What's the time complexity of: (1) list.append(), (2) list.pop(), (3) list.pop(0), (4) dict lookup, (5) set membership test?",company:"General",freq:"Medium",answer:"<p>(1) list.append(): O(1) amortized — list doubles capacity when full</p><p>(2) list.pop() [from end]: O(1) — just decrements the length</p><p>(3) list.pop(0) [from front]: O(n) — must shift all elements left</p><p>(4) dict lookup (key in dict, dict[key]): O(1) average — hash table</p><p>(5) set membership (x in s): O(1) average — hash table</p><p>Why this matters: in RandomizedSet, we use list for O(1) random access and dict for O(1) position lookup. We specifically avoid list.pop(i) (O(n)) with the swap-and-pop trick.</p>"},{id:"w2q30",q:"[Shopify Pair Programming] You're implementing a class that tracks outage overlap: given a list of (start, end) time pairs, find if any two intervals overlap. Write the class with an add(start, end) method and an is_overlapping() method.",company:"Shopify",freq:"Medium",answer:`<code>class OutageTracker:
    def __init__(self):
        self.intervals = []

    def add(self, start, end):
        self.intervals.append((start, end))

    def is_overlapping(self):
        sorted_ivs = sorted(self.intervals, key=lambda x: x[0])
        for i in range(1, len(sorted_ivs)):
            prev_end = sorted_ivs[i-1][1]
            curr_start = sorted_ivs[i][0]
            if curr_start < prev_end:
                return True
        return False

    def overlapping_pairs(self):
        sorted_ivs = sorted(self.intervals, key=lambda x: x[0])
        pairs = []
        for i in range(1, len(sorted_ivs)):
            if sorted_ivs[i][0] < sorted_ivs[i-1][1]:
                pairs.append((sorted_ivs[i-1], sorted_ivs[i]))
        return pairs</code><p>Sort by start time, then check if consecutive intervals overlap. O(n log n) sort + O(n) scan = O(n log n) total. Edge case: adjacent intervals with end==start are NOT overlapping (strict less than).</p>`},{id:"w2q31",q:"🏷️ [LeetCode #146 — Shopify Sr. DS 2025] Implement an LRU Cache with capacity k. get(key) → value or -1, put(key, value). Both O(1). What data structure makes this possible?",company:"Shopify",freq:"High",answer:`<code>from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = OrderedDict()  # DLL + hashmap

    def get(self, key):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)  # mark as MRU
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)  # evict LRU</code><p><strong>Why it works:</strong> O(1) lookup needs a hashmap. O(1) eviction of least recently used needs a doubly linked list (can remove any node in O(1) given a pointer). Python's OrderedDict is both. move_to_end() = MRU; popitem(last=False) = evict LRU from front.</p><p>If asked to implement without OrderedDict: maintain a manual DLL with head (LRU) and tail (MRU), plus a hashmap key→node. Every get/put moves the node to tail. Evict by removing head.</p>`},{id:"w2q32",q:"🏷️ [LeetCode #215 — Reddit DS] Find the kth largest element in an unsorted array. nums=[3,2,1,5,6,4], k=2 → 5. Give 3 approaches: sort, heap, quickselect. Which do you use in an interview?",company:"Reddit",freq:"Medium",answer:`<code>import heapq, random

# Approach 1: Sort — O(n log n), O(1)
def findKthLargest(nums, k):
    return sorted(nums, reverse=True)[k-1]

# Approach 2: Min-heap of size k — O(n log k), O(k)
def findKthLargest_heap(nums, k):
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]  # root = kth largest

# Approach 3: Quickselect — O(n) average, O(n²) worst
def findKthLargest_qs(nums, k):
    pivot = random.choice(nums)
    greater = [x for x in nums if x > pivot]
    equal   = [x for x in nums if x == pivot]
    lesser  = [x for x in nums if x < pivot]
    if k <= len(greater): return findKthLargest_qs(greater, k)
    elif k <= len(greater) + len(equal): return pivot
    else: return findKthLargest_qs(lesser, k-len(greater)-len(equal))</code><p><strong>Interview recommendation:</strong> Start with sort (simplest, always works). If pushed for efficiency, code the heap: better when n is huge but k is small. Quickselect is O(n) average but risky under time pressure — explain the concept and only code it if asked. Reddit DS asked for the heap approach.</p>`},{id:"w2q33",q:"🏷️ [Spotify DS — FizzBuzz, 4+ appearances] Write FizzBuzz for 1 to N. Follow-up: rewrite so adding a new rule (e.g., multiples of 7 → 'Jazz') requires zero changes to the loop logic.",company:"Spotify",freq:"High",answer:`<code># Basic
def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 15 == 0: print('FizzBuzz')
        elif i % 3 == 0: print('Fizz')
        elif i % 5 == 0: print('Buzz')
        else: print(i)

# Follow-up: extensible rules dict
def fizzbuzz_ext(n, rules=None):
    if rules is None:
        rules = {3: 'Fizz', 5: 'Buzz'}
    for i in range(1, n+1):
        output = ''.join(label for div, label in sorted(rules.items())
                         if i % div == 0)
        print(output if output else i)

# Adding Jazz: fizzbuzz_ext(105, {3:'Fizz', 5:'Buzz', 7:'Jazz'})
# i=15 → 'FizzBuzz' auto, i=21 → 'FizzJazz', i=35 → 'BuzzJazz'</code><p><strong>Key: check 15 (=3×5) FIRST</strong> in the basic version — otherwise i=15 hits the elif 3 branch and prints only 'Fizz'. The rules dict eliminates this issue: it auto-concatenates all matching labels. Sorting rules by divisor ensures consistent order (Fizz before Buzz). Spotify asked FizzBuzz in 4+ interviews expecting instant basic + thoughtful follow-up.</p>`},{id:"w2q34",q:"🏷️ [Spotify DS — Primes] Write a function returning all primes < N. Give both the naive O(n√n) and the Sieve of Eratosthenes O(n log log n) solutions. Why does the Sieve start marking at i² not 2i?",company:"Spotify",freq:"Medium",answer:`<code># Naive O(n√n)
def primes_naive(n):
    def is_prime(x):
        if x < 2: return False
        for i in range(2, int(x**0.5)+1):
            if x % i == 0: return False
        return True
    return [i for i in range(2, n) if is_prime(i)]

# Sieve of Eratosthenes — O(n log log n), O(n) space
def primes_below(n):
    if n < 2: return []
    sieve = [True] * n
    sieve[0] = sieve[1] = False
    for i in range(2, int(n**0.5) + 1):
        if sieve[i]:
            for j in range(i*i, n, i):  # start at i²
                sieve[j] = False
    return [i for i, p in enumerate(sieve) if p]

# primes_below(20) → [2, 3, 5, 7, 11, 13, 17, 19]</code><p><strong>Why i²?</strong> All multiples of i smaller than i² (i.e., 2i, 3i, ... (i-1)i) were already marked by earlier primes 2, 3, ..., i-1. Starting at i² avoids redundant work. Only sieve up to √n: if a composite ≤ n hasn't been crossed out by √n, it has no factor ≤ √n — impossible. Complexity O(n log log n) because the harmonic sum ∑(1/p) over primes converges to log log n.</p>`},{id:"w2q35",q:"🏷️ [Spotify DS — Anagram] Check if two strings are anagrams. Compare sort vs Counter approach in time/space. Follow-up: group a list of words into anagram groups.",company:"Spotify",freq:"Medium",answer:`<code>from collections import Counter, defaultdict

# Sort — O(n log n), O(n)
def is_anagram_sort(s, t):
    return sorted(s.lower()) == sorted(t.lower())

# Counter — O(n), O(k) where k ≤ 26 (alphabet size)
def is_anagram_counter(s, t):
    if len(s) != len(t): return False  # fast exit
    return Counter(s.lower()) == Counter(t.lower())

# Manual dict — O(n), more explicit
def is_anagram_dict(s, t):
    if len(s) != len(t): return False
    counts = {}
    for c in s.lower(): counts[c] = counts.get(c, 0) + 1
    for c in t.lower(): counts[c] = counts.get(c, 0) - 1
    return all(v == 0 for v in counts.values())

# Follow-up: group anagrams (LeetCode #49)
def group_anagrams(words):
    groups = defaultdict(list)
    for w in words:
        groups[tuple(sorted(w))].append(w)
    return list(groups.values())
# ['eat','tea','tan','ate','nat','bat'] → [['eat','tea','ate'],['tan','nat'],['bat']]</code><p>Sort: simpler but O(n log n). Counter: O(n) and Pythonic — Counter objects support == comparison. Length check early exit avoids full counting when strings differ in length. Follow-up insight: use <code>tuple(sorted(word))</code> as the group key — all anagrams hash to the same key. Spotify expected the Counter approach and the follow-up.</p>`}]}]},lm={day:15,title:"A/B Testing Foundations",date_note:"Day 15 — Hypothesis testing, z-tests, and statistical significance",prev_day:14,next_day:16,week_label:"Week 3 — A/B Testing & Causal Inference",recap:{title:"Week 3 Orientation — Why A/B Testing is DS Core (3 min)",points:["A/B testing is how tech companies make product decisions at scale — nearly every DS role expects fluency","Senior DS = you design the experiment and own the analysis, not just run it","The Director interviewing you leads A/B testing strategy — this week speaks his language directly","Causal inference is the harder skill: knowing WHEN A/B tests work and WHEN they don't","This week: foundations → design → pitfalls → causal inference → incrementality → advanced topics → quiz"]},topics:[{title:"Hypothesis Testing: H0, H1, α, β, Power",color:"#6366F1",content:`**The setup:**
  H0 (null hypothesis): No difference — any observed effect is due to chance
  H1 (alternative): There IS a real difference

  Alpha (α) = Type I error rate = P(reject H0 | H0 is true) = false positive rate
    • Convention: α = 0.05 means 5% chance of a false positive
    • You SET this before the experiment — it's a business decision

  Beta (β) = Type II error rate = P(fail to reject H0 | H0 is false) = false negative rate
    • Typical: β = 0.20 (80% power)

  Power = 1 − β = P(detect effect | effect is real)
    • Low power → you'll miss real effects → business ships nothing even when it works
    • Power depends on: sample size, effect size (MDE), variance, α

**Type I vs Type II errors in business context:**
  Type I (false positive, α): Ship a feature that actually hurts or has no effect
    → Waste engineering, product, and user goodwill
  Type II (false negative, β): Don't ship a feature that would have helped
    → Opportunity cost, slow product velocity

  Which is worse depends on the business context:
  • High-stakes (medical, safety) → minimize Type I, tolerate Type II
  • Revenue-critical product → often tolerate more Type II to avoid regressions
  • Fast-moving startup → sometimes tolerate more Type I, move faster

**The decision matrix:**
                  H0 True (no effect)    H0 False (effect exists)
  Reject H0:      Type I error (α)       Correct! (Power = 1-β)
  Fail to reject: Correct! (1-α)         Type II error (β)`,interview_tip:"Expedia's Director specifically evaluates experiment design rigor — make sure you can define alpha and power in business terms, not just formula terms. When asked 'how do you set up an experiment?', immediately say: 'First I'd agree on the primary metric, then set α and MDE based on the business decision stakes, then calculate required sample size to achieve 80% power.'"},{title:"Two-Proportion Z-Test — The Core Tool",color:"#8B5CF6",content:`**When to use:** Comparing conversion rates, click rates, booking rates between two groups

**Setup:**
  Control: n_c users, k_c conversions → p_c = k_c / n_c
  Treatment: n_t users, k_t conversions → p_t = k_t / n_t

**Z-statistic:**
  p_pool = (k_c + k_t) / (n_c + n_t)   ← pooled proportion under H0
  SE = sqrt(p_pool * (1 - p_pool) * (1/n_c + 1/n_t))
  z = (p_t - p_c) / SE

**In Python:**
  from scipy.stats import proportions_ztest
  z_stat, p_value = proportions_ztest(
      count=[k_c, k_t],
      nobs=[n_c, n_t]
  )
  # Two-sided by default
  # p_value < 0.05 → reject H0 → statistically significant

**Confidence interval on the difference:**
  # Note: CI uses INDIVIDUAL proportions (not pooled)
  diff = p_t - p_c
  se_ci = sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)
  ci = (diff - 1.96*se_ci, diff + 1.96*se_ci)
  # If CI excludes 0 → significant at α=0.05

**When to use t-test instead:**
  • Continuous outcome (avg revenue, time on page) → Welch's t-test
  • proportions_ztest is for binary outcomes (converted / not converted)
  • Rule of thumb: n > 30 in each group and n*p > 5 → z-test approximation is fine

**Practical interpretation:**
  p_c = 0.10, p_t = 0.11, n=5000 each
  diff = 0.01 (1 percentage point)
  z ≈ 2.14, p ≈ 0.032 → significant at α=0.05
  But: is 1pp meaningful to the business? Depends on revenue per booking.`,interview_tip:"The most common interview mistake: confusing the SE formula for the z-test (pooled p) vs the SE formula for the CI (individual p). The z-test uses pooled proportion because under H0, both groups share the same true rate. The CI uses individual proportions because we're estimating the actual difference. Always mention this distinction — it signals deep understanding."},{title:"p-value Interpretation — The Most Misunderstood Concept",color:"#EC4899",content:`**What p-value IS:**
  P(seeing data this extreme or more | H0 is true)
  → Probability of observing the effect by chance alone IF there's truly no effect

**What p-value is NOT:**
  ✗ P(H0 is true given the data) — this is Bayesian, not frequentist
  ✗ The probability that the result is a fluke
  ✗ Effect size — a tiny useless effect can be highly significant at large n
  ✗ P(treatment is better than control)

**The Netflix problem (real interview question):**
  'Booking rate: control 80.1%, treatment 80.2%. p = 0.001. Should we ship?'

  Wrong answer: 'Yes, it's significant'
  Right answer: 'Statistical significance ≠ practical significance.'
  • Diff = 0.1pp. At scale (10M users), that's 10,000 more bookings.
  • But: what was our MDE? If we only cared about effects ≥ 2pp, this is below our threshold.
  • Is 0.1pp above the cost of shipping? Depends on eng complexity, user experience impact.
  • Recommendation: declare it statistically significant but below practical significance threshold.
  • Ship only if marginal revenue >> marginal cost of the change.

**p = 0.08 — what does this mean?**
  It means: if H0 is true, we'd see data this extreme 8% of the time by chance.
  It does NOT mean 'almost significant'. It means we failed to reject H0 at α=0.05.
  Correct language: 'We did not find sufficient evidence to reject the null.'

**p-value and sample size:**
  At large enough n, ANY difference will be statistically significant.
  Example: n=10M, diff=0.001pp → p < 0.001
  This is why you ALWAYS pair p-value with effect size and CI.`,interview_tip:`If the interviewer gives you a p-value, always:
1. Check if it crosses your pre-set α threshold
2. Look at the CI to assess practical significance
3. Ask: is this effect size meaningful to the business?
Never just say 'p < 0.05 → ship it'. That's junior analyst thinking.`},{title:"One-Sided vs Two-Sided Tests",color:"#F59E0B",content:`**Two-sided test (default):**
  H1: p_t ≠ p_c (treatment is different from control, either direction)
  Critical region: both tails. α/2 = 0.025 per tail.
  Use when: you'd want to know about unexpected harms too
  Python: proportions_ztest(..., alternative='two-sided')

**One-sided test:**
  H1: p_t > p_c (treatment is BETTER)
  Critical region: one tail. Full α = 0.05 in one direction.
  More statistical power (easier to detect effects in one direction)
  Use ONLY when: (1) you would never ship if treatment < control, AND
                  (2) you pre-committed to one-sided BEFORE seeing data
  Python: proportions_ztest(..., alternative='larger')

**The danger of switching to one-sided after seeing data:**
  If you ran a two-sided test, got p=0.07, and then say 'let me use one-sided'
  → True α is now inflated, result is not reliable.
  This is p-hacking. Don't do it.

**Rule of thumb for interviews:**
  Default to two-sided unless there's a VERY strong pre-registered reason.
  'I'm not just looking for improvement — I'm also guarding against accidental harm'
  is almost always the right answer.

**Paired vs unpaired tests:**
  Paired (before/after same users): use paired t-test → more powerful, controls within-user variance
  Unpaired (different user groups): use two-sample z-test or t-test
  In A/B testing: usually unpaired (random assignment to groups)
  Exception: crossover design (same user sees both variants at different times)`,interview_tip:"Directors love catching people on one-sided vs two-sided. The answer they want to hear: 'I default to two-sided because I want to detect unexpected regressions, not just improvements. I only use one-sided if it was pre-registered before the experiment started.'"}],practice_questions:[{q:"[Expedia/Netflix] Booking rate: control=10.0%, treatment=10.5%, n=5,000 per group. Run the z-test in Python and interpret the result. Is this statistically AND practically significant?",a:`from scipy.stats import proportions_ztest
import numpy as np

n_c, n_t = 5000, 5000
p_c, p_t = 0.10, 0.105
k_c, k_t = int(p_c * n_c), int(p_t * n_t)

z, p = proportions_ztest([k_c, k_t], [n_c, n_t])
diff = p_t - p_c
se_ci = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)
ci = (diff - 1.96*se_ci, diff + 1.96*se_ci)

print(f'z={z:.3f}, p={p:.4f}')
print(f'Diff: {diff:.4f}, 95% CI: ({ci[0]:.4f}, {ci[1]:.4f})')
print('Significant' if p < 0.05 else 'Not significant')

# z≈1.29, p≈0.20 → NOT significant at α=0.05
# Even though 0.5pp looks like an improvement, n=5000 is too small to detect it
# CI: (-0.0027, 0.0127) — includes 0
# Conclusion: insufficient evidence. Increase n or reduce MDE.`,say_aloud:"Always run the numbers. p≈0.20 — NOT significant. The lift looks real but n=5000 is too small. The CI includes zero. Practically: 0.5pp at 5k users = ~25 extra bookings. If avg booking = $X revenue, that drives the decision. I'd recommend increasing the sample size based on a proper power calculation before deciding.",company:"Expedia / Netflix",difficulty:"Medium"},{q:"[Netflix real question] Feature test: booking rate control=80.1%, treatment=80.2%, n=1,000,000 per group, p=0.001. Your PM says 'great, let's ship!' What's your response?",a:`# Statistical test would show: highly significant (huge n)
# BUT: practical significance analysis
diff = 0.002  # 0.2pp
# At 1M users, that's 2,000 more bookings per experiment cohort

# Questions to ask before shipping:
# 1. Was 0.2pp our pre-set MDE? If MDE was 1pp, this is below threshold
# 2. What's the revenue per booking? 2000 * $X = business impact
# 3. What's the engineering cost and maintenance burden of this feature?
# 4. Does the CI exclude 0? Yes (p=0.001) → real effect
# 5. Are guardrail metrics healthy? (bounce rate, page load, session duration)

# Correct answer: 'Statistically significant ≠ practically significant'
# Recommendation: significant effect, but check if 0.2pp exceeds our minimum
# detectable effect threshold. If our MDE was 1pp, this doesn't meet it.
# Present to PM as: 'The effect is real but small. Here's the revenue impact
# calculation. Is this above our threshold to justify shipping?'`,say_aloud:"This is the classic p-value trap. With 1M users, even 0.001pp differences would be significant. The right framework: (1) Is the effect above our pre-committed MDE? (2) What's the dollar value of the effect? (3) Are guardrails healthy? (4) Is the revenue impact above the cost to ship and maintain? Statistical significance is the floor, not the ceiling.",company:"Netflix / All",difficulty:"Medium"},{q:"[General DS] Explain the difference between Type I and Type II errors using a concrete A/B test example. Why might a company tolerate higher β (more Type II errors)?",a:`# Concrete example: testing a new checkout flow

# Type I error (false positive, α=0.05):
# We conclude the new flow IMPROVES conversion when it actually doesn't.
# Consequence: we ship a feature that provides no benefit.
# Could waste engineering resources, confuse users.

# Type II error (false negative, β=0.20 typically):
# We conclude the new flow has NO effect when it actually does improve conversion.
# Consequence: we don't ship a feature that would have helped.
# Cost = opportunity cost.

# Why tolerate higher β:
# 1. Large sample cost: running longer tests is expensive (delay to other features)
# 2. Small effects matter less: if MDE is small, missing it isn't catastrophic
# 3. Risk asymmetry: shipping a bad feature (Type I) is WORSE than missing a good one
#    especially in high-stakes products (medical, financial, safety)
# 4. Multiple experiments: running many tests with 80% power means ~20% of real
#    effects are missed — acceptable tradeoff for experiment velocity

# When to use stricter β (higher power):
# Major feature launches, one-time opportunities, high-revenue changes`,say_aloud:"Frame Type I as 'shipping something that doesn't work' and Type II as 'missing something that works'. Most companies default to α=0.05, power=0.80 — but these are choices, not laws. For a high-stakes launch, I might push power to 90%. For a minor UI tweak, 80% is fine. The business context drives the statistics.",company:"All",difficulty:"Medium"},{q:"[Expedia Sr. DS] A colleague runs an A/B test, gets p=0.08, says 'it didn't work'. Another colleague says 'run it longer until it becomes significant'. Who's right? What's the correct approach?",a:`# Both are wrong in different ways.

# Colleague 1 ('it didn't work'):
# p=0.08 does NOT mean no effect. It means insufficient evidence at α=0.05.
# Could be underpowered — the effect is real but n was too small.
# Should check: what power did we have? What was our MDE?

# Colleague 2 ('run longer until significant'):
# THIS IS P-HACKING / PEEKING PROBLEM.
# If you keep collecting data until p < 0.05, your actual Type I error rate
# is much higher than 5%. Example: peek at every 1000 new users →
# true α can be as high as 20-30% for p=0.05 threshold.
# This is the single most common A/B testing mistake in practice.

# Correct approach:
# 1. Pre-register: set α, MDE, required n BEFORE the experiment.
# 2. Run to the pre-specified sample size (not duration).
# 3. If p=0.08 at pre-specified n: correct answer = 'not significant, stop'.
# 4. If you want to run longer: use sequential testing methods (O'Brien-Fleming,
#    or alpha-spending functions) which adjust α for interim analyses.

from statsmodels.stats.power import NormalIndPower
analysis = NormalIndPower()
n = analysis.solve_power(effect_size=0.1, power=0.80, alpha=0.05)
print(f'Required n per group: {n:.0f}')`,say_aloud:"This is the peeking problem — one of the most important A/B testing pitfalls. The correct answer: you must pre-commit to your stopping rule. p=0.08 after pre-specified n means 'insufficient evidence, don't ship.' If we want to keep testing, we need to use sequential testing methods that adjust alpha for repeated looks. Never use 'run until significant' — it's a form of p-hacking.",company:"Expedia / All",difficulty:"Medium"},{q:"[Airbnb] You run a two-sided z-test on booking conversion: p=0.04, diff=+0.8pp. Your PM says 'that's great, but can we use a one-sided test? I only care if it improves, not if it gets worse.' What do you say?",a:`# Short answer: No — not after seeing the data.

# Why:
# 1. One-sided test is valid ONLY if pre-registered BEFORE data collection.
# 2. Switching after seeing p=0.04 (two-sided) to one-sided is p-hacking.
#    The one-sided p would be p=0.02 — but this inflates Type I error.

# What I actually say to the PM:
# 'Good question — one-sided tests are valid when we pre-commit before
# the experiment. But we can't switch after seeing the data.
# More importantly: we actually WANT to detect regressions too.
# If the feature accidentally hurt bookings in a subgroup,
# a two-sided test would catch it. A one-sided test would not.'

# Also worth noting:
# With p=0.04 (two-sided), we already meet our significance threshold.
# There's no reason to change the test.
# The PM may be trying to make a borderline result seem more significant.

# When one-sided IS appropriate:
# - Pre-registered from the start
# - Scientifically impossible for treatment to harm the metric
# - e.g., 'we added a required field — can this only hurt or be neutral?'
#   (then one-sided for harm detection might be justified)`,say_aloud:"The PM's instinct is understandable — one-sided tests are more powerful. But the rule is: you must pre-register the test direction before collecting data. Switching after is p-hacking. Also note: we usually DO care about regressions — a feature that accidentally hurts a segment would be caught by two-sided but missed by one-sided. Two-sided is almost always the right default.",company:"Airbnb",difficulty:"Medium"}],derivations:["Write the Type I / Type II error decision matrix from memory. What is power in business terms?","Write the proportions_ztest call from memory. What are the count and nobs arguments?","Write the CI formula for difference in proportions. Why does it use individual p, not pooled p?","What does p=0.03 mean in plain English? What does it NOT mean?","What is the peeking problem? Why does it inflate Type I error?"],resources:[{name:"Evan Miller: How Not To Run an A/B Test (classic peeking article)",url:"https://www.evanmiller.org/how-not-to-run-an-ab-test.html"},{name:"Ronny Kohavi: Trustworthy Online Controlled Experiments (book)",url:"https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/D97B26382EB0EB2DC2019A7A7B518F59"},{name:"scipy proportions_ztest docs",url:"https://www.statsmodels.org/stable/generated/statsmodels.stats.proportion.proportions_ztest.html"},{name:"Netflix Tech Blog: AB testing at scale",url:"https://netflixtechblog.com/what-is-an-a-b-test-b08cc1b57962"}]},dm={day:16,title:"Experiment Design & Sample Size",date_note:"Day 16 — Randomization, MDE, sample size, and pre-experiment checks",prev_day:15,next_day:17,week_label:"Week 3 — A/B Testing & Causal Inference",recap:{title:"Day 15 Recap — Hypothesis Testing (5 min)",points:["α = Type I error rate (false positive). β = Type II error rate (false negative). Power = 1-β.","Two-proportion z-test: proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t])","CI on difference uses INDIVIDUAL proportions (not pooled). p-value uses POOLED.","p-value = P(data this extreme | H0 true). NOT P(H0 true | data).","Peeking problem: don't peek at p-values mid-experiment and stop early when p<0.05."]},topics:[{title:"Randomization Unit — The Most Important Design Decision",color:"#6366F1",content:`**What it is:** The unit at which you randomly assign treatment vs control.
  Options: user_id, session_id, device_id, cookie_id, geo/market

**Why it matters — the variance and consistency problem:**

  User-level randomization:
  ✓ A user always sees the same variant (consistent experience)
  ✓ Lower variance if users have multiple sessions (effects average within-user)
  ✗ Harder for features tied to single sessions

  Session-level randomization:
  ✓ Easier to implement, more traffic per day
  ✗ Same user might see control on Monday, treatment on Tuesday → CONTAMINATION
  ✗ Higher variance (between-session variance is uncontrolled)

  Cookie-level:
  ✓ Works for logged-out users
  ✗ Cookie deletion, multiple devices → contamination

**Key rule: Randomization unit must be ≥ analysis unit**
  If you analyze at session level → can randomize at session OR user
  If you analyze at user level → MUST randomize at user level (can't use session)
  Violating this → Variance is underestimated → Too many false positives

**Geo-level randomization (holdout markets):**
  Use when: treatment has spillover effects (network effects, marketplace effects)
  Example: Airbnb pricing algorithm change — if you change prices for some users,
           it affects supply/demand for all users in the same market
  Solution: randomize by market (geo), not user
  Cost: far fewer 'units' → lower statistical power

**Practical example:**
  Expedia tests a new search ranking algorithm.
  If we randomize by user: some users see new ranking, some don't.
  Problem: a hotel that ranks #1 for treatment users may get all bookings,
           starving the control group's supply → spillover → contaminated experiment.
  Solution: geo-level holdout OR careful metric selection.`,interview_tip:"When you describe your experiment design, ALWAYS state the randomization unit and justify it. Interviewers specifically probe 'why user-level vs session-level?' The key insight: randomization unit determines independence — if the unit is too small, you get correlated observations (same user, multiple sessions) → underestimated variance → inflated false positives."},{title:"Minimum Detectable Effect (MDE) & Sample Size",color:"#8B5CF6",content:`**MDE = the smallest effect size your business cares about.**
  Don't set MDE at 'whatever we can detect' — set it at 'what would change the business decision.'

**The sample size formula:**
  n = 2 * (z_α/2 + z_β)² * p̄(1-p̄) / (MDE)²

  Where:
    z_α/2 = 1.96  (α=0.05, two-sided)
    z_β   = 0.84  (power=0.80)
    p̄     = baseline conversion rate (e.g., 0.10)
    MDE   = minimum effect you want to detect (e.g., 0.01 = 1pp)

  This gives n per group (total n = 2n).

**In Python:**
  from statsmodels.stats.power import NormalIndPower
  from statsmodels.stats.proportion import proportion_effectsize

  # Method 1: using proportion_effectsize
  p_baseline = 0.10
  p_mde      = 0.11  # 1pp lift = MDE
  effect     = proportion_effectsize(p_mde, p_baseline)  # Cohen's h
  n = NormalIndPower().solve_power(
      effect_size=effect, power=0.80, alpha=0.05, ratio=1.0
  )
  print(f'n per group: {n:.0f}')  # ~3,816

  # Method 2: manual formula
  import numpy as np
  z_a = 1.96; z_b = 0.84; p = 0.10; mde = 0.01
  n_manual = 2 * (z_a + z_b)**2 * p*(1-p) / mde**2
  print(f'n per group (manual): {n_manual:.0f}')  # ~3,026 (approximation)

**Key relationships to know cold:**
  • 4x the sample size → detect 2x smaller effect (MDE ∝ 1/√n)
  • Lower baseline rate (rare events) → need MORE samples
  • Higher variance metric → need MORE samples
  • Two-sided vs one-sided: one-sided needs ~20% fewer samples
  • 90% power vs 80%: 90% needs ~30% more samples

**How to calculate days needed:**
  days = n_total / (daily_traffic × fraction_exposed)`,interview_tip:"In case study interviews, the MDE question will come up: 'What effect size are you looking for?' Never say 'whatever the test can detect.' Say: 'I'd work with the PM to understand what minimum lift would change the product decision. If a feature costs $100K to build, what booking rate improvement justifies that? That's the MDE.' This is strategic thinking the Director values."},{title:"Experiment Duration — Not Just About Sample Size",color:"#10B981",content:`**Why not just run until you have enough users?**

  1. Weekly seasonality: Users who visit Mon–Wed may behave differently from Thu–Sun.
     Run for at least 1–2 full weeks to get a representative cross-section.

  2. Novelty effect: Users engage more with NEW things simply because they're new,
     regardless of whether they're better. This inflates short-term treatment effects.
     You need to run long enough for novelty to wear off.
     Detection: plot daily treatment effect over time — does it decay? That's novelty.

  3. Learning effects: Some users adapt to a new feature over time → effect INCREASES.
     The flip side of novelty.

  4. Weekly patterns in the metric: If you test on only weekdays, you miss weekend travelers.

**Practical duration rules:**
  • Minimum: 2 full weeks (captures Mon-Sun seasonality twice)
  • Better: 4 weeks for stable seasonal patterns
  • Maximum: diminishing returns after variance is captured; too long risks external events

**How to detect novelty effect:**
  Plot the treatment effect (p_t - p_c) for each day of the experiment.
  If it starts high and decays toward 0 → novelty effect.
  Solution: use CUPED (Controlled-experiment Using Pre-Experiment Data) or
  focus on users who have been in the experiment for at least 7 days.

**Primacy vs novelty:**
  Novelty: users excited about new → inflated short-term effect → decay over time
  Primacy: users resist change → depressed short-term effect → grows over time
  Both are real. Both are detected by plotting effect vs cohort days-in-experiment.`,interview_tip:"The novelty effect question is extremely common in senior DS interviews — especially at companies running many experiments (Expedia, Airbnb, Netflix). The answer shows: (1) you know about the bias, (2) you have a detection method (daily effect plot), and (3) you have a mitigation strategy. This is the difference between 'knows A/B testing' and 'can actually run A/B testing in production.'"},{title:"AA Test & Pre-Experiment Sanity Checks",color:"#F59E0B",content:`**AA test:** Run the experiment setup with NO treatment difference.
  Both groups see the exact same experience.
  Expected result: p-value should NOT be significant.
  Use to verify: randomization is working correctly.

  What an AA test catches:
  ✓ Biased assignment (e.g., new users always go to treatment)
  ✓ Leakage between groups (contamination)
  ✓ Technical bugs in experiment plumbing
  ✓ Baseline metric instability (metric naturally high-variance)

**SRM check (Sample Ratio Mismatch):**
  Expected: 50/50 split (if 1:1 ratio).
  Actual: check if |n_t - n_c| / n_expected is large.

  In Python:
  from scipy.stats import chisquare
  observed = [n_control, n_treatment]
  expected = [total/2, total/2]
  chi2, p_srm = chisquare(f_obs=observed, f_exp=expected)
  if p_srm < 0.05: print('SRM detected! Do not analyze results.')

  SRM causes: bot traffic filtering, logging bugs, network issues, caching
  Rule: ALWAYS check SRM before looking at your primary metric.

**Pre-experiment checklist (say this in interviews):**
  1. AA test: randomization working?
  2. SRM check: correct split ratio?
  3. Baseline metric stability: is the metric noisy before experiment starts?
  4. Coverage check: are both groups getting expected traffic?
  5. Day-of-week balance: are both groups balanced on weekday/weekend?
  6. Segment balance: are key segments (mobile/desktop, new/returning) balanced?

**CUPED (Controlled-experiment Using Pre-Experiment Data):**
  Use pre-experiment metric as a covariate to reduce variance:
  Y_adjusted = Y - θ * (X - E[X])
  where X = pre-experiment value of the same metric
  θ = Cov(Y, X) / Var(X)
  Result: 20–60% variance reduction → need 20–60% fewer samples for same power
  This is used by Booking.com, Microsoft, Netflix in production.`,interview_tip:"SRM is a must-know for senior DS roles. If you detect SRM, you STOP the analysis — the results are unreliable. The sequence: 'Before I analyze any results, I always check SRM first. If the split ratio is off by more than a fraction of a percent, I treat the experiment as invalid and investigate the plumbing.'"}],practice_questions:[{q:"[Expedia Case] Expedia wants to test a new sponsored hotel placement on search results. Walk through the experiment design: randomization unit, sample size, duration, and pre-experiment checks.",a:`# Randomization unit: user_id
# Why: want consistent experience across sessions; user-level conversion is the metric
# Alternative: session-level (more traffic) but risks same user seeing both variants → contaminated

# Sample size:
from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

p_baseline = 0.05   # 5% sponsored ad CTR baseline (hypothetical)
p_mde      = 0.055  # want to detect 10% relative lift (0.5pp absolute)
effect = proportion_effectsize(p_mde, p_baseline)
n = NormalIndPower().solve_power(effect_size=effect, power=0.80, alpha=0.05)
print(f'n per group: {n:.0f}')  # ~12,000+

# Duration: minimum 2 weeks (capture weekly seasonality)
# If Expedia has ~5M unique users/week, 2-week window = plenty

# Metrics:
# Primary: sponsored CTR, sponsored booking rate, ad revenue
# Secondary: organic booking rate (should NOT decline — guardrail)
# Guardrail: page load time, bounce rate

# Pre-experiment:
# 1. AA test on the randomization
# 2. SRM check after first 24h
# 3. Verify organic rates are stable (control has same baseline as historical)`,say_aloud:"I'd start by asking: what's the primary metric and what's the MDE the business cares about? Then set randomization at user level for consistent experience. For sponsored ads specifically, I'd also track organic booking rate as a guardrail — the biggest risk is that sponsored listings cannibalize organic. If organic bookings drop in treatment, the product is a net negative for Expedia even if ad revenue goes up.",company:"Expedia",difficulty:"Hard"},{q:"Your experiment has been running for 3 days. You check the results: p=0.02, treatment is winning. Your PM says 'we have enough, let's ship!'. What do you do?",a:`# Do NOT ship. Two problems:

# Problem 1: PEEKING
# If we check before pre-specified stopping point and stop when p<0.05,
# our true Type I error is much higher than 5%.
# Simulation: if you peek daily and stop at p<0.05 → true α ≈ 22%!
# (Evan Miller / Johari et al paper on this exact problem)

# Problem 2: NOVELTY EFFECT + SEASONALITY
# 3 days doesn't capture weekly seasonality (Mon users ≠ Fri users)
# Could be inflated by novelty effect — new thing excitement
# Effect might decay by day 7-14

# What I tell the PM:
# 'We have a positive signal — exciting! But we need to run our
# pre-specified duration (2 weeks) for two reasons:
# 1. The current p-value isn't reliable because we peeked — our
#    stopping rule needs to be pre-committed to maintain α=0.05.
# 2. 3 days doesn't capture weekly patterns or potential novelty decay.
# Let's check again at day 14. If still significant, we ship with confidence.'

# If urgency is truly high: use sequential testing (O'Brien-Fleming)
# which allows valid early stopping with adjusted critical values`,say_aloud:"Peeking and stopping early is the most common mistake I see in practice. The p-value at day 3 isn't a valid test at α=0.05 — it's more like α=0.20 because we've already looked multiple times. The honest answer to the PM: 'We have a promising signal but the statistics aren't valid yet. We need to run the pre-specified duration.' If they push: offer sequential testing as a structured alternative.",company:"All / Expedia",difficulty:"Medium"},{q:"[Airbnb] You run an SRM check and find n_control=48,200, n_treatment=51,800. Expected was 50/50. p_srm=0.0001. What do you do?",a:`from scipy.stats import chisquare
import numpy as np

n_control, n_treatment = 48200, 51800
total = n_control + n_treatment
chi2, p_srm = chisquare(f_obs=[n_control, n_treatment],
                        f_exp=[total/2, total/2])
print(f'chi2={chi2:.1f}, p_srm={p_srm:.6f}')
# → chi2=144.0, p_srm << 0.05 → SRM confirmed

# The 3.6% imbalance (48.2 vs 51.8) is suspicious.
# DO NOT analyze primary metric results.

# Investigation steps:
# 1. Is there a logging bug? (some control events not being recorded)
# 2. Is bot traffic filtered differently between groups?
# 3. Is there a caching issue? (some users cached out of experiment)
# 4. Did the randomization hash collide? (bucketing bug)
# 5. Is the split truly 50/50 in the experiment config?

# Communication to PM:
# 'We detected a Sample Ratio Mismatch — the groups aren't the size we expected.
# This means the results aren't trustworthy. I need to investigate the plumbing
# before we can draw any conclusions. We may need to restart the experiment.'

# Rule: SRM = STOP. Do not report primary metric results.`,say_aloud:"SRM is a pre-analysis sanity check, not an afterthought. The moment I detect SRM, I stop — even if the primary metric looks great. A 3.6% imbalance could mean: one group has more engaged users, or the metric logging is broken, or bots are filtered differently. Any of these invalidates the result. The analysis is garbage until the plumbing is fixed.",company:"Airbnb / All",difficulty:"Medium"},{q:"Write Python to calculate: (1) required sample size for p_baseline=0.08, MDE=+1pp, α=0.05, power=80%. (2) How many days if daily traffic = 10,000 users and 50% are in experiment?",a:`from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

# (1) Sample size
p_base = 0.08
p_mde  = 0.09   # 1pp absolute lift
effect = proportion_effectsize(p_mde, p_base)   # Cohen's h ≈ 0.036
n = NormalIndPower().solve_power(
    effect_size=effect, power=0.80, alpha=0.05, ratio=1.0
)
print(f'n per group: {n:.0f}')  # ≈ 4,816
print(f'total n: {n*2:.0f}')   # ≈ 9,632

# (2) Days needed
daily_traffic = 10_000
fraction_exposed = 0.50
daily_in_experiment = daily_traffic * fraction_exposed  # 5,000
total_needed = n * 2
days = total_needed / daily_in_experiment
print(f'Days needed: {days:.1f}')  # ≈ 2 days (but run 14 for seasonality!)

# Note: even if statistically you need only 2 days,
# always run minimum 7-14 days for:
# - Weekly seasonality capture
# - Novelty effect check
# - Primacy effect check`,say_aloud:"Power calculation always comes before the experiment. Here: ~4,800 per group, ~9,600 total. With 5,000 daily experiment users, that's statistically 2 days — but I'd never stop at 2 days. Minimum 2 weeks to capture weekly seasonality and check for novelty effects. Sample size gives you the floor on n, but duration has additional requirements beyond just n.",company:"All",difficulty:"Medium"}],derivations:["Write the sample size formula from memory: n = 2(z_α/2 + z_β)² * p(1-p) / MDE²","What 3 factors increase required sample size? (lower baseline rate, smaller MDE, higher power)","Explain the randomization unit problem: why does session-level randomization inflate false positives?","What is CUPED? How does pre-experiment data reduce variance?","Walk through the pre-experiment checklist: AA test, SRM, baseline stability, coverage, day-of-week balance"],resources:[{name:"Optimizely Sample Size Calculator",url:"https://www.optimizely.com/sample-size-calculator/"},{name:"Microsoft: CUPED paper (variance reduction)",url:"https://exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf"},{name:"Booking.com: Controlled Experiments at Scale",url:"https://dl.acm.org/doi/10.1145/2487575.2488217"},{name:"SRM Checker tool",url:"https://lukasvermeer.nl/srm/"}]},cm={day:17,title:"Statistical Pitfalls & Multiple Testing",date_note:"Day 17 — Novelty effect, multiple comparisons, Simpson's paradox, and test validity",prev_day:16,next_day:18,week_label:"Week 3 — A/B Testing & Causal Inference",recap:{title:"Day 16 Recap — Experiment Design (5 min)",points:["Randomization unit ≥ analysis unit. User-level > session-level for consistency.","n = 2(1.96+0.84)² × p(1-p) / MDE². Smaller MDE or rare event → more samples.","Duration: always ≥ 2 weeks for weekly seasonality, even if n is reached sooner.","Pre-experiment: AA test → SRM check → baseline stability → coverage check.","CUPED uses pre-experiment data as covariate to reduce variance 20-60%."]},topics:[{title:"Multiple Testing Problem — The Hidden False Positive Inflator",color:"#EF4444",content:`**The problem:**
  If you test 20 metrics simultaneously at α=0.05:
  Expected false positives = 20 × 0.05 = 1 false positive on average
  P(at least one false positive) = 1 - (0.95)^20 ≈ 64%

  This is called FWER (Family-Wise Error Rate) inflation.

**Common scenarios where this hits you:**
  1. Testing primary + secondary + exploratory metrics simultaneously
  2. Running the same A/B test across multiple countries and treating each as independent
  3. Testing the same feature multiple times (after design changes)
  4. Looking at many subgroup analyses post-hoc

**Corrections:**

  Bonferroni (conservative):
  α_adjusted = α / m   (m = number of tests)
  If m=20, α=0.05: each test must have p < 0.0025 to be significant
  ✓ Controls FWER exactly. ✗ Very conservative — many false negatives.

  Benjamini-Hochberg (FDR — less conservative):
  Controls FDR (expected proportion of false positives among rejected tests)
  Steps: sort p-values, compare p_i ≤ (i/m)×α

  In Python:
  from statsmodels.stats.multitest import multipletests
  pvals = [0.001, 0.04, 0.03, 0.07, 0.02]
  reject, p_adj, _, _ = multipletests(pvals, alpha=0.05, method='fdr_bh')
  # reject = boolean array of which hypotheses are rejected after correction

**Practical company approach:**
  Pre-specify 1 primary metric (no correction needed for it)
  Pre-specify 2-3 secondary metrics (Bonferroni or FDR correction)
  Exploratory / post-hoc = hypothesis generating only, not decision-making
  'We found X in a post-hoc subgroup analysis → run a dedicated test to confirm'

**The dangerous pattern (data dredging / p-hacking):**
  Run experiment → look at 20 subgroups → find one with p=0.04 → report it
  This is p-hacking. Even with genuinely no effect, you'd expect 1 'significant' result.
  Solution: pre-register all analyses BEFORE seeing data.`,interview_tip:"When a Director asks 'what do you do if you find an interesting subgroup result?', the right answer is: 'I treat it as hypothesis-generating, not confirmatory. I report it as an exploratory finding and recommend running a dedicated experiment targeting that subgroup.' This shows you understand confirmation vs exploration."},{title:"Novelty Effect & Primacy Effect",color:"#F59E0B",content:`**Novelty effect:**
  Users engage MORE with something new simply because it's new, not because it's better.
  Results in inflated short-term treatment effect that decays over time.
  Example: new UI → 20% CTR lift in week 1 → 3% lift by week 4 → true steady-state effect = 3%

**Primacy effect (change aversion):**
  Users engage LESS with something new because they prefer the familiar.
  Results in depressed short-term effect that grows over time.
  Example: updated navigation → -5% engagement in week 1 → +8% by week 4 as users learn

**How to detect novelty/primacy effect:**
  import pandas as pd, matplotlib.pyplot as plt

  # Plot daily treatment effect over time
  daily_effects = (
      df.groupby(['date', 'assign'])['converted']
      .mean()
      .unstack()
      .assign(effect=lambda x: x['treatment'] - x['control'])
  )
  plt.plot(daily_effects.index, daily_effects['effect'])
  # Decreasing: novelty effect
  # Increasing: primacy effect
  # Flat: stable effect — reliable result

**How to handle novelty effect:**
  Option 1: Run experiment longer (4+ weeks)
  Option 2: Focus analysis on users who have been in experiment ≥ 7 days
             ('days since first exposure' cohort analysis)
  Option 3: Use holdback group — a long-term holdout to measure steady-state effect

**How to handle primacy effect:**
  Same as novelty: run longer or focus on mature cohort.
  For UI changes specifically: expect primacy in week 1, wait for learning curve.

**Key question to ask in interviews:**
  'Is this product one where users can adapt and learn? If yes, I'd expect primacy effects
  and run the experiment for at least 4 weeks before measuring.
  If it's a search result or recommendation (user sees it repeatedly), novelty is more likely.'`,interview_tip:"The novelty effect is specific to Expedia, Airbnb, Netflix interviews because these are high-frequency platforms where users return often. The interviewer from Expedia's team will know about it and expect you to bring it up proactively. Don't wait to be asked — say 'one concern I'd have is novelty effect, here's how I'd detect and handle it.'"},{title:"Simpson's Paradox in A/B Tests",color:"#8B5CF6",content:`**What it is:**
  A trend that appears in aggregated data REVERSES when the data is broken into subgroups.
  Can make a harmful treatment look beneficial (or vice versa).

**Classic example:**
  Overall: Treatment 55% conv > Control 50% conv → looks like treatment wins
  Mobile: Treatment 60% vs Control 65% → control wins!
  Desktop: Treatment 50% vs Control 55% → control wins!

  How can overall be treatment-wins when both segments show control-wins?
  ANSWER: Treatment group has more desktop users (high base rate)
          Control group has more mobile users (low base rate)
          → Group composition is different → misleading aggregate

**In A/B testing: when does this happen?**
  When randomization is not balanced across a confounding variable.
  Example: new feature rolled out on mobile first → treatment = mostly mobile users
  Even with 50/50 split, if mobile users have different behavior, you get Simpson's.

**How to detect it:**
  1. Compare segment distribution between control and treatment
  2. If distributions are different → you have confounding → check segment-level results
  3. Use a weighted analysis or stratified randomization to control for it

  from scipy.stats import chi2_contingency
  # Check if device distribution differs between groups
  contingency = pd.crosstab(df['assign'], df['device'])
  chi2, p, _, _ = chi2_contingency(contingency)
  if p < 0.05: print('Device distribution differs — check for Simpson\\'s Paradox')

**Fix: stratified randomization:**
  Ensure equal proportions of mobile/desktop/new/returning users in each group.
  In practice: use a hash function that conditions on user attributes.`,interview_tip:"Simpson's Paradox comes up in case studies where results look 'too good' or where you're asked to sanity-check an A/B test. The detective instinct: 'Let me look at the segment composition in each group' is the right starting point whenever you see a surprising aggregate result."},{title:"Network Effects & SUTVA Violations",color:"#06B6D4",content:`**SUTVA = Stable Unit Treatment Value Assumption:**
  Assumption: The treatment of unit A does not affect the outcome of unit B.
  Required for valid A/B testing at user level.

**When SUTVA is violated (network effects):**
  • Marketplace: if treatment users get better prices → supply is depleted for control users
  • Social network: treatment users connect with control users → control influenced by treatment
  • Recommendation: if treatment changes hotel ranking for treated users, those hotels get
    more bookings → less available for control users
  • Expedia: sponsored listing test → advertiser gets more visibility in treatment →
    may affect availability/pricing for all users

**How to detect SUTVA violation:**
  Increasing treatment effect as experiment runs longer (treatment spillover accumulates)
  Control group metrics change over time during experiment
  Comparison to holdback market: if holdback (geo without any treatment) performs
  differently from control in-experiment → contamination

**Solutions:**
  1. Geo-level (market-level) randomization — entire markets get treatment or control
     Eliminates spillover within market. Cost: fewer 'units' → lower power.
  2. Ego network clustering — randomize at the friend-cluster level
  3. Switchback design — alternate treatment/control over TIME (not users)
     Good for marketplace experiments. Requires careful carryover analysis.
  4. Smaller experiment — limit scope so spillover effects are negligible

**Expedia-specific example:**
  Testing a new booking incentive (discount): if treatment users get discounts → they
  book available rooms → reducing inventory for control users → control conversion drops.
  This UNDERESTIMATES the true treatment effect (control is harmed by treatment).
  Solution: geo-level holdout in markets that didn't receive the discount.`,interview_tip:"For Expedia Ads specifically: mention that sponsored listing experiments can create marketplace interference — a hotel that gets more views/bookings in treatment may become more expensive or fully booked, affecting control users. This distinction (user-level vs market-level effects) is exactly what the Director's team deals with."}],practice_questions:[{q:"[Reddit/Expedia] You run an A/B test on booking conversion and find overall treatment wins (+3pp, p=0.01). But when you segment by device: mobile shows -2pp and desktop shows -4pp, both significant. What happened? What do you report?",a:`# This is Simpson's Paradox.

# Step 1: Check group composition
print(df.groupby('assign')['device'].value_counts(normalize=True))
# Likely: treatment has more desktop users (high base rate)
# Control has more mobile users (low base rate)

# Step 2: Within-segment results
for device in ['mobile', 'desktop']:
    subset = df[df['device'] == device]
    t = subset[subset['assign']=='treatment']['converted'].mean()
    c = subset[subset['assign']=='control']['converted'].mean()
    print(f'{device}: treatment={t:.3f}, control={c:.3f}, diff={t-c:.3f}')

# Step 3: Verify composition imbalance
from scipy.stats import chi2_contingency
table = pd.crosstab(df['assign'], df['device'])
chi2, p, _, _ = chi2_contingency(table)
print(f'Composition chi2 p={p:.4f}')

# Conclusion to report:
# 'We have a Simpson's Paradox: overall appears positive but BOTH segments show negative.
# The treatment group was inadvertently overweighted toward desktop users who have
# higher baseline conversion. The true effect is negative on both device types.
# I recommend NOT shipping. We should also investigate the randomization
# to understand why composition differs between groups.'`,say_aloud:"Whenever aggregate and segment results disagree, I check for Simpson's Paradox. Segment composition analysis first — if mobile/desktop split differs between groups, that explains the paradox. The true effect is in the segments. In this case, both segments are negative → the feature is harmful and should not ship despite the positive aggregate.",company:"Reddit / Expedia",difficulty:"Hard"},{q:"[All] You run 5 A/B tests simultaneously using the same user pool. Each test has primary and 3 secondary metrics. Total = 20 tests. How do you control false positives?",a:`from statsmodels.stats.multitest import multipletests

# The problem:
# 20 tests at α=0.05 → E[false positives] = 1
# P(at least 1 false positive) = 1 - 0.95^20 ≈ 64%

# Recommended approach:
# 1. For each experiment's PRIMARY metric: no correction needed
#    (pre-specified, 1 test per experiment → intact α)
# 2. For SECONDARY metrics within each experiment: use FDR correction
# 3. For EXPLORATORY post-hoc analyses: no correction, but report as hypothesis only

# Example: one experiment, 4 metrics
p_values = [0.03, 0.04, 0.06, 0.001]  # 4 metrics in one experiment
reject, p_adj, _, _ = multipletests(p_values, alpha=0.05, method='fdr_bh')
for i, (r, pa) in enumerate(zip(reject, p_adj)):
    print(f'Metric {i+1}: reject={r}, adj_p={pa:.4f}')

# Best practice in practice:
# - Pre-register all metrics and analysis plan BEFORE experiment starts
# - Primary metric: 1 metric, no adjustment
# - Secondary: Bonferroni or BH on pre-specified list
# - Exploratory: report but don't make shipping decisions from them`,say_aloud:"The multiple testing problem is a silent killer of experiment validity. My approach: treat the primary metric as sacrosanct — no correction needed for it because it's 1 test. Apply FDR correction to secondary metrics. Never make decisions from post-hoc exploratory analyses — those are hypothesis generators that need dedicated follow-up tests.",company:"All",difficulty:"Medium"},{q:"[Expedia] You run a hotel ranking algorithm test and notice: control group booking rate DECREASES during the experiment. Treatment group is stable. What could cause this?",a:`# Possible causes — this looks like a SUTVA violation / spillover:

# Hypothesis 1: Treatment diverts bookings from control
# Treatment users see better-ranked hotels → book those hotels
# Those hotels get more bookings → fewer available for control users
# Control group: the best hotels are now 'taken' by treatment users
# → Control booking rate drops

# Hypothesis 2: Control group cannibalization
# If 'best' hotels are in both groups' results but treatment users book faster
# → Hotel becomes less available / more expensive for control users

# Hypothesis 3: Externality / seasonal shift
# External event (price increase, school holiday end) reduces overall demand
# If treatment and control are different time periods this would show up

# Detection:
# 1. Check if control rate is below historical pre-experiment baseline
# 2. Check if hotel availability/prices are changing during experiment
# 3. Compare holdback market (no experiment) vs control group rate

# Fix:
# 1. Geo-level randomization: entire markets get treatment OR control
# 2. This isolates marketplace effects to their own market
# 3. Accepts lower power in exchange for valid causal estimate

print('Recommendation: switch to geo-level randomization for marketplace experiments')`,say_aloud:"A decreasing control group rate is a red flag — something is contaminating the control. The most likely cause in a marketplace like Expedia: treatment users are 'taking' the good options, leaving less for control users. This is a SUTVA violation. The fix is geo-level randomization — entire markets get one variant, eliminating within-market cross-contamination.",company:"Expedia",difficulty:"Hard"},{q:"What's the difference between Bonferroni correction and FDR (Benjamini-Hochberg)? When would you use each?",a:`# Bonferroni correction:
# Controls Family-Wise Error Rate (FWER)
# P(any false positive across all tests) ≤ α
# Method: α_adjusted = α / m
# Example: m=10 tests, α=0.05 → each test needs p < 0.005
# ✓ Most conservative, rigorous
# ✗ Very low power when m is large — many false negatives
# Use when: false positives are very costly (clinical trials, financial decisions)

# Benjamini-Hochberg (FDR):
# Controls False Discovery Rate (FDR)
# E[false positives / all positives] ≤ α
# More lenient — allows some false positives, but controls their PROPORTION
# Method: sort p-values p_1 ≤ p_2 ≤ ... ≤ p_m
#         find largest k where p_k ≤ (k/m) × α
#         reject all p_1 through p_k
# ✓ Higher power than Bonferroni, still controls false positives
# Use when: exploratory analysis, large-scale testing, secondary metrics

from statsmodels.stats.multitest import multipletests
p_values = [0.001, 0.02, 0.03, 0.06, 0.09]

_, bonf_adj, _, _ = multipletests(p_values, method='bonferroni', alpha=0.05)
_, bh_adj, _, _ = multipletests(p_values, method='fdr_bh', alpha=0.05)

import pandas as pd
results = pd.DataFrame({'raw': p_values, 'bonferroni': bonf_adj, 'fdr_bh': bh_adj})
results['bonf_reject'] = results['bonferroni'] < 0.05
results['bh_reject'] = results['fdr_bh'] < 0.05
print(results)
# BH typically rejects more tests than Bonferroni → higher power`,say_aloud:"Bonferroni is the strictest: 'I want zero chance of any false positive.' FDR is more practical: 'I'm okay with up to 5% of my positives being false.' For product experiments at scale, FDR is usually right — we're doing exploratory analysis and can follow up on promising signals. For a single high-stakes primary metric, Bonferroni or no correction (it's just one test) is appropriate.",company:"All",difficulty:"Medium"}],derivations:["Why does running 20 tests at α=0.05 give ~64% chance of at least one false positive?","What is the Bonferroni correction formula? When does it fail (produce too many false negatives)?","How do you detect novelty effect from time-series data? What mitigation strategies exist?","Describe a Simpson's Paradox scenario in A/B testing. How do you detect and resolve it?","What is SUTVA? Give one concrete example of SUTVA violation at a marketplace like Expedia."],resources:[{name:"Evan Miller: How Not To Run an A/B Test (peeking)",url:"https://www.evanmiller.org/how-not-to-run-an-ab-test.html"},{name:"Airbnb: Interference in Experimentation",url:"https://medium.com/airbnb-engineering/interference-in-experimentation-c7a3c09c0dae"},{name:"StatsModels multipletests docs",url:"https://www.statsmodels.org/stable/generated/statsmodels.stats.multitest.multipletests.html"},{name:"Lukas Vermeer: SRM Checker",url:"https://lukasvermeer.nl/srm/"}]},um={day:18,title:"Causal Inference — DiD, Pre-Post & Regression Discontinuity",date_note:"Day 18 — When you can't randomize: quasi-experimental methods",prev_day:17,next_day:19,week_label:"Week 3 — A/B Testing & Causal Inference",recap:{title:"Day 17 Recap — Pitfalls (5 min)",points:["Multiple testing: 20 tests at α=0.05 → 64% chance of ≥1 false positive. Use FDR/Bonferroni.","Novelty effect: inflated short-term effect that decays. Detect with daily effect plot.","Simpson's Paradox: aggregate and segment results disagree due to composition imbalance.","SUTVA violation: treatment of one unit affects another. Fix: geo-level randomization.","Today: when A/B test is impossible — DiD, pre-post, regression discontinuity."]},topics:[{title:"Why A/B Tests Aren't Always Possible",color:"#6366F1",content:`**Situations where randomized A/B testing is infeasible or unethical:**
  1. Policy changes: a new pricing algorithm applied to all users simultaneously
  2. Network effects: can't isolate treatment/control when users interact
  3. External events: measuring effect of a competitor's action or a market event
  4. Legal/ethical: can't randomly assign users to different prices in some jurisdictions
  5. Small population: only one 'treated' entity (e.g., one country rolls out a feature)
  6. Retrospective analysis: data already collected, no randomization was done

**The causal inference toolkit:**
  • Difference-in-Differences (DiD) — Expedia Director's specialty
  • Pre-Post analysis (simple but assumption-heavy)
  • Regression Discontinuity Design (RDD)
  • Synthetic Control (for policy changes)
  • Instrumental Variables (IV)
  • Propensity Score Matching
  • Double ML (Amy's expertise — bridge to your interview!)

**The fundamental causal inference problem:**
  For any unit i, we only observe ONE potential outcome:
  Y_i(1) if treated, OR Y_i(0) if not treated
  We can never observe the counterfactual (what would have happened otherwise)
  All causal methods are trying to estimate the counterfactual.`,interview_tip:"The Director's background is heavily causal inference — DiD, pre-post, and product analytics. Bridge to your own experience: 'In my Double ML work, I faced the same challenge — I couldn't randomize marketing exposure, so I used a two-stage residualization approach that's analogous to what DiD does at a cohort level.' This shows you understand the WHY of causal methods."},{title:"Difference-in-Differences (DiD) — The Director's Specialty",color:"#8B5CF6",content:`**What it is:**
  Compare the CHANGE in outcome for treated group (before/after) MINUS the CHANGE
  for a control group (before/after). Differences out time trends.

**Formula:**
  DiD = (Y_treat_after - Y_treat_before) - (Y_control_after - Y_control_before)

  Equivalently:
  DiD = (Y_treat_after - Y_control_after) - (Y_treat_before - Y_control_before)

**Why it works — parallel trends assumption:**
  Key assumption: in the absence of treatment, the treated and control groups would have
  followed the same trend over time.
  This is UNTESTABLE during the treatment period — but you can provide evidence from
  pre-treatment periods (placebo tests).

**Python implementation:**
  import pandas as pd
  import statsmodels.formula.api as smf

  # Standard DiD regression:
  # Y = α + β₁×treated + β₂×post + β₃×(treated×post) + ε
  # β₃ is the DiD estimate = causal effect of treatment

  # Simulated data
  import numpy as np
  np.random.seed(42)
  n = 1000
  df = pd.DataFrame({
      'treated': np.random.binomial(1, 0.5, n),
      'post': np.random.binomial(1, 0.5, n),
      'noise': np.random.normal(0, 1, n)
  })
  true_effect = 3.0
  df['Y'] = (2 + 1.5*df['treated'] + 2*df['post']
             + true_effect * df['treated'] * df['post']
             + df['noise'])

  model = smf.ols('Y ~ treated + post + treated:post', data=df).fit()
  print(model.summary())
  # Coefficient on 'treated:post' = DiD estimate ≈ 3.0

**DiD assumptions:**
  1. Parallel trends: treated and control would move together absent treatment
  2. SUTVA: treatment of treated units doesn't affect control units
  3. No anticipation: treated units don't change behavior BEFORE treatment starts
  4. Stable composition: same units (or representative) in both periods

**Testing parallel trends (placebo test):**
  Check if treated and control were moving in parallel BEFORE treatment.
  Run DiD using only pre-treatment periods — should find DiD ≈ 0.
  If DiD is significant in pre-period → parallel trends violated → DiD is biased.`,interview_tip:"The Director's LinkedIn literally says 'pre-post analysis and difference-in-differences (DiD)'. Walk through the formula and assumptions. The critical thing to mention: parallel trends is an ASSUMPTION you can't fully test — but you can provide evidence from pre-treatment periods. Saying 'I'd run a placebo test using only pre-treatment data to verify parallel trends' is a very strong answer."},{title:"Pre-Post Analysis — Simple but Dangerous",color:"#F59E0B",content:`**What it is:**
  Compare the same group's outcome BEFORE vs AFTER a change.
  DiD = special case where you subtract away time trend using a control group.
  Pre-post WITHOUT a control group is simpler but much weaker.

**When pre-post is used:**
  • Single market rollout (no control market)
  • Phased launch where everyone eventually gets treatment
  • Quick sanity check before a full DiD

**Why pre-post WITHOUT a control is problematic:**
  1. Time trends: maybe bookings went up because of seasonality, not your change
  2. External events: competitor dropped prices, Google algorithm changed
  3. Mean reversion: you typically test after a bad period — it would have improved anyway
  4. Maturation: users naturally become more experienced over time

**Implementation:**
  import pandas as pd
  from scipy.stats import ttest_ind

  pre  = df[df['period']=='pre']['metric']
  post = df[df['period']=='post']['metric']
  t, p = ttest_ind(pre, post)
  print(f't={t:.3f}, p={p:.4f}')
  diff_means = post.mean() - pre.mean()
  print(f'Change: {diff_means:.4f}')

**When pre-post IS valid:**
  When you have a 'control time series' (DiD):
  → Same dates, different market that wasn't treated
  → Or another product/feature that wasn't changed

**Regression to the mean trap:**
  You tried a new feature in your worst-performing markets.
  After launch, those markets improved.
  Was it your feature, or natural mean reversion?
  DiD with stable markets as control group would answer this.`,interview_tip:"When asked about pre-post analysis, always follow up with: 'The key threat to validity is confounding time trends — was the change due to the intervention or other factors? If I have a control group that also wasn't treated, I'd upgrade to DiD which removes the time trend. If I don't have a control, I'd use an interrupted time series approach to model the trend and test for a structural break.'"},{title:"Regression Discontinuity Design (RDD)",color:"#10B981",content:`**What it is:**
  Exploit a threshold/cutoff rule to estimate causal effects.
  Treatment is assigned based on whether a running variable X crosses a threshold c.
  Just below c = control. Just above c = treatment. Units near c are similar.

**Example in Expedia/Travel:**
  Loyalty program: users with ≥10 bookings get 'Gold' status → perks.
  Want to measure: does Gold status increase future bookings?
  RDD: compare users with 9 bookings (just below) vs 11 bookings (just above).
  These users are very similar — the only difference is the status.

**Key assumptions:**
  1. Manipulation: users can't precisely control whether they're just above/below threshold
  2. Continuity: all other factors are continuous through the threshold
  3. No bunching: don't see unusual clustering of observations just above the threshold
     (would indicate manipulation)

**Implementation:**
  import numpy as np, pandas as pd, matplotlib.pyplot as plt
  from sklearn.linear_model import LinearRegression

  def rdd_estimate(df, running_var, outcome, cutoff, bandwidth):
      local = df[np.abs(df[running_var] - cutoff) <= bandwidth].copy()
      local['treated'] = (local[running_var] >= cutoff).astype(int)
      local['x_centered'] = local[running_var] - cutoff

      # Fit separate lines on each side of cutoff
      left  = local[local['treated']==0]
      right = local[local['treated']==1]

      from numpy.polynomial import polynomial as P
      left_fit  = np.polyfit(left['x_centered'],  left[outcome],  1)
      right_fit = np.polyfit(right['x_centered'], right[outcome], 1)

      # RDD estimate = predicted value at cutoff from right minus from left
      rdd = np.polyval(right_fit, 0) - np.polyval(left_fit, 0)
      return rdd

**Bandwidth selection:**
  Too narrow: few observations, high variance
  Too wide: includes units that are less comparable
  Optimal bandwidth: Imbens-Kalyanaraman (IK) optimal bandwidth
  Rule of thumb: start with +/- 20% of the cutoff value, check robustness`,interview_tip:"RDD is elegant but requires the threshold to be real and not manipulable. If someone mentions a program threshold ('users who score above X get the intervention'), RDD should immediately come to mind. Key question to ask: 'Do people know about the threshold? If yes, they might manipulate to just-above it, which violates the key assumption.'"}],practice_questions:[{q:"[Expedia Director's specialty] Expedia rolls out a new checkout optimization to all users in the US on March 1. Canada doesn't get the change. How do you measure the causal impact?",a:`# Difference-in-Differences setup
import pandas as pd
import statsmodels.formula.api as smf

# Data structure:
# - Daily booking rates for US (treated) and Canada (control)
# - Pre-period: Jan-Feb. Post-period: March onward.

# Step 1: Check parallel trends (before March)
# Plot US and Canada booking rate trends Jan-Feb → should be parallel

# Step 2: Run DiD regression
# Y = α + β₁×US + β₂×post + β₃×(US×post) + ε
# β₃ = causal effect of the checkout optimization

model = smf.ols('booking_rate ~ C(country) + C(post) + C(country):C(post)',
                data=df).fit()
print(model.params['C(country)[T.US]:C(post)[T.1]'])  # DiD estimate

# Step 3: Validity checks
# - Parallel trends test: run DiD on pre-period only → should be ≈ 0
# - Check for other US-specific events in March
# - Placebo test: use a metric that shouldn't be affected (page load time?)

# Step 4: Communicate
# 'The checkout optimization increased booking rate by X pp in the US,
# controlling for trends shared with Canada. Key assumption: parallel trends
# — I validated this by checking the pre-period showed no systematic gap.'`,say_aloud:"This is a classic DiD setup — US is treated, Canada is control. The key assumption: US and Canada would have followed the same trend in March if we hadn't launched. I'd visualize pre-period trends to provide evidence of this. The DiD regression directly gives me the causal estimate with a confidence interval. I'd also run a placebo DiD on the pre-period data to confirm β₃ ≈ 0 pre-treatment.",company:"Expedia",difficulty:"Hard"},{q:"What is the parallel trends assumption in DiD? How do you test it? What happens if it's violated?",a:`# Parallel trends assumption:
# 'In the absence of treatment, the treated and control groups would have
# followed the same trend over time.'

# Why it's critical:
# DiD removes the TIME trend by subtracting control's change.
# If control's trend ≠ what treated's trend would have been → biased estimate.

# How to TEST (provide evidence, not prove):
# 1. Placebo test: run DiD using ONLY pre-treatment periods
#    Split pre-period in half: 'fake treatment' at period T-1
#    If DiD is significant in fake period → trends were diverging → parallel trends violated

# 2. Visual inspection: plot both groups' trends from long before treatment
#    Do they move together historically? Do they diverge just before treatment?

# 3. Event study: estimate DiD at each pre-treatment time point
#    Should all be ≈ 0 before treatment, then diverge at treatment date
import numpy as np, matplotlib.pyplot as plt
# Plot coefficient of treated×time_dummy for each period
# Pre-period: should cluster near 0
# Post-period: should show the treatment effect

# What if violated:
# DiD estimate is BIASED.
# Example: US was already improving faster than Canada before March →
# DiD overstates the checkout optimization's effect.
# Remedies:
# 1. Use a more similar control group
# 2. Use synthetic control (build a weighted 'synthetic US' from multiple controls)
# 3. Include time trends interacted with group (DiD with heterogeneous trends)
# 4. Accept the bias but bound the estimate`,say_aloud:"Parallel trends is the central assumption of DiD and you can never fully prove it. What you can do: provide evidence from pre-treatment periods. Run an event study. Use placebo regressions. The intellectual honesty answer: 'I can provide evidence consistent with parallel trends, but I acknowledge it's an assumption. Here's how I'd test robustness.' That's what the Director wants to hear.",company:"Expedia / All",difficulty:"Hard"},{q:"[General] Your team can't run an A/B test because a new pricing policy was applied to all users simultaneously. Your manager wants to know: did it increase bookings? Walk through your analysis approach.",a:`# Step 1: Frame the causal question
# What would bookings have been WITHOUT the pricing change?
# This is the counterfactual we need to estimate.

# Step 2: Identify control group candidates
# Option A: Another market/country that wasn't affected → DiD
# Option B: A segment of users not affected (e.g., enterprise accounts) → DiD
# Option C: No obvious control → Interrupted Time Series (ITS)

# Option C: Interrupted Time Series
from statsmodels.formula.api import ols
import numpy as np

# Model: Y_t = α + β₁×t + β₂×D_t + β₃×(D_t × t) + ε
# D_t = 1 after policy change, 0 before
# β₂ = immediate level change at intervention
# β₃ = change in SLOPE (trend) after intervention

# If β₂ > 0 → immediate jump in bookings at policy change
# If β₃ > 0 → bookings growing faster post-change
# Need autocorrelation correction for time series (Newey-West SE)

# Step 3: Validity checks
# Check for external events on the same date (competitor news, seasonality)
# Look at comparable metrics that shouldn't be affected → placebo

# Step 4: Communicate uncertainty
# 'Without a control group, this analysis cannot prove causality.
# It shows correlation with timing. To strengthen the claim:
# look for any market or segment we can use as a comparison group.'`,say_aloud:"When there's no control group, my first move is to find one — another market, another segment, another time period. If truly none exists, I use Interrupted Time Series which models the pre-treatment trend and tests for a structural break. I always communicate clearly: 'This provides evidence of association with timing, not proof of causality. Here's what would strengthen the causal claim.'",company:"All",difficulty:"Hard"},{q:"How is DiD related to Double ML? How would you bridge your Double ML experience to a question about DiD?",a:`# Bridge explanation:

# DiD: removes confounding from TIME trends by using a control group
# Double ML: removes confounding from HIGH-DIMENSIONAL COVARIATES using ML residualization

# Both are answers to the same fundamental problem:
# 'We can't randomize. How do we estimate a causal effect?'

# DiD insight: confounding = time trend shared by treated + control
# Control for it: subtract control's trend from treated's trend
# Key assumption: parallel trends (time is the only confounder)

# Double ML insight: confounders are many observed covariates (user demographics,
# prior behavior, market conditions)
# Control for them: regress both treatment and outcome on covariates using ML,
# take residuals, regress residuals on each other → causal estimate
# Key assumption: conditional independence (all confounders are observed)

# How to bridge in interview:
# 'In my marketing incrementality work, I faced the same challenge as DiD:
# we couldn't randomize ad exposure. The difference: my confounders were
# high-dimensional user features, not just a time trend. I used Double ML
# where the first stage residualizes out the confounders using gradient boosting.
# Conceptually it's the same insight as DiD: remove confounding, then estimate
# the causal effect from what's left.'

# Key formula bridge:
# DiD: ATT = (Ȳ_treat_post - Ȳ_treat_pre) - (Ȳ_ctrl_post - Ȳ_ctrl_pre)
# Double ML: θ = E[(Ỹ)(D̃)] / E[(D̃)²]
# where Ỹ = residuals from E[Y|X], D̃ = residuals from E[D|X]`,say_aloud:"This bridge is my strongest card in the Expedia interview. Both DiD and Double ML solve the same problem — causal estimation without randomization — using different strategies for different confounding structures. DiD is for time trends. Double ML is for observed covariate confounding. Mentioning this shows the Director that my Amazon experience is directly relevant to his team's work.",company:"Expedia",difficulty:"Hard"}],derivations:["Write the DiD formula from memory. Which coefficient in the regression gives the causal estimate?","What is the parallel trends assumption? How do you test it with a placebo regression?","What is the fundamental problem of causal inference? Why can't we observe the counterfactual?","How does Double ML relate to DiD conceptually? (Bridge your experience to this question)","When would you use RDD instead of DiD? What's the key assumption of RDD?"],resources:[{name:"Scott Cunningham: Causal Inference — The Mixtape (free online)",url:"https://mixtape.scunning.com/"},{name:"Nick Huntington-Klein: The Effect (DiD chapter, free online)",url:"https://theeffectbook.net/ch-DifferenceinDifference.html"},{name:"Callaway & Sant'Anna: Difference-in-Differences with Multiple Time Periods",url:"https://doi.org/10.1016/j.jeconometrics.2020.12.001"},{name:"DoubleML Python package",url:"https://docs.doubleml.org/stable/index.html"}]},pm={day:19,title:"Incrementality & Attribution — Expedia Ads Focus",date_note:"Day 19 — iROAS, ghost ad holdouts, attribution models, and Double ML",prev_day:18,next_day:20,week_label:"Week 3 — A/B Testing & Causal Inference",recap:{title:"Day 18 Recap — Causal Inference (5 min)",points:["DiD = (treat_after - treat_before) - (ctrl_after - ctrl_before). Removes time trend.","Key assumption: parallel trends. Test with pre-period placebo regression.","Pre-post without control = weak. Time trends, external events, mean reversion all threaten validity.","RDD: exploit threshold cutoffs. Key assumption: no manipulation of running variable.","Double ML bridge: removes high-dimensional covariate confounding via ML residualization."]},topics:[{title:"Attribution vs Incrementality — The Core Distinction",color:"#EF4444",content:`**Attribution:** Who was present at conversion?
  → Last-touch: credit the last ad seen before purchase
  → First-touch: credit the first ad in the journey
  → Linear: split credit equally across all touchpoints
  → Time-decay: credit decreases the further from conversion
  → Data-driven: ML-based, estimates contribution of each touchpoint

**Incrementality:** Did the ad CAUSE the conversion?
  → Counterfactual question: would this user have booked ANYWAY without seeing the ad?
  → True incremental lift = (bookings with ad) - (bookings that would have occurred without ad)

**Why attribution ≠ incrementality (the umbrella story):**
  Imagine advertising to people who always carry umbrellas when it rains.
  Your ad shows up before they buy the umbrella.
  Attribution credits your ad with the umbrella sale.
  But they would have bought it anyway — your ad had ZERO incremental effect.

  In travel: users who are already highly intent to book Expedia (returning users,
  direct-type users) may get served ads, then book. Attribution gives the ad credit.
  But they were going to book regardless. iROAS = 0 despite high attributed ROI.

**When attribution overstates effectiveness:**
  • Ads targeting existing customers (would convert anyway)
  • Retargeting (targeting users who already showed high intent)
  • Bottom-funnel ads (brand searches near conversion)

**When attribution understates effectiveness:**
  • Upper-funnel/brand awareness ads (credit goes to last-touch, not to awareness)
  • Assisted conversions (drove early research, didn't get credit)

**Key line for the interview:**
  'Attribution tells you WHO was there at conversion.
  Incrementality tells you IF the ad CAUSED the conversion.
  These answer different questions. Advertisers who optimize on attribution
  will often overspend on retargeting and underspend on prospecting.'`,interview_tip:"This distinction is central to Expedia's sponsored ads team. The Director needs to convince hotel advertisers that sponsored listings drive INCREMENTAL bookings, not just attributed bookings. If you say this in the interview, you're speaking the language of their core business problem."},{title:"iROAS — Incremental Return on Ad Spend",color:"#8B5CF6",content:`**Formula:**
  iROAS = Incremental Revenue / Ad Spend
  Incremental Revenue = (bookings driven by ad) × avg_booking_value
  = (booking_rate_exposed - booking_rate_holdout) × n_exposed × avg_booking_value

**Platform-level iROAS (Expedia's question):**
  'Does running sponsored listings increase total Expedia bookings?'
  Experiment: A/B test where control sees NO sponsored listing.
  Platform_iROAS = extra bookings in treatment / revenue paid by advertisers

**Advertiser-level iROAS (hotel's question):**
  'Do my sponsored ads actually drive incremental bookings for my hotel?'
  Requires ghost ad holdout (see below).
  Advertiser_iROAS = (bookings_exposed - bookings_holdout) × booking_value / ad_spend

**Python: compute platform-level iROAS from A/B test:**
  # Experiment results
  n_control, n_treatment = 50000, 50000
  bookings_control   = 4800
  bookings_treatment = 5200  # 400 extra bookings
  avg_booking_value  = 350   # dollars
  ad_revenue_collected = 50000  # from advertisers in treatment group

  incremental_bookings = bookings_treatment - bookings_control
  incremental_revenue  = incremental_bookings * avg_booking_value
  iroas = incremental_revenue / ad_revenue_collected

  print(f'Incremental bookings: {incremental_bookings}')
  print(f'Incremental revenue: \${incremental_revenue:,}')
  print(f'Platform iROAS: {iroas:.2f}x')
  # iROAS = 400 × $350 / $50,000 = $140,000 / $50,000 = 2.8x
  # Every $1 of ad spend drove $2.80 of incremental booking revenue

**What is a 'good' iROAS?**
  Depends on Expedia's commission rate (say 15%):
  Revenue from incremental booking = booking_value × commission_rate
  Break-even: revenue_from_increment = ad_spend → iROAS × commission = 1
  For 15% commission, break-even iROAS = 1/0.15 ≈ 6.7x
  → Platform is profitable if every $1 of ad spend generates >$6.70 of booking value`,interview_tip:"iROAS is the KPI for the sponsored ads team. Walking through the formula and break-even analysis in a case study signals you understand ad business economics, not just statistics. The Director's team is focused on 'driving double digit YoY growth on product profit' — this calculation is exactly what they optimize."},{title:"Ghost Ad Holdout — Measuring Advertiser Incrementality",color:"#10B981",content:`**The problem with standard A/B for advertiser incrementality:**
  Standard A/B: control = no ads, treatment = ads shown.
  This measures PLATFORM incrementality (Expedia's revenue).
  But: a user in treatment who clicks and books — would they have found the hotel
  organically and booked anyway?
  Attribution says: yes, the ad gets credit.
  True incrementality: unknown without a holdout.

**Ghost ad holdout (also called 'ghost ad' or 'ad slot holdout'):**
  Within the TREATMENT group (users who would see an ad), randomly show:
  • Real ad to 90% of users (exposed)
  • Empty/ghost ad slot to 10% of users (holdout)
  Both groups are already in the 'treated' population.
  The ONLY difference: whether they saw the real ad or a blank slot.
  Comparison: booking rate (exposed) vs booking rate (holdout) = incremental lift

**Why ghost ad is more valid than treatment vs control:**
  • Both exposed and holdout users are in the same 'eligible' population
  • No difference in underlying intent between the two groups
  • Isolates the effect of seeing the specific ad (not just being in the experiment)

**Python: ghost ad analysis:**
  import pandas as pd
  from scipy.stats import proportions_ztest

  # Users in treatment group only
  treatment_users = df[df['experiment_group'] == 'treatment']
  exposed  = treatment_users[treatment_users['saw_ad'] == True]
  holdout  = treatment_users[treatment_users['saw_ad'] == False]

  k_exp = exposed['booked'].sum()
  n_exp = len(exposed)
  k_hld = holdout['booked'].sum()
  n_hld = len(holdout)

  z, p = proportions_ztest([k_exp, k_hld], [n_exp, n_hld])
  lift  = k_exp/n_exp - k_hld/n_hld
  iroas = lift * n_exp * 350 / exposed['ad_cost'].sum()  # advertiser iROAS
  print(f'Incremental lift: {lift:.4f}, p={p:.4f}, iROAS={iroas:.2f}x')

**Size of holdout:**
  Small holdout (5-10%) → large exposed group, high power, but small holdout sample
  Trade-off: enough holdout users to detect lift, but don't sacrifice too many ad impressions`,interview_tip:"Ghost ad holdout is a sophisticated concept that most DS candidates don't know. Bringing it up unprompted in the Expedia case study would be a standout moment. The key insight: the ghost slot ensures both groups have the same INTENT and eligibility — the only difference is whether the ad was shown."},{title:"Attribution Models — From Simple to Data-Driven",color:"#F59E0B",content:`**Last-touch attribution:**
  100% credit to the last ad before conversion.
  Easy to implement. Biased toward bottom-funnel (retargeting, brand search).

**First-touch attribution:**
  100% credit to the first ad in the journey.
  Good for measuring awareness campaigns. Ignores conversion path.

**Linear attribution:**
  Credit split equally across all touchpoints.
  More fair. Doesn't account for different touchpoint values.

**Time-decay attribution:**
  Credit increases closer to conversion (exponential decay backward).
  Intuition: recent touchpoints are more decision-relevant.

**Data-driven attribution (DDA — Google/Meta approach):**
  Use ML to learn the marginal contribution of each touchpoint.
  Approach 1: Shapley values — game-theoretic fair allocation
  Approach 2: Counterfactual models — remove each touchpoint, see what drops
  Approach 3: Markov chain model — transition probabilities through funnel

**Python: Shapley value for simple attribution:**
  from itertools import combinations

  def shapley_attribution(channels, conversion_rates):
      '''channels = list of touchpoints
         conversion_rates = dict mapping frozenset → conversion rate'''
      n = len(channels)
      values = {}
      for i, ch in enumerate(channels):
          shapley = 0
          others = [c for c in channels if c != ch]
          for r in range(len(others)+1):
              for subset in combinations(others, r):
                  S = frozenset(subset)
                  S_with = frozenset(subset + (ch,))
                  marginal = conversion_rates.get(S_with,0) - conversion_rates.get(S,0)
                  weight = (len(S) * (n - len(S) - 1) + (n-1)) ** -1  # simplified
                  # actually weight = |S|!(n-|S|-1)!/n!
                  shapley += marginal
          values[ch] = shapley / n
      return values

**Why incrementality > attribution for decision-making:**
  Attribution answers 'who touched this conversion?'
  Incrementality answers 'who CAUSED this conversion?'
  For budget allocation, only incrementality tells you where to actually invest.`,interview_tip:"If the interviewer asks 'how would you evaluate whether a hotel's sponsored listing is working?', the progression they want to hear is: (1) attribution is a start but overstates impact, (2) ghost ad holdout measures true incrementality, (3) iROAS = incremental revenue / ad spend is the KPI, (4) break-even analysis determines if it's profitable for Expedia."}],practice_questions:[{q:"[Expedia Ads — Core Case] A hotel advertiser asks: 'I spent $50,000 on Expedia sponsored listings last month. Did it actually drive incremental bookings?' How do you measure this? Walk through the full approach.",a:`# Step 1: Set up ghost ad holdout experiment
# Within users eligible to see this hotel's ad:
#   - 90% see the real ad (exposed group)
#   - 10% see an empty slot (holdout group)
# Both groups have the SAME intent and eligibility → only difference is the ad

import pandas as pd
from scipy.stats import proportions_ztest
import numpy as np

# Hypothetical results
n_exposed = 90000
n_holdout = 10000
booked_exposed = 4500  # 5.0% booking rate
booked_holdout = 4200  # 4.2% booking rate  (wait — different denom)
booked_holdout = 420   # 4.2% of 10,000

# Step 2: Statistical test
z, p = proportions_ztest([booked_exposed, booked_holdout],
                         [n_exposed, n_holdout])
lift = booked_exposed/n_exposed - booked_holdout/n_holdout
print(f'Lift: {lift:.4f}, z={z:.2f}, p={p:.4f}')
# Lift = 5.0% - 4.2% = 0.8pp

# Step 3: Calculate iROAS
incremental_bookings = lift * n_exposed  # 720 extra bookings
avg_booking_value = 300  # $300/booking (advertiser revenue)
incremental_revenue = incremental_bookings * avg_booking_value  # $216,000
ad_spend = 50000
iroas = incremental_revenue / ad_spend
print(f'Incremental bookings: {incremental_bookings:.0f}')
print(f'iROAS: {iroas:.1f}x')  # $216k / $50k = 4.3x

# Step 4: Communicate to advertiser
# 'Your sponsored listing drove ~720 incremental bookings.
# At $300 avg booking value, that's $216K revenue for $50K spend = 4.3x iROAS.
# This exceeds your target of 3x. Your sponsored listing is performing well.'`,say_aloud:"The ghost ad holdout is the right methodology here. The key insight: we can't just compare people who clicked the ad vs didn't click — that's selection bias. We need a randomized holdout within the eligible population. The ghost slot ensures both groups are equally likely to book — the only variable is whether the ad was shown. iROAS = 4.3x means every $1 of ad spend drove $4.30 of booking revenue.",company:"Expedia",difficulty:"Hard"},{q:"A PM says: 'Our sponsored listings show 15% attributed ROAS. That means for every $1 we spend, hotels earn $15 in bookings.' You think this overstates the true value. How do you explain the difference?",a:`# The attribution trap explanation

# Last-touch attribution flow:
# User searches 'NYC hotels' organically → visits Expedia → leaves
# Next day: user searches 'Expedia New York' on Google → sees sponsored listing
# User clicks sponsored listing → books same hotel
# Attribution: 100% credit to the sponsored listing
# BUT: user was already going to book Expedia — the organic visit shows high intent

# What I tell the PM:
# 'Attributed ROAS of 15x means for every $1 spent, $15 in bookings was ASSOCIATED
# with ad exposures. But correlation ≠ causation here.

# The fundamental problem: our sponsored listings are likely targeting users who
# already have high intent to book. These users would have booked anyway.
# When we attribute their booking to the ad, we overstate the ad\\'s contribution.

# Real example: retargeting users who already visited our hotel page.
# They were 60% likely to book. They see our ad, book.
# We attribute the booking to the ad. But 60% would have happened anyway.
# True incremental lift = maybe only 5pp.

# Solution: ghost ad holdout to measure TRUE incremental lift.
# Incrementality might show iROAS of 3-5x instead of 15x.
# But that 3-5x is REAL — it represents bookings that wouldn\\'t have happened.

# This affects budget allocation:
# Don\\'t retarget existing high-intent users — they convert anyway.
# Invest in prospecting (new users who wouldn\\'t have found us) where
# the incremental lift is actually high.'`,say_aloud:"Attribution gives you 15x because it gets credit for all bookings that touched an ad — including users who were going to book anyway. Incrementality says: what fraction of those bookings would have happened regardless? If the answer is 90%, your true iROAS is 1.5x, not 15x. This is why sponsored ads teams need incrementality measurement, not just attribution.",company:"Expedia",difficulty:"Medium"},{q:"[Amy's bridge question — nail this one] How does your Double ML work relate to the incrementality measurement problem? What problem were you solving and how does it connect to sponsored ads?",a:`# Bridge answer structure:

# MY PROBLEM (Amazon):
# Measure the incremental effect of brand marketing campaigns on sales.
# Challenge: we couldn't randomize who sees a TV campaign.
# Users who see TV ads are demographically different from those who don't.
# Standard regression: 'did seeing TV ad → more purchases?' is biased by confounders
# (e.g., TV viewers in bigger cities who shop more anyway).

# DOUBLE ML SOLUTION:
# Stage 1: regress treatment (TV ad exposure) on ALL confounders (demographics,
# prior purchase history, market conditions) using gradient boosting → get residuals D̃
# Stage 2: regress outcome (sales) on same confounders → get residuals Ỹ
# Stage 3: regress Ỹ on D̃ → coefficient = causal effect, free of confounding

# CONNECTION TO EXPEDIA SPONSORED ADS:
# Same fundamental problem: 'Does showing the sponsored listing cause more bookings?'
# Expedia challenge: users who see sponsored listings may be different (they searched
# for the hotel specifically, implying high intent already).
# Ghost ad holdout solves this with randomization.
# If randomization is impossible, Double ML residualizes out the intent signals.

# KEY PARALLEL:
# DiD: removes TIME confounding (parallel trends)
# Double ML: removes OBSERVED COVARIATE confounding (demographics, behavior)
# Ghost holdout: removes ALL confounding via randomization (gold standard)
# All three are answers to: 'how do we estimate causal effect of ads?'

# My iROAS validation:
# Double ML iROAS estimates were within 8% of geo holdout results →
# shows the method is accurate when randomization isn't available`,say_aloud:"This is my strongest card. The problem I solved at Amazon — measuring marketing incrementality without randomization — is exactly what Expedia's sponsored ads team needs to solve for their advertisers. Double ML and DiD and ghost holdouts are all causal inference methods solving the same underlying problem: remove confounding and estimate what would have happened without the treatment. I can speak to all three.",company:"Expedia",difficulty:"Hard"},{q:"Write Python to compare Shapley-based attribution vs last-touch attribution on a simple 3-channel funnel. Channels: Display, Search, Email. Show how credit allocation differs.",a:`import pandas as pd
from itertools import combinations, chain
import math

# Conversion rates by channel combination (simulated)
# Key: frozenset of channels in journey; value: conversion probability
cvr = {
    frozenset(): 0.01,           # baseline (no channel)
    frozenset(['Display']): 0.03,
    frozenset(['Search']): 0.12,
    frozenset(['Email']): 0.05,
    frozenset(['Display','Search']): 0.15,
    frozenset(['Display','Email']): 0.07,
    frozenset(['Search','Email']): 0.18,
    frozenset(['Display','Search','Email']): 0.22
}

channels = ['Display', 'Search', 'Email']
n = len(channels)

def shapley_value(channel, channels, cvr):
    total = 0
    others = [c for c in channels if c != channel]
    for r in range(len(others)+1):
        for subset in combinations(others, r):
            S = frozenset(subset)
            S_with = S | frozenset([channel])
            marginal = cvr.get(S_with, 0) - cvr.get(S, 0)
            weight = math.factorial(len(S)) * math.factorial(n - len(S) - 1) / math.factorial(n)
            total += weight * marginal
    return total

shapley = {ch: shapley_value(ch, channels, cvr) for ch in channels}
# Normalize to sum to 1
total_s = sum(shapley.values())
shapley_pct = {ch: v/total_s for ch, v in shapley.items()}

# Last-touch (Search always wins in Display→Search→Email journey)
last_touch = {'Display': 0.0, 'Search': 0.0, 'Email': 1.0}  # Email is last

results = pd.DataFrame({'Shapley': shapley_pct, 'LastTouch': last_touch})
print(results.round(3))
# Search gets most Shapley credit (highest marginal contribution)
# Email gets all last-touch credit (artificially inflated)
# Display gets zero last-touch credit despite contributing to awareness`,say_aloud:"Shapley distributes credit based on marginal contribution across all possible channel orderings. Last-touch gives all credit to Email just because it's last — even though Display drove the initial awareness. This is why last-touch attribution systematically undervalues upper-funnel channels and overinvests in bottom-funnel retargeting.",company:"Expedia / General",difficulty:"Hard"}],derivations:["Explain attribution vs incrementality in one sentence each. Give the umbrella ad example.","Write the iROAS formula. What is the break-even iROAS if commission rate = 15%?","Explain the ghost ad holdout design. Why is it superior to treatment vs control for advertiser incrementality?","How does Double ML solve the incrementality problem without randomization? (2-stage residualization)","When does last-touch attribution OVERSTATE effectiveness? UNDERSTATE it?"],resources:[{name:"Meta: Ghost Ad Methodology",url:"https://www.facebook.com/business/news/measuring-incremental-lift-with-conversion-lift"},{name:"Google: Data-Driven Attribution",url:"https://support.google.com/google-ads/answer/6394265"},{name:"DoubleML Python package (Amy's method)",url:"https://docs.doubleml.org/stable/index.html"},{name:"Spotify R&D: Incrementality measurement",url:"https://engineering.atspotify.com/2022/08/incrementality-testing-at-spotify/"}]},mm={day:20,title:"Advanced A/B Topics & Metric Design",date_note:"Day 20 — Metric selection, guardrails, segmentation, and multi-armed bandits",prev_day:19,next_day:21,week_label:"Week 3 — A/B Testing & Causal Inference",recap:{title:"Day 19 Recap — Incrementality (5 min)",points:["Attribution = who was there at conversion. Incrementality = did the ad CAUSE conversion.","Ghost ad holdout: show empty slot to 10% of eligible users → measure true incremental lift.","iROAS = incremental revenue / ad spend. Break-even = 1 / commission_rate.","Double ML bridge: same causal problem (confounding), different approach (ML residualization vs randomization).","Today: metric design, guardrail metrics, segmentation, and what to do when A/B isn't fast enough."]},topics:[{title:"Metric Design — The Most Underrated DS Skill",color:"#6366F1",content:`**The metric hierarchy in experiments:**
  1. Primary metric: single metric that drives the ship/no-ship decision
     → Must be pre-specified. No correction needed.
  2. Secondary metrics: additional metrics that inform interpretation
     → Pre-specified. Bonferroni/FDR correction applied.
  3. Guardrail metrics: metrics that must NOT regress
     → Red lines: if violated, don't ship regardless of primary.
  4. Exploratory metrics: post-hoc investigation
     → Not decision-making. Hypothesis generation only.

**Good primary metric properties (HEART framework reference):**
  Measurable: can be computed from data you have
  Sensitive: changes detectably with the treatments you expect to run
  Aligned: correlated with long-term business success
  Trustworthy: not gameable — can't be inflated artificially
  Directional: more/less is unambiguously better

**Common primary metric traps:**
  ✗ Click rate: easy to increase by making buttons bigger — not aligned with value
  ✗ Session count: inflated by app crashes or errors (more sessions ≠ better UX)
  ✗ Revenue per visitor: can be gamed by removing cheap inventory
  ✓ Booking conversion rate with guardrail on revenue per booking
  ✓ P7 retention (returned within 7 days): true engagement signal
  ✓ ARPU (avg revenue per user): revenue-aligned

**Expedia-specific metrics:**
  Primary for booking product: booking conversion rate per session
  Primary for search: booking rate from search results
  Primary for sponsored ads: platform iROAS (incremental bookings / ad revenue)
  Guardrails: organic booking rate, page load p95, session bounce rate
  Long-term proxy: 30-day repeat booking rate (loyalty)

**The metric vs proxy problem:**
  True goal: lifetime user value (LTV)
  Measurable proxy: booking conversion rate in experiment
  Risk: optimizing proxy can decouple from true goal
  Example: aggressive discount → high booking rate in experiment → low LTV
  because customers are price-sensitive and won't pay full price next time

  Solution: measure proxy + guardrail on at least one indicator of LTV health`,interview_tip:"When the Director asks 'what metric would you use for this experiment?', don't just answer — ask first. 'What's the decision this experiment is informing? What does success look like for the business?' Then: 'I'd set booking conversion rate as primary, with organic booking rate and session quality as guardrails.' This shows strategic thinking, not just technical execution."},{title:"Segmentation Analysis — Heterogeneous Treatment Effects",color:"#8B5CF6",content:`**Why segment after an A/B test:**
  Overall result may mask heterogeneous effects.
  Feature that helps new users may hurt returning users.
  'Ship to everyone' might be wrong — maybe ship only to a subset.

**Standard segments to always check:**
  • New vs returning users (different behavior, different baselines)
  • Mobile vs desktop (UX behaves differently)
  • Country/market (regulatory, cultural differences)
  • High vs low intent (search vs browse behavior)
  • Platform version (old app vs new)

**How to run segmentation analysis:**
  import pandas as pd, numpy as np
  from scipy.stats import proportions_ztest

  def segment_analysis(df, segment_col):
      results = []
      for seg_val in df[segment_col].unique():
          seg = df[df[segment_col] == seg_val]
          ctrl = seg[seg['assign'] == 'control']
          trt  = seg[seg['assign'] == 'treatment']
          k_c, n_c = ctrl['converted'].sum(), len(ctrl)
          k_t, n_t = trt['converted'].sum(), len(trt)
          z, p = proportions_ztest([k_c, k_t], [n_c, n_t])
          diff = k_t/n_t - k_c/n_c
          results.append({'segment': seg_val, 'diff': diff,
                          'p_value': p, 'n': n_c+n_t})
      return pd.DataFrame(results).sort_values('diff', ascending=False)

  print(segment_analysis(df, 'device'))
  print(segment_analysis(df, 'user_type'))

**Multiple testing in segmentation:**
  If you check 10 segments at α=0.05 → ~40% chance of spurious finding
  Apply Bonferroni or FDR correction across segment tests
  Better: pre-specify which segments you'll examine before looking at data

**Interaction effects — the heterogeneity test:**
  Formal test of whether treatment effect differs by segment:
  import statsmodels.formula.api as smf
  # Treatment effect interaction with device
  model = smf.ols('converted ~ assign * device', data=df).fit()
  # assign:device[T.mobile] coefficient = differential effect for mobile
  # If p < 0.05 → significant heterogeneous treatment effect by device
  print(model.params['assign[T.treatment]:device[T.mobile]'])`,interview_tip:"When discussing segmentation, always acknowledge the multiple testing problem. The interviewer will ask 'how do you avoid false positives when looking at many segments?' Answer: pre-specify your key segments, apply FDR correction, and treat unexpected segment findings as hypotheses to confirm in a dedicated follow-up test."},{title:"When A/B Is Too Slow — Multi-Armed Bandits",color:"#F59E0B",content:`**The A/B testing tradeoff:**
  Classic A/B: run fixed experiment, then decide → HIGH regret during test
  (you keep showing people the worse variant while waiting for significance)
  Multi-Armed Bandit: dynamically allocate more traffic to better variants
  → Lower regret during exploration, but less statistical rigor

**When to use bandit vs A/B:**
  Use A/B when:
  • You need clean statistical inference with known α/power
  • Experiment has long-term effects (novelty, learning)
  • Effect is important enough to measure precisely
  • Directional test (A vs B, no partial rollout)

  Use bandit when:
  • Exploration is very costly (e.g., medical, user experience)
  • Many variants (10+ arms) — A/B with 10 variants is expensive
  • Short-term metric optimization (news headlines, button colors)
  • You care more about revenue during experiment than causal inference

**Epsilon-Greedy (simplest bandit):**
  import numpy as np

  class EpsilonGreedy:
      def __init__(self, n_arms, epsilon=0.1):
          self.n_arms = n_arms
          self.epsilon = epsilon
          self.counts  = np.zeros(n_arms)
          self.values  = np.zeros(n_arms)

      def choose(self):
          if np.random.random() < self.epsilon:
              return np.random.randint(self.n_arms)  # explore
          return np.argmax(self.values)               # exploit

      def update(self, arm, reward):
          self.counts[arm] += 1
          n = self.counts[arm]
          self.values[arm] = ((n-1)/n) * self.values[arm] + (1/n) * reward

**Thompson Sampling (Bayesian bandit — industry standard):**
  For each arm, maintain Beta(α, β) posterior on conversion rate.
  At each step: sample from each arm's posterior, choose max sample.
  As we observe more, posteriors narrow → exploitation increases naturally.

  from scipy.stats import beta
  class ThompsonSampling:
      def __init__(self, n_arms):
          self.successes = np.ones(n_arms)  # alpha: prior
          self.failures  = np.ones(n_arms)  # beta: prior

      def choose(self):
          samples = beta.rvs(self.successes, self.failures)
          return np.argmax(samples)

      def update(self, arm, reward):  # reward: 0 or 1
          self.successes[arm] += reward
          self.failures[arm]  += (1 - reward)`,interview_tip:"Bandit algorithms come up as a follow-up to A/B testing in senior DS interviews. The key tradeoff to state: 'A/B gives clean causal inference but high regret during testing. Bandit reduces regret but sacrifices statistical rigor. For a major product decision I want clean A/B. For real-time optimization like ad creative selection, Thompson Sampling is more appropriate.'"},{title:"Communicating Results to Non-Technical Stakeholders",color:"#10B981",content:`**The Director's real job:** translate DS findings into product decisions.
  He needs you to communicate clearly, not just run statistics.

**The 3-sentence result format:**
  1. What happened: 'Treatment group showed X% higher booking rate'
  2. Whether it's real: 'This is statistically significant (p=0.02) and
     practically meaningful — at scale, this represents Y extra bookings per month'
  3. What to do: 'I recommend shipping to all users. Here's what to watch
     after launch: [guardrail metrics]'

**Common non-technical questions and how to answer:**

  Q: 'Can we run it just a few more days to be sure?'
  A: 'We pre-committed to our sample size for valid statistics.
  Running longer would require adjusting for sequential testing.
  I can reanalyze with proper sequential testing correction if needed.'

  Q: 'The p-value is 0.06. Can't we just round down?'
  A: 'I understand the pressure, but the pre-specified threshold matters.
  Changing it after seeing results inflates our false positive rate.
  If we want to ship, let's calculate what sample size gives us confidence.'

  Q: 'Why does it work for mobile but not desktop?'
  A: 'That's a useful finding! But it came from a post-hoc analysis,
  so I'd treat it as a hypothesis to test in a dedicated experiment.
  The overall result is our reliable signal.'

**The business impact calculation (always prepare this):**
  effect_size = 0.008  # 0.8pp booking rate improvement
  monthly_users = 5_000_000
  avg_booking_value = 350
  commission_rate = 0.15
  annual_incremental_revenue = (effect_size * monthly_users *
                                avg_booking_value * commission_rate * 12)
  print(f'Annual incremental revenue: \${annual_incremental_revenue:,.0f}')
  # Present this alongside the statistical result`,interview_tip:"In this interview, you're talking to a Director who partners with VPs and Finance. He values DS who can translate: p-value → business decision → revenue impact. After showing statistical significance, always say: 'In dollar terms, this translates to approximately $X in annual incremental revenue.' This speaks his language."}],practice_questions:[{q:"[Expedia Case — Full] Expedia wants to test a new checkout flow. Define: primary metric, 2 secondary metrics, 2 guardrail metrics. Justify each choice.",a:`# Primary metric: CHECKOUT CONVERSION RATE
# = P(user starts checkout AND completes booking)
# Why: directly measures what we care about (more bookings)
# Sensitive to the checkout UX change we're making
# Aligned with Expedia revenue (more bookings = more commission)
# Not gameable by the checkout UI change alone

# Secondary metric 1: BOOKING REVENUE PER VISITOR
# = avg booking value × conversion rate
# Why: conversion rate alone doesn't capture if we're pushing cheap bookings
# A 'simpler' checkout might lead to lower-value impulse purchases
# Want to ensure revenue impact is positive even if booking value drops slightly

# Secondary metric 2: FUNNEL COMPLETION RATE BY STEP
# = % of checkout starters who pass each step
# Why: diagnostic — if checkout improves, want to see WHERE in funnel users drop off less
# Helps explain WHY the primary metric moved

# Guardrail 1: PAGE LOAD TIME (p95)
# = 95th percentile page load time
# Why: a 'better' checkout that loads 2 seconds slower hurts user experience
# Must not regress — user tolerance for checkout load time is very low

# Guardrail 2: DIRECT ORGANIC BOOKING RATE (for returning users)
# Why: if checkout changes confuse returning users who know the old flow,
# they might abandon Expedia for a competitor
# Returning user conversion should not drop — they're the most valuable segment

print('Primary: checkout conversion rate')
print('Secondary: booking revenue per visitor, funnel completion by step')
print('Guardrails: p95 page load, returning user organic booking rate')`,say_aloud:"Every metric I choose I can justify. Primary is the decision metric — aligned, sensitive, trustworthy. Secondaries explain and contextualize the primary. Guardrails are non-negotiable red lines — if page load degrades or returning users leave, we don't ship even if primary is positive. The hierarchy matters: primary drives the decision, guardrails veto it.",company:"Expedia",difficulty:"Medium"},{q:"Your A/B test shows: overall conversion rate is +1.2pp (significant). But: new users +3.0pp, returning users -0.8pp (significant). What do you recommend?",a:`# Analysis of heterogeneous treatment effects

# Overall positive, but the mask conceals harm to returning users.
# Returning users -0.8pp significant → this is a GUARDRAIL violation

# First: check multiple testing
# If we pre-specified 'new vs returning' as a segment → valid finding
# If we found it post-hoc → need to validate in dedicated experiment

# Assuming pre-specified segment:

# Decision framework:
# 1. How valuable are returning vs new users?
retaining_ltv_multiplier = 5  # returning users have 5x LTV

# 2. Revenue impact calculation
new_users_monthly = 2_000_000
returning_users_monthly = 1_000_000
avg_booking_value = 350
commission = 0.15

increment_new = 0.030 * new_users_monthly * avg_booking_value * commission
increment_ret = -0.008 * returning_users_monthly * avg_booking_value * commission
net_impact = increment_new + increment_ret
print(f'Net monthly revenue impact: \${net_impact:,.0f}')

# 3. Recommendation (even if net positive):
# DO NOT SHIP to all users if returning users are harmed.
# Why: LTV of returning users >> new users. Losing returning user trust = huge long-term cost.
# Also: -0.8pp on returning users is a regression that violates our guardrail.

# Recommendation:
# A: Ship ONLY to new users. Monitor returning users separately.
# B: Investigate why returning users are harmed — might be a fixable UX issue
# C: Run a follow-up experiment with the checkout fix specifically for returning users

print('Recommendation: DO NOT ship universally. Target new users only or fix returning user issue first.')`,say_aloud:"This is a classic heterogeneous treatment effects situation. Overall positive, but a subset is harmed. My analysis: check if the segment was pre-specified (if post-hoc, validate first). Then: revenue impact calculation. But even if net positive, harming returning users is a guardrail violation — their LTV is much higher. I'd recommend shipping only to new users while investigating the returning user regression.",company:"Expedia / All",difficulty:"Hard"},{q:"A PM asks: 'Our primary metric is booking conversion rate, but users book once and then don't come back for months. How do we know if an experiment actually improves long-term retention?' What do you say?",a:`# The short-term metric / long-term outcome gap

# Problem: booking conversion rate is short-term proxy.
# True goal: long-term user retention and LTV.
# A feature that increases short-term conversion might not improve LTV
# (e.g., aggressive discounting drives bookings but trains users to wait for deals).

# Solutions:

# 1. Holdback group (long-term holdout)
# Keep a small % of users (say 5%) in 'control' permanently after launch.
# Track their behavior vs launched users for 6-12 months.
# Measures true long-term impact. Used by Netflix, Booking.com.
# Cost: delayed full rollout, holdback users have worse experience.

# 2. Leading indicator metrics
# Find short-term metrics that historically predict long-term retention.
# e.g., 'saved a hotel to wishlist' or 'viewed price history'
# → correlated with return visit within 30 days.
# Validate correlation during experiments.

# 3. Long-lived experiment
# Run experiment longer (6+ weeks) and measure 30-day return rate.
# Cost: slower experimentation velocity.

# 4. Surrogate index
# Build a model that predicts LTV from observable short-term signals.
# Use model score as the experiment metric.
# Microsoft has published on this (Surrogate Index paper).

# My recommendation:
# Short-term: use booking conversion + session quality metrics as primary.
# Long-term: run a 5% holdback on major feature launches.
# For repeat decision-making: invest in leading indicator identification.
print('Recommendation: short-term proxy + 5% holdback for major launches')`,say_aloud:"This is a fundamental tension in experimentation. Short-term metrics are measurable; long-term outcomes are what we care about. The holdback approach is the most robust — keep a control group permanently after launch and measure them 6 months later. For smaller decisions, invest in identifying leading indicators that predict LTV from short-term signals.",company:"All / Expedia",difficulty:"Hard"}],derivations:["Name and define the 4 levels of metric hierarchy: primary, secondary, guardrail, exploratory.","What is the HEART framework for metric selection? Apply it to a checkout conversion metric.","What is a long-term holdback? When would you use it instead of a time-limited A/B test?","Compare Epsilon-Greedy vs Thompson Sampling bandits: when is each preferred?","Write the 3-sentence result format: what happened, is it real, what to do."],resources:[{name:"Netflix: Metrics that matter (long-horizon experiments)",url:"https://netflixtechblog.com/data-compression-for-large-scale-streaming-experimentation-c20bfab14cb"},{name:"Booking.com: Continuous A/B testing",url:"https://dl.acm.org/doi/10.1145/2487575.2488217"},{name:"Spotify: Thompson Sampling for content",url:"https://engineering.atspotify.com/"},{name:"Microsoft: Surrogate metric paper",url:"https://exp-platform.com/Documents/2019-KDDBigDataExperimentationChallenge.pdf"}]},hm={day:21,type:"quiz",title:"Week 3 Review — A/B Testing & Causal Inference Quiz",date_note:"Day 21 · Week 3 Review",prev_day:20,next_day:null,week_label:"Week 3 — A/B Testing & Causal Inference",subtitle:"Write answers from memory first. This week maps directly to your Expedia Director interview. Every question is drawn from real DS interviews at Expedia, Airbnb, Netflix, and Reddit.",review_tasks:["✍️  Write from memory: the two-proportion z-test call — arguments, output, interpretation","→   Write from memory: DiD formula and the parallel trends assumption","→   Write from memory: iROAS formula and break-even analysis at 15% commission","→   Write from memory: the 4 metric types (primary, secondary, guardrail, exploratory)","→   Write from memory: ghost ad holdout design — why is it superior to treatment vs control?","→   Write your Double ML bridge: how does it connect to the incrementality problem?","→   60-90 minutes total. This is your Expedia prep — treat it like the real thing."],derivations:["Write the proportions_ztest call: what are count and nobs? What does a two-sided test mean?","What does p=0.03 mean in plain English? What does p=0.03 NOT mean?","Write the DiD regression formula. Which coefficient is the causal estimate?","Explain parallel trends: what is it, why can't you fully test it, how do you provide evidence?","Write iROAS formula. If commission = 15%, what iROAS is break-even?","What is the ghost ad holdout? Why is it the gold standard for advertiser incrementality?","When does A/B testing fail? Name 3 cases where you need causal inference instead.","What is Simpson's Paradox? How do you detect and fix it in an A/B test result?","Explain the peeking problem. What is sequential testing and when do you use it?"],resources:[{name:"Your Day 15-20 notes — all material from this week",url:"/"},{name:"Evan Miller: How Not To Run an A/B Test (peeking)",url:"https://www.evanmiller.org/how-not-to-run-an-ab-test.html"},{name:"Causal Inference: The Mixtape (DiD chapter)",url:"https://mixtape.scunning.com/"}],sections:[{title:"Foundations — Hypothesis Testing & z-Test",icon:"📊",range:"Q1–Q7",qs:[{id:"w3q1",q:"What are Type I and Type II errors? What are α and β? Which is 'false positive' and which is 'false negative'?",company:"All",freq:"High",answer:"<p><strong>Type I error (false positive):</strong> Reject H0 when H0 is true. Probability = α. We conclude the treatment works when it actually doesn't. Example: ship a feature that has no real effect.</p><p><strong>Type II error (false negative):</strong> Fail to reject H0 when H0 is false. Probability = β. We conclude no effect when treatment actually works. Example: don't ship a feature that would have helped.</p><p><strong>Power = 1 − β.</strong> Industry standard: α=0.05, power=0.80 (β=0.20). These are business decisions, not laws — high-stakes decisions warrant α=0.01 or power=0.90.</p>"},{id:"w3q2",q:"Write the Python code to run a two-proportion z-test. Control: 5,000 users, 480 bookings. Treatment: 5,000 users, 540 bookings. Interpret the result.",company:"Expedia / Airbnb",freq:"High",answer:`<code>from scipy.stats import proportions_ztest
import numpy as np

n_c, k_c = 5000, 480   # control: 9.6%
n_t, k_t = 5000, 540   # treatment: 10.8%

z, p = proportions_ztest([k_c, k_t], [n_c, n_t])

diff = k_t/n_t - k_c/n_c  # 1.2pp
se = np.sqrt((k_c/n_c)*(1-k_c/n_c)/n_c + (k_t/n_t)*(1-k_t/n_t)/n_t)
ci = (diff - 1.96*se, diff + 1.96*se)

print(f'z={z:.2f}, p={p:.4f}')
print(f'Diff: {diff:.4f}, 95% CI: ({ci[0]:.4f}, {ci[1]:.4f})')
# z≈2.28, p≈0.023 → significant at α=0.05
# CI: (0.0017, 0.0223) — does not include 0</code><p>Interpretation: Treatment booking rate (10.8%) is significantly higher than control (9.6%), p=0.023 &lt; 0.05. The 95% CI is (0.17pp, 2.23pp) — a real effect. Next: calculate business impact before shipping.</p>`},{id:"w3q3",q:"p-value = 0.04. What does this mean? Name 3 things p=0.04 does NOT mean.",company:"Netflix / All",freq:"High",answer:"<p><strong>What it means:</strong> If H0 is true (no effect), the probability of observing data this extreme or more is 4%. We reject H0 at α=0.05.</p><p><strong>What it does NOT mean:</strong></p><ol><li>It does NOT mean there's a 4% chance H0 is true (that would require Bayes' theorem and a prior)</li><li>It does NOT mean the effect is practically significant — with n=10M, even a 0.001pp effect can have p=0.04</li><li>It does NOT mean you should definitely ship — check CI, business impact, guardrail metrics</li></ol><p>Always pair p-value with: confidence interval, effect size, and business impact calculation.</p>"},{id:"w3q4",q:"[Netflix / Expedia] Booking rate: control=80.1%, treatment=80.2%. n=2,000,000 each. p=0.001. Should you ship?",company:"Netflix",freq:"High",answer:`<p><strong>Not automatically.</strong> This is statistical vs practical significance.</p><p>Statistically significant: p=0.001 &lt; 0.05. The 0.1pp difference is real.</p><p>Practically significant? At 2M users: 0.001 × 2M = 2,000 extra bookings. At $350 avg booking × 15% commission = $105,000 annual incremental value.</p><p>Questions before shipping: (1) Was 0.1pp above our pre-set MDE? If MDE was 1pp, this falls short. (2) What's the engineering/maintenance cost? (3) Are guardrail metrics healthy? (4) Could this be a novelty effect?</p><p>Correct answer: "Statistically significant but below our practical significance threshold. Present the revenue calculation to PM and let the business decide if $105K justifies shipping."</p>`},{id:"w3q5",q:"Explain the peeking problem. Why does stopping an experiment early when p < 0.05 inflate Type I error?",company:"Expedia / All",freq:"High",answer:"<p>Peeking: checking p-value during the experiment and stopping when it first crosses α=0.05.</p><p>Why it inflates Type I error: With α=0.05 and continuous monitoring, the p-value will dip below 0.05 by chance many times. At each check, you have a 5% chance of a false positive. Checking 10 times ≈ ~40% cumulative false positive rate, not 5%.</p><p><strong>Evan Miller simulation:</strong> Peek daily for 20 days → true α ≈ 22% when you think you're running at 5%.</p><p><strong>Solutions:</strong> (1) Pre-commit to stopping rule (fixed sample size). (2) Sequential testing / alpha-spending (O'Brien-Fleming): valid interim looks with adjusted α thresholds. (3) Bayesian testing: different paradigm, allows continuous monitoring with calibrated interpretation.</p>"},{id:"w3q6",q:"What is SRM (Sample Ratio Mismatch)? How do you detect it? What do you do when you find it?",company:"All",freq:"High",answer:`<code>from scipy.stats import chisquare

n_ctrl, n_trt = 48200, 51800
total = n_ctrl + n_trt
chi2, p = chisquare(f_obs=[n_ctrl, n_trt], f_exp=[total/2, total/2])
print(f'chi2={chi2:.1f}, p={p:.6f}')
# If p < 0.05: SRM detected</code><p>SRM = the actual split ratio differs significantly from the expected ratio (e.g., 50/50).</p><p><strong>Causes:</strong> logging bugs, bot filtering, caching issues, experiment config errors, network timeouts.</p><p><strong>What to do:</strong> STOP. Do not analyze primary metric results. The experiment is invalid. Investigate the plumbing. Restart if necessary.</p><p>Rule: SRM check is the first thing you do before ANY primary metric analysis.</p>`},{id:"w3q7",q:"One-sided vs two-sided test: when do you use each? Your PM asks to switch from two-sided (p=0.07) to one-sided after seeing data. What do you say?",company:"Airbnb / All",freq:"Medium",answer:`<p><strong>Two-sided (default):</strong> H1: p_t ≠ p_c. Use when you care about harm as well as improvement. Critical region in both tails. α/2 per tail.</p><p><strong>One-sided:</strong> H1: p_t > p_c. More power. Only valid if pre-registered BEFORE data collection.</p><p><strong>To the PM:</strong> "Switching from two-sided to one-sided after seeing p=0.07 is p-hacking. The one-sided p would be ~0.035, but this inflates our true Type I error rate significantly. We can't change the test type after seeing the data — the α=0.05 guarantee only holds for the pre-committed test."</p><p>Also: "We DO care about regressions. A two-sided test would catch accidental harm in a subgroup that a one-sided test would miss."</p>`}]},{title:"Experiment Design & Pitfalls",icon:"🧪",range:"Q8–Q15",qs:[{id:"w3q8",q:"What is the randomization unit? Why does randomizing at session level (instead of user level) cause problems?",company:"All",freq:"High",answer:"<p>The randomization unit is the entity randomly assigned to treatment or control.</p><p><strong>Session-level problem:</strong> The same user can be in control on Monday (session 1) and treatment on Friday (session 2). This is contamination — the user's behavior in session 2 may be influenced by what they saw in session 1.</p><p>Additionally: randomization unit must be ≥ analysis unit. If you analyze at user level but randomize at session level, observations are correlated within users → variance is underestimated → too many false positives.</p><p><strong>Rule:</strong> For user-level metrics (booking conversion, retention), always randomize at user level. Session-level only valid for session-level metrics AND when same user seeing both variants is acceptable.</p>"},{id:"w3q9",q:"Write Python to calculate required sample size: baseline booking rate = 8%, MDE = +1pp, α=0.05, power=80%.",company:"All",freq:"High",answer:`<code>from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

p_base = 0.08
p_mde  = 0.09  # 1pp absolute lift
effect = proportion_effectsize(p_mde, p_base)  # Cohen's h
n = NormalIndPower().solve_power(
    effect_size=effect, power=0.80, alpha=0.05, ratio=1.0
)
print(f'n per group: {n:.0f}')   # ≈ 4,816
print(f'total n: {n*2:.0f}')     # ≈ 9,632

# Days needed if 5,000 users/day in experiment:
days = (n * 2) / 5000
print(f'Statistical days needed: {days:.1f}')  # ≈ 2 days
# But: ALWAYS run minimum 2 weeks for weekly seasonality!</code><p>Key relationships: 4× sample size → detect 2× smaller effect. Rare events (low baseline) need more samples. Always run ≥2 weeks regardless of when n is reached.</p>`},{id:"w3q10",q:"What is the novelty effect? How do you detect it? What is the difference between novelty effect and primacy effect?",company:"Expedia / Netflix",freq:"High",answer:"<p><strong>Novelty effect:</strong> Users engage MORE with something new simply because it's new. Effect inflated in week 1, decays over time. Treatment effect appears larger than true steady-state effect.</p><p><strong>Primacy effect (change aversion):</strong> Users engage LESS initially because they're used to the old way. Effect is depressed in week 1, grows as users adapt. The opposite pattern.</p><p><strong>Detection:</strong> Plot daily treatment effect (p_t - p_c) over time. Decreasing trend = novelty. Increasing trend = primacy.</p><p><strong>Mitigation:</strong> Run experiment 4+ weeks. Analyze 'mature' cohort (users who have been in experiment ≥7 days). Use a long-term holdback for permanent measurement.</p>"},{id:"w3q11",q:"[Reddit/Expedia] Overall A/B result: treatment +2pp (significant). Mobile: treatment -3pp. Desktop: treatment +7pp. Both subsegments significant. What happened? What do you recommend?",company:"Reddit / Expedia",freq:"High",answer:"<p>This looks like <strong>Simpson's Paradox</strong>. The overall positive result is driven by composition: the treatment group likely has more desktop users (higher baseline), masking a real harm to mobile users.</p><p><strong>Investigation:</strong> Check device distribution in control vs treatment — if treatment has proportionally more desktop users, the aggregate is misleading.</p><p><strong>Recommendation:</strong> Do NOT ship universally. The feature hurts mobile users (who may be the majority). Options: (1) Ship only to desktop users. (2) Investigate why mobile is harmed and fix it. (3) Run a dedicated mobile experiment with a modified design.</p><p>This also depends on: was the mobile/desktop segment pre-specified? If post-hoc, validate in a dedicated experiment before deciding.</p>"},{id:"w3q12",q:"You run 5 A/B tests simultaneously across different features. Each test has 4 metrics. How do you handle multiple testing?",company:"All",freq:"Medium",answer:`<code>from statsmodels.stats.multitest import multipletests

# Strategy:
# 1. PRIMARY METRIC per experiment: no correction (pre-specified, 1 test per experiment)
# 2. SECONDARY metrics within each experiment: FDR correction
# 3. EXPLORATORY (post-hoc): hypothesis only, run dedicated follow-up

# Example for secondary metrics in one experiment:
p_secondary = [0.03, 0.04, 0.07, 0.001]
reject, p_adj, _, _ = multipletests(p_secondary, alpha=0.05, method='fdr_bh')
import pandas as pd
print(pd.DataFrame({'p_raw': p_secondary, 'p_adj': p_adj.round(3), 'reject': reject}))</code><p>Key principle: pre-specify ALL analyses before seeing data. Primary metric is the decision driver and needs no correction. Multiple secondary metrics need FDR. Post-hoc findings are for future experiments, not current decisions.</p>`},{id:"w3q13",q:"What is SUTVA? Give one example of a SUTVA violation at Expedia. How do you design around it?",company:"Expedia",freq:"Medium",answer:"<p><strong>SUTVA (Stable Unit Treatment Value Assumption):</strong> Treatment of unit A does not affect the outcome of unit B. Required for valid user-level A/B testing.</p><p><strong>Expedia example:</strong> Testing a new booking incentive (discount). Treatment users book hotels faster, reducing inventory for control users. Control users see worse prices/availability → their booking rate drops. Treatment effect is overstated (because control is harmed).</p><p><strong>Design fix:</strong> Geo-level (market-level) randomization. Assign entire cities/regions to treatment or control. Eliminates within-market spillover. Accepts lower statistical power in exchange for valid causal estimate.</p><p>Other fixes: switchback design (time-based), reduced experiment scope, direct inventory modeling.</p>"},{id:"w3q14",q:"What is the AA test and why do you run it before an A/B test?",company:"All",freq:"Medium",answer:"<p>An AA test runs the experiment infrastructure with NO treatment difference — both groups see the identical experience.</p><p><strong>Purpose:</strong> Verify that the randomization system works correctly. Expected result: p-value NOT significant (both groups should behave identically since they're seeing the same thing).</p><p><strong>What it catches:</strong> Biased assignment (e.g., newer users always go to treatment), leakage between groups, technical bugs in experiment tracking, baseline metric instability.</p><p><strong>If AA test fails (shows significant difference):</strong> The experiment infrastructure has a bug. Fix it before running real A/B tests. Results from a broken randomization system are meaningless.</p>"},{id:"w3q15",q:"What is CUPED? Why does it help? When would you use it?",company:"Booking.com / Microsoft",freq:"Medium",answer:"<p><strong>CUPED (Controlled-experiment Using Pre-Experiment Data):</strong> A variance reduction technique that uses a user's pre-experiment metric as a covariate to reduce residual variance.</p><p><strong>Formula:</strong> Y_adjusted = Y − θ × (X − E[X]), where X = pre-experiment value of the same metric, θ = Cov(Y, X) / Var(X)</p><p><strong>Why it helps:</strong> Pre-experiment behavior strongly predicts post-experiment behavior. By removing this predictable variance, we see the treatment effect more clearly. Typical variance reduction: 20–60% → can detect same effect with 20–60% fewer users.</p><p><strong>When to use:</strong> When you have reliable pre-experiment data on the same metric. Works best for engagement/retention metrics where historical behavior predicts future behavior. Booking.com, Microsoft, and Netflix use this in production.</p>"}]},{title:"Causal Inference — DiD, Pre-Post & Incrementality",icon:"🔬",range:"Q16–Q24",qs:[{id:"w3q16",q:"What is Difference-in-Differences (DiD)? Write the formula. What is the key assumption?",company:"Expedia / All",freq:"High",answer:"<p><strong>DiD formula:</strong></p><code>DiD = (Y_treat_after − Y_treat_before) − (Y_ctrl_after − Y_ctrl_before)</code><p>Equivalently: the regression coefficient on the interaction term treated × post in:</p><code>Y = α + β₁·treated + β₂·post + β₃·(treated×post) + ε</code><p>β₃ is the DiD estimate = causal effect of treatment.</p><p><strong>Key assumption: Parallel trends.</strong> In the absence of treatment, the treated and control groups would have followed the same trend over time. Cannot be fully tested during treatment period, but validated using pre-treatment placebo regressions.</p>"},{id:"w3q17",q:"[Expedia Director's specialty] Expedia launches a checkout change in the US on March 1. Canada doesn't get it. How do you estimate the causal impact using DiD?",company:"Expedia",freq:"High",answer:`<code>import statsmodels.formula.api as smf

# US = treated, Canada = control
# Pre = Jan-Feb, Post = March onward
# df has columns: booking_rate, country, post (0/1), date

model = smf.ols('booking_rate ~ C(country) + C(post) + C(country):C(post)',
                data=df).fit()
# β₃ = C(country)[T.US]:C(post)[T.1] = DiD causal estimate

# Validity:
# 1. Plot US vs Canada booking rate Jan-Feb → should be parallel
# 2. Run DiD on pre-period only → should find β₃ ≈ 0 (placebo test)
# 3. Check for US-specific events in March (holidays, competitor changes)
# 4. Perform event study: plot daily DiD coefficients
#    Pre: ≈ 0. Post: should show step change.</code><p>Communicate: "The checkout change increased US booking rate by X pp, controlling for time trends shared with Canada. I validated this by confirming US and Canada moved in parallel before March (placebo test β₃ = 0.002, p = 0.71)."</p>`},{id:"w3q18",q:"What is the parallel trends assumption? How do you TEST it? What do you do if it's violated?",company:"Expedia / All",freq:"High",answer:"<p><strong>Parallel trends:</strong> In the absence of treatment, treated and control groups would have followed the same trend over time. This is the core identifying assumption of DiD.</p><p><strong>How to test (provide evidence):</strong> (1) Run a placebo DiD using only pre-treatment data — split pre-period in half, run DiD with 'fake' treatment at midpoint. If β₃ ≈ 0 and p is large, consistent with parallel trends. (2) Plot both groups' trends from well before treatment. (3) Run event study: estimate DiD at each pre-period time point, verify they're all near 0.</p><p><strong>If violated:</strong> DiD estimate is biased. Remedies: use a more similar control group, synthetic control (weighted combination of controls), or difference-in-differences with heterogeneous trends (allow groups to have different linear time trends).</p>"},{id:"w3q19",q:"What is the difference between attribution and incrementality? Why does attribution overstate ad effectiveness?",company:"Expedia Ads",freq:"High",answer:"<p><strong>Attribution:</strong> Who was present at conversion? Gives credit to ad touchpoints that appeared in the conversion journey. Example: last-touch gives 100% credit to the last ad seen.</p><p><strong>Incrementality:</strong> Did the ad CAUSE the conversion? Counterfactual question: would this user have booked anyway without the ad?</p><p><strong>Why attribution overstates:</strong> Ads often target users who already have high intent (retargeting, brand search). These users would have converted anyway. Attribution gives the ad credit for a conversion that would have happened regardless — so the attributed ROI appears much higher than the true incremental ROI.</p><p><strong>The umbrella story:</strong> Advertising to people who always buy umbrellas when it rains → attribution credits your ad. But they were buying anyway. iROAS = 0 despite high attributed ROI.</p>"},{id:"w3q20",q:"What is a ghost ad holdout? How does it measure advertiser incrementality? How is it different from platform-level A/B testing?",company:"Expedia Ads",freq:"High",answer:`<p><strong>Ghost ad holdout:</strong> Within the treatment group (users eligible to see an ad), randomly show: real ad to 90%, empty/ghost slot to 10% (holdout). Compare booking rates between exposed and holdout.</p><p><strong>Why it measures advertiser incrementality:</strong> Both exposed and holdout users have the same intent and eligibility — the only difference is whether they saw the real ad. Isolates the effect of the specific ad creative/placement.</p><p><strong>Difference from platform A/B test:</strong> Platform A/B (control = no ads) measures: does Expedia's ad feature increase overall bookings? Ghost holdout measures: does THIS hotel's ad drive incremental bookings for the hotel? Two different questions for two different stakeholders (Expedia and the advertiser).</p><code>lift = booking_rate_exposed - booking_rate_holdout
iroas = lift * n_exposed * booking_value / ad_spend</code>`},{id:"w3q21",q:"Write the iROAS formula. If Expedia's commission rate is 15%, what is the break-even iROAS?",company:"Expedia Ads",freq:"High",answer:`<code># iROAS = Incremental Revenue / Ad Spend
# Incremental Revenue = incremental_bookings × avg_booking_value

n_exposed    = 90000
lift         = 0.008          # 0.8pp incremental lift from ghost holdout
avg_booking  = 350            # dollars
ad_spend     = 50000          # advertiser paid this

incr_bookings = lift * n_exposed            # 720 bookings
incr_revenue  = incr_bookings * avg_booking  # $252,000
iroas = incr_revenue / ad_spend             # $252K / $50K = 5.04x

# Break-even analysis for Expedia:
# Expedia earns commission_rate × booking_value per incremental booking
commission = 0.15
expedia_revenue_per_booking = avg_booking * commission  # $52.50
# Break-even: Expedia revenue from incremental bookings = ad spend
# iroas_breakeven × commission = 1
iroas_breakeven = 1 / commission
print(f'iROAS break-even: {iroas_breakeven:.1f}x')  # 6.7x
# If iROAS > 6.7x → profitable for Expedia
# Our iROAS = 5.04x → below break-even for Expedia at these numbers</code>`},{id:"w3q22",q:"How does Double ML relate to DiD and incrementality measurement? How would you bridge your Double ML experience to Expedia's measurement problems?",company:"Expedia",freq:"High",answer:`<p><strong>All three solve the same problem:</strong> estimating causal effects without full randomization.</p><p><strong>DiD:</strong> removes confounding from TIME trends (assumes parallel trends as the key condition).</p><p><strong>Ghost holdout:</strong> removes ALL confounding via randomization (gold standard when feasible).</p><p><strong>Double ML:</strong> removes confounding from HIGH-DIMENSIONAL OBSERVED COVARIATES. Stage 1: ML models predict treatment and outcome from covariates. Stage 2: regress residuals → causal estimate free of those confounders.</p><p><strong>Bridge for interview:</strong> "In my Amazon work, I measured marketing incrementality without randomization — advertisers can't be randomly assigned to TV campaign exposure. The confounders were user demographics and prior behavior. I used Double ML to residualize them out, then estimated causal iROAS. Compared against geo holdout — within 8% accuracy. The same challenge exists for Expedia: measuring whether a hotel's sponsored listing drives incremental bookings for users who can't be easily randomized."</p>`},{id:"w3q23",q:"When would you use each: A/B test, DiD, pre-post analysis, RDD? Give one real scenario for each.",company:"All",freq:"High",answer:"<p><strong>A/B test (gold standard):</strong> Use when you can randomize. Example: new checkout button color — assign users randomly. Clean causal inference, direct metric comparison.</p><p><strong>DiD:</strong> Use when a policy/feature was rolled out to one market but not another. Example: Expedia launches new pricing in US but not Canada — compare booking rate changes. Key: needs a parallel control group.</p><p><strong>Pre-post analysis:</strong> Use as a quick sanity check when no control group is available. Example: did a one-time homepage redesign affect bounce rate? Weak causal inference — time trends and external events are threats.</p><p><strong>RDD:</strong> Use when treatment assignment depends on a threshold cutoff. Example: loyalty program — users with ≥10 bookings get 'Gold' status. Compare users with 9 vs 11 bookings. Key: cutoff must not be manipulable.</p>"},{id:"w3q24",q:"Name 4 levels of metric hierarchy and give one example of each for an Expedia checkout experiment.",company:"Expedia",freq:"Medium",answer:"<p><strong>Primary metric (1 metric, drives ship/no-ship):</strong> Checkout conversion rate = % of users who start checkout and complete a booking. Pre-specified, no correction needed, clear direction.</p><p><strong>Secondary metrics (2-3, explain and contextualize):</strong> Booking revenue per visitor (ensure we're not converting cheaper bookings); funnel drop-off rate by step (where does UX improve?). Apply FDR correction.</p><p><strong>Guardrail metrics (must not regress):</strong> Page load time (p95) — new checkout must not be slower; organic booking rate for returning users — loyal users must not be harmed.</p><p><strong>Exploratory metrics (post-hoc, hypothesis generating):</strong> Scroll depth, time on checkout page, device-specific patterns. Interesting findings → future dedicated experiments.</p>"}]}]},fm={day:22,title:"ML Foundations I — Regression, Classification & Model Evaluation",date_note:"Day 22 — Core algorithms, loss functions, and evaluation metrics",prev_day:21,next_day:23,week_label:"Week 4 — ML Foundations, Ranking & Ads",recap:{title:"ML Foundations I — Building your baseline intuition",points:["Linear regression minimizes sum of squared residuals: β = (XᵀX)⁻¹Xᵀy. Four LINE assumptions: Linearity, Independence, Normality, Equal variance.","Logistic regression: sigmoid σ(z) = 1/(1+e^{-z}) squashes to [0,1]. Log-loss = -[y log(p) + (1-y)log(1-p)] measures calibration.","Bias-variance tradeoff: Total error = Bias² + Variance + Noise. Underfitting (high bias) vs overfitting (high variance).","Regularization: L2 (Ridge) shrinks all weights proportionally. L1 (Lasso) pushes weights to exactly zero → feature selection.","Evaluation metric choice matters: log-loss for CTR models (calibration for auction), AUC for ranking quality, precision-recall for imbalanced data.","Today: core algorithms used at scale (logistic regression, trees, boosting). Tomorrow: production-grade calibration."]},topics:[{title:"Linear & Logistic Regression — Foundations",color:"#6366F1",content:`Linear regression minimizes squared error. The normal equations derive from setting gradient to zero:
∂/∂β Σ(yᵢ - βₓᵢ)² = 0
Solves to: β = (XᵀX)⁻¹Xᵀy

Four LINE assumptions for validity:
1. Linearity: relationship between X and y is linear
2. Independence: observations are independent
3. Normality: residuals are normally distributed
4. Equal variance (homoscedasticity): error variance is constant

Logistic regression for binary classification. Maps predictions to [0,1] using sigmoid:
σ(z) = 1 / (1 + e^{-z})
where z = βₓ.

Log-loss (cross-entropy): measures calibration quality.
For binary: -[y log(p) + (1-y)log(1-p)]
where p = σ(z) is predicted probability.

Decision boundary: σ(z) = 0.5 when z = 0 (always at probability 0.5).

Coefficient interpretation:
- Linear: 1-unit increase in x → β-unit increase in y (on original scale)
- Logistic: 1-unit increase in x → exp(β)× multiplicative change in odds

Python implementation:

from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import numpy as np

X_train = np.random.randn(1000, 5)
y_train = (X_train[:, 0] + 0.5 * X_train[:, 1] + np.random.randn(1000) > 0).astype(int)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

model = LogisticRegression(solver='lbfgs', max_iter=1000)
model.fit(X_train_scaled, y_train)

# Coefficients: impact of each feature on log-odds
print('Coefficients:', model.coef_[0])
print('Intercept:', model.intercept_[0])

# Predictions
X_test = scaler.transform(np.random.randn(10, 5))
probs = model.predict_proba(X_test)[:, 1]  # P(y=1)
print('Predicted probabilities:', probs)

# For CTR: coefficient of 0.5 on 'user_searches_last_7d' means:
# odds(click) multiply by exp(0.5) = 1.65× for each additional search
# This is interpretable: more search activity → 65% higher odds of clicking sponsored listing`,interview_tip:"For Expedia's ads CTR model: logistic regression is often the baseline — interpretable, fast, well-calibrated. Interview answer: 'I'd start with logistic regression as a baseline because it's interpretable and gives probability estimates for click probability. Then I'd upgrade to gradient boosting for production.' Key point: LR coefficients tell the story (which features drive CTR). Gradient boosting has higher AUC but is a black box without SHAP."},{title:"Bias-Variance Tradeoff — The Core ML Tension",color:"#8B5CF6",content:`Total error decomposes as:
E[error] = Bias² + Variance + Irreducible noise

Bias = error from wrong model assumptions (underfitting)
- High bias: model is too simple, misses signal
- Example: fitting linear regression to nonlinear data
- Squared so even small systematic errors compound

Variance = error from sensitivity to training data (overfitting)
- High variance: model memorizes training data
- Example: deep decision tree, high-degree polynomial
- Changes in training set → big changes in learned model

Irreducible noise = noise in the data itself (can't fix)

Diagnosis:
- High bias → training error = validation error = high
- High variance → training error low, validation error high (big gap)

Fixes for high bias (underfitting):
1. More features or feature engineering
2. More complex model (deeper trees, more parameters)
3. Less regularization (reduce λ)
4. Train longer (for neural nets)

Fixes for high variance (overfitting):
1. More training data (often the best fix)
2. Regularization: L1/L2 penalize weights, dropout for NN
3. Early stopping on validation loss
4. Feature selection (remove noise features)
5. Reduce model complexity (shallower trees, fewer features)
6. Cross-validation to estimate true generalization

Regularization mechanics:

Ridge (L2): Loss = MSE + λ Σβᵢ²
Shrinks all coefficients towards zero proportionally.
η = λ controls strength. As λ → ∞, all β → 0.

Lasso (L1): Loss = MSE + λ Σ|βᵢ|
Pushes weights to exactly zero due to L1 geometry.
Acts as automatic feature selection.

ElasticNet: combines both.

Python learning curves to diagnose:

from sklearn.model_selection import learning_curve
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import numpy as np

X = np.random.randn(500, 10)
y = X[:, 0] + 0.5 * X[:, 1] + np.random.randn(500) * 0.5

train_sizes, train_scores, val_scores = learning_curve(
    LinearRegression(), X, y, cv=5, 
    train_sizes=np.linspace(0.1, 1.0, 10),
    scoring='neg_mean_squared_error'
)

train_mean = -train_scores.mean(axis=1)
val_mean = -val_scores.mean(axis=1)

plt.plot(train_sizes, train_mean, label='Training error')
plt.plot(train_sizes, val_mean, label='Validation error')
plt.legend()
plt.xlabel('Training set size')
plt.ylabel('MSE')
plt.show()

# Convergence: if train and val both high, high bias (underfitting)
# If train low but val high, high variance (overfitting)

Regularization in sklearn:

from sklearn.linear_model import Ridge, Lasso, ElasticNet

ridge = Ridge(alpha=1.0)  # α = λ (higher = more regularization)
ridge.fit(X, y)

lasso = Lasso(alpha=0.1)
lasso.fit(X, y)
print('Non-zero coefficients:', np.sum(lasso.coef_ != 0))  # Feature selection

# Cross-validation to pick λ:
from sklearn.linear_model import RidgeCV
model = RidgeCV(alphas=[0.001, 0.01, 0.1, 1.0, 10.0], cv=5)
model.fit(X, y)
print('Best alpha:', model.alpha_)`,interview_tip:"At Expedia, you'll likely get 'model is performing worse in production than in validation.' Walk through: is it overfitting (high variance) or data drift? The bias-variance framing helps structure the diagnostic conversation. Show learning curves to prove the diagnosis. Then propose: 'I'd check if we're collecting more data weekly, which would reduce variance. Or add regularization. Or detect distributional shift in features (different user segments, different hotels).' This shows depth."},{title:"Evaluation Metrics — Beyond Accuracy",color:"#F59E0B",content:`Binary classification metrics:

Confusion matrix:
        Predicted 0  Predicted 1
Actual 0     TN           FP
Actual 1     FN           TP

Accuracy = (TP + TN) / (TP + TN + FP + FN)
Useless for imbalanced data (0.97 accuracy by predicting all negatives).

Precision = TP / (TP + FP): of predicted positives, what % are correct?
High precision → low false alarm rate.

Recall (Sensitivity) = TP / (TP + FN): of actual positives, what % did we catch?
High recall → low miss rate.

F1 = 2 × (Precision × Recall) / (Precision + Recall)
Harmonic mean. Good for imbalanced data if you care about positive class.

ROC-AUC (Area Under ROC Curve):
Plots TPR (recall) vs FPR = FP / (FP + TN) across all thresholds.
AUC = 0.5 is random, 1.0 is perfect.
Threshold-independent, good for ranking quality.
Poor for imbalanced data (100k negatives, 100 positives → lots of room under curve even if model is mediocre).

Precision-Recall Curve (better for imbalanced):
Plots Precision vs Recall across thresholds.
PR-AUC = area under PR curve. More sensitive to minority class.

Log-Loss (Cross-Entropy):
- For binary: -[y log(p) + (1-y)log(1-p)] averaged over all samples
- Heavily penalizes confident wrong predictions
- Measures calibration: if you predict p=0.99 and y=0, loss = -log(0.01) ≈ 4.6
- Crucial for CTR models (calibration = fair auction)

Regression metrics:

MSE = Σ(yᵢ - ŷᵢ)² / n (penalizes large errors quadratically)
RMSE = √MSE (on original scale)
MAE = Σ|yᵢ - ŷᵢ| / n (robust to outliers, average absolute deviation)
MAPE = Σ|yᵢ - ŷᵢ| / |yᵢ| / n (percentage, good for comparing across scales)
R² = 1 - (SS_res / SS_tot) (fraction of variance explained)

When to use each:

Metric                Use case
---                   --------
AUC-ROC              Ranking quality, threshold-agnostic evaluation
AUC-PR               Imbalanced classification, care about positive class
Log-loss             CTR/probability models, calibration matters (auction)
F1 / Precision-Recall Imbalanced, specific cost of false positives vs false negatives
Accuracy             Balanced classes only
RMSE                 Regression, outliers don't dominate
MAE                  Regression, robust to outliers
MAPE                 Revenue forecasting, percentage error matters
NDCG                 Ranking (search results, recommendations)

Python implementation:

from sklearn.metrics import (
    confusion_matrix, precision_recall_fscore_support,
    roc_auc_score, precision_recall_curve, auc, log_loss,
    classification_report, roc_curve
)
import numpy as np

y_true = np.array([0, 0, 1, 1, 0, 1, 1, 0])
y_pred_proba = np.array([0.1, 0.2, 0.7, 0.9, 0.3, 0.6, 0.95, 0.15])
y_pred = (y_pred_proba > 0.5).astype(int)

# Classification report
print(classification_report(y_true, y_pred))
# Output: precision, recall, f1 for each class

# ROC-AUC
roc_auc = roc_auc_score(y_true, y_pred_proba)
print(f'ROC-AUC: {roc_auc:.3f}')

# PR-AUC
precision, recall, _ = precision_recall_curve(y_true, y_pred_proba)
pr_auc = auc(recall, precision)
print(f'PR-AUC: {pr_auc:.3f}')

# Log-loss (lower is better)
ll = log_loss(y_true, y_pred_proba)
print(f'Log-loss: {ll:.3f}')

# For imbalanced data (e.g., 3% positive rate):
from sklearn.metrics import f1_score
thresh = 0.3  # lower threshold → higher recall
y_pred_adj = (y_pred_proba > thresh).astype(int)
f1 = f1_score(y_true, y_pred_adj)
print(f'F1 at threshold {thresh}: {f1:.3f}')`,interview_tip:"Expedia ads CTR model: the right metric is log-loss (because pCTR needs to be calibrated for auction — wrong calibration = unfair bids). Not just AUC. This is a key distinction. Mention it when asked about model evaluation for ads. Explain: 'AUC measures whether the model ranks hotels in correct order. Log-loss measures whether predicted probabilities match true frequencies. For auction, both matter, but log-loss is primary because bid × pCTR determines rank. Miscalibrated pCTR = unfair outcomes.'"},{title:"Feature Engineering & Selection",color:"#10B981",content:`Feature types and transformations:

Numerical features:
- Standardization: (x - mean) / std (for linear models, NN, distance-based)
- Normalization: (x - min) / (max - min) (scale to [0,1])
- Log transform: log(x) (for skewed distributions, e.g., revenue, pageviews)
- Polynomial features: x, x², √x (capture non-linearity)

Categorical features:
- One-hot encoding: create binary column per category (for LR, NN)
- Label encoding: map to 0,1,2,... (for tree models)
- Target encoding: replace with mean target value in that category (high variance if small groups)
- Embedding: learned dense vector (for high-cardinality, NN)

Temporal features:
- Hour, day-of-week, month from timestamp (periodic patterns)
- Day-since-signup, days-active-last-30d (user tenure effects)
- Lag features: y[t-1], y[t-7] (autoregressive, for time series)
- Rolling mean/std: smoothed historical signal

Missing value handling:
- Numerical: mean imputation (preserves mean), median (robust to outliers), forward-fill (time series)
- Categorical: mode, 'Unknown' category, or separate 'Missing' indicator
- Missingness pattern: create binary column for 'was missing' (may be informative)

Target leakage: most common reason for 'works in training, fails in production'.

Leakage examples:
1. Using 'paid_amount' to predict 'will_pay' (circular)
2. Using aggregate computed from target (e.g., 'hotel_avg_booking_rate' if computed from all historical bookings including future test data)
3. Using future information (e.g., 'user_searched_again_next_week' to predict current booking)
4. Lookahead bias: feature computed from data not available at prediction time

Feature selection methods:

Correlation filter: remove features correlated > 0.95 with others (multicollinearity).
Mutual information: MI(X, y) = 0 if independent. Univariate, fast.
LASSO (L1): automatically zeros out weak features during training.
Tree feature importance: mean decrease in impurity or gain. Biased towards high-cardinality features.
SHAP: per-prediction feature contribution. Model-agnostic, interpretable.
RFE (Recursive Feature Elimination): iteratively train, drop weakest feature, repeat.

Python pipeline:

from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.ensemble import GradientBoostingClassifier

numerical_features = ['price', 'rating', 'searches_last_7d']
categorical_features = ['country', 'hotel_type', 'user_device']

# Numerical: impute mean, then standardize
numerical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='mean')),
    ('scaler', StandardScaler())
])

# Categorical: impute 'Unknown', one-hot
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='Unknown')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)
    ]
)

model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', GradientBoostingClassifier())
])

model.fit(X_train, y_train)
model.score(X_test, y_test)

# Feature importance from tree
feature_names = (
    numerical_features + 
    list(model.named_steps['preprocessor']
        .named_transformers_['cat']
        .named_steps['onehot']
        .get_feature_names_out(categorical_features))
)
importances = model.named_steps['classifier'].feature_importances_
for name, imp in sorted(zip(feature_names, importances), key=lambda x: x[1], reverse=True)[:10]:
    print(f'{name}: {imp:.4f}')

# Leakage detection:
# 1. Audit features: when would they be available at prediction time?
# 2. Check for aggregates computed from target
# 3. Plot feature distributions on train vs validation → distribution shift is normal, but drastic difference → leakage
# 4. If training metric is suspiciously high, investigate for leakage before celebrating`,interview_tip:"Target leakage is the #1 cause of 'model works great in training but fails in production.' Always ask: could this feature have been available at prediction time, or does it leak information from the future? Example: if you're predicting hotel booking at search time, you can't use 'user_viewed_competing_hotel' (viewed after the search). Auditing features is a skill recruiters look for. Say: 'For each feature, I'd ask: what's the exact time it's available? Is it deterministic at prediction time or does it change?' This shows rigor."}],practice_questions:[{q:"[Expedia ML] You're building a CTR (click-through rate) prediction model for sponsored hotel listings. What algorithm do you start with and why? What evaluation metric do you use?",a:`Start with logistic regression as baseline: fast, interpretable, probability output. Then upgrade to gradient boosting (LightGBM/XGBoost) for production. Metric: log-loss (NOT AUC). Reasoning: pCTR is used in auction rank = pCTR × bid. If pCTR is overestimated by 20%, advertisers overpay, auction unfair. AUC measures ranking quality (relative order) but not calibration (absolute probability accuracy). Log-loss penalizes miscalibration. Code:

from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import log_loss, roc_auc_score
import numpy as np

X_train, y_train = ...
X_val, y_val = ...

# Baseline
lr = LogisticRegression()
lr.fit(X_train, y_train)
y_pred_lr = lr.predict_proba(X_val)[:, 1]
print(f'LR Log-loss: {log_loss(y_val, y_pred_lr):.4f}')
print(f'LR AUC: {roc_auc_score(y_val, y_pred_lr):.4f}')

# Production model
gb = GradientBoostingClassifier(n_estimators=500, max_depth=5, learning_rate=0.05)
gb.fit(X_train, y_train)
y_pred_gb = gb.predict_proba(X_val)[:, 1]
print(f'GB Log-loss: {log_loss(y_val, y_pred_gb):.4f}')  # Primary metric
print(f'GB AUC: {roc_auc_score(y_val, y_pred_gb):.4f}')  # Secondary

# Next: calibrate with Platt scaling (covered Day 23)`,say_aloud:"The key insight the interviewer wants: log-loss for CTR models, not just AUC. Calibration matters because pCTR is plugged into the auction formula: rank = pCTR × bid. If pCTR is wrong by 20%, the auction produces unfair results. A model can have stable AUC but drifting calibration — they're independent properties.",company:"Expedia",difficulty:"Hard"},{q:"[General] Your model has training AUC=0.95, validation AUC=0.72. What's happening? How do you diagnose and fix it?",a:`Classic overfitting (high variance). Training performs much better than validation → model memorized training data. Diagnosis: 1) Plot learning curves to confirm training loss decreases while validation loss increases (or stays high). 2) Check if training data has different distribution than validation (data drift). 3) Inspect model complexity vs training set size. Fixes: (1) Reduce model complexity: max_depth, min_samples_leaf (trees), fewer layers (NN). (2) Regularization: L2 for linear, max_depth/min_child_weight for trees, dropout for NN. (3) More training data (best but often infeasible). (4) Feature selection (remove noise). (5) Early stopping on validation loss. Also check: is training AUC suspiciously high? If so, investigate target leakage. Code:

from sklearn.model_selection import learning_curve
from sklearn.ensemble import GradientBoostingClassifier

train_sizes, train_scores, val_scores = learning_curve(
    GradientBoostingClassifier(max_depth=5, learning_rate=0.05, n_estimators=100),
    X, y, cv=5, scoring='roc_auc'
)

train_auc = train_scores.mean(axis=1)
val_auc = val_scores.mean(axis=1)

# If val_auc is flat and train_auc keeps rising → high variance
# Fix: reduce max_depth, add L2 regularization (subsample), increase training data

# Try regularized version:
gb_reg = GradientBoostingClassifier(
    max_depth=3,  # reduced from 5
    learning_rate=0.03,  # lower
    n_estimators=200,  # more trees, lower lr → more regularization
    subsample=0.8,  # 80% of data per iteration
    max_features='sqrt',  # only sqrt(n_features) considered per split
    validation_fraction=0.2,
    n_iter_no_change=10  # early stopping
)
gb_reg.fit(X_train, y_train)`,say_aloud:"The gap between training and validation is the signature of overfitting. I'd start by reducing model complexity — that's the fastest fix. Then add regularization. If both training and validation are high, it's high bias (underfitting) — opposite problem. Mention learning curves: they tell the story of what's wrong.",company:"All",difficulty:"Medium"},{q:"[Expedia] You have a dataset where 97% of hotel searches don't result in a booking (3% positive rate). Which metrics do you use and why? Which do you avoid?",a:`Use: Precision-Recall curve (PR-AUC), F1 score, log-loss (if probability calibration matters). Avoid: Accuracy (97% by predicting all negatives is useless), AUC-ROC (can be misleading with extreme class imbalance). Reasoning: with 97% negatives, even a random model achieves reasonable AUC because false positive rate is computed on a huge denominator. PR curve focuses on positive class performance. Business framing: Precision = of predicted bookers, what % actually book? Recall = of actual bookers, what % did we identify? Threshold selection depends on cost: high precision if outreach cost is high; high recall if missing a booker is expensive. Code:

from sklearn.metrics import precision_recall_curve, auc, f1_score
import numpy as np

y_true = np.random.binomial(1, 0.03, size=10000)  # 3% positive
y_pred_proba = np.random.rand(10000)  # random predictions

# PR curve
precision, recall, thresholds = precision_recall_curve(y_true, y_pred_proba)
pr_auc = auc(recall, precision)
print(f'PR-AUC: {pr_auc:.4f}')

# Find threshold for 80% recall
idx = np.argmax(recall >= 0.8)
thresh = thresholds[idx]
print(f'Threshold for 80% recall: {thresh:.3f}')
print(f'Precision at this threshold: {precision[idx]:.3f}')

# F1 at different thresholds
for t in [0.01, 0.05, 0.1, 0.2]:
    y_pred = (y_pred_proba > t).astype(int)
    f1 = f1_score(y_true, y_pred)
    print(f'Threshold {t}: F1={f1:.3f}')`,say_aloud:"With 97% negative class, accuracy is a trap. PR-AUC is much better because it ignores the massive true negative denominator. The threshold you pick depends on business cost: if we have limited outreach budget, optimize for precision. If we want to catch as many bookers as possible, optimize for recall. Show this flexibility.",company:"Expedia",difficulty:"Medium"},{q:"[Expedia DS Loop] Walk me through choosing between logistic regression, random forest, and gradient boosting for a travel recommendation model. What are the tradeoffs?",a:`Logistic Regression: interpretable, fast (~ms inference), well-calibrated, good baseline. Works well with sparse features (one-hot). Fails: can't capture non-linear relationships, struggles with complex feature interactions. Random Forest: handles non-linearity, robust to outliers, low tuning overhead, good feature importance out-of-box. Fails: slower inference than LR, struggles with very sparse data (many categories → many binary features), often worse calibration than LR. Gradient Boosting (LGBM/XGBoost): best accuracy on tabular data, handles mixed feature types well, built-in regularization, fast training on large data (LGBM). Fails: slower training than LR/RF, harder to calibrate probabilities, many hyperparameters to tune. Production choice: LightGBM for CTR/ranking (industry standard, good AUC), logistic regression for real-time low-latency scenarios where interpretability needed. Code:

from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
import lightgbm as lgb
from sklearn.metrics import log_loss, roc_auc_score

X_train, y_train = ...
X_val, y_val = ...

models = {
    'LR': LogisticRegression(max_iter=1000),
    'RF': RandomForestClassifier(n_estimators=100, max_depth=15),
    'GB': GradientBoostingClassifier(n_estimators=200, max_depth=5, learning_rate=0.05),
    'LGBM': lgb.LGBMClassifier(num_leaves=127, n_estimators=1000, learning_rate=0.05)
}

for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict_proba(X_val)[:, 1]
    print(f'{name}: AUC={roc_auc_score(y_val, y_pred):.4f}, Log-loss={log_loss(y_val, y_pred):.4f}')

# LGBM wins on AUC, but needs calibration (Platt scaling) for production CTR`,say_aloud:"In practice for CTR at Expedia-scale: LightGBM wins on accuracy, but you need a calibration step (Platt scaling, explained tomorrow) on top to fix probability estimates for auction. Logistic regression is the interpretable baseline and sometimes used for the last layer of ensembles. The tradeoff is accuracy (GB) vs interpretability and calibration (LR). SHAP can make GB more interpretable, but that's post-hoc. If you have time budget for tuning, LGBM wins. If you need interpretable decisions, LR is safer.",company:"Expedia",difficulty:"Hard"}],derivations:["Write the logistic sigmoid function and derive the log-loss from it","What is the bias-variance decomposition? Which term does regularization reduce?","What's the difference between AUC-ROC and AUC-PR? When is each better for imbalanced data?","Explain L1 vs L2 regularization: which produces sparse models and why (geometric intuition)?","What is target leakage? Give one concrete example for a travel booking prediction model"],resources:[{name:"StatQuest: Logistic Regression",url:"https://www.youtube.com/watch?v=yIYKR4sgzI8"},{name:"ESL: Elements of Statistical Learning (free PDF)",url:"https://hastie.su.domains/ElemStatLearn/"},{name:"sklearn User Guide: Model Evaluation",url:"https://scikit-learn.org/stable/modules/model_evaluation.html"},{name:"Google ML Crash Course",url:"https://developers.google.com/machine-learning/crash-course"}]},gm={day:23,title:"ML Foundations II — Trees, Boosting & Calibration",date_note:"Day 23 — Production algorithms, calibration, and hyperparameter tuning",prev_day:22,next_day:24,week_label:"Week 4 — ML Foundations, Ranking & Ads",recap:{title:"ML Foundations II — From baseline to production",points:["Logistic regression: sigmoid → log-loss. Bias-variance: complexity tradeoff.","AUC-ROC vs log-loss: use log-loss for CTR models (calibration matters for auction)","Regularization: L1=sparse (feature selection), L2=shrinkage (all features retained)","Target leakage: feature contains future information → great training score, fails in production","Today: the algorithms actually used in ads CTR models — gradient boosting and calibration"]},topics:[{title:"Decision Trees — The Building Block",color:"#6366F1",content:`Decision trees partition feature space recursively with binary splits. At each node, choose feature and threshold that best separate data.

Split criterion: Gini Impurity (default in sklearn)
Gini = 1 - Σpᵢ²
where pᵢ = fraction of class i at node.
For binary classification with 50-50 split: Gini = 1 - (0.5² + 0.5²) = 0.5 (maximum, worst)
For pure node (all class 0): Gini = 1 - (1² + 0²) = 0 (best)

Alternatively, Information Gain using Entropy:
Entropy = -Σpᵢ log₂(pᵢ)
Information gain = Entropy_parent - Σ(frac_child × Entropy_child)
Choose split that maximizes gain (minimize weighted child entropy).

Stopping criteria (prevent overfitting):
- max_depth: max tree depth (e.g., 5 means max 5 levels)
- min_samples_split: don't split node unless it has ≥ N samples
- min_samples_leaf: don't create leaf unless it has ≥ N samples
- min_impurity_decrease: only split if gain > threshold

Feature importance: mean decrease in impurity
For each feature, sum the decrease in Gini across all splits using that feature.
Features used more often and reducing impurity more → higher importance.

Pruning: Cost-Complexity Pruning (CCP). After full growth, remove branches that don't reduce validation error.

Advantages:
- Interpretable: decision path is explicit
- Handles mixed types: no scaling needed
- Feature interactions: tree discovers them automatically
- Non-parametric: no distributional assumptions

Disadvantages:
- High variance: small data changes → very different tree
- Piecewise constant predictions: poor extrapolation
- Greedy: local optimization, not global optimal tree

Python implementation:

from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

X_train = [[0, 0], [1, 1], [2, 2], [0, 2], [2, 0]]
y_train = [0, 1, 1, 1, 0]

# Full tree (likely to overfit)
tree_full = DecisionTreeClassifier()
tree_full.fit(X_train, y_train)
print('Full tree nodes:', tree_full.tree_.node_count)

# Regularized tree
tree_reg = DecisionTreeClassifier(
    max_depth=3,
    min_samples_split=5,
    min_samples_leaf=2,
    min_impurity_decrease=0.01
)
tree_reg.fit(X_train, y_train)
print('Regularized tree nodes:', tree_reg.tree_.node_count)

# Visualization
plt.figure(figsize=(12, 8))
plot_tree(tree_reg, feature_names=['feature_0', 'feature_1'],
          class_names=['class_0', 'class_1'], filled=True)
plt.show()

# Feature importance
for feature_idx, importance in enumerate(tree_reg.feature_importances_):
    print(f'Feature {feature_idx}: {importance:.4f}')

# Cost-Complexity Pruning
path = tree_full.cost_complexity_pruning_path(X_train, y_train)
ccp_alphas = path.ccp_alphas
trees = []
for ccp_alpha in ccp_alphas:
    tree = DecisionTreeClassifier(random_state=0, ccp_alpha=ccp_alpha)
    tree.fit(X_train, y_train)
    trees.append(tree)
print(f'Number of nodes in trees: {[t.tree_.node_count for t in trees]}')`,interview_tip:"Decision trees are rarely used alone in industry. They're the foundation for understanding random forests and gradient boosting. When asked about trees, always connect to: 'and that's why we use ensembles — to reduce the high variance of individual trees.' Show you understand the weakness (high variance) and the solution (averaging/boosting). Interviewers want to see you think in terms of algorithms → ensemble → production robustness."},{title:"Random Forests & Gradient Boosting — Industry Standard",color:"#8B5CF6",content:`Random Forest: BAGGING (parallel, reduce variance)
Algorithm:
1. For b = 1 to B (number of trees):
   - Draw bootstrap sample (random sample with replacement, size n)
   - Train full decision tree on bootstrap sample (no pruning)
   - Each split considers only random subset of √p features
2. Average predictions: ŷ = (1/B) Σ tree_b(x) [regression] or majority vote [classification]

Why it works: averaging independent trees reduces variance.
Var(average) = Var(single) / B (if independent, which bootstrap approximates)
Out-of-bag error: ~1/3 of samples not in each bootstrap → free validation set
Feature importance: average decrease in impurity across all trees

Gradient Boosting: BOOSTING (sequential, reduce bias)
Algorithm:
1. Initialize F₀(x) = mean(y) [regression] or log(odds) [classification]
2. For t = 1 to T (number of iterations):
   - Compute pseudo-residuals (negative gradient): rᵢ = -∂L(yᵢ, Fₜ₋₁(xᵢ))/∂Fₜ₋₁
   - Fit shallow tree hₜ to predict residuals rᵢ from x
   - Update: Fₜ(x) = Fₜ₋₁(x) + η × hₜ(x)   [η = learning rate]
3. Return F_final(x)

For log-loss (binary classification):
Pseudo-residual = yᵢ - σ(Fₜ₋₁(xᵢ)) = actual - predicted probability
The tree corrects the model in regions where prediction is wrong.

Key hyperparameters:
- n_estimators: number of boosting rounds (more = lower bias, higher variance; use early stopping)
- max_depth: tree depth (3-8 for boosting, shallow trees work better)
- learning_rate (η): step size (0.01-0.1, lower = more gradual, need more trees)
- subsample: fraction of data per iteration (0.5-1.0, adds randomness)
- colsample: fraction of features per tree (0.5-1.0, reduces overfitting)
- min_child_weight: minimum leaf weight (higher = more conservative)

LightGBM (Light Gradient Boosting Machine): speed optimizations
- Histogram-based splitting: bin continuous features, faster than exact splits
- Leaf-wise growth: splits best leaf (best loss reduction) vs level-wise (XGBoost)
- LGBM faster on large data, fewer parameters to tune, good default

Python code:

from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
import lightgbm as lgb
from sklearn.metrics import log_loss
import numpy as np

X_train, y_train = ...
X_val, y_val = ...

# Random Forest
rf = RandomForestClassifier(
    n_estimators=100,
    max_depth=15,
    min_samples_split=5,
    min_samples_leaf=2,
    max_features='sqrt'  # sqrt(n_features) per split
)
rf.fit(X_train, y_train)
y_pred_rf = rf.predict_proba(X_val)[:, 1]
print(f'RF Log-loss: {log_loss(y_val, y_pred_rf):.4f}')
print(f'Feature importance: {rf.feature_importances_}')

# Gradient Boosting (sklearn)
gb = GradientBoostingClassifier(
    n_estimators=200,
    max_depth=5,
    learning_rate=0.05,
    subsample=0.8,
    min_samples_leaf=20,
    validation_fraction=0.2,
    n_iter_no_change=10  # early stopping
)
gb.fit(X_train, y_train)
y_pred_gb = gb.predict_proba(X_val)[:, 1]
print(f'GB Log-loss: {log_loss(y_val, y_pred_gb):.4f}')

# LightGBM (production choice for CTR at scale)
model_lgbm = lgb.LGBMClassifier(
    n_estimators=1000,
    num_leaves=127,  # 2^7 = 128 leaf nodes per tree
    learning_rate=0.05,
    max_depth=10,  # LGBM will auto-limit based on num_leaves
    subsample=0.8,
    colsample_bytree=0.8,
    min_child_samples=20,
    verbose=-1
)

# Create validation set for early stopping
model_lgbm.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    eval_metric='binary_logloss',
    callbacks=[
        lgb.early_stopping(stopping_rounds=50),
        lgb.log_evaluation(period=100)
    ]
)

y_pred_lgbm = model_lgbm.predict_proba(X_val)[:, 1]
print(f'LGBM Log-loss: {log_loss(y_val, y_pred_lgbm):.4f}')
print(f'Best iteration: {model_lgbm.best_iteration}')`,interview_tip:"For Expedia ads CTR model: LightGBM is the industry standard. Key params to mention: num_leaves=127, learning_rate=0.05, n_estimators=1000 with early stopping on validation log-loss. Feature engineering matters more than model tuning at this scale. Say: 'I'd spend 70% of time on features (historical CTR, position bias correction, user signals) and 30% on tuning.' Then mention: 'After training LGBM, I'd apply Platt scaling to calibrate outputs, because LGBM's log-loss is low but probabilities aren't always well-calibrated for auction.'"},{title:"Calibration — The Most Important Concept for Ads CTR",color:"#EC4899",content:`Calibration: a model is well-calibrated if predicted probability = true frequency.
Example: divide predictions into bins [0.0-0.1], [0.1-0.2], ..., [0.9-1.0]. For all samples with predicted p in [0.1-0.2], true frequency should be ~0.15. If true frequency is 0.3, model is overconfident.

Why calibration matters for ads:
Rank score = pCTR × bid
If pCTR is systematically overestimated by 20%:
- Each advertiser bids correctly for true CTR
- But rank score is 20% too high → ranks higher than deserved
- Wins impressions they shouldn't → overpays (second-price auction)
- Budget depletes faster → lower ROI
- Auction is unfair: high bidders get inflated rank

Calibration metrics:

Expected Calibration Error (ECE):
ECE = Σ |accuracy_bin - avg_prediction_bin| × (count_bin / total)
Bin predictions into 10 deciles, compute accuracy (fraction positive) in each bin.
Average prediction should equal accuracy. Sum absolute differences weighted by bin size.
ECE = 0 is perfect, 0.05 is good, >0.1 is poor.

Reliability diagram: plot predicted probability (x) vs actual frequency (y) for each bin.
Should lie on diagonal y=x. If curve is above diagonal, model is underconfident (predicts low, actual high). If below, overconfident (predicts high, actual low).

Calibration methods:

Platt Scaling (logistic calibration):
1. Train model on training data, get outputs s = model(x)
2. On held-out validation set, fit logistic regression to s vs true y
   p_calibrated = σ(a × s + b)
   where σ(z) = 1 / (1 + e^{-z}) and a, b are learned
3. Apply to test: p_test = σ(a × model(x_test) + b)

Advantages: parametric, fast, sklearn built-in (CalibratedClassifierCV).
Disadvantages: only 2 parameters, may not capture complex miscalibration.

Isotonic Regression (non-parametric):
Fit monotonically increasing function f to s vs y on validation.
More flexible than Platt (no parametric form).
Harder to overfit (monotonic constraint).

Temperature Scaling (for neural networks):
p_calibrated = softmax(logits / T)
where T > 1 is temperature. Divides logits by T, softens probabilities.
Simple 1-parameter fix for overconfident NN.

Calibration drift: model becomes miscalibrated over time.
Causes: user behavior changes, advertiser mix shifts, seasonality, product changes.
Detection: monitor ECE weekly in production. If ECE > threshold, alert.
Fix: periodic recalibration on recent 30 days of data using Platt scaling.

Python code:

from sklearn.calibration import calibration_curve, CalibratedClassifierCV
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import GradientBoostingClassifier
import numpy as np
import matplotlib.pyplot as plt

X_train, y_train = ...
X_val, y_val = ...
X_test, y_test = ...

# Train base model
model = GradientBoostingClassifier(n_estimators=200, max_depth=5)
model.fit(X_train, y_train)

# Reliability diagram (before calibration)
prob_pred = model.predict_proba(X_test)[:, 1]
frac_pos, mean_pred = calibration_curve(y_test, prob_pred, n_bins=10)

plt.figure(figsize=(8, 6))
plt.plot(mean_pred, frac_pos, 'o-', label='Uncalibrated')
plt.plot([0, 1], [0, 1], 'k--', label='Perfectly calibrated')
plt.xlabel('Mean predicted probability')
plt.ylabel('Fraction of positives')
plt.legend()
plt.title('Calibration curve')
plt.show()

# Platt scaling
calibrator = CalibratedClassifierCV(
    model, method='sigmoid', cv='precomputed'
)
# Fit on validation set
calibrator.fit(X_val, y_val)

# Calibrated predictions
prob_calibrated = calibrator.predict_proba(X_test)[:, 1]

# Check improvement
frac_pos_cal, mean_pred_cal = calibration_curve(y_test, prob_calibrated, n_bins=10)
plt.figure(figsize=(8, 6))
plt.plot(mean_pred, frac_pos, 'o-', label='Uncalibrated')
plt.plot(mean_pred_cal, frac_pos_cal, 's-', label='Platt scaling')
plt.plot([0, 1], [0, 1], 'k--', label='Perfect')
plt.xlabel('Mean predicted probability')
plt.ylabel('Fraction of positives')
plt.legend()
plt.show()

# Expected Calibration Error
def compute_ece(y_true, y_pred, n_bins=10):
    bin_boundaries = np.linspace(0, 1, n_bins + 1)
    bin_lowers = bin_boundaries[:-1]
    bin_uppers = bin_boundaries[1:]
    bin_sums = np.zeros(n_bins)
    bin_true = np.zeros(n_bins)
    bin_total = np.zeros(n_bins)
    
    for bin_lower, bin_upper in zip(bin_lowers, bin_uppers):
        in_bin = (y_pred > bin_lower) & (y_pred <= bin_upper)
        prop_in_bin = in_bin.mean()
        if prop_in_bin > 0:
            accuracy_in_bin = y_true[in_bin].mean()
            avg_confidence_in_bin = y_pred[in_bin].mean()
            bin_sums += np.abs(avg_confidence_in_bin - accuracy_in_bin) * prop_in_bin
    
    return bin_sums.sum()

ece_uncal = compute_ece(y_test, prob_pred)
ece_cal = compute_ece(y_test, prob_calibrated)
print(f'ECE uncalibrated: {ece_uncal:.4f}')
print(f'ECE calibrated: {ece_cal:.4f}')`,interview_tip:"Calibration drift is on the Expedia recruiter's list. Answer: 'I'd monitor calibration weekly by bucketing predicted pCTR into bins and comparing vs actual CTR. If ECE exceeds threshold (e.g., 0.05), I'd trigger recalibration using Platt scaling on recent 30 days of data. The key insight: a model can have stable AUC but drifting calibration — AUC measures ranking, not absolute probability accuracy. For the auction, both matter but calibration is mission-critical.'"},{title:"Hyperparameter Tuning & Cross-Validation",color:"#F59E0B",content:`k-fold cross-validation:
Split data into k folds (e.g., k=5). For each fold:
- Train on k-1 folds
- Validate on 1 fold
- Rotate to different fold
Average validation metric across k runs. More robust than single train/val split.

Stratified k-fold: preserve class distribution in each fold (critical for imbalanced data).
If true data is 3% positive, each fold should have ~3% positive.

Time series cross-validation: for temporal data, never use future data for training.
Split: train on [0:t], validate on [t:t+w], then train on [0:t+w], validate on [t+w:t+2w], etc.
No shuffling.

Hyperparameter tuning strategies:

Grid search: try all combinations in predefined grid.
Pros: exhaustive, easy to parallelize
Cons: exponential combinations, may miss optimal between grid points

Random search: sample random points from distribution.
Pros: often finds better solutions with fewer iterations (Bergstra & Bengio 2012)
Cons: less systematic

Bayesian optimization: model hyperparameter space as Gaussian Process, sample where EI (expected improvement) is high.
Pros: sample-efficient, learns from previous trials
Cons: more complex

Early stopping: train iterative model (boosting, NN) and monitor validation loss.
Stop when validation loss hasn't improved for N iterations.
Reduces training time, prevents overfitting.

Key Gradient Boosting hyperparameters:

n_estimators: number of boosting rounds
- More = lower bias, higher variance
- Use early stopping to find optimal
- Start high (1000+), let early stopping decide

max_depth (for LGBM: max_depth, or num_leaves): tree depth
- 3-8 typical for boosting (shallow trees)
- Deeper = higher variance, captures more interaction
- Start with 5-6, tune based on overfitting

learning_rate (η): step size
- 0.01-0.1 typical
- Lower = more stable, need more trees
- High = may oscillate, poor generalization
- Often paired with n_estimators: lower lr → more estimators
- Classical wisdom: lr=0.1 with 100 trees, or lr=0.01 with 1000 trees (similar final)

min_child_weight (LGBM: min_child_samples): minimum leaf weight
- Higher = more conservative, less overfitting
- If data is n=10,000, start with min_child=10-20
- Helps with imbalanced data (prevent fitting noise in rare class)

subsample: fraction of data sampled per iteration
- 0.5-1.0
- Lower = more regularization, faster training
- Start with 0.8 (80% of data per round)

colsample_bytree: fraction of features sampled per tree
- 0.5-1.0
- Reduces overfitting, introduces randomness
- Start with 0.8

Python code for tuning:

from sklearn.model_selection import RandomizedSearchCV
import lightgbm as lgb
from scipy.stats import uniform, randint
import numpy as np

X_train, y_train = ...
X_val, y_val = ...

# Random search with LGBM
param_dist = {
    'num_leaves': randint(31, 255),
    'max_depth': randint(3, 15),
    'learning_rate': uniform(0.01, 0.2),
    'min_child_samples': randint(5, 50),
    'subsample': uniform(0.6, 0.4),
    'colsample_bytree': uniform(0.6, 0.4)
}

model = lgb.LGBMClassifier(n_estimators=1000, verbose=-1)

random_search = RandomizedSearchCV(
    model, param_dist, n_iter=50, cv=5,
    scoring='neg_log_loss', n_jobs=-1, random_state=42
)

random_search.fit(X_train, y_train)

print(f'Best params: {random_search.best_params_}')
print(f'Best log-loss: {-random_search.best_score_:.4f}')

# Manual tuning with early stopping
best_model = lgb.LGBMClassifier(
    num_leaves=random_search.best_params_['num_leaves'],
    max_depth=random_search.best_params_['max_depth'],
    learning_rate=random_search.best_params_['learning_rate'],
    n_estimators=1000,
    subsample=random_search.best_params_['subsample'],
    colsample_bytree=random_search.best_params_['colsample_bytree'],
    verbose=-1
)

best_model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    eval_metric='binary_logloss',
    callbacks=[
        lgb.early_stopping(stopping_rounds=50),
        lgb.log_evaluation(period=100)
    ]
)

print(f'Stopped at iteration: {best_model.best_iteration}')`,interview_tip:"The standard answer for tuning a CTR model: 'I'd use early stopping with a 20% validation split, tune learning_rate and max_depth with random search in the reasonable range, and monitor both log-loss and calibration error on a held-out test set. I'd start with defaults that work on tabular data (num_leaves=127, learning_rate=0.05) and move from there. Most importantly, I'd separate hyperparameter tuning from calibration — tune for log-loss, then calibrate separately with Platt scaling.'"}],practice_questions:[{q:"[Expedia Ads] You need to build a pCTR (predicted click-through rate) model for sponsored hotel listings. Walk through: feature engineering, model choice, training, evaluation, and calibration.",a:`Feature engineering: User features (search intensity signals, device, market, time-of-day, recency), item features (hotel rating, star rating, price, historical CTR, occupancy), context (query details, competition level). Model choice: LightGBM (industry standard for CTR at Expedia scale). Training: stratified k-fold to preserve 3% positive class. Early stopping on validation log-loss. Hyperparameters: num_leaves=127, learning_rate=0.05, n_estimators=1000, min_child_samples=20, subsample=0.8. Evaluation: primary metric is log-loss (calibration), secondary is AUC (ranking). Plot calibration curve; should lie on diagonal. Calibration: Platt scaling on held-out validation set. Fit logistic regression on raw LGBM scores vs true labels, get a,b, apply p_cal = σ(a×score + b). Production monitoring: ECE weekly. Alert if ECE > 0.05. Recalibrate on last 30 days if drift detected. Code:

import lightgbm as lgb
from sklearn.calibration import CalibratedClassifierCV
from sklearn.metrics import log_loss, roc_auc_score, calibration_curve
import numpy as np

X_train, y_train = ...
X_val, y_val = ...
X_test, y_test = ...

# Train LGBM
model_lgbm = lgb.LGBMClassifier(
    num_leaves=127, learning_rate=0.05, n_estimators=1000,
    min_child_samples=20, subsample=0.8, verbose=-1
)

model_lgbm.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    eval_metric='binary_logloss',
    callbacks=[lgb.early_stopping(50), lgb.log_evaluation(100)]
)

# Evaluation before calibration
y_pred = model_lgbm.predict_proba(X_test)[:, 1]
print(f'Log-loss: {log_loss(y_test, y_pred):.4f}')
print(f'AUC: {roc_auc_score(y_test, y_pred):.4f}')

# Calibration
calibrator = CalibratedClassifierCV(model_lgbm, method='sigmoid', cv='precomputed')
calibrator.fit(X_val, y_val)
y_pred_cal = calibrator.predict_proba(X_test)[:, 1]

print(f'Calibrated log-loss: {log_loss(y_test, y_pred_cal):.4f}')

# ECE monitoring
def compute_ece(y_true, y_pred, n_bins=10):
    bin_boundaries = np.linspace(0, 1, n_bins + 1)
    ece = 0
    for lower, upper in zip(bin_boundaries[:-1], bin_boundaries[1:]):
        in_bin = (y_pred > lower) & (y_pred <= upper)
        if in_bin.sum() > 0:
            acc = y_true[in_bin].mean()
            conf = y_pred[in_bin].mean()
            ece += np.abs(acc - conf) * in_bin.mean()
    return ece

ece = compute_ece(y_test, y_pred_cal)
print(f'ECE: {ece:.4f}')`,say_aloud:"I'd start with feature importance analysis to understand what drives clicks. Position bias is critical — hotels shown in position 1 have higher CTR regardless of quality. I'd use position as a feature during training but not at serving time (or use counterfactual debiasing like inverse propensity weighting). Then calibrate with Platt scaling to ensure pCTR × bid produces fair auction results. Production monitoring is key: if ECE drifts, recalibrate weekly.",company:"Expedia",difficulty:"Hard"},{q:"[General] Why does gradient boosting outperform random forests on most tabular data tasks? When would you prefer random forests?",a:`Gradient boosting outperforms because: (1) Sequential error correction: each tree fixes mistakes of previous ensemble → lower bias. (2) Functional gradient descent: fits pseudo-residuals, directly optimizes loss function. (3) Feature interactions: boosting discovers them better than parallel forests. (4) Regularization: learning rate, early stopping, tree constraints keep variance controlled. Random forest wins when: (1) Less compute budget: RF trains in parallel, GB sequential. (2) Low-variance needed: RF averaging is robust, less tuning overhead. (3) Don't want to tune many hyperparameters: RF has few levers, GB has many. (4) Calibration matters: RF probabilities are often better calibrated out-of-box than GB (GB is overconfident, needs Platt scaling). (5) Speed: RF inference is faster (parallel trees) vs GB (sequential). Both lose to neural networks when: very large datasets, unstructured data (text, images). Practical: on tabular data (Expedia), LGBM usually wins. On small data or under time pressure, RF is safer. Code:

from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
import lightgbm as lgb
from sklearn.metrics import log_loss, roc_auc_score

rf = RandomForestClassifier(n_estimators=100, max_depth=15, random_state=42)
gb = GradientBoostingClassifier(n_estimators=200, max_depth=5, learning_rate=0.05, random_state=42)
lgbm = lgb.LGBMClassifier(num_leaves=127, n_estimators=1000, learning_rate=0.05, verbose=-1)

for name, model in [('RF', rf), ('GB', gb), ('LGBM', lgbm)]:
    model.fit(X_train, y_train)
    y_pred = model.predict_proba(X_test)[:, 1]
    print(f'{name}: AUC={roc_auc_score(y_test, y_pred):.4f}, Log-loss={log_loss(y_test, y_pred):.4f}')

# RF often has better calibration without post-processing
# GB needs Platt scaling to match calibration`,say_aloud:"The short answer: gradient boosting has lower bias but higher variance and more hyperparameters. On tabular data with good feature engineering, it's usually best. Random forest is your go-to when you need something robust that 'just works' without tuning. Both are better than logistic regression for complex non-linear relationships, but LR is still the interpretable baseline.",company:"All",difficulty:"Medium"},{q:"[Expedia DS] Your CTR model has good AUC (0.85) but poor calibration — it predicts pCTR=0.15 for segments where true CTR is 0.08. What happens to the auction? How do you fix it?",a:`Consequence: advertiser's rank score = pCTR × bid = 0.15 × bid. But true expected revenue = 0.08 × bid. So advertiser ranks higher than they should (based on fake pCTR), wins impressions they shouldn't (that were meant for lower-ranking advertisers), overpays because they bid for true CTR but get inflated rank. Budget depletes faster → lower ROI for advertiser, perceived poor performance. From Expedia's side: revenue is lower than it could be (should show ads with higher true pCTR). Auction becomes unfair. Fix: Apply Platt scaling. (1) Train base model on training data. (2) On held-out validation set, fit logistic regression on sigmoid(a × raw_score + b) to true labels. (3) Apply: p_calibrated = sigmoid(a × raw_score + b). (4) Deploy calibrated model. (5) Monitor with calibration curve: plot predicted p in bins vs actual CTR. Should lie on diagonal. (6) Compute ECE weekly; if > threshold, recalibrate on last 30 days. Code:

from sklearn.calibration import CalibratedClassifierCV
import numpy as np
import matplotlib.pyplot as plt

# Diagnose miscalibration
from sklearn.metrics import calibration_curve
prob_pred = model.predict_proba(X_test)[:, 1]
frac_pos, mean_pred = calibration_curve(y_test, prob_pred, n_bins=10)

plt.figure(figsize=(8, 6))
plt.scatter(mean_pred, frac_pos, s=50, alpha=0.7, label='Model')
plt.plot([0, 1], [0, 1], 'k--', label='Perfect')
plt.xlabel('Mean predicted pCTR')
plt.ylabel('Actual CTR')
plt.title('Calibration curve: predicts 0.15 but actual is 0.08')
plt.legend()
plt.show()

# Platt scaling
calibrator = CalibratedClassifierCV(model, method='sigmoid', cv='precomputed')
calibrator.fit(X_val, y_val)
y_pred_cal = calibrator.predict_proba(X_test)[:, 1]

# Check post-calibration
frac_pos_cal, mean_pred_cal = calibration_curve(y_test, y_pred_cal, n_bins=10)
plt.scatter(mean_pred_cal, frac_pos_cal, s=50, alpha=0.7, label='Platt-scaled')
plt.plot([0, 1], [0, 1], 'k--', label='Perfect')
plt.show()`,say_aloud:"High AUC means the model ranks hotels correctly relative to each other. Poor calibration means the absolute probability is wrong — too high in this case (predicts 0.15, actual 0.08). For the auction to work fairly, we need both AUC (ranking quality) and calibration (accurate pCTR for bid computation). AUC can stay stable while calibration drifts — so I'd monitor both separately in production.",company:"Expedia",difficulty:"Hard"},{q:"[General] Explain how gradient boosting works step by step. What is a 'pseudo-residual' and why do we fit trees to them?",a:`Step-by-step for log-loss (binary classification): (1) Initialize F₀(x) = log(mean(y)/(1-mean(y))) = log(odds of positive class). (2) For iteration t=1 to T: (a) Compute pseudo-residuals: rᵢ = -∂L/∂F(xᵢ) where L is log-loss. For log-loss: rᵢ = yᵢ - σ(Fₜ₋₁(xᵢ)) = actual label - predicted probability. This is the error (direction model should correct). (b) Fit shallow decision tree hₜ to predict rᵢ from features x. (c) Update ensemble: Fₜ(x) = Fₜ₋₁(x) + η × hₜ(x), where η is learning rate. (3) Final prediction: F_T(x) = F₀(x) + Σ(t=1 to T) η × hₜ(x), pass through sigmoid to get pCTR.

Pseudo-residuals: the negative gradient of loss at current predictions. They represent 'how wrong is the model and in which direction should it correct?' For log-loss: rᵢ = yᵢ - p̂ᵢ where p̂ᵢ = σ(Fₜ₋₁(xᵢ)). If true label y=1 and model predicted p=0.3, then r=0.7 (positive residual: model should push up). If y=0 and p=0.7, then r=-0.7 (negative: model should push down). By fitting tree to residuals, we're learning which features are most predictive of 'where the current model is wrong'. This is functional gradient descent: instead of optimizing in parameter space (weight vectors), we optimize in function space (progressively better approximations of target).

Intuition: each new tree focuses on what the ensemble got wrong. 1st tree captures general trend. 2nd tree corrects high-error regions. 3rd tree polishes further. Learning rate η controls how much each correction is applied (lower η = smoother, need more trees). This is why GB with low learning rate generalizes well: gradual, stable updates.

Code:

from sklearn.ensemble import GradientBoostingClassifier
import numpy as np

X_train, y_train = ...

# Manual gradient boosting for illustration (sklearn does this internally)
F = np.zeros(len(X_train))  # Initialize predictions
learning_rate = 0.05

for t in range(100):
    # Compute pseudo-residuals
    probs = 1 / (1 + np.exp(-F))  # sigmoid(F)
    residuals = y_train - probs  # negative gradient of log-loss
    
    # Fit tree to residuals
    tree = DecisionTreeRegressor(max_depth=3)
    tree.fit(X_train, residuals)
    
    # Update ensemble
    predictions_tree = tree.predict(X_train)
    F += learning_rate * predictions_tree
    
    # Compute loss
    loss = -np.mean(y_train * np.log(probs + 1e-15) + (1 - y_train) * np.log(1 - probs + 1e-15))
    print(f'Iteration {t+1}: loss = {loss:.4f}')

# This manually-coded GB achieves similar log-loss as sklearn's GradientBoostingClassifier`,say_aloud:"The intuition: each new tree focuses on what the ensemble got wrong. The first tree might get the general trend right; subsequent trees correct the mistakes in high-error regions. Learning rate η controls how much each tree's correction is applied — lower η = smoother correction, need more trees. This is why early stopping matters: you want to stop when validation error stops improving, not when training error reaches zero (which would just memorize).",company:"All",difficulty:"Hard"}],derivations:["Write the Gini impurity formula. For a node with 70% positive class, what is Gini?","What is the difference between bagging (random forest) and boosting (gradient boosting)?","Write the pseudo-residual formula for log-loss. What does it represent intuitively?","What is calibration drift? How do you detect it (ECE metric, calibration curve)?","Write the Platt scaling procedure. What loss function does it optimize?"],resources:[{name:"LightGBM Documentation",url:"https://lightgbm.readthedocs.io/"},{name:"sklearn: Calibration of classifiers",url:"https://scikit-learn.org/stable/modules/calibration.html"},{name:"StatQuest: Gradient Boost Trees",url:"https://www.youtube.com/watch?v=3CC4N4z3GJc"},{name:"XGBoost: A Scalable Tree Boosting System (paper)",url:"https://arxiv.org/abs/1603.02754"}]},ym={day:24,title:"Ranking & Personalization — Search, Recommendations & L2R",date_note:"Week 4, Day 4",prev_day:23,next_day:25,week_label:"Week 4 — ML Foundations, Ranking & Ads",recap:{title:"Key Concepts from Previous Days",points:["Decision trees → random forest (bagging) → gradient boosting (boosting)","LGBM: leaf-wise growth, histogram splitting, industry standard for CTR","Calibration: model is calibrated if P(click|pCTR=0.1) = 0.1 in reality. Platt scaling fixes drift.","Pseudo-residuals: the gradient of the loss = 'direction of correction' for each tree","Today: how Expedia's search and sponsored listings actually rank results — the full ranking stack"]},topics:[{title:"Learning to Rank (L2R) — The Core Framework",color:"#6366F1",content:`Three paradigms: Pointwise (treat as regression/classification — predict relevance score per item, ignore list structure), Pairwise (learn relative ordering — given two items, which is more relevant? RankNet uses cross-entropy on pairs), Listwise (optimize list-level metric directly — LambdaMART optimizes NDCG, the gold standard).

LambdaMART: combines LambdaRank (gradient over pairs sorted by NDCG gain) with MART (Multiple Additive Regression Trees = gradient boosting). Industry standard for search ranking.

Key insight: λᵢⱼ = -ΔNDCGᵢⱼ × sigmoid(sⱼ - sᵢ). The gradient is weighted by the NDCG improvement from swapping items i and j.

Python with LightGBM in ranking mode:
\`\`\`python
import lightgbm as lgb
# L2R with LightGBM
train_data = lgb.Dataset(X_train, label=y_relevance, group=query_groups)
params = {
    'objective': 'lambdarank',
    'metric': 'ndcg',
    'ndcg_eval_at': [1, 3, 5, 10],
    'learning_rate': 0.05,
    'num_leaves': 127,
    'min_data_in_leaf': 50
}
model = lgb.train(params, train_data, num_boost_round=500,
                  valid_sets=[valid_data], callbacks=[lgb.early_stopping(50)])
\`\`\``,interview_tip:"When asked about Expedia's hotel search ranking: 'I'd frame it as a L2R problem with LambdaMART. Features: user intent signals (search query, dates, # guests), hotel features (star rating, review score, historical CTR at this position), context (device, market, time of day). The query_group parameter in LGBM is essential — it tells the model which items compete against each other.'"},{title:"Ranking Metrics — NDCG, MAP, MRR",color:"#8B5CF6",content:`DCG (Discounted Cumulative Gain): DCG@k = Σᵢ₌₁ᵏ (2^relᵢ - 1) / log₂(i+1). Rewards highly relevant items appearing early. Log discount penalizes late positions.

NDCG (Normalized DCG): NDCG@k = DCG@k / IDCG@k. IDCG = DCG of ideal (perfect) ranking. Range [0, 1]. 1 = perfect ranking.

MAP (Mean Average Precision): for binary relevance. Average precision at each relevant result position, averaged over queries.

MRR (Mean Reciprocal Rank): average of 1/rank of first relevant result. Good for "just need one good answer" use cases.

Python code:
\`\`\`python
import numpy as np
def dcg_at_k(relevances, k):
    relevances = np.array(relevances[:k])
    gains = (2**relevances - 1) / np.log2(np.arange(2, len(relevances)+2))
    return gains.sum()

def ndcg_at_k(relevances, k):
    dcg = dcg_at_k(relevances, k)
    ideal = dcg_at_k(sorted(relevances, reverse=True), k)
    return dcg / ideal if ideal > 0 else 0.0

# Example: 5 hotels, relevance scores
relevances = [3, 2, 0, 1, 2]  # from ranking model
ndcg5 = ndcg_at_k(relevances, 5)
print(f'NDCG@5: {ndcg5:.4f}')
\`\`\`

When to use each: NDCG → search ranking (graded relevance), MAP → information retrieval (binary relevance), MRR → QA / single-answer use cases. For Expedia hotel search: NDCG@5 or NDCG@10.`,interview_tip:"Always ask: 'what k do we optimize at?' For Expedia hotel search results (typically 10-20 hotels shown), NDCG@5 or @10 is standard. For sponsored placements, NDCG@1 or @3 matters most since ads are in top slots."},{title:"Recommendation Systems — Collaborative Filtering & Two-Tower",color:"#F59E0B",content:`Collaborative filtering: matrix factorization. User-item matrix R. Factorize into R ≈ U × Vᵀ where U ∈ ℝⁿˣᵈ, V ∈ ℝᵐˣᵈ. Minimize: Σ (rᵢⱼ - uᵢ·vⱼ)² + λ(||uᵢ||² + ||vⱼ||²). Predict: score(user i, hotel j) = uᵢ · vⱼ.

Content-based: use item features to recommend similar items. Cosine similarity on feature vectors.

Two-tower model (modern industry standard): separate neural network towers for user and item. User tower: [user_id embedding, search_history, demographics] → 128-dim vector. Item tower: [hotel_id embedding, hotel features] → 128-dim vector. Score = dot product of towers. Train with in-batch negatives (NCE/contrastive). Retrieval with ANN (approximate nearest neighbor: FAISS, ScaNN).

Python code showing simple matrix factorization with SGD:
\`\`\`python
import numpy as np
class MatrixFactorization:
    def __init__(self, n_users, n_items, d=32, lr=0.01, reg=0.1):
        self.U = np.random.normal(0, 0.01, (n_users, d))
        self.V = np.random.normal(0, 0.01, (n_items, d))
        self.lr = lr; self.reg = reg
    
    def predict(self, u, i):
        return self.U[u] @ self.V[i]
    
    def train_step(self, u, i, r):
        pred = self.predict(u, i)
        err = r - pred
        self.U[u] += self.lr * (err * self.V[i] - self.reg * self.U[u])
        self.V[i] += self.lr * (err * self.U[u] - self.reg * self.V[i])
        return err**2
\`\`\`

Cold start problem: new user → no history → can't use CF. Solutions: content-based fallback, popularity-based, ask for preferences.`,interview_tip:"Two-tower is the dominant production architecture (used by YouTube, Airbnb, Expedia). The key interview insight: two-tower separates retrieval (fast, ~billions of candidates → ~1000) from ranking (slower, ~1000 → top 20). You can pre-compute item tower embeddings offline and retrieve with FAISS in microseconds."},{title:"Position Bias & Counterfactual Learning",color:"#10B981",content:`Position bias: users click on items in position 1 more than position 5, regardless of actual relevance. If you train CTR model on naive click data, model learns to predict 'position 1 gets clicks' not 'this hotel is good'.

Propensity-based debiasing: estimate position propensity p(click | position, item_shown). Inverse propensity weighting: weight each example by 1/propensity. Unbiased gradient: Σ (rᵢⱼ/pᵢⱼ) × (yᵢⱼ - ŷᵢⱼ).

In practice: include position as a feature DURING TRAINING but zero it out at serving time (or use a learned position bias correction vector). LightGBM: position_id as categorical feature, predict relevance conditional on position during training, serve with position=0 or average.

Examination hypothesis: P(click) = P(examine) × P(relevant | examined). Cascade model: P(examine position k) = Π_{j<k} P(click at j). IPS: P(examine) = empirical CTR by position on held-out policy.

Python code:
\`\`\`python
import numpy as np
# Simple position propensity estimation
position_clicks = np.array([1200, 800, 600, 400, 300, 200, 150, 100, 80, 60])
total_impressions = 10000
propensity = position_clicks / position_clicks[0]  # relative to position 1
print('Position propensities:', propensity.round(3))
# IPS weight: train example from position k has weight 1/propensity[k]
\`\`\``,interview_tip:"Position bias is a critical concept for Expedia's hotel ranking. If you train on raw click data, you'll learn position preference, not hotel quality. The correct approach: include position as a feature during training, zero it out at serving. Or use IPS reweighting. This shows you understand the difference between observational data and causal ranking."}],practice_questions:[{q:"[Expedia Loop] Expedia wants to improve hotel search ranking. Walk through the full ML system: how do you formulate the problem, what features do you use, what model, and how do you evaluate?",a:"Frame as L2R with LambdaMART. User features: query intent, dates, party size, device, location, past booking history, loyalty tier. Hotel features: star rating, review score, price vs market, availability, position in old ranking, historical CTR/CVR at this position/query. Context: time of day, day of week, market. Model: LightGBM with lambdarank objective. query_group = each search session (items in the same search compete). Metric: NDCG@5 (most users look at top 5). Train: position debiasing (include position feature, zero at serve), avoid position bias leakage. Offline evaluation: holdout sessions. Online: A/B test on booking conversion, with NDCG as leading indicator.",say_aloud:"I'd frame this as a supervised L2R problem where each training example is a (user, hotel, context, position, click/booking) tuple. The key challenge is position bias — I need to debias the training signal so the model learns true hotel quality, not position preference.",company:"Expedia",difficulty:"Hard"},{q:"[Expedia] You trained a hotel ranking model with NDCG@5=0.85 offline. But in production A/B test, booking conversion doesn't improve. What could cause this gap?",a:"Offline-online gap causes: (1) Position bias in training data — offline NDCG was measured on biased labels. (2) Distribution shift — test users are different from training users. (3) Novelty effect — users need time to adapt. (4) Model uses features not available at serving time (latency/feature pipeline issue). (5) The metric you measured offline (clicks) doesn't correlate with bookings. (6) Selection bias — only items shown in training data are evaluated. Diagnostic: compare feature distributions train vs production, check if correct features are being served, run parity test on a sample, look at precision@1 (first hotel shown) not just NDCG@5.",say_aloud:"NDCG@5 being high offline doesn't guarantee A/B lift. The root cause is usually: offline uses click labels which have position bias, or online distribution differs from offline. I'd investigate each systematically.",company:"Expedia",difficulty:"Hard"},{q:"[General] What is the cold start problem in recommendation systems? How does Expedia face it and how do you solve it?",a:"Cold start: can't make recommendations for (a) new users (no history) or (b) new items (no interactions). Expedia-specific: new hotels listed for the first time have no CTR, booking history, or review data. Fix for new items: content-based features (location, amenities, price tier, star rating) → estimate CTR from similar hotels. Fix for new users: demographic-based or location-based popularity fallback → show top-rated hotels in their destination. Hybrid approach: two-tower with content features can handle new items because item tower uses content, not just item ID embedding. Once some interactions accumulate (exploration period with intentional exposure), update collaborative signal. Exploration: deliberately show new hotels to some users (ε-greedy allocation) to gather signal.",say_aloud:"Cold start is fundamentally an exploration problem — you need to gather signal but you can't gather signal without showing the item. The answer is intentional exploration with a decay: new hotel gets a boosted impression share for the first N days, then competes on learned CTR.",company:"Expedia",difficulty:"Medium"},{q:"[Expedia] Write Python to compute NDCG@5 for two ranking models: Model A returns hotels with relevance [3,0,1,2,1] and Model B returns [2,3,0,1,2]. Which model is better?",a:`\`\`\`python
import numpy as np

def dcg_at_k(relevances, k):
    relevances = np.array(relevances[:k])
    gains = (2**relevances - 1) / np.log2(np.arange(2, len(relevances)+2))
    return gains.sum()

def ndcg_at_k(relevances, k):
    dcg = dcg_at_k(relevances, k)
    ideal = dcg_at_k(sorted(relevances, reverse=True), k)
    return dcg / ideal if ideal > 0 else 0.0

model_a = [3, 0, 1, 2, 1]
model_b = [2, 3, 0, 1, 2]

ndcg_a = ndcg_at_k(model_a, 5)
ndcg_b = ndcg_at_k(model_b, 5)

print(f'Model A NDCG@5: {ndcg_a:.4f}')
print(f'Model B NDCG@5: {ndcg_b:.4f}')
print(f'Better model: {"A" if ndcg_a > ndcg_b else "B"}')

# Manual breakdown
print('\\nModel A:')
print(f'  DCG@5: {dcg_at_k(model_a, 5):.4f}')
print(f'  IDCG@5 (ideal [3,2,1,1,0]): {dcg_at_k([3,2,1,1,0], 5):.4f}')

print('\\nModel B:')
print(f'  DCG@5: {dcg_at_k(model_b, 5):.4f}')
print(f'  IDCG@5 (ideal [3,2,1,1,0]): {dcg_at_k([3,2,1,1,0], 5):.4f}')
\`\`\`
Model A is better. Model A has the most relevant item (rel=3) at position 1 (no discount). Model B has rel=3 at position 2 which gets divided by log₂(3)≈1.58. Position matters.`,say_aloud:"NDCG rewards putting the most relevant result first. Position 1 has no discount (log₂(2)=1). Position 2 gets divided by log₂(3)≈1.58. So having the best hotel at position 1 vs position 2 matters a lot.",company:"Expedia",difficulty:"Medium"}],derivations:["Write DCG@k formula. For relevances [3,2,0,1], compute DCG@4.","Explain the three L2R paradigms: pointwise, pairwise, listwise. Which does LightGBM's lambdarank use?","What is position bias? How does including position as a training feature (then zeroing at serve) fix it?","Explain the two-tower model: what are the two towers, how are they trained, how are embeddings used at inference?","What is the cold start problem? Give two solutions for Expedia's new hotel listings."],resources:[{name:"LightGBM: LambdaRank",url:"https://lightgbm.readthedocs.io/en/latest/Parameters.html"},{name:"Airbnb: Machine Learning-Powered Search Ranking",url:"https://medium.com/airbnb-engineering/machine-learning-powered-search-ranking-of-airbnb-experiences-110b4b1a0789"},{name:"YouTube: Deep Neural Networks for YouTube Recommendations",url:"https://dl.acm.org/doi/10.1145/2959100.2959190"},{name:"Google: Position Bias Estimation",url:"https://dl.acm.org/doi/10.1145/3159652.3159732"}]},vm={day:25,title:"Ads Marketplace & Auction Theory — Expedia Ads Focus",date_note:"Week 4, Day 5",prev_day:24,next_day:26,week_label:"Week 4 — ML Foundations, Ranking & Ads",recap:{title:"Key Concepts from Previous Days",points:["L2R: LambdaMART optimizes NDCG via pairwise gradients weighted by NDCG improvement","NDCG@k = DCG@k / IDCG@k. Rewards highly relevant items at top positions.","Two-tower: user tower + item tower → dot product → ANN retrieval → ranking","Position bias: include position as training feature, zero at serving. Critical for unbiased CTR learning.","Today: the business layer above ranking — how ads are priced, ranked, and optimized at Expedia"]},topics:[{title:"Ads Auction Mechanics — GSP & VCG",color:"#6366F1",content:`Sponsored search: advertisers bid for ad slots. Multiple advertisers compete for N positions (N=3-5 for sponsored hotels on Expedia).

Generalized Second Price (GSP) auction: rank advertisers by rank_score = bid × quality_score. Position 1 = highest rank_score. Each advertiser pays the minimum bid to maintain their position = next advertiser's rank_score / own quality_score. GSP is NOT truthful (dominant strategy is NOT to bid true value). But empirically stable and widely used (Google AdWords, Bing Ads).

VCG (Vickrey-Clarke-Groves) auction: truthful, efficient, maximizes social welfare. Each advertiser pays the externality they impose on others (the decrease in value they cause by taking their slot). VCG is computationally more complex. Google moved AdWords from GSP toward a modified VCG.

Quality score: pCTR × relevance score × landing page quality. Purpose: ensures high-quality ads rank well even with lower bids. Prevents pure bid-for-slot (which would show irrelevant expensive ads, hurting user experience).

Rank score = bid × quality_score = bid × pCTR (simplified). CPC (cost per click) = next_rank_score / own_quality_score.

Python code:
\`\`\`python
# GSP auction simulation
advertisers = [
    {'id': 'A', 'bid': 2.00, 'quality': 0.8},
    {'id': 'B', 'bid': 3.00, 'quality': 0.5},
    {'id': 'C', 'bid': 1.50, 'quality': 1.0},
    {'id': 'D', 'bid': 2.50, 'quality': 0.6},
]
for a in advertisers:
    a['rank_score'] = a['bid'] * a['quality']
ranked = sorted(advertisers, key=lambda x: x['rank_score'], reverse=True)
for i, ad in enumerate(ranked):
    if i < len(ranked) - 1:
        next_rs = ranked[i+1]['rank_score']
        ad['cpc'] = next_rs / ad['quality']  # minimum bid to keep position
    else:
        ad['cpc'] = 0.01  # floor price
import pandas as pd
print(pd.DataFrame(ranked)[['id','bid','quality','rank_score','cpc']])
\`\`\``,interview_tip:"Expedia's sponsored listings are an auction. The interview will likely ask: 'how do you rank ads?' Answer: rank by expected revenue = pCTR × bid. Then: 'what if a high-bidder has terrible relevance?' Answer: quality score (pCTR-based) prevents purely bid-ranked results. This is the quality-bid tradeoff."},{title:"pCTR Calibration & Auction Fairness",color:"#8B5CF6",content:`Why calibration is critical for auctions: Rank = pCTR × bid. If pCTR is overestimated for advertiser A and underestimated for advertiser B, A wins more slots than deserved even with a lower true quality. Advertisers paying based on miscalibrated pCTR = unfair auction.

Calibration in practice: pCTR model trained on historical click data. Calibration check: bucket impressions by predicted pCTR (deciles), compare mean predicted vs actual CTR in each bucket. Well-calibrated = predicted = actual.

Calibration drift: occurs when model is trained on old data but user behavior, ad inventory, or platform changes. Example: Expedia changes hotel card UI → users click differently → pCTR model trained on old UI is miscalibrated. Detection: daily calibration ratio = mean(pCTR) / mean(actual_CTR). Should be ≈ 1. Alert if > 1.05 or < 0.95.

Recalibration approaches: Platt scaling on recent data. Temperature scaling (for NNs). Isotonic regression. Online calibration (update calibration continuously with streaming data).

Budget pacing: advertisers have daily/monthly budgets. Without pacing, a big advertiser would exhaust budget in morning hours and go dark in afternoon. Pacing algorithms: throttling (randomly skip impressions), bid shading (multiply bid by pacing_factor < 1 when ahead of pace, > 1 when behind). Google uses a learned pacing controller.

Python code:
\`\`\`python
import numpy as np, pandas as pd

# Calibration check
np.random.seed(42)
n = 100000
true_ctr = np.random.beta(1, 9, n)  # true click prob
raw_score = true_ctr * np.random.lognormal(0.2, 0.3, n)  # noisy model
def sigmoid(x): return 1 / (1 + np.exp(-x))
pCTR = sigmoid(np.log(raw_score / (1 - np.clip(raw_score, 1e-6, 1-1e-6))))
clicks = np.random.binomial(1, true_ctr)

# Calibration analysis
df = pd.DataFrame({'pCTR': pCTR, 'clicked': clicks})
df['bin'] = pd.qcut(df['pCTR'], 10, labels=False)
cal = df.groupby('bin').agg(pred=('pCTR','mean'), actual=('clicked','mean'))
print(cal)
# Plot: cal['pred'] vs cal['actual'] should be on y=x line

# Calibration ratio
cal_ratio = df['pCTR'].mean() / df['clicked'].mean()
print(f'Calibration ratio: {cal_ratio:.3f}')  # should be ≈ 1.0
\`\`\``,interview_tip:"Calibration drift is on the Expedia recruiter's prep list. Answer sequence: detect (daily calibration ratio monitoring), diagnose (which segments drifted, when did it start), fix (Platt scaling on recent 30-day data), prevent (automated recalibration trigger when ratio > threshold). The business consequence is key: miscalibrated pCTR = unfair auction."},{title:"Ads Personalization & Explore-Exploit",color:"#EC4899",content:`Personalization in ads: show the right ad to the right user at the right time. Features: user intent (search query, destination), user history (past bookings, clicked hotels, price sensitivity), context (device, time, market). Problem: need to balance exploitation (show ads that work well for this user segment) with exploration (try new ads to learn what works for new user types).

Explore-exploit in ads context: Multi-armed bandit applied to ad selection. Arms = candidate ads/hotels. Reward = click or booking. Need to balance: exploit (show the hotel with highest estimated CTR) vs explore (show a new hotel to learn its true CTR).

Thompson Sampling for ad CTR: maintain Beta(α, β) posterior for each ad's CTR. Sample from each, show highest. Update with observed clicks/no-clicks. This naturally balances explore-exploit — uncertain ads get explored more.

ε-greedy: with probability ε show random ad (explore), with probability 1-ε show best ad (exploit). Simple but inefficient.

UCB (Upper Confidence Bound): rank by CTR_estimate + sqrt(2 log n / n_i). High uncertainty → high bonus → explores uncertain options.

Python code:
\`\`\`python
from scipy.stats import beta
import numpy as np

class ThompsonAds:
    def __init__(self, n_ads):
        self.alphas = np.ones(n_ads)  # clicks
        self.betas  = np.ones(n_ads)  # non-clicks
    
    def select(self):
        samples = [beta.rvs(self.alphas[i], self.betas[i]) for i in range(len(self.alphas))]
        return np.argmax(samples)
    
    def update(self, ad_id, clicked):
        if clicked:
            self.alphas[ad_id] += 1
        else:
            self.betas[ad_id] += 1
    
    def ctr_estimate(self):
        return self.alphas / (self.alphas + self.betas)
\`\`\`

When to use bandit vs A/B in ads: Bandit is better for ad creative selection (many variants, want to converge fast, regret during exploration matters). A/B is better for infrastructure changes, ranking model updates, pricing changes (need clean causal inference, not just conversion optimization).`,interview_tip:"Explore-exploit in ads is a real production concern. For new hotels on Expedia: you don't know the true CTR. Thompson Sampling naturally gives new hotels exploration opportunities, then converges to exploitation as CTR estimates tighten. This ties directly back to the cold start problem in recommendations."},{title:"Revenue vs User Experience Trade-off",color:"#F59E0B",content:`The fundamental tension in ads: maximize ad revenue while preserving travel search experience. More/higher-priced ads → higher short-term revenue but potentially worse user experience → lower long-term retention.

Metrics: Ad revenue (primary). Organic booking rate (guardrail — must not decline). Session quality (bounce rate, time to book). Long-term: 30-day return rate.

Constrained optimization: maximize ad_revenue subject to: organic_booking_rate ≥ threshold, page_load_time ≤ threshold, ad_rejection_rate ≤ threshold.

Ad relevance scoring: rate each ad's relevance to the user's query. Only show ads above a relevance threshold. This protects user experience while monetizing relevant inventory.

Reserve prices: minimum bid to participate in auction. Ensures low-quality/low-bid ads don't appear in top spots. Signals to advertisers that they must offer value.

Platform economics: both advertisers (need ROI) and users (need relevant results) must be satisfied. Expedia's long-term success depends on both. Recall iROAS: break-even at commission/booking_value ratio.

Price sensitivity experiments: test different reserve prices or commission structures → find the optimal point on the revenue vs quality curve.

Python code:
\`\`\`python
# Revenue vs quality simulation
import numpy as np

ads_per_search = np.array([0, 1, 2, 3, 4])
ad_revenue_per_search = np.array([0, 0.50, 0.85, 1.10, 1.20])
organic_booking_rate = np.array([0.050, 0.048, 0.045, 0.040, 0.032])
session_quality_score = np.array([1.0, 0.98, 0.94, 0.88, 0.78])

# Constrained optimization: max revenue s.t. organic_rate >= 0.042
import pandas as pd
df = pd.DataFrame({'n_ads': ads_per_search, 'ad_revenue': ad_revenue_per_search,
                   'organic_rate': organic_booking_rate, 'quality': session_quality_score})
feasible = df[df['organic_rate'] >= 0.042]
optimal = feasible.loc[feasible['ad_revenue'].idxmax()]
print(optimal)  # Optimal: n_ads=2, revenue=0.85, organic_rate=0.045
\`\`\``,interview_tip:"The revenue vs experience trade-off is the core strategic question for Expedia's ads team. The right answer: 'I'd set up A/B tests across different ad load levels, measure both ad revenue AND organic booking rate (guardrail). Find the Pareto-optimal point where additional ads no longer produce positive net platform value.'"}],practice_questions:[{q:"[Expedia Ads - Core Case] Walk through how you would rank 4 hotel advertisers competing for 3 sponsored listing spots. Advertiser bids and pCTRs are given. Compute rank scores, winner allocation, and CPC for each winner. A: bid=2.0, pCTR=0.08; B: bid=3.0, pCTR=0.04; C: bid=1.5, pCTR=0.12; D: bid=2.5, pCTR=0.05.",a:`Rank scores: A: 2.0×0.08=0.16, B: 3.0×0.04=0.12, C: 1.5×0.12=0.18, D: 2.5×0.05=0.125. Ranking by score: C(0.18) > A(0.16) > B(0.12) > D(0.125). Top 3 winners: C, A, B. CPCs: C pays next rank_score / own quality = 0.16/0.12 = $1.33. A pays 0.12/0.08 = $1.50. B pays 0.125/0.04 = $3.13. Full Python:
\`\`\`python
advertisers = [
    {'id': 'A', 'bid': 2.0, 'pCTR': 0.08},
    {'id': 'B', 'bid': 3.0, 'pCTR': 0.04},
    {'id': 'C', 'bid': 1.5, 'pCTR': 0.12},
    {'id': 'D', 'bid': 2.5, 'pCTR': 0.05},
]
for a in advertisers:
    a['rank_score'] = a['bid'] * a['pCTR']
ranked = sorted(advertisers, key=lambda x: x['rank_score'], reverse=True)
for i, ad in enumerate(ranked[:3]):
    if i < len(ranked) - 1:
        next_rs = ranked[i+1]['rank_score']
        ad['cpc'] = next_rs / ad['pCTR']
import pandas as pd
print(pd.DataFrame(ranked[:3])[['id','bid','pCTR','rank_score','cpc']])
\`\`\``,say_aloud:"Note: C wins position 1 despite having the lowest bid ($1.50) because their pCTR (0.12) is highest. This is quality-weighted ranking working correctly — the most likely to be clicked gets top position. B wins position 3 despite high bid ($3.00) because their pCTR is low. This is the quality score protecting user experience while still monetizing.",company:"Expedia",difficulty:"Hard"},{q:"[Expedia DS] Your pCTR model reports calibration ratio = 1.28 (predicting 28% more clicks than actually occurring). What are the consequences for the auction and what do you do?",a:"Consequences: all pCTRs are overestimated by ~28%. Rank scores are inflated for all advertisers proportionally (if overestimation is uniform). If overestimation is non-uniform (affects some advertisers/positions more), ranking is distorted. Advertisers' expected CPC is calculated from inflated pCTR → they bid higher than optimal → spend faster → burn budget. Platform's expected revenue is overstated → actual revenue is lower. Fix: Platt scaling recalibration on recent 30 days. Short-term: apply a correction factor of 1/1.28 = 0.78 to all pCTR outputs. Long-term: retrain with recent data. Root cause analysis: what changed? (new UI, seasonal change, feature drift).",say_aloud:"28% calibration drift is significant. I'd first check if it's uniform across positions, device types, and markets — or localized to a segment. If localized, recalibrate only that segment. If universal, global recalibration is needed. Meanwhile, apply the multiplicative correction factor immediately to prevent ongoing revenue miscalculation.",company:"Expedia",difficulty:"Hard"},{q:"[Expedia Ads] A hotel advertiser asks: 'I'm bidding $3 per click but only getting 100 clicks per day. My competitor seems to always be in position 1. What should I do to get more impressions?' Walk through the diagnosis.",a:"Diagnosis: quality score issue vs bid issue vs budget issue vs audience targeting. Check pCTR: if their pCTR is low (0.03), their rank_score = 3.0 × 0.03 = 0.09. If competitor bids $2 but pCTR=0.07, rank_score = 0.14 → competitor wins. Solution options: (1) Improve ad quality/relevance → increase pCTR → higher rank at same bid. (2) Increase bid (but check: current CPC vs value per booking). (3) Budget pacing: are they exhausting budget by 10am? (4) Targeting: are they competing in the right market/destination? Framework: rank_score = pCTR × bid. To win position 1: need rank_score > all competitors. Two levers: pCTR (quality) and bid (price).",say_aloud:"I'd frame this as a decomposition problem: impressions lost to quality vs. impressions lost to bid vs. impressions lost to budget exhaustion. Each has a different fix. The highest-value fix is usually improving ad relevance (pCTR) because it also reduces CPC — you win more impressions AND pay less per click.",company:"Expedia",difficulty:"Medium"},{q:"[Expedia ML] Explain how you would balance showing sponsored listings vs organic results. What metrics do you optimize and what guardrails do you set?",a:"Optimization objective: maximize total platform revenue = organic_revenue + ad_revenue = (organic_bookings × commission) + (clicks × CPC). Constraint: organic_booking_rate ≥ threshold (don't cannibalize organic conversions). Approach: A/B test with different numbers of ad slots (0, 1, 2, 3). Measure: ad_revenue, organic_booking_rate, total_revenue, session_quality. Find the optimal ad load that maximizes total_revenue while keeping organic_rate above threshold. Also: relevance threshold for ads — only show ads with relevance_score > R. This filters out irrelevant ads that would harm user experience with minimal revenue benefit. Long-term: track 30-day return rate between groups — higher ad load should not reduce user retention.",say_aloud:"The key insight: ad revenue and organic revenue aren't fully zero-sum. A relevant sponsored listing can actually help users find what they want faster — increasing both ad revenue AND user satisfaction. The trade-off only becomes negative when ads are irrelevant or crowd out genuinely better organic results.",company:"Expedia",difficulty:"Hard"}],derivations:["Write the GSP auction rank score formula. How does quality score affect CPC?","What is calibration ratio? If calibration_ratio = 1.28, what is the short-term fix?","Explain the explore-exploit tradeoff in ads. When would you use Thompson Sampling vs A/B testing?","What is budget pacing? Explain throttling vs bid shading approaches.","What is the revenue vs user experience tradeoff? Name 2 guardrail metrics for Expedia's ad load experiment."],resources:[{name:"Google: Economics of Online Advertising",url:"https://research.google/pubs/pub37954/"},{name:"Criteo: Bid Optimization for Large-Scale Advertising",url:"https://dl.acm.org/doi/10.1145/3178876.3186166"},{name:"Facebook: Predicting CTR for Newly Created Ads",url:"https://research.facebook.com/publications/predicting-clicks-estimating-the-click-through-rate-for-new-ads/"},{name:"Spotify: Thompson Sampling for Ad Creative",url:"https://engineering.atspotify.com/"}]},wm={day:26,title:"NLP & Modern LLMs — Concepts for DS Interviews",date_note:"Day 26 — Transformers, BERT, GPT, and LLMs in production",prev_day:25,next_day:27,week_label:"Week 4 — ML Foundations, Ranking & Ads",recap:{title:"From GSP auctions to NLP fundamentals",points:["GSP auction: rank = bid × pCTR. CPC = next_rank_score / own_quality.","Calibration drift: pCTR systematically wrong → unfair auction. Detect via calibration ratio daily.","Explore-exploit in ads: Thompson Sampling for ad selection. Bandit for creative selection, A/B for infrastructure changes.","Revenue vs user experience: constrained optimization — max ad revenue subject to organic_rate guardrail.","Today: NLP and LLMs — Expedia loop will ask about transformer architecture and LLM trade-offs"]},topics:[{id:1,title:"Text Representations — From TF-IDF to Embeddings",color:"#6366F1",content:`Bag of Words (BoW): each document = vector of word counts. Ignores order and semantics.

TF-IDF: TF(t,d) = count of term t in doc d / total terms in d. IDF(t) = log(N / df(t)) where N=total docs, df(t)=docs containing t. TF-IDF(t,d) = TF × IDF. Upweights rare, specific terms. Downweights common words. Use: BM25 for search retrieval (still widely used in production alongside neural methods).

Word2Vec (Mikolov 2013): train shallow neural net to predict context words (CBOW) or predict word from context (Skip-gram). Result: word vectors where semantically similar words have high cosine similarity. king - man + woman ≈ queen. Dimension: typically 100-300. Training: negative sampling to avoid softmax over full vocabulary.

GloVe: factorize word co-occurrence matrix. Combines global statistics with local context. Often similar quality to Word2Vec.

Sentence embeddings: average word embeddings (simple), or use SBERT (Sentence-BERT) for semantic similarity. encode_fn(text) → 768-dim vector.`,code:`import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

docs = ["Expedia hotel booking Paris", "Paris hotel deals best price", "Flight to London cheap"]
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
print("TF-IDF matrix shape:", X.shape)
sim = cosine_similarity(X[0], X[1])
print(f"Similarity doc0 vs doc1: {sim[0][0]:.3f}")  # high - both about Paris hotels

# For semantic similarity (production):
# from sentence_transformers import SentenceTransformer
# model = SentenceTransformer('all-MiniLM-L6-v2')
# embeddings = model.encode(docs)  # 768-dim each
# semantic_sim = cosine_similarity(embeddings[:1], embeddings[1:])[0]`,use_case:"Expedia use case: hotel description matching to search query, review summarization, review sentiment, destination name entity extraction.",interview_tip:"For Expedia search: 'I'd use BM25 as the lexical retrieval baseline, then add a neural reranker (cross-encoder) for top-100 results. Dense retrieval (two-tower) for zero-shot queries. Hybrid: BM25 score + semantic score, tuned by LambdaMART.' This shows you know the production stack."},{id:2,title:"Attention Mechanism & Transformers",color:"#8B5CF6",content:`Self-attention: allows each position to attend to all other positions. Core operation: Q, K, V (Query, Key, Value) matrices. Attention(Q, K, V) = softmax(QKᵀ/√dₖ) V. QKᵀ → similarity between queries and keys → softmax → attention weights → weighted sum of values. Scaled by √dₖ to prevent gradient vanishing in softmax.

Multi-head attention: run h parallel attention heads, concatenate. Each head can attend to different aspects. h=8 in BERT-base, h=16 in BERT-large.

Transformer encoder (BERT-style): input = token embeddings + positional embeddings. Stack of: multi-head self-attention + feed-forward layers + layer normalization + residual connections. Output: contextualized token representations.

Transformer decoder (GPT-style): masked self-attention (can only attend to past tokens). Cross-attention (for encoder-decoder models like T5). Autoregressive generation.

Positional encoding: since attention has no inherent order, add position information. Fixed sinusoidal (original transformer) or learned embeddings.`,code:`import torch
import torch.nn.functional as F

def scaled_dot_product_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / d_k**0.5
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    attn_weights = F.softmax(scores, dim=-1)
    return torch.matmul(attn_weights, V), attn_weights

# Toy example: 3 tokens, d_k=4
Q = torch.randn(1, 3, 4)
K = torch.randn(1, 3, 4)
V = torch.randn(1, 3, 4)
output, weights = scaled_dot_product_attention(Q, K, V)
print("Output shape:", output.shape)  # (1, 3, 4)
print("Attention weights:\\n", weights[0])  # 3×3 matrix`,use_case:"Core architecture for modern NLP models",interview_tip:"The transformer interview question is always: 'explain attention.' The key insight: attention computes a weighted average of values where the weights are determined by query-key compatibility. This allows each token to 'look at' any other token in the sequence, capturing long-range dependencies that RNNs struggle with."},{id:3,title:"BERT vs GPT — Pre-training Paradigms",color:"#F59E0B",content:`BERT (Devlin et al. 2018): Bidirectional Encoder Representations from Transformers. Pre-training: Masked Language Model (MLM) — randomly mask 15% of tokens, predict them. + Next Sentence Prediction (NSP). Architecture: encoder only. Key property: FULL context — sees left and right context simultaneously. Fine-tuning: add a task-specific head on top of [CLS] token. Best for: classification, NER, question answering, semantic similarity.

GPT (OpenAI): Generative Pre-trained Transformer. Pre-training: Causal Language Model (CLM) — predict next token given all previous. Architecture: decoder only. Key property: autoregressive — only sees left context. Fine-tuning: few-shot (in-context learning), instruction tuning, RLHF. Best for: text generation, summarization, coding, QA without fine-tuning.

T5 / Seq2Seq: encoder-decoder. Both BERT and GPT capabilities. Best for: translation, summarization.

In-context learning: GPT-4/Claude can solve new tasks from examples in the prompt. No gradient update. Few-shot = k examples. Zero-shot = no examples.

RLHF (Reinforcement Learning from Human Feedback): align LLM outputs to human preferences. Step 1: collect human rankings of outputs. Step 2: train reward model. Step 3: fine-tune LLM with PPO (policy gradient). Result: ChatGPT-like behavior.`,code:`from transformers import pipeline, AutoTokenizer, AutoModel
import torch

# BERT for classification
classifier = pipeline('sentiment-analysis', model='distilbert-base-uncased-finetuned-sst-2-english')
result = classifier("Expedia hotel search is fast and easy to use")
print(result)  # [{'label': 'POSITIVE', 'score': 0.998}]

# BERT embeddings for semantic search
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModel.from_pretrained('bert-base-uncased')

def get_embedding(text):
    inputs = tokenizer(text, return_tensors='pt', truncation=True, max_length=128)
    with torch.no_grad():
        outputs = model(**inputs)
    return outputs.last_hidden_state[:, 0, :].numpy()  # [CLS] token

# query_emb = get_embedding("romantic hotel Paris")
# hotel_emb = get_embedding("Luxury hotel in Paris city center")
# similarity = cosine_sim(query_emb, hotel_emb)`,use_case:"BERT for hotel review sentiment, semantic search query understanding. GPT/LLM for travel itinerary generation, review summarization, customer service chatbot.",interview_tip:"Know the BERT vs GPT distinction cold. BERT = bidirectional, good for understanding tasks (classification, search ranking). GPT = autoregressive, good for generation. In Expedia context: BERT for hotel review sentiment, semantic search query understanding. GPT/LLM for travel itinerary generation, review summarization, customer service chatbot."},{id:4,title:"LLMs in Production — Trade-offs, RAG & Constraints",color:"#10B981",content:`LLM trade-offs for production:

Latency: GPT-4 API = 1-5 seconds. Too slow for real-time ranking (need <50ms). Solution: cached responses, smaller models (distilBERT), speculative decoding.

Cost: GPT-4 API ≈ $0.01/1K tokens. At Expedia scale (millions of queries/day), cost is prohibitive. Solution: fine-tuned smaller model, caching, only use LLM for high-value steps.

Hallucination: LLMs confidently generate false facts. Critical failure mode for travel (wrong hotel information, wrong prices). Solution: RAG (grounding in retrieved facts), output verification, structured output formats.

RAG (Retrieval-Augmented Generation): Query → retrieve relevant documents from vector DB → inject into LLM prompt → generate response grounded in retrieved context. Architecture: (1) Offline: embed all hotel descriptions/reviews into vector DB (FAISS, Pinecone). (2) Online: embed query → ANN search → top-k docs → LLM prompt. Reduces hallucination because LLM has factual context.

Fine-tuning vs prompting: when to fine-tune: consistent task, lots of labeled data, cost/latency critical. When to prompt: low data, diverse tasks, need to change behavior without retraining.

Structured output: use function calling / JSON mode to ensure LLM outputs structured data for downstream processing.`,code:`# RAG pipeline sketch
from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer('all-MiniLM-L6-v2')

# Offline: embed hotel descriptions
hotel_docs = [
    "Grand Hotel Paris: 5-star luxury hotel in city center, Eiffel Tower view",
    "Budget Inn Paris: affordable 2-star, near metro, clean and safe",
    "Seine River Hotel: boutique 4-star, breakfast included, river views"
]
hotel_embeddings = model.encode(hotel_docs)  # (3, 384)

# Online: user query
def retrieve(query, k=2):
    q_emb = model.encode([query])
    sims = (q_emb @ hotel_embeddings.T)[0]
    top_k = np.argsort(sims)[::-1][:k]
    return [(hotel_docs[i], sims[i]) for i in top_k]

results = retrieve("romantic hotel with great views in Paris")
for doc, score in results:
    print(f"Score: {score:.3f} | {doc}")`,use_case:"Travel chatbot with accurate information, review summarization grounded in real reviews, destination Q&A",interview_tip:"LLM questions in DS interviews are usually conceptual. Key answers: (1) BERT for classification/ranking, GPT for generation. (2) RAG for reducing hallucination while leveraging LLM reasoning. (3) Latency and cost are the main production constraints — know when to use a fine-tuned small model vs API call vs cached response."}],practice_questions:[{id:1,question:"[Expedia Loop] Expedia wants to build a semantic hotel search that returns hotels matching natural language queries like 'cozy hotel near Eiffel Tower with breakfast included'. How would you design this?",answer:"Two-phase architecture: Retrieval (ANN) + Reranking. Phase 1 retrieval: embed hotel descriptions + amenities offline with BERT/SBERT → store in FAISS. Embed query online → ANN search → top 100 candidates (fast, ~10ms). Phase 2 reranking: cross-encoder (BERT takes query + hotel description as single input) → relevance score. Or use LambdaMART with query-hotel features including semantic similarity score. Cold start for new hotels: use content features (description embedding). Evaluation: NDCG@5 on labeled query-hotel relevance pairs. A/B test online.",say_aloud:"I'd separate retrieval from ranking. Dense retrieval (SBERT) for semantic understanding, then a ranking model that combines semantic relevance with click/booking signals. BM25 as lexical baseline for 'exact match' queries. Hybrid system: score = α × BM25 + (1-α) × SBERT_similarity, α tuned on labeled data.",company:"Expedia",difficulty:"Hard"},{id:2,question:"[General DS] Explain the attention mechanism. Why is it better than RNNs for long sequences?",answer:"Attention computes weighted average of values based on query-key compatibility. Attention(Q,K,V) = softmax(QKᵀ/√d_k) V. Each position directly attends to every other position → O(n²) but constant path length for information flow (vs O(n) for RNNs). Why better than RNNs: RNNs have vanishing gradient problem for long sequences (information from position 1 must propagate through positions 2,3,...n). Attention: position 1 can directly attend to position n in one step. Transformers are also parallelizable (all positions computed simultaneously) vs RNNs (sequential). Trade-off: attention is O(n²) memory which limits context length. Solution: sparse attention, sliding window attention (Longformer).",say_aloud:"The core insight: attention gives every position direct access to every other position. Long-range dependencies that RNNs struggle with are handled naturally. The cost is O(n²) which limits context length.",company:"All",difficulty:"Medium"},{id:3,question:"[Expedia] You want to use an LLM to generate personalized hotel descriptions for search results. What are the risks and how do you mitigate them?",answer:"Risks: (1) Hallucination: LLM generates features the hotel doesn't have (e.g., 'pool' when there's no pool). (2) Latency: LLM too slow for real-time. (3) Cost: at millions of searches/day, API cost is prohibitive. (4) Consistency: same hotel might get different descriptions each time. Mitigations: (1) RAG: ground generation in hotel's verified feature database. Only generate descriptions based on retrieved facts. (2) Offline generation: pre-generate descriptions once, cache. Real-time: retrieve cached description. (3) Structured prompts: 'Based only on the following verified features: {features}, write a 50-word description. Do not add features not listed.' (4) Output validation: check if generated text mentions features not in ground truth → flag for review.",say_aloud:"For production at scale, I'd never call an LLM in real-time for hotel description generation — too slow and costly. Instead: offline batch generation with RAG and strict grounding, cached results, with freshness refresh when hotel data changes. The key constraint is Expedia must not show false information about hotels — hallucination is a legal/trust risk.",company:"Expedia",difficulty:"Medium"},{id:4,question:"[Expedia Loop] What is RAG and when would you use it? Give a specific example for Expedia's use case.",answer:"RAG = Retrieval-Augmented Generation. Architecture: (1) Index: embed all documents (hotel descriptions, policies, reviews) into vector DB. (2) Retrieve: for each query, find top-k relevant documents via ANN. (3) Generate: pass retrieved context + query to LLM → response grounded in actual data. Why use RAG: when you need LLM reasoning but have proprietary/current data. LLM's training data is static; RAG injects live data. Reduces hallucination because LLM generates from provided context. Expedia examples: (1) Travel chatbot: 'What's the cancellation policy for Marriott Paris?' → retrieve policy from hotel DB → LLM summarizes. (2) Review summarization: retrieve 100 most recent reviews → LLM generates 3-sentence summary. (3) Destination Q&A: retrieve Expedia's destination guide → answer user questions.",say_aloud:"RAG is the production pattern for combining LLMs with proprietary/current data. The alternative — fine-tuning — is expensive and static. RAG updates automatically as the database updates. For Expedia: hotel policies, availability, and reviews change daily — RAG is the right architecture.",company:"Expedia",difficulty:"Medium"}],derivations:["Explain TF-IDF. For the term 'hotel' appearing in 80% of documents, what happens to its IDF?","Write the attention formula: Attention(Q,K,V) = ? Why do we scale by √d_k?","What is the difference between BERT and GPT architecturally? When do you use each?","Explain RAG: what are the offline and online steps? How does it reduce hallucination?","What are the top 3 production constraints for deploying LLMs at Expedia search scale?"],resources:[{name:"Attention Is All You Need (original Transformer paper)",url:"https://arxiv.org/abs/1706.03762"},{name:"BERT: Pre-training of Deep Bidirectional Transformers (paper)",url:"https://arxiv.org/abs/1810.04805"},{name:"Hugging Face Transformers documentation",url:"https://huggingface.co/docs/transformers"},{name:"LlamaIndex RAG documentation",url:"https://docs.llamaindex.ai/"}]},bm={day:27,title:"Production ML Systems — Feature Stores, Serving, Monitoring & Spark",date_note:"Day 27 — Engineering at the intersection of data, features, and models",prev_day:26,next_day:28,week_label:"Week 4 — ML Foundations, Ranking & Ads",recap:{title:"From NLP foundations to ML systems engineering",points:["TF-IDF for keyword search. SBERT/two-tower for semantic search. BM25 + neural = hybrid.","Attention: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. Transformer: encoder (BERT) vs decoder (GPT).","BERT = bidirectional, understanding tasks. GPT = autoregressive, generation tasks.","RAG: offline embed docs → online retrieve → LLM generates from context. Reduces hallucination.","Today: how ML systems actually work in production — the engineering behind the models"]},topics:[{id:1,title:"Feature Stores & Point-in-Time Correctness",color:"#6366F1",content:`Feature store: centralized repository for ML features. Two layers: Offline store (batch, historical, for training — usually data warehouse like Redshift, BigQuery). Online store (low-latency key-value lookup for serving — Redis, DynamoDB, Cassandra).

Point-in-time correctness: during training, features must reflect what was available at the TIME OF THE PREDICTION, not current values. Training-serving skew: if training uses "hotel average rating as of today" but serving uses "hotel average rating at time of booking attempt in 2022" → model trained on future data → optimistic results.

Example: hotel review score feature. Wrong: use current score (3,000 reviews) in training for a 2022 booking event. Right: use point-in-time score (1,800 reviews in 2022) for that event. Feast and Tecton are popular feature store platforms.

Feature pipeline: data source → transformation → feature store. Transformation: normalization, encoding, binning. Freshness: some features update daily (hotel review score), some update in real-time (hotel availability, price). Online store serves the freshest version of each feature.

Common feature types: User features (computed offline nightly: last_destination, avg_price_paid, loyalty_tier). Hotel features (daily: review_score, n_reviews, avg_price_last_7d). Context features (real-time: query text, session duration, device). Interaction features (computed: user_hotel_affinity, query_hotel_similarity).`,code:`import pandas as pd
from datetime import datetime, timedelta

# Simulate point-in-time feature lookup
events = pd.DataFrame({
    'event_time': pd.to_datetime(['2022-03-01', '2022-06-15', '2023-01-10']),
    'hotel_id': ['H1', 'H1', 'H1'],
    'user_id': ['U1', 'U2', 'U1']
})
# Hotel review history
hotel_reviews = pd.DataFrame({
    'date': pd.to_datetime(['2021-12-01', '2022-04-01', '2022-09-01', '2023-02-01']),
    'hotel_id': ['H1', 'H1', 'H1', 'H1'],
    'review_score': [4.1, 4.3, 4.5, 4.6]
})
# Point-in-time join: for each event, find most recent hotel_reviews before event_time
def pit_join(events, features, event_time_col='event_time', feature_time_col='date', keys=['hotel_id']):
    results = []
    for _, ev in events.iterrows():
        matching = features[
            (features[keys[0]] == ev[keys[0]]) &
            (features[feature_time_col] <= ev[event_time_col])
        ]
        if len(matching) > 0:
            latest = matching.iloc[-1]
            results.append({**ev.to_dict(), 'review_score': latest['review_score']})
    return pd.DataFrame(results)
print(pit_join(events, hotel_reviews))`,use_case:"Training data generation with historical snapshots. Real-time feature lookup during serving.",interview_tip:"Training-serving skew is one of the top causes of 'model works in training but not production.' In interviews, when asked about model deployment, always mention: 'I'd ensure point-in-time correctness in training by using a feature store with historical snapshots, not current feature values.'"},{id:2,title:"Online vs Batch Serving — Design Trade-offs",color:"#8B5CF6",content:`Batch serving (offline): compute predictions in advance, store in DB. Lookup at serve time = simple key-value fetch. Latency: ~1ms. Use when: predictions are stable (hotel popularity rankings), request volume is high and diverse queries are limited, result can be precomputed (top N hotels per destination per user cohort). Limitation: can't react to real-time context (current query, session behavior).

Online serving (real-time): compute prediction at request time with fresh features. Latency: 5-50ms target. Use when: prediction depends on real-time context (current search query, availability, competing ads). Limitation: higher compute cost, latency pressure.

Near-real-time / streaming: compute features and predictions on streaming data (Kafka + Flink). Latency: seconds to minutes. Use for: fraud detection (respond to suspicious session in seconds), dynamic pricing (react to inventory changes quickly).

Hybrid architecture (most production systems): candidate retrieval (pre-computed, batch) → context-aware reranking (online inference). Two-stage: stage 1 = retrieve top 200 candidates from batch-computed hotel embeddings. Stage 2 = real-time ranking model scores 200 candidates with current user context → return top 10.

SLAs: typical requirements: P99 latency < 100ms for hotel search. P99 < 50ms for ads ranking. Model inference: use ONNX runtime, TensorRT for GPU inference, or lighter LGBM for CPU.`,code:`# Model serving with FastAPI (sketch)
from fastapi import FastAPI
from pydantic import BaseModel
import lightgbm as lgb
import numpy as np

app = FastAPI()
model = lgb.Booster(model_file='ctr_model.txt')

class AdRequest(BaseModel):
    user_id: str
    hotel_ids: list
    query: str
    device: str
    hour_of_day: int

@app.post("/predict_ctr")
def predict_ctr(req: AdRequest):
    # Build feature matrix from request + feature store lookup
    features = build_features(req)  # → (n_hotels, n_features)
    pctr = model.predict(features)
    ranked = sorted(zip(req.hotel_ids, pctr), key=lambda x: x[1], reverse=True)
    return {"ranked_hotels": [h for h, _ in ranked[:3]], "pctrs": [p for _, p in ranked[:3]]}`,use_case:"Hotel search ranking (hybrid: batch candidates + online reranking), ads CTR prediction, real-time personalization",interview_tip:"The two-stage retrieval + ranking architecture is the standard for any large-scale ML system (Expedia, Airbnb, Netflix, YouTube). In interviews, always describe it: 'Stage 1: fast candidate retrieval using pre-computed embeddings and ANN. Stage 2: real-time ranking with a richer feature set. This gives you both scale and personalization.'"},{id:3,title:"Model Monitoring & Debugging in Production",color:"#F59E0B",content:`Types of drift: Data drift (feature distribution changes — distribution of user queries changes in summer travel season). Concept drift (relationship between features and target changes — user behavior shifts after a UI change). Prediction drift (model output distribution changes without corresponding label changes).

Detection methods: PSI (Population Stability Index) for categorical/continuous features. KL divergence for distribution comparison. Window-based: compare feature stats in rolling 7-day window vs training baseline.

PSI = Σ (actual% - expected%) × ln(actual% / expected%). PSI > 0.2 → significant shift, retrain.

Model output monitoring: track mean pCTR daily. If 15% drop → investigate. Is actual CTR dropping (real business issue)? Or only pCTR (model degradation)? This distinction is critical.

Common production failure modes: Feature pipeline bug (upstream data breaks → feature is NULL → model gets default value → wrong predictions). Training-serving skew (features computed differently in training vs serving). Silent model degradation (AUC is stable but calibration drifts → revenue impact). Label delay (clicks observed immediately but bookings arrive days later → training data is stale).

Debugging workflow: (1) Check data completeness (are all features populated correctly?). (2) Check prediction distribution (is pCTR in expected range?). (3) Check upstream features vs training distribution (PSI). (4) Shadow mode: run new model alongside old, compare predictions. (5) Canary deployment: route 1% traffic to new model first.

Shadow mode vs canary:
Shadow: new model runs in parallel, predictions not served. Safe, no user impact.
Canary: new model serves 1% of traffic. Real impact but minimal exposure.`,code:`import numpy as np

def psi(actual, expected, n_bins=10):
    actual_perc = np.histogram(actual, bins=n_bins)[0] / len(actual) + 1e-6
    expected_perc = np.histogram(expected, bins=n_bins)[0] / len(expected) + 1e-6
    return np.sum((actual_perc - expected_perc) * np.log(actual_perc / expected_perc))

# Model output monitoring
def monitor_predictions(predictions, baseline_mean=0.08, window=7):
    recent_mean = np.mean(predictions[-window*1000:])  # last 7 days
    drift_ratio = recent_mean / baseline_mean
    if drift_ratio > 1.15 or drift_ratio < 0.85:
        alert(f"Prediction drift detected: {drift_ratio:.2f}x baseline")
    return drift_ratio

# Feature drift detection
def check_feature_drift(feature_name, recent_values, baseline_values, threshold=0.2):
    psi_score = psi(recent_values, baseline_values)
    if psi_score > threshold:
        print(f"{feature_name}: PSI={psi_score:.3f} - DRIFT DETECTED")
    return psi_score`,use_case:"Production monitoring dashboard, alerting on model degradation, data quality checks",interview_tip:"The Expedia loop will ask about production ML debugging. The framework: 'First I check data quality (are features populated?), then prediction distribution (is model outputting sensible values?), then compare recent feature distributions to training (PSI), then review recent labeling pipeline. I'd use shadow mode before canary deployment.'"},{id:4,title:"Spark & Large-Scale Data Processing",color:"#10B981",content:`Why Spark: data too large for single machine. Spark distributes computation across cluster. Key abstractions: RDD (Resilient Distributed Dataset — low-level, fault-tolerant), DataFrame (higher-level, SQL-like API, optimized by Catalyst query planner), Dataset (strongly-typed DataFrame).

Lazy evaluation: transformations are not executed until an action is called. map(), filter(), select() = transformations. collect(), count(), show() = actions. Catalyst optimizer builds execution plan before running.

Key operations and optimization patterns:
- Avoid shuffles: expensive operations are joins, groupBy, repartition
- Use broadcast join for small tables joining against large tables
- Cache frequently used DataFrames to avoid recomputation
- Partition on join keys to minimize data movement
- Prefer DataFrame API over RDD API (Catalyst optimizer)
- Window functions: compute rolling averages, ranks over sorted data without full shuffles

Common interview patterns: compute user-hotel affinity score from booking history, feature engineering for ML pipeline, compute rolling statistics at scale.`,code:`from pyspark.sql import SparkSession
from pyspark.sql import functions as F
from pyspark.sql.window import Window

spark = SparkSession.builder.appName("ExpediaFeatures").getOrCreate()

# Read large dataset
df = spark.read.parquet("s3://expedia/bookings/2023/")
print(f"Partitions: {df.rdd.getNumPartitions()}")

# Feature engineering at scale
df = df.withColumn("booking_hour", F.hour("booking_timestamp"))
df = df.withColumn("days_until_checkin", 
    F.datediff("checkin_date", "booking_date"))

# Window function at scale: rolling 7-day bookings per hotel
w = Window.partitionBy("hotel_id").orderBy("booking_date").rowsBetween(-6, 0)
df = df.withColumn("rolling_7d_bookings", F.count("booking_id").over(w))

# Group and aggregate by week
hotel_stats = df.groupBy("hotel_id", F.date_trunc("week", "booking_date").alias("week")) \\
    .agg(
        F.count("booking_id").alias("n_bookings"),
        F.avg("total_price").alias("avg_price"),
        F.countDistinct("user_id").alias("unique_users")
    )
hotel_stats.write.partitionBy("week").parquet("s3://expedia/hotel_features/")

# Broadcast join pattern (small lookup table)
lookup_df = spark.read.parquet("s3://lookup/small_table/")  # < 100MB
df_large = spark.read.parquet("s3://expedia/large_bookings/")
result = df_large.join(F.broadcast(lookup_df), "hotel_id", "left")`,use_case:"Feature engineering pipeline for ML training, computing statistics at Expedia scale (billions of booking records)",interview_tip:"Expedia's data engineering question will be Spark-based. Know the DF API over RDD. Key performance tips: broadcast small lookup tables, partition on join keys, cache intermediate results that are reused. The Catalyst optimizer is smart but you still need to avoid unnecessary shuffles."}],practice_questions:[{id:1,question:"[Expedia DS] Design the feature engineering pipeline for Expedia's CTR model. What features do you create? How do you ensure point-in-time correctness? How do you deploy features for serving?",answer:"Training features (offline, PIT-correct): user features (loyalty tier, past 30d bookings, avg_price_paid, last_destination, days_since_last_booking), hotel features (review_score_at_time_of_event, historical_ctr_at_this_position, price_vs_market_avg, availability_at_time), context (query_text, device, hour_of_day, days_until_checkin). Point-in-time: use feature store with historical snapshots. Training: for each (user, hotel, event_time), look up feature values at event_time, not current values. Serving: online store (Redis) for user features updated daily, hotel features updated hourly, context computed at request time. Latency: total feature lookup < 5ms (P99) to fit in 50ms serving SLA.",say_aloud:"Point-in-time correctness is non-negotiable for training. Without it, you're using future information and the model will look great in offline evaluation but fail in production. I'd use Feast or a custom PIT join in Spark for training data generation.",company:"Expedia",difficulty:"Hard"},{id:2,question:"[Expedia DS] Your CTR model's pCTR outputs suddenly drop by 15% over 3 days (from mean 0.08 to 0.068). Walk through how you debug this.",answer:"Step 1: check data pipeline. Are all features being populated? Any NULL-rate increase? NULL feature → model default → lower prediction? Step 2: check feature distribution shift. Plot PSI for each feature. Did any feature shift significantly in last 3 days? Step 3: check raw event data. Did actual CTR drop (real business decline)? Or is prediction dropping while actual CTR is stable (model degradation)? Step 4: check recent model inputs. Are the feature distributions at serving time matching training distribution? Step 5: if pipeline is clean, check for concept drift. Did a UI change happen 3 days ago? Code: compute PSI for each feature, compare recent vs baseline. Alert if PSI > 0.2.",say_aloud:"First rule: is this a data problem or a model problem? If actual CTR dropped too → real business issue. If only pCTR dropped while actual CTR is stable → model issue. Most production 'model regressions' are actually upstream data pipeline bugs.",company:"Expedia",difficulty:"Hard"},{id:3,question:"[Expedia Data Engineering] Write Spark code to compute a weekly hotel booking rate by market for the past year, with 4-week rolling average.",answer:"Use Spark DataFrame API with window functions and date_trunc for week bucketing. Group by hotel_id and week, aggregate to count bookings. Compute rolling average using Window with orderBy and rowsBetween. Partition output by market for efficient downstream access. Key steps: (1) parse booking dates, (2) truncate to week, (3) groupBy hotel_id and week with count, (4) define Window partitionBy market ordered by week, (5) apply rolling average function rowsBetween(-3, 0) for 4-week window including current, (6) write partitioned output.",say_aloud:"I'd partition the output by market since downstream consumers typically want a specific market's data. The rolling window uses Window.orderBy('week').rowsBetween(-3, 0) for 4 weeks including current. This avoids shuffling all data globally — just partition-level shuffles by market.",company:"Expedia",difficulty:"Medium"},{id:4,question:"[General] What is the difference between online and batch model serving? When would you use each for Expedia's hotel ranking problem?",answer:"Batch: precompute hotel rankings per destination per user cohort nightly. Serve via DB lookup. Pros: fast (1ms), cheap. Cons: can't react to real-time query. Use for: destination-level hotel popularity lists, user preference scores that update nightly. Online: compute ranking at request time using current query, availability, session signals. Pros: personalized per query. Cons: higher latency (~50ms), higher compute. Use for: query-specific hotel ranking, real-time CTR prediction for ads. Hybrid: most production systems use both. Batch retrieval (fast, broad) → online reranking (slow, precise). Two-stage architecture.",say_aloud:"For Expedia hotel search: batch generates a candidate pool per destination (top 500 hotels by market), online reranker personalizes for each specific search query with current availability and user context. This gives both scale and precision.",company:"Expedia",difficulty:"Medium"}],derivations:["What is training-serving skew? Give one example from a hotel CTR model.","What is PSI (Population Stability Index)? At what PSI value should you retrain?","Explain the two-stage retrieval + reranking architecture. Why do production systems use it?","What is shadow mode deployment? How is it different from canary? When to use each?","Write the Spark equivalent of SQL: SELECT hotel_id, AVG(price) OVER (PARTITION BY market ORDER BY week ROWS BETWEEN 3 PRECEDING AND CURRENT ROW) FROM hotel_bookings"],resources:[{name:"Feast: Open Source Feature Store",url:"https://docs.feast.dev/"},{name:"Tecton: Feature Engineering for ML",url:"https://www.tecton.ai/"},{name:"Spark: PySpark Documentation",url:"https://spark.apache.org/docs/latest/api/python/"},{name:"Uber: Michelangelo ML Platform",url:"https://www.uber.com/blog/michelangelo-machine-learning-platform/"}]},_m={day:28,type:"quiz",title:"Week 4 Review — ML Foundations, Trees, Ranking, Ads & Production",date_note:"Day 28 · Week 4 Review",prev_day:27,next_day:null,week_label:"Week 4 — ML Foundations to Production",subtitle:"Write answers from memory first. This review spans ML fundamentals, tree-based models, ranking systems, ads auctions, NLP/LLMs, and production ML at scale. Every question is drawn from real DS interviews at Expedia, Meta, Airbnb, and Google.",review_tasks:["✍️  Write from memory: sigmoid function and why log-loss beats MSE for classification","→   Write from memory: AUC-ROC vs log-loss trade-off for CTR prediction","→   Write from memory: gradient boosting algorithm — pseudo-residuals and iterative fitting","→   Write from memory: NDCG@k formula and LambdaMART objective","→   Write from memory: GSP auction — bids, quality scores, rank, and CPC calculation","→   Write from memory: Thompson Sampling posterior update with Beta distribution","→   Write from memory: attention mechanism QKᵀ/√d formula and why it works","→   Write from memory: PSI formula, thresholds, and retraining triggers","→   90-120 minutes total. This is comprehensive ML systems thinking."],derivations:["Write the sigmoid formula. Show why log-loss is the proper loss for classification.","Plot bias vs variance. Which models have high bias? Which have high variance? How do you fix each?","Write the NDCG@k formula. Compute it for results with relevance [3, 0, 2].","Explain gradient boosting step-by-step. What are pseudo-residuals and why do they work?","Write the GSP auction formula: given bids b=[5, 3, 1] and quality scores q=[0.8, 1.0, 0.6], compute rank and CPC.","Explain iROAS and break-even calculation. At 15% commission, what iROAS = break-even?","Write Thompson Sampling: how does the posterior update when you have successes and failures?","Explain calibration drift and how to monitor it with Platt scaling.","Write the attention formula: Attention(Q,K,V). Why divide by √d?","Write PSI formula. What thresholds trigger retraining (0.1, 0.2)?","Explain RAG vs fine-tuning. When do you use each?","Write Spark window function for 7-day rolling booking rate per hotel."],resources:[{name:"Your Day 22-27 notes — ML systems foundations",url:"/"},{name:"Attention Is All You Need (Vaswani et al.)",url:"https://arxiv.org/abs/1706.03762"},{name:"XGBoost paper (Chen & Guestrin)",url:"https://arxiv.org/abs/1603.02754"},{name:"Learning to Rank for Information Retrieval (Liu)",url:"https://staff.fnwi.uva.nl/m.derijke/wp-content/papercite-data/pdf/liu-ltr-book.pdf"}],sections:[{title:"Section 1: ML Foundations & Tree Models (Q1–Q8)",icon:"🌳",range:"Q1–Q8",qs:[{id:"w4q1",q:"Write the sigmoid function. Why is log-loss the proper loss function for binary classification instead of MSE?",company:"Expedia / Meta",freq:"High",answer:"<p><strong>Sigmoid function:</strong></p><code>σ(z) = 1 / (1 + e^(-z))</code><p>Maps any real number z to (0, 1) — interpreted as probability of class 1.</p><p><strong>Log-loss (cross-entropy):</strong></p><code>Loss = -1/n Σ[ y*log(ŷ) + (1-y)*log(1-ŷ) ]</code><p><strong>Why log-loss beats MSE:</strong></p><ol><li><strong>Proper scoring rule:</strong> Log-loss penalizes confident wrong predictions much more heavily than MSE. If ŷ=0.99 but y=0, log-loss ≈ 4.6 vs MSE = 0.98. This incentivizes calibration.</li><li><strong>Gradient properties:</strong> ∂(cross-entropy)/∂z = ŷ - y. Simple, well-behaved gradients → faster convergence in logistic regression and neural networks.</li><li><strong>Probabilistic interpretation:</strong> Log-loss is the negative likelihood under Bernoulli distribution. Minimizing it = maximum likelihood estimation. MSE has no such interpretation.</li><li><strong>Asymmetry:</strong> Classification has asymmetric costs — wrong predictions are bad regardless of residual magnitude. Log-loss respects this; MSE treats large and small errors as quadratically different.</li></ol><p>Practical: use log-loss for classification. Use MSE for regression.</p>"},{id:"w4q2",q:"Explain the bias-variance tradeoff. Which models have high bias vs high variance? Give one technique to reduce each.",company:"All",freq:"High",answer:"<p><strong>Bias:</strong> systematic error from oversimplified model. Model consistently misses the true pattern. Example: linear regression on non-linear data → high bias, low variance.</p><p><strong>Variance:</strong> sensitivity to training data fluctuations. Model overfits to noise. Example: deep decision tree → low bias (fits data precisely), high variance (small changes in data → large changes in model).</p><p><strong>Total error = Bias² + Variance + Noise</strong> (irreducible).</p><p><strong>High bias models:</strong> linear models, shallow trees, ridge regression with large λ. <strong>How to fix:</strong> increase model complexity (deeper trees, polynomial features, remove regularization).</p><p><strong>High variance models:</strong> deep trees, high-degree polynomials, neural networks on small data. <strong>How to fix:</strong> regularization (L1/L2, early stopping), ensemble methods (bagging, boosting), more data, feature selection.</p><p><strong>Bias-variance plot:</strong> As model complexity increases, bias decreases and variance increases. Optimal complexity is at the sweet spot. In practice: use cross-validation to find it.</p>"},{id:"w4q3",q:"For CTR prediction (click-through rate), would you optimize AUC-ROC or log-loss? Explain the tradeoff.",company:"Expedia Ads / Meta",freq:"High",answer:`<p><strong>AUC-ROC:</strong> Measures ranking quality: if I sort users by predicted CTR, what's the probability I rank an actual clicker above a non-clicker? Threshold-independent (integrates across all thresholds). Invariant to label distribution.</p><p><strong>Log-loss:</strong> Measures calibration: how close are predicted probabilities to true frequencies? Threshold-independent. Affected by label distribution (rare events dominate).</p><p><strong>CTR context:</strong> CTR is usually 1-5%. Large class imbalance. AUC-ROC is less sensitive to imbalance — good signal of ranking quality.</p><p><strong>Which to optimize?</strong></p><ol><li><strong>For ranking (serving/auction):</strong> AUC-ROC. You need accurate relative ordering of CTR scores to rank impressions. Calibration is secondary.</li><li><strong>For ads pricing (pCTR in GSP auction):</strong> Log-loss + calibration check. You bid using pCTR; mis-calibration causes bidding errors and revenue loss. High AUC but poor calibration = you win auctions on overestimated CTR.</li><li><strong>In practice:</strong> optimize AUC during training (faster), then apply Platt scaling to calibrate (post-hoc). Monitor both metrics.</li></ol><p>Answer at interview: "I'd optimize AUC-ROC for ranking quality, then apply calibration checks (Platt scaling or isotonic regression) to ensure pCTR is usable for auction pricing."</p>`},{id:"w4q4",q:"Write the Gini impurity formula. What makes a split 'good' in a decision tree?",company:"Expedia / Google",freq:"High",answer:"<p><strong>Gini impurity for node j:</strong></p><code>Gini(j) = 1 - Σ(p_c)²</code><p>where p_c = proportion of class c in node j. For binary classification: Gini = 1 - p₀² - p₁² = 2p₀(1-p₀).</p><p><strong>Interpretation:</strong> Gini(j) = 0 when all samples belong to one class (pure). Gini(j) = 0.5 when 50/50 split (maximally impure).</p><p><strong>What makes a split good:</strong> A feature-threshold split minimizes weighted child impurity.</p><code>Information gain = Gini(parent) - (n_left/n)*Gini(left) - (n_right/n)*Gini(right)</code><p>Tree search: for each feature and threshold, compute information gain. Pick the split with highest gain. Repeat recursively.</p><p><strong>Why Gini?</strong> Gini has nice mathematical properties: (1) differentiable (unlike entropy), (2) scale-invariant (between 0-1), (3) biased toward balanced splits (reduces tree depth).</p><p><strong>Practical:</strong> XGBoost uses Gini; sklearn decision trees use entropy or Gini (same idea, slightly different formula). The difference is minor — data and depth matter more.</p>"},{id:"w4q5",q:"Explain gradient boosting algorithm step-by-step. What are 'pseudo-residuals' and why do they work?",company:"All",freq:"High",answer:`<p><strong>Gradient boosting algorithm:</strong></p><code>1. Initialize: F₀(x) = argmin_c Σ L(y_i, c)  [constant prediction]
2. For m = 1 to M:
   a. Compute pseudo-residuals: r_im = -∂L(y_i, F_{m-1}(x_i)) / ∂F_{m-1}(x_i)
   b. Fit tree h_m to predict r_im from x_i  [minimize (r_im - h_m(x_i))²]
   c. Compute step size: γ_m = argmin_γ Σ L(y_i, F_{m-1}(x_i) + γ*h_m(x_i))  [line search]
   d. Update: F_m(x) = F_{m-1}(x) + γ_m * h_m(x)
3. Return F_M(x)</code><p><strong>What are pseudo-residuals?</strong> The negative gradient of loss w.r.t. the current prediction. For log-loss: r_i = y_i - ŷ_i (residual!). For exponential loss: r_i = -e^(-y_i*F(x_i)) (weighted by loss).</p><p><strong>Why they work:</strong> Gradient descent says: move in direction of steepest descent (opposite of gradient). By fitting a tree to pseudo-residuals, we're fitting a base learner to the direction that minimizes loss. Each tree contributes a small improvement. The shrinkage parameter (learning_rate in XGBoost) controls step size to avoid overfitting.</p><p><strong>Intuition:</strong> First tree fits y. Second tree fits what the first tree got wrong (the residuals). Third tree fits what the first two missed. Boosting = iterative error correction.</p>`},{id:"w4q6",q:"L1 regularization (lasso) vs L2 (ridge): write the formula for each. What is the mathematical difference? When would you use each?",company:"Expedia / Google",freq:"High",answer:"<p><strong>L1 (Lasso):</strong></p><code>Loss = Σ(y_i - ŷ_i)² + λ Σ|β_j|</code><p>Penalty = sum of absolute values of coefficients.</p><p><strong>L2 (Ridge):</strong></p><code>Loss = Σ(y_i - ŷ_i)² + λ Σ(β_j)²</code><p>Penalty = sum of squared coefficients.</p><p><strong>Mathematical difference:</strong></p><ol><li><strong>L1 induces sparsity.</strong> Gradient of |β| is ±1 (piecewise), so optimal solution often has β_j = 0 exactly. Acts as automatic feature selection. Good for high-dimensional sparse data (text, genes).</li><li><strong>L2 does not produce exact zeros.</strong> Gradient of β² is 2β (smooth), so weights shrink but rarely hit zero. All features remain in model but with smaller weights. Prefers many small weights to few large ones.</li><li><strong>Geometric:</strong> Constraint region for L1 is a diamond (axis-aligned) — solution often at a corner (zero coeff). L2 is a circle — solution rarely at axis.</li></ol><p><strong>When to use:</strong></p><ul><li><strong>L1 (Lasso):</strong> interpretability needed (which features matter?), high-dimensional data with irrelevant features, sparse solutions preferred. Example: Expedia search ranking with 10K text features.</li><li><strong>L2 (Ridge):</strong> stable estimates, correlated features, no need for sparsity, numerical stability matters. Example: hotel features (price, location, rating) with multicollinearity.</li><li><strong>Both (ElasticNet = αL1 + (1-α)L2):</strong> balance between sparsity and stability. Default choice when unsure.</li></ul>"},{id:"w4q7",q:"What is calibration drift? How do you detect it? How does Platt scaling help? How would you monitor it in production?",company:"Expedia / Google",freq:"Medium",answer:`<p><strong>Calibration:</strong> predicted probabilities match empirical frequencies. If model predicts CTR=0.05 for 1000 impressions, ≈50 should click. If only 30 click → model is overconfident → miscalibrated.</p><p><strong>Calibration drift:</strong> model becomes miscalibrated over time in production. Common causes: data distribution shift (users, items, context change), label distribution shift, temporal trends.</p><p><strong>Detection:</strong> (1) Calibration plot: binned predictions vs actual click rate. Should follow y=x diagonal. (2) Expected calibration error (ECE) = Σ|accuracy_bin - conf_bin|. (3) Brier score = mean((pred - actual)²). (4) Log-loss increase indicates miscalibration among other issues.</p><p><strong>Platt scaling (isotonic regression):</strong> Train a logistic regression model on validation data: click = logit(α*model_score + β). Outputs well-calibrated probabilities even if original model is miscalibrated. Applied post-hoc, cheap, effective.</p><code>from sklearn.calibration import CalibratedClassifierCV
cal_model = CalibratedClassifierCV(base_model, method='sigmoid')
cal_model.fit(X_val, y_val)
cal_probs = cal_model.predict_proba(X_test)</code><p><strong>Production monitoring:</strong> (1) Daily: compute calibration error on holdout set. (2) Alert if ECE > 0.02 (miscalibration threshold). (3) Weekly: re-fit Platt scaling on recent data. (4) Monthly: retrain main model if calibration not recoverable by Platt scaling.</p>`},{id:"w4q8",q:"[Expedia case study] You're building a hotel CTR model. A feature 'user_booked_this_hotel_before' has strong predictive power but is only available for 20% of users. What is target leakage? Is this feature leakage? How would you detect it?",company:"Expedia",freq:"High",answer:`<p><strong>Target leakage:</strong> the feature contains information about the target that would not be available at prediction time in production. Model appears to work well in offline evaluation but fails in production because it relied on information from the future.</p><p><strong>Is 'user_booked_this_hotel_before' leakage?</strong> MAYBE — depends on timing. (1) <strong>If training label = "clicked on hotel in impression":</strong> and feature = "user booked it historically (anytime)", then NO leakage — the booking occurred before the click, so it's a valid signal of user preference. (2) <strong>If feature = "user booked it within 1 day of click":</strong> YES, strong leakage — the booking is the outcome you're trying to predict. (3) <strong>If feature = "user viewed/bookmarked hotel in current session before impression":</strong> NO leakage — it's session state at prediction time.</p><p><strong>How to detect leakage:</strong></p><ol><li><strong>Temporal analysis:</strong> For each training sample, verify feature was known before label occurred. Plot feature values vs label timing.</li><li><strong>Train-test split check:</strong> Train on [Date 1-20], test on [Date 21-30]. If model uses date 25 information to predict date 22 label → obvious.</li><li><strong>Feature importance surge:</strong> Feature has suspiciously high importance compared to domain knowledge. Engineer reviews it.</li><li><strong>Online-offline gap:</strong> Model AUC=0.85 offline, AUC=0.62 online → likely leakage.</li></ol><p><strong>For this case:</strong> Verify 'booking' timestamp is strictly before 'impression' timestamp in training data. If so, it's valid. If not, drop it or engineer carefully (e.g., use booking within last 90 days only).</p>`}]},{title:"Section 2: Ranking, Ads & Auction Theory (Q9–Q16)",icon:"🎯",range:"Q9–Q16",qs:[{id:"w4q9",q:"Write the NDCG@k formula. Compute NDCG@3 for a ranking with relevance scores [3, 0, 2] (assume perfect ranking is [3, 2, 1]).",company:"Expedia / Google",freq:"High",answer:`<p><strong>NDCG@k (Normalized Discounted Cumulative Gain):</strong></p><code>DCG@k = Σ(i=1 to k) rel_i / log₂(i+1)
IDCG@k = DCG of ideal ranking (sorted by relevance descending)
NDCG@k = DCG@k / IDCG@k</code><p><strong>Intuition:</strong> DCG rewards relevant items, especially at top positions (log₂(i+1) discounts lower positions). NDCG normalizes by ideal ranking → always 0-1.</p><p><strong>Computation for [3, 0, 2]:</strong></p><code>Position 1: rel=3, discount=log₂(2)=1, contrib=3/1=3.0
Position 2: rel=0, discount=log₂(3)≈1.585, contrib=0/1.585=0
Position 3: rel=2, discount=log₂(4)=2, contrib=2/2=1.0
DCG@3 = 3.0 + 0 + 1.0 = 4.0

Ideal ranking [3, 2, 1]:
Position 1: 3/1 = 3.0
Position 2: 2/1.585 ≈ 1.26
Position 3: 1/2 = 0.5
IDCG@3 ≈ 4.76

NDCG@3 = 4.0 / 4.76 ≈ 0.84</code><p><strong>Interpretation:</strong> This ranking achieves 84% of the ideal ranking quality. The position-2 zero is costly — if we'd swapped with the rel=2 item, NDCG would be higher.</p><p><strong>Why NDCG?</strong> (1) Position-aware: rewards relevance at top. (2) Normalized: directly comparable across queries. (3) Aligned with user experience: users see top results first. Widely used in search/ranking ML at Expedia, Google, Airbnb.</p>`},{id:"w4q10",q:"What is LambdaMART? How does it combine LambdaRank with gradient boosting? Why is it better than pointwise or pairwise learning-to-rank?",company:"Expedia / Google",freq:"High",answer:`<p><strong>LambdaMART = LambdaRank + MART (gradient boosted trees).</strong></p><p><strong>Learning-to-rank hierarchy:</strong></p><ol><li><strong>Pointwise:</strong> Predict relevance of each (query, document) pair independently. Loss: regression (squared error). Problem: ignores ranking order; two models with same RMSE can have very different NDCG.</li><li><strong>Pairwise:</strong> For each query, learn to order pairs (doc_i, doc_j) correctly. Loss: log-loss on whether i should rank above j. Better aligned with ranking, but still not optimizing NDCG directly.</li><li><strong>Listwise (LambdaMART):</strong> Directly optimize NDCG. Gradient of NDCG w.r.t. score of doc_i ≈ "how much does changing doc_i's position improve ranking?" This is the 'lambda' — a smart weight for each document that reflects its contribution to NDCG.</li></ol><p><strong>LambdaMART algorithm:</strong></p><code>1. For each (query, doc list):
   a. Compute current ranking and NDCG
   b. For each pair (i,j) where rank is suboptimal (swapping increases NDCG):
      - Compute lambda_i = change in NDCG from swapping i and j
      - Assign weight lambda_i to doc_i's residual
   c. Fit gradient boosted tree to residuals weighted by lambda
2. Repeat with updated model</code><p><strong>Why better:</strong> (1) Listwise directly optimizes NDCG (the metric that matters for users). (2) Pairwise overly penalizes small swaps — doesn't care about position. (3) Pointwise ignores ranking structure entirely. LambdaMART combines the best: learns pairwise swaps but weights them by NDCG impact.</p><p><strong>Practical:</strong> Used in LightGBM (rank:ndcg objective). Expedia search ranking likely uses LambdaMART or similar. Strong empirical results — often beats other learning-to-rank methods.</p>`},{id:"w4q11",q:"What is position bias in search rankings? Why does it occur? How would you correct for it using inverse probability scoring (IPS)?",company:"Expedia / Google",freq:"High",answer:`<p><strong>Position bias:</strong> Users are more likely to click on top-ranked results regardless of relevance. A relevant document at position 10 has lower CTR than an equally relevant document at position 1, purely due to visibility.</p><p><strong>Why it occurs:</strong> Users have limited attention (scan top results first, rarely reach bottom). Cost to examine lower results increases. This is a selection mechanism — clicking is not independent of ranking.</p><p><strong>Problem for model training:</strong> If you train a CTR model on clicked vs unclicked (without correcting bias), the model learns position effects. It predicts high CTR for top-ranked items even when they're not actually relevant. This creates a feedback loop: model ranks mediocre top items high → users see them and click → model learns they're good → ranks them higher.</p><p><strong>Inverse Probability Scoring (IPS) correction:</strong></p><code># Estimate position bias: P(click | position)
click_rate_by_position = data.groupby('position')['clicked'].mean()
# position_bias[i] = probability user examined position i and clicked

# Unbiased CTR estimate:
unbiased_ctr = click_count[pos] / (n_impressions[pos] * position_bias[pos])

# Interpretation: divide by position bias to remove selection mechanism
# If bias[pos=1] = 0.5 (users examine top 50%), bias[pos=5] = 0.1,
# then 10 clicks at position 1 out of 100 = 5% CTR,
# while 1 click at position 5 out of 100 = 10% unbiased CTR (more relevant!)
</code><p><strong>In practice:</strong> Interleave experiments (randomly swap ranking of two results) or explicit relevance judgments to train unbiased models. LightGBM and XGBoost support position-aware loss functions. Expedia search ranking definitely accounts for position bias — otherwise their ranking would degrade over time.</p>`},{id:"w4q12",q:"[GSP Auction] Given bids b = [5, 3, 1] and quality scores q = [0.8, 1.0, 0.6], compute: (1) final rank order, (2) CPC each advertiser pays, (3) total revenue to platform.",company:"Expedia Ads / Google",freq:"High",answer:`<p><strong>Generalized Second Price (GSP) auction:</strong> Rank ads by bid × quality score. Each advertiser pays the minimum bid needed to hold their position (second-price).</p><p><strong>Step 1: Compute ad ranks (bid × quality):</strong></p><code>Ad 1: 5 × 0.8 = 4.0
Ad 2: 3 × 1.0 = 3.0
Ad 3: 1 × 0.6 = 0.6

Rank order: Ad 1 (rank 1), Ad 2 (rank 2), Ad 3 (rank 3)</code><p><strong>Step 2: Compute CPC (cost per click) each advertiser pays:</strong></p><p>In GSP, the price you pay is set by the next-ranked advertiser's bid.</p><code>Ad 1 (rank 1) pays: (next rank's score / Ad 1's quality)
             = (Ad 2 rank / q_1)
             = (3.0 / 0.8) = 3.75 per click

Ad 2 (rank 2) pays: (Ad 3 rank / q_2)
             = (0.6 / 1.0) = 0.6 per click

Ad 3 (rank 3) pays: reserve price (usually 0 or small value, let's say 0.1)
             = 0.1 per click</code><p><strong>Step 3: Total platform revenue:</strong></p><p>Assume 100 impressions each. CTR depends on position — typical: position 1 CTR 2%, position 2 CTR 1%, position 3 CTR 0.5%.</p><code>Ad 1: 100 × 2% × 3.75 = 7.50
Ad 2: 100 × 1% × 0.60 = 0.60
Ad 3: 100 × 0.5% × 0.10 = 0.05
Total revenue = 8.15</code><p><strong>Key insight:</strong> GSP (Generalized Second Price) ensures truthful bidding is a dominant strategy — advertisers have no incentive to bid untruthfully. This is why Google, Expedia, and major ad platforms use variants of GSP.</p>`},{id:"w4q13",q:"Write the iROAS formula. An advertiser spends $20K. Incremental bookings = 400. Average booking value = $350. Commission = 15%. What is Expedia's break-even iROAS?",company:"Expedia Ads",freq:"High",answer:`<p><strong>iROAS (Incremental Return on Ad Spend):</strong></p><code>iROAS = Incremental Revenue / Ad Spend
       = (Incremental Bookings × Avg Booking Value) / Ad Spend</code><p><strong>Computation:</strong></p><code>Incremental bookings = 400
Avg booking value = $350
Incremental revenue = 400 × 350 = $140,000
Ad spend = $20,000
iROAS = $140,000 / $20,000 = 7.0x</code><p><strong>Interpretation:</strong> For every $1 the advertiser spends, they get $7 in incremental booking revenue. Strong return.</p><p><strong>Expedia break-even calculation:</strong></p><code># Expedia earns commission on incremental bookings
commission_rate = 0.15
expedia_revenue_per_booking = avg_booking_value × commission_rate
                            = 350 × 0.15 = $52.50

# Break-even: Expedia revenue must ≥ ad spend
# (Incr Bookings × Expedia per-booking) ≥ Ad Spend
# Break-even iROAS: when advertiser's incremental revenue = their cost
# But Expedia only captures commission...

# Break-even iROAS for EXPEDIA profitability:
expedia_breakeven_iroas = 1 / commission_rate = 1 / 0.15 ≈ 6.7x

# Interpretation: if advertiser iROAS < 6.7x, Expedia loses money
# At iROAS = 6.7x: advertiser gets $6.7 per $1 spend
#                   Expedia gets $6.7 × 0.15 = $1.00 (breaks even)

# In this case: iROAS = 7.0x > 6.7x → Expedia profitable
expedia_profit = (incremental_bookings × expedia_revenue_per_booking) - ad_spend
               = (400 × 52.50) - 20000 = 21000 - 20000 = $1000 profit</code><p><strong>Key insight:</strong> Expedia's incentive is to drive advertiser iROAS above 6.7x (inverse of commission rate). Below that, the ads channel loses money. This drives daily bidding and advertiser acceptance decisions.</p>`},{id:"w4q14",q:"Explain Thompson Sampling for ads. How does the posterior update work with a Beta distribution? Why is it better than epsilon-greedy?",company:"Expedia / Meta",freq:"Medium",answer:`<p><strong>Thompson Sampling:</strong> A Bayesian bandit algorithm that maintains a posterior distribution over each ad's true CTR and samples from it to decide which ad to show.</p><p><strong>Beta distribution setup:</strong> Model CTR as Bernoulli (click/no-click). Beta distribution is conjugate prior for Bernoulli — posterior is also Beta.</p><code>Prior: Beta(α=1, β=1)  [uniform, no prior bias]

After observing:
- clicks successes
- impressions - clicks failures

Posterior: Beta(α + successes, β + failures)</code><p><strong>Thompson Sampling algorithm:</strong></p><code>1. For each ad i, maintain Beta(α_i, β_i)
2. At each step:
   a. Sample CTR_i ~ Beta(α_i, β_i) for each ad
   b. Show ad with highest sampled CTR
   c. Observe click or no-click
   d. Update winner's Beta: α += click, β += (1 - click)
3. Repeat</code><p><strong>Example:</strong></p><code>Ad A: 10 clicks, 90 no-clicks → Beta(11, 91)
Ad B: 50 clicks, 50 no-clicks → Beta(51, 51)

Sample from Ad A: ~0.08-0.15 (uncertain, could be lucky or unlucky)
Sample from Ad B: ~0.45-0.55 (tight, estimated CTR ≈ 50%)

Ad B's sample is usually higher → show Ad B more often
But Ad A gets samples occasionally → explore it (might be good!)</code><p><strong>Why better than epsilon-greedy:</strong></p><ul><li><strong>Epsilon-greedy:</strong> Always exploit best ad (1-ε), random explore (ε). Exploration is uniform/dumb.</li><li><strong>Thompson Sampling:</strong> Exploration is proportional to uncertainty. Uncertain ads get sampled more; certain ads less. Achieves lower regret (better performance).</li><li><strong>Practical:</strong> Thompson Sampling is production-grade. Facebook, Expedia, Google use it or variants (contextual Thompson Sampling for personalization).</li></ul><p><strong>Expedia context:</strong> Instead of static CTR for all users, condition on context (user device, query, season): Beta(α_i|context, β_i|context). Different posterior for each user segment. When new context appears, initialize with weak prior (high variance) → explore it.</p>`},{id:"w4q15",q:"Explain the two-tower model architecture for ranking/recommendation. What are the 'two towers'? How do you serve it in production?",company:"Expedia / Airbnb",freq:"Medium",answer:`<p><strong>Two-tower model:</strong> Separate neural networks for query and item (or user and item), outputting embeddings that are compared via similarity (inner product or cosine distance).</p><code>Tower 1 (Query/User):
  Input: [user features, search query, context]
  → NN → embedding_u (dimension d, e.g., d=128)

Tower 2 (Item/Document):
  Input: [item features, price, rating, location]
  → NN → embedding_i (dimension d)

Score = dot_product(embedding_u, embedding_i) or cosine_similarity
      = Σ(u_k * i_k) for k=1..d</code><p><strong>Why two towers?</strong> (1) <strong>Modularity:</strong> each tower can be trained/updated independently. (2) <strong>Scalability:</strong> offline compute all item embeddings once; at serving time, compute user embedding and do fast nearest-neighbor search (scanned via FAISS or similar). (3) <strong>Joint training:</strong> loss guides both towers to map semantically similar (user, item) pairs to nearby embeddings.</p><p><strong>Production serving:</strong></p><code>Offline (batch):
- Compute embeddings for all 10M hotels
- Index them in FAISS (approximate nearest neighbors)
- Store index on disk

Online (request):
- Receive user context
- Forward through Tower 1 (user encoder) → get embedding_u
- Query FAISS: "find top-1000 hotels nearest to embedding_u"
- Re-rank top-1000 with policy, freshness, diversity → return top 10

Latency: ~10-50ms (FAISS search is fast, neural network inference is the bottleneck)</code><p><strong>Variants:</strong> (1) Add attention heads to tower for interpretability. (2) Combine with features (hybrid ranking: score = λ*embedding_score + (1-λ)*feature_score). (3) Side information: add recent interaction tower (what user clicked in last session).</p><p><strong>At Expedia:</strong> Two-tower likely used for hotel search ranking + personalization. Item tower encodes hotel features. User tower encodes search intent (dates, price range, reviews). Output is ranking of hotels per search.</p>`},{id:"w4q16",q:"At Expedia, there's a tradeoff: showing more ads per page increases revenue but may decrease user satisfaction. How would you frame this as an optimization problem? What metrics would you track?",company:"Expedia",freq:"Medium",answer:`<p><strong>Problem framing:</strong> You control the number of sponsored ads (k) shown on search results. Each ad contributes commission revenue. But more ads → worse UX → lower organic booking rate.</p><p><strong>Optimization formulation:</strong></p><code>max_k: Revenue(k) - Cost(k)

Revenue(k) = k × (avg ad clicks per ad) × (avg bid) × (prob of booking | clicked ad)
Cost(k) = user satisfaction loss → decreased organic bookings

Net value(k) = ad_revenue(k) - (booking_rate_loss(k) × avg_booking_value × n_users)</code><p><strong>Key insight:</strong> There's an optimal k that balances revenue and user loss. k=0 → no ad revenue but happy users. k=20 → high revenue but users abandon search → organic bookings collapse.</p><p><strong>How to measure (metrics):</strong></p><ul><li><strong>Ad-side metrics:</strong> ad impressions, clicks, CTR, CPC, total ad revenue (tracked per page load).</li><li><strong>Organic-side metrics:</strong> organic booking rate (% of users who see ads and still book), average booking value, conversion rate by ad count bucket.</li><li><strong>User experience:</strong> bounce rate, session duration, search abandonment rate (% who exit after search).</li><li><strong>Composite:</strong> platform revenue = ad_revenue + organic_booking_value - operational_cost.</li></ul><p><strong>Experimental approach:</strong> Run A/B tests with different k values (k=2, k=4, k=6). Measure: ad revenue (winner: k=6), organic booking rate (worst: k=6), net platform revenue (peak: k=4). Decision: ship k=4 if it maximizes long-term platform value.</p><p><strong>Guardrail:</strong> if organic bookings drop >5% from baseline, cap ad count increases.</p><p><strong>Interview answer:</strong> "This is a revenue-vs-UX optimization. I'd A/B test ad count, tracking both ad revenue and organic booking rate. The optimal ad count maximizes total platform revenue (ads + organic bookings) while maintaining acceptable user satisfaction. We'd ship the version with highest net value."</p>`}]},{title:"Section 3: NLP, LLMs & Production ML (Q17–Q24)",icon:"⚙️",range:"Q17–Q24",qs:[{id:"w4q17",q:"What is TF-IDF? Write the formula. Why does it down-weight common words?",company:"Expedia / Google",freq:"High",answer:`<p><strong>TF-IDF (Term Frequency – Inverse Document Frequency):</strong></p><code>TF-IDF(term, doc) = TF(term, doc) × IDF(term)

TF (term frequency) = count of term in doc / total words in doc
IDF (inverse document frequency) = log(total docs / docs containing term)
or common variant: IDF = log(total docs / (docs containing term + 1))</code><p><strong>Example:</strong></p><code>Corpus: 100 hotel reviews
Term: "Paris"
- Appears in 10 reviews
- In one review, appears 2 times out of 50 words

TF = 2 / 50 = 0.04
IDF = log(100 / 10) = log(10) ≈ 1.0
TF-IDF = 0.04 × 1.0 = 0.04

Term: "the" (common)
- Appears in 95 reviews
- In same review, appears 5 times out of 50 words

TF = 5 / 50 = 0.10
IDF = log(100 / 95) ≈ 0.051
TF-IDF = 0.10 × 0.051 ≈ 0.005</code><p><strong>Why it down-weights common words:</strong> High IDF (rarity) means the term is informative — if "Paris" appears in a review, it distinguishes that review from others. Low IDF (common term like "the") means the term appears in most documents — it carries no discriminative signal. TF-IDF amplifies rare, informative terms and suppresses ubiquitous noise.</p><p><strong>Use cases:</strong> (1) Search relevance: compute TF-IDF vector for query and documents, rank by cosine similarity. (2) Feature engineering: convert text to TF-IDF features for ML models (before deep learning, standard approach). (3) Information retrieval baseline.</p><p><strong>Limitations:</strong> (1) Doesn't capture word order or semantics ("good bad" and "bad good" have same TF-IDF). (2) Outperformed by embeddings (word2vec, BERT). (3) Sparse representation (most entries zero).</p><p><strong>At Expedia:</strong> TF-IDF is likely used for: search indexing (BM25, a variant of TF-IDF), initial ranking, or feature extraction in ML pipelines alongside neural models.</p>`},{id:"w4q18",q:"Write the attention mechanism formula: Attention(Q,K,V) = softmax(QKᵀ/√d)V. Explain each component. Why do we divide by √d?",company:"Meta / Google",freq:"High",answer:`<p><strong>Attention formula:</strong></p><code>Attention(Q,K,V) = softmax(QKᵀ / √d) V</code><p><strong>Components:</strong></p><ul><li><strong>Q (Query), K (Key), V (Value):</strong> three learned linear transformations of input. Q, K have dimension [batch, seq_len, d]. V has dimension [batch, seq_len, d]. d = embedding dimension (e.g., 64 in multi-head attention).</li><li><strong>QKᵀ:</strong> matrix multiplication [seq_len, d] × [d, seq_len] = [seq_len, seq_len]. Each entry QKᵀ[i,j] measures how much position i (query) is 'interested in' position j (key). Higher = stronger similarity.</li><li><strong>Softmax:</strong> normalizes row-wise to probabilities (0-1, sum to 1 per row). Attention[i] = probability distribution over which positions to attend to from position i.</li><li><strong>× V:</strong> weighted sum of values. Attention[i] is a linear combination of all V vectors, weighted by the softmax probabilities. Positions the query attends to strongly are upweighted.</li></ul><p><strong>Concrete example (toy):</strong></p><code>Input: "The cat sat"
Q = [0.1, 0.2], K = [0.1, 0.1], V = [1, 0]  # position 0 ("The")
    [0.5, 0.1], [0.3, 0.2], [0, 1]  # position 1 ("cat")
    [0.2, 0.3], [0.2, 0.3], [0, 0.5]  # position 2 ("sat")

d = 2

QKᵀ = [[0.01+0.02, 0.03+0.02, 0.02+0.06],    # pos 0: weak similarity to all
       [0.15+0.01, 0.15+0.02, 0.10+0.03],     # pos 1: strong "self" attention
       [0.04+0.09, 0.04+0.09, 0.04+0.09]]     # pos 2: moderate attention

QKᵀ / √d = QKᵀ / 1.414

Apply softmax per row → probabilities

Output = softmax @ V → weighted combination of value vectors</code><p><strong>Why divide by √d?</strong> As d increases, QKᵀ entries grow (more dimensions → more dot product terms). Large values in softmax input → softmax output becomes sharp (concentrated on one position) → information is lost. Dividing by √d stabilizes variance, keeping softmax outputs smooth (gradients are well-behaved). Without this, attention becomes brittle for high-dimensional embeddings.</p><p><strong>Multi-head attention:</strong> Use h=8 independent attention heads (Q, K, V are projected into h subspaces). Concatenate outputs. Allows model to attend to multiple aspects of data simultaneously.</p><p><strong>Transformers use this:</strong> BERT, GPT, and all modern NLP models build on attention. Expedia search likely uses attention-based encoders for query understanding and ranking.</p>`},{id:"w4q19",q:"Compare BERT vs GPT: pre-training objectives, bidirectional vs autoregressive, and when you would use each.",company:"Meta / Google",freq:"High",answer:`<p><strong>BERT (Bidirectional Encoder Representations from Transformers):</strong></p><ul><li><strong>Pre-training objective:</strong> Masked Language Model (MLM). Randomly mask 15% of words, predict them from surrounding context. Example: "The [MASK] sat on the mat" → predict "cat".</li><li><strong>Mechanism:</strong> Bidirectional. Token embeddings attend to all other positions (left and right). Final representation of a token captures bidirectional context.</li><li><strong>Strengths:</strong> Excellent at understanding, classification, NER, semantic similarity. Fine-tune for downstream tasks (add task-specific head).</li><li><strong>Limitations:</strong> No native sequence generation (not designed for decoding). Can't generate text autoregressively.</li></ul><p><strong>GPT (Generative Pre-trained Transformer):</strong></p><ul><li><strong>Pre-training objective:</strong> Causal Language Model (CLM). Predict next token given previous tokens. Example: "The cat sat" → predict "on".</li><li><strong>Mechanism:</strong> Autoregressive. Token attends only to previous positions (causal mask). Future tokens are hidden.</li><li><strong>Strengths:</strong> Excellent at generation, open-ended tasks, few-shot learning. Can be prompted for many tasks without fine-tuning (GPT-3 scale effect).</li><li><strong>Limitations:</strong> Weaker at understanding without fine-tuning. Larger models needed for strong performance.</li></ul><p><strong>Comparison table:</strong></p><code>BERT                                    | GPT
Bidirectional context                   | Autoregressive (left-to-right)
Masked language model objective          | Causal language model objective
Fine-tuning based                       | Prompt-based (especially GPT-3+)
Good at: classification, NER, Q&A      | Good at: generation, few-shot, chat
Size: base=110M, large=340M             | Size: gpt-2=1.5B, gpt-3=175B, gpt-4=?
Encoder only                            | Decoder only (can add encoder)
</code><p><strong>When to use each:</strong></p><ul><li><strong>BERT:</strong> Hotel search query understanding (classify intent, extract entities like dates/location). Semantic similarity (find similar hotels). Fine-tune on Expedia data.</li><li><strong>GPT:</strong> Hotel review generation, user intent prediction from chat, conversational recommendation ("I want something romantic"). Few-shot prompting without fine-tuning.</li><li><strong>Hybrid:</strong> BERT encoder + GPT decoder (encoder-decoder like T5, BART). Best of both worlds for seq2seq tasks (question answering, summarization, translation).</li></ul><p><strong>Production strategy:</strong> Use BERT for understanding (cheaper, deterministic). Use GPT for generation (more creative, requires careful prompting). For Expedia: BERT for search ranking, GPT for customer support chatbot.</p>`},{id:"w4q20",q:"What is Retrieval-Augmented Generation (RAG)? When would you use RAG vs fine-tuning an LLM? Give an Expedia example.",company:"Expedia / Meta",freq:"Medium",answer:`<p><strong>RAG (Retrieval-Augmented Generation):</strong> Before generating a response, retrieve relevant documents from a knowledge base, then use them to ground the LLM's generation. Architecture: retriever (find relevant docs) + generator (LLM conditioned on docs).</p><code>User question: "What's the cancellation policy for the Hilton in Paris?"

RAG pipeline:
1. Embed question: q_emb = encoder(question)
2. Retrieve top-k docs: docs = vector_db.search(q_emb, k=3)
   → [Hilton Paris page, General Expedia policy, Competitor policies]
3. Augment prompt:
   prompt = f"Context: {docs}

Question: {question}

Answer:"
4. Generate: answer = gpt3.complete(prompt)
   → Returns Hilton Paris cancellation policy + dates</code><p><strong>Advantages of RAG:</strong></p><ul><li><strong>Factual accuracy:</strong> Grounded in source documents, reduces hallucination.</li><li><strong>No fine-tuning needed:</strong> Use off-the-shelf LLM (GPT-3, GPT-4) without expensive retraining.</li><li><strong>Up-to-date information:</strong> Retrieval source can be updated in real-time (policies change, new hotels added).</li><li><strong>Auditable:</strong> Can show which documents informed the response (transparency).</li></ul><p><strong>Fine-tuning:</strong> Update LLM weights on task-specific data.</p><ul><li><strong>Advantages:</strong> Deeply adapt model to domain (Expedia jargon, knowledge). Latency lower (no retrieval step).</li><li><strong>Disadvantages:</strong> Expensive compute, need lots of labeled data, difficult to update (retrain whole model), risk of catastrophic forgetting, hallucinations still possible.</li></ul><p><strong>RAG vs Fine-tuning:</strong></p><code>RAG:              Best for knowledge-heavy tasks (Q&A, policy lookup, doc summarization)
Fine-tuning:      Best for style/format adaptation (customer service tone, specific jargon)
Hybrid:           Retrieve docs + use fine-tuned decoder for generation

Rule of thumb: Start with RAG. Fine-tune if RAG misses too many cases.</code><p><strong>Expedia example:</strong> (1) <strong>Hotel Q&A:</strong> RAG. Retrieve hotel description, reviews, policies. Let GPT-4 answer user questions grounded in docs. (2) <strong>Customer support classification:</strong> Fine-tune on Expedia support tickets to classify intent (refund, booking, complaint). (3) <strong>Personalized recommendation:</strong> RAG to retrieve hotels matching user preferences, fine-tuned ranker to order them.</p>`},{id:"w4q21",q:"What is a feature store? What does 'point-in-time correctness' mean? Why does it matter for training a recommendation model?",company:"Expedia / Airbnb",freq:"High",answer:`<p><strong>Feature store:</strong> A centralized system that computes, versions, and serves features (ML inputs) for training and inference. Examples: Tecton, Feast, Hopsworks.</p><p><strong>Point-in-time (PIT) correctness:</strong> Ensures that when training on a historical event (e.g., user booked hotel on date D), the features reflect information available at or before date D — NOT information from after D.</p><p><strong>Example of violation:</strong></p><code>Event: User A books hotel X on 2024-03-15 at 10am
Label: booking = 1 (booked)

If we use feature "user rating of hotel X" (from 2024-03-25), we're using
information from AFTER the event. This is target leakage!

Correct: use "user rating of hotel X" as of 2024-03-14 (before event)
or use "count of users who rated hotel X" as of 2024-03-14</code><p><strong>Why it matters for recommendation models:</strong></p><ul><li><strong>Data leakage:</strong> If you use future data, model learns patterns that aren't causal. It overfits to temporally adjacent signals (user rated hotel right after booking). Model appears to perform well on train set but fails in production (features won't be available when predicting).</li><li><strong>Train-test gap:</strong> Model trained with future data shows high AUC offline. But in production, those features don't exist yet (user hasn't rated the hotel yet). Online AUC drops 30-50%.</li><li><strong>Feedback loops:</strong> Recommendation model predicts user will book. If model uses "is this hotel trending (recent bookings)" to boost score, and the boosted prediction causes more bookings, this creates a self-reinforcing loop. User behavior is now a function of model predictions — causality is murky.</li></ul><p><strong>How feature store solves this:</strong></p><code>1. Features tagged with computation timestamp
2. At training: for event on date D, retrieve features as of D-1
3. At inference: use most recent available features
4. Validation: automatic lineage tracking (which features, which timestamps used for each training example)

Example in Tecton:
@feature_view
def user_hotel_rating(context):
   user_id = context.user_id
   hotel_id = context.hotel_id
   timestamp = context.timestamp  # PIT: evaluation time
   return db.query(f"SELECT rating FROM ratings
                    WHERE user_id={user_id} AND hotel_id={hotel_id}
                    AND timestamp < {timestamp}")  # before the event
</code><p><strong>Practice at Expedia:</strong> Use feature store (likely custom or Tecton). When training CTR model, join events (impressions) with user/item features as of the event timestamp. Automatic PIT correctness prevents leakage. Catch bugs like: "user clicked hotel because we showed similar hotel yesterday" (yesterday is allowed; tomorrow is not).</p>`},{id:"w4q22",q:"What is PSI (Population Stability Index)? Write the formula. What thresholds trigger model retraining?",company:"Expedia / Google",freq:"High",answer:`<p><strong>PSI (Population Stability Index):</strong> Measures how much the distribution of a variable has shifted between two populations (usually training vs. production).</p><p><strong>Formula:</strong></p><code>PSI = Σ (Expected% - Actual%) × ln(Expected% / Actual%)

where:
Expected% = proportion of training data in bin i
Actual% = proportion of production data in bin i
Sum over all bins (often 10 quantiles or custom bins)</code><p><strong>Example:</strong></p><code>Feature: hotel star rating
Training distribution:
  1-2 stars: 10%
  3 stars: 40%
  4 stars: 35%
  5 stars: 15%

Production distribution:
  1-2 stars: 8%
  3 stars: 35%
  4 stars: 42%
  5 stars: 15%

PSI_1 = (0.10 - 0.08) × ln(0.10/0.08) = 0.02 × ln(1.25) ≈ 0.0045
PSI_3 = (0.40 - 0.35) × ln(0.40/0.35) = 0.05 × ln(1.14) ≈ 0.0066
PSI_4 = (0.35 - 0.42) × ln(0.35/0.42) = -0.07 × ln(0.83) ≈ 0.0122
PSI_5 = (0.15 - 0.15) × ln(1) = 0

PSI_total ≈ 0.0045 + 0.0066 + 0.0122 + 0 ≈ 0.023</code><p><strong>Interpretation and thresholds:</strong></p><code>PSI < 0.1:    No change; monitor but no action
PSI 0.1-0.2:  Small shift; investigate root cause; consider retraining
PSI > 0.2:    Significant shift; likely retrain required

Threshold varies by org: Expedia might use 0.1 for critical models (search ranking),
0.2 for secondary models (display order)</code><p><strong>Practical workflow:</strong></p><code>1. Compute daily PSI for each important feature (price, location, user device)
2. Alert if PSI exceeds threshold
3. Root cause analysis: did user behavior change? Competitor action? Data pipeline bug?
4. Retraining decision:
   - If PSI from data drift (seasonal, policy change): retrain with recent data
   - If PSI from pipeline bug (null values, wrong normalization): fix pipeline first, then retrain
5. Monitor post-retraining: PSI should drop (new model adapted to new distribution)</code><p><strong>Why it matters:</strong> Production distribution shift = model features no longer represent current reality. Model performance degrades silently. Monitoring PSI is an early warning system. Many production failures (ranking quality drops, CTR model miscalibration) are preceded by PSI spike.</p><p><strong>At Expedia:</strong> Likely track PSI for: user geography, hotel location, booking value, search query features (time of year, trip length). Critical for detecting seasons, market changes, algorithmic feedback loops.</p>`},{id:"w4q23",q:"Explain the difference between shadow mode and canary deployment. When would you use each for launching a new ranking model?",company:"Expedia / Google",freq:"High",answer:`<p><strong>Shadow mode:</strong> Run the new model in parallel with the old model, but only serve the old model's predictions to users. Log predictions from both. Compare offline metrics. Users unaware of experiment.</p><p><strong>How it works:</strong></p><code>User makes request (search query)
→ Run old model (serving) + new model (shadow) in parallel
→ Old model prediction served to user (ranking, CTR, etc.)
→ Log predictions from both: old_score, new_score, user clicks
→ Post-hoc analysis: compare AUC, calibration, ranking quality

Pros:
- No user impact (100% old model served)
- Full production traffic (representative)
- Can run for weeks without risk
- Catch bugs in new model (crashes, NaNs, extreme values)

Cons:
- Can't measure causal impact on user behavior (metrics are logged, not real)
- Doesn't capture feedback loops (new ranking might bias user choices differently)
- Long duration before launch decision (weeks of data collection)</code><p><strong>Canary deployment:</strong> Gradually roll out the new model to a small percentage of users (1-10%), monitor online metrics (real user behavior). If healthy, expand to more users. If issues, rollback immediately.</p><p><strong>How it works:</strong></p><code>Canary: 5% of users see new model
Control: 95% of users see old model

Monitor metrics:
- Click-through rate (new vs control)
- Booking conversion
- Page load latency
- Ranking quality (A/B test)
- Errors/crashes

If metrics look good after 1 day: ramp to 25% canary
If metrics degrade: rollback to 0% canary immediately

Pros:
- Real user impact measurement (causal, unbiased)
- Fast iteration (1-2 weeks to full rollout)
- Rollback is instant if issues detected
- Catch production bugs (infrastructure, data pipeline)

Cons:
- Users affected by bugs (though small %)
- Requires fast monitoring and alerting
- Can't pre-test at scale (only 5% of traffic)</code><p><strong>Decision tree for ranking model:</strong></p><code>1. NEW MODEL CONFIDENCE HIGH + Low-risk change (e.g., improved ranking of hotels):
   → Shadow mode first (1 week). Verify AUC, calibration match expectations.
   → If metrics good, canary 5% (1 day).
   → If metrics stay good, ramp to 50% (1 day), then 100%.
   → Full rollout in 3 days.

2. NEW MODEL CONFIDENCE MEDIUM + Moderate-risk (e.g., new feature added):
   → Shadow mode (2 weeks). Stress-test for edge cases.
   → If solid, canary 1% (careful monitoring for 1 week).
   → Ramp gradually: 1% → 5% → 25% → 100%.
   → Full rollout in 4 weeks.

3. NEW MODEL CONFIDENCE LOW + High-risk (e.g., major rewrite):
   → Shadow mode (4+ weeks). A/A test (compare to old model in shadow).
   → Canary 0.5% only after A/A test passes.
   → Monitor intensively (daily metrics, alerts).
   → Slow ramp (1% per week) if metrics look good.
   → Full rollout in 6+ weeks.

4. CRITICAL MODEL (booking conversion, payment):
   → Shadow mode + A/A test (mandatory).
   → Canary on low-volume traffic first (e.g., weekday mornings).
   → Slow ramp with guardrails (booking rate can't drop >0.1%, latency <100ms).
   → Full rollout only after 2 weeks of green metrics.</code><p><strong>Expedia strategy:</strong> Combine both. Shadow mode for validation, canary for final verification. Typical timeline: 2 weeks shadow + 2 weeks canary = 1 month to full launch. For critical ranking changes, extend shadow to 4 weeks.</p>`},{id:"w4q24",q:"[Spark SQL] Write a query (SQL or PySpark) to compute the 7-day rolling booking rate per hotel. Include window function, date range, and output columns: hotel_id, date, bookings_7d, impressions_7d, booking_rate_7d.",company:"Expedia / Google",freq:"High",answer:`<p><strong>PySpark solution:</strong></p><code>from pyspark.sql import functions as F
from pyspark.sql.window import Window

# Input table: events(hotel_id, event_date, event_type)
# event_type = 'impression' or 'booking'

# Step 1: Separate impressions and bookings
impressions = events.filter(F.col('event_type') == 'impression').select(
    'hotel_id', 'event_date'
).groupBy('hotel_id', 'event_date').agg(
    F.count('*').alias('impressions')
)

bookings = events.filter(F.col('event_type') == 'booking').select(
    'hotel_id', 'event_date'
).groupBy('hotel_id', 'event_date').agg(
    F.count('*').alias('bookings')
)

# Step 2: Join impressions and bookings
daily_metrics = impressions.join(bookings,
    on=['hotel_id', 'event_date'],
    how='left'
).fillna(0, subset=['bookings'])

# Step 3: Window function for 7-day rolling sum
window_spec = Window.partitionBy('hotel_id')     .orderBy(F.col('event_date').cast('long'))     .rangeBetween(-6*86400, 0)  # 6 days before + today

rolling_metrics = daily_metrics.withColumn(
    'bookings_7d', F.sum('bookings').over(window_spec)
).withColumn(
    'impressions_7d', F.sum('impressions').over(window_spec)
).withColumn(
    'booking_rate_7d',
    F.col('bookings_7d') / F.col('impressions_7d')
).select(
    'hotel_id',
    F.col('event_date').alias('date'),
    'bookings_7d',
    'impressions_7d',
    'booking_rate_7d'
)

rolling_metrics.show()</code><p><strong>Alternative SQL approach:</strong></p><code>SELECT
    hotel_id,
    event_date AS date,
    SUM(bookings) OVER (
        PARTITION BY hotel_id
        ORDER BY CAST(event_date AS LONG)
        RANGE BETWEEN 6*86400 PRECEDING AND CURRENT ROW
    ) AS bookings_7d,
    SUM(impressions) OVER (
        PARTITION BY hotel_id
        ORDER BY CAST(event_date AS LONG)
        RANGE BETWEEN 6*86400 PRECEDING AND CURRENT ROW
    ) AS impressions_7d,
    SUM(bookings) / SUM(impressions) OVER (
        PARTITION BY hotel_id
        ORDER BY CAST(event_date AS LONG)
        RANGE BETWEEN 6*86400 PRECEDING AND CURRENT ROW
    ) AS booking_rate_7d
FROM (
    SELECT hotel_id, event_date, SUM(CASE WHEN event_type='booking' THEN 1 ELSE 0 END) AS bookings,
           SUM(CASE WHEN event_type='impression' THEN 1 ELSE 0 END) AS impressions
    FROM events
    GROUP BY hotel_id, event_date
) daily
ORDER BY hotel_id, date</code><p><strong>Key concepts:</strong></p><ul><li><strong>Window function:</strong> PARTITION BY groups data (per hotel). ORDER BY sets sort order (by date). RANGE BETWEEN defines the window (6 days before to current day = 7 days total).</li><li><strong>rangeBetween(-6*86400, 0):</strong> Spark's rangeBetween takes seconds. 6 days = 6*24*3600 = 518400 seconds. -518400 means 6 days back; 0 means current day (inclusive).</li><li><strong>Timestamp conversion:</strong> event_date must be cast to LONG (Unix timestamp in seconds) for RANGE to work correctly.</li><li><strong>Performance:</strong> Window functions can be expensive on large tables. Consider: (1) Filter to recent dates only (last 90 days). (2) Partition the table by date range for parallel processing. (3) Cache intermediate results.</li></ul><p><strong>Output example:</strong></p><code>hotel_id | date       | bookings_7d | impressions_7d | booking_rate_7d
1001     | 2024-03-20 | 42          | 2100           | 0.0200
1001     | 2024-03-21 | 45          | 2150           | 0.0209
1001     | 2024-03-22 | 47          | 2200           | 0.0214
1002     | 2024-03-20 | 8           | 600            | 0.0133
...
</code><p><strong>Production use at Expedia:</strong> This metric is likely computed daily and stored in a data warehouse. Used for: (1) monitoring hotel performance (flag sudden drop in booking rate). (2) feature engineering (7d rolling rate as input to ranking/recommendation model). (3) seller dashboards (hotel partners see their booking trends). Must be incremental (compute only new dates) and indexed by hotel_id for fast queries.</p>`}]}]},km={day:29,week:5,title:"Data Engineering, SQL at Scale & Pipeline Debugging",summary:"Master production-scale SQL patterns, Spark optimization, and real-world pipeline debugging. Learn how to handle data at scale with window functions, CTEs, shuffle-aware operations, and comprehensive data quality checks—all skills demanded in Data Engineering interviews at Expedia, Meta, and Airbnb.",topics:[{name:"Advanced SQL Patterns",content:`Window functions are the backbone of analytics at scale. Use ROW_NUMBER(), RANK(), and DENSE_RANK() with PARTITION BY to solve ranking problems without self-joins. ROW_NUMBER assigns unique row numbers (1,2,3...); RANK allows ties (1,1,3...); DENSE_RANK collapses gaps (1,1,2...).

Running totals and moving averages isolate trends from noise. A 7-day rolling average smooths daily noise; compute it using Window frames: ROWS BETWEEN 6 PRECEDING AND CURRENT ROW.

LEAD/LAG access prior or next rows in sorted order—essential for sequential event analysis. Example: LEAD(booking_date, 1) OVER (PARTITION BY user_id ORDER BY booking_date) shows the next booking for each user.

Self-joins and NOT EXISTS replace joins when finding anti-joins (A without B). NOT EXISTS is typically faster than LEFT JOIN ... WHERE x IS NULL.

CTEs (WITH clauses) make complex queries readable by breaking them into logical steps. Use them to simplify debugging: build one CTE at a time, test each step.`,code:`-- 7-day rolling average booking conversion rate per hotel_id
WITH daily_metrics AS (
  SELECT
    hotel_id,
    DATE(booking_timestamp) AS booking_date,
    COUNT(DISTINCT CASE WHEN status = 'completed' THEN booking_id END)::FLOAT /
    COUNT(DISTINCT booking_id) AS daily_conversion_rate
  FROM bookings
  WHERE booking_timestamp >= NOW() - INTERVAL '90 days'
  GROUP BY hotel_id, DATE(booking_timestamp)
)
SELECT
  hotel_id,
  booking_date,
  daily_conversion_rate,
  AVG(daily_conversion_rate) OVER (
    PARTITION BY hotel_id
    ORDER BY booking_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS rolling_7day_conversion
FROM daily_metrics
ORDER BY hotel_id, booking_date;

-- Find users who booked hotel A but never booked hotel B (anti-join)
SELECT DISTINCT u.user_id
FROM bookings b_a
JOIN users u ON b_a.user_id = u.user_id
WHERE b_a.hotel_id = 'HOTEL_A'
AND NOT EXISTS (
  SELECT 1
  FROM bookings b_b
  WHERE b_b.user_id = b_a.user_id
  AND b_b.hotel_id = 'HOTEL_B'
)
AND b_a.status = 'completed';`},{name:"Spark at Scale",content:`Spark's execution model is crucial to optimize. A DAG (Directed Acyclic Graph) of RDD transformations is compiled into Stages, where each Stage contains Tasks. A shuffle occurs at stage boundaries—data is repartitioned across executors. Shuffles are expensive: they serialize, network, and deserialize data. Minimize them.

groupBy() triggers a shuffle; filter() does not. Always push filters down before groupBy. Broadcast joins avoid shuffles entirely: if one side <200MB, broadcast it to all executors. Use broadcast() explicitly: df.join(broadcast(small_df), key).

Window functions in PySpark use the Window API: Window.partitionBy(cols).orderBy(cols).rowsBetween(start, end). rowsBetween(-6, 0) = current row and 6 preceding (7-day window).

Partitioning strategy is critical. Partition time-series data by date (daily partitions) to avoid full table scans. Avoid skewed keys: if one value dominates (e.g., 80% nulls), partitioning by null is wasteful. Check cardinality: Spark should have 100s to 1000s of partitions, not millions.`,code:`# PySpark: 7-day rolling booking rate per hotel with Window
from pyspark.sql import Window
from pyspark.sql.functions import col, count, when, avg, desc

# Load parquet (partitioned by date)
df = spark.read.parquet('/data/bookings')

# Window: partition by hotel, order by date, 7-day frame
window_spec = Window.partitionBy('hotel_id').orderBy('booking_date').rowsBetween(-6, 0)

rolling_rate = df.groupBy('hotel_id', 'booking_date').agg(
    count(when(col('status') == 'completed', 1)).cast('float').alias('completed'),
    count('*').alias('total')
).withColumn(
    'rolling_7day_rate',
    avg(col('completed') / col('total')).over(window_spec)
).orderBy('hotel_id', 'booking_date')

rolling_rate.show()

# Broadcast join: small hotels list to main bookings table
small_hotels = spark.createDataFrame([('H1',), ('H2',)], ['hotel_id'])
joined = df.join(broadcast(small_hotels), 'hotel_id', 'inner')`},{name:"Pipeline Debugging & Data Quality",content:`Production pipelines fail silently. Schema drift: upstream adds a nullable column, your parser fails. Late-arriving data: events from yesterday land today, your daily snapshot misses them. Null explosions: a join key becomes null, row count balloons 10x. Fan-out joins: joining a dimension with cardinality 1000 to events with cardinality 1B can produce 1T+ rows.

Data quality checks run after every step. Check null rates (should be <1% for non-nullable cols), cardinality (compare yesterday's unique keys), and distribution shift (compare day's histogram to previous 7 days' median—flag if >2σ).

Great Expectations and dbt tests formalize this: write tests as assertions (expect_table_row_count_to_be_between, expect_column_values_to_be_null). These run on every pipeline run and alert on failure.

Debugging checklist: (1) Is the upstream job complete? Check last_modified timestamp. (2) Did schema change? Compare table DDL to your parser. (3) Is volume anomalous? Compare row counts to last week. (4) Are join keys correct? Count nulls and cardinality mismatches.`,code:`# Python: data quality check function
import pandas as pd
from datetime import datetime, timedelta

def check_data_quality(df, table_name, yesterday_df=None):
    """
    Check data quality: nulls, row counts, value ranges, distribution shift.
    Returns dict of checks passed/failed.
    """
    checks = {}

    # 1. Null rates: flag columns with >5% nulls
    null_rates = df.isnull().sum() / len(df)
    checks['null_rates'] = null_rates[null_rates > 0.05].to_dict()

    # 2. Row count: compare to yesterday (allow ±20% variance)
    today_count = len(df)
    if yesterday_df is not None:
        yesterday_count = len(yesterday_df)
        pct_change = abs((today_count - yesterday_count) / yesterday_count)
        checks['row_count_anomaly'] = pct_change > 0.20
        checks['row_count_change'] = f"{pct_change*100:.1f}%"

    # 3. Cardinality: check key columns
    key_cols = ['user_id', 'hotel_id', 'booking_id']
    for col in key_cols:
        if col in df.columns:
            cardinality = df[col].nunique()
            null_count = df[col].isnull().sum()
            checks[f'{col}_cardinality'] = cardinality
            checks[f'{col}_nulls'] = null_count

    # 4. Value ranges: flag anomalies
    if 'price' in df.columns:
        price_min, price_max = df['price'].min(), df['price'].max()
        checks['price_range'] = (price_min, price_max)
        if price_min < 0 or price_max > 1_000_000:
            checks['price_anomaly'] = True

    # 5. Distribution shift: compare to yesterday (PSI-like check)
    if yesterday_df is not None and 'booking_date' in df.columns:
        today_distribution = df['booking_date'].dt.date.value_counts()
        yesterday_distribution = yesterday_df['booking_date'].dt.date.value_counts()
        checks['distribution_stable'] = len(today_distribution) > 0

    return checks

# Usage
quality_report = check_data_quality(df, 'bookings', yesterday_df)
print(quality_report)
if quality_report.get('price_anomaly'):
    print("ALERT: Price values out of expected range!")`},{name:"SQL Interview Deep Dive — Expedia-Specific Patterns",content:`The hotel search funnel is: impression (user sees hotel in search results) → click (user clicks hotel) → detail_view (user sees full details) → search_result (user returns to results) → booking (user completes purchase).

Conversion metrics: CTR (click-through rate) = clicks / impressions. Booking rate = bookings / clicks. Funnel drop-off = (impressions - bookings) / impressions.

Cohort analysis answers: "Users who searched in week 1, what % booked in week 2?" Build a cohort table with first_search_week, then LEFT JOIN to bookings to measure retention/conversion in subsequent weeks.

Session reconstruction: define a session as events within 30 minutes of each other for the same user. Use LAG to find gaps, then GROUP BY to assign session_id.

PERCENTILE_CONT computes exact percentiles (median, p95, p99). For large datasets, use APPROX_PERCENTILE (HyperLogLog approximation, 10x faster).`,code:`-- Median booking price by market using PERCENTILE_CONT
SELECT
  market,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY price) AS median_price,
  PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY price) AS p25_price,
  PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY price) AS p75_price,
  COUNT(*) AS num_bookings
FROM bookings
WHERE status = 'completed'
  AND booking_date >= NOW() - INTERVAL '30 days'
GROUP BY market
ORDER BY median_price DESC;

-- Cohort analysis: 1st-week searchers, 2nd-week booking rate
WITH first_search AS (
  SELECT
    user_id,
    DATE_TRUNC('week', MIN(search_timestamp)) AS first_search_week
  FROM search_events
  GROUP BY user_id
),
second_week_bookings AS (
  SELECT
    fs.user_id,
    fs.first_search_week,
    COUNT(DISTINCT b.booking_id) AS bookings_in_week_2
  FROM first_search fs
  LEFT JOIN bookings b ON fs.user_id = b.user_id
    AND DATE_TRUNC('week', b.booking_date) = fs.first_search_week + INTERVAL '7 days'
  GROUP BY fs.user_id, fs.first_search_week
)
SELECT
  first_search_week,
  COUNT(*) AS cohort_size,
  COUNT(CASE WHEN bookings_in_week_2 > 0 THEN 1 END)::FLOAT / COUNT(*) AS booking_rate_week_2
FROM second_week_bookings
GROUP BY first_search_week
ORDER BY first_search_week DESC;

-- Session reconstruction (events within 30 min = same session)
WITH event_gaps AS (
  SELECT
    user_id,
    event_timestamp,
    LAG(event_timestamp) OVER (PARTITION BY user_id ORDER BY event_timestamp) AS prev_event_time,
    EXTRACT(EPOCH FROM event_timestamp - LAG(event_timestamp) OVER (PARTITION BY user_id ORDER BY event_timestamp)) / 60 AS gap_minutes
  FROM events
),
session_boundaries AS (
  SELECT
    user_id,
    event_timestamp,
    SUM(CASE WHEN gap_minutes IS NULL OR gap_minutes > 30 THEN 1 ELSE 0 END) OVER (PARTITION BY user_id ORDER BY event_timestamp) AS session_id
  FROM event_gaps
)
SELECT
  user_id,
  session_id,
  MIN(event_timestamp) AS session_start,
  MAX(event_timestamp) AS session_end,
  COUNT(*) AS events_in_session
FROM session_boundaries
GROUP BY user_id, session_id;`},{name:"Python at Scale — Memory & Performance",content:`Loading 100GB into memory crashes. Use chunked processing: read_csv(chunksize=100000) yields DataFrames of 100k rows. Process each chunk, aggregate results. For a 100GB CSV, this requires ~1GB peak memory instead of 100GB.

Vectorization beats loops 100x. Instead of for-loop with append(), use numpy broadcasting or pandas groupby. NumPy operations are compiled C code; loops are Python bytecode.

Generators enable lazy evaluation. yield instead of return defers computation until iteration. Memory usage stays O(chunk_size) instead of O(total_size).

Profiling identifies bottlenecks. cProfile shows CPU time per function. memory_profiler shows line-by-line memory usage. line_profiler shows CPU time per line.

For distributed pipelines (Spark), the same principles apply: push aggregations down, avoid collecting to driver, use partitioned reads.`,code:`# Chunked ETL: process 100GB CSV in 1GB chunks, compute daily unique searchers
import pandas as pd
from collections import defaultdict
import hashlib

def count_daily_unique_searchers_chunked(csv_path, chunksize=100_000):
    """
    Count daily unique searchers without loading full file.
    Returns dict: {date: unique_searcher_count}
    """
    daily_unique = defaultdict(set)

    for chunk in pd.read_csv(csv_path, chunksize=chunksize):
        # Parse date, extract user_id
        chunk['search_date'] = pd.to_datetime(chunk['search_timestamp']).dt.date

        # Add users to daily set (HyperLogLog for 1B+ users)
        for date, group in chunk.groupby('search_date'):
            daily_unique[date].update(group['user_id'].unique())

    # Return counts
    return {date: len(users) for date, users in daily_unique.items()}

# Usage
daily_counts = count_daily_unique_searchers_chunked('/data/events.csv')
print(daily_counts)

# Alternative: HyperLogLog for probabilistic cardinality (for 1B+ users)
# from hyperloglog import HyperLogLog
#
# daily_hll = defaultdict(lambda: HyperLogLog(0.01))  # 1% error
# for chunk in pd.read_csv(..., chunksize=100_000):
#     for date, group in chunk.groupby('search_date'):
#         for user_id in group['user_id']:
#             daily_hll[date].add(user_id)

# Vectorization example: compute booking rate per hotel (NOT loop)
# BAD (slow):
# rates = []
# for hotel_id in df['hotel_id'].unique():
#     subset = df[df['hotel_id'] == hotel_id]
#     rate = len(subset[subset['status'] == 'completed']) / len(subset)
#     rates.append(rate)

# GOOD (fast):
rates = (df.groupby('hotel_id')
    .apply(lambda x: (x['status'] == 'completed').sum() / len(x))
    .rename('booking_rate'))

# Profiling: find slow function
import cProfile
cProfile.run('count_daily_unique_searchers_chunked(...)')

# Line-by-line memory profiling:
# from memory_profiler import profile
# @profile
# def my_function():
#     ...
# Then: python -m memory_profiler my_script.py`}],practice_questions:[{q:"Write SQL to compute the 7-day rolling average booking rate (bookings / searches) per hotel_id. A booking rate changes daily—you need the rolling average to smooth noise. Use window functions.",a:`WITH daily_metrics AS (
  SELECT
    hotel_id,
    DATE(search_timestamp) AS search_date,
    COUNT(CASE WHEN booking_id IS NOT NULL THEN 1 END)::FLOAT / COUNT(*) AS daily_booking_rate
  FROM search_to_booking
  WHERE search_timestamp >= NOW() - INTERVAL '90 days'
  GROUP BY hotel_id, DATE(search_timestamp)
)
SELECT
  hotel_id,
  search_date,
  daily_booking_rate,
  AVG(daily_booking_rate) OVER (
    PARTITION BY hotel_id
    ORDER BY search_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS rolling_7day_rate
FROM daily_metrics
ORDER BY hotel_id, search_date;

Key: Window frame ROWS BETWEEN 6 PRECEDING AND CURRENT ROW = 7 days. Partition by hotel_id to isolate each hotel's trend. Order by date to ensure chronological ordering.`,company:"Expedia",difficulty:"Medium"},{q:"Your Spark job that computes daily booking stats took 10 hours instead of 1 hour. Walk through your debugging process. What are the most likely culprits? How do you diagnose each?",a:`1. Check Shuffle Size in Spark UI:
   - Go to Stages tab. Large shuffle bytes (>1GB) = heavy groupBy/join
   - groupBy() on skewed keys (e.g., null-heavy column) causes imbalance
   - Diagnosis: Add .repartition(1000, 'hotel_id') before groupBy to break skew

2. Check Task Count:
   - If 1 task takes 9 hours, 199 tasks take 1 min = data skew
   - One partition has 90% of data, others 0.1%
   - Diagnosis: df.select('hotel_id').distinct().count() — does one hotel dominate?

3. Broadcast Join Missing:
   - If joining 10M fact rows to 10K dimension rows, a sort-merge join is expensive
   - Use broadcast(small_df) for dimension tables <200MB
   - Diagnosis: Check explain plan — look for BroadcastHashJoin vs SortMergeJoin

4. Input Partitions Too Few:
   - Reading 100GB with 4 partitions = huge tasks
   - Set repartition(200) or tune spark.sql.files.maxPartitionBytes
   - Diagnosis: Check input stage task count — should be 100s, not single digits

5. Caching Issue:
   - DataFrame cached in memory persists across queries (memory pressure)
   - Use df.unpersist() after use
   - Diagnosis: Check Storage tab in Spark UI

Action: Print job explain plan, check Stages UI, look for single slow task, repartition if skew, broadcast small tables.`,company:"Meta",difficulty:"Hard"},{q:"Your daily pipeline produces 10M rows on weekdays but only 2M rows on Saturdays/Sundays. What could cause this? Walk through your investigation.",a:`1. Upstream Job Failure (Most Common):
   - Is the upstream job running on weekends? Check cron schedule
   - Some jobs disable on weekends (e.g., data collection paused for maintenance)
   - Check: upstream_job_last_run timestamp — is it stale?

2. Late-Arriving Data:
   - Events tagged with Saturday's date arrive on Monday
   - Your partition by date misses them (you load Sat data on Sat, but it lands on Mon)
   - Check: Is row count stable if you look back 2-3 days?

3. Weekend Data Collection Difference:
   - Lower user traffic on weekends (fewer searches, fewer bookings)
   - This is EXPECTED and NOT a bug
   - Check: Per-user/per-hotel averages — do they stay constant?

4. Schema/Null Explosion on Weekends:
   - A join key becomes null on weekends (e.g., missing dimension lookup)
   - NULL joins explode rows
   - Check: Count(DISTINCT user_id), cardinality — do they match?

5. Partition Boundary Bug:
   - If you use UNIX timestamp instead of DATE, edge cases exist at UTC midnight
   - Saturday 23:59 UTC → next day in other timezones
   - Check: Are rows distributed across dates correctly?

Action: (1) Check upstream_job runs on weekends. (2) Compare yesterday's row counts to 7-day avg. (3) Query for expected data (not anomaly). (4) Check join keys for nulls/cardinality mismatches. (5) Verify partition dates with sample rows.`,company:"Airbnb",difficulty:"Hard"},{q:"Write SQL to find the top 3 hotels by total booking revenue (revenue = nightly_price * num_nights) in each market. Use window functions and CTEs.",a:`WITH market_revenue AS (
  SELECT
    market,
    hotel_id,
    SUM(nightly_price * num_nights) AS total_revenue,
    ROW_NUMBER() OVER (PARTITION BY market ORDER BY SUM(nightly_price * num_nights) DESC) AS rank_in_market
  FROM bookings
  WHERE status = 'completed'
    AND booking_date >= NOW() - INTERVAL '90 days'
  GROUP BY market, hotel_id
)
SELECT
  market,
  hotel_id,
  total_revenue,
  rank_in_market
FROM market_revenue
WHERE rank_in_market <= 3
ORDER BY market, rank_in_market;

Key: ROW_NUMBER() OVER (PARTITION BY market ...) assigns 1,2,3... within each market. Filter rank_in_market <= 3 to get top 3 per market. SUM(nightly_price * num_nights) computes total revenue per hotel-market.`,company:"Expedia",difficulty:"Medium"},{q:"You have a 100GB CSV of hotel search events. Write Python to compute the count of daily unique searchers without loading the entire file into memory. Explain your approach.",a:`from collections import defaultdict
import pandas as pd

def count_daily_unique_searchers_chunked(csv_path, chunksize=100_000):
    """
    Count daily unique searchers from 100GB CSV using chunked processing.
    Memory usage: O(chunksize + daily_unique_set_size) ≈ 2-3GB for typical data.
    """
    daily_unique = defaultdict(set)

    # Iterate through chunks (100k rows = ~10MB per chunk)
    for chunk in pd.read_csv(csv_path, chunksize=chunksize):
        # Parse timestamp and extract date
        chunk['search_date'] = pd.to_datetime(chunk['search_timestamp']).dt.date

        # Add user_id to daily set (sets automatically deduplicate)
        for search_date, group in chunk.groupby('search_date'):
            daily_unique[search_date].update(group['user_id'].unique())

    # Convert sets to counts
    result = {date: len(users) for date, users in daily_unique.items()}
    return result

# Usage
daily_counts = count_daily_unique_searchers_chunked('/data/100gb_events.csv')
# Output: {datetime.date(2024, 1, 1): 5_234_000, datetime.date(2024, 1, 2): 5_187_000, ...}

# For 1B+ unique users, use HyperLogLog (probabilistic cardinality):
from hyperloglog import HyperLogLog

def count_daily_unique_searchers_hll(csv_path, chunksize=100_000):
    daily_hll = defaultdict(lambda: HyperLogLog(0.01))  # 1% error tolerance

    for chunk in pd.read_csv(csv_path, chunksize=chunksize):
        chunk['search_date'] = pd.to_datetime(chunk['search_timestamp']).dt.date

        for search_date, group in chunk.groupby('search_date'):
            for user_id in group['user_id']:
                daily_hll[search_date].add(user_id)

    return {date: len(hll) for date, hll in daily_hll.items()}

Approach: (1) Read CSV in 100k-row chunks. (2) For each chunk, extract date and user_id. (3) Use set to deduplicate users per date (sets are in-memory, not disk). (4) Accumulate across all chunks. Memory scales with unique_users_per_day, not total_rows.`,company:"Meta",difficulty:"Hard"}],key_formulas:["Rolling Average: AVG(value) OVER (PARTITION BY group ORDER BY date ROWS BETWEEN N PRECEDING AND CURRENT ROW)","Window Rank: ROW_NUMBER() OVER (PARTITION BY group ORDER BY metric DESC) — returns 1,2,3...","Percentile: PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY value) — exact median","Conversion Rate: COUNT(success_events) / COUNT(all_events)","Data Quality: (Nulls / Total) as null_rate, COUNT(DISTINCT key) as cardinality","Chunked Processing Memory: O(chunk_size + accumulated_unique_set), not O(file_size)","PSI (Population Stability Index): SUM((today% - baseline%) * LN(today% / baseline%)) — detect distribution shift"],resources:["Mode Analytics SQL Tutorial (window functions, CTEs)","Spark: The Definitive Guide (free chapters on partitioning, shuffles, broadcast joins)","dbt Documentation — data quality tests (Great Expectations integration)","Expedia Tech Blog — hotel search funnel & recommender systems","SQLZoo Advanced Exercises (median, cohort analysis)","PySpark API Docs — Window.rowsBetween(), partitionBy()","Pandas read_csv(chunksize=...) Documentation"]},Em={day:30,week:5,title:"BQ Stories, Case Study Framework & Final Expedia Prep",summary:"Your final prep day covers the 5 must-have behavioral stories in STAR format, a structured case study decision framework tailored to Expedia, deep-dive prep for your Double ML project, Expedia-specific domain knowledge, questions to ask, and a day-of interview checklist. You're ready to walk in with clarity on your unique angle (experimentation + causal ML at the ads analytics intersection).",topics:[{name:"The 5 Core BQ Stories (STAR Format)",content:`Each story showcases a different competency the Expedia Director will value: influence, judgment when data isn't the answer, clarity under ambiguity, pushing back on stakeholders, and strategic impact. Tailor each to 2-3 minutes in the interview.

**Story 1: Influence Without Authority** — "Convinced engineering to add instrumentation for experiment"
Opener: "At Amazon, I needed instrumentation built for an ad exposure experiment, but the infra team had competing priorities. Here's how I got it done..."
• Situation: We wanted to test ad placement changes on the purchase funnel. The event pipeline didn't have placement-level granularity.
• Task: Build buy-in for a non-trivial engineering effort without control over the team's roadmap.
• Action: I quantified the business impact (potential 3-5% lift in iROAS on $500M annual ad spend). I offered to work embedded with the engineer, clarified scope, and showed how it unblocked multiple experiments downstream. I presented it as a force-multiplier for their team, not a burden.
• Result: Engineering prioritized it. We shipped instrumentation in 3 weeks. Ran 8+ experiments that year; avg +2.1% iROAS.
→ For Expedia: "This translates directly to how I'd work with your ranking & ML infra teams. I'd have the same approach: understand constraints, quantify upside, be a partner."

**Story 2: Data-Driven Decision That Was Wrong** — "Model was accurate but business impact was backwards"
Opener: "Early in my career, I built a model that had great accuracy metrics, but the business impact was completely wrong. It taught me the difference between statistical validity and causal validity..."
• Situation: Built a model predicting which customers would click ads. High AUC (84%), deployed with confidence.
• Task: Monitor impact post-launch. Click-through rate actually decreased.
• Action: Dug into what happened. Realized the model was accurate at predicting *who clicked*, but we used it to rank ads. High-prediction users were already ad-aware; showing them more ads decreased organic engagement. We had correlation but not causation.
• Result: Retrained with causal forest to estimate *incremental* impact of ads on purchase (not click). Segmented low-responders and reduced ad exposure. iROAS improved 15%.
→ For Expedia: "This is why I'm excited about your experimentation infrastructure. I prioritize causal inference (Double ML, CATE estimation) to ensure we're optimizing the right metric and understanding direction of impact."

**Story 3: Ambiguous Problem Definition** — "Stakeholder wanted 'impact of ads' — scoped to incrementality vs attribution"
Opener: "I once got asked by a PM to 'measure the impact of ads on bookings.' That's ambiguous, and ambiguity kills projects. Here's how I clarified it..."
• Situation: PM wanted to measure ROI of our sponsored ad program. Asked for "impact of ads on bookings."
• Task: Unpack what "impact" means. Is it attribution (last-click)? Incrementality? Halo effect?
• Action: I set up 3 conversations: with PM (business goal: allocate budget fairly across channels), with finance (need to justify spend), with product (need to optimize ranking). Different questions. I proposed: incrementality (RCTs) for budget allocation, attribution model for reporting, causal forest for segmentation. Scope shrank from "measure impact" to "estimate incremental lift in iROAS from sponsored tier."
• Result: Clear goal, aligned stakeholders, built the right models in the right order.
→ For Expedia: "At a company with your search/ranking complexity, ambiguity in metrics or causality kills speed. I always start with: what decision are we making, and what evidence would change it?"

**Story 4: Pushed Back on Stakeholder** — "PM wanted to ship without statistical significance; I explained peeking & opportunity cost"
Opener: "I had to say 'no' to shipping a feature, and it was uncomfortable. But my job is to protect against costly mistakes..."
• Situation: A/B test running for 1 week. PM saw +4% booking lift (p=0.12, not significant) and wanted to ship.
• Task: Convince PM to wait 2 more weeks without looking preachy.
• Action: I showed two costs of shipping early: (1) we'd likely see regression post-launch (peeking bias inflates effect size), (2) if true lift is 1% not 4%, we'd make a suboptimal decision on a $50M+ revenue lever. Flipped it: "Waiting 2 weeks costs us 0.5% opportunity. Shipping costs us 2-3% if we're wrong. What's the expected value?" Offered to estimate power ahead of time for future tests.
• Result: Team waited. Final lift was +1.8%, still launched, and we built rigor into testing culture.
→ For Expedia: "I'm here to partner with product, but also to protect against the statistical mistakes that compound over time. That's where senior DS adds the most value."

**Story 5: Used Data to Change Strategy** — "Double ML revealed true CATE heterogeneity; reallocated ad budget by segment"
Opener: "At Amazon, I used Double Machine Learning to discover that one ad strategy was hurting half our users. This led to a complete strategic shift in how we target ads..."
• Situation: Blanket ad serving strategy across all customers. Team believed all segments benefited equally from ads. Budget was roughly uniform.
• Task: Estimate conditional average treatment effects (CATE) — ad impact on purchase by customer segment.
• Action: Built Double ML model (Ridge L2 + LightGBM nuisance models, cross-fitted) to estimate heterogeneous causal effects of ad exposure on purchase. Partialled out confounders (browsing history, seasonality, device). Found stark segmentation: high-frequency browsers had iROAS of -5% (crowding out organic); new browsers had +35% iROAS.
• Result: Rebudgeted towards new-customer segments, killed ads for repeat browsers with high organic engagement. Company-wide iROAS improved 18%. Informed roadmap of targeting ML for the next year.
→ For Expedia: "This is my bread-and-butter: causal inference + segmentation. For hotels, I'd apply the same lens: does price positioning affect the *incrementally* interested user differently based on device, geography, or booking window?"`,code:`// STAR Format Template
const STARTemplate = {
  situation: "What was the context? What was the problem or challenge?",
  task: "What was your specific responsibility or goal?",
  action: "What did you actually do? (Be specific: decisions, tradeoffs, collaboration)",
  result: "What was the outcome? Numbers matter. (AUC +5%, revenue impact, team learned X)"
};

// 2-min rule: Situation (20s) → Task (20s) → Action (60s) → Result (20s)
// Always end with: "For Expedia, this prepares me to..." or "This translates to your need for..."
`},{name:"Case Study Framework — Launch or Not Decision",content:`The Expedia Director will ask a case study like: "We want to launch a new ranking signal: review recency. How do you decide if it's worth shipping?" Your answer must be structured, data-driven, and account for Expedia's complexity (mobile, markets, segments, guardrails).

Here's the step-by-step framework:

**Step 1: Clarify the Metric (North Star)**
Start with: "Let me make sure I understand the goal. Are we optimizing for immediate revenue lift? User retention? Long-term hotel supply health?"
At Expedia: north star is typically Revenue per Search (RPS) or Booking Rate (bookings / search sessions).
Ask: Is this global, or per market? Do we care about commission revenue (10-20% of GMV) or GMV?
Output: "Our north star is RPS — we'll measure bookings × average commission rate."

**Step 2: Identify Guardrail Metrics (Don't Break What's Working)**
List metrics that *must not* regress:
• Organic bookings (don't cannibalize unpaid results)
• Page load time (slower ranking = users leave)
• pCTR calibration (if position bias model degrades, CTR estimates are garbage)
• Hotel supply health (don't rank out partners unfairly)
• Mobile performance (ranking is 10x slower on mobile, need separate treatment)

Ask: "Are there constraints? E.g., can't hurt paid advertiser ROI?"

**Step 3: Can We A/B Test? (SUTVA, Irreversibility, Spillover)**
Randomize at user session level. Check:
• SUTVA: Does my choice affect another user's treatment? (Yes for ranking — network effects, but contained per user session. OK to randomize.)
• Irreversible changes? (New ranking signals are reversible if you keep the old version in control.)
• Population: Is N large enough? (Expedia: ~30M users/month. For 1% MDE, need ~2M users per group per week. Feasible.)

Answer: "Yes, we can A/B test via 50/50 split. Control = current ranking, Treatment = ranking + review recency signal."

Fallback if RCT not possible (irreversible, network effects, or small population):
- Difference-in-Differences (e.g., rollout by market, use other markets as control)
- Pre-post with strong counterfactual modeling
- Synthetic controls for new markets

**Step 4: Sample Size & Duration**
Use Evan Miller's online AB test calculator or manual formula:
MDE = 1% (is 1% RPS lift business-relevant? Probably yes for a ranking signal.)
α = 0.05 (5% false positive)
β = 0.20 (80% power)

Rough formula: N_per_group = (Z_α + Z_β)² × (σ²_control + σ²_treatment) / (delta)²

For Expedia booking funnel (RPS ~$15-20/search, daily variance ~30%):
→ Need ~1.5M users per group per week. → Run for 2 weeks.

Ask: "Should we stratify by mobile/desktop since ranking latency differs?" (Yes!)

**Step 5: Segmentation (Not Everyone Treats the Same)**
Don't assume homogeneous effects. Plan subgroups:
• Mobile vs Desktop (ranking algo performance differs)
• New vs Returning users (new users trust review score more)
• Last-minute vs Advance (last-minute bookers are review-sensitive)
• Market (domestic vs international; US market has different trust patterns)
• Traveler type (business vs leisure; solo vs group)

Hypothesis: "Review recency lift will be highest for new/returning leisure users booking 7+ days in advance. Last-minute bookers care more about availability."

**Step 6: Decision Criteria (Statistical + Business + Guardrails)**
You launch IF:
✓ p < 0.05 (statistically significant)
✓ Business impact > X (e.g., RPS +1% = $2M annual impact)
✓ No guardrail violations (organic bookings stable, page load OK, advertiser commission impact neutral)
✓ Effect is directional (not just noise)

You iterate IF:
~ Lift is +0.5% but underpowered (need bigger sample)
~ Guardrail regressed slightly but margin is small (tune the weight on review recency)

You kill IF:
✗ p > 0.05 (no lift, no signal)
✗ Negative guardrail impact (page load +500ms, not worth it)
✗ Lift is in wrong direction

**Step 7: Post-Launch Monitoring**
If you launch, set up:
• Alerts: RPS dips >0.5%, page load spikes >10%, hotel supply concentration increases
• Holdback: Keep 5% on old model for continuous learning
• Segment analysis: Is performance uniform or are there pockets of bad behavior?
• Weekly pulse: First 4 weeks are critical (technical issues, user behavior change)

Real answer: "We'd monitor for 4 weeks, then review with product + ML ops. If guardrails are healthy, scale to 100%. If issues emerge, debug or roll back."`,code:`// Case Study Answer Template — Fill This Out
const CaseStudyTemplate = {
  metric: {
    northStar: "Revenue per Search (RPS) — bookings × avg commission",
    guardrails: ["Organic booking rate", "Page load time", "pCTR calibration", "Hotel supply diversity"]
  },

  experimental_design: {
    hypothesis: "Review recency will increase RPS by 1%+, especially for new users booking 7+ days in advance.",
    randomization_unit: "User session (50/50 split)",
    duration: "2 weeks",
    sample_size_per_group: "1.5M users (calculated from MDE 1%, alpha 0.05, beta 0.20)",
    stratification: ["Mobile vs Desktop", "New vs Returning", "Booking window (last-minute <3d vs advance)"]
  },

  decision_criteria: {
    launch_if: [
      "p-value < 0.05",
      "RPS lift > 1% (statistically significant)",
      "Guardrails stable: organic bookings within ±0.2%, page load < +50ms",
      "Effect is consistent across segments (no subgroup inversions)"
    ],
    iterate_if: [
      "Lift is +0.5% but underpowered",
      "Minor guardrail regression (fixable via tuning)"
    ],
    kill_if: [
      "p-value > 0.05 (no signal)",
      "RPS negative or zero",
      "Page load +500ms+ or organic rate -1%+"
    ]
  },

  post_launch: {
    monitoring: "4-week holdback (5% on old model), weekly alerts on RPS and guardrails",
    success_criteria: "RPS sustained +1%, guardrails stable, no technical debt",
    next_steps: "Scale to 100% or debug and iterate"
  }
};
`},{name:"Project Deep Dive Prep — Double ML for Heterogeneous Causal Effects",content:`Your Double ML project is your superpower. The Expedia Director will ask: "Tell me about a complex ML project you led. What was the hardest part?" Have a bulletproof 5-minute narrative ready.

**The Bridge: Amazon Double ML → Expedia iROAS by Segment**
"At Amazon, I used Double Machine Learning to estimate conditional average treatment effects (CATE) of ad exposure on purchase probability, by customer segment. At Expedia, this translates directly to measuring incremental revenue impact of ranking signals (e.g., sponsored placement) by user segment and market."

**The Technical Depth (For Hard Questions)**
Double ML solves a core problem: estimating causal effects in the presence of high-dimensional confounders.

Problem: We want to know: does ad exposure causally increase purchase (iROAS)?
Naive approach: Regress purchase ~ ad_exposure. But ad_exposure is endogenous (high-intent users see more ads).
Solution: Double ML

Process:
1. **Nuisance Model 1** (predict treatment given confounders): Ridge regression or LightGBM on [user history, seasonality, device, ...] → predict P(exposed to ad). Call it π̂(X).
2. **Nuisance Model 2** (predict outcome given confounders): Ridge regression or LightGBM on same features → predict P(purchase). Call it μ̂(X).
3. **Partialling out confounders**:
   - Treatment residual = ad_exposure - π̂(X)  [unexplained variance in exposure]
   - Outcome residual = purchase - μ̂(X)  [unexplained variance in purchase]
4. **Cross-fitting**: Avoid overfitting by using K-fold splits (e.g., 5-fold). Fit nuisance models on fold K, estimate causal effect on held-out fold K.
5. **Final estimate**: Regress (outcome_residual) ~ (treatment_residual). Coefficient = unbiased causal effect.

For CATE (heterogeneous effects):
- Split sample into segments (new vs returning, device, etc.)
- Repeat Double ML within each segment
- Result: iROAS of ads varies dramatically by segment (new users: +35%, repeat browsers: -5%)

**The Business Impact Layer**
At Amazon:
- Discovered new customers benefit from ads (high incremental value)
- High-frequency browsers are ad-saturated (negative incremental value due to crowding out)
- Rebudgeted ad spend from repeat browsers to new user acquisition
- Result: Company iROAS improved 18%, informed ad targeting roadmap for 12 months

Segmentation detail:
- New users (0-5 prior bookings): iROAS +35% (ads drive discovery)
- Occasional users (6-20 prior bookings): iROAS +8% (ads remind, but low baseline spend)
- Loyal users (20+ prior bookings): iROAS -5% (high organic intent, ads cannibalize; better to save ad budget)

Budget reallocation:
- Old model: uniform ad budget across segments
- New model: allocate 60% to new users, 35% to occasional, 5% to loyal (protective list to maintain rel'ships)
- Outcome: +$20M incremental annual revenue, lower CAC for new users

**What Would You Do Differently? (Honest Growth Points)**
1. **Temporal cross-fitting**: My original model cross-fitted spatially (by user ID) but not temporally. Should have used time-based splits to avoid lookahead bias (especially if model was used for ongoing decisions).
2. **CATE uncertainty quantification**: I estimated point effects but not confidence intervals. Should have used R-learner or DRLearner for better uncertainty estimates (crucial for guardrail decisions).
3. **Causal forest vs Double ML**: I stuck with Double ML + linear CATE. Could have used causal forests for non-linear effects, but trade-off was interpretability (stakeholders needed to understand the causal mechanisms).
4. **Validation**: I checked balance in nuisance model predictions, but didn't do sensitivity analysis on unmeasured confounding. Should have used Rotnitzky bounds or placebo tests.

**Anticipated Hard Questions**
Q: "Why Double ML over propensity score matching?"
A: "Double ML is more robust in high-dimensional settings. PSM requires overlap in propensity scores; with many confounders, overlap breaks down in tail regions. Double ML uses both control and outcome models, so even if one is misspecified, we can still get consistent estimates (semi-parametric robustness). For Expedia with 100s of features, that robustness matters."

Q: "How did you validate parallel trends?"
A: "I didn't use DiD because we had RCT data. But if I were validating against a quasi-experimental design, I'd check: are treatment and control groups on parallel outcome trends pre-treatment? I'd use the pre-period to estimate a placebo effect; if it's non-zero, parallel trends fails. For Double ML, I validated via: (1) sensitivity analysis to unmeasured confounding, (2) placebo tests on lagged outcomes, (3) back-solving: can I recover the known treatment effect on synthetic data?"

Q: "How did you handle position bias in the ranking?"
A: "Good catch. In the ad setting, position affects visibility, which affects purchase probability independent of quality. I controlled for this by: (1) including position as a confounder in the nuisance models, (2) using inverse propensity weighting for position in robustness checks. The key insight: position is a confounder, not a mediator. We want to estimate the causal effect of ad *quality*, holding position constant."

Q: "What if your nuisance models were misspecified?"
A: "Double ML has a built-in safeguard: the causal parameter is identified even if one nuisance model is slightly misspecified, as long as the product of convergence rates is fast enough. In practice, I validated by (1) using two different nuisance model specs (Ridge + LightGBM) and checking agreement, (2) running leave-one-variable-out sensitivity analysis, (3) cross-model validation. If estimates diverged, I'd investigate which feature was causing bias."`,code:`// Double ML Project Narrative (5-min ready-to-tell version)
const ProjectNarrative = {
  intro: "At Amazon, I led a Double Machine Learning project to measure the causal impact of ad exposure on purchase, by customer segment. Here's the story:",

  context: {
    problem: "Ads are everywhere on Amazon's product pages. Team believed all users benefit equally. But we were spending $500M+ on ads without segment-level ROI clarity.",
    stakes: "If we misallocate budget, we leave $10-50M on the table annually."
  },

  approach: {
    method: "Double Machine Learning (DML) for heterogeneous treatment effects",
    why_dml: "Causal inference with high-dimensional confounders. Propensity score matching breaks down with 100+ features; Double ML is semiparametrically robust.",

    step1_nuisance_models: {
      treatment_model: "Predict P(ad exposure) ~ user history, seasonality, device, category affinity using Ridge L2 + LightGBM cross-fitted",
      outcome_model: "Predict P(purchase) ~ same features using Ridge L2 + LightGBM cross-fitted"
    },

    step2_partialling: "Compute residuals: treatment_residual = ad_exposure - predicted_exposure, outcome_residual = purchase - predicted_purchase",

    step3_estimation: "Regress outcome_residual ~ treatment_residual → estimate = unbiased causal effect",

    step4_segmentation: "Repeat DML within each segment (new vs returning, device, category) → estimate heterogeneous treatment effects (CATE)"
  },

  findings: {
    headline: "Ad ROI is wildly heterogeneous by segment",
    details: [
      "New users (0-5 prior purchases): iROAS +35% — ads drive discovery, high incremental value",
      "Occasional users (6-20): iROAS +8% — ads remind, but low spend baseline",
      "Loyal users (20+): iROAS -5% — high organic intent, ads cannibalize; crowding-out effect"
    ],
    implication: "Blanket ad strategy is suboptimal. Rebudget towards high-ROI segments."
  },

  action: "Proposed budget reallocation: 60% to new users, 35% to occasional, 5% to loyal (protective list)",

  outcome: {
    financial: "+$20M incremental annual revenue from better targeting",
    strategic: "Informed ad targeting ML roadmap for next 12 months. Shifted team culture toward segment-level thinking.",
    learning: "Heterogeneity is real. One global metric masks critical strategic opportunities."
  },

  how_it_applies_to_expedia: {
    parallel: "At Expedia, ranking is the core lever. Sponsored placement, review weighting, price positioning—each affects different segments differently.",
    strategy: "I'd apply the same Double ML + segmentation approach to measure incremental revenue impact of ranking signals by user segment and market. Example: does review recency help new travelers more than repeat bookers? By how much? Reallocate ranking weights accordingly.",
    upside: "Unlock $5-50M in incremental revenue by optimizing ranking for segment-specific preferences."
  },

  anticipated_pushback: {
    "Why Double ML over PSM?": "Double ML is robust in high dimensions. PSM fails when overlap breaks down; Double ML uses both models (semiparametric robustness).",
    "How did you validate?": "Placebo tests on pre-period, sensitivity analysis to unmeasured confounding, back-testing on synthetic data with known ground truth.",
    "Assumption most likely to fail?": "Unobserved confounding (e.g., user intent unmeasured in our data). Mitigated via placebo + sensitivity bounds. At Expedia, better instrumentation of user intent would help."
  }
};
`},{name:"Expedia-Specific Domain Knowledge",content:`The Expedia Director will probe: "How familiar are you with our business?" Knowing these numbers and concepts will set you apart.

**Booking Funnel Metrics**
Expedia's core funnel (hotels):
1. Impression (hotel listed in search results)
2. Click (user clicks hotel card)
3. Detail view (user reads reviews, photos, amenities)
4. Add to itinerary (user adds to list or booking flow)
5. Booking (user completes payment)

Key ratios:
- CTR (click-through rate) = clicks / impressions ≈ 2-5%. Good hotels on page 1 see ~3-4%. Bad hotels ~1%.
- Conversion (detail-to-booking) = bookings / clicks ≈ 1-3%. Varies wildly by seasonality and property quality.
- Overall conv (booking / impression) = 0.05-0.15%.

Business math:
- Average booking value: ~$150-300 per room night (Expedia global average)
- Commission rate: 10-20% of GMV (negotiated per partner, market-dependent)
- Revenue per search (RPS): ~$15-25 per search session (bookings × commission rate)
- At 30M searches/month, 1% RPS lift = ~$4.5-7.5M annual impact

**Hotel Ranking Signals** (The Core Algorithm)
Hotels are ranked by a learned-to-rank model. Signals include:
- Price competitiveness (absolute price + relative to similar hotels)
- Review score (weighted average star rating; newer reviews weigh more)
- Review recency (fresher reviews indicate active property)
- Sponsored bids (partner has paid for higher placement; typical bid: 2-15% of commission)
- Historical booking rate (CTR of this hotel in prior X days)
- Availability (exact inventory at requested dates)
- Distance to point of interest (proximity to attractions, city center)
- Mobile-specific signals (is this hotel optimized for mobile UX?)

Ranking model:
- Typically LambdaMART or similar learning-to-rank (pairwise comparisons of hotels)
- Separate models for different contexts: mobile vs desktop, new vs returning users, different markets
- Retrained daily or weekly to capture freshness

Position bias: Hotels at position 1-3 get exponentially more clicks (95% of clicks are top 5). Ranking model must account for this via pCTR (position-bias-corrected CTR).

**Commission Structure & Advertiser Incentives**
Advertiser = hotel partner (e.g., Marriott, independent inn)
- Expedia takes 10-20% commission per booking (e.g., $200 booking = $20-40 to Expedia)
- Sponsored placement: Hotel can pay extra ($2-5 per click) to boost ranking
- Conflict: High advertiser bids inflate prices for users (bad for user), but boost Expedia revenue (good for Expedia)
- Balance: Expedia can't just maximize revenue; must keep organic ranking high-quality or users leave

**Key Segments (Affects Everything)**
Leisure vs Business:
- Leisure: Books in advance (7-30 days), price-sensitive, values reviews, summer/holiday peaks
- Business: Last-minute (1-3 days), price-insensitive (company pays), values location + breakfast + WiFi

Mobile vs Desktop:
- Mobile: 60% of searches. Slower ranking inference (~500ms latency limit vs 2s on desktop). Different UX (smaller click targets).
- Desktop: 40% of searches. Better for complex filtering, reviews. Higher conversion rates.

New vs Returning:
- New: Trust reviews more, might not know Expedia. Higher CAC.
- Returning: Trust Expedia, browse faster, book faster.

Last-minute vs Advance:
- Last-minute (<3 days): Desperate (need a room), less price-sensitive, fewer options
- Advance (7+ days): Can plan, very price-sensitive, abundant inventory

Market:
- US: Mature market, many competitors, price-driven
- Europe: High-value customers, strong OTA penetration, more reviews trusted
- Asia: Growing, mobile-first, different payment methods, local review platforms matter more

**Seasonality & External Factors**
- Summer (June-Aug): Peak travel season, high supply, high demand, competitive pricing
- Holidays (Dec 25-Jan 1): Major spike, limited supply, high prices
- Weekends: Leisure travel spikes Fri-Sun
- COVID effects: (2020-2021) business travel collapsed, leisure shifted; now stabilized
- Economic cycles: Recessions kill high-end travel; budget travel resilient
- Currency: International booking affected by USD strength

**Metrics You'll Hear**
- GBV (Gross Booking Value): Total $ value of bookings (before commission)
- Commission Revenue: GBV × commission rate
- ADR (Average Daily Rate): $ per room night
- Occupancy: % of hotel rooms booked (from hotel's perspective)
- NPS (Net Promoter Score): % detractors from promoters (usually 40-60 for OTAs)
- Repeat rate: % of bookings from repeat customers
- CAC (Customer Acquisition Cost): Ad spend / new customers
- LTV (Lifetime Value): Total $ a customer generates (typically 5-10x CAC for mature OTAs)

**Competitive Landscape**
Main competitors: Booking.com, Hotels.com, Airbnb (for alternative accommodations)
Booking.com leads on European market, Expedia strong in US. Airbnb disrupting budget segment.
Differentiation: Expedia bundles (flights + hotels), mobile UX, rewards program (loyalty). Tech moat: ML ranking.

**Experimentation Culture & Infra**
Expedia invests heavily in A/B testing (as a major tech company should).
- Typical test duration: 2-4 weeks (need sufficient power for small effects)
- Sample size: 1M+ users per variant for most tests (GMV is large, even 0.1% lift is significant)
- Guardrails: Always monitor CTR, conversion, page load, advertiser complaint volume
- Tools: In-house experimentation platform (similar to Airbnb's Eppo, Netflix's Conductor)
- Cadence: Hundreds of tests per year across all teams`,code:`// Expedia Business Model Cheat Sheet
const ExpediaBusinessModel = {
  revenue_drivers: {
    commission_per_booking: "10-20% of GMV (negotiated by market & partner tier)",
    sponsored_placement_bid: "$2-5 per click, ~2-15% of commission",
    ancillary_revenue: "Travel insurance, car rentals, flight bundles (10-15% of total revenue)"
  },

  key_metrics: {
    revenue_per_search: "$15-25 (bookings × commission rate)",
    booking_value_usd: "$150-300 per room night (avg)",
    click_through_rate: "2-5% (impressions → clicks)",
    conversion_rate: "1-3% (clicks → bookings)",
    repeat_user_rate: "40-60% of bookings",
    net_promoter_score: "40-60"
  },

  funnel: [
    "Impression (hotel listed in search results)",
    "Click (CTR 2-5%)",
    "Detail view (read reviews, photos)",
    "Add to itinerary",
    "Booking (conv 1-3% of clicks)"
  ],

  ranking_signals: [
    "Price competitiveness (absolute + relative)",
    "Review score (avg star rating)",
    "Review recency (freshness)",
    "Sponsored bid (advertiser paid placement)",
    "Historical booking rate (CTR)",
    "Availability (exact inventory)",
    "Distance to POI",
    "Mobile optimization signal"
  ],

  key_segments: {
    leisure_vs_business: {
      leisure: "Books 7-30d in advance, price-sensitive, values reviews, seasonal peaks",
      business: "Last-minute 1-3d, price-insensitive, values location+wifi+breakfast"
    },
    mobile_vs_desktop: {
      mobile: "60% of searches, 500ms latency budget, different UX, lower conversion",
      desktop: "40% of searches, 2s latency, higher conversion, better for reviews"
    },
    new_vs_returning: {
      new: "Trusts reviews, higher CAC, longer booking journey",
      returning: "Trusts Expedia, faster booking, higher LTV"
    },
    booking_window: {
      last_minute_3d: "Desperate, less price-sensitive, limited options",
      advance_7plus: "Plan-driven, very price-sensitive, abundant inventory"
    }
  },

  seasonality: {
    summer: "June-Aug peak, high supply & demand, competitive",
    holidays: "Dec-Jan spike, limited supply, high prices",
    weekends: "Fri-Sun leisure travel peaks",
    business: "Mon-Thu business travel peaks (but lower overall)"
  },

  causal_inference_angle: {
    ranker_effect_hypothesis: "Better-ranked hotels get more bookings, but is it causal or just selection? → RCT or DML segmentation to estimate CATE",
    sponsored_bias: "Sponsored hotels bid more ↔ higher rank ↔ more bookings. Is sponsor $$ driving choice or just signaling quality? → causal forest + incremental ROI",
    reviews_effect: "Do new reviews causally increase bookings, or do good hotels naturally get reviewed? → synthetic control or quasi-experiment by market"
  }
};
`},{name:"Questions to Ask the Interviewer",content:`Asking good questions shows research, genuine interest, and strategic thinking. Tailor by round.

**For Case Study / Hiring Manager Round**
These questions show you're thinking about real constraints and organizational strategy.

1. "What's the state of experimentation infrastructure at Expedia right now? Do you have a centralized platform, or do teams build their own test infrastructure?"
   → Listen for: maturity level, pain points, technical debt. If they say "fragmented," that's an opening: "I'd focus on standardization and guardrails first."

2. "What's the biggest experimentation challenge you face today? Is it sample size, inference speed, multi-armed bandits, or something else?"
   → Shows you understand the hard problems. You might follow up: "I've worked on that at Amazon—here's how we solved it."

3. "How do you balance short-term revenue optimization with long-term user trust and satisfaction?"
   → Tests ethics + strategic thinking. You're asking: does the company care about sustainable growth or just metrics?

4. "What does success look like for a DS Director in your organization? What would you want me to deliver in the first 90 days?"
   → Uncover priorities. Is it: build a new model? Operationalize existing work? Hire a team? Fix broken infrastructure?

**For Technical Round (Your Peer or More Senior DS)**
These are about technical depth and real-world constraints.

1. "How does the ranking model currently handle position bias? Is there a separate pCTR calibration step, or is it baked into the training objective?"
   → Shows you understand the bias-variance tradeoff in ranking. Their answer will guide your day-of technical discussions.

2. "What's the largest source of error in the ranking model? Model misspecification, or drift from user behavior changes?"
   → Reveals where the team spends energy. If they say "drift," ask: "How often do you retrain? Do you use online learning or batch?"

3. "How do you think about sample size and power for small-lift experiments (e.g., 0.5% expected lift)? Do you use sequential testing or fixed-horizon?"
   → Advanced question. Shows you care about inference speed vs. statistical power tradeoff. Their answer tells you about testing maturity.

4. "If you had to estimate heterogeneous treatment effects in your ranking experiments, what would be your first approach?"
   → This is your Double ML moment. They might say: "We don't." You respond: "I'd use causal forests or Double ML to find segments where the feature works better."

**For Cross-Functional / Stakeholder Round (Product, Marketing, Operations)**
These show you're a bridge-builder and you understand business constraints.

1. "How do you think about the tradeoff between Expedia revenue optimization and hotel partner satisfaction? Are there guardrails?"
   → Tests stakeholder intelligence. If they say "partners complain often," you know you'll need to optimize for trust, not just revenue.

2. "From your perspective, what's the most underexploited opportunity in the hotels ranking right now? Price? Reviews? Availability?"
   → Invites their perspective. Then you can say: "I'd approach that via incrementality testing—let me show you a framework."

3. "How quickly can you iterate once you find a ranking signal that works? What's the typical time from experiment to production?"
   → Reveals organizational speed / technical debt. If it's 6 months, there's friction. If it's 1 week, they're well-oiled.

4. "What does good DS collaboration look like on your team? Do you pair with product managers, or are DS and PM separate?"
   → Tests team structure. You want to hear: "Close partnership." If they say "separate," you now know you'll need to build bridges.

**For Culture / Values Round (Optional, But Often Happens)**
1. "Tell me about a time your team had to kill a good idea because the business tradeoffs weren't worth it. How did you navigate that?"
   → Listen for: evidence of integrity, not just revenue chasing. Good sign if they share a story about saying no.

2. "What does good DS mentorship look like in your organization? Do you invest in growing junior scientists?"
   → Shows you care about team. If they say "not much," you know you'll need to advocate for it.

3. "How do you handle situations where data suggests one thing, but stakeholders want to do something else?"
   → Tests psychological safety. You want: "We have open discussion and escalate if needed." Red flag if they say "stakeholders always win."`,code:`// Question Framework by Round
const QuestionsToAsk = {
  hiring_manager: {
    focus: "Organizational strategy, infrastructure maturity, your role",
    questions: [
      "What's the state of experimentation infrastructure? Centralized platform or team-built?",
      "What's the biggest experimentation challenge you face today?",
      "How do you balance short-term revenue optimization with long-term user trust?",
      "What does success look like for a DS Director in your first 90 days?"
    ]
  },

  technical_peer: {
    focus: "Technical depth, real-world constraints, inference tradeoffs",
    questions: [
      "How does the ranking model handle position bias? Separate pCTR calibration?",
      "What's the largest source of error in the ranking model?",
      "How do you approach sample size for small-lift experiments (0.5%)? Sequential testing or fixed-horizon?",
      "If you wanted to estimate heterogeneous treatment effects in ranking, what's your first approach?"
    ]
  },

  cross_functional: {
    focus: "Stakeholder dynamics, business constraints, speed of iteration",
    questions: [
      "How do you balance Expedia revenue optimization with hotel partner satisfaction?",
      "What's the most underexploited opportunity in hotels ranking right now?",
      "How quickly can you iterate from experiment to production?",
      "What does good DS collaboration with product look like on your team?"
    ]
  },

  culture_values: {
    focus: "Team health, integrity, growth",
    questions: [
      "Tell me about a time your team killed a good idea due to business tradeoffs.",
      "What does good DS mentorship look like in your organization?",
      "How do you handle situations where data says one thing but stakeholders want another?"
    ]
  }
};
`},{name:"Day-of Checklist & Interview Strategy",content:`You're ready. Here's your playbook for the day.

**Pre-Interview (The Night Before + Morning Of)**
□ Deep breathing. You've done the work. You belong in this room.
□ Review Double ML story (5 min read-through). Know: DML method, business impact, segmentation insight, one hard question answer.
□ Review A/B testing formulas (10 min). MDE formula, power calculation, peeking bias, guardrails.
□ Review 1-2 Expedia-specific examples (5 min). Know: booking funnel, RPS metric, mobile vs desktop tradeoff.
□ Logistics: Know the Zoom link, dial-in time, interviewer names. Join 2 min early.

**For Every Case Study Question**
1. Start with clarification: "Let me make sure I understand the goal. Are we optimizing for [metric A, B, or C]?"
2. Jump to structure: "I'd approach this in 4 steps: (1) clarify metric, (2) identify guardrails, (3) design the test, (4) set decision criteria."
3. Talk out loud. They want to see your thinking, not just the answer. "I'm thinking... what if we segment by..."
4. Always check SUTVA, irreversibility, sample size. "Is this population large enough to run an RCT? If not, I'd use DiD or synthetic control."
5. Guardrails. Never skip. "Here's my north star metric. Here's what *can't* regress. Here's how I'd monitor."
6. End with next steps: "If we launch, we'd monitor for 4 weeks, then review with product and ML ops."

**When You Don't Know the Answer**
Don't panic. Don't guess. Say this:
"I haven't worked with [specific tool/domain], but I'd approach this by [method]. What I'd look up to confirm is [X]."
Example: "I haven't worked with Expedia's ranking stack specifically, but I'd approach it like Amazon's relevance ranking: understand signal importance via feature attribution, validate with shadow testing, then A/B test in prod."

This shows:
- You have a process (transferable)
- You're humble (not a know-it-all)
- You'll learn (not a fixed mindset)

**Salary Negotiation (If It Comes Up)**
They'll ask: "What are you looking for?"
Your anchor:
"Based on my research, the market rate for a Director of Data Science at [company size] with [your background: causal ML + experimentation] is $X-Y. I'm excited about the role and growth opportunity, so I'm flexible, but that's my research-backed starting point."

Get the number from: Levels.fyi, Glassdoor, blind, your network.
For Expedia Director: likely $250-350K salary + 20-30% bonus + 0.01-0.05% RSU (depending on location, seniority).

**Red Flags to Watch For (Are You Sure You Want This Job?)**
Watch for these during interviews. If you hear them, ask follow-ups or walk away:
1. "We have a lot of data, but not much experimentation culture yet." → Translation: "No buy-in for data-driven decisions."
   Ask: "How do you get stakeholder buy-in for experiments? What happens when an experiment goes against intuition?"

2. "ML models are built, but we're not sure what they're doing anymore." → Translation: "Technical debt, no explainability."
   Ask: "What's your plan for model monitoring and governance?"

3. "We've had high DS churn—previous directors left after X months." → Translation: "Organizational issues."
   Ask: "What caused those departures? What's changed?"

4. "Data quality is... a work in progress." → Translation: "You'll spend 6 months on data pipelines, not modeling."
   Ask: "What's the plan to improve data quality? How much DS time goes to infrastructure vs. science?"

5. "The CEO doesn't really believe in experimentation." → Translation: "You'll fight every decision."
   This is a hard pass.

**Your Personal Pitch (Closing Questions)**
If asked: "Why do you want to work at Expedia? How does your experience prepare you?"

Your pitch:
"I'm excited about Expedia because you operate at the intersection of recommendation (ranking algorithms), marketplace dynamics (hotels + advertisers), and scale (30M+ monthly searches). My background is exactly that: causal inference + experimentation + ads analytics at Amazon. I've measured incremental impact of ads using Double ML, I've built A/B testing culture, and I've optimized multi-stakeholder tradeoffs (user value vs. advertiser ROI). At Expedia, I'd apply that experience to unlock ranking efficiency and help the team go from 'we run experiments' to 'we can measure *why* they work.' I see a 3-5 year runway: build CATE estimation infrastructure, scale incrementality testing, and turn segmentation insights into product strategy."

This shows:
- You researched Expedia's business
- You have a unique angle (causal ML + experimentation + ads)
- You have a plan (specific projects for 90-days, 1-year, 3-year horizon)

**The End of Your Interview**
Last question (almost always): "Do you have any final questions for us?"
Pick one:
- If you felt aligned: "What would success look like for this role in the first 6 months?"
- If you had doubts: "What's the biggest challenge this role will face in the first year?"
- If you want to solidify fit: "How do you see DS contributing to Expedia's next phase of growth?"

Then: "I'm excited about this opportunity. I think my background in causal inference and experimentation is a strong fit for the challenges you're facing. What are your next steps?"`,code:`// Day-of Interview Checklist & Strategy
const InterviewDayPlaybook = {
  pre_interview: {
    night_before: [
      "[ ] Read Double ML story (5 min) — method, impact, one hard Q answer",
      "[ ] Review A/B testing formulas (10 min) — MDE, power, peeking bias",
      "[ ] Review Expedia 101 (5 min) — booking funnel, RPS, mobile vs desktop",
      "[ ] Check Zoom link, dial-in time, interviewer names",
      "[ ] Get 8 hours sleep"
    ],
    morning_of: [
      "[ ] Light breakfast (don't do interviews hungry)",
      "[ ] Do a 5-min breathing exercise",
      "[ ] Review your pitch one more time (not obsessive—you know it)",
      "[ ] Join video call 2 min early"
    ]
  },

  case_study_formula: {
    step_1: "Clarify the goal. 'Are we optimizing for [metric A, B, or C]?'",
    step_2: "State your framework. 'I'd approach this in 4 steps: clarify metric, identify guardrails, design test, set decision criteria.'",
    step_3: "Talk out loud. 'I'm thinking... what if we segment by...' (they want to see your process)",
    step_4: "Always check SUTVA + irreversibility + sample size.",
    step_5: "Guardrails. Never skip. North star + what can't regress + monitoring plan.",
    step_6: "End with next steps. 'If we launch, monitor 4 weeks, then review.'"
  },

  when_you_dont_know: {
    template: "I haven't worked with [specific], but I'd approach it by [method]. What I'd look up to confirm is [X].",
    example: "I haven't worked with Expedia's ranking stack, but I'd approach it like Amazon: understand signal importance via attribution, validate with shadow testing, A/B test in prod."
  },

  salary_negotiation: {
    anchor_formula: "Based on research (Levels.fyi, Glassdoor, blind), the market rate for a Director of DS with [causal ML + experimentation] is $X-Y.",
    expedia_estimate: "Likely $250-350K salary + 20-30% bonus + 0.01-0.05% RSU (varies by location)",
    your_response: "I'm excited about the role and growth opportunity. I'm flexible, but that's my research-backed starting point."
  },

  red_flags_to_watch: [
    {
      flag: "No experimentation culture yet",
      followup: "How do you get stakeholder buy-in? What happens when an experiment goes against intuition?",
      severity: "High — you'll fight decisions"
    },
    {
      flag: "ML models built but no one knows what they do",
      followup: "What's your plan for monitoring and governance?",
      severity: "High — technical debt"
    },
    {
      flag: "High DS churn (previous directors left early)",
      followup: "What caused departures? What's changed?",
      severity: "Very High — organizational issues"
    },
    {
      flag: "Data quality is 'work in progress'",
      followup: "What's the plan? How much time will I spend on infra vs. science?",
      severity: "Medium-High — you'll be a data engineer"
    },
    {
      flag: "CEO doesn't believe in experimentation",
      followup: "How do data-driven decisions get made?",
      severity: "Critical — hard pass"
    }
  ],

  your_personal_pitch: {
    opening: "I'm excited about Expedia because you operate at the intersection of ranking algorithms, marketplace dynamics, and scale.",
    your_angle: "My background: causal inference + experimentation + ads analytics. I've measured incremental impact using Double ML, built A/B testing culture, optimized multi-stakeholder tradeoffs.",
    your_plan: "I'd unlock ranking efficiency: build CATE estimation infrastructure, scale incrementality testing, turn segmentation insights into product strategy. 3-5 year runway.",
    ending: "I think my background is a strong fit for your challenges. What are your next steps?"
  },

  final_question: {
    if_aligned: "What would success look like for this role in the first 6 months?",
    if_had_doubts: "What's the biggest challenge this role will face in the first year?",
    if_want_to_solidify: "How do you see DS contributing to Expedia's next phase of growth?",
    always_close_with: "I'm excited about this opportunity. What are your next steps?"
  }
};
`}],practice_questions:[{question:"Walk me through a time you used data to change a business decision. What was the outcome?",context:"BQ behavioral question. This is YOUR Double ML CATE story.",sample_answer:"At Amazon, I led a Double ML project to measure incremental impact of ad exposure on purchase, by customer segment. Initial team hypothesis: all segments benefit equally. I used Double ML (Ridge + LightGBM nuisance models, cross-fitted) to estimate conditional average treatment effects (CATE). Found stark heterogeneity: new customers +35% iROAS, loyal customers -5% (crowding out). This flipped our budget strategy. We reallocated from uniform spend to 60% new, 35% occasional, 5% loyal customers. Result: +$20M incremental annual revenue. This taught me that heterogeneity is real, and one global metric masks strategic opportunities.",key_points:["Name the method (Double ML, not just 'analysis')","Show the insight (segmentation, CATE)","Quantify the impact ($20M, not 'significant')","End with learning (heterogeneity matters)"]},{question:"Expedia wants to launch a new 'sponsored sort' feature for hotels. How would you design the experiment?",context:"Case study. Full framework expected.",sample_answer:"I'd start by clarifying the goal: is this to boost advertiser satisfaction, increase Expedia revenue, or improve ranking relevance? Let's assume: maximize Revenue per Search (RPS) without hurting organic ranking quality. Here's my framework: (1) North star: RPS. Guardrails: organic booking rate (don't cannibalize), page load time, advertiser satisfaction. (2) A/B test via 50/50 split of search sessions. Control: current ranking. Treatment: ranking + sponsored sort signal. SUTVA is OK—randomizing per session. (3) Sample size: For 1% MDE, α=0.05, β=0.20, need ~1.5M users per group per week. Run for 2 weeks. (4) Segments: mobile vs desktop (ranking latency differs), new vs returning, booking window. (5) Decision: Launch if p<0.05, RPS +1%, guardrails stable, effect uniform. (6) Post-launch: 4-week holdback, daily alerts on RPS and guardrails, weekly review with product.",key_points:["Clarify the metric first","Name guardrails (don't forget them)","Check SUTVA + feasibility","Calculate sample size","Plan segmentation","Set decision criteria (statistical + business + guardrails)"]},{question:"Why do you want to work at Expedia specifically, and how does your experience prepare you for this role?",context:"Motivation + fit question. Connect your background to Expedia's needs.",sample_answer:"I'm excited about Expedia because you operate at the intersection of three things I love: ranking algorithms, marketplace dynamics, and scale (30M+ monthly searches). My background is exactly that. At Amazon, I worked on ads ranking and measurement: I've used Double ML to measure incremental impact of ads on purchase by segment, I've built A/B testing culture, and I've optimized multi-stakeholder tradeoffs (user value vs. advertiser ROI). At Expedia, I'd apply that directly: use causal inference to unlock ranking efficiency, scale incrementality testing to measure *why* experiments work, and turn segmentation insights into product strategy. I see a 3-5 year runway: build CATE estimation infrastructure, establish guardrails for marketplace health, and make Expedia the gold standard for ranking experimentation. Your hotels business is the perfect lever—the funnel is clear (impression → click → detail → booking), the stakeholder tradeoffs are real (user trust vs. advertiser revenue), and the upside is massive (1% RPS lift = $5M+).",key_points:["Research Expedia (ranking, marketplace, scale)","Connect your angle (causal ML + experimentation + ads)","Show you understand their constraints (mobile latency, advertiser balance)","Articulate a plan (90-day, 1-year, 3-year)"]},{question:"Your A/B test shows +2% booking rate lift but -5% session duration. Do you launch?",context:"Metric tradeoff case. Test if you can navigate guardrail violations.",sample_answer:"I wouldn't launch without understanding what's happening. Session duration drop is a guardrail concern. Here's my process: (1) Diagnose: Is the user getting frustrated (bouncing early)? Or is the new ranking so good, they're finding what they want and leaving faster? (2) Segment: Is the drop uniform, or is it certain user types (mobile, new users, business travelers)? (3) Check power: Is session duration underpowered to detect +2%? (4) Investigate pCTR: If the new signal is boosting lower-quality hotels (position bias), users might click more but leave faster. (5) Decision: If it's a legitimate user experience win (finding faster), I'd launch with a smaller treatment group (25%) and monitor closely. If it's signal confusion (bad ranking inflation), I'd iterate on the signal weight. If data says 'unclear,' I'd ask the product team: 'What does user intent tell us? Are they actually happier despite shorter sessions?'",key_points:["Don't launch without understanding the tradeoff","Diagnose (what's causing it?)","Segment (is it uniform?)","Investigate mechanisms (pCTR, position bias)","End with: launch small, monitor, or iterate"]},{question:"You inherited a model that has 78% AUC but stakeholders say it 'feels wrong.' What do you do?",context:"Debugging + calibration. Test if you can think beyond accuracy metrics.",sample_answer:"High AUC + 'feels wrong' tells me there's a mismatch between statistical accuracy and business/user value. Here's how I'd debug: (1) Decompose AUC: Is the model good at separating high-risk from low-risk, but terrible at actual probabilities? (2) Check calibration: Does 78% predicted probability actually mean 78% of bookings happen? If it's 50%, the model is uncalibrated; I'd use Platt scaling or isotonic regression. (3) Segment analysis: Is the model good overall but bad for a specific segment (mobile users, last-minute bookers, certain markets)? (4) Feature analysis: Are the top features believable? If the model relies on weird proxies (e.g., 'user IQ' inferred from click patterns), that's a red flag. (5) Stakeholder interview: What 'feels wrong'? Are they seeing bad recommendations? High false positives? (6) Business impact: 78% AUC might be mathematically good but business-bad if it misses high-intent users. I'd measure: precision/recall by segment, actual ROI impact, user satisfaction. (7) Next step: Retrain with better features, calibrate probabilities, or segment the model. Then A/B test the new version before deploying.",key_points:["High accuracy ≠ good model","Check calibration + fairness + business impact","Diagnose the specific 'wrong' feeling","Involve stakeholders in definition","Iterate + test, don't just ship"]}],key_formulas:[{name:"STAR Format (BQ Stories)",formula:"Situation → Task → Action → Result. Each 20-60 seconds. Always quantify Result.",example:"Situation (20s): At Amazon, we were spending $500M on ads without segment-level ROI. Task (20s): Measure incremental impact by segment. Action (60s): Built Double ML model to estimate CATE (Ridge L2 + LightGBM, cross-fitted). Found new customers +35% iROAS, loyal customers -5%. Result (20s): Reallocated budget. +$20M incremental revenue."},{name:"Minimum Detectable Effect (MDE) & Sample Size",formula:"N = (Z_α + Z_β)² × (σ²_control + σ²_treatment) / (delta)²",example:"Expedia RPS. Expected lift: 1%. Baseline RPS: $20, daily variance ~30%. Z_0.05 = 1.96, Z_0.20 = 0.84. N ≈ (1.96 + 0.84)² × (0.30² + 0.30²) / (0.01)² ≈ 1.5M users per group per week."},{name:"iROAS Break-Even",formula:"Incremental ROI of Ads = (Incremental_Revenue / Ad_Spend) × 100%",example:"If ad spend is $100 and incremental bookings are $250, iROAS = 250%. If true incrementality is -$50 (crowding out), iROAS = -50% (kill the ads)."},{name:"Double ML for CATE",formula:"τ(X) = E[Y_{treatment} - Y_{control} | X] via partialling out confounders and cross-fitting",example:"Estimate treatment effect (ad exposure) on outcome (purchase) conditional on X (user features). Result: heterogeneous effects by segment."}],resources:[{title:"Expedia Group Tech Blog",url:"https://expediagroup.com/tech",relevance:"Expedia's technical team blog. Search for 'A/B testing', 'ranking', 'experimentation'."},{title:"Glassdoor — Expedia DS Interview Reports",url:"https://www.glassdoor.com/Interview/Expedia-Data-Scientist-Interview-Questions-EI_IE10170.0,7_KO8,22.htm",relevance:"Real interview questions from recent candidates. Read the 'Director' or 'Senior' level reports."},{title:"Cracking the PM/DS Interview — Behavioral Chapter",url:"https://www.amazon.com/Cracking-Product-Manager-Interview-Questions/dp/0984782818",relevance:"Gold standard for STAR format + case studies. Read Chapter 2-3."},{title:"Causal Inference: The Mixtape (Scott Cunningham)",url:"https://mixtape.scunning.com/",relevance:"Free online textbook. Ch 8 (DML), Ch 10 (Heterogeneity) — deep-dive your Double ML story."},{title:"Hubbard & Meese — 'Causal Forest for Personalized Medicine'",url:"https://arxiv.org/abs/1510.04342",relevance:"Original causal forest paper. Not required, but good for technical depth if they ask about CATE methods."}]},Sm={1:Qp,2:Xp,3:Kp,4:$p,5:Jp,6:Zp,7:em,8:tm,9:nm,10:im,11:rm,12:am,13:om,14:sm,15:lm,16:dm,17:cm,18:um,19:pm,20:mm,21:hm,22:fm,23:gm,24:ym,25:vm,26:wm,27:bm,28:_m,29:km,30:Em};function Qr(){const t=window.location.pathname.replace(/\/$/,"").match(/\/day\/(\d+)/);return t?{type:"day",day:parseInt(t[1])}:{type:"schedule"}}function Tm(){const[e,t]=P.useState(Qr());if(P.useEffect(()=>{const n=()=>t(Qr());return window.addEventListener("popstate",n),()=>window.removeEventListener("popstate",n)},[]),P.useEffect(()=>{const n=i=>{const r=i.target.closest("a");if(!r)return;const a=r.getAttribute("href");!a||a.startsWith("http")||a.startsWith("#")||r.target==="_blank"||(i.preventDefault(),window.history.pushState({},"",a),t(Qr()),window.scrollTo(0,0))};return document.addEventListener("click",n),()=>document.removeEventListener("click",n)},[]),e.type==="day"){const n=Sm[e.day]||null;return(n==null?void 0:n.type)==="quiz"?l.jsx(Vp,{data:n}):l.jsx(Yp,{data:n})}return l.jsx(Hp,{})}Xr.createRoot(document.getElementById("root")).render(l.jsx(xc.StrictMode,{children:l.jsx(Tm,{})}));
