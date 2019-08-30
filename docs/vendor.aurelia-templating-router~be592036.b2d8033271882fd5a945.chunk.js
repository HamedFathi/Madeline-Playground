(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"aurelia-templating-router":function(t,e,n){"use strict";(function(t){n.d(e,"configure",function(){return g});var o=n("4ysu"),i=n("qrcG"),r=n("iD3O"),u=n("hij8"),a=n("3U8n"),c=n("X5gX"),s=n("70NS"),l=n("MP1E"),p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var h=function(){},f=function(){function e(t,e,n,o,i,r,u){this.element=t,this.container=e,this.viewSlot=n,this.router=o,this.viewLocator=i,this.compositionTransaction=r,this.compositionEngine=u,this.router.registerViewPort(this,this.element.getAttribute("name")),"initialComposition"in r||(r.initialComposition=!0,this.compositionTransactionNotifier=r.enlist())}return e.inject=function(){return[s.b.Element,a.a,u.p,o.c,u.n,u.f,u.e]},e.prototype.created=function(t){this.owningView=t},e.prototype.bind=function(t,e){this.container.viewModel=t,this.overrideContext=e},e.prototype.process=function(t,e){var n=this,o=t,r=o.component,a=r.childContainer,c=r.viewModel,s=r.viewModelResource,l=s.metadata,p=r.router.currentInstruction.config,h=p.viewPorts&&p.viewPorts[o.name]||{};a.get(w)._notify(this);var f={viewModel:h.layoutViewModel||p.layoutViewModel||this.layoutViewModel,view:h.layoutView||p.layoutView||this.layoutView,model:h.layoutModel||p.layoutModel||this.layoutModel,router:o.component.router,childContainer:a,viewSlot:this.viewSlot},d=this.viewLocator.getViewStrategy(r.view||c);return d&&r.view&&d.makeRelativeTo(i.a.get(r.router.container.viewModel.constructor).moduleId),l.load(a,s.value,null,d,!0).then(function(t){n.compositionTransactionNotifier||(n.compositionTransactionOwnershipToken=n.compositionTransaction.tryCapture()),(f.viewModel||f.view)&&(o.layoutInstruction=f);var i=u.b.dynamic(n.element,c,t);if(o.controller=l.create(a,i),e)return null;n.swap(o)})},e.prototype.swap=function(e){var n=this,o=e,i=o.controller,r=o.layoutInstruction,a=this.view,s=function(){var e=u.i[n.swapOrder]||u.i.after,o=n.viewSlot;e(o,a,function(){return t.resolve(o.add(n.view))}).then(function(){n._notify()})},l=function(t){i.automate(n.overrideContext,t);var e=n.compositionTransactionOwnershipToken;return e?e.waitForCompositionComplete().then(function(){return n.compositionTransactionOwnershipToken=null,s()}):s()};return r?(r.viewModel||(r.viewModel=new h),this.compositionEngine.createController(r).then(function(t){var e=t.view;return u.h.distributeView(i.view,t.slots||e.slots),t.automate(Object(c.t)(r.viewModel),n.owningView),e.children.push(i.view),e||t}).then(function(t){return n.view=t,l(t)})):(this.view=i.view,l(this.owningView))},e.prototype._notify=function(){var t=this.compositionTransactionNotifier;t&&(t.done(),this.compositionTransactionNotifier=null)},e.$view=null,e.$resource={name:"router-view",bindables:["swapOrder","layoutView","layoutViewModel","layoutModel","inherit-binding-context"]},e}(),w=function(){function e(){var e=this;this.promise=new t(function(t){return e.resolve=t})}return e.prototype.findNearest=function(){return this.promise},e.prototype._notify=function(t){this.resolve(t)},e}(),d=function(){};u.t("<template></template>")(d);var v=function(e){function n(t){var n=e.call(this)||this;return n.compositionEngine=t,n}return function(t,e){function n(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(n,e),n.prototype.resolveViewModel=function(e,n){return new t(function(t,o){var a;if("moduleId"in n){var c=n.moduleId;return null===c?a=d:(c=Object(r.d)(c,i.a.get(e.container.viewModel.constructor).moduleId),a=/\.html/i.test(c)?function(t){var e=/([^\/^\?]+)\.html/i.exec(t)[1],n=function(){function t(){}return t.prototype.bind=function(t){this.$parent=t},t}();return Object(u.s)(e)(n),Object(u.y)(t)(n),n}(c):c),t(a)}o(new Error('Invalid route config. No "moduleId" found.'))})},n.prototype.createChildContainer=function(t){var e=t.container.createChild();return e.registerSingleton(w),e.getChildRouter=function(){var n;return e.registerHandler(o.c,function(){return n||(n=t.createChild(e))}),e.get(o.c)},e},n.prototype.loadRoute=function(t,e,n){var o=this;return this.resolveViewModel(t,e).then(function(n){return o.compositionEngine.ensureViewModel({viewModel:n,childContainer:o.createChildContainer(t),view:e.view||e.viewStrategy,router:t})})},n.inject=[u.e],n}(o.b);var m=Object(l.getLogger)("route-href"),y=function(){function t(t,e){this.router=t,this.element=e,this.attribute="href"}return t.inject=function(){return[o.c,s.b.Element]},t.prototype.bind=function(){this.isActive=!0,this.processChange()},t.prototype.unbind=function(){this.isActive=!1},t.prototype.attributeChanged=function(t,e){return e&&this.element.removeAttribute(e),this.processChange()},t.prototype.processChange=function(){var t=this;return this.router.ensureConfigured().then(function(){if(!t.isActive)return null;var e=t.element,n=t.router.generate(t.route,t.params);return e.au.controller?e.au.controller.viewModel[t.attribute]=n:e.setAttribute(t.attribute,n),null}).catch(function(t){m.error(t)})},t.$resource={type:"attribute",name:"route-href",bindables:[{name:"route",changeHandler:"processChange",primaryProperty:!0},{name:"params",changeHandler:"processChange"},"attribute"]},t}();function g(t){t.singleton(o.b,v).singleton(o.c,o.a).globalResources(f,y),t.container.registerAlias(o.c,o.a)}}).call(this,n("B/eG").default)}}]);
//# sourceMappingURL=vendor.aurelia-templating-router~be592036.b2d8033271882fd5a945.bundle.map