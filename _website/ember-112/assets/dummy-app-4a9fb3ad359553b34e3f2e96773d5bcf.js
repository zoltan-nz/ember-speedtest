"use strict";define("dummy-app/app",["exports","ember","dummy-app/resolver","ember-load-initializers","dummy-app/config/environment"],function(e,t,n,a,r){var d=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,d=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(d,r.default.modulePrefix),e.default=d}),define("dummy-app/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy-app/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy-app/components/dummy-item-row",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"tr"})}),define("dummy-app/components/dummy-table",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"table",time:null,init:function(){this.set("time",new Date),this._super()},didInsertElement:function(){var e=new Date-this.get("time");console.log("Component inserted, duration:",e),this.sendAction("finished",e)}})}),define("dummy-app/controllers/index",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({version:t.default.libraries._registry[0].version,showComponent:!1,init:function(){console.log("Controller initializing..."),this._super(),t.default.run.scheduleOnce("afterRender",this,"afterRenderCall")},afterRenderCall:function(){console.log("After render call... wait a second"),t.default.run.later(this,this.nowInsertComponent,1e3)},nowInsertComponent:function(){console.log("Inserting component..."),this.set("showComponent",!0)},actions:{toggleComponent:function(){this.toggleProperty("showComponent")}}})}),define("dummy-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy-app/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy-app/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy-app/initializers/export-application-global",["exports","ember","dummy-app/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy-app/models/dummy",["exports","ember"],function(e,t){e.default=t.default.ObjectProxy.extend({title:t.default.computed("id",function(){return"Dummy Object Number #"+this.get("id")}),titleUpperCase:t.default.computed("title",function(){return this.get("title").toUpperCase()})})}),define("dummy-app/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy-app/router",["exports","ember","dummy-app/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){}),e.default=a}),define("dummy-app/routes/index",["exports","ember","dummy-app/models/dummy"],function(e,t,n){e.default=t.default.Route.extend({init:function(){console.log("Index route is initializing..."),this._super()},model:function(){return console.log("Model hook is generating the dummy data..."),Array.from(Array(1e4).keys()).map(function(e){return n.default.create({content:{id:e}})})},actions:{finished:function(e){this.controller.set("renderingTime",e)}}})}),define("dummy-app/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.2",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("a");e.setAttribute(n,"href","/");var a=e.createTextNode("Back to Home Page");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,d=r.content;a.detectNamespace(n);var i;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(i=this.build(a),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=a.cloneNode(this.cachedFragment,!0))):i=this.build(a);var o=a.createMorphAt(i,2,2,n);return d(t,o,e,"outlet"),i}}}())}),define("dummy-app/templates/components/dummy-item-row",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.2",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("td"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("td"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("td"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,d=r.content;a.detectNamespace(n);var i;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(i=this.build(a),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=a.cloneNode(this.cachedFragment,!0))):i=this.build(a);var o=a.createMorphAt(a.childAt(i,[0]),0,0),l=a.createMorphAt(a.childAt(i,[2]),0,0),c=a.createMorphAt(a.childAt(i,[4]),0,0);return d(t,o,e,"item.id"),d(t,l,e,"item.title"),d(t,c,e,"item.titleUpperCase"),i}}}())}),define("dummy-app/templates/components/dummy-table",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.2",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n,a){var r=t.dom,d=t.hooks,i=d.set,o=d.get,l=d.inline;r.detectNamespace(n);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var p=r.createMorphAt(c,1,1,n);return i(t,e,"item",a[0]),l(t,p,e,"dummy-item-row",[],{item:o(t,e,"item")}),c}}}();return{isHTMLBars:!0,revision:"Ember@1.12.2",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("thead"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("tr"),r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("th"),d=e.createTextNode("ID");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("th"),d=e.createTextNode("NAME");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("th"),d=e.createTextNode("UPPERCASE");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("tbody"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},render:function(t,n,a){var r=n.dom,d=n.hooks,i=d.get,o=d.block;r.detectNamespace(a);var l;n.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var c=r.createMorphAt(r.childAt(l,[2]),1,1);return o(n,c,t,"each",[i(n,t,"data")],{},e,null),l}}}())}),define("dummy-app/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.2",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var a=t.dom,r=t.hooks,d=r.get,i=r.inline;a.detectNamespace(n);var o;t.useFragmentCache&&a.canClone?(null===this.cachedFragment&&(o=this.build(a),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=a.cloneNode(this.cachedFragment,!0))):o=this.build(a);var l=a.createMorphAt(o,1,1,n);return i(t,l,e,"dummy-table",[],{data:d(t,e,"model"),finished:"finished"}),o}}}();return{isHTMLBars:!0,revision:"Ember@1.12.2",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("Ember ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Rendering time: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode(" ms");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Ready for render: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Toggle Component");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},render:function(t,n,a){var r=n.dom,d=n.hooks,i=d.content,o=d.element,l=d.get,c=d.block;r.detectNamespace(a);var p;n.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(p=this.build(r),this.hasRendered?this.cachedFragment=p:this.hasRendered=!0),this.cachedFragment&&(p=r.cloneNode(this.cachedFragment,!0))):p=this.build(r);var m=r.childAt(p,[6]),u=r.createMorphAt(r.childAt(p,[0]),1,1),s=r.createMorphAt(r.childAt(p,[2]),1,1),h=r.createMorphAt(r.childAt(p,[4]),1,1),f=r.createMorphAt(p,11,11,a);return r.insertBoundary(p,null),i(n,u,t,"version"),i(n,s,t,"renderingTime"),i(n,h,t,"showComponent"),o(n,m,t,"action",["toggleComponent"],{}),c(n,f,t,"if",[l(n,t,"showComponent")],{},e,null),p}}}())}),define("dummy-app/config/environment",["ember"],function(e){var t="dummy-app";try{var n=t+"/config/environment",a=e.default.$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy-app/app").default.create({name:"dummy-app",version:"0.0.0+855e3e77"});