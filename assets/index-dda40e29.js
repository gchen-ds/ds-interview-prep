(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ks={exports:{}},ir={},Js={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),uc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),wc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),Po=Symbol.iterator;function bc(e){return e===null||typeof e!="object"?null:(e=Po&&e[Po]||e["@@iterator"],typeof e=="function"?e:null)}var $s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zs=Object.assign,el={};function on(e,t,n){this.props=e,this.context=t,this.refs=el,this.updater=n||$s}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tl(){}tl.prototype=on.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=el,this.updater=n||$s}var Fa=za.prototype=new tl;Fa.constructor=za;Zs(Fa,on.prototype);Fa.isPureReactComponent=!0;var Bo=Array.isArray,nl=Object.prototype.hasOwnProperty,Ga={current:null},il={key:!0,ref:!0,__self:!0,__source:!0};function rl(e,t,n){var i,r={},a=null,o=null;if(t!=null)for(i in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)nl.call(t,i)&&!il.hasOwnProperty(i)&&(r[i]=t[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var d=Array(s),p=0;p<s;p++)d[p]=arguments[p+2];r.children=d}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Kn,type:e,key:a,ref:o,props:r,_owner:Ga.current}}function _c(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uo=/\/+/g;function _r(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function Ei(e,t,n,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case uc:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+_r(o,0):i,Bo(r)?(n="",e!=null&&(n=e.replace(Uo,"$&/")+"/"),Ei(r,t,n,"",function(p){return p})):r!=null&&(ja(r)&&(r=_c(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Uo,"$&/")+"/")+e)),t.push(r)),1;if(o=0,i=i===""?".":i+":",Bo(e))for(var s=0;s<e.length;s++){a=e[s];var d=i+_r(a,s);o+=Ei(a,t,n,d,r)}else if(d=bc(e),typeof d=="function")for(e=d.call(e),s=0;!(a=e.next()).done;)a=a.value,d=i+_r(a,s++),o+=Ei(a,t,n,d,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ii(e,t,n){if(e==null)return e;var i=[],r=0;return Ei(e,i,"","",function(a){return t.call(n,a,r++)}),i}function kc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},bi={transition:null},Tc={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:bi,ReactCurrentOwner:Ga};function al(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=on;D.Fragment=pc;D.Profiler=hc;D.PureComponent=za;D.StrictMode=mc;D.Suspense=vc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tc;D.act=al;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Zs({},e.props),r=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ga.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(d in t)nl.call(t,d)&&!il.hasOwnProperty(d)&&(i[d]=t[d]===void 0&&s!==void 0?s[d]:t[d])}var d=arguments.length-2;if(d===1)i.children=n;else if(1<d){s=Array(d);for(var p=0;p<d;p++)s[p]=arguments[p+2];i.children=s}return{$$typeof:Kn,type:e.type,key:r,ref:a,props:i,_owner:o}};D.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};D.createElement=rl;D.createFactory=function(e){var t=rl.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:yc,render:e}};D.isValidElement=ja;D.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:kc}};D.memo=function(e,t){return{$$typeof:wc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=bi.transition;bi.transition={};try{e()}finally{bi.transition=t}};D.unstable_act=al;D.useCallback=function(e,t){return de.current.useCallback(e,t)};D.useContext=function(e){return de.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return de.current.useDeferredValue(e)};D.useEffect=function(e,t){return de.current.useEffect(e,t)};D.useId=function(){return de.current.useId()};D.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return de.current.useMemo(e,t)};D.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};D.useRef=function(e){return de.current.useRef(e)};D.useState=function(e){return de.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return de.current.useTransition()};D.version="18.3.1";Js.exports=D;var I=Js.exports;const Ac=cc(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=I,Nc=Symbol.for("react.element"),xc=Symbol.for("react.fragment"),Cc=Object.prototype.hasOwnProperty,Lc=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oc={key:!0,ref:!0,__self:!0,__source:!0};function ol(e,t,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(i in t)Cc.call(t,i)&&!Oc.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:Nc,type:e,key:a,ref:o,props:r,_owner:Lc.current}}ir.Fragment=xc;ir.jsx=ol;ir.jsxs=ol;Ks.exports=ir;var l=Ks.exports,Xr={},sl={exports:{}},Ee={},ll={exports:{}},dl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,C){var L=A.length;A.push(C);e:for(;0<L;){var Y=L-1>>>1,J=A[Y];if(0<r(J,C))A[Y]=C,A[L]=J,L=Y;else break e}}function n(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var C=A[0],L=A.pop();if(L!==C){A[0]=L;e:for(var Y=0,J=A.length,ti=J>>>1;Y<ti;){var yt=2*(Y+1)-1,br=A[yt],vt=yt+1,ni=A[vt];if(0>r(br,L))vt<J&&0>r(ni,br)?(A[Y]=ni,A[vt]=L,Y=vt):(A[Y]=br,A[yt]=L,Y=yt);else if(vt<J&&0>r(ni,L))A[Y]=ni,A[vt]=L,Y=vt;else break e}}return C}function r(A,C){var L=A.sortIndex-C.sortIndex;return L!==0?L:A.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var d=[],p=[],y=1,c=null,u=3,v=!1,b=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(A){for(var C=n(p);C!==null;){if(C.callback===null)i(p);else if(C.startTime<=A)i(p),C.sortIndex=C.expirationTime,t(d,C);else break;C=n(p)}}function w(A){if(E=!1,f(A),!b)if(n(d)!==null)b=!0,wr(S);else{var C=n(p);C!==null&&Er(w,C.startTime-A)}}function S(A,C){b=!1,E&&(E=!1,g(N),N=-1),v=!0;var L=u;try{for(f(C),c=n(d);c!==null&&(!(c.expirationTime>C)||A&&!Ne());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,u=c.priorityLevel;var J=Y(c.expirationTime<=C);C=e.unstable_now(),typeof J=="function"?c.callback=J:c===n(d)&&i(d),f(C)}else i(d);c=n(d)}if(c!==null)var ti=!0;else{var yt=n(p);yt!==null&&Er(w,yt.startTime-C),ti=!1}return ti}finally{c=null,u=L,v=!1}}var k=!1,R=null,N=-1,U=5,O=-1;function Ne(){return!(e.unstable_now()-O<U)}function dn(){if(R!==null){var A=e.unstable_now();O=A;var C=!0;try{C=R(!0,A)}finally{C?cn():(k=!1,R=null)}}else k=!1}var cn;if(typeof h=="function")cn=function(){h(dn)};else if(typeof MessageChannel<"u"){var Wo=new MessageChannel,dc=Wo.port2;Wo.port1.onmessage=dn,cn=function(){dc.postMessage(null)}}else cn=function(){x(dn,0)};function wr(A){R=A,k||(k=!0,cn())}function Er(A,C){N=x(function(){A(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,wr(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(A){switch(u){case 1:case 2:case 3:var C=3;break;default:C=u}var L=u;u=C;try{return A()}finally{u=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,C){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=u;u=A;try{return C()}finally{u=L}},e.unstable_scheduleCallback=function(A,C,L){var Y=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Y+L:Y):L=Y,A){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,A={id:y++,callback:C,priorityLevel:A,startTime:L,expirationTime:J,sortIndex:-1},L>Y?(A.sortIndex=L,t(p,A),n(d)===null&&A===n(p)&&(E?(g(N),N=-1):E=!0,Er(w,L-Y))):(A.sortIndex=J,t(d,A),b||v||(b=!0,wr(S))),A},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(A){var C=u;return function(){var L=u;u=C;try{return A.apply(this,arguments)}finally{u=L}}}})(dl);ll.exports=dl;var Dc=ll.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=I,we=Dc;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cl=new Set,Dn={};function Lt(e,t){$t(e,t),$t(e+"Capture",t)}function $t(e,t){for(Dn[e]=t,e=0;e<t.length;e++)cl.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kr=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ho={},zo={};function Ic(e){return Kr.call(zo,e)?!0:Kr.call(Ho,e)?!1:qc.test(e)?zo[e]=!0:(Ho[e]=!0,!1)}function Wc(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pc(e,t,n,i){if(t===null||typeof t>"u"||Wc(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,i,r,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ya=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ya,Va);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ya,Va);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ya,Va);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qa(e,t,n,i){var r=ne.hasOwnProperty(t)?ne[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pc(t,n,r,i)&&(n=null),i||r===null?Ic(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Ke=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),Jr=Symbol.for("react.profiler"),ul=Symbol.for("react.provider"),pl=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),$r=Symbol.for("react.suspense"),Zr=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),ml=Symbol.for("react.offscreen"),Fo=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Sr;function wn(e){if(Sr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sr=t&&t[1]||""}return`
`+Sr+e}var kr=!1;function Tr(e,t){if(!e||kr)return"";kr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var i=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){i=p}e.call(t.prototype)}else{try{throw Error()}catch(p){i=p}e()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var d=`
`+r[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=s);break}}}finally{kr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Bc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Tr(e.type,!1),e;case 11:return e=Tr(e.type.render,!1),e;case 1:return e=Tr(e.type,!0),e;default:return""}}function ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Mt:return"Portal";case Jr:return"Profiler";case Xa:return"StrictMode";case $r:return"Suspense";case Zr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pl:return(e.displayName||"Context")+".Consumer";case ul:return(e._context.displayName||"Context")+".Provider";case Ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ja:return t=e.displayName||null,t!==null?t:ea(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return ea(e(t))}catch{}}return null}function Uc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ea(t);case 8:return t===Xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=hl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ai(e){e._valueTracker||(e._valueTracker=Hc(e))}function fl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hl(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Go(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gl(e,t){t=t.checked,t!=null&&Qa(e,"checked",t,!1)}function na(e,t){gl(e,t);var n=pt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&ia(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ia(e,t,n){(t!=="number"||Oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Yt(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(En(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function yl(e,t){var n=pt(t.value),i=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,wl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){zc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function El(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function bl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=El(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var Fc=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(e,t){if(t){if(Fc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function $a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var da=null,Vt=null,Qt=null;function Qo(e){if(e=Zn(e)){if(typeof da!="function")throw Error(_(280));var t=e.stateNode;t&&(t=lr(t),da(e.stateNode,e.type,t))}}function _l(e){Vt?Qt?Qt.push(e):Qt=[e]:Vt=e}function Sl(){if(Vt){var e=Vt,t=Qt;if(Qt=Vt=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function kl(e,t){return e(t)}function Tl(){}var Ar=!1;function Al(e,t,n){if(Ar)return e(t,n);Ar=!0;try{return kl(e,t,n)}finally{Ar=!1,(Vt!==null||Qt!==null)&&(Tl(),Sl())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var i=lr(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ca=!1;if(Ye)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ca=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ca=!1}function Gc(e,t,n,i,r,a,o,s,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var Tn=!1,Di=null,Mi=!1,ua=null,jc={onError:function(e){Tn=!0,Di=e}};function Yc(e,t,n,i,r,a,o,s,d){Tn=!1,Di=null,Gc.apply(jc,arguments)}function Vc(e,t,n,i,r,a,o,s,d){if(Yc.apply(this,arguments),Tn){if(Tn){var p=Di;Tn=!1,Di=null}else throw Error(_(198));Mi||(Mi=!0,ua=p)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xo(e){if(Ot(e)!==e)throw Error(_(188))}function Qc(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Xo(r),e;if(a===i)return Xo(r),t;a=a.sibling}throw Error(_(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==i)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Nl(e){return e=Qc(e),e!==null?xl(e):null}function xl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xl(e);if(t!==null)return t;e=e.sibling}return null}var Cl=we.unstable_scheduleCallback,Ko=we.unstable_cancelCallback,Xc=we.unstable_shouldYield,Kc=we.unstable_requestPaint,V=we.unstable_now,Jc=we.unstable_getCurrentPriorityLevel,Za=we.unstable_ImmediatePriority,Ll=we.unstable_UserBlockingPriority,qi=we.unstable_NormalPriority,$c=we.unstable_LowPriority,Ol=we.unstable_IdlePriority,rr=null,Be=null;function Zc(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(rr,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:nu,eu=Math.log,tu=Math.LN2;function nu(e){return e>>>=0,e===0?32:31-(eu(e)/tu|0)|0}var si=64,li=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=bn(s):(a&=o,a!==0&&(i=bn(a)))}else o=n&~r,o!==0?i=bn(o):a!==0&&(i=bn(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-De(t),r=1<<n,i|=e[n],t&=~r;return i}function iu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ru(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-De(a),s=1<<o,d=r[o];d===-1?(!(s&n)||s&i)&&(r[o]=iu(s,t)):d<=t&&(e.expiredLanes|=s),a&=~s}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dl(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function Rr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function au(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-De(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}function eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-De(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var q=0;function Ml(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ql,to,Il,Wl,Pl,ma=!1,di=[],rt=null,at=null,ot=null,In=new Map,Wn=new Map,et=[],ou="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jo(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function mn(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Zn(t),t!==null&&to(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function su(e,t,n,i,r){switch(t){case"focusin":return rt=mn(rt,e,t,n,i,r),!0;case"dragenter":return at=mn(at,e,t,n,i,r),!0;case"mouseover":return ot=mn(ot,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return In.set(a,mn(In.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Wn.set(a,mn(Wn.get(a)||null,e,t,n,i,r)),!0}return!1}function Bl(e){var t=bt(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Rl(n),t!==null){e.blockedOn=t,Pl(e.priority,function(){Il(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);la=i,n.target.dispatchEvent(i),la=null}else return t=Zn(n),t!==null&&to(t),e.blockedOn=n,!1;t.shift()}return!0}function $o(e,t,n){_i(e)&&n.delete(t)}function lu(){ma=!1,rt!==null&&_i(rt)&&(rt=null),at!==null&&_i(at)&&(at=null),ot!==null&&_i(ot)&&(ot=null),In.forEach($o),Wn.forEach($o)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,ma||(ma=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,lu)))}function Pn(e){function t(r){return hn(r,e)}if(0<di.length){hn(di[0],e);for(var n=1;n<di.length;n++){var i=di[n];i.blockedOn===e&&(i.blockedOn=null)}}for(rt!==null&&hn(rt,e),at!==null&&hn(at,e),ot!==null&&hn(ot,e),In.forEach(t),Wn.forEach(t),n=0;n<et.length;n++)i=et[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Bl(n),n.blockedOn===null&&et.shift()}var Xt=Ke.ReactCurrentBatchConfig,Wi=!0;function du(e,t,n,i){var r=q,a=Xt.transition;Xt.transition=null;try{q=1,no(e,t,n,i)}finally{q=r,Xt.transition=a}}function cu(e,t,n,i){var r=q,a=Xt.transition;Xt.transition=null;try{q=4,no(e,t,n,i)}finally{q=r,Xt.transition=a}}function no(e,t,n,i){if(Wi){var r=ha(e,t,n,i);if(r===null)Wr(e,t,i,Pi,n),Jo(e,i);else if(su(r,e,t,n,i))i.stopPropagation();else if(Jo(e,i),t&4&&-1<ou.indexOf(e)){for(;r!==null;){var a=Zn(r);if(a!==null&&ql(a),a=ha(e,t,n,i),a===null&&Wr(e,t,i,Pi,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else Wr(e,t,i,null,n)}}var Pi=null;function ha(e,t,n,i){if(Pi=null,e=$a(i),e=bt(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jc()){case Za:return 1;case Ll:return 4;case qi:case $c:return 16;case Ol:return 536870912;default:return 16}default:return 16}}var nt=null,io=null,Si=null;function Hl(){if(Si)return Si;var e,t=io,n=t.length,i,r="value"in nt?nt.value:nt.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[a-i];i++);return Si=r.slice(e,1<i?1-i:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function Zo(){return!1}function be(e){function t(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ci:Zo,this.isPropagationStopped=Zo,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=be(sn),$n=G({},sn,{view:0,detail:0}),uu=be($n),Nr,xr,fn,ar=G({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(Nr=e.screenX-fn.screenX,xr=e.screenY-fn.screenY):xr=Nr=0,fn=e),Nr)},movementY:function(e){return"movementY"in e?e.movementY:xr}}),es=be(ar),pu=G({},ar,{dataTransfer:0}),mu=be(pu),hu=G({},$n,{relatedTarget:0}),Cr=be(hu),fu=G({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),gu=be(fu),yu=G({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vu=be(yu),wu=G({},sn,{data:0}),ts=be(wu),Eu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Su(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_u[e])?!!t[e]:!1}function ao(){return Su}var ku=G({},$n,{key:function(e){if(e.key){var t=Eu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tu=be(ku),Au=G({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ns=be(Au),Ru=G({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),Nu=be(Ru),xu=G({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cu=be(xu),Lu=G({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ou=be(Lu),Du=[9,13,27,32],oo=Ye&&"CompositionEvent"in window,An=null;Ye&&"documentMode"in document&&(An=document.documentMode);var Mu=Ye&&"TextEvent"in window&&!An,zl=Ye&&(!oo||An&&8<An&&11>=An),is=String.fromCharCode(32),rs=!1;function Fl(e,t){switch(e){case"keyup":return Du.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function qu(e,t){switch(e){case"compositionend":return Gl(t);case"keypress":return t.which!==32?null:(rs=!0,is);case"textInput":return e=t.data,e===is&&rs?null:e;default:return null}}function Iu(e,t){if(It)return e==="compositionend"||!oo&&Fl(e,t)?(e=Hl(),Si=io=nt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zl&&t.locale!=="ko"?null:t.data;default:return null}}var Wu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wu[e.type]:t==="textarea"}function jl(e,t,n,i){_l(i),t=Bi(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Rn=null,Bn=null;function Pu(e){nd(e,0)}function or(e){var t=Bt(e);if(fl(t))return e}function Bu(e,t){if(e==="change")return t}var Yl=!1;if(Ye){var Lr;if(Ye){var Or="oninput"in document;if(!Or){var os=document.createElement("div");os.setAttribute("oninput","return;"),Or=typeof os.oninput=="function"}Lr=Or}else Lr=!1;Yl=Lr&&(!document.documentMode||9<document.documentMode)}function ss(){Rn&&(Rn.detachEvent("onpropertychange",Vl),Bn=Rn=null)}function Vl(e){if(e.propertyName==="value"&&or(Bn)){var t=[];jl(t,Bn,e,$a(e)),Al(Pu,t)}}function Uu(e,t,n){e==="focusin"?(ss(),Rn=t,Bn=n,Rn.attachEvent("onpropertychange",Vl)):e==="focusout"&&ss()}function Hu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(Bn)}function zu(e,t){if(e==="click")return or(t)}function Fu(e,t){if(e==="input"||e==="change")return or(t)}function Gu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Gu;function Un(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kr.call(t,r)||!qe(e[r],t[r]))return!1}return!0}function ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,t){var n=ls(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ls(n)}}function Ql(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ql(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xl(){for(var e=window,t=Oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oi(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ju(e){var t=Xl(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ql(n.ownerDocument.documentElement,n)){if(i!==null&&so(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=ds(n,a);var o=ds(n,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yu=Ye&&"documentMode"in document&&11>=document.documentMode,Wt=null,fa=null,Nn=null,ga=!1;function cs(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ga||Wt==null||Wt!==Oi(i)||(i=Wt,"selectionStart"in i&&so(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Nn&&Un(Nn,i)||(Nn=i,i=Bi(fa,"onSelect"),0<i.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Wt)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pt={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Dr={},Kl={};Ye&&(Kl=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);function sr(e){if(Dr[e])return Dr[e];if(!Pt[e])return e;var t=Pt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kl)return Dr[e]=t[n];return e}var Jl=sr("animationend"),$l=sr("animationiteration"),Zl=sr("animationstart"),ed=sr("transitionend"),td=new Map,us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){td.set(e,t),Lt(t,[e])}for(var Mr=0;Mr<us.length;Mr++){var qr=us[Mr],Vu=qr.toLowerCase(),Qu=qr[0].toUpperCase()+qr.slice(1);ht(Vu,"on"+Qu)}ht(Jl,"onAnimationEnd");ht($l,"onAnimationIteration");ht(Zl,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(ed,"onTransitionEnd");$t("onMouseEnter",["mouseout","mouseover"]);$t("onMouseLeave",["mouseout","mouseover"]);$t("onPointerEnter",["pointerout","pointerover"]);$t("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xu=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function ps(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Vc(i,t,void 0,e),e.currentTarget=null}function nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],d=s.instance,p=s.currentTarget;if(s=s.listener,d!==a&&r.isPropagationStopped())break e;ps(r,s,p),a=d}else for(o=0;o<i.length;o++){if(s=i[o],d=s.instance,p=s.currentTarget,s=s.listener,d!==a&&r.isPropagationStopped())break e;ps(r,s,p),a=d}}}if(Mi)throw e=ua,Mi=!1,ua=null,e}function P(e,t){var n=t[ba];n===void 0&&(n=t[ba]=new Set);var i=e+"__bubble";n.has(i)||(id(t,e,2,!1),n.add(i))}function Ir(e,t,n){var i=0;t&&(i|=4),id(n,e,i,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[pi]){e[pi]=!0,cl.forEach(function(n){n!=="selectionchange"&&(Xu.has(n)||Ir(n,!1,e),Ir(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,Ir("selectionchange",!1,t))}}function id(e,t,n,i){switch(Ul(t)){case 1:var r=du;break;case 4:r=cu;break;default:r=no}n=r.bind(null,t,n,e),r=void 0,!ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Wr(e,t,n,i,r){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;o=o.return}for(;s!==null;){if(o=bt(s),o===null)return;if(d=o.tag,d===5||d===6){i=a=o;continue e}s=s.parentNode}}i=i.return}Al(function(){var p=a,y=$a(n),c=[];e:{var u=td.get(e);if(u!==void 0){var v=ro,b=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":v=Tu;break;case"focusin":b="focus",v=Cr;break;case"focusout":b="blur",v=Cr;break;case"beforeblur":case"afterblur":v=Cr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Nu;break;case Jl:case $l:case Zl:v=gu;break;case ed:v=Cu;break;case"scroll":v=uu;break;case"wheel":v=Ou;break;case"copy":case"cut":case"paste":v=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ns}var E=(t&4)!==0,x=!E&&e==="scroll",g=E?u!==null?u+"Capture":null:u;E=[];for(var h=p,f;h!==null;){f=h;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,g!==null&&(w=qn(h,g),w!=null&&E.push(zn(h,w,f)))),x)break;h=h.return}0<E.length&&(u=new v(u,b,null,n,y),c.push({event:u,listeners:E}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",u&&n!==la&&(b=n.relatedTarget||n.fromElement)&&(bt(b)||b[Ve]))break e;if((v||u)&&(u=y.window===y?y:(u=y.ownerDocument)?u.defaultView||u.parentWindow:window,v?(b=n.relatedTarget||n.toElement,v=p,b=b?bt(b):null,b!==null&&(x=Ot(b),b!==x||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=p),v!==b)){if(E=es,w="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(E=ns,w="onPointerLeave",g="onPointerEnter",h="pointer"),x=v==null?u:Bt(v),f=b==null?u:Bt(b),u=new E(w,h+"leave",v,n,y),u.target=x,u.relatedTarget=f,w=null,bt(y)===p&&(E=new E(g,h+"enter",b,n,y),E.target=f,E.relatedTarget=x,w=E),x=w,v&&b)t:{for(E=v,g=b,h=0,f=E;f;f=Dt(f))h++;for(f=0,w=g;w;w=Dt(w))f++;for(;0<h-f;)E=Dt(E),h--;for(;0<f-h;)g=Dt(g),f--;for(;h--;){if(E===g||g!==null&&E===g.alternate)break t;E=Dt(E),g=Dt(g)}E=null}else E=null;v!==null&&ms(c,u,v,E,!1),b!==null&&x!==null&&ms(c,x,b,E,!0)}}e:{if(u=p?Bt(p):window,v=u.nodeName&&u.nodeName.toLowerCase(),v==="select"||v==="input"&&u.type==="file")var S=Bu;else if(as(u))if(Yl)S=Fu;else{S=Hu;var k=Uu}else(v=u.nodeName)&&v.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(S=zu);if(S&&(S=S(e,p))){jl(c,S,n,y);break e}k&&k(e,u,p),e==="focusout"&&(k=u._wrapperState)&&k.controlled&&u.type==="number"&&ia(u,"number",u.value)}switch(k=p?Bt(p):window,e){case"focusin":(as(k)||k.contentEditable==="true")&&(Wt=k,fa=p,Nn=null);break;case"focusout":Nn=fa=Wt=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,cs(c,n,y);break;case"selectionchange":if(Yu)break;case"keydown":case"keyup":cs(c,n,y)}var R;if(oo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else It?Fl(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(zl&&n.locale!=="ko"&&(It||N!=="onCompositionStart"?N==="onCompositionEnd"&&It&&(R=Hl()):(nt=y,io="value"in nt?nt.value:nt.textContent,It=!0)),k=Bi(p,N),0<k.length&&(N=new ts(N,e,null,n,y),c.push({event:N,listeners:k}),R?N.data=R:(R=Gl(n),R!==null&&(N.data=R)))),(R=Mu?qu(e,n):Iu(e,n))&&(p=Bi(p,"onBeforeInput"),0<p.length&&(y=new ts("onBeforeInput","beforeinput",null,n,y),c.push({event:y,listeners:p}),y.data=R))}nd(c,t)})}function zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bi(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=qn(e,n),a!=null&&i.unshift(zn(e,a,r)),a=qn(e,t),a!=null&&i.push(zn(e,a,r))),e=e.return}return i}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ms(e,t,n,i,r){for(var a=t._reactName,o=[];n!==null&&n!==i;){var s=n,d=s.alternate,p=s.stateNode;if(d!==null&&d===i)break;s.tag===5&&p!==null&&(s=p,r?(d=qn(n,a),d!=null&&o.unshift(zn(n,d,s))):r||(d=qn(n,a),d!=null&&o.push(zn(n,d,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ku=/\r\n?/g,Ju=/\u0000|\uFFFD/g;function hs(e){return(typeof e=="string"?e:""+e).replace(Ku,`
`).replace(Ju,"")}function mi(e,t,n){if(t=hs(t),hs(e)!==t&&n)throw Error(_(425))}function Ui(){}var ya=null,va=null;function wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ea=typeof setTimeout=="function"?setTimeout:void 0,$u=typeof clearTimeout=="function"?clearTimeout:void 0,fs=typeof Promise=="function"?Promise:void 0,Zu=typeof queueMicrotask=="function"?queueMicrotask:typeof fs<"u"?function(e){return fs.resolve(null).then(e).catch(ep)}:Ea;function ep(e){setTimeout(function(){throw e})}function Pr(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Pn(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ln=Math.random().toString(36).slice(2),Pe="__reactFiber$"+ln,Fn="__reactProps$"+ln,Ve="__reactContainer$"+ln,ba="__reactEvents$"+ln,tp="__reactListeners$"+ln,np="__reactHandles$"+ln;function bt(e){var t=e[Pe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ve]||n[Pe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gs(e);e!==null;){if(n=e[Pe])return n;e=gs(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Pe]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function lr(e){return e[Fn]||null}var _a=[],Ut=-1;function ft(e){return{current:e}}function B(e){0>Ut||(e.current=_a[Ut],_a[Ut]=null,Ut--)}function W(e,t){Ut++,_a[Ut]=e.current,e.current=t}var mt={},oe=ft(mt),me=ft(!1),At=mt;function Zt(e,t){var n=e.type.contextTypes;if(!n)return mt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function he(e){return e=e.childContextTypes,e!=null}function Hi(){B(me),B(oe)}function ys(e,t,n){if(oe.current!==mt)throw Error(_(168));W(oe,t),W(me,n)}function rd(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(_(108,Uc(e)||"Unknown",r));return G({},n,i)}function zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,At=oe.current,W(oe,e),W(me,me.current),!0}function vs(e,t,n){var i=e.stateNode;if(!i)throw Error(_(169));n?(e=rd(e,t,At),i.__reactInternalMemoizedMergedChildContext=e,B(me),B(oe),W(oe,e)):B(me),W(me,n)}var ze=null,dr=!1,Br=!1;function ad(e){ze===null?ze=[e]:ze.push(e)}function ip(e){dr=!0,ad(e)}function gt(){if(!Br&&ze!==null){Br=!0;var e=0,t=q;try{var n=ze;for(q=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}ze=null,dr=!1}catch(r){throw ze!==null&&(ze=ze.slice(e+1)),Cl(Za,gt),r}finally{q=t,Br=!1}}return null}var Ht=[],zt=0,Fi=null,Gi=0,_e=[],Se=0,Rt=null,Fe=1,Ge="";function wt(e,t){Ht[zt++]=Gi,Ht[zt++]=Fi,Fi=e,Gi=t}function od(e,t,n){_e[Se++]=Fe,_e[Se++]=Ge,_e[Se++]=Rt,Rt=e;var i=Fe;e=Ge;var r=32-De(i)-1;i&=~(1<<r),n+=1;var a=32-De(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fe=1<<32-De(t)+r|n<<r|i,Ge=a+e}else Fe=1<<a|n<<r|i,Ge=e}function lo(e){e.return!==null&&(wt(e,1),od(e,1,0))}function co(e){for(;e===Fi;)Fi=Ht[--zt],Ht[zt]=null,Gi=Ht[--zt],Ht[zt]=null;for(;e===Rt;)Rt=_e[--Se],_e[Se]=null,Ge=_e[--Se],_e[Se]=null,Fe=_e[--Se],_e[Se]=null}var ve=null,ye=null,H=!1,Oe=null;function sd(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ye=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:Fe,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ye=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(H){var t=ye;if(t){var n=t;if(!ws(e,t)){if(Sa(e))throw Error(_(418));t=st(n.nextSibling);var i=ve;t&&ws(e,t)?sd(i,n):(e.flags=e.flags&-4097|2,H=!1,ve=e)}}else{if(Sa(e))throw Error(_(418));e.flags=e.flags&-4097|2,H=!1,ve=e}}}function Es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function hi(e){if(e!==ve)return!1;if(!H)return Es(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wa(e.type,e.memoizedProps)),t&&(t=ye)){if(Sa(e))throw ld(),Error(_(418));for(;t;)sd(e,t),t=st(t.nextSibling)}if(Es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ve?st(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=ye;e;)e=st(e.nextSibling)}function en(){ye=ve=null,H=!1}function uo(e){Oe===null?Oe=[e]:Oe.push(e)}var rp=Ke.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var i=n.stateNode}if(!i)throw Error(_(147,e));var r=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=r.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bs(e){var t=e._init;return t(e._payload)}function dd(e){function t(g,h){if(e){var f=g.deletions;f===null?(g.deletions=[h],g.flags|=16):f.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function i(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function r(g,h){return g=ut(g,h),g.index=0,g.sibling=null,g}function a(g,h,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<h?(g.flags|=2,h):f):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,f,w){return h===null||h.tag!==6?(h=Yr(f,g.mode,w),h.return=g,h):(h=r(h,f),h.return=g,h)}function d(g,h,f,w){var S=f.type;return S===qt?y(g,h,f.props.children,w,f.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$e&&bs(S)===h.type)?(w=r(h,f.props),w.ref=gn(g,h,f),w.return=g,w):(w=Li(f.type,f.key,f.props,null,g.mode,w),w.ref=gn(g,h,f),w.return=g,w)}function p(g,h,f,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==f.containerInfo||h.stateNode.implementation!==f.implementation?(h=Vr(f,g.mode,w),h.return=g,h):(h=r(h,f.children||[]),h.return=g,h)}function y(g,h,f,w,S){return h===null||h.tag!==7?(h=Tt(f,g.mode,w,S),h.return=g,h):(h=r(h,f),h.return=g,h)}function c(g,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yr(""+h,g.mode,f),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ri:return f=Li(h.type,h.key,h.props,null,g.mode,f),f.ref=gn(g,null,h),f.return=g,f;case Mt:return h=Vr(h,g.mode,f),h.return=g,h;case $e:var w=h._init;return c(g,w(h._payload),f)}if(En(h)||un(h))return h=Tt(h,g.mode,f,null),h.return=g,h;fi(g,h)}return null}function u(g,h,f,w){var S=h!==null?h.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:s(g,h,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ri:return f.key===S?d(g,h,f,w):null;case Mt:return f.key===S?p(g,h,f,w):null;case $e:return S=f._init,u(g,h,S(f._payload),w)}if(En(f)||un(f))return S!==null?null:y(g,h,f,w,null);fi(g,f)}return null}function v(g,h,f,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(f)||null,s(h,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ri:return g=g.get(w.key===null?f:w.key)||null,d(h,g,w,S);case Mt:return g=g.get(w.key===null?f:w.key)||null,p(h,g,w,S);case $e:var k=w._init;return v(g,h,f,k(w._payload),S)}if(En(w)||un(w))return g=g.get(f)||null,y(h,g,w,S,null);fi(h,w)}return null}function b(g,h,f,w){for(var S=null,k=null,R=h,N=h=0,U=null;R!==null&&N<f.length;N++){R.index>N?(U=R,R=null):U=R.sibling;var O=u(g,R,f[N],w);if(O===null){R===null&&(R=U);break}e&&R&&O.alternate===null&&t(g,R),h=a(O,h,N),k===null?S=O:k.sibling=O,k=O,R=U}if(N===f.length)return n(g,R),H&&wt(g,N),S;if(R===null){for(;N<f.length;N++)R=c(g,f[N],w),R!==null&&(h=a(R,h,N),k===null?S=R:k.sibling=R,k=R);return H&&wt(g,N),S}for(R=i(g,R);N<f.length;N++)U=v(R,g,N,f[N],w),U!==null&&(e&&U.alternate!==null&&R.delete(U.key===null?N:U.key),h=a(U,h,N),k===null?S=U:k.sibling=U,k=U);return e&&R.forEach(function(Ne){return t(g,Ne)}),H&&wt(g,N),S}function E(g,h,f,w){var S=un(f);if(typeof S!="function")throw Error(_(150));if(f=S.call(f),f==null)throw Error(_(151));for(var k=S=null,R=h,N=h=0,U=null,O=f.next();R!==null&&!O.done;N++,O=f.next()){R.index>N?(U=R,R=null):U=R.sibling;var Ne=u(g,R,O.value,w);if(Ne===null){R===null&&(R=U);break}e&&R&&Ne.alternate===null&&t(g,R),h=a(Ne,h,N),k===null?S=Ne:k.sibling=Ne,k=Ne,R=U}if(O.done)return n(g,R),H&&wt(g,N),S;if(R===null){for(;!O.done;N++,O=f.next())O=c(g,O.value,w),O!==null&&(h=a(O,h,N),k===null?S=O:k.sibling=O,k=O);return H&&wt(g,N),S}for(R=i(g,R);!O.done;N++,O=f.next())O=v(R,g,N,O.value,w),O!==null&&(e&&O.alternate!==null&&R.delete(O.key===null?N:O.key),h=a(O,h,N),k===null?S=O:k.sibling=O,k=O);return e&&R.forEach(function(dn){return t(g,dn)}),H&&wt(g,N),S}function x(g,h,f,w){if(typeof f=="object"&&f!==null&&f.type===qt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ri:e:{for(var S=f.key,k=h;k!==null;){if(k.key===S){if(S=f.type,S===qt){if(k.tag===7){n(g,k.sibling),h=r(k,f.props.children),h.return=g,g=h;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===$e&&bs(S)===k.type){n(g,k.sibling),h=r(k,f.props),h.ref=gn(g,k,f),h.return=g,g=h;break e}n(g,k);break}else t(g,k);k=k.sibling}f.type===qt?(h=Tt(f.props.children,g.mode,w,f.key),h.return=g,g=h):(w=Li(f.type,f.key,f.props,null,g.mode,w),w.ref=gn(g,h,f),w.return=g,g=w)}return o(g);case Mt:e:{for(k=f.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===f.containerInfo&&h.stateNode.implementation===f.implementation){n(g,h.sibling),h=r(h,f.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Vr(f,g.mode,w),h.return=g,g=h}return o(g);case $e:return k=f._init,x(g,h,k(f._payload),w)}if(En(f))return b(g,h,f,w);if(un(f))return E(g,h,f,w);fi(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,h!==null&&h.tag===6?(n(g,h.sibling),h=r(h,f),h.return=g,g=h):(n(g,h),h=Yr(f,g.mode,w),h.return=g,g=h),o(g)):n(g,h)}return x}var tn=dd(!0),cd=dd(!1),ji=ft(null),Yi=null,Ft=null,po=null;function mo(){po=Ft=Yi=null}function ho(e){var t=ji.current;B(ji),e._currentValue=t}function Ta(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Kt(e,t){Yi=e,po=Ft=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},Ft===null){if(Yi===null)throw Error(_(308));Ft=e,Yi.dependencies={lanes:0,firstContext:e}}else Ft=Ft.next=e;return t}var _t=null;function fo(e){_t===null?_t=[e]:_t.push(e)}function ud(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,fo(t)):(n.next=r.next,r.next=n),t.interleaved=n,Qe(e,i)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,M&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Qe(e,n)}return r=i.interleaved,r===null?(t.next=t,fo(i)):(t.next=r.next,r.next=t),i.interleaved=t,Qe(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,eo(e,n)}}function _s(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,i){var r=e.updateQueue;Ze=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var d=s,p=d.next;d.next=null,o===null?a=p:o.next=p,o=d;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=p:s.next=p,y.lastBaseUpdate=d))}if(a!==null){var c=r.baseState;o=0,y=p=d=null,s=a;do{var u=s.lane,v=s.eventTime;if((i&u)===u){y!==null&&(y=y.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,E=s;switch(u=t,v=n,E.tag){case 1:if(b=E.payload,typeof b=="function"){c=b.call(v,c,u);break e}c=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=E.payload,u=typeof b=="function"?b.call(v,c,u):b,u==null)break e;c=G({},c,u);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=r.effects,u===null?r.effects=[s]:u.push(s))}else v={eventTime:v,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(p=y=v,d=c):y=y.next=v,o|=u;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;u=s,s=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(1);if(y===null&&(d=c),r.baseState=d,r.firstBaseUpdate=p,r.lastBaseUpdate=y,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);xt|=o,e.lanes=o,e.memoizedState=c}}function Ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_(191,r));r.call(i)}}}var ei={},Ue=ft(ei),Gn=ft(ei),jn=ft(ei);function St(e){if(e===ei)throw Error(_(174));return e}function yo(e,t){switch(W(jn,t),W(Gn,e),W(Ue,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:aa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=aa(t,e)}B(Ue),W(Ue,t)}function nn(){B(Ue),B(Gn),B(jn)}function md(e){St(jn.current);var t=St(Ue.current),n=aa(t,e.type);t!==n&&(W(Gn,e),W(Ue,n))}function vo(e){Gn.current===e&&(B(Ue),B(Gn))}var z=ft(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ur=[];function wo(){for(var e=0;e<Ur.length;e++)Ur[e]._workInProgressVersionPrimary=null;Ur.length=0}var Ai=Ke.ReactCurrentDispatcher,Hr=Ke.ReactCurrentBatchConfig,Nt=0,F=null,X=null,$=null,Xi=!1,xn=!1,Yn=0,ap=0;function ie(){throw Error(_(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function bo(e,t,n,i,r,a){if(Nt=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ai.current=e===null||e.memoizedState===null?dp:cp,e=n(i,r),xn){a=0;do{if(xn=!1,Yn=0,25<=a)throw Error(_(301));a+=1,$=X=null,t.updateQueue=null,Ai.current=up,e=n(i,r)}while(xn)}if(Ai.current=Ki,t=X!==null&&X.next!==null,Nt=0,$=X=F=null,Xi=!1,t)throw Error(_(300));return e}function _o(){var e=Yn!==0;return Yn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $===null?F.memoizedState=$=e:$=$.next=e,$}function Re(){if(X===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=$===null?F.memoizedState:$.next;if(t!==null)$=t,X=e;else{if(e===null)throw Error(_(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},$===null?F.memoizedState=$=e:$=$.next=e}return $}function Vn(e,t){return typeof t=="function"?t(e):t}function zr(e){var t=Re(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var i=X,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,d=null,p=a;do{var y=p.lane;if((Nt&y)===y)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:e(i,p.action);else{var c={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(s=d=c,o=i):d=d.next=c,F.lanes|=y,xt|=y}p=p.next}while(p!==null&&p!==a);d===null?o=i:d.next=s,qe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseState=o,t.baseQueue=d,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do a=r.lane,F.lanes|=a,xt|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fr(e){var t=Re(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);qe(a,t.memoizedState)||(pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function hd(){}function fd(e,t){var n=F,i=Re(),r=t(),a=!qe(i.memoizedState,r);if(a&&(i.memoizedState=r,pe=!0),i=i.queue,So(vd.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||$!==null&&$.memoizedState.tag&1){if(n.flags|=2048,Qn(9,yd.bind(null,n,i,r,t),void 0,null),Z===null)throw Error(_(349));Nt&30||gd(n,t,r)}return r}function gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yd(e,t,n,i){t.value=n,t.getSnapshot=i,wd(t)&&Ed(e)}function vd(e,t,n){return n(function(){wd(t)&&Ed(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Ed(e){var t=Qe(e,1);t!==null&&Me(t,e,1,-1)}function ks(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=lp.bind(null,F,e),[t.memoizedState,e]}function Qn(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function bd(){return Re().memoizedState}function Ri(e,t,n,i){var r=We();F.flags|=e,r.memoizedState=Qn(1|t,n,void 0,i===void 0?null:i)}function cr(e,t,n,i){var r=Re();i=i===void 0?null:i;var a=void 0;if(X!==null){var o=X.memoizedState;if(a=o.destroy,i!==null&&Eo(i,o.deps)){r.memoizedState=Qn(t,n,a,i);return}}F.flags|=e,r.memoizedState=Qn(1|t,n,a,i)}function Ts(e,t){return Ri(8390656,8,e,t)}function So(e,t){return cr(2048,8,e,t)}function _d(e,t){return cr(4,2,e,t)}function Sd(e,t){return cr(4,4,e,t)}function kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){return n=n!=null?n.concat([e]):null,cr(4,4,kd.bind(null,t,e),n)}function ko(){}function Ad(e,t){var n=Re();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Eo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Rd(e,t){var n=Re();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Eo(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Nd(e,t,n){return Nt&21?(qe(n,t)||(n=Dl(),F.lanes|=n,xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function op(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var i=Hr.transition;Hr.transition={};try{e(!1),t()}finally{q=n,Hr.transition=i}}function xd(){return Re().memoizedState}function sp(e,t,n){var i=ct(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cd(e))Ld(t,n);else if(n=ud(e,t,n,i),n!==null){var r=le();Me(n,e,i,r),Od(n,t,i)}}function lp(e,t,n){var i=ct(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cd(e))Ld(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,qe(s,o)){var d=t.interleaved;d===null?(r.next=r,fo(t)):(r.next=d.next,d.next=r),t.interleaved=r;return}}catch{}finally{}n=ud(e,t,r,i),n!==null&&(r=le(),Me(n,e,i,r),Od(n,t,i))}}function Cd(e){var t=e.alternate;return e===F||t!==null&&t===F}function Ld(e,t){xn=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,eo(e,n)}}var Ki={readContext:Ae,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},dp={readContext:Ae,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=We();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=sp.bind(null,F,e),[i.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:ks,useDebugValue:ko,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ks(!1),t=e[0];return e=op.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=F,r=We();if(H){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Z===null)throw Error(_(349));Nt&30||gd(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,Ts(vd.bind(null,i,a,e),[e]),i.flags|=2048,Qn(9,yd.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=We(),t=Z.identifierPrefix;if(H){var n=Ge,i=Fe;n=(i&~(1<<32-De(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ap++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cp={readContext:Ae,useCallback:Ad,useContext:Ae,useEffect:So,useImperativeHandle:Td,useInsertionEffect:_d,useLayoutEffect:Sd,useMemo:Rd,useReducer:zr,useRef:bd,useState:function(){return zr(Vn)},useDebugValue:ko,useDeferredValue:function(e){var t=Re();return Nd(t,X.memoizedState,e)},useTransition:function(){var e=zr(Vn)[0],t=Re().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:fd,useId:xd,unstable_isNewReconciler:!1},up={readContext:Ae,useCallback:Ad,useContext:Ae,useEffect:So,useImperativeHandle:Td,useInsertionEffect:_d,useLayoutEffect:Sd,useMemo:Rd,useReducer:Fr,useRef:bd,useState:function(){return Fr(Vn)},useDebugValue:ko,useDeferredValue:function(e){var t=Re();return X===null?t.memoizedState=e:Nd(t,X.memoizedState,e)},useTransition:function(){var e=Fr(Vn)[0],t=Re().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:fd,useId:xd,unstable_isNewReconciler:!1};function Ce(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Aa(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ur={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=le(),r=ct(e),a=je(i,r);a.payload=t,n!=null&&(a.callback=n),t=lt(e,a,r),t!==null&&(Me(t,e,r,i),Ti(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=le(),r=ct(e),a=je(i,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=lt(e,a,r),t!==null&&(Me(t,e,r,i),Ti(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),i=ct(e),r=je(n,i);r.tag=2,t!=null&&(r.callback=t),t=lt(e,r,i),t!==null&&(Me(t,e,i,n),Ti(t,e,i))}};function As(e,t,n,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,i)||!Un(r,a):!0}function Dd(e,t,n){var i=!1,r=mt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ae(a):(r=he(t)?At:oe.current,i=t.contextTypes,a=(i=i!=null)?Zt(e,r):mt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ur,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function Rs(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ur.enqueueReplaceState(t,t.state,null)}function Ra(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},go(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=Ae(a):(a=he(t)?At:oe.current,r.context=Zt(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Aa(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&ur.enqueueReplaceState(r,r.state,null),Vi(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",i=t;do n+=Bc(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function Gr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function Md(e,t,n){n=je(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){$i||($i=!0,Pa=i),Na(e,t)},n}function qd(e,t,n){n=je(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Na(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Na(e,t),typeof i!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ns(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new pp;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=Ap.bind(null,e,t,n),t.then(e,e))}function xs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cs(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=je(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var mp=Ke.ReactCurrentOwner,pe=!1;function se(e,t,n,i){t.child=e===null?cd(t,null,n,i):tn(t,e.child,n,i)}function Ls(e,t,n,i,r){n=n.render;var a=t.ref;return Kt(t,r),i=bo(e,t,n,i,a,r),n=_o(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xe(e,t,r)):(H&&n&&lo(t),t.flags|=1,se(e,t,i,r),t.child)}function Os(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!Oo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Id(e,t,a,i,r)):(e=Li(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,i)&&e.ref===t.ref)return Xe(e,t,r)}return t.flags|=1,e=ut(a,i),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(Un(a,i)&&e.ref===t.ref)if(pe=!1,t.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,r)}return xa(e,t,n,i,r)}function Wd(e,t,n){var i=t.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(jt,ge),ge|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(jt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,W(jt,ge),ge|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,W(jt,ge),ge|=i;return se(e,t,r,n),t.child}function Pd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xa(e,t,n,i,r){var a=he(n)?At:oe.current;return a=Zt(t,a),Kt(t,r),n=bo(e,t,n,i,a,r),i=_o(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xe(e,t,r)):(H&&i&&lo(t),t.flags|=1,se(e,t,n,r),t.child)}function Ds(e,t,n,i,r){if(he(n)){var a=!0;zi(t)}else a=!1;if(Kt(t,r),t.stateNode===null)Ni(e,t),Dd(t,n,i),Ra(t,n,i,r),i=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var d=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ae(p):(p=he(n)?At:oe.current,p=Zt(t,p));var y=n.getDerivedStateFromProps,c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||d!==p)&&Rs(t,o,i,p),Ze=!1;var u=t.memoizedState;o.state=u,Vi(t,i,o,r),d=t.memoizedState,s!==i||u!==d||me.current||Ze?(typeof y=="function"&&(Aa(t,n,y,i),d=t.memoizedState),(s=Ze||As(t,n,s,i,u,d,p))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=d),o.props=i,o.state=d,o.context=p,i=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,pd(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:Ce(t.type,s),o.props=p,c=t.pendingProps,u=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ae(d):(d=he(n)?At:oe.current,d=Zt(t,d));var v=n.getDerivedStateFromProps;(y=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==c||u!==d)&&Rs(t,o,i,d),Ze=!1,u=t.memoizedState,o.state=u,Vi(t,i,o,r);var b=t.memoizedState;s!==c||u!==b||me.current||Ze?(typeof v=="function"&&(Aa(t,n,v,i),b=t.memoizedState),(p=Ze||As(t,n,p,i,u,b,d)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,b,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,b,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=b),o.props=i,o.state=b,o.context=d,i=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return Ca(e,t,n,i,a,r)}function Ca(e,t,n,i,r,a){Pd(e,t);var o=(t.flags&128)!==0;if(!i&&!o)return r&&vs(t,n,!1),Xe(e,t,a);i=t.stateNode,mp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,a),t.child=tn(t,null,s,a)):se(e,t,s,a),t.memoizedState=i.state,r&&vs(t,n,!0),t.child}function Bd(e){var t=e.stateNode;t.pendingContext?ys(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ys(e,t.context,!1),yo(e,t.containerInfo)}function Ms(e,t,n,i,r){return en(),uo(r),t.flags|=256,se(e,t,n,i),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ud(e,t,n){var i=t.pendingProps,r=z.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),W(z,r&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=hr(o,i,0,null),e=Tt(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Oa(n),t.memoizedState=La,e):To(t,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return hp(e,t,o,i,s,r,n);if(a){a=i.fallback,o=t.mode,r=e.child,s=r.sibling;var d={mode:"hidden",children:i.children};return!(o&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=d,t.deletions=null):(i=ut(r,d),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=ut(s,a):(a=Tt(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o=o===null?Oa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=La,i}return a=e.child,e=a.sibling,i=ut(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function To(e,t){return t=hr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,i){return i!==null&&uo(i),tn(t,e.child,null,n),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,i,r,a,o){if(n)return t.flags&256?(t.flags&=-257,i=Gr(Error(_(422))),gi(e,t,o,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,r=t.mode,i=hr({mode:"visible",children:i.children},r,0,null),a=Tt(a,r,o,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Oa(o),t.memoizedState=La,a);if(!(t.mode&1))return gi(e,t,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(_(419)),i=Gr(a,i,void 0),gi(e,t,o,i)}if(s=(o&e.childLanes)!==0,pe||s){if(i=Z,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Qe(e,r),Me(i,e,r,-1))}return Lo(),i=Gr(Error(_(421))),gi(e,t,o,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Rp.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,ye=st(r.nextSibling),ve=t,H=!0,Oe=null,e!==null&&(_e[Se++]=Fe,_e[Se++]=Ge,_e[Se++]=Rt,Fe=e.id,Ge=e.overflow,Rt=t),t=To(t,i.children),t.flags|=4096,t)}function qs(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ta(e.return,t,n)}function jr(e,t,n,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Hd(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(se(e,t,i.children,n),i=z.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qs(e,n,t);else if(e.tag===19)qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(W(z,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),jr(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Qi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}jr(t,!0,n,null,a);break;case"together":jr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fp(e,t,n){switch(t.tag){case 3:Bd(t),en();break;case 5:md(t);break;case 1:he(t.type)&&zi(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;W(ji,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(W(z,z.current&1),t.flags|=128,null):n&t.child.childLanes?Ud(e,t,n):(W(z,z.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);W(z,z.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return Hd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),W(z,z.current),i)break;return null;case 22:case 23:return t.lanes=0,Wd(e,t,n)}return Xe(e,t,n)}var zd,Da,Fd,Gd;zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Da=function(){};Fd=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,St(Ue.current);var a=null;switch(n){case"input":r=ta(e,r),i=ta(e,i),a=[];break;case"select":r=G({},r,{value:void 0}),i=G({},i,{value:void 0}),a=[];break;case"textarea":r=ra(e,r),i=ra(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ui)}oa(n,i);var o;n=null;for(p in r)if(!i.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var s=r[p];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Dn.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in i){var d=i[p];if(s=r!=null?r[p]:void 0,i.hasOwnProperty(p)&&d!==s&&(d!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&s[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(a||(a=[]),a.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(a=a||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&P("scroll",e),a||s===d||(a=[])):(a=a||[]).push(p,d))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};Gd=function(e,t,n,i){n!==i&&(t.flags|=4)};function yn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function gp(e,t,n){var i=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return he(t.type)&&Hi(),re(t),null;case 3:return i=t.stateNode,nn(),B(me),B(oe),wo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Ha(Oe),Oe=null))),Da(e,t),re(t),null;case 5:vo(t);var r=St(jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fd(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(_(166));return re(t),null}if(e=St(Ue.current),hi(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[Pe]=t,i[Fn]=a,e=(t.mode&1)!==0,n){case"dialog":P("cancel",i),P("close",i);break;case"iframe":case"object":case"embed":P("load",i);break;case"video":case"audio":for(r=0;r<_n.length;r++)P(_n[r],i);break;case"source":P("error",i);break;case"img":case"image":case"link":P("error",i),P("load",i);break;case"details":P("toggle",i);break;case"input":Go(i,a),P("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},P("invalid",i);break;case"textarea":Yo(i,a),P("invalid",i)}oa(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&mi(i.textContent,s,e),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&mi(i.textContent,s,e),r=["children",""+s]):Dn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&P("scroll",i)}switch(n){case"input":ai(i),jo(i,a,!0);break;case"textarea":ai(i),Vo(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ui)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(n,{is:i.is}):(e=o.createElement(n),n==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,n),e[Pe]=t,e[Fn]=i,zd(e,t,!1,!1),t.stateNode=e;e:{switch(o=sa(n,i),n){case"dialog":P("cancel",e),P("close",e),r=i;break;case"iframe":case"object":case"embed":P("load",e),r=i;break;case"video":case"audio":for(r=0;r<_n.length;r++)P(_n[r],e);r=i;break;case"source":P("error",e),r=i;break;case"img":case"image":case"link":P("error",e),P("load",e),r=i;break;case"details":P("toggle",e),r=i;break;case"input":Go(e,i),r=ta(e,i),P("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=G({},i,{value:void 0}),P("invalid",e);break;case"textarea":Yo(e,i),r=ra(e,i),P("invalid",e);break;default:r=i}oa(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var d=s[a];a==="style"?bl(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&wl(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Mn(e,d):typeof d=="number"&&Mn(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Dn.hasOwnProperty(a)?d!=null&&a==="onScroll"&&P("scroll",e):d!=null&&Qa(e,a,d,o))}switch(n){case"input":ai(e),jo(e,i,!1);break;case"textarea":ai(e),Vo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+pt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Yt(e,!!i.multiple,a,!1):i.defaultValue!=null&&Yt(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ui)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Gd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(_(166));if(n=St(jn.current),St(Ue.current),hi(t)){if(i=t.stateNode,n=t.memoizedProps,i[Pe]=t,(a=i.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:mi(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Pe]=t,t.stateNode=i}return re(t),null;case 13:if(B(z),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ye!==null&&t.mode&1&&!(t.flags&128))ld(),en(),t.flags|=98560,a=!1;else if(a=hi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[Pe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),a=!1}else Oe!==null&&(Ha(Oe),Oe=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||z.current&1?K===0&&(K=3):Lo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return nn(),Da(e,t),e===null&&Hn(t.stateNode.containerInfo),re(t),null;case 10:return ho(t.type._context),re(t),null;case 17:return he(t.type)&&Hi(),re(t),null;case 19:if(B(z),a=t.memoizedState,a===null)return re(t),null;if(i=(t.flags&128)!==0,o=a.rendering,o===null)if(i)yn(a,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qi(e),o!==null){for(t.flags|=128,yn(a,!1),i=o.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(z,z.current&1|2),t.child}e=e.sibling}a.tail!==null&&V()>an&&(t.flags|=128,i=!0,yn(a,!1),t.lanes=4194304)}else{if(!i)if(e=Qi(o),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!H)return re(t),null}else 2*V()-a.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,i=!0,yn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=V(),t.sibling=null,n=z.current,W(z,i?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Co(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?ge&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function yp(e,t){switch(co(t),t.tag){case 1:return he(t.type)&&Hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),B(me),B(oe),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vo(t),null;case 13:if(B(z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(z),null;case 4:return nn(),null;case 10:return ho(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var yi=!1,ae=!1,vp=typeof WeakSet=="function"?WeakSet:Set,T=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){j(e,t,i)}else n.current=null}function Ma(e,t,n){try{n()}catch(i){j(e,t,i)}}var Is=!1;function wp(e,t){if(ya=Wi,e=Xl(),so(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,d=-1,p=0,y=0,c=e,u=null;t:for(;;){for(var v;c!==n||r!==0&&c.nodeType!==3||(s=o+r),c!==a||i!==0&&c.nodeType!==3||(d=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)u=c,c=v;for(;;){if(c===e)break t;if(u===n&&++p===r&&(s=o),u===a&&++y===i&&(d=o),(v=c.nextSibling)!==null)break;c=u,u=c.parentNode}c=v}n=s===-1||d===-1?null:{start:s,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(va={focusedElem:e,selectionRange:n},Wi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var E=b.memoizedProps,x=b.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?E:Ce(t.type,E),x);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){j(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return b=Is,Is=!1,b}function Cn(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&Ma(t,n,a)}r=r.next}while(r!==i)}}function pr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function qa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jd(e){var t=e.alternate;t!==null&&(e.alternate=null,jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pe],delete t[Fn],delete t[ba],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function Ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ia(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ui));else if(i!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}function Wa(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}var ee=null,Le=!1;function Je(e,t,n){for(n=n.child;n!==null;)Vd(e,t,n),n=n.sibling}function Vd(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(rr,n)}catch{}switch(n.tag){case 5:ae||Gt(n,t);case 6:var i=ee,r=Le;ee=null,Je(e,t,n),ee=i,Le=r,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?Pr(e.parentNode,n):e.nodeType===1&&Pr(e,n),Pn(e)):Pr(ee,n.stateNode));break;case 4:i=ee,r=Le,ee=n.stateNode.containerInfo,Le=!0,Je(e,t,n),ee=i,Le=r;break;case 0:case 11:case 14:case 15:if(!ae&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ma(n,t,o),r=r.next}while(r!==i)}Je(e,t,n);break;case 1:if(!ae&&(Gt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){j(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ae=(i=ae)||n.memoizedState!==null,Je(e,t,n),ae=i):Je(e,t,n);break;default:Je(e,t,n)}}function Ps(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(i){var r=Np.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function xe(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,Le=!1;break e;case 3:ee=s.stateNode.containerInfo,Le=!0;break e;case 4:ee=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(ee===null)throw Error(_(160));Vd(a,o,r),ee=null,Le=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(p){j(r,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}function Qd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xe(t,e),Ie(e),i&4){try{Cn(3,e,e.return),pr(3,e)}catch(E){j(e,e.return,E)}try{Cn(5,e,e.return)}catch(E){j(e,e.return,E)}}break;case 1:xe(t,e),Ie(e),i&512&&n!==null&&Gt(n,n.return);break;case 5:if(xe(t,e),Ie(e),i&512&&n!==null&&Gt(n,n.return),e.flags&32){var r=e.stateNode;try{Mn(r,"")}catch(E){j(e,e.return,E)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&gl(r,a),sa(s,o);var p=sa(s,a);for(o=0;o<d.length;o+=2){var y=d[o],c=d[o+1];y==="style"?bl(r,c):y==="dangerouslySetInnerHTML"?wl(r,c):y==="children"?Mn(r,c):Qa(r,y,c,p)}switch(s){case"input":na(r,a);break;case"textarea":yl(r,a);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Yt(r,!!a.multiple,v,!1):u!==!!a.multiple&&(a.defaultValue!=null?Yt(r,!!a.multiple,a.defaultValue,!0):Yt(r,!!a.multiple,a.multiple?[]:"",!1))}r[Fn]=a}catch(E){j(e,e.return,E)}}break;case 6:if(xe(t,e),Ie(e),i&4){if(e.stateNode===null)throw Error(_(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(E){j(e,e.return,E)}}break;case 3:if(xe(t,e),Ie(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pn(t.containerInfo)}catch(E){j(e,e.return,E)}break;case 4:xe(t,e),Ie(e);break;case 13:xe(t,e),Ie(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(No=V())),i&4&&Ps(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(p=ae)||y,xe(t,e),ae=p):xe(t,e),Ie(e),i&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(c=T=y;T!==null;){switch(u=T,v=u.child,u.tag){case 0:case 11:case 14:case 15:Cn(4,u,u.return);break;case 1:Gt(u,u.return);var b=u.stateNode;if(typeof b.componentWillUnmount=="function"){i=u,n=u.return;try{t=i,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(E){j(i,n,E)}}break;case 5:Gt(u,u.return);break;case 22:if(u.memoizedState!==null){Us(c);continue}}v!==null?(v.return=u,T=v):Us(c)}y=y.sibling}e:for(y=null,c=e;;){if(c.tag===5){if(y===null){y=c;try{r=c.stateNode,p?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=c.stateNode,d=c.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=El("display",o))}catch(E){j(e,e.return,E)}}}else if(c.tag===6){if(y===null)try{c.stateNode.nodeValue=p?"":c.memoizedProps}catch(E){j(e,e.return,E)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;y===c&&(y=null),c=c.return}y===c&&(y=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:xe(t,e),Ie(e),i&4&&Ps(e);break;case 21:break;default:xe(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yd(n)){var i=n;break e}n=n.return}throw Error(_(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Mn(r,""),i.flags&=-33);var a=Ws(e);Wa(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Ws(e);Ia(e,s,o);break;default:throw Error(_(161))}}catch(d){j(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ep(e,t,n){T=e,Xd(e)}function Xd(e,t,n){for(var i=(e.mode&1)!==0;T!==null;){var r=T,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yi;if(!o){var s=r.alternate,d=s!==null&&s.memoizedState!==null||ae;s=yi;var p=ae;if(yi=o,(ae=d)&&!p)for(T=r;T!==null;)o=T,d=o.child,o.tag===22&&o.memoizedState!==null?Hs(r):d!==null?(d.return=o,T=d):Hs(r);for(;a!==null;)T=a,Xd(a),a=a.sibling;T=r,yi=s,ae=p}Bs(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,T=a):Bs(e)}}function Bs(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||pr(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!ae)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ce(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ss(t,a,i);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ss(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var c=y.dehydrated;c!==null&&Pn(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ae||t.flags&512&&qa(t)}catch(u){j(t,t.return,u)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Us(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Hs(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pr(4,t)}catch(d){j(t,n,d)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(d){j(t,r,d)}}var a=t.return;try{qa(t)}catch(d){j(t,a,d)}break;case 5:var o=t.return;try{qa(t)}catch(d){j(t,o,d)}}}catch(d){j(t,t.return,d)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var bp=Math.ceil,Ji=Ke.ReactCurrentDispatcher,Ao=Ke.ReactCurrentOwner,Te=Ke.ReactCurrentBatchConfig,M=0,Z=null,Q=null,te=0,ge=0,jt=ft(0),K=0,Xn=null,xt=0,mr=0,Ro=0,Ln=null,ue=null,No=0,an=1/0,He=null,$i=!1,Pa=null,dt=null,vi=!1,it=null,Zi=0,On=0,Ba=null,xi=-1,Ci=0;function le(){return M&6?V():xi!==-1?xi:xi=V()}function ct(e){return e.mode&1?M&2&&te!==0?te&-te:rp.transition!==null?(Ci===0&&(Ci=Dl()),Ci):(e=q,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e):1}function Me(e,t,n,i){if(50<On)throw On=0,Ba=null,Error(_(185));Jn(e,n,i),(!(M&2)||e!==Z)&&(e===Z&&(!(M&2)&&(mr|=n),K===4&&tt(e,te)),fe(e,i),n===1&&M===0&&!(t.mode&1)&&(an=V()+500,dr&&gt()))}function fe(e,t){var n=e.callbackNode;ru(e,t);var i=Ii(e,e===Z?te:0);if(i===0)n!==null&&Ko(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Ko(n),t===1)e.tag===0?ip(zs.bind(null,e)):ad(zs.bind(null,e)),Zu(function(){!(M&6)&&gt()}),n=null;else{switch(Ml(i)){case 1:n=Za;break;case 4:n=Ll;break;case 16:n=qi;break;case 536870912:n=Ol;break;default:n=qi}n=ic(n,Kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kd(e,t){if(xi=-1,Ci=0,M&6)throw Error(_(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var i=Ii(e,e===Z?te:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=er(e,i);else{t=i;var r=M;M|=2;var a=$d();(Z!==e||te!==t)&&(He=null,an=V()+500,kt(e,t));do try{kp();break}catch(s){Jd(e,s)}while(1);mo(),Ji.current=a,M=r,Q!==null?t=0:(Z=null,te=0,t=K)}if(t!==0){if(t===2&&(r=pa(e),r!==0&&(i=r,t=Ua(e,r))),t===1)throw n=Xn,kt(e,0),tt(e,i),fe(e,V()),n;if(t===6)tt(e,i);else{if(r=e.current.alternate,!(i&30)&&!_p(r)&&(t=er(e,i),t===2&&(a=pa(e),a!==0&&(i=a,t=Ua(e,a))),t===1))throw n=Xn,kt(e,0),tt(e,i),fe(e,V()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(_(345));case 2:Et(e,ue,He);break;case 3:if(tt(e,i),(i&130023424)===i&&(t=No+500-V(),10<t)){if(Ii(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){le(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ea(Et.bind(null,e,ue,He),t);break}Et(e,ue,He);break;case 4:if(tt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var o=31-De(i);a=1<<o,o=t[o],o>r&&(r=o),i&=~a}if(i=r,i=V()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bp(i/1960))-i,10<i){e.timeoutHandle=Ea(Et.bind(null,e,ue,He),i);break}Et(e,ue,He);break;case 5:Et(e,ue,He);break;default:throw Error(_(329))}}}return fe(e,V()),e.callbackNode===n?Kd.bind(null,e):null}function Ua(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(kt(e,t).flags|=256),e=er(e,t),e!==2&&(t=ue,ue=n,t!==null&&Ha(t)),e}function Ha(e){ue===null?ue=e:ue.push.apply(ue,e)}function _p(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!qe(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ro,t&=~mr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),i=1<<n;e[n]=-1,t&=~i}}function zs(e){if(M&6)throw Error(_(327));Jt();var t=Ii(e,0);if(!(t&1))return fe(e,V()),null;var n=er(e,t);if(e.tag!==0&&n===2){var i=pa(e);i!==0&&(t=i,n=Ua(e,i))}if(n===1)throw n=Xn,kt(e,0),tt(e,t),fe(e,V()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,ue,He),fe(e,V()),null}function xo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(an=V()+500,dr&&gt())}}function Ct(e){it!==null&&it.tag===0&&!(M&6)&&Jt();var t=M;M|=1;var n=Te.transition,i=q;try{if(Te.transition=null,q=1,e)return e()}finally{q=i,Te.transition=n,M=t,!(M&6)&&gt()}}function Co(){ge=jt.current,B(jt)}function kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$u(n)),Q!==null)for(n=Q.return;n!==null;){var i=n;switch(co(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hi();break;case 3:nn(),B(me),B(oe),wo();break;case 5:vo(i);break;case 4:nn();break;case 13:B(z);break;case 19:B(z);break;case 10:ho(i.type._context);break;case 22:case 23:Co()}n=n.return}if(Z=e,Q=e=ut(e.current,null),te=ge=t,K=0,Xn=null,Ro=mr=xt=0,ue=Ln=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}_t=null}return e}function Jd(e,t){do{var n=Q;try{if(mo(),Ai.current=Ki,Xi){for(var i=F.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xi=!1}if(Nt=0,$=X=F=null,xn=!1,Yn=0,Ao.current=null,n===null||n.return===null){K=1,Xn=t,Q=null;break}e:{var a=e,o=n.return,s=n,d=t;if(t=te,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,y=s,c=y.tag;if(!(y.mode&1)&&(c===0||c===11||c===15)){var u=y.alternate;u?(y.updateQueue=u.updateQueue,y.memoizedState=u.memoizedState,y.lanes=u.lanes):(y.updateQueue=null,y.memoizedState=null)}var v=xs(o);if(v!==null){v.flags&=-257,Cs(v,o,s,a,t),v.mode&1&&Ns(a,p,t),t=v,d=p;var b=t.updateQueue;if(b===null){var E=new Set;E.add(d),t.updateQueue=E}else b.add(d);break e}else{if(!(t&1)){Ns(a,p,t),Lo();break e}d=Error(_(426))}}else if(H&&s.mode&1){var x=xs(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Cs(x,o,s,a,t),uo(rn(d,s));break e}}a=d=rn(d,s),K!==4&&(K=2),Ln===null?Ln=[a]:Ln.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Md(a,d,t);_s(a,g);break e;case 1:s=d;var h=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(dt===null||!dt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=qd(a,s,t);_s(a,w);break e}}a=a.return}while(a!==null)}ec(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(1)}function $d(){var e=Ji.current;return Ji.current=Ki,e===null?Ki:e}function Lo(){(K===0||K===3||K===2)&&(K=4),Z===null||!(xt&268435455)&&!(mr&268435455)||tt(Z,te)}function er(e,t){var n=M;M|=2;var i=$d();(Z!==e||te!==t)&&(He=null,kt(e,t));do try{Sp();break}catch(r){Jd(e,r)}while(1);if(mo(),M=n,Ji.current=i,Q!==null)throw Error(_(261));return Z=null,te=0,K}function Sp(){for(;Q!==null;)Zd(Q)}function kp(){for(;Q!==null&&!Xc();)Zd(Q)}function Zd(e){var t=nc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?ec(e):Q=t,Ao.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yp(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Q=null;return}}else if(n=gp(n,t,ge),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);K===0&&(K=5)}function Et(e,t,n){var i=q,r=Te.transition;try{Te.transition=null,q=1,Tp(e,t,n,i)}finally{Te.transition=r,q=i}return null}function Tp(e,t,n,i){do Jt();while(it!==null);if(M&6)throw Error(_(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(au(e,a),e===Z&&(Q=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vi||(vi=!0,ic(qi,function(){return Jt(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Te.transition,Te.transition=null;var o=q;q=1;var s=M;M|=4,Ao.current=null,wp(e,n),Qd(n,e),ju(va),Wi=!!ya,va=ya=null,e.current=n,Ep(n),Kc(),M=s,q=o,Te.transition=a}else e.current=n;if(vi&&(vi=!1,it=e,Zi=r),a=e.pendingLanes,a===0&&(dt=null),Zc(n.stateNode),fe(e,V()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($i)throw $i=!1,e=Pa,Pa=null,e;return Zi&1&&e.tag!==0&&Jt(),a=e.pendingLanes,a&1?e===Ba?On++:(On=0,Ba=e):On=0,gt(),null}function Jt(){if(it!==null){var e=Ml(Zi),t=Te.transition,n=q;try{if(Te.transition=null,q=16>e?16:e,it===null)var i=!1;else{if(e=it,it=null,Zi=0,M&6)throw Error(_(331));var r=M;for(M|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var d=0;d<s.length;d++){var p=s[d];for(T=p;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Cn(8,y,a)}var c=y.child;if(c!==null)c.return=y,T=c;else for(;T!==null;){y=T;var u=y.sibling,v=y.return;if(jd(y),y===p){T=null;break}if(u!==null){u.return=v,T=u;break}T=v}}}var b=a.alternate;if(b!==null){var E=b.child;if(E!==null){b.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Cn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,T=g;break e}T=a.return}}var h=e.current;for(T=h;T!==null;){o=T;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,T=f;else e:for(o=h;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pr(9,s)}}catch(S){j(s,s.return,S)}if(s===o){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(M=r,gt(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(rr,e)}catch{}i=!0}return i}finally{q=n,Te.transition=t}}return!1}function Fs(e,t,n){t=rn(n,t),t=Md(e,t,1),e=lt(e,t,1),t=le(),e!==null&&(Jn(e,1,t),fe(e,t))}function j(e,t,n){if(e.tag===3)Fs(e,e,n);else for(;t!==null;){if(t.tag===3){Fs(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dt===null||!dt.has(i))){e=rn(n,e),e=qd(t,e,1),t=lt(t,e,1),e=le(),t!==null&&(Jn(t,1,e),fe(t,e));break}}t=t.return}}function Ap(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(K===4||K===3&&(te&130023424)===te&&500>V()-No?kt(e,0):Ro|=n),fe(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=le();e=Qe(e,t),e!==null&&(Jn(e,t,n),fe(e,n))}function Rp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Np(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(_(314))}i!==null&&i.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,fp(e,t,n);pe=!!(e.flags&131072)}else pe=!1,H&&t.flags&1048576&&od(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ni(e,t),e=t.pendingProps;var r=Zt(t,oe.current);Kt(t,n),r=bo(null,t,i,e,r,n);var a=_o();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(i)?(a=!0,zi(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,go(t),r.updater=ur,t.stateNode=r,r._reactInternals=t,Ra(t,i,e,n),t=Ca(null,t,i,!0,a,n)):(t.tag=0,H&&a&&lo(t),se(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=Cp(i),e=Ce(i,e),r){case 0:t=xa(null,t,i,e,n);break e;case 1:t=Ds(null,t,i,e,n);break e;case 11:t=Ls(null,t,i,e,n);break e;case 14:t=Os(null,t,i,Ce(i.type,e),n);break e}throw Error(_(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ce(i,r),xa(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ce(i,r),Ds(e,t,i,r,n);case 3:e:{if(Bd(t),e===null)throw Error(_(387));i=t.pendingProps,a=t.memoizedState,r=a.element,pd(e,t),Vi(t,i,null,n);var o=t.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=rn(Error(_(423)),t),t=Ms(e,t,i,n,r);break e}else if(i!==r){r=rn(Error(_(424)),t),t=Ms(e,t,i,n,r);break e}else for(ye=st(t.stateNode.containerInfo.firstChild),ve=t,H=!0,Oe=null,n=cd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),i===r){t=Xe(e,t,n);break e}se(e,t,i,n)}t=t.child}return t;case 5:return md(t),e===null&&ka(t),i=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,wa(i,r)?o=null:a!==null&&wa(i,a)&&(t.flags|=32),Pd(e,t),se(e,t,o,n),t.child;case 6:return e===null&&ka(t),null;case 13:return Ud(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=tn(t,null,i,n):se(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ce(i,r),Ls(e,t,i,r,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,a=t.memoizedProps,o=r.value,W(ji,i._currentValue),i._currentValue=o,a!==null)if(qe(a.value,o)){if(a.children===r.children&&!me.current){t=Xe(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var d=s.firstContext;d!==null;){if(d.context===i){if(a.tag===1){d=je(-1,n&-n),d.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?d.next=d:(d.next=y.next,y.next=d),p.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Ta(a.return,n,t),s.lanes|=n;break}d=d.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ta(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}se(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Kt(t,n),r=Ae(r),i=i(r),t.flags|=1,se(e,t,i,n),t.child;case 14:return i=t.type,r=Ce(i,t.pendingProps),r=Ce(i.type,r),Os(e,t,i,r,n);case 15:return Id(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Ce(i,r),Ni(e,t),t.tag=1,he(i)?(e=!0,zi(t)):e=!1,Kt(t,n),Dd(t,i,r),Ra(t,i,r,n),Ca(null,t,i,!0,e,n);case 19:return Hd(e,t,n);case 22:return Wd(e,t,n)}throw Error(_(156,t.tag))};function ic(e,t){return Cl(e,t)}function xp(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,i){return new xp(e,t,n,i)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cp(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ka)return 11;if(e===Ja)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,i,r,a){var o=2;if(i=e,typeof e=="function")Oo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qt:return Tt(n.children,r,a,t);case Xa:o=8,r|=8;break;case Jr:return e=ke(12,n,t,r|2),e.elementType=Jr,e.lanes=a,e;case $r:return e=ke(13,n,t,r),e.elementType=$r,e.lanes=a,e;case Zr:return e=ke(19,n,t,r),e.elementType=Zr,e.lanes=a,e;case ml:return hr(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ul:o=10;break e;case pl:o=9;break e;case Ka:o=11;break e;case Ja:o=14;break e;case $e:o=16,i=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ke(o,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function Tt(e,t,n,i){return e=ke(7,e,i,t),e.lanes=n,e}function hr(e,t,n,i){return e=ke(22,e,i,t),e.elementType=ml,e.lanes=n,e.stateNode={isHidden:!1},e}function Yr(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Vr(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lp(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rr(0),this.expirationTimes=Rr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Do(e,t,n,i,r,a,o,s,d){return e=new Lp(e,t,n,s,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ke(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(a),e}function Op(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function rc(e){if(!e)return mt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(he(n))return rd(e,n,t)}return t}function ac(e,t,n,i,r,a,o,s,d){return e=Do(n,i,!0,e,r,a,o,s,d),e.context=rc(null),n=e.current,i=le(),r=ct(n),a=je(i,r),a.callback=t??null,lt(n,a,r),e.current.lanes=r,Jn(e,r,i),fe(e,i),e}function fr(e,t,n,i){var r=t.current,a=le(),o=ct(r);return n=rc(n),t.context===null?t.context=n:t.pendingContext=n,t=je(a,o),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=lt(r,t,o),e!==null&&(Me(e,r,o,a),Ti(e,r,o)),o}function tr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mo(e,t){Gs(e,t),(e=e.alternate)&&Gs(e,t)}function Dp(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function qo(e){this._internalRoot=e}gr.prototype.render=qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));fr(e,t,null,null)};gr.prototype.unmount=qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ct(function(){fr(null,e,null,null)}),t[Ve]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Bl(e)}};function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function js(){}function Mp(e,t,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var p=tr(o);a.call(p)}}var o=ac(t,i,e,0,null,!1,!1,"",js);return e._reactRootContainer=o,e[Ve]=o.current,Hn(e.nodeType===8?e.parentNode:e),Ct(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var p=tr(d);s.call(p)}}var d=Do(e,0,!1,null,null,!1,!1,"",js);return e._reactRootContainer=d,e[Ve]=d.current,Hn(e.nodeType===8?e.parentNode:e),Ct(function(){fr(t,d,n,i)}),d}function vr(e,t,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var d=tr(o);s.call(d)}}fr(t,o,e,r)}else o=Mp(n,t,e,r,i);return tr(o)}ql=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bn(t.pendingLanes);n!==0&&(eo(t,n|1),fe(t,V()),!(M&6)&&(an=V()+500,gt()))}break;case 13:Ct(function(){var i=Qe(e,1);if(i!==null){var r=le();Me(i,e,1,r)}}),Mo(e,1)}};to=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=le();Me(t,e,134217728,n)}Mo(e,134217728)}};Il=function(e){if(e.tag===13){var t=ct(e),n=Qe(e,t);if(n!==null){var i=le();Me(n,e,t,i)}Mo(e,t)}};Wl=function(){return q};Pl=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};da=function(e,t,n){switch(t){case"input":if(na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=lr(i);if(!r)throw Error(_(90));fl(i),na(i,r)}}}break;case"textarea":yl(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};kl=xo;Tl=Ct;var qp={usingClientEntryPoint:!1,Events:[Zn,Bt,lr,_l,Sl,xo]},vn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ip={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nl(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{rr=wi.inject(Ip),Be=wi}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Io(t))throw Error(_(200));return Op(e,t,null,n)};Ee.createRoot=function(e,t){if(!Io(e))throw Error(_(299));var n=!1,i="",r=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Do(e,1,!1,null,null,n,!1,i,r),e[Ve]=t.current,Hn(e.nodeType===8?e.parentNode:e),new qo(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Nl(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ct(e)};Ee.hydrate=function(e,t,n){if(!yr(t))throw Error(_(200));return vr(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Io(e))throw Error(_(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ac(t,null,e,1,n??null,r,!1,a,o),e[Ve]=t.current,Hn(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new gr(t)};Ee.render=function(e,t,n){if(!yr(t))throw Error(_(200));return vr(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!yr(e))throw Error(_(40));return e._reactRootContainer?(Ct(function(){vr(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};Ee.unstable_batchedUpdates=xo;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!yr(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return vr(e,t,n,!1,i)};Ee.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),sl.exports=Ee;var Wp=sl.exports,Ys=Wp;Xr.createRoot=Ys.createRoot,Xr.hydrateRoot=Ys.hydrateRoot;const nr={stats:{label:"Statistics",color:"#F59E0B",emoji:"📊"},sql:{label:"SQL",color:"#3B82F6",emoji:"🗃️"},python:{label:"Python",color:"#10B981",emoji:"🐍"},abtest:{label:"A/B Testing",color:"#8B5CF6",emoji:"🧪"},causal:{label:"Causal Inference",color:"#06B6D4",emoji:"🔬"},product:{label:"Product & Metrics",color:"#EF4444",emoji:"💡"},ml:{label:"ML Models",color:"#F97316",emoji:"🤖"},dl:{label:"Deep Learning",color:"#EC4899",emoji:"🧠"},review:{label:"Weekly Review",color:"#64748B",emoji:"📝"}},Pp={1:"Week 1 — Statistics & SQL Foundations",2:"Week 2 — SQL Advanced + Python",3:"Week 3 — ML Deep Dive",4:"Week 4 — A/B Testing + Causal + Product",5:"Week 5 — Rec Systems + LeetCode"},lc={Meta:"#1877F2","Meta/All":"#1877F2",Airbnb:"#FF5A5F",Netflix:"#E50914",Spotify:"#1DB954",Reddit:"#FF4500",Expedia:"#003580",Disney:"#1C5BA3"},m={bg:"#0f0c29",card:"rgba(255,255,255,.04)",border:"rgba(255,255,255,.08)",text:"#e2e8f0",muted:"#94a3b8",dim:"#64748b",purple:"#a78bfa",green:"#10b981",red:"#ef4444",yellow:"#f59e0b"},Sn=[{day:1,week:1,cat:"stats",title:"Probability Fundamentals",topics:["Conditional probability, Bayes' theorem — P(A|B) = P(B|A)·P(A)/P(B)","Permutations & combinations","Independence vs mutual exclusivity","Classic puzzles: birthday paradox, elevator buttons, meetings in rooms"],resources:["Think Stats 2e (free) — greenteapress.com/thinkstats2","Khan Academy: Conditional Probability — khanacademy.org/math/statistics-probability/probability-library","StatQuest: Bayes Theorem — youtube.com/watch?v=9wCnvr7Xw4E"],qKey:"statsQ",qs:[0,8],questions:[{q:"Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",a:"P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY) = (2/3)³·0.25 / [(2/3)³·0.25 + (1/3)³·0.75] = 8·0.25 / (8·0.25 + 0.75) = 2 / (2+0.75) ≈ 8/11 ≈ 0.727.",co:"Meta",freq:"High"},{q:"A fair coin and an unfair coin (both sides tails) — you pick one at random, flip 5 times, see all tails. What is the probability you picked the unfair coin?",a:"P(unfair|TTTTT) = P(TTTTT|unfair)·P(unfair) / P(TTTTT) = 1·0.5 / [1·0.5 + (0.5)^5·0.5] = 0.5 / (0.5 + 0.0156) ≈ 32/33 ≈ 0.97.",co:"Meta/All",freq:"High"},{q:"A jar has 1000 coins: 999 fair, 1 double-headed. You pick a coin at random and flip 10 heads. What is the probability the next flip is also heads?",a:"P(fair|10H)≈0.4939, P(unfair|10H)≈0.5061. P(next H) = P(fair|10H)·0.5 + P(unfair|10H)·1 = 0.4939·0.5 + 0.5061 ≈ 0.753.",co:"Meta/All",freq:"High"},{q:"A couple has two children, at least one of which is a girl. What is the probability both children are girls?",a:"Sample space: BB, BG, GB, GG. Excluding BB (no girls), we have 3 equally likely outcomes. Only GG = both girls. P(GG | at least one girl) = 1/3.",co:"Meta/All",freq:"High"},{q:"In any 15-minute interval, there is a 20% probability of seeing at least one shooting star. What is the probability of seeing at least one shooting star in an hour?",a:"P(none in 15 min) = 0.8. P(none in 1 hour) = 0.8^4 = 0.4096. P(at least one in 1 hour) = 1 - 0.4096 = 0.5904.",co:"Meta/All",freq:"Medium"},{q:"How would you generate a random number between 1 and 7 using only a fair 6-sided die?",a:"Roll the die twice → 36 outcomes. Reduce to 35 (exclude (6,6)), divide into 7 groups of 5. Roll again if (6,6). Map each group to 1-7 with equal probability 5/35 = 1/7.",co:"Meta/All",freq:"Medium"},{q:"What is the expected number of children a couple will have if they keep having children until they get a girl (gender ratio = 1:1)?",a:"Geometric distribution with p=0.5. E[X] = 1/p = 2 children on average.",co:"Meta/All",freq:"Medium"},{q:"In any 15-minute interval, P(≥1 shooting star) = 20%. What is P(≥1 shooting star in 1 hour)?",a:"P(none in 15 min) = 0.8. P(none in 1 hour) = 0.8^4 = 0.4096. P(at least one) = 1 − 0.4096 = 0.5904.",co:"Meta/All",freq:"Medium"}]},{day:2,week:1,cat:"stats",title:"Distributions & Shape Description",topics:["Binomial, Poisson, Geometric — PMF, E[X], Var[X]","Normal, Exponential, Log-Normal distributions","Right-skewed vs symmetric — mode/median/mean ordering","Meta hallmark: describe distribution of DAU metrics (posts, comments, app usage time)"],resources:["StatQuest: Probability Distributions playlist — youtube.com/@statquest","MIT 18.650 Stats for Applications — ocw.mit.edu/courses/18-650"],qKey:"statsQ",qs:[8,18],questions:[{q:"Describe the distribution of 'comments per user per day'. What is the mode, median, mean, and p95? How would the distribution of the daily median change over the next 20 days?",a:"Right-skewed / Poisson-like. Mode≈1, Median≈2-3, Mean≈8-10, P95≈100. Over 20 days the daily median regresses toward the population mean (CLT). Variance of the daily median shrinks.",co:"Meta",pos:"DS",freq:"High"},{q:"Describe the distribution of 'posts per user per day'. What is the shape? Estimate p5, p50, p95.",a:"Right-skewed / Log-normal. Most users are passive. Mode=0, Median≈1, Mean≈5 (pulled by influencers/bots/businesses). P5=0, P50=1, P95=6-8.",co:"Meta",pos:"DS",freq:"High"},{q:"Describe the distribution of 'app usage time per user per day'. What type of distribution? Where are mean, median, mode?",a:"Exponential distribution. Most users leave in first 10 sec (skeptical). P5≈0 sec, Mode≈2-3 sec, Median≈10 sec, Mean≈15-20 sec (pulled by power users).",co:"Meta",pos:"DS",freq:"High"},{q:"What is a non-Gaussian distribution you'd encounter in real data? Give an example.",a:"Count data → Poisson (comments per user per day). Time-to-event → Exponential (app session length). Highly skewed → Log-normal (income, post engagement). Binary outcomes → Bernoulli/Binomial. Heavy tails → Pareto. Using Gaussian on these leads to poor models.",co:"Meta/All",freq:"High"},{q:"What is the Binomial distribution? When does it apply?",a:"X ~ Binomial(n,p): number of successes in n independent Bernoulli trials each with probability p. E[X]=np, Var[X]=np(1-p). Applies when: fixed n, independent trials, constant p, binary outcome. Example: 100 users see an ad; each clicks with probability 0.04. Expected clicks = 4, variance = 3.84.",co:"Meta/All",freq:"High"},{q:"What is the Poisson distribution? When is it appropriate?",a:"X ~ Poisson(λ): number of events in a fixed interval. E[X]=Var[X]=λ. Appropriate for: rare events, count data, events occurring at a constant rate independently. Example: number of comments per user per day, number of server requests per second.",co:"Meta/All",freq:"High"}]},{day:3,week:1,cat:"stats",title:"CLT, Hypothesis Testing, CIs",topics:["Central Limit Theorem — formal statement + intuition + simulation","Null/alternative hypothesis, p-value, α, Type I & II errors, power","Confidence interval: formula, width interpretation","Welch's t-test vs Student's t-test"],resources:["3Blue1Brown: But what is the Central Limit Theorem? — youtube.com/watch?v=zeJD6dqJ5lo","Seeing Theory: visual stats — seeing-theory.brown.edu"],qKey:"statsQ",qs:[18,30],questions:[{q:"What is the Central Limit Theorem and why is it important for A/B testing?",a:"CLT: The sampling distribution of the sample mean is approximately Normal regardless of the underlying distribution, given a sufficiently large n. For A/B testing: even if individual user metrics are non-normal (e.g., skewed), the group means will be approximately Normal, allowing us to use z-tests and t-tests to compare them.",co:"Meta/All",freq:"High"},{q:"What is p-value? What does p=0.25 mean in plain English? What would you tell a product manager?",a:"p-value = P(observing data this extreme or more, assuming H0 is true). p=0.25 means: if there were truly no difference, we'd see this result or something more extreme 25% of the time by chance alone. Recommendation: cannot reject null. Either extend the test for more power, or the difference is not real.",co:"Netflix",freq:"High"},{q:"Explain the difference between confidence interval, significance level, and statistical power.",a:"CI: range of plausible values for the true parameter (e.g., 95% CI means 95% of such intervals will contain the truth). Significance level α: threshold for Type I error (e.g., 5% chance of false positive). Power (1-β): probability of detecting a true effect if it exists. Higher power requires larger sample size.",co:"Meta/All",freq:"High"},{q:"What is coverage probability of a confidence interval?",a:"The probability that the CI procedure produces an interval that contains the true population parameter, over many repeated samples. A 95% CI has coverage probability 0.95 — meaning if you construct 100 such intervals from different samples, about 95 will contain the true value.",co:"Meta",freq:"Medium"},{q:"Given three confidence intervals shown on a chart, interpret them. What does a very wide CI indicate? What is coverage probability?",a:"Wide CI → large SE → either small sample size or high variance in user behavior (heterogeneous population). CI that doesn't cross 0 = statistically significant. Coverage probability = P(CI contains true parameter) over repeated experiments = 1-α.",co:"Meta",pos:"DS",freq:"Medium"},{q:"What is the difference between Type I and Type II error? Which is worse and in what context?",a:"Type I (α): rejecting H0 when it's true — false positive. Type II (β): failing to reject H0 when it's false — false negative. Power = 1−β. Which is worse depends on cost of each error: cancer screening → Type II worse (miss a case). Spam filter → Type I worse (block legit email). In A/B testing: Type I = launching a feature that has no real effect.",co:"Meta/All",freq:"High"}]},{day:4,week:1,cat:"stats",title:"Statistical Tests + Ads Probability",topics:["t-test, chi-square, Mann-Whitney U (for non-normal)","Sample size formula: n = (zα/2 + zβ)² × 2σ² / δ²","Meta ad placement: 4% per post (Binomial) vs 1-per-25 (Deterministic) — same E[X], different Var","Bootstrap: sampling with replacement, when to use"],resources:["Evan Miller Sample Size Calculator — evanmiller.org/ab-testing/sample-size.html","Penn State STAT 415: Hypothesis Tests — online.stat.psu.edu/stat415"],qKey:"statsQ",qs:[30,42],questions:[{q:"Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute expected value and variance for each. Probability of seeing more than twice the expected number of ads? Which do you recommend?",a:"E[X] = 4 for both. Var(Method 1) = 100*0.04*0.96 = 3.84 (Binomial). Var(Method 2) = 0 (deterministic). P(X>8 | Method 1) = 1 - Binom.CDF(8; n=100, p=0.04). Method 2 better: predictable user experience, max 1 consecutive ad.",co:"Meta",pos:"DS",freq:"High"},{q:"What is bootstrapping? When do you use it over a parametric test?",a:"Bootstrap: resample your data with replacement B times, compute the statistic each time → get an empirical sampling distribution without parametric assumptions. Use when: small sample, unknown distribution, complex statistic without closed-form SE. Drawback: assumes data is a good proxy for population.",co:"Meta/All",freq:"Medium"},{q:"What is the Mann-Whitney U test? When is it preferred over a t-test?",a:"Mann-Whitney U: non-parametric test comparing whether one group's values tend to be higher than another's (tests rank sums). Preferred over t-test when: data is heavily non-normal, ordinal data, small sample size with clear outliers. Slight loss of power compared to t-test on normal data.",co:"Meta/All",freq:"Medium"},{q:"K meetings randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",a:"This uses size-biased sampling. E[X in room | room has meeting] = E[X^2]/E[X]. For Binomial(K, 1/N): E[X]=K/N, E[X^2]=Var+E[X]^2. Result: 1 + (K-1)/N.",co:"Meta",pos:"DS",freq:"Medium"},{q:"FB has 1M users and 1000 ads, each ad shown to each user with uniform probability. How many users will see at least one ad?",a:"P(see specific ad) = 1/1M. P(see at least 1 of 1000 ads) = 1-(1-1/1M)^1000 ≈ 1000/1M = 0.001. Expected users = 1M * 0.001 = 1000 users.",co:"Meta",pos:"DS",freq:"Medium"}]},{day:5,week:1,cat:"stats",title:"Statistics Deep Practice",topics:["Simpson's paradox — detect + handle","Bayesian fraud detection — compute P(bad|flagged) mentally","Expected value + variance of compound distributions","Coverage probability, bootstrap CI vs parametric CI"],resources:["StatQuest: Simpson's Paradox — youtube.com/watch?v=ebEkn-BiW5k","Causal Inference: The Mixtape Ch. 1 (free) — mixtape.scunning.com"],qKey:"statsQ",qs:[42,55],questions:[{q:"Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad? Estimate in your head.",a:"P(bad|flagged) = P(flagged|bad)*P(bad) / P(flagged) = 0.99*0.01 / (0.99*0.01 + 0.01*0.99) ≈ 50%. Mental shortcut: 0.95*0.01 / (0.95*0.01 + 0.05*0.99) ≈ 1/6 ≈ 16% for 95% accuracy case.",co:"Meta",pos:"DS",freq:"High"},{q:"What is Simpson's Paradox? Give an example. How do you handle it in a dataset? What would you do if a sample has inherent bias?",a:"A trend appears in subgroups but reverses when combined (usually due to a lurking/confounding variable). Example: Berkeley admissions. Handle: stratify by confounder, report results per stratum, use regression to control. For biased sample: DiD analysis or AA test.",co:"Meta",pos:"DS",freq:"High"},{q:"What is selection bias? Give an example.",a:"Selection bias: when sample is not representative of the population due to non-random selection. Example: survivorship bias — studying only successful companies gives misleading conclusions about what makes companies succeed. In A/B testing: users who opt-in to a feature differ systematically from those who don't.",co:"Meta/All",freq:"Medium"},{q:"When would you use mean vs. median to describe a dataset?",a:"Median when data is skewed or has outliers (income, house prices, app usage time). Mean when data is symmetric and outlier-free. Rule: the more skewed the distribution, the more you prefer median. In practice, report both — large divergence signals skew.",co:"Meta/All",freq:"High"},{q:"What is statistical interaction? Give an example.",a:"An interaction is when the effect of one variable on the outcome changes depending on the level of another variable. Example: the effect of a new UI feature on conversion rate differs for mobile vs. desktop users. In regression: include an interaction term X1·X2 to model this.",co:"Meta/All",freq:"Medium"},{q:"What is a confounding variable? How do you handle it?",a:"A confounder affects both the independent and dependent variable, creating a spurious association. Example: ice cream sales and drowning — both driven by hot weather. Handle by: randomization (A/B test), stratification, multivariate regression controlling for confounders, or matching (propensity score).",co:"Meta/All",freq:"High"}]},{day:6,week:1,cat:"sql",title:"SQL Foundations + Meta Table Patterns",topics:["SELECT, WHERE, GROUP BY, HAVING, ORDER BY, NULL handling","AVG(CASE WHEN condition THEN 1 ELSE 0 END) — the Meta percentage pattern","user_actions table (Meta): action types view/like/comment/report","Spam queries: % of content viewed that is spam"],resources:["LeetCode SQL Easy: #175, #176, #182, #196 — leetcode.com/problemset/database","Mode Analytics SQL Tutorial — mode.com/sql-tutorial","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[0,10],questions:[{q:"Tables: searches(date, search_id, user_id, age_group, search_query) and search_results(date, search_id, result_id, result_type, clicked). Q1: How many users searched more than 10 times in the last 7 days? Q2: What % of users clicked on an Event result?",a:"Q1: SELECT COUNT(*) FROM (SELECT user_id, COUNT(search_id) FROM searches WHERE date>=DATE_SUB(CURDATE(),INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id)>10). Q2: SELECT AVG(clicked) FROM (SELECT user_id, MAX(CASE WHEN result_type='event' AND clicked=TRUE THEN 1 ELSE 0 END) FROM search_result",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Using searches + search_results tables: What % of searches returned multiple result types? Top 10 search queries most likely to return an Event result?",a:"Multi-type %: SELECT AVG(CASE WHEN cnt>1 THEN 1 ELSE 0 END) FROM (SELECT search_id, COUNT(DISTINCT result_type) as cnt FROM search_results GROUP BY search_id). Top 10: SELECT search_query, AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as event_rate FROM searches JOIN search_results USING(sear",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, age_bucket, country, dau_flag, ds). Q1: List callers who contacted more than 2 distinct people yesterday. Q2: Time spent per DAU in the US yesterday.",a:"Q1: SELECT caller, COUNT(DISTINCT recipient) FROM video_calls WHERE ds=yesterday GROUP BY caller HAVING COUNT(DISTINCT recipient)>2. Q2: JOIN dim_all_users ON user_id=caller OR user_id=recipient, then SUM(duration)/COUNT(*) per DAU. Key: bidirectional join (caller OR recipient).",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Using video_calls + dim_all_users: What % of French DAU were on a video call yesterday?",a:"SELECT AVG(call_flag) FROM (SELECT u.user_id, CASE WHEN COUNT(c.call_id)>0 THEN 1 ELSE 0 END as call_flag FROM (SELECT user_id FROM dim_all_users WHERE country='fr' AND dau_flag=1 AND ds=yesterday) u LEFT JOIN (SELECT caller,recipient,call_id FROM video_calls WHERE ds=yesterday) c ON u.user_id=c.cal",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action: request/accept/reject). Q1: How many friend requests received a response on Aug 1st 2021? Q2: Overall acceptance rate for requests sent by user 123?",a:"Q1: SELECT COUNT(DISTINCT request_id) FROM friend_requests WHERE action<>'request' AND ds='2021-08-01'. Q2: SELECT AVG(accepted) FROM (SELECT request_id, MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) as accepted FROM friend_requests WHERE actor_id=123 GROUP BY request_id).",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table user_actions(ds, user_id, post_id, action: view/like/comment/reaction/report, extra). Table reviewer_removals(ds, reviewer_id, post_id). Q1: What % of daily content users view is spam? Q2: How many posts were reported as spam yesterday?",a:"Q1: SELECT SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END)/SUM(CASE WHEN action='view' THEN 1 ELSE 0 END) FROM user_actions WHERE ds=yesterday. Q2: SELECT COUNT(DISTINCT post_id) FROM user_actions WHERE action='report' AND extra='SPAM' AND ds=yesterday.",co:"Meta",pos:"DS/DA",freq:"High"},{q:"Table: attendance_events(date, student_id, attendance) and all_students(student_id, school_id, grade_level, date_of_birth). Q1: What % of students attended school on their birthday? Q2: Which grade level had the largest attendance drop between yesterday and today?",a:"Q1: LEFT JOIN on student_id AND date=date_of_birth, then AVG(attendance). Q2: Use LEAD() OVER (PARTITION BY grade_level ORDER BY date DESC) to get yesterday's count, compute diff, ORDER BY diff DESC LIMIT 1.",co:"Meta",pos:"DS/DA",freq:"Medium"}]},{day:7,week:1,cat:"review",title:"📝 Week 1 Review",topics:["✍️ Spend 60–90 minutes writing:","→ 1-page summary of what you learned this week","→ Derivations from memory: Bayes formula, CLT statement, sample size formula, t-test statistic, E[X] for Binomial & Poisson","→ Top 10 insights: which concepts surprised you, which felt weak"],resources:["Your own notes — no new material today","Re-read anything shaky from Days 1-6"],qKey:"statsQ",qs:[0,6],questions:[{q:"Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",a:"P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY) = (2/3)³·0.25 / [(2/3)³·0.25 + (1/3)³·0.75] = 8·0.25 / (8·0.25 + 0.75) = 2 / (2+0.75) ≈ 8/11 ≈ 0.727.",co:"Meta",freq:"High"},{q:"What is the Central Limit Theorem and why is it important for A/B testing?",a:"CLT: The sampling distribution of the sample mean is approximately Normal regardless of the underlying distribution, given a sufficiently large n. For A/B testing: even if individual user metrics are non-normal (e.g., skewed), the group means will be approximately Normal, allowing us to use z-tests and t-tests to compare them.",co:"Meta/All",freq:"High"},{q:"What is p-value? What does p=0.25 mean in plain English? What would you tell a product manager?",a:"p-value = P(observing data this extreme or more, assuming H0 is true). p=0.25 means: if there were truly no difference, we'd see this result or something more extreme 25% of the time by chance alone. Recommendation: cannot reject null. Either extend the test for more power, or the difference is not real.",co:"Netflix",freq:"High"},{q:"Explain the difference between confidence interval, significance level, and statistical power.",a:"CI: range of plausible values for the true parameter (e.g., 95% CI means 95% of such intervals will contain the truth). Significance level α: threshold for Type I error (e.g., 5% chance of false positive). Power (1-β): probability of detecting a true effect if it exists. Higher power requires larger sample size.",co:"Meta/All",freq:"High"},{q:"Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute expected value and variance for each. Probability of seeing more than twice the expected number of ads? Which do you recommend?",a:"E[X] = 4 for both. Var(Method 1) = 100*0.04*0.96 = 3.84 (Binomial). Var(Method 2) = 0 (deterministic). P(X>8 | Method 1) = 1 - Binom.CDF(8; n=100, p=0.04). Method 2 better: predictable user experience, max 1 consecutive ad.",co:"Meta",pos:"DS",freq:"High"},{q:"Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad? Estimate in your head.",a:"P(bad|flagged) = P(flagged|bad)*P(bad) / P(flagged) = 0.99*0.01 / (0.99*0.01 + 0.01*0.99) ≈ 50%. Mental shortcut: 0.95*0.01 / (0.95*0.01 + 0.05*0.99) ≈ 1/6 ≈ 16% for 95% accuracy case.",co:"Meta",pos:"DS",freq:"High"}]},{day:8,week:2,cat:"sql",title:"SQL JOINs + Bidirectional Queries",topics:["INNER, LEFT, RIGHT, FULL OUTER JOIN","Bidirectional join: ON user_id=caller OR user_id=recipient (Meta video calls)","Self-joins for network/social queries","Left join to find missing records"],resources:["LeetCode SQL: #197, #584, #595 — leetcode.com/problemset/database","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[10,22],questions:[{q:"Write a SQL query to find callers who contacted more than 2 distinct people yesterday.",a:"SELECT caller, COUNT(DISTINCT recipient) as contacts FROM video_calls WHERE ds = DATE_SUB(CURDATE(),INTERVAL 1 DAY) GROUP BY caller HAVING COUNT(DISTINCT recipient) > 2;",co:"Meta",freq:"High"},{q:"What is the difference between INNER JOIN and LEFT JOIN? When would a row appear in LEFT JOIN but not INNER JOIN?",a:"INNER JOIN returns only rows where the join condition matches in BOTH tables. LEFT JOIN returns ALL rows from the left table plus matched rows from the right (NULLs where no match). A row appears in LEFT JOIN but not INNER JOIN when: the left table row has no matching row in the right table.",co:"Meta/All",freq:"High"},{q:"Write a query: for each Airbnb listing in the US, find the date of its very first booking.",a:"SELECT l.listing_id, MIN(b.date) AS first_booking FROM listings l JOIN bookings b ON l.listing_id = b.listing_id WHERE l.country = 'US' GROUP BY l.listing_id;",co:"Airbnb",freq:"High"},{q:"What is a self-join? Write an example query that finds pairs of users who share the same country.",a:"A self-join joins a table to itself. Example: SELECT a.user_id, b.user_id, a.country FROM users a JOIN users b ON a.country = b.country AND a.user_id < b.user_id; The a.user_id < b.user_id prevents duplicate pairs.",co:"Meta/All",freq:"High"}]},{day:9,week:2,cat:"sql",title:"Window Functions + CTEs",topics:["ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD","PARTITION BY + ORDER BY, running totals SUM OVER","WITH clause (CTEs) — preferred for readability","LAG() for day-over-day drops"],resources:["LeetCode SQL Medium: #177, #178, #180, #184 — leetcode.com/problemset/database","Mode Analytics Window Functions Tutorial — mode.com/sql-tutorial/sql-window-functions","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[22,35],questions:[{q:"Write a query to rank scores using DENSE_RANK so ties share the same rank with no gaps.",a:"SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS rank FROM scores;  — Unlike RANK(), DENSE_RANK skips no numbers after a tie.",co:"Meta/All",freq:"High"},{q:"Given an attendance table, use LAG() to find which grade level had the largest attendance drop between yesterday and today.",a:"SELECT grade_level, today - yesterday AS drop FROM (SELECT grade_level, date, COUNT(*) AS today, LAG(COUNT(*),1) OVER (PARTITION BY grade_level ORDER BY date) AS yesterday FROM attendance JOIN students USING(student_id) WHERE attendance='Present' GROUP BY grade_level, date) t WHERE date = CURDATE() ORDER BY drop DESC LIMIT 1;",co:"Meta",freq:"High"},{q:"Write a query using SUM() OVER to compute a running total of games_played per player ordered by date.",a:"SELECT player_id, event_date, SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM activity;",co:"Meta/All",freq:"Medium"},{q:"What is the difference between ROW_NUMBER, RANK, and DENSE_RANK? Give an example where they produce different results.",a:"Given scores [100,100,90]: ROW_NUMBER → 1,2,3 (always unique). RANK → 1,1,3 (skips 2). DENSE_RANK → 1,1,2 (no skip). Use ROW_NUMBER for deduplication, RANK for competition standings, DENSE_RANK when you don't want gaps.",co:"Meta/All",freq:"High"},{q:"Write a CTE to find the second highest salary from an Employee table.",a:"WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM Employee) SELECT MAX(salary) AS SecondHighestSalary FROM ranked WHERE rnk = 2;  — Handle NULL if fewer than 2 distinct salaries.",co:"Meta/All",freq:"High"},{q:"Write a LEAD() query to compute day-over-day revenue change for each product.",a:"SELECT product_id, date, revenue, revenue - LEAD(revenue,1) OVER (PARTITION BY product_id ORDER BY date DESC) AS rev_change FROM sales;  — LEAD looks forward; since we ORDER DESC, LEAD gives previous day.",co:"Meta/All",freq:"Medium"}]},{day:10,week:2,cat:"sql",title:"SQL Advanced: Multi-Level Aggregation",topics:["Nested aggregations: MAX() inside subquery → AVG() outside","Search table patterns: % users clicked Event, top-10 query-to-event rate","DATE_SUB, DATEDIFF, DATE_TRUNC for time filters","A/B test SQL: join assignment + events, compute per-group stats"],resources:["LeetCode SQL Medium: #185, #262, #534, #550 — leetcode.com/problemset/database","DataLemur SQL Questions — datalemur.com/questions"],qKey:"sqlQ",qs:[35,50],questions:[{q:"Spotify A/B test pattern: given ab_bucket(user_id, bucket, first_exposed_date) and streams(date, user_id, ms_played), write SQL to compute average stream time per bucket, only counting dates after each user's first exposure.",a:"SELECT bucket, AVG(ms_played) as avg_ms FROM ab_bucket ab LEFT JOIN streams s ON ab.user_id = s.user_id AND s.date >= ab.first_exposed_date GROUP BY bucket;  — Key: filter on date >= first_exposed_date to avoid pre-exposure data.",co:"Spotify",freq:"High"},{q:"Meta search pattern: what % of searches returned at least one Event result?",a:"SELECT AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as pct FROM (SELECT DISTINCT search_id FROM search_results WHERE result_type='event') t RIGHT JOIN searches s USING(search_id);  — Or: COUNT(DISTINCT search_id with event) / COUNT(DISTINCT total search_id).",co:"Meta",freq:"High"},{q:"Write a query to find users who made more than 10 searches in the last 7 days.",a:"SELECT COUNT(*) FROM (SELECT user_id FROM searches WHERE date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id) > 10) t;",co:"Meta",freq:"High"},{q:"Airbnb: given bookings(date, reservation_id, listing_id) and listings(user_id, listing_id, created_time, country), write queries: (1) total US reservations by date, (2) first-time booking per listing in US.",a:"(1) SELECT date, COUNT(*) FROM bookings b JOIN listings l USING(listing_id) WHERE l.country='US' GROUP BY date;  (2) SELECT listing_id, MIN(date) as first_booking FROM bookings b JOIN listings l USING(listing_id) WHERE l.country='US' GROUP BY listing_id;",co:"Airbnb",freq:"High"},{q:"Meta friend requests: what is the overall acceptance rate? (handle duplicates — a request accepted multiple times still counts as 1)",a:"SELECT ROUND(IFNULL((SELECT COUNT(*) FROM (SELECT DISTINCT requester_id, accepter_id FROM request_accepted) a) / (SELECT COUNT(*) FROM (SELECT DISTINCT sender_id, send_to_id FROM friend_request) b), 0), 2) AS accept_rate;",co:"Meta",freq:"High"},{q:"Write a SQL query to find the top 3 users who initialized the most video calls this month, including ties.",a:"SELECT caller, COUNT(call_id) as call_count, DENSE_RANK() OVER (ORDER BY COUNT(call_id) DESC) as rnk FROM video_calls WHERE DATE_TRUNC('month', ds) = DATE_TRUNC('month', CURRENT_DATE) GROUP BY caller QUALIFY rnk <= 3;",co:"Meta",freq:"Medium"}]},{day:11,week:2,cat:"python",title:"Python for Stats + ML: scipy, statsmodels, sklearn",topics:["scipy.stats: ttest_ind, mannwhitneyu, chi2_contingency, proportions_ztest","Bootstrap CI: resample with replacement B=1000 times, compute statistic each time","statsmodels OLS: sm.OLS(y, sm.add_constant(X)).fit() — interpret coef, p-values, R²","sklearn pipeline: LogisticRegression, train_test_split, cross_val_score, classification_report","End-to-end A/B analysis in Python: merge → flag converted → ttest_ind → report p-value + effect size"],resources:["scipy.stats docs — docs.scipy.org/doc/scipy/reference/stats.html","statsmodels: Getting Started — statsmodels.org/stable/gettingstarted.html","scikit-learn User Guide: supervised learning — scikit-learn.org/stable/supervised_learning.html","Real Python: Python Statistics Fundamentals — realpython.com/python-statistics"],qKey:"pythonQ",qs:[4,12],questions:[{q:"Given two DataFrames — visits(id_visitor, timestamp, country, assign) and bookings(id_visitor, id_booking, timestamp) — write a full A/B analysis in Python: compute conversion rate per group and test for statistical significance.",a:"merged = visits.merge(bookings[['id_visitor']], on='id_visitor', how='left'); merged['converted'] = merged['id_visitor'].isin(bookings['id_visitor']).astype(int); ctrl = merged[merged['assign']==0]['converted']; treat = merged[merged['assign']==1]['converted']; from scipy import stats; t, p = stats.ttest_ind(treat, ctrl); print(f'Control: {ctrl.mean():.3f}, Treatment: {treat.mean():.3f}, p={p:.4f}')",co:"Airbnb",freq:"High"},{q:"When would you use scipy.stats.mannwhitneyu instead of ttest_ind? Write the call.",a:"Use Mann-Whitney U when: data is heavily non-normal (e.g., session duration, revenue — very right-skewed), small sample size, or metric is ordinal. Call: stats.mannwhitneyu(treat, ctrl, alternative='two-sided'). It tests whether one group's values tend to rank higher than the other's — does NOT assume normality.",co:"Meta/All",freq:"High"},{q:"Write a bootstrap function to compute a 95% confidence interval for the median of a sample.",a:`import numpy as np
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
Or use a min-heap of size k for O(n log k). Bucket sort gives O(n): create buckets by frequency, iterate from highest.`,co:"Airbnb",freq:"High"}]},{day:8,week:2,cat:"sql",title:"SQL Window Functions",topics:["RANK vs DENSE_RANK vs ROW_NUMBER — differences with ties","LAG / LEAD — week-over-week, session gaps, first events per user","Aggregate windows — running totals, 7-day rolling averages","Top-N per group pattern — DENSE_RANK() OVER (PARTITION BY ... ORDER BY ...)"],resources:["🏷️ LeetCode #178 Rank Scores (Easy)","🏷️ LeetCode #184/#185 Dept Highest / Top 3 Salaries","🏷️ LeetCode #180 Consecutive Numbers (Medium)","Mode Analytics SQL Window Functions Tutorial"],qKey:"sqlWindowQ",qs:[],questions:[]},{day:9,week:2,cat:"sql",title:"SQL Date Functions & Time Series",topics:["DATE_TRUNC, EXTRACT, DATEDIFF, INTERVAL arithmetic","Week-over-week change with LAG(cnt, 7)","% booked within 30 days — Airbnb pattern (LEFT JOIN + CASE WHEN)","Rolling 7-day window with ROWS BETWEEN 6 PRECEDING AND CURRENT ROW"],resources:["🏷️ LeetCode #197 Rising Temperature (Easy)","🏷️ LeetCode #262 Trips and Users (Hard)","Airbnb SQL interview: bookings + listings table patterns","Reddit CVR WoW pattern — LAG(cvr, 7)"],qKey:"sqlDateQ",qs:[],questions:[]},{day:10,week:2,cat:"sql",title:"SQL Complex Patterns — Churn, Funnel, Self-Join",topics:["Churn detection — last_txn > 7 days ago (Reddit advertiser churn)","Funnel analysis — COUNT(DISTINCT CASE WHEN event='X' THEN user_id END)","Country penetration — US vs Not US based on % viewing time","Self-joins, EXISTS/NOT EXISTS, UNION ALL for bidirectional relationships"],resources:["🏷️ LeetCode #570 Managers with 5+ Direct Reports (Medium)","🏷️ LeetCode #602 Friend Requests II: Most Friends (Medium)","Reddit ad_revenue + active_ads SQL patterns","Airbnb first-booking and WoW patterns"],qKey:"sqlComplexQ",qs:[],questions:[]},{day:11,week:2,cat:"python",title:"Python Pandas Fundamentals",topics:["DataFrame creation, inspection, filtering (boolean mask with & and |)","groupby().agg() with named aggregations — visitors, bookings, rate","pd.merge() — LEFT JOIN for A/B testing, how= options, suffix handling","DateTime operations, pivot_table, apply vs vectorized operations"],resources:["Airbnb join pattern: visit + booking → LEFT JOIN → fillna(0) → groupby","Pandas groupby docs — pandas.pydata.org","Reddit/Shopify: weighted random sampling with np.random.choice","Rolling windows: daily_df['col'].rolling(7).mean()"],qKey:"pyPandasQ",qs:[],questions:[]},{day:12,week:2,cat:"python",title:"Python A/B Testing & Statistical Analysis",topics:["Two-proportion z-test — proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t])","95% CI on difference: (pt-pc) ± 1.96 * sqrt(pc*(1-pc)/nc + pt*(1-pt)/nt)","SRM check, power analysis, p-value interpretation pitfalls","Matplotlib bar chart with error bars — the Airbnb plot pattern"],resources:["Airbnb full A/B test pipeline: load → merge → agg → ztest → CI → plot","Netflix A/B test: 100k control vs treatment, 80.1% vs 80.2% retention","Reddit: dice P(A>B) with numpy broadcasting — A[:,None] > B[None,:]","scipy.stats proportions_ztest documentation"],qKey:"pyABtestQ",qs:[],questions:[]},{day:13,week:2,cat:"python",title:"Python OOP & Interview Coding",topics:["OOP: class, __init__, instance methods, __repr__ — Shopify TDD pattern","ExperimentTracker class — CTR tracking with record(), ctr(), top_n()","🏷️ LeetCode #289 Game of Life — in-place with state encoding (2 and -1)","🏷️ LeetCode #380 RandomizedSet — O(1) insert/remove/getRandom via swap-and-pop"],resources:["Shopify pair programming: TDD, test-driven class implementation","🏷️ LeetCode #289 Game of Life (Medium)","🏷️ LeetCode #380 Insert Delete GetRandom O(1) (Medium)","Expedia: weighted random sampling, OOP data structures"],qKey:"pyOOPQ",qs:[],questions:[]},{day:14,week:2,cat:"review",title:"Week 2 Review — SQL & Python Quiz (30 questions)",topics:["SQL sections: window functions, date patterns, churn/funnel/self-join","Python sections: pandas, A/B testing pipeline, OOP","Real company questions: Airbnb, Reddit, Shopify, Expedia, Netflix, LeetCode","Write from memory: WoW LAG, Airbnb pipeline, ExperimentTracker, RandomizedSet"],resources:["All Day 8–13 notes","🏷️ LeetCode SQL problems — practice any you haven't tried","DataLemur SQL Interview Questions"],qKey:"week2ReviewQ",qs:[],questions:[]}],Vs=[{week:1,title:"Week 1 — Statistics & SQL Foundations",days:"Days 1–7",color:"#F59E0B",checklistSections:[{heading:"Probability",items:["Can state Bayes' theorem from memory: P(A|B) = P(B|A)·P(A) / P(B)","Can solve the three-friends-Seattle rain problem cold (answer: 8/11)","Can solve the double-headed coin problem cold","Know complement rule: P(at least one) = 1 − P(none)","Understand conditional probability vs independence"]},{heading:"Distributions",items:["Can describe shape of: comments/user/day → Poisson-like right-skewed (mode≈1, median≈3, mean≈8-10, p95≈100)","Can describe: posts/user/day → log-normal (mode=0, median≈1, mean≈5, right skew)","Can describe: app usage time → exponential (most leave in first 10s)","Know Binomial: E[X]=np, Var[X]=np(1-p). Know Poisson: E[X]=Var[X]=λ","Know when to use each: Binomial=fixed n binary trials; Poisson=count of rare events"]},{heading:"Hypothesis Testing & CIs",items:["Can explain p-value in plain English without using 'probability the null is true'","Know the three inputs to sample size formula: α, power, MDE (and baseline rate)","Can derive: wide CI → large SE → either small n or high variance in the population","Know Type I = false positive (α). Type II = false negative (β). Power = 1−β","Can explain when to use Mann-Whitney U vs t-test"]},{heading:"SQL Foundations",items:["Can write the AVG(CASE WHEN ... THEN 1 ELSE 0 END) percentage pattern from memory","Can write Meta video calls query: bidirectional JOIN ON caller=user_id OR recipient=user_id","Can write Meta search query: searches JOIN search_results, GROUP BY, HAVING","Know NULL handling: COALESCE, IS NULL, IFNULL","Can explain when to use LEFT JOIN vs INNER JOIN and what each produces"]}],derivationsToWrite:["Bayes' theorem: write full formula + walk through Seattle example","Sample size formula for two-proportion z-test: n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ²","E[X] and Var[X] for Binomial and Poisson (from memory)","Meta ad probability: Method 1 E[X]=4, Var=3.84 (Binomial). Method 2 E[X]=4, Var=0","P(bad|flagged) Bayesian: 0.99×0.01 / (0.99×0.01 + 0.01×0.99) ≈ 50%"],decayReminders:[{concept:"Bayes formula",risk:"High",next:"Day 14 — re-solve Seattle and coin problems cold"},{concept:"Sample size formula",risk:"High",next:"Day 22 — write it from memory before A/B Testing week"},{concept:"Binomial E[X], Var[X]",risk:"Medium",next:"Day 17 — needed when interpreting XGBoost loss"},{concept:"Meta SQL patterns",risk:"Low",next:"Practice 1 query per SQL day (Days 8-11)"}],mockQuestions:[{q:"You flip a fair coin 10 times and get 10 heads. What is the probability the 11th flip is heads?",a:"0.5 — coin flips are independent events. Past results don't affect future probability. Common interview trap: candidates confuse gambler's fallacy with the correct answer.",source:"Classic probability interview",difficulty:"Easy"},{q:"What is the probability that two people in a room of 23 share a birthday?",a:"P(at least one shared birthday) = 1 − P(all different) = 1 − (365/365 × 364/365 × ... × 343/365) ≈ 50.7%. Counterintuitive — most people guess much lower. Key insight: 23 people → 23×22/2 = 253 pairs.",source:"Birthday paradox — classic DS interview",difficulty:"Medium"},{q:"A test for a disease with 1% prevalence has 95% sensitivity and 95% specificity. If you test positive, what is the probability you have the disease?",a:"P(disease|+) = 0.95×0.01 / (0.95×0.01 + 0.05×0.99) = 0.0095/0.059 ≈ 16.1%. Despite 95% accuracy, only ~16% of positives truly have the disease because prevalence is so low. Illustrates why rare event detection is hard.",source:"FAANG Stats interview — DataLemur",difficulty:"Medium"},{q:"Explain the difference between probability and likelihood.",a:"Probability: fixed parameters, varying outcomes — P(data|θ). Likelihood: fixed data, varying parameters — L(θ|data). MLE maximizes L(θ|data) over θ. Example: probability of 7 heads in 10 flips given p=0.5 is ~11.7%. Likelihood of p=0.7 given 7 heads observed is also ~11.7% but means something different.",source:"Statistics interview — GeeksforGeeks/365DS",difficulty:"Medium"},{q:"What is the variance of a sum of two independent random variables X and Y?",a:"Var(X+Y) = Var(X) + Var(Y) if X,Y independent. Var(X+Y) = Var(X) + Var(Y) + 2·Cov(X,Y) if correlated. Key: variance adds for independent variables — this is why standard error = σ/√n (sum of n independent variables divided by n).",source:"Classic statistics",difficulty:"Easy"},{q:"You draw 2 cards from a standard 52-card deck without replacement. What is the probability both are from the same suit?",a:"P(same suit) = P(2nd same suit | 1st drawn) = 12/51 ≈ 23.5%. Dependent event: first draw was from some suit (13 cards), leaving 12 of that suit in 51 remaining. Alternatively: C(13,2)×4 / C(52,2) = 312/1326 ≈ 23.5%.",source:"StrataScratch DS probability",difficulty:"Medium"}]},{week:2,title:"Week 2 — SQL Advanced + Python",days:"Days 8–14",color:"#3B82F6",checklistSections:[{heading:"SQL Window Functions",items:["Can write ROW_NUMBER, RANK, DENSE_RANK and explain when each is correct","Can write LAG(value, 1) OVER (PARTITION BY ... ORDER BY ...) for WoW change","Can write SUM() OVER (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) for running total","Know CTE syntax: WITH cte AS (...) SELECT ... FROM cte","Can explain difference: WHERE filters rows BEFORE grouping; HAVING filters AFTER"]},{heading:"SQL Advanced Patterns",items:["Can write Spotify A/B pattern: LEFT JOIN streams ON user_id AND date >= first_exposed_date","Can write nested aggregation: AVG(CASE WHEN cnt > 1 THEN 1 ELSE 0 END) as pct","Know DATE_SUB(CURDATE(), INTERVAL 7 DAY) and DATE_TRUNC patterns","Can write Airbnb booking conversion: join bookings + listings, filter US, GROUP BY date","Can write Meta % of spam: SUM(CASE WHEN action='report' THEN 1) / SUM(CASE WHEN action='view' THEN 1)"]},{heading:"Python / Pandas",items:["Can write np.where(condition, value_if_true, value_if_false) from memory","Know: groupby().agg() vs groupby().transform() — transform returns same-size df","Can write full A/B pipeline: merge() → filter → groupby → scipy.stats.ttest_ind","Know SQL→Pandas translation: JOIN=merge(), WHERE=query() or boolean index, HAVING=groupby().filter()","Can write platform adjustment function with a dict of multipliers"]},{heading:"Python for Stats + ML",items:["Can write full Airbnb-style A/B analysis: merge visits+bookings, flag converted, call ttest_ind, print p-value","Know when to use mannwhitneyu vs ttest_ind (non-normal/skewed data → Mann-Whitney U)","Can write a bootstrap CI function: np.random.choice with replace=True, np.percentile for bounds","Can fit OLS in statsmodels: sm.add_constant + sm.OLS().fit() and interpret coef + R²","Can build sklearn logistic regression pipeline: train_test_split → fit → classification_report","Can write chi2_contingency test to check for randomization imbalance between groups"]}],derivationsToWrite:["Write Meta video call % query: bidirectional JOIN + AVG(CASE WHEN) (from memory, cold)","Write Spotify A/B SQL: join bucket + streams on user_id AND date>=first_exposed, compute avg per group","Write pandas equivalent of: SELECT user_id, AVG(ms) FROM streams WHERE date>'2024-01' GROUP BY user_id HAVING AVG(ms)>1000","Write the Airbnb t-test pipeline: merge visitor+booking, compute converted flag, call ttest_ind","Write bootstrap_ci() from memory: np.random.choice → loop B=1000 → np.percentile([2.5, 97.5])","Write statsmodels OLS from memory: sm.add_constant(X) → sm.OLS(y, X).fit() → .summary()"],decayReminders:[{concept:"Window function syntax",risk:"Medium",next:"Day 22 — will need LAG for WoW metric change in A/B analysis questions"},{concept:"Bidirectional JOIN pattern",risk:"High",next:"Actively practice any time you see a social/call graph table"},{concept:"np.where pattern",risk:"Low",next:"Low decay — mechanical once you've done it twice"},{concept:"Spotify A/B SQL",risk:"High",next:"Day 22 — this exact pattern appears in A/B Testing week questions"}],mockQuestions:[{q:"Write a SQL query to find the second highest salary. Handle the case where fewer than 2 distinct salaries exist (return NULL).",a:"SELECT (SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1) AS SecondHighestSalary;  OR: WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rk FROM Employee) SELECT MAX(salary) FROM ranked WHERE rk=2;  The OFFSET approach naturally returns NULL if no second salary exists.",source:"LeetCode #176 — classic FAANG SQL",difficulty:"Easy"},{q:"Find all numbers that appear at least 3 times consecutively in a Logs table (Id, Num).",a:"SELECT DISTINCT l1.Num AS ConsecutiveNums FROM Logs l1 JOIN Logs l2 ON l1.Id+1=l2.Id AND l1.Num=l2.Num JOIN Logs l3 ON l2.Id+1=l3.Id AND l2.Num=l3.Num;  Or with LAG/LEAD: use two LAG calls, filter where current=lag1=lag2.",source:"LeetCode #180 — window function classic",difficulty:"Medium"},{q:"Given a table of user sessions (user_id, session_start, session_end), compute the number of sessions active at any given minute over the past day.",a:"Generate a calendar spine of minutes, then LEFT JOIN sessions ON minute BETWEEN session_start AND session_end, GROUP BY minute, COUNT(*). In practice: use a numbers table or recursive CTE to generate the minute spine.",source:"FAANG DS SQL — DataLemur style",difficulty:"Hard"},{q:"In Pandas, given df with columns [user_id, date, revenue], compute each user's 7-day rolling average revenue, including days with no activity (as 0).",a:"First create full date spine per user: pd.date_range. Merge with df (left join). Fill NaN revenue with 0. Then: df.groupby('user_id')['revenue'].transform(lambda x: x.rolling(7).mean()). Rolling requires data sorted by date within each group.",source:"Classic Pandas interview question",difficulty:"Medium"},{q:"Explain the difference between RANK() and DENSE_RANK() with an example where they give different results.",a:"Given scores [100,100,90,80]: RANK → 1,1,3,4 (skips 2 because two tied at rank 1). DENSE_RANK → 1,1,2,3 (no gap, next rank is always previous+1). Use RANK for: competition results where 'no one gets 2nd'. Use DENSE_RANK for: bucketing/deciling where you want no gaps.",source:"Classic window function interview",difficulty:"Easy"}]},{week:3,title:"Week 3 — ML Deep Dive",days:"Days 15–21",color:"#F97316",checklistSections:[{heading:"Linear & Logistic Regression",items:["Can write OLS estimator: β = (XᵀX)⁻¹Xᵀy","Can state 4 linear regression assumptions: Linearity, Independence, Normality of errors, Equal variance (LINE)","Know Ridge shrinks all weights, Lasso sets some to zero exactly — explain why geometrically","Know logistic regression sigmoid: σ(z) = 1/(1+e⁻ᶻ). Decision boundary: σ(z)=0.5 when z=0","Can interpret a regression coefficient: 'holding all else equal, a 1-unit increase in X → β change in Y'"]},{heading:"Decision Trees & Ensemble",items:["Can write Gini impurity formula: G = 1 − Σpᵢ². Pure node → G=0. Equal split → G=0.5","Know RF: bagging + random feature subset per split. Why feature subset? Decorrelates trees → reduces variance","Know boosting: sequential, each tree fits residuals of previous. XGBoost adds regularization to loss","Know OOB error: ~37% of data not used per tree → free unbiased validation estimate","Know 5 key XGBoost hyperparameters: n_estimators, learning_rate, max_depth, subsample, colsample_bytree"]},{heading:"Evaluation & System Design",items:["Know when to use AUC-ROC vs AUC-PR: AUC-PR better for severe class imbalance","Know precision = TP/(TP+FP). Recall = TP/(TP+FN). F1 = 2PR/(P+R)","Know imbalanced data solutions: scale_pos_weight (XGBoost), class_weight='balanced', SMOTE, threshold tuning","Can walk through end-to-end ML system: problem framing → labels → features → model → evaluation → monitoring","Know data leakage: features derived from future data or from test set contaminate training"]},{heading:"Deep Learning",items:["Can explain backprop: chain rule, dL/dW = dL/dA × dA/dZ × dZ/dW","Know vanishing gradient: sigmoid/tanh saturate → gradients → 0. Solution: ReLU, batch norm, skip connections","Can write attention formula: Attention(Q,K,V) = softmax(QKᵀ/√d_k) × V","Know BERT=encoder (bidirectional, good for understanding), GPT=decoder (causal, good for generation)"]}],derivationsToWrite:["Write OLS β formula from memory. Then explain: why do we invert XᵀX?","Write Gini impurity: G = 1 − Σpᵢ². Compute for a pure node and a 50/50 split","Write gradient boosting update rule: ŷₜ = ŷₜ₋₁ + η·hₜ(x) where hₜ fits −∂L/∂ŷₜ₋₁","Write attention formula: softmax(QKᵀ/√d_k)·V. Explain why we divide by √d_k","Write backprop for one dense layer: dL/dW = Aᵀ·δ where δ = dL/dZ"],decayReminders:[{concept:"OLS β derivation",risk:"High",next:"Day 28 review — write it cold. Easy to forget the (XᵀX)⁻¹ step"},{concept:"Gini impurity formula",risk:"High",next:"Day 28 review — interviewers ask 'compute Gini for this split'"},{concept:"XGBoost hyperparameters",risk:"Medium",next:"Day 28 review — list all 5 cold before A/B week"},{concept:"Attention formula",risk:"High",next:"High decay — unusual notation. Re-derive in Week 4 review"},{concept:"Precision/Recall formulas",risk:"Low",next:"Low decay — very mechanical"}],mockQuestions:[{q:"You train a logistic regression and get perfect training accuracy (100%) but 60% test accuracy. What's wrong and how do you fix it?",a:"Severe overfitting. Diagnosis: large gap between train/test. Fixes: (1) Reduce model complexity — fewer features, increase regularization (C parameter in sklearn, or add L1/L2 penalty). (2) More training data. (3) Cross-validation to detect earlier. (4) Check for data leakage — maybe a feature is derived from the label. (5) Dropout if using neural net. Root cause: model memorized training noise.",source:"Classic ML interview — Netflix/Expedia style",difficulty:"Medium"},{q:"Explain the difference between bagging and boosting. Which reduces bias? Which reduces variance?",a:"Bagging (e.g., RF): trains B independent models on bootstrap samples, averages predictions. Reduces variance (averaging uncorrelated models). Doesn't help with bias. Boosting: trains sequentially, each model corrects predecessor's errors. Reduces bias primarily. Risk: can increase variance if too many rounds (overfit). Rule: RF when you have noisy data and need robustness. XGBoost when you need max accuracy and can tune carefully.",source:"FAANG ML interview — Exponent/Backprop",difficulty:"Medium"},{q:"You have a dataset with 1% positive class. Your model achieves 99% accuracy. Is this good?",a:"No — this is the accuracy paradox. A model that always predicts negative also achieves 99% accuracy. Correct metrics: Precision-Recall curve, F1 score, or AUC-PR (area under PR curve, better than AUC-ROC for severe imbalance). The model needs to demonstrate recall > 0 on the positive class to be useful.",source:"Netflix OA / Disney DS interview",difficulty:"Easy"},{q:"What is the difference between L1 and L2 regularization geometrically? Why does L1 produce sparse solutions?",a:"L2 (Ridge): penalty = Σwᵢ². Constraint region is a circle (sphere in n-D). Solution found at tangency with loss contours → shrinks weights but rarely to zero. L1 (Lasso): penalty = Σ|wᵢ|. Constraint region is a diamond (L1-ball). Diamond has corners on axes → optimal solution often hits a corner → weight = exactly 0 → feature selection. Intuition: L1 is more 'pointy' at zero.",source:"GeeksforGeeks / DataCamp stats interview",difficulty:"Medium"},{q:"How would you detect data leakage in a predictive model?",a:"Signs: suspiciously high train/test performance, feature importance of unexpected variables. Methods: (1) Check if any feature is derived post-event (future data). (2) Examine temporal ordering — was preprocessing done on full dataset before split? (3) Check target-correlated features that wouldn't be available at prediction time. (4) Run feature importance — if a variable that shouldn't predict is top, investigate. Fix: strict train/test temporal split; fit all transformers only on training data.",source:"MLsystem design interview — FAANG",difficulty:"Medium"},{q:"Walk me through self-attention in a Transformer. Why do we scale by √d_k?",a:"Q, K, V = linear projections of input. Attention scores = QKᵀ (similarity matrix). Scale by 1/√d_k because dot products grow with dimensionality → large values push softmax into saturation region → vanishing gradients. Softmax normalizes into probability distribution. Multiply by V to get weighted sum of values. Multi-head: run h parallel attention heads, concatenate, project. Allows model to attend to different representation subspaces.",source:"Netflix MLE / Spotify MLE interview",difficulty:"Hard"}]},{week:4,title:"Week 4 — A/B Testing + Causal + Product",days:"Days 22–28",color:"#8B5CF6",checklistSections:[{heading:"A/B Testing Design",items:["Can state sample size formula: n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ²  (z values: α=0.05→1.96, power=0.8→0.84)","Know 3 randomization units: user-level (most common), session-level (novelty effect risk), geo-level (network effects)","Know 5 types of metrics: primary, guardrail, secondary, tracking, diagnostic","Can explain novelty effect and how to detect it (plot metric over time in treatment — should stabilize)","Can explain network effect / SUTVA violation with an Airbnb marketplace example"]},{heading:"A/B Testing Analysis",items:["Can write two-proportion z-test: z = (p̂₁−p̂₂) / √[p̄(1−p̄)(1/n₁+1/n₂)]","Know CUPED: Y_adj = Y − θ·X_pre, θ = Cov(Y,X)/Var(X). Reduces variance by factor (1−ρ²)","Know Bonferroni correction: use α/k per test when running k simultaneous tests","Know peeking problem: stopping when p<0.05 inflates false positive rate. Fix: pre-register stopping rule, use sequential testing","Know conflict resolution when metrics diverge: check practical significance of each, segment to find which users drive the gap, escalate"]},{heading:"Causal Inference",items:["Know PSM steps: estimate propensity, match, check balance (SMD<0.1), estimate ATE on matched sample","Know DiD estimator: (Y_treat,post − Y_treat,pre) − (Y_ctrl,post − Y_ctrl,pre)","Know parallel trends assumption: both groups would have trended similarly absent treatment","Know RDD: compare just above vs just below a threshold — continuity assumption","Know IV: relevance (Z→T) + exclusion restriction (Z→Y only through T)"]},{heading:"Product Metrics",items:["Know Meta 4-type framework cold: Type 1 (Metric ID), Type 2 (Investigation), Type 3 (Launch/Not), Type 4 (Applied Data)","Know metric drop investigation order: clarify → decompose → time pattern → internal/external → segment","Can explain why 'avg response time' is a bad metric (declines by construction as time passes)","Know what makes a metric good: measurable, sensitive, aligned with long-term goals, not gameable"]}],derivationsToWrite:["Write sample size formula from memory. Plug in: α=0.05, power=0.8, p1=0.05, MDE=0.005 → what is n?","Write z-test formula for two proportions. Walk through: given treatment=45%, control=40%, n=1000 each → is it significant?","Write CUPED adjustment: Y_adj = Y − (Cov(Y,X_pre)/Var(X_pre)) × X_pre","Write DiD estimator. Draw the 2×2 table (pre/post × treat/control)","Walk through PSM 4 steps from memory"],decayReminders:[{concept:"Sample size formula",risk:"High",next:"MOST IMPORTANT — write this cold every morning this week"},{concept:"CUPED formula",risk:"High",next:"High decay — unusual formula. Re-derive from scratch before any interview"},{concept:"PSM steps",risk:"High",next:"High decay — 4 steps are easy to mix up. Write as a checklist"},{concept:"DiD parallel trends",risk:"Medium",next:"Medium decay — intuition stays, specifics fade"},{concept:"Meta product framework",risk:"Low",next:"Low decay if you've drilled the 4 types. Strong area for you"}],mockQuestions:[{q:"You run an A/B test for 2 weeks. p-value = 0.03, treatment is +5% on the primary metric. Should you launch?",a:"Not automatically. Check: (1) Is +5% practically significant? (2) Are guardrail metrics clean? (3) Is the effect stable over time (not just novelty)? (4) Any segment where it hurts (e.g., new users)? (5) Was the experiment correctly powered and not peeked? If all checks pass → launch with holdback (keep 5-10% on old experience) + post-launch monitoring plan.",source:"A/B Testing interview — Airbnb/Netflix style",difficulty:"Medium"},{q:"What is the multiple testing problem and how do you handle it?",a:"Running k tests at α=0.05 each gives 1−(0.95)^k probability of at least one false positive. k=14 tests → ~51% chance of spurious finding. Solutions: (1) Bonferroni: use α/k per test (conservative). (2) Benjamini-Hochberg (FDR): controls expected fraction of false discoveries. (3) Pre-specify primary metric, treat others as exploratory. (4) Use a composite metric / OEC.",source:"Netflix/Spotify A/B Testing",difficulty:"Medium"},{q:"A feature was rolled out to all users in Japan 3 months ago without a control group. How would you estimate its effect?",a:"Difference-in-Differences: use a comparable market (e.g., South Korea) as control. DiD estimate = (Japan post−Japan pre) − (Korea post−Korea pre). Validate: check parallel pre-trends for 6+ months before rollout. Threats: if Japan was chosen because it was struggling (selection bias), parallel trends assumption fails. Alternative: synthetic control — construct weighted combination of untreated markets that best match Japan's pre-trend.",source:"Netflix DS Causal Inference interview",difficulty:"Hard"},{q:"Explain the 'peeking problem' in A/B testing. Why is it statistically invalid to stop early when p < 0.05?",a:"Peeking: checking results repeatedly and stopping when significant inflates Type I error well above α. Example: checking daily for 30 days at α=0.05 → true false positive rate ~40%. The p-value was computed assuming a fixed sample size determined in advance. Solutions: (1) Pre-register stopping rule. (2) Sequential testing (O'Brien-Fleming boundaries). (3) Always-valid p-values (using e-values). (4) Bayesian methods with posterior stopping rules.",source:"Classic A/B testing pitfall — Trustworthy Online Experiments",difficulty:"Hard"},{q:"You want to measure the effect of adding a new search feature on Airbnb. Hosts and guests are on the same platform. What randomization strategy do you use and why?",a:"Network effect risk: a listing viewed by treatment users can be booked, making it unavailable to control users → treatment looks artificially better. Solutions: (1) Geo randomization — assign entire cities/markets to treatment or control (eliminates cross-contamination). (2) Listing-level randomization — randomize at supply side. Both sacrifice statistical power vs user-level but are unbiased. State tradeoff explicitly: geo gives cleanest estimate but requires more markets.",source:"Airbnb DS Inference interview",difficulty:"Hard"},{q:"A product manager asks: 'Our key metric dropped 15% overnight. What do you do?'",a:"Step 1 — Clarify: which metric exactly, over what time window, compared to what baseline? Step 2 — Data quality: is this a logging/pipeline issue? Check other metrics for similar anomaly. Step 3 — Time pattern: sudden=tech issue or bad deploy. Gradual=product change or external. Step 4 — Scope: did other features drop? If yes, broader issue. Step 5 — External: holiday, competitor launch, news event? Step 6 — Segment: country, platform, user cohort, device. Write SQL to break it down. Step 7 — Propose 2-3 most likely hypotheses with data to test each.",source:"Meta DS Onsite — Type 2 metric investigation",difficulty:"Medium"}]},{week:5,title:"Week 5 — Rec Systems + LeetCode",days:"Days 29–30",color:"#10B981",checklistSections:[{heading:"Recommendation Systems",items:["Know 3 approaches: collaborative filtering, content-based, hybrid","Know CF: user-user (find similar users) vs item-item (find similar items) via cosine similarity","Know matrix factorization: SVD/ALS, latent factors represent hidden features, minimizes reconstruction error","Know cold start problem: new user (no history) → use demographics/onboarding. New item → use content features","Know implicit vs explicit feedback: clicks/streams are implicit (noisy), ratings are explicit (sparse)"]},{heading:"LeetCode Patterns",items:["Know BFS pattern: queue-based, level-by-level traversal","Know DFS pattern: stack-based or recursive, explore depth first","Know DP pattern: define state, base case, recurrence. Memoize with dict or array","Know two-pointer pattern for sorted arrays","Know hash map for O(1) lookup frequency counting"]}],derivationsToWrite:["Write cosine similarity formula: cos(A,B) = (A·B) / (‖A‖·‖B‖)","Write the collaborative filtering ALS objective: minimize Σ(rᵤᵢ − uᵤ·vᵢ)² + λ(‖uᵤ‖² + ‖vᵢ‖²)","Explain AUC-PR for recommendation evaluation: why better than accuracy for sparse data"],decayReminders:[{concept:"CF vs content-based tradeoffs",risk:"Low",next:"Strong — intuition stays well"},{concept:"Cold start solutions",risk:"Medium",next:"Easy to forget the specific strategies — review before Spotify/Airbnb interview"},{concept:"Matrix factorization objective",risk:"High",next:"High decay — write from memory if targeting Spotify/Netflix MLE"}],mockQuestions:[{q:"Design a song recommendation system for a new Spotify user with no listening history (cold start problem).",a:"Cold start for new user: (1) Onboarding flow — ask user to pick 5 favorite artists/genres. Use content-based filtering on those. (2) Demographic-based — use similar users (age, country, device) as proxy. (3) Popularity-based — recommend globally trending in their inferred genre. (4) Progressive personalization — within 30 mins of listening, start updating recommendations in real time. Evaluation: diversity, serendipity, click-through rate, skip rate.",source:"Spotify MLE interview — Exponent",difficulty:"Hard"},{q:"What is the difference between collaborative filtering and content-based filtering? When does each fail?",a:"CF: recommends based on similarity between users' behavior (no item features needed). Fails: cold start (new user/item), popularity bias (popular items dominate), data sparsity. Content-based: recommends similar items to what user liked, using item features. Fails: serendipity (always recommends same type), requires rich item metadata, filter bubble. Hybrid: combine both — most production systems do this (e.g., two-tower models).",source:"Classic RecSys interview",difficulty:"Medium"},{q:"LeetCode pattern: given a list of course prerequisites as [course, prerequisite] pairs, determine if you can complete all courses.",a:"Topological sort / cycle detection in directed graph. Build adjacency list. Use DFS with states: 0=unvisited, 1=visiting, 2=visited. If you reach a node in state 1 during DFS → cycle → return false. If all nodes reach state 2 → no cycle → return true. Time: O(V+E). This is LeetCode #207 (Course Schedule).",source:"Netflix/Reddit LeetCode interview (BFS/DFS)",difficulty:"Medium"},{q:"How would you evaluate a recommendation system? What metrics would you use offline vs online?",a:"Offline: Precision@k (fraction of top-k recommendations relevant), Recall@k, NDCG (normalized discounted cumulative gain — rewards relevant items ranked higher), MAP (mean average precision). Online: Click-through rate, watch/listen completion rate, skip rate, session length, revenue, long-term retention (not just next-click). Key: offline metrics often don't correlate with online results — always run A/B test before concluding a new model is better.",source:"Spotify DS / Netflix MLE interview",difficulty:"Medium"}]}];function Qs({q:e,qKey:t,accentColor:n}){const[i,r]=I.useState(!1),[a,o]=I.useState(null),[s,d]=I.useState(!1),[p,y]=I.useState(90),c=lc[e.co]||"#666",u=e.freq==="High",v=e.freq==="Medium",b=()=>{if(s){d(!1),y(90);return}d(!0);let E=90;const x=setInterval(()=>{E--,y(E),E<=0&&(clearInterval(x),d(!1),y(90))},1e3)};return l.jsx("div",{style:{marginBottom:10,border:"1px solid "+(u?"#10b981":"rgba(255,255,255,.07)"),borderLeft:"3px solid "+(u?"#10b981":v?m.yellow:"rgba(255,255,255,.15)"),borderRadius:8,background:"rgba(0,0,0,.25)"},children:l.jsxs("div",{style:{padding:"10px 12px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:6,flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:c,background:c+"22",padding:"2px 7px",borderRadius:10},children:e.co}),u&&l.jsx("span",{style:{fontSize:9,fontWeight:700,color:"#10b981",background:"#10b98122",padding:"2px 7px",borderRadius:10},children:"★ High"}),v&&l.jsx("span",{style:{fontSize:9,fontWeight:700,color:m.yellow,background:m.yellow+"22",padding:"2px 7px",borderRadius:10},children:"◆ Med"})]}),l.jsx("div",{style:{fontSize:12,color:m.text,lineHeight:1.55},children:e.q}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:8,flexWrap:"wrap",alignItems:"center"},children:[!i&&l.jsx("button",{onClick:b,style:{fontSize:10,color:s?m.red:m.dim,background:"transparent",border:"1px solid "+(s?m.red:"rgba(255,255,255,.1)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:s?"⏱ "+p+"s":"⏱ 90s"}),e.a&&l.jsx("button",{onClick:()=>r(E=>!E),style:{fontSize:10,color:i?n||m.purple:m.dim,background:"transparent",border:"1px solid "+(i?n||m.purple:"rgba(255,255,255,.12)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:i?"Hide ▲":"Show answer ▼"}),i&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>o("got"),style:{fontSize:10,fontWeight:700,color:a==="got"?m.green:m.dim,background:a==="got"?"rgba(16,185,129,.15)":"transparent",border:"1px solid "+(a==="got"?m.green:"rgba(255,255,255,.1)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:"✓ Got it"}),l.jsx("button",{onClick:()=>o("struggled"),style:{fontSize:10,fontWeight:700,color:a==="struggled"?m.red:m.dim,background:a==="struggled"?"rgba(239,68,68,.15)":"transparent",border:"1px solid "+(a==="struggled"?m.red:"rgba(255,255,255,.1)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:"✗ Struggled"})]})]}),i&&e.a&&l.jsx("div",{style:{marginTop:8,padding:"8px 10px",background:(n||m.purple)+"12",border:"1px solid "+(n||m.purple)+"30",borderRadius:6,fontSize:11,color:"#86efac",lineHeight:1.55,fontStyle:"italic"},children:e.a})]})})}const Bp={6:[{q:`年底找朋友内推了的，年初约上了第一轮店面。有一轮实验设计大家，主页多一个filter叫“work from home", 用户可以点这个filter找出更work remote的listing。success metric就是booking/visits。. Χ

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

我用的遍历K（0~26） + DP （Python3），test case 9/13, 最后几个点TLE了。欢迎指导给出更好的答案`,a:"",co:"Salesforce",pos:"MLE ",freq:""}]},Up={1:[],2:[{concept:"Bayes' theorem formula",action:"Write P(A|B) = P(B|A)·P(A)/P(B) from memory. Solve the Seattle rain problem cold.",decay:"High",fromWeek:1},{concept:"Sample size formula",action:"Write n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ² from memory. You'll need this in Week 4.",decay:"High",fromWeek:1},{concept:"Meta distribution questions",action:"Say aloud: comments/user/day → mode≈1, median≈3, mean≈8-10, p95≈100. Posts → log-normal, mode=0.",decay:"High",fromWeek:1},{concept:"Meta SQL percentage pattern",action:"Write AVG(CASE WHEN condition THEN 1 ELSE 0 END) from memory — the most-used Meta SQL pattern.",decay:"Medium",fromWeek:1}],3:[{concept:"Bayes fraud detection",action:"Compute P(bad|flagged) mentally: 1% base rate, 99% accuracy → ~50%. Say the steps aloud.",decay:"High",fromWeek:1},{concept:"p-value plain English",action:"Answer cold: 'p=0.25, what do you tell a PM?' No notes.",decay:"High",fromWeek:1},{concept:"Spotify A/B SQL pattern",action:"Write the query: LEFT JOIN streams ON user_id AND date >= first_exposed_date. Group by bucket.",decay:"High",fromWeek:2},{concept:"Meta bidirectional JOIN",action:"Write: JOIN ON user_id = caller OR user_id = recipient. When does this pattern appear?",decay:"High",fromWeek:2},{concept:"np.where Pandas pattern",action:"Write: df['adj'] = np.where(df['platform']=='desktop', df['streams']/2, df['streams'])",decay:"Medium",fromWeek:2}],4:[{concept:"OLS β formula",action:"Write β = (XᵀX)⁻¹Xᵀy from memory. Why do we invert XᵀX?",decay:"High",fromWeek:3},{concept:"Gini impurity formula",action:"Write G = 1 − Σpᵢ². Compute for a 50/50 split. Compute for a pure node.",decay:"High",fromWeek:3},{concept:"XGBoost hyperparameters",action:"List 5 key hyperparameters cold: n_estimators, learning_rate, max_depth, subsample, colsample_bytree.",decay:"Medium",fromWeek:3},{concept:"Attention formula",action:"Write: Attention(Q,K,V) = softmax(QKᵀ/√d_k)·V. Why divide by √d_k?",decay:"High",fromWeek:3},{concept:"Bayes' theorem (from Week 1)",action:"Quick 2-min drill: solve the three-friends-Seattle problem without notes.",decay:"High",fromWeek:1}],5:[{concept:"Sample size formula",action:"Write n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ². Plug in: α=0.05, power=0.8, p=0.05, MDE=0.005.",decay:"High",fromWeek:4},{concept:"CUPED formula",action:"Write Y_adj = Y − θ·X_pre where θ = Cov(Y,X)/Var(X). What does θ represent?",decay:"High",fromWeek:4},{concept:"PSM steps",action:"List 4 steps cold: (1) estimate propensity, (2) match, (3) check balance SMD<0.1, (4) estimate ATE.",decay:"High",fromWeek:4},{concept:"Meta product framework",action:"Say the 4 types: Metric ID, Metric Investigation, Launch/Not, Applied Data. One example of each.",decay:"Medium",fromWeek:4},{concept:"OLS + Gini (from Week 3)",action:"Write both derivations in 2 minutes. These come up in ML system design questions.",decay:"High",fromWeek:3}]};function Hp({day:e}){const[t,n]=I.useState(!1),[i,r]=I.useState(!1),[a,o]=I.useState(!1),s=nr[e.cat]||nr.stats,d=e.cat==="review",p=Bp[e.day]||[],y=[7,14,21,28].includes(e.day)&&Up[e.week]||[];return l.jsxs("div",{onClick:()=>n(c=>!c),style:{background:t?`linear-gradient(135deg,${s.color}18,rgba(255,255,255,.04))`:d?"rgba(100,116,139,.1)":m.card,border:"1px solid "+(t?s.color+"60":d?"#475569":m.border),borderRadius:12,padding:"16px 18px",cursor:"pointer",opacity:i?.5:1,position:"relative",transition:"all .2s"},children:[i&&l.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,.35)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,borderRadius:12,zIndex:2},children:"✓"}),l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:9,fontWeight:700,letterSpacing:2,color:s.color,textTransform:"uppercase"},children:["Day ",e.day]}),l.jsxs("div",{style:{fontSize:14,fontWeight:600,marginTop:3,lineHeight:1.3},children:[s.emoji," ",e.title]})]}),l.jsx("button",{onClick:c=>{c.stopPropagation(),r(u=>!u)},style:{width:22,height:22,borderRadius:"50%",border:"2px solid "+(i?s.color:"rgba(255,255,255,.2)"),background:i?s.color:"transparent",cursor:"pointer",flexShrink:0,marginLeft:8,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:11},children:i?"✓":""})]}),!t&&l.jsxs("div",{style:{fontSize:11,color:"#475569"},children:[e.topics[0],e.topics.length>1?` +${e.topics.length-1} more`:"",e.questions.length>0?` · ${e.questions.length} Qs`:""]}),t&&l.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:12,marginTop:6},children:[y.length>0&&l.jsxs("div",{style:{marginBottom:14,background:"rgba(239,68,68,.07)",border:"1px solid rgba(239,68,68,.25)",borderRadius:10,padding:"14px 16px"},children:[l.jsx("div",{style:{fontSize:10,fontWeight:700,color:m.red,letterSpacing:2,textTransform:"uppercase",marginBottom:4},children:"⏰ Weekly Review — do this first"}),l.jsx("div",{style:{fontSize:11,color:m.dim,marginBottom:12},children:"1 hour: write each derivation cold — no notes."}),y.map((c,u)=>{const v=c.risk==="High"?m.red:m.yellow;return l.jsxs("div",{style:{marginBottom:8,padding:"9px 11px",background:"rgba(0,0,0,.2)",borderRadius:8,borderLeft:"3px solid "+v},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4,flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:11,fontWeight:700,color:m.text},children:c.concept}),l.jsxs("span",{style:{fontSize:9,color:m.dim,background:"rgba(255,255,255,.06)",padding:"1px 6px",borderRadius:4},children:["Week ",c.fromWeek]}),l.jsx("span",{style:{fontSize:9,color:v,marginLeft:"auto"},children:c.risk==="High"?"🔴 High":"🟡 Med"})]}),l.jsx("div",{style:{fontSize:11,color:m.muted,lineHeight:1.5},children:c.action})]},u)})]}),l.jsxs("div",{style:{marginBottom:12},children:[l.jsx("div",{style:{fontSize:9,letterSpacing:2,color:m.dim,textTransform:"uppercase",marginBottom:6},children:"Topics"}),e.topics.map((c,u)=>l.jsx("div",{style:{fontSize:12,color:c.startsWith("→")||c.startsWith("✍")?m.purple:m.muted,marginBottom:4,paddingLeft:10,borderLeft:"2px solid "+(c.startsWith("→")||c.startsWith("✍")?m.purple:s.color+"60")},children:c},u))]}),l.jsxs("div",{style:{marginBottom:12},children:[l.jsx("div",{style:{fontSize:9,letterSpacing:2,color:m.dim,textTransform:"uppercase",marginBottom:6},children:"Resources"}),e.resources.map((c,u)=>{const v=c.match(/—\s*(\S+\.\S+)/),b=v?(v[1].startsWith("http")?"":"https://")+v[1]:null,E=v?c.replace(/—\s*\S+\.\S+$/,"").trim():c;return l.jsxs("div",{style:{fontSize:11,color:m.purple,marginBottom:3},children:["→ ",b?l.jsx("a",{href:b,target:"_blank",rel:"noreferrer",onClick:x=>x.stopPropagation(),style:{color:m.purple,textDecoration:"underline"},children:E}):c]},u)})]}),e.questions.length>0&&l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:9,letterSpacing:2,color:m.dim,textTransform:"uppercase",marginBottom:8},children:["Practice Questions (",e.questions.length,")"]}),e.questions.map((c,u)=>l.jsx(Qs,{q:c,qKey:`${e.day}-${u}`,accentColor:s.color},u))]}),p.length>0&&l.jsxs("div",{style:{marginTop:12,borderTop:"1px solid rgba(255,255,255,.06)",paddingTop:12},children:[l.jsxs("button",{onClick:c=>{c.stopPropagation(),o(u=>!u)},style:{fontSize:10,color:m.dim,background:"transparent",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,padding:"4px 12px",cursor:"pointer",width:"100%",textAlign:"left"},children:[a?"▲ Hide":"▼ Show"," ",p.length," real interview reports (1point3acres)"]}),a&&p.map((c,u)=>l.jsx(Qs,{q:c,qKey:`raw-${e.day}-${u}`,accentColor:m.dim},u))]}),e.day<=3&&l.jsx("div",{style:{marginTop:12,paddingTop:12,borderTop:"1px solid rgba(255,255,255,.06)"},children:l.jsx("a",{href:`/day/${e.day}`,onClick:c=>c.stopPropagation(),style:{fontSize:11,color:m.purple,textDecoration:"none"},children:"📖 Open full study page →"})})]})]})}const zp=[...new Set(Sn.map(e=>e.week))];function Fp(){const[e,t]=I.useState("all"),[n,i]=I.useState("schedule"),[r,a]=I.useState(1),[o,s]=I.useState({}),[d,p]=I.useState({});I.useState(0);const y=e==="all"?Sn:Sn.filter(c=>c.cat===e);return l.jsxs("div",{style:{fontFamily:"Inter,system-ui,sans-serif",background:m.bg,minHeight:"100vh",color:m.text},children:[l.jsx("div",{style:{background:"rgba(255,255,255,.03)",borderBottom:"1px solid "+m.border,padding:"24px 36px 0",position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"},children:l.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:12,paddingBottom:4},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:4,color:m.purple,textTransform:"uppercase",marginBottom:6},children:"DS Interview Prep · 158 Curated Questions · 6 Companies"}),l.jsxs("h1",{style:{margin:0,fontSize:28,fontWeight:700},children:["30-Day ",l.jsx("span",{style:{color:m.purple},children:"Study Schedule"})]})]}),l.jsx("div",{children:l.jsx("a",{href:"/day/3",style:{fontSize:12,color:m.purple,textDecoration:"none",padding:"6px 16px",border:"1px solid rgba(167,139,250,.3)",borderRadius:20},children:"📖 Today: Day 3"})})]}),l.jsx("div",{style:{display:"flex",gap:0,marginTop:18},children:[["schedule","📅 Schedule"],["legend","📚 Legend"],["review","📝 Weekly Review"]].map(([c,u])=>l.jsx("button",{onClick:()=>i(c),style:{padding:"8px 18px",border:"none",background:"transparent",color:n===c?m.purple:m.dim,borderBottom:"2px solid "+(n===c?m.purple:"transparent"),cursor:"pointer",fontSize:13,fontWeight:n===c?700:400,transition:"all .2s"},children:u},c))})]})}),l.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"28px 36px 48px"},children:[n==="schedule"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"},children:[l.jsx("button",{onClick:()=>t("all"),style:{padding:"4px 14px",borderRadius:20,border:"1px solid rgba(255,255,255,.2)",background:e==="all"?"rgba(167,139,250,.3)":"transparent",color:m.text,cursor:"pointer",fontSize:12},children:"All"}),Object.entries(nr).map(([c,u])=>l.jsxs("button",{onClick:()=>t(c),style:{padding:"4px 14px",borderRadius:20,border:"1px solid "+u.color+"50",background:e===c?u.color+"30":"transparent",color:e===c?u.color:m.muted,cursor:"pointer",fontSize:12},children:[u.emoji," ",u.label]},c))]}),zp.map(c=>{const u=y.filter(v=>v.week===c);return u.length?l.jsxs("div",{style:{marginBottom:40},children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:"#475569",textTransform:"uppercase",marginBottom:14},children:Pp[c]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:12},children:u.map(v=>l.jsx(Hp,{day:v},v.day))})]},c):null})]}),n==="legend"&&l.jsxs("div",{children:[l.jsxs("div",{style:{background:"rgba(167,139,250,.08)",border:"1px solid rgba(167,139,250,.25)",borderRadius:14,padding:"18px 24px",marginBottom:24},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:2,textTransform:"uppercase",marginBottom:14},children:"Why This Week Order — Retention Risk"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12},children:[["Week 1","Stats + SQL","Low","#10b981","Procedural. Low decay once fluent."],["Week 2","SQL Advanced + Python","Low","#10b981","Pattern-based. Mechanical."],["Week 3","ML Deep Dive","Medium","#f59e0b","Derivations fade but fast to re-review."],["Week 4","A/B + Causal + Product","High ⚠️","#ef4444","Highest decay — must be fresh at interview time."],["Week 5","Rec Systems + LeetCode","Medium","#f59e0b","Light reinforcement week."]].map(([c,u,v,b,E])=>l.jsxs("div",{style:{background:"rgba(0,0,0,.2)",borderRadius:10,padding:"12px 14px",borderLeft:"3px solid "+b},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.text},children:c}),l.jsx("span",{style:{fontSize:9,fontWeight:700,color:b,background:b+"22",padding:"2px 7px",borderRadius:8},children:v})]}),l.jsx("div",{style:{fontSize:11,fontWeight:600,color:m.muted,marginBottom:4},children:u}),l.jsx("div",{style:{fontSize:11,color:m.dim,lineHeight:1.5},children:E})]},c))})]}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12},children:Object.entries(nr).map(([c,u])=>{const v=Sn.filter(E=>E.cat===c).length,b=Sn.filter(E=>E.cat===c).reduce((E,x)=>E+x.questions.length,0);return l.jsxs("div",{style:{background:m.card,border:"1px solid "+u.color+"40",borderRadius:12,padding:"14px 16px"},children:[l.jsx("div",{style:{fontSize:18},children:u.emoji}),l.jsx("div",{style:{fontSize:13,fontWeight:700,color:u.color,marginTop:6},children:u.label}),l.jsxs("div",{style:{fontSize:11,color:m.muted,marginTop:4},children:[v," day",v!==1?"s":""," · ",b," questions"]})]},c)})})]}),n==="review"&&l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",gap:10,marginBottom:24,flexWrap:"wrap"},children:Vs.map(c=>l.jsxs("button",{onClick:()=>a(c.week),style:{padding:"8px 20px",borderRadius:24,border:"2px solid "+(r===c.week?c.color:"rgba(255,255,255,.1)"),background:r===c.week?c.color+"22":"transparent",color:r===c.week?c.color:m.dim,cursor:"pointer",fontSize:13,fontWeight:r===c.week?700:400},children:["Week ",c.week]},c.week))}),Vs.filter(c=>c.week===r).map(c=>l.jsxs("div",{children:[l.jsxs("div",{style:{marginBottom:20},children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:c.color,textTransform:"uppercase",marginBottom:4},children:c.days}),l.jsx("div",{style:{fontSize:20,fontWeight:700},children:c.title})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16},children:[l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:c.color,textTransform:"uppercase",marginBottom:14},children:"✅ Can You Do All of These?"}),c.checklistSections.map((u,v)=>l.jsxs("div",{style:{marginBottom:14},children:[l.jsxs("div",{style:{fontSize:11,fontWeight:700,color:m.muted,marginBottom:8,paddingLeft:4,borderLeft:"2px solid "+c.color},children:[" ",u.heading]}),u.items.map((b,E)=>{const x=`${c.week}-${v}-${E}`,g=o[x];return l.jsxs("div",{onClick:()=>s(h=>({...h,[x]:!h[x]})),style:{display:"flex",gap:10,alignItems:"flex-start",marginBottom:7,cursor:"pointer",opacity:g?.5:1},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:4,border:"1.5px solid "+(g?c.color:"rgba(255,255,255,.2)"),background:g?c.color:"transparent",flexShrink:0,marginTop:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white"},children:g?"✓":""}),l.jsx("div",{style:{fontSize:12,color:g?m.dim:m.muted,lineHeight:1.5,textDecoration:g?"line-through":"none"},children:b})]},E)})]},v))]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:m.purple,textTransform:"uppercase",marginBottom:10},children:"✍️ Write from Memory"}),l.jsx("p",{style:{fontSize:11,color:m.dim,marginBottom:10,fontStyle:"italic"},children:"Close your notes. Write each cold."}),c.derivationsToWrite.map((u,v)=>l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start",marginBottom:8},children:[l.jsxs("div",{style:{color:m.purple,fontSize:11,flexShrink:0},children:[v+1,"."]}),l.jsx("div",{style:{fontSize:12,color:m.muted,lineHeight:1.5},children:u})]},v))]}),l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:m.red,textTransform:"uppercase",marginBottom:12},children:"⏰ Memory Decay Reminders"}),c.decayReminders.map((u,v)=>{const b=u.risk==="High"?m.red:u.risk==="Medium"?m.yellow:m.green;return l.jsxs("div",{style:{marginBottom:10,padding:"10px 12px",background:"rgba(0,0,0,.2)",borderRadius:8,borderLeft:"3px solid "+b},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:4},children:[l.jsx("span",{style:{fontSize:11,fontWeight:700,color:m.text},children:u.concept}),l.jsxs("span",{style:{fontSize:9,fontWeight:700,color:b,background:b+"22",padding:"1px 6px",borderRadius:6},children:["Decay: ",u.risk]})]}),l.jsx("div",{style:{fontSize:11,color:m.dim},children:u.next})]},v)})]})]})]}),l.jsxs("div",{style:{background:m.card,borderRadius:14,border:"1px solid "+m.border,padding:"18px 20px"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:2,color:"#06b6d4",textTransform:"uppercase",marginBottom:6},children:"🎯 Mock Interview Questions"}),l.jsx("div",{style:{fontSize:11,color:m.dim,marginBottom:14},children:"Classic DS interview questions from FAANG, DataLemur, StrataScratch."}),c.mockQuestions.map((u,v)=>{const b=`mock-${c.week}-${v}`,E=d[b],x=u.difficulty==="Easy"?m.green:u.difficulty==="Medium"?m.yellow:m.red;return l.jsx("div",{style:{marginBottom:12,border:"1px solid rgba(255,255,255,.07)",borderLeft:"3px solid "+x,borderRadius:10,background:"rgba(0,0,0,.2)"},children:l.jsxs("div",{style:{padding:"12px 14px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8,flexWrap:"wrap"},children:[l.jsx("span",{style:{fontSize:9,fontWeight:700,color:x,background:x+"22",padding:"2px 7px",borderRadius:8},children:u.difficulty}),l.jsx("span",{style:{fontSize:10,color:"#475569"},children:u.source})]}),l.jsx("div",{style:{fontSize:13,fontWeight:500,color:m.text,lineHeight:1.6,marginBottom:10},children:u.q}),l.jsx("button",{onClick:()=>p(g=>({...g,[b]:!g[b]})),style:{fontSize:10,color:E?"#06b6d4":m.dim,background:"transparent",border:"1px solid "+(E?"#06b6d4":"rgba(255,255,255,.12)"),borderRadius:6,padding:"3px 10px",cursor:"pointer"},children:E?"Hide answer ▲":"Show answer ▼"}),E&&l.jsx("div",{style:{marginTop:10,padding:"10px 12px",background:"rgba(6,182,212,.08)",border:"1px solid rgba(6,182,212,.2)",borderRadius:8,fontSize:12,color:"#67e8f9",lineHeight:1.6,fontStyle:"italic"},children:u.a})]})},v)})]})]},c.week))]})]})]})}function Gp({text:e,baseColor:t}){if(!e)return null;const n=t||m.muted,i=r=>r.split(/\*\*(.*?)\*\*/g).map((o,s)=>s%2===1?l.jsx("strong",{style:{color:m.text,fontWeight:700},children:o},s):o);return l.jsx("div",{style:{lineHeight:1.8},children:e.split(`
`).map((r,a)=>{if(!r.trim())return l.jsx("div",{style:{height:8}},a);const o=(r.match(/^(\s+)/)||["",""])[1].length,s=r.trim(),d=/^[A-Z].*[:\(]/.test(s)&&s.length<60;return l.jsx("div",{style:{paddingLeft:Math.min(o*8,40),marginBottom:2,fontSize:d?13:14,color:o>0?m.muted:n,fontFamily:d?"'IBM Plex Mono', monospace":"inherit"},children:i(s)},a)})})}function jp({card:e}){const[t,n]=I.useState(!1);return l.jsxs("div",{onClick:()=>n(i=>!i),style:{background:t?"rgba(167,139,250,.1)":m.card,border:"1px solid "+(t?m.purple:m.border),borderRadius:10,padding:"14px 16px",cursor:"pointer",marginBottom:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,minHeight:56,transition:"all .2s"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:10,color:t?m.purple:m.dim,marginBottom:3,textTransform:"uppercase",letterSpacing:1},children:t?"Answer":"Question — click to flip"}),l.jsx("div",{style:{fontSize:13,color:t?m.text:m.muted,lineHeight:1.5},children:t?e.a:e.q})]}),l.jsx("div",{style:{fontSize:20,flexShrink:0,color:m.dim},children:t?"✓":"→"})]})}function Yp({data:e}){const[t,n]=I.useState({}),[i,r]=I.useState({}),[a,o]=I.useState({}),[s,d]=I.useState({});if(!e)return l.jsxs("div",{style:{background:m.bg,minHeight:"100vh",color:m.text,fontFamily:"Inter,system-ui,sans-serif",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[l.jsx("div",{style:{fontSize:48},children:"📋"}),l.jsx("h2",{style:{fontSize:22,fontWeight:700},children:"Coming soon"}),l.jsx("p",{style:{color:m.muted,fontSize:14},children:"Work with Claude to build this page"}),l.jsx("a",{href:"/",style:{color:m.purple,textDecoration:"none",fontSize:13,padding:"8px 20px",border:"1px solid rgba(167,139,250,.3)",borderRadius:20},children:"← Back to Schedule"})]});const p=e,y=c=>{var b;if((b=a[c])!=null&&b.running){clearInterval(a[c].iv),o(E=>({...E,[c]:{running:!1,secs:90}}));return}let u=90;const v=setInterval(()=>{u--,o(E=>({...E,[c]:{running:u>0,secs:u,iv:v}})),u<=0&&clearInterval(v)},1e3);o(E=>({...E,[c]:{running:!0,secs:90,iv:v}}))};return l.jsxs("div",{style:{background:m.bg,minHeight:"100vh",color:m.text,fontFamily:"Inter,system-ui,sans-serif"},children:[l.jsxs("nav",{style:{background:"rgba(255,255,255,.03)",borderBottom:"1px solid "+m.border,padding:"14px 36px",display:"flex",alignItems:"center",gap:16,position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"},children:[l.jsx("a",{href:"/",style:{fontWeight:700,color:m.purple,textDecoration:"none",fontSize:13},children:"📅 Schedule"}),l.jsx("span",{style:{color:"rgba(255,255,255,.15)"},children:"/"}),l.jsxs("span",{style:{fontSize:13},children:["Day ",p.day]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[p.prev_day&&l.jsxs("a",{href:"/day/"+p.prev_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["← Day ",p.prev_day]}),p.next_day&&l.jsxs("a",{href:"/day/"+p.next_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["Day ",p.next_day," →"]})]})]}),l.jsxs("div",{style:{padding:"40px 36px 16px",maxWidth:900,margin:"0 auto"},children:[l.jsxs("div",{style:{fontSize:10,letterSpacing:4,color:m.purple,textTransform:"uppercase",marginBottom:8},children:["Day ",p.day," · ",p.date_note]}),l.jsx("h1",{style:{fontSize:30,fontWeight:700,marginBottom:8},children:p.title}),l.jsx("p",{style:{fontSize:14,color:m.muted},children:p.week_label})]}),l.jsx("div",{style:{display:"flex",gap:3,padding:"0 36px 24px",maxWidth:900,margin:"0 auto"},children:Array.from({length:30},(c,u)=>l.jsx("div",{style:{height:4,flex:1,borderRadius:2,background:u<p.day-1?"#a78bfa":u===p.day-1?m.yellow:"rgba(255,255,255,.1)"}},u))}),l.jsxs("main",{style:{maxWidth:900,margin:"0 auto",padding:"0 36px 80px"},children:[p.recap&&l.jsxs("div",{style:{background:"rgba(167,139,250,.06)",border:"1px solid rgba(167,139,250,.2)",borderRadius:12,padding:"20px 24px",marginBottom:32},children:[l.jsxs("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:2,textTransform:"uppercase",marginBottom:12},children:["📋 ",p.recap.title]}),p.recap.points.map((c,u)=>l.jsx("div",{style:{fontSize:13,color:m.muted,padding:"4px 0 4px 16px",borderLeft:"2px solid rgba(167,139,250,.3)",marginBottom:6},children:c},u))]}),l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"Today's Content"}),p.topics.map((c,u)=>l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderLeft:"4px solid "+c.color,borderRadius:14,padding:"24px 28px",marginBottom:20},children:[l.jsx("h2",{style:{color:c.color,fontSize:18,fontWeight:700,marginBottom:16},children:c.title}),l.jsx(Gp,{text:c.content}),l.jsxs("div",{style:{marginTop:16,padding:"12px 16px",background:"rgba(167,139,250,.08)",border:"1px solid rgba(167,139,250,.2)",borderRadius:8},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:1,textTransform:"uppercase",marginBottom:6},children:"💡 Say it out loud"}),l.jsx("div",{style:{fontSize:13,color:m.muted,lineHeight:1.6},children:c.interview_tip})]})]},u)),p.flashcards&&p.flashcards.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"🃏 Flashcards — Click to Flip"}),l.jsx("div",{style:{marginBottom:32},children:p.flashcards.map((c,u)=>l.jsx(jp,{card:c},u))})]}),l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"✍️ Write from Memory"}),l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderRadius:12,padding:"20px 24px",marginBottom:32},children:[l.jsx("p",{style:{fontSize:12,color:m.dim,marginBottom:16,fontStyle:"italic"},children:"Close your notes. Check each box only when you can write it completely from memory."}),p.derivations.map((c,u)=>l.jsxs("div",{onClick:()=>n(v=>({...v,[u]:!v[u]})),style:{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,.06)",cursor:"pointer",opacity:t[u]?.5:1},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:4,border:"1.5px solid "+(t[u]?m.purple:"rgba(255,255,255,.2)"),background:t[u]?m.purple:"transparent",flexShrink:0,marginTop:2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white"},children:t[u]?"✓":""}),l.jsx("div",{style:{fontSize:13,color:t[u]?m.dim:m.muted,textDecoration:t[u]?"line-through":"none",lineHeight:1.5},children:c})]},u))]}),l.jsxs("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:["Practice Questions (",p.practice_questions.length,")"]}),p.practice_questions.map((c,u)=>{const v=s[u],b=i[u],E=a[u],x=c.difficulty==="Easy"?m.green:c.difficulty==="Medium"?m.yellow:m.red;return l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderRadius:12,marginBottom:16,overflow:"hidden"},children:[l.jsxs("div",{style:{padding:"12px 16px 8px",display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[l.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#1877F2",background:"rgba(24,119,242,.15)",padding:"2px 8px",borderRadius:8},children:c.company}),l.jsx("span",{style:{fontSize:10,fontWeight:700,color:x,background:x+"20",padding:"2px 8px",borderRadius:8,border:"1px solid "+x+"40"},children:c.difficulty}),l.jsx("button",{onClick:()=>y(u),style:{fontSize:11,padding:"3px 10px",borderRadius:6,border:"1px solid "+(E!=null&&E.running?m.red:"rgba(255,255,255,.12)"),background:"transparent",color:E!=null&&E.running?m.red:m.dim,cursor:"pointer",marginLeft:"auto"},children:E!=null&&E.running?"⏱ "+E.secs+"s":"⏱ 90s"})]}),l.jsx("p",{style:{fontSize:14,color:m.text,padding:"4px 16px 12px",lineHeight:1.6},children:c.q}),l.jsxs("div",{style:{padding:"0 16px 12px",display:"flex",gap:8,flexWrap:"wrap"},children:[l.jsx("button",{onClick:()=>d(g=>({...g,[u]:!g[u]})),style:{fontSize:11,padding:"4px 12px",borderRadius:6,border:"1px solid "+(v?m.purple:"rgba(255,255,255,.12)"),background:"transparent",color:v?m.purple:m.dim,cursor:"pointer"},children:v?"Hide ▲":"Show answer ▼"}),v&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>r(g=>({...g,[u]:"got"})),style:{fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:6,border:"1px solid "+(b==="got"?m.green:"rgba(255,255,255,.12)"),background:b==="got"?"rgba(16,185,129,.15)":"transparent",color:b==="got"?m.green:m.dim,cursor:"pointer"},children:"✓ Got it"}),l.jsx("button",{onClick:()=>r(g=>({...g,[u]:"struggled"})),style:{fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:6,border:"1px solid "+(b==="struggled"?m.red:"rgba(255,255,255,.12)"),background:b==="struggled"?"rgba(239,68,68,.15)":"transparent",color:b==="struggled"?m.red:m.dim,cursor:"pointer"},children:"✗ Struggled"})]})]}),v&&l.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,.08)",padding:16,background:"rgba(134,239,172,.04)"},children:[l.jsx("p",{style:{fontSize:13,color:m.muted,lineHeight:1.6},children:c.a}),c.say_aloud&&l.jsxs("div",{style:{marginTop:12,padding:"10px 14px",background:"rgba(167,139,250,.08)",borderRadius:8},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,marginBottom:4,textTransform:"uppercase",letterSpacing:1},children:"🎤 How to say it"}),l.jsx("div",{style:{fontSize:12,color:m.muted,lineHeight:1.6},children:c.say_aloud})]})]})]},u)}),l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:16,marginTop:40},children:"Resources"}),p.resources.map((c,u)=>l.jsxs("a",{href:c.url,target:"_blank",rel:"noreferrer",style:{display:"block",padding:"12px 16px",background:m.card,border:"1px solid "+m.border,borderRadius:8,textDecoration:"none",color:m.purple,fontSize:13,marginBottom:8},children:["→ ",c.name]},u)),p.tomorrow_preview&&l.jsxs("div",{style:{background:"rgba(16,185,129,.06)",border:"1px solid rgba(16,185,129,.2)",borderRadius:12,padding:"20px 24px",marginTop:40},children:[l.jsxs("div",{style:{fontSize:11,fontWeight:700,color:m.green,letterSpacing:2,textTransform:"uppercase",marginBottom:10},children:["👀 Tomorrow — Day ",p.next_day]}),l.jsx("p",{style:{fontSize:13,color:m.muted},children:p.tomorrow_preview})]})]})]})}const Xs={High:{color:"#4ade80",bg:"rgba(74,222,128,.12)"},Medium:{color:"#a3e635",bg:"rgba(163,230,53,.10)"}};function Vp({data:e}){const[t,n]=I.useState({}),[i,r]=I.useState({}),[a,o]=I.useState({}),s=e.sections.flatMap(f=>f.qs),d=s.length,p=Object.values(t).filter(f=>f==="correct").length,y=Object.values(t).filter(f=>f==="wrong").length,c=d-p-y,u=Math.round((p+y)/d*100),b=p+y===d?Math.round(p/d*100):null,E=f=>r(w=>({...w,[f]:!w[f]})),x=(f,w)=>n(S=>{if(S[f]===w){const k={...S};return delete k[f],k}return{...S,[f]:w}}),g=()=>{n({}),r({})},h=s.filter(f=>t[f.id]==="wrong");return l.jsxs("div",{style:{background:m.bg,minHeight:"100vh",color:m.text,fontFamily:"Inter,system-ui,sans-serif"},children:[l.jsxs("nav",{style:{background:"rgba(255,255,255,.03)",borderBottom:"1px solid "+m.border,padding:"14px 36px",display:"flex",alignItems:"center",gap:16,position:"sticky",top:0,zIndex:100,backdropFilter:"blur(20px)"},children:[l.jsx("a",{href:"/",style:{fontWeight:700,color:m.purple,textDecoration:"none",fontSize:13},children:"📅 Schedule"}),l.jsx("span",{style:{color:"rgba(255,255,255,.15)"},children:"/"}),l.jsxs("span",{style:{fontSize:13},children:["Day ",e.day]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[e.prev_day&&l.jsxs("a",{href:"/day/"+e.prev_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["← Day ",e.prev_day]}),e.next_day&&l.jsxs("a",{href:"/day/"+e.next_day,style:{padding:"6px 14px",border:"1px solid rgba(255,255,255,.1)",borderRadius:20,fontSize:12,color:m.muted,textDecoration:"none"},children:["Day ",e.next_day," →"]})]})]}),l.jsxs("div",{style:{position:"sticky",top:57,zIndex:99,background:m.bg+"f0",backdropFilter:"blur(20px)",borderBottom:"1px solid "+m.border,padding:"10px 36px",display:"flex",alignItems:"center",gap:18},children:[l.jsx("span",{style:{fontSize:12,color:m.dim,fontWeight:600},children:"Score"}),l.jsx("span",{style:{fontSize:22,fontWeight:800,color:"#4ade80",lineHeight:1},children:p}),l.jsx("span",{style:{color:m.dim,fontSize:16},children:"·"}),l.jsx("span",{style:{fontSize:22,fontWeight:800,color:"#ef4444",lineHeight:1},children:y}),l.jsx("span",{style:{color:m.dim,fontSize:16},children:"·"}),l.jsx("span",{style:{fontSize:22,fontWeight:800,color:m.dim,lineHeight:1},children:c}),l.jsx("div",{style:{width:140,height:5,background:"rgba(255,255,255,.08)",borderRadius:3,overflow:"hidden"},children:l.jsx("div",{style:{height:"100%",width:u+"%",background:"linear-gradient(90deg,#4ade80,#60a5fa)",borderRadius:3,transition:"width .3s"}})}),l.jsxs("span",{style:{fontSize:12,color:m.dim},children:[u,"%"]}),l.jsx("button",{onClick:g,style:{marginLeft:"auto",background:"rgba(255,255,255,.06)",border:"1px solid "+m.border,color:m.muted,padding:"6px 14px",borderRadius:8,fontSize:12,cursor:"pointer",fontWeight:600},children:"↺ Reset"})]}),l.jsxs("div",{style:{padding:"40px 36px 8px",maxWidth:900,margin:"0 auto"},children:[l.jsx("div",{style:{fontSize:10,letterSpacing:4,color:m.purple,textTransform:"uppercase",marginBottom:8},children:e.date_note}),l.jsx("h1",{style:{fontSize:30,fontWeight:700,marginBottom:8},children:e.title}),l.jsx("p",{style:{fontSize:14,color:m.muted},children:e.subtitle})]}),l.jsx("div",{style:{display:"flex",gap:3,padding:"16px 36px 4px",maxWidth:900,margin:"0 auto"},children:Array.from({length:30},(f,w)=>l.jsx("div",{style:{height:4,flex:1,borderRadius:2,background:w<e.day-1?"#a78bfa":w===e.day-1?m.yellow:"rgba(255,255,255,.1)"}},w))}),l.jsxs("main",{style:{maxWidth:900,margin:"0 auto",padding:"0 36px 80px"},children:[e.review_tasks&&l.jsxs("div",{style:{background:"rgba(167,139,250,.06)",border:"1px solid rgba(167,139,250,.2)",borderRadius:14,padding:"20px 24px",marginTop:32},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,color:m.purple,letterSpacing:2,textTransform:"uppercase",marginBottom:14},children:"✍️ Before the Quiz — Write From Memory (60–90 min)"}),e.review_tasks.map((f,w)=>l.jsx("div",{style:{fontSize:13,color:m.muted,padding:"4px 0 4px 14px",borderLeft:"2px solid rgba(167,139,250,.3)",marginBottom:6,lineHeight:1.6},children:f},w))]}),e.derivations&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:14,marginTop:40},children:"✍️ Write From Memory — Check Each When You Can Write It Cold"}),l.jsxs("div",{style:{background:m.card,border:"1px solid "+m.border,borderRadius:12,padding:"20px 24px",marginBottom:12},children:[l.jsx("p",{style:{fontSize:12,color:m.dim,marginBottom:16,fontStyle:"italic"},children:"Close your notes. Check each box only when you can write it completely from memory."}),e.derivations.map((f,w)=>l.jsxs("div",{onClick:()=>o(S=>({...S,[w]:!S[w]})),style:{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,.06)",cursor:"pointer",opacity:a[w]?.45:1},children:[l.jsx("div",{style:{width:16,height:16,borderRadius:4,flexShrink:0,marginTop:2,border:"1.5px solid "+(a[w]?m.purple:"rgba(255,255,255,.2)"),background:a[w]?m.purple:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"white",transition:"all .15s"},children:a[w]?"✓":""}),l.jsx("div",{style:{fontSize:13,color:a[w]?m.dim:m.muted,textDecoration:a[w]?"line-through":"none",lineHeight:1.55},children:f})]},w))]})]}),e.resources&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{fontSize:10,letterSpacing:3,color:m.dim,textTransform:"uppercase",marginBottom:12,marginTop:36},children:"Resources"}),e.resources.map((f,w)=>l.jsxs("a",{href:f.url,style:{display:"block",padding:"12px 16px",background:m.card,border:"1px solid "+m.border,borderRadius:8,textDecoration:"none",color:m.purple,fontSize:13,marginBottom:8},children:["→ ",f.name]},w))]}),l.jsxs("div",{style:{marginTop:52,marginBottom:4,display:"flex",alignItems:"center",gap:16},children:[l.jsx("div",{style:{flex:1,height:1,background:m.border}}),l.jsx("div",{style:{fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",color:m.purple,padding:"6px 18px",border:"1px solid rgba(167,139,250,.3)",borderRadius:20},children:"50-Question Quiz"}),l.jsx("div",{style:{flex:1,height:1,background:m.border}})]}),e.sections.map((f,w)=>l.jsxs("div",{children:[l.jsxs("div",{style:{marginTop:52,marginBottom:20,display:"flex",alignItems:"center",gap:14},children:[l.jsx("span",{style:{fontSize:22},children:f.icon}),l.jsx("span",{style:{fontSize:18,fontWeight:800,color:m.text},children:f.title}),l.jsx("span",{style:{fontSize:12,color:m.dim,padding:"2px 10px",background:"rgba(255,255,255,.05)",borderRadius:12},children:f.range}),l.jsx("div",{style:{flex:1,height:1,background:m.border}})]}),f.qs.map(S=>{const k=t[S.id],R=i[S.id],N=lc[S.company]||"#94a3b8",U=Xs[S.freq]||Xs.Medium,O=k==="correct"?"rgba(74,222,128,.4)":k==="wrong"?"rgba(239,68,68,.4)":m.border;return l.jsxs("div",{style:{background:m.card,border:"1px solid "+O,borderRadius:14,marginBottom:14,overflow:"hidden",transition:"border-color .2s"},children:[l.jsxs("div",{style:{padding:"16px 20px 12px"},children:[l.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:10},children:[l.jsx("span",{style:{fontSize:11,fontWeight:700,color:m.dim},children:S.id.toUpperCase()}),l.jsx("span",{style:{fontSize:11,fontWeight:700,color:N,background:N+"20",padding:"2px 8px",borderRadius:8,border:"1px solid "+N+"40"},children:S.company}),S.freq&&l.jsxs("span",{style:{fontSize:11,fontWeight:700,color:U.color,background:U.bg,padding:"2px 8px",borderRadius:8},children:[S.freq," freq"]})]}),l.jsx("p",{style:{fontSize:14,color:m.text,lineHeight:1.65,margin:0},children:S.q})]}),l.jsxs("div",{style:{display:"flex",borderTop:"1px solid "+m.border},children:[l.jsx("button",{onClick:()=>E(S.id),style:{flex:2,padding:"11px 20px",background:"transparent",border:"none",borderRight:"1px solid "+m.border,color:R?m.purple:m.dim,fontSize:13,fontWeight:600,cursor:"pointer",textAlign:"left"},children:R?"▼ Hide answer":"▶ Show answer"}),l.jsx("button",{onClick:()=>x(S.id,"correct"),style:{flex:1,padding:"11px",background:k==="correct"?"rgba(74,222,128,.1)":"transparent",border:"none",borderRight:"1px solid "+m.border,color:k==="correct"?"#4ade80":m.dim,fontSize:13,fontWeight:700,cursor:"pointer"},children:"✓ Got it"}),l.jsx("button",{onClick:()=>x(S.id,"wrong"),style:{flex:1,padding:"11px",background:k==="wrong"?"rgba(239,68,68,.1)":"transparent",border:"none",color:k==="wrong"?"#ef4444":m.dim,fontSize:13,fontWeight:700,cursor:"pointer"},children:"✗ Missed"})]}),R&&l.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,.06)",padding:"16px 20px",background:"rgba(134,239,172,.03)"},children:[l.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"#4ade80",marginBottom:10},children:"Answer"}),l.jsx("div",{className:"quiz-answer",dangerouslySetInnerHTML:{__html:S.answer}})]})]},S.id)})]},w)),p+y>0&&l.jsxs("div",{style:{background:"rgba(255,255,255,.03)",border:"1px solid "+m.border,borderRadius:16,padding:"28px 32px",marginTop:52,textAlign:"center"},children:[l.jsx("h3",{style:{fontSize:18,fontWeight:700,marginBottom:16},children:"Your Week 1 Score"}),l.jsx("div",{style:{fontSize:56,fontWeight:900,lineHeight:1,color:b===null?m.yellow:b>=80?"#4ade80":b>=60?m.yellow:"#ef4444"},children:b!==null?b+"%":p+"/"+(p+y)}),l.jsx("p",{style:{color:m.dim,marginTop:10,fontSize:13},children:b!==null?`${p} correct · ${y} missed · all ${d} answered`:`${p+y} of ${d} questions answered`}),h.length>0&&l.jsxs("div",{style:{textAlign:"left",marginTop:24},children:[l.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#ef4444",marginBottom:10},children:"⚠️ Questions to revisit:"}),h.map(f=>l.jsxs("div",{style:{fontSize:12,color:"#fca5a5",padding:"7px 0",borderBottom:"1px solid "+m.border},children:[l.jsx("span",{style:{fontWeight:700,marginRight:8},children:f.id.toUpperCase()}),f.q.length>90?f.q.slice(0,90)+"…":f.q]},f.id))]})]})]})]})}const Qp={day:1,title:"Probability Fundamentals",date_note:"Day 1 — Let's build the foundation",prev_day:null,next_day:2,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Week 1 Roadmap — What to Expect (5 min)",points:["Days 1–5 are pure statistics: probability → distributions → CLT → hypothesis testing → applied stats","Day 6 adds SQL foundations — the Meta percentage pattern is the most-tested SQL concept in DS interviews","Day 7 is a review day: write derivations from memory, take the quiz, identify weak spots","Goal for Week 1: never hesitate on Bayes theorem, p-value definition, or distribution identification","Most common DS interview mistake: knowing the formula but not being able to explain it to a PM in plain English — practice both","You don't need to have it all memorized today — focus on the 'why' behind each formula; memorization follows understanding"]},topics:[{title:"Conditional Probability & Bayes' Theorem",color:"#F59E0B",content:`**Conditional probability — the foundation:**
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
- All CIs wide: heterogeneous population — consider segmenting`,interview_tip:"The CI width interpretation is a high-signal question. Wide CI → high SE → two possible causes (small n OR high variance). Always mention both and explain how you'd diagnose which."}],practice_questions:[{q:"What is the Central Limit Theorem and why is it important for A/B testing?",a:"CLT: The sampling distribution of the sample mean approaches Normal as n→∞, regardless of the underlying distribution. For A/B testing: individual user metrics (revenue, comments) are skewed, but group means are approximately Normal — this justifies using z-tests/t-tests to compare treatment vs control.",company:"Meta/Netflix OA",difficulty:"Medium",say_aloud:"Start with: 'CLT tells us that even when individual data is messy and skewed, the average of a large enough sample will be normally distributed. In A/B testing, this is the reason we can use standard statistical tests even though user behavior is highly non-normal.'"},{q:"p=0.25 in your A/B test. What does this mean in plain English? What do you tell the PM?",a:"p=0.25 means: if there were truly no difference between variants, we'd see results this extreme 25% of the time by chance alone. Too high to be confident. Tell PM: 'We can't conclude the feature has a real effect. Options: run longer to get more data, or if the effect size is this small it may not be worth launching anyway.'",company:"Netflix",difficulty:"Easy",say_aloud:"Anchor: 'p-value tells us how surprising our result would be if nothing was actually happening.' Then: 'p=0.25 is not surprising at all — 25% of the time we'd see this just by chance. We need it below 5% to be confident.'"},{q:"Given 3 confidence intervals on a chart — one wide, one narrow, one that crosses zero — interpret them.",a:"Crosses zero: not statistically significant — true effect could be positive, zero, or negative. Wide CI: high uncertainty — either small sample or high metric variance, need more data. Narrow CI: well-estimated, high confidence in the effect size. Key: width ≠ significance; a narrow CI that crosses zero is still non-significant.",company:"Meta",difficulty:"Medium",say_aloud:"Structure your answer: 'Let me go through each one. First...' Then end with the key insight: 'The most important thing isn't width, it's whether it crosses zero — that determines statistical significance.'"},{q:"What is Type I vs Type II error? In a spam detection model, which is worse?",a:"Type I (α): false positive — flag legitimate content as spam. Type II (β): false negative — let real spam through. For spam detection: Type I is worse — blocking legitimate user posts destroys trust and creates false reports. Better to let some spam through than wrongly penalize good users. Context: for medical diagnosis, Type II (missing cancer) is usually worse.",company:"Meta/All",difficulty:"Easy",say_aloud:"Always contextualize: 'It depends on the cost of each error in this specific setting.' Then map to the use case. Shows you think about practical implications, not just definitions."},{q:"A/B test result: treatment has higher engagement (p=0.01) but lower DAU (p=0.03). The CI for DAU impact is [-3%, -0.1%]. Should you launch?",a:"Don't launch automatically. The DAU CI is entirely negative — even the optimistic end shows -0.1% DAU loss. Steps: (1) Is -0.1% to -3% DAU loss acceptable for the business? (2) Which users drive the DAU drop — segment by cohort, country, platform. (3) Is engagement gain durable or novelty effect? (4) Model long-term LTV: does higher engagement compensate? Never launch with a statistically significant guardrail violation without explicit leadership sign-off.",company:"Meta",difficulty:"Hard",say_aloud:"Open with: 'I wouldn't auto-launch even though the primary metric is significant, because we have a significant guardrail violation.' Then walk through your framework step by step."}],derivations:["Write CLT statement from memory: √n(X̄ₙ − μ)/σ → N(0,1) as n→∞","Write 95% CI formula: X̄ ± 1.96 × σ/√n","Write sample size formula: n = (z_α/2 + z_β)² × 2σ² / δ² (you'll need this in Week 4)","Explain p-value without using 'probability the null is true'","State when to use Welch's vs Student's t-test"],resources:[{name:"3Blue1Brown: But what is the Central Limit Theorem?",url:"https://www.youtube.com/watch?v=zeJD6dqJ5lo"},{name:"Seeing Theory: visual hypothesis testing",url:"https://seeing-theory.brown.edu/frequentist-inference/index.html"},{name:"Penn State STAT 415: Hypothesis Tests",url:"https://online.stat.psu.edu/stat415"}],tomorrow_preview:"Day 4: Statistical Tests + Meta Ads Probability. You'll compute E[X] and Var[X] for the Meta ad placement question (4% per post vs 1-per-25). Also covers sample size formula derivation — the formula you wrote today under derivations."},Jp={day:4,title:"Statistical Tests + Ads Probability",date_note:"Day 4 — Tests, sample size, and the Meta ad placement problem",prev_day:3,next_day:5,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Day 3 Recap — CLT, Hypothesis Testing & CIs (5 min)",points:["CLT: sample mean is approximately Normal for large n, regardless of underlying distribution — this is what justifies z-tests in A/B testing","p-value = P(data this extreme or more | H₀ is true). NOT the probability H₀ is true","Type I error (α) = false positive (reject true H₀). Type II error (β) = false negative (miss real effect). Power = 1 − β","95% CI = X̄ ± 1.96 × σ/√n. Correct interpretation: 95% of such intervals cover the true parameter over repeated experiments","Wide CI → large SE → either small n OR high metric variance (σ). Always diagnose which before acting","Welch's t-test (unequal variances): the default for A/B testing. Student's t-test assumes equal variance — almost never use it"]},topics:[{title:"Statistical Tests — t-test, Chi-Square, Mann-Whitney U",color:"#F59E0B",content:`**Two-sample t-test (Welch's) — comparing two group means:**
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
  Your sample is a good approximation of the population. Bootstrap resamples FROM YOUR DATA — if your sample is biased, the bootstrap distribution is also biased.`,interview_tip:"If asked 'when would you use bootstrap vs a t-test?' — the answer is about the STATISTIC, not just the distribution. 'Bootstrap is most useful when I can't derive the analytic SE of my statistic — for example, for a median CI or an AUC CI. For a mean on large n, the t-test is computationally simpler and statistically equivalent.' This is a cleaner answer than 'when data is not normal.'"}],practice_questions:[{q:"Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute E[X] and Var[X] for each. Which do you recommend and why?",a:"E[X]=4 for both. Var(Method 1) = 100×0.04×0.96 = 3.84. Var(Method 2) = 0 (deterministic). Recommend Method 2: zero variance means perfectly predictable user experience — no user will ever see 8+ ads in one scroll. Method 1 creates ~2% of sessions with 9+ ads, which drives churn. Same expected ad revenue, better worst-case UX.",say_aloud:"State E[X] first (same for both), then show the Var calculation. Var(Binomial) = np(1-p). Var(Deterministic) = 0. Then give your recommendation with reasoning — always close with a product judgment.",company:"Meta",difficulty:"Hard"},{q:"What is bootstrapping? When do you use it over a parametric test?",a:"Bootstrap: resample your data with replacement B=1000 times, compute the statistic each time, get an empirical sampling distribution. Use it when: (1) complex statistic with no closed-form SE (median, AUC, ratio), (2) small sample where CLT doesn't apply, (3) heavily skewed distribution. Drawback: assumes your sample is representative of the population.",say_aloud:"Lead with the algorithm: 'Resample with replacement, compute statistic, repeat 1000 times, take percentiles.' Then lead with the use case: 'Most useful when I can't derive the analytic SE — for example, a median CI doesn't have a simple formula, but bootstrap gives me one immediately.'",company:"Meta/All",difficulty:"Medium"},{q:"What is the Mann-Whitney U test? When is it preferred over a t-test?",a:"Mann-Whitney U: non-parametric test comparing whether one group's values tend to be ranked higher than another's (ranks the combined data, compares rank sums). Preferred over t-test when: data is heavily non-normal (e.g., revenue), ordinal data (1-5 star ratings), small samples with outliers. Slight power loss vs t-test on normal data — but more robust to assumption violations.",say_aloud:"Start with when: 'If the data is severely skewed or we have small n with outliers, the t-test assumptions break down. Mann-Whitney U doesn't require normality — it ranks the data and compares rank distributions.' Then name the tradeoff: 'It has slightly less power on normal data.'",company:"Meta/All",difficulty:"Medium"},{q:"Baseline conversion rate is 5%. You want to detect a 1pp lift with 80% power at α=0.05. Estimate the sample size needed per group.",a:"n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². z_{0.025}=1.96, z_{0.20}=0.84. n = (1.96+0.84)² × 2×0.05×0.95 / (0.01)² = 7.84 × 0.095 / 0.0001 = 74,480 per group. Key insight: δ² in denominator means halving the MDE quadruples the needed n.",say_aloud:"Write the formula first, then label each component. Plug in numbers systematically. End with the intuition: 'Notice that the MDE is squared in the denominator — this is why small effects are so expensive to detect. Going from detecting a 2% lift to 1% lift requires 4× more users.'",company:"Meta/Airbnb",difficulty:"Hard"},{q:"K meetings randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",a:"This is size-biased sampling — you're more likely to walk into a busier room. E[X in room | meeting in progress] = E[X²]/E[X]. For Poisson(λ=K/N): E[X]=K/N, E[X²]=Var+E[X]²=K/N+(K/N)². Result: E[X²]/E[X] = 1 + K/N. For large N (sparse meetings): ≈ 1 + K/N.",say_aloud:"Name the phenomenon first: 'This is size-biased sampling — I'm conditioning on being in a room that has a meeting, so rooms with more meetings are sampled with higher probability.' The key formula is E[X|selected] = E[X²]/E[X]. This is an advanced question — if you can name it and set up the formula, that's already impressive.",company:"Meta",difficulty:"Hard"}],derivations:["Write the two-sample t-test statistic from memory: t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)","Write the chi-square statistic: χ² = Σ(O−E)²/E. State when you use it vs t-test","Write the sample size formula for proportions: n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². Plug in α=0.05, 80% power.","Write E[X] and Var[X] for Binomial(n, p). Apply: n=100, p=0.04. Show Var(deterministic)=0.","Write the bootstrap_ci() function in Python: np.random.choice with replace=True → loop B=1000 → np.percentile([2.5, 97.5])"],resources:[{name:"Evan Miller Sample Size Calculator",url:"https://www.evanmiller.org/ab-testing/sample-size.html"},{name:"Penn State STAT 415: Hypothesis Tests",url:"https://online.stat.psu.edu/stat415"},{name:"StatQuest: Bootstrapping",url:"https://www.youtube.com/watch?v=Xz0x-8-cgaQ"},{name:"StatQuest: Mann-Whitney U test",url:"https://www.youtube.com/watch?v=cqEwl0XQxpE"}],flashcards:[{q:"Two-sample t-test statistic?",a:"t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)"},{q:"Chi-square statistic?",a:"χ² = Σ(O − E)²/E. Use to test independence between two categorical variables."},{q:"When to use Mann-Whitney U vs t-test?",a:"Mann-Whitney U when data is skewed, ordinal, or small n with outliers. t-test when data is approximately normal or n is large."},{q:"Sample size formula (proportions)?",a:"n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ²"},{q:"z-values to memorize for sample size?",a:"α=0.05 two-sided: z_{α/2}=1.96. 80% power: z_β=0.84. 90% power: z_β=1.28."},{q:"If you halve the MDE, what happens to sample size?",a:"Quadruples. n ∝ 1/δ² — the MDE is squared in the denominator."},{q:"Meta ads: E[X] for Binomial(100, 0.04)?",a:"E[X] = np = 4. Var[X] = np(1-p) = 3.84. Deterministic: E[X]=4, Var[X]=0."},{q:"Bootstrap CI — 3-step algorithm?",a:"1. Resample n obs with replacement, B=1000 times. 2. Compute statistic each time. 3. Take 2.5th and 97.5th percentiles."},{q:"Best use case for bootstrap (not just 'skewed data')?",a:"Complex statistic with no closed-form SE: median CI, AUC CI, ratio CI, any custom metric."},{q:"Why is Welch's t-test preferred over Student's for A/B testing?",a:"Student's assumes equal variance. Welch's works with unequal variance and unequal group sizes — both common in A/B tests."},{q:"P(X > 8) for Binomial(100, 0.04) using Normal approx?",a:"μ=4, σ=√3.84≈1.96. z=(8-4)/1.96≈2.04. P(Z>2.04)≈2.1%."},{q:"What is size-biased sampling?",a:"When sampling probability is proportional to size. E.g., walking into a room — larger rooms are more likely to be sampled. E[X|selected] = E[X²]/E[X]."}],tomorrow_preview:"Day 5: Statistics Deep Practice — Simpson's Paradox, Bayesian fraud detection (the 1% base rate trap), compound distributions (Law of Total Expectation), and bootstrap CI vs parametric CI. These are the applied stats questions that show up most in Meta product DS rounds."},$p={day:5,title:"Statistics Deep Practice",date_note:"Day 5 — Applied Stats: Bias, Bayes & Compound Distributions",prev_day:4,next_day:6,week_label:"Week 1 — Statistics & SQL Foundations",recap:{title:"Day 4 Recap — Statistical Tests & Meta Ads Probability (5 min)",points:["Two-sample t-test: t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂). Use when comparing group means, variance unknown","Chi-square test: χ² = Σ(O − E)²/E. Tests independence between categorical variables (e.g. feature × device type)","Mann-Whitney U: non-parametric alternative when data is skewed/non-normal — ranks instead of raw values","Sample size formula: n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². For 80% power, α=0.05: z_{0.025}=1.96, z_{0.2}=0.84","Meta Binomial (4% per post) vs Deterministic (1 ad per 25 posts): E[X] same ≈ 0.04, but Var[X]=0.0384 vs 0 — Deterministic has zero variance","Bootstrap CI: resample with replacement B=1000 times, compute statistic each time, take 2.5th and 97.5th percentiles"]},topics:[{title:"Simpson's Paradox — Detect & Handle",color:"#F59E0B",content:`**What it is:** A trend appears in subgroups but reverses (or disappears) when those subgroups are combined. The culprit is always a lurking confounding variable that correlates with both group membership and the outcome.

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
# ['eat','tea','tan','ate','nat','bat'] → [['eat','tea','ate'],['tan','nat'],['bat']]</code><p>Sort: simpler but O(n log n). Counter: O(n) and Pythonic — Counter objects support == comparison. Length check early exit avoids full counting when strings differ in length. Follow-up insight: use <code>tuple(sorted(word))</code> as the group key — all anagrams hash to the same key. Spotify expected the Counter approach and the follow-up.</p>`}]}]},lm={1:Qp,2:Xp,3:Kp,4:Jp,5:$p,6:Zp,7:em,8:tm,9:nm,10:im,11:rm,12:am,13:om,14:sm};function Qr(){const t=window.location.pathname.replace(/\/$/,"").match(/\/day\/(\d+)/);return t?{type:"day",day:parseInt(t[1])}:{type:"schedule"}}function dm(){const[e,t]=I.useState(Qr());if(I.useEffect(()=>{const n=()=>t(Qr());return window.addEventListener("popstate",n),()=>window.removeEventListener("popstate",n)},[]),I.useEffect(()=>{const n=i=>{const r=i.target.closest("a");if(!r)return;const a=r.getAttribute("href");!a||a.startsWith("http")||a.startsWith("#")||r.target==="_blank"||(i.preventDefault(),window.history.pushState({},"",a),t(Qr()),window.scrollTo(0,0))};return document.addEventListener("click",n),()=>document.removeEventListener("click",n)},[]),e.type==="day"){const n=lm[e.day]||null;return(n==null?void 0:n.type)==="quiz"?l.jsx(Vp,{data:n}):l.jsx(Yp,{data:n})}return l.jsx(Fp,{})}Xr.createRoot(document.getElementById("root")).render(l.jsx(Ac.StrictMode,{children:l.jsx(dm,{})}));
