"use strict";define("dummy-app/app",["exports","ember","dummy-app/resolver","ember-load-initializers","dummy-app/config/environment"],function(e,t,n,a,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(i,r.default.modulePrefix),e.default=i}),define("dummy-app/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy-app/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy-app/components/dummy-item-row",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"tr"})}),define("dummy-app/components/dummy-table",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"table",time:null,init:function(){this.set("time",new Date),this._super()},didInsertElement:function(){var e=new Date-this.get("time");console.log("Component inserted, duration:",e),this.sendAction("finished",e)}})}),define("dummy-app/controllers/index",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({version:t.default.libraries._registry[0].version,showComponent:!1,init:function(){console.log("Controller initializing..."),this._super(),t.default.run.scheduleOnce("afterRender",this,"afterRenderCall")},afterRenderCall:function(){console.log("After render call... wait a second"),t.default.run.later(this,this.nowInsertComponent,1e3)},nowInsertComponent:function(){console.log("Inserting component..."),this.set("showComponent",!0)},actions:{toggleComponent:function(){this.toggleProperty("showComponent")}}})}),define("dummy-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy-app/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy-app/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy-app/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy-app/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy-app/initializers/export-application-global",["exports","ember","dummy-app/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy-app/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy-app/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy-app/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy-app/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy-app/models/dummy",["exports","ember"],function(e,t){e.default=t.default.ObjectProxy.extend({title:t.default.computed("id",function(){return"Dummy Object Number #"+this.get("id")}),titleUpperCase:t.default.computed("title",function(){return this.get("title").toUpperCase()})})}),define("dummy-app/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy-app/router",["exports","ember","dummy-app/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){}),e.default=a}),define("dummy-app/routes/index",["exports","ember","dummy-app/models/dummy"],function(e,t,n){e.default=t.default.Route.extend({init:function(){console.log("Index route is initializing..."),this._super()},model:function(){return console.log("Model hook is generating the dummy data..."),Array.from(Array(1e4).keys()).map(function(e){return n.default.create({content:{id:e}})})},actions:{finished:function(e){this.controller.set("renderingTime",e)}}})}),define("dummy-app/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy-app/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.0-beta.3+a681d8b4",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy-app/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("a");e.setAttribute(n,"href","/");var a=e.createTextNode("Back to Home Page");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy-app/templates/components/dummy-item-row",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.0-beta.3+a681d8b4",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy-app/templates/components/dummy-item-row.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("td"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("td"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("td"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(e.childAt(t,[0]),0,0),a[1]=e.createMorphAt(e.childAt(t,[2]),0,0),a[2]=e.createMorphAt(e.childAt(t,[4]),0,0),a},statements:[["content","item.id",["loc",[null,[1,4],[1,15]]],0,0,0,0],["content","item.title",["loc",[null,[2,4],[2,18]]],0,0,0,0],["content","item.titleUpperCase",["loc",[null,[3,4],[3,27]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy-app/templates/components/dummy-table",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.0-beta.3+a681d8b4",loc:{source:null,start:{line:9,column:2},end:{line:11,column:2}},moduleName:"dummy-app/templates/components/dummy-table.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","dummy-item-row",[],["item",["subexpr","@mut",[["get","item",["loc",[null,[10,26],[10,30]]],0,0,0,0]],[],[],0,0]],["loc",[null,[10,4],[10,32]]],0,0]],locals:["item"],templates:[]}}();return{meta:{revision:"Ember@2.8.0-beta.3+a681d8b4",loc:{source:null,start:{line:1,column:0},end:{line:12,column:8}},moduleName:"dummy-app/templates/components/dummy-table.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("thead"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("tr"),r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("th"),i=e.createTextNode("ID");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("th"),i=e.createTextNode("NAME");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("th"),i=e.createTextNode("UPPERCASE");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("tbody"),a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[2]),1,1),a},statements:[["block","each",[["get","data",["loc",[null,[9,10],[9,14]]],0,0,0,0]],[],0,null,["loc",[null,[9,2],[11,11]]]]],locals:[],templates:[e]}}())}),define("dummy-app/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.8.0-beta.3+a681d8b4",loc:{source:null,start:{line:11,column:0},end:{line:13,column:0}},moduleName:"dummy-app/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","dummy-table",[],["data",["subexpr","@mut",[["get","model",["loc",[null,[12,23],[12,28]]],0,0,0,0]],[],[],0,0],"finished","finished"],["loc",[null,[12,4],[12,50]]],0,0]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.0-beta.3+a681d8b4",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"dummy-app/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("Ember ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Rendering time: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode(" ms");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("Ready for render: ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Toggle Component");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createElement("br");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[6]),r=new Array(5);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r[1]=e.createMorphAt(e.childAt(t,[2]),1,1),r[2]=e.createMorphAt(e.childAt(t,[4]),1,1),r[3]=e.createElementMorph(a),r[4]=e.createMorphAt(t,11,11,n),e.insertBoundary(t,null),r},statements:[["content","version",["loc",[null,[1,10],[1,21]]],0,0,0,0],["content","renderingTime",["loc",[null,[3,20],[3,37]]],0,0,0,0],["content","showComponent",["loc",[null,[5,21],[5,38]]],0,0,0,0],["element","action",["toggleComponent"],[],["loc",[null,[7,8],[7,36]]],0,0],["block","if",[["get","showComponent",["loc",[null,[11,6],[11,19]]],0,0,0,0]],[],0,null,["loc",[null,[11,0],[13,7]]]]],locals:[],templates:[e]}}())}),define("dummy-app/config/environment",["ember"],function(e){var t="dummy-app";try{var n=t+"/config/environment",a=e.default.$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy-app/app").default.create({name:"dummy-app",version:"0.0.0+"});