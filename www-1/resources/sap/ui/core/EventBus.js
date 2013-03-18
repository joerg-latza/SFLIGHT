/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.EventBus");jQuery.sap.require("sap.ui.base.EventProvider");(function(){sap.ui.base.Object.extend("sap.ui.core.EventBus",{constructor:function(){sap.ui.base.Object.apply(this);this._mChannels={};this._defaultChannel=new sap.ui.base.EventProvider()}});sap.ui.core.EventBus.prototype.subscribe=function(c,e,f,l){if(typeof(e)==="function"){l=f;f=e;e=c;c=null}var C=a(this,c);C.attachEvent(e,f,l);return this};sap.ui.core.EventBus.prototype.unsubscribe=function(c,e,f,l){if(typeof(e)==="function"){l=f;f=e;e=c;c=null}var C=g(this,c);if(!C){return this}C.detachEvent(e,f,l);if(C!=this._defaultChannel){var E=sap.ui.base.EventProvider.getEventList(C);var i=true;for(var I in E){if(C.hasListeners(I)){i=false;break}}if(i){delete this._mChannels[c]}}return this};sap.ui.core.EventBus.prototype.publish=function(c,e,d){if(arguments.length==1){d=null;e=c;c=null}else if(arguments.length==2){if(typeof(e)!="string"){d=e;e=c;c=null}}d=d?d:{};var C=g(this,c);if(!C){return}var E=sap.ui.base.EventProvider.getEventList(C)[e];if(E&&jQuery.isArray(E)){E=E.slice();var I;for(var i=0,l=E.length;i<l;i++){I=E[i];I.fFunction.call(I.oListener||this,c,e,d)}}};sap.ui.core.EventBus.prototype.getInterface=function(){return this};function g(e,c){if(!c){return e._defaultChannel}return e._mChannels[c]};function a(e,c){var C=g(e,c);if(!C&&c){e._mChannels[c]=new sap.ui.base.EventProvider();C=e._mChannels[c]}return C}}());
