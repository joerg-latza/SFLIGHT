/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.ToolPopup");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.ToolPopup",{metadata:{publicMethods:["isOpen","open","close","setPosition"],library:"sap.ui.ux3",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconHover":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"iconSelected":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"modal":{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"content",aggregations:{"buttons":{type:"sap.ui.core.Control",multiple:true,singularName:"button"},"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},associations:{"initialFocus":{type:"sap.ui.core.Control",multiple:false},"opener":{type:"sap.ui.core.Control",multiple:false}},events:{"open":{},"close":{allowPreventDefault:true},"enter":{},"iconChanged":{},"closed":{}}}});sap.ui.ux3.ToolPopup.M_EVENTS={'open':'open','close':'close','enter':'enter','iconChanged':'iconChanged','closed':'closed'};jQuery.sap.require("sap.ui.core.Popup");jQuery.sap.require("sap.ui.core.theming.Parameters");sap.ui.ux3.ToolPopup.ARROW_LEFT=new RegExp(/my:(left|begin)\|[a-z]+ at:(right|end)\|[a-z]+/);sap.ui.ux3.ToolPopup.ARROW_RIGHT=new RegExp(/my:(right|end)\|[a-z]+ at:(left|begin)\|[a-z]+/);sap.ui.ux3.ToolPopup.ARROW_UP=new RegExp(/my:[a-z]+\|top at:[a-z]+\|bottom/);sap.ui.ux3.ToolPopup.ARROW_DOWN=new RegExp(/my:[a-z]+\|bottom at:[a-z]+\|top/);(function(){sap.ui.ux3.ToolPopup.prototype.init=function(){this.oPopup=null;this._bPositionSet=false;this._bFocusSet=false;this._proxyOpened=jQuery.proxy(p,this)};sap.ui.ux3.ToolPopup.prototype.exit=function(){if(this.oPopup){this.oPopup.detachClosed(jQuery.proxy(this.fireClosed,this));this.oPopup.detachOpened(this._proxyOpened);delete this.oPopup}delete this._bPositionSet;delete this._bFocusSet;delete this._proxyOpened;delete this._bRTL};var p=function(){var i=this.getId();var $=jQuery.sap.byId(i+"-focusable");if(!this._bFocusSet){var a=jQuery(":sapFocusable",this.$());if(a.length>1){$.css("display","none");$=a[1]}$.focus()}else{$.css("display","none")}};sap.ui.ux3.ToolPopup.prototype.isOpen=function(){if(this.oPopup&&this.oPopup.isOpen()){return true}return false};sap.ui.ux3.ToolPopup.prototype.willBeClosed=function(){var e=this.oPopup&&this.oPopup.getOpenState();return e!==sap.ui.core.OpenState.OPENING&&e!==sap.ui.core.OpenState.OPEN};sap.ui.ux3.ToolPopup.prototype.open=function(m,a){var A=g(this,m,a);var i=this.getId();if(!this._bPositionSet){var o;var r="sap.ui.ux3.ToolPopup:";var s=r+"sapUiUx3ToolPopupArrowWidth";s=sap.ui.core.theming.Parameters.get(s);var O=parseInt(s,10);var b=0;if(!m){m=sap.ui.core.Popup.Dock.BeginTop}if(!a){a=sap.ui.core.Popup.Dock.EndTop}o=jQuery.sap.domById(this.getOpener());if(o){var $=jQuery.sap.byId(this.getOpener());var h=$.outerHeight(true);switch(A){case"Up":O=0;b=parseInt(s,10);break;case"Down":O=0;b=parseInt(s,10)*-1;break;case"Right":O=parseInt(s,10)*-1;default:case"Left":b=(h/2)*-1;b=parseInt(b,10);break}var c=""+O+" "+b;this.setPosition(m,a,o,c,"none");this._bPositionSet=false}else{jQuery.sap.log.warning("No opener set. Using a default position for Popup",this)}}this._ensurePopup();this.oPopup.setModal(this.getModal());this._oPreviousFocus=sap.ui.core.Popup.getCurrentFocusInfo();this.fireOpen();this.oPopup.open(400);if(this._bPositionSet){var d=this.oPopup._oLastPosition.of;var e=jQuery.sap.byId(d.id);if(!e.hasClass("sapUiUx3ShellTool")){m=this.oPopup._oLastPosition.my;a=this.oPopup._oLastPosition.at;A=g(this,m,a)}}this._bPositionSet=false;var f=jQuery.sap.byId(i+"-arrow");f.attr("class","sapUiUx3TPArrow sapUiUx3TPArrow"+A);if(A==="Right"){var w=jQuery.sap.byId(i).outerWidth(true);var r="sap.ui.ux3.ToolPopup:";var j=r+"sapUiUx3ToolPopupArrowRightMarginCorrection";j=sap.ui.core.theming.Parameters.get(j);w+=parseInt(j);this._bRTL=sap.ui.getCore().getConfiguration().getRTL();if(this._bRTL){f.css("margin-right",w+"px")}else{f.css("margin-left",w+"px")}}return this};var g=function(t,m,a){if(m&&a){var b=m.split(" ");var c=a.split(" ");var r="my:"+b[0]+"|"+b[1];r+=" at:"+c[0]+"|"+c[1];if(sap.ui.ux3.ToolPopup.ARROW_LEFT.exec(r)){return"Left"}if(sap.ui.ux3.ToolPopup.ARROW_RIGHT.exec(r)){return"Right"}if(sap.ui.ux3.ToolPopup.ARROW_UP.exec(r)){return"Up"}if(sap.ui.ux3.ToolPopup.ARROW_DOWN.exec(r)){return"Down"}}return"Left"}}());
sap.ui.ux3.ToolPopup.prototype.onsapescape=function(){if(this.fireClose()){this.close()}};
sap.ui.ux3.ToolPopup.prototype.close=function(p){if(this.oPopup&&this.oPopup.isOpen()){this.oPopup.close(400);this.fireEvent("close_always");if(!p){sap.ui.core.Popup.applyFocusInfo(this._oPreviousFocus)}}return this};
sap.ui.ux3.ToolPopup.prototype.onsapenter=function(e){this.fireEnter({originalEvent:e,originalSrcControl:e.srcControl})};
sap.ui.ux3.ToolPopup.prototype.onBeforeRendering=function(){var i=this.getInitialFocus();if(i){this._bFocusSet=true;this.oPopup.setInitialFocusId(i)}else{this._bFocusSet=false}this._bRTL=sap.ui.getCore().getConfiguration().getRTL()};
sap.ui.ux3.ToolPopup.prototype._ensurePopup=function(){if(!this.oPopup){this.oPopup=new sap.ui.core.Popup(this,false,true,false);this.oPopup.attachClosed(jQuery.proxy(this.fireClosed,this));this.oPopup.attachOpened(this._proxyOpened)}return this.oPopup};
sap.ui.ux3.ToolPopup.prototype.setPosition=function(){this._ensurePopup();this.oPopup.setPosition.apply(this.oPopup,arguments);this._bPositionSet=true;return this};
sap.ui.ux3.ToolPopup.prototype.setIcon=function(i){this.setProperty("icon",i,true);this.fireIconChanged();return this};
sap.ui.ux3.ToolPopup.prototype.setIconHover=function(i){this.setProperty("iconHover",i,true);this.fireIconChanged();return this};
sap.ui.ux3.ToolPopup.prototype.setIconSelected=function(i){this.setProperty("iconSelected",i,true);this.fireIconChanged();return this};
sap.ui.ux3.ToolPopup.prototype.getIconSelected=function(){return this.getProperty("iconSelected")||this.getProperty("iconHover")};
