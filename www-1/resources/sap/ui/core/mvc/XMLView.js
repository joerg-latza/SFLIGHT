/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.mvc.XMLView");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.mvc.View");sap.ui.core.mvc.View.extend("sap.ui.core.mvc.XMLView",{metadata:{library:"sap.ui.core"}});jQuery.sap.require("jquery.sap.xml");jQuery.sap.require("sap.ui.base.DataType");jQuery.sap.require("sap.ui.model.resource.ResourceModel");(function(){sap.ui.xmlview=function(i,v){var s={};if(v){if(typeof(v)=="string"){s.viewName=v}else{s.viewName=v.viewName;s.controller=v.controller;s.viewContent=v.viewContent}return new sap.ui.core.mvc.XMLView(i,s)}else{if(typeof(i)=="string"){s.viewName=i}else{s.viewName=i.viewName;s.controller=i.controller;s.viewContent=i.viewContent}return new sap.ui.core.mvc.XMLView(s)}};sap.ui.core.mvc.XMLView.prototype.initViewSettings=function(s){if(!s){throw new Error("mSettings must be given")}if(s.viewName&&s.viewContent){throw new Error("View name and view content are given. There is no point in doing this, so please decide.")}else if((s.viewName||s.viewContent)&&s.xmlNode){throw new Error("View name/content AND an XML node are given. There is no point in doing this, so please decide.")}else if(!(s.viewName||s.viewContent)&&!s.xmlNode){throw new Error("Neither view name/content nor an XML node is given. One of them is required.")}if(s.viewName){this._xContent=l(s.viewName)}else if(s.viewContent){this.mProperties["viewContent"]=s.viewContent;this._xContent=jQuery.sap.parseXML(s.viewContent);if(this._xContent.parseError.errorCode!=0){var P=this._xContent.parseError;throw new Error("The following problem occurred: XML parse Error for "+P.url+" code: "+P.errorCode+" reason: "+P.reason+" src: "+P.srcText+" line: "+P.line+" linepos: "+P.linepos+" filepos: "+P.filepos)}else{this._xContent=this._xContent.documentElement}}else if(s.xmlNode){this._xContent=s.xmlNode}else{}this._oContainingView=s.containingView||this;if(!this.isSubView()){b(this._xContent,this,s)}else{delete s.controller}if(this._resourceBundleName||this._resourceBundleUrl){var m=new sap.ui.model.resource.ResourceModel({bundleName:this._resourceBundleName,bundleUrl:this._resourceBundleUrl,bundleLocale:this._resourceBundleLocale});this.setModel(m,this._resourceBundleAlias)}};sap.ui.core.mvc.XMLView.prototype.onControllerConnected=function(C){var t=this;sap.ui.base.ManagedObject.runWithPreprocessors(function(){t._aParsedContent=c(t._xContent,t)})};sap.ui.core.mvc.XMLView.prototype.getControllerName=function(){return this._controllerName};sap.ui.core.mvc.XMLView.prototype.isSubView=function(){return this._oContainingView!=this};sap.ui.core.mvc.XMLView.prototype.onAfterRendering=function(){if(this._$oldContent.length!==0){var C=this.getAggregation("content");if(C){for(var i=0;i<C.length;i++){var $=C[i].$();jQuery.sap.byId("sap-ui-dummy-"+C[i].getId(),this._$oldContent).replaceWith($)}}jQuery.sap.byId("sap-ui-dummy-"+this.getId()).replaceWith(this._$oldContent)}this._$oldContent=undefined;sap.ui.core.mvc.View.prototype.onAfterRendering.apply(this,arguments)};function l(t){var u=jQuery.sap.getModulePath(t,".view.xml");var r=jQuery.sap.sjax({url:u,dataType:'xml'});var _=r.data;if(!_){throw new Error("View definition could not be loaded from "+u+". Check for XML errors or 'file not found' errors.")}return _.documentElement}function p(t,v,n){if(v&&v.slice(0,1)==='{'&&v.slice(-1)==='}'){return v}var T=sap.ui.base.DataType.getType(t);if(T){if(T instanceof sap.ui.base.DataType){return T.parseValue(v)}}else{throw new Error("Property "+n+" has no known type")}return v}function a(x){return x.localName||x.baseName||x.nodeName}function b(x,v,s){var A=v.getMetadata().getAllProperties();for(var i=0;i<x.attributes.length;i++){var d=x.attributes[i];if(d.name==='controllerName'){v._controllerName=d.value}else if(d.name==='resourceBundleName'){v._resourceBundleName=d.value}else if(d.name==='resourceBundleUrl'){v._resourceBundleUrl=d.value}else if(d.name==='resourceBundleLocale'){v._resourceBundleLocale=d.value}else if(d.name==='resourceBundleAlias'){v._resourceBundleAlias=d.value}else if(!s[d.name]&&A[d.name]){s[d.name]=p(A[d.name].type,d.value,d.name)}}}function c(x,v){var r=[];if(v.isSubView()){d(x,true)}else{e(x)}return r;function d(x,R){if(x.nodeType===1){var L=a(x);if(x.namespaceURI==="http://www.w3.org/1999/xhtml"||x.namespaceURI==="http://www.w3.org/2000/svg"){r.push("<"+L+" ");var I;for(var i=0;i<x.attributes.length;i++){var j=x.attributes[i];var k=j.value;if(j.name==="id"){k=v._oContainingView.createId(k)}r.push(j.name+"=\""+jQuery.sap.encodeHTML(k)+"\" ")}if(R===true){r.push("data-sap-ui-preserve"+"=\""+v.getId()+"\" ")}r.push(">");e(x);r.push("</"+L+">")}else{var C=h(x);v.addAggregation("content",C);r.push(C)}}else if(x.nodeType===3){var t=x.textContent||x.text,m=a(x.parentNode);if(t){if(m!="style"){t=jQuery.sap.encodeHTML(t)}r.push(t)}}}function e(x,R){var j=x.childNodes;for(var i=0;i<j.length;i++){d(j[i],R)}}function f(n,L){var C;var m=sap.ui.getCore().getLoadedLibraries();jQuery.each(m,function(s,o){if(n===o.namespace||n===o.name){C=o.name+"."+((o.tagNames&&o.tagNames[L])||L)}});C=C||n+"."+L;jQuery.sap.require(C);return jQuery.sap.getObject(C)}function g(n){if(n.namespaceURI==="http://www.w3.org/1999/xhtml"||n.namespaceURI==="http://www.w3.org/2000/svg"){return new sap.ui.core.mvc.XMLView({id:x.attributes['id']?v.createId(x.attributes['id']):undefined,xmlNode:n,containingView:v._oContainingView})}else{return h(n)}}function h(n){var j=n.namespaceURI,C=f(j,a(n)),m=C.getMetadata(),J=m.getJSONKeys(),s={},S="",k=[];for(var i=0;i<n.attributes.length;i++){var o=n.attributes[i];var N=o.name;var V=o.value;var I=J[N];if(N==="id"){s[N]=v.createId(V)}else if(N==="class"){S+=V}else if(N==="viewName"){s[N]=V}else if(N.indexOf(":")>-1){if(o.namespaceURI==="http://schemas.sap.com/sapui5/extension/sap.ui.core.CustomData/1"){k.push({Type:"sap.ui.core.CustomData",key:a(o),value:V})}else{jQuery.sap.log.warning("XMLView parser encountered and ignored attribute '"+N+"' (value: '"+V+"') with unknown namespace")}}else if(I&&I._iKind===0){s[N]=p(I.type,V,N)}else if(I&&I._iKind===1&&I.altTypes){s[N]=p(I.altTypes[0],V,N)}else if(I&&I._iKind===2){if(V&&V.slice(0,1)==='{'&&V.slice(-1)==='}'){s[N]={path:V.slice(1,-1),template:null}}}else if(I&&I._iKind===3){s[N]=v.createId(V)}else if(I&&I._iKind===5){var E=v._oContainingView.oController[V];if(E){s[N]=[E,v._oContainingView.oController]}}else{jQuery.sap.log.warning("XMLView parser encountered and ignored unknown attribute '"+N+"' (value: '"+V+"')")}}if(k.length>0){s["customData"]=k}function q(n,A,u){var w,y,t;for(w=n.firstChild;w;w=w.nextSibling){if(w.nodeType===1){y=w.namespaceURI===j&&u&&u[a(w)];if(y){q(w,y)}else if(A){var t=g(w);if(t){var z=A._sName;if(A.multiple){if(!s[z]){s[z]=[]}if(typeof s[z].path==="string"){s[z].template=t}else{s[z].push(t)}}else{s[z]=t}}}else{throw new Error("Cannot add direct child without default aggregation defined for control "+m.getElementName())}}else if(w.nodeType===3){if(jQuery.trim(w.textContent||w.text)){throw new Error("Cannot add text nodes as direct child of an aggregation. For adding text to an aggregation, a surrounding html tag is needed")}}}}q(n,m.getDefaultAggregation(),m.getAllAggregations());var t=new C(s);if(S&&t.addStyleClass){t.addStyleClass(S)}return t}}}());
