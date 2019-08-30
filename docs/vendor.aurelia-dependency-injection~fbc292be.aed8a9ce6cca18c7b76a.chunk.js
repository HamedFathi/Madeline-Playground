(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3U8n":function(t,e,n){"use strict";n.d(e,"a",function(){return k}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return p});var r=n("qrcG"),i=n("70NS");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function o(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function a(t){var e=function(t){t.hasOwnProperty("inject")||(t.inject=(r.b.getOwn(r.b.paramTypes,t)||l).slice(),t.inject&&t.inject.length>0&&t.inject[t.inject.length-1]===Object&&t.inject.splice(-1,1))};return t?e(t):e}function u(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,n,r){if("number"==typeof r)return a(e),void(1===t.length&&(e.inject[r]=t[0]));r?r.value.inject=t:e.inject=t}}var c=r.d.create("aurelia:resolver",function(t){return"function"==typeof t.get||"Resolvers must implement: get(container: Container, key: any): any"});function h(t,e,n){return t===e}var f=function(){function t(t,e){this.strategy=t,this.state=e}return t.prototype.get=function(t,e){if(h(this.strategy,0,this.state))return this.state;if(h(this.strategy,1,this.state)){var n=t.invoke(this.state);return this.state=n,this.strategy=0,n}if(h(this.strategy,2,this.state))return t.invoke(this.state);if(h(this.strategy,3,this.state))return this.state(t,e,this);if(h(this.strategy,4,this.state))return this.state[0].get(t,e);if(h(this.strategy,5,this.state))return t.get(this.state);throw new Error("Invalid strategy: "+this.strategy)},t=o([c(),s("design:paramtypes",[Number,Object])],t)}(),p=(function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){var e=this;return function(){return t.get(e._key)}},t.of=function(t){return new e(t)},t=e=o([c(),s("design:paramtypes",[Object])],t)}(),function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){return t.getAll(this._key)},t.of=function(t){return new e(t)},t=e=o([c(),s("design:paramtypes",[Object])],t)}(),function(){function t(t,e){void 0===e&&(e=!0),this._key=t,this._checkParent=e}var e;return e=t,t.prototype.get=function(t){return t.hasResolver(this._key,this._checkParent)?t.get(this._key):null},t.of=function(t,n){return void 0===n&&(n=!0),new e(t,n)},t=e=o([c(),s("design:paramtypes",[Object,Boolean])],t)}());(function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){return t.parent?t.parent.get(this._key):null},t.of=function(t){return new e(t)},t=e=o([c(),s("design:paramtypes",[Object])],t)})(),function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){var e=this._key,n=t.getResolver(e);return n&&3===n.strategy&&(e=n.state),function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.invoke(e,n)}},t.of=function(t){return new e(t)},t=e=o([c(),s("design:paramtypes",[Object])],t)}(),function(){function t(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this.key=t,this.asKey=t,this.dynamicDependencies=e}var e;e=t,t.prototype.get=function(t){var e=this.dynamicDependencies.length>0?this.dynamicDependencies.map(function(e){return e["protocol:aurelia:resolver"]?e.get(t):t.get(e)}):void 0,n=this.key,r=t.getResolver(n);r&&3===r.strategy&&(n=r.state);var i=t.invoke(n,e);return t.registerInstance(this.asKey,i),i},t.prototype.as=function(t){return this.asKey=t,this},t.of=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return new(e.bind.apply(e,[void 0,t].concat(n)))},t=e=o([c(),s("design:paramtypes",[Object,Object])],t)}();function g(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}var l=Object.freeze([]);r.b.registration="aurelia:registration",r.b.invoker="aurelia:invoker";var v=c.decorates,y=function(){function t(t,e,n){this.fn=t,this.invoker=e,this.dependencies=n}return t.prototype.invoke=function(t,e){return void 0!==e?this.invoker.invokeWithDynamicDependencies(t,this.fn,this.dependencies,e):this.invoker.invoke(t,this.fn,this.dependencies)},t}();var d={invoke:function(t,e,n){var r=n.map(function(e){return t.get(e)});return Reflect.construct(e,r)},invokeWithDynamicDependencies:function(t,e,n,r){for(var i,o=n.length,s=new Array(o);o--;){if(null==(i=n[o]))throw new Error("Constructor Parameter with index "+o+" cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");s[o]=t.get(i)}return void 0!==r&&(s=s.concat(r)),Reflect.construct(e,s)}};var k=function(){function t(t){void 0===t&&(t={}),this._configuration=t,this._onHandlerCreated=t.onHandlerCreated,this._handlers=t.handlers||(t.handlers=new Map),this._resolvers=new Map,this.root=this,this.parent=null}return t.prototype.makeGlobal=function(){return t.instance=this,this},t.prototype.setHandlerCreatedCallback=function(t){this._onHandlerCreated=t,this._configuration.onHandlerCreated=t},t.prototype.registerInstance=function(t,e){return this.registerResolver(t,new f(0,void 0===e?t:e))},t.prototype.registerSingleton=function(t,e){return this.registerResolver(t,new f(1,void 0===e?t:e))},t.prototype.registerTransient=function(t,e){return this.registerResolver(t,new f(2,void 0===e?t:e))},t.prototype.registerHandler=function(t,e){return this.registerResolver(t,new f(3,e))},t.prototype.registerAlias=function(t,e){return this.registerResolver(e,new f(5,t))},t.prototype.registerResolver=function(t,e){g(t);var n=this._resolvers,r=n.get(t);return void 0===r?n.set(t,e):4===r.strategy?r.state.push(e):n.set(t,new f(4,[r,e])),e},t.prototype.autoRegister=function(t,e){if("function"==typeof(e=void 0===e?t:e)){var n=r.b.get(r.b.registration,e);return void 0===n?this.registerResolver(t,new f(1,e)):n.registerResolver(this,t,e)}return this.registerResolver(t,new f(0,e))},t.prototype.autoRegisterAll=function(t){for(var e=t.length;e--;)this.autoRegister(t[e])},t.prototype.unregister=function(t){this._resolvers.delete(t)},t.prototype.hasResolver=function(t,e){return void 0===e&&(e=!1),g(t),this._resolvers.has(t)||e&&null!==this.parent&&this.parent.hasResolver(t,e)},t.prototype.getResolver=function(t){return this._resolvers.get(t)},t.prototype.get=function(e){if(g(e),e===t)return this;if(v(e))return e.get(this,e);var n=this._resolvers.get(e);if(void 0===n){if(null===this.parent)return this.autoRegister(e).get(this,e);var i=r.b.get(r.b.registration,e);return void 0===i?this.parent._get(e):i.registerResolver(this,e,e).get(this,e)}return n.get(this,e)},t.prototype._get=function(t){var e=this._resolvers.get(t);return void 0===e?null===this.parent?this.autoRegister(t).get(this,t):this.parent._get(t):e.get(this,t)},t.prototype.getAll=function(t){g(t);var e=this._resolvers.get(t);if(void 0===e)return null===this.parent?l:this.parent.getAll(t);if(4===e.strategy){for(var n=e.state,r=n.length,i=new Array(r);r--;)i[r]=n[r].get(this,t);return i}return[e.get(this,t)]},t.prototype.createChild=function(){var e=new t(this._configuration);return e.root=this.root,e.parent=this,e},t.prototype.invoke=function(t,e){try{var n=this._handlers.get(t);return void 0===n&&(n=this._createInvocationHandler(t),this._handlers.set(t,n)),n.invoke(this,e)}catch(e){throw new i.a("Error invoking "+t.name+". Check the inner error for details.",e,!0)}},t.prototype._createInvocationHandler=function(t){var e,n;if(void 0===t.inject)e=r.b.getOwn(r.b.paramTypes,t)||l;else{e=[];for(var i=t;"function"==typeof i;)e.push.apply(e,(n=i).hasOwnProperty("inject")?"function"==typeof n.inject?n.inject():n.inject:[]),i=Object.getPrototypeOf(i)}var o=r.b.getOwn(r.b.invoker,t)||d,s=new y(t,o,e);return void 0!==this._onHandlerCreated?this._onHandlerCreated(s):s},t}();var w=function(){function t(){}return t.prototype.invoke=function(t,e,n){for(var r=n.length,i=new Array(r);r--;)i[r]=t.get(n[r]);return e.apply(void 0,i)},t.prototype.invokeWithDynamicDependencies=function(t,e,n,r){for(var i=n.length,o=new Array(i);i--;)o[i]=t.get(n[i]);return void 0!==r&&(o=o.concat(r)),e.apply(void 0,o)},t}();w.instance=new w;(function(){function t(t){this._key=t}t.prototype.registerResolver=function(t,e,n){var r=t.getResolver(this._key||e);return void 0===r?t.registerTransient(this._key||e,n):r}})(),function(){function t(t,e){void 0===e&&(e=!1),"boolean"==typeof t?this._registerInChild=t:(this._key=t,this._registerInChild=e)}t.prototype.registerResolver=function(t,e,n){var r=this._registerInChild?t:t.root,i=r.getResolver(this._key||e);return void 0===i?r.registerSingleton(this._key||e,n):i}}()}}]);
//# sourceMappingURL=vendor.aurelia-dependency-injection~fbc292be.aed8a9ce6cca18c7b76a.bundle.map