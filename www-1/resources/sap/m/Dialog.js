/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Dialog");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Dialog",{metadata:{publicMethods:["open","close","isOpen"],library:"sap.m",properties:{"icon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"title":{type:"string",group:"Appearance",defaultValue:null},"type":{type:"sap.m.DialogType",group:"Appearance",defaultValue:sap.m.DialogType.Standard}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},associations:{"leftButton":{type:"sap.m.Button",multiple:false},"rightButton":{type:"sap.m.Button",multiple:false}},events:{"beforeOpen":{},"afterOpen":{},"beforeClose":{},"afterClose":{}}}});sap.m.Dialog.M_EVENTS={'beforeOpen':'beforeOpen','afterOpen':'afterOpen','beforeClose':'beforeClose','afterClose':'afterClose'};jQuery.sap.require("sap.ui.core.Popup");jQuery.sap.require("sap.m.Bar");jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");jQuery.sap.require("sap.m.InstanceManager");
sap.m.Dialog.prototype.init=function(){var t=this;this._$window=jQuery(window);this.oPopup=new sap.ui.core.Popup();this.oPopup.setShadow(true);if(jQuery.device.is.iphone&&!this._bMessageType){this.oPopup.setModal(true,"sapMDialogTransparentBlk")}else{this.oPopup.setModal(true,"sapMDialogBlockLayerInit")}if(jQuery.os.ios||(jQuery.os.android&&jQuery.os.fVersion>2.4)){this.oPopup.setAnimations(jQuery.proxy(this._openAnimation,this),jQuery.proxy(this._closeAnimation,this))}this._fOrientationChange=jQuery.proxy(this._reposition,this);this.oPopup._applyPosition=function(p){var $=t.$();if(t.oPopup.getOpenState()===sap.ui.core.OpenState.OPEN){$.css("visibility","hidden")}t._setDimensions();t._adjustScrollingPane();sap.ui.core.Popup.prototype._applyPosition.call(this,p);if(t.oPopup.getOpenState()===sap.ui.core.OpenState.OPEN){$.css("visibility","visible")}};this._initBlockLayerAnimation();this._oScroller=new sap.ui.core.delegate.ScrollEnablement(this,this.getId()+"-scroll",{horizontal:false,vertical:true,zynga:false,preventDefault:false,nonTouchScrolling:true})};
sap.m.Dialog.prototype.exit=function(){this.oPopup.close();this.oPopup.destroy();this.oPopup=null;if(this._oScroller){this._oScroller.destroy();this._oScroller=null}if(this._header){this._header.destroy();this._header=null}if(this._headerTitle){this._headerTitle.destroy();this._headerTitle=null}if(this._iconImage){this._iconImage.destroy();this._iconImage=null}this._$window.unbind("resize",this._fOrientationChange)};
sap.m.Dialog.prototype.open=function(){var p=this.oPopup;if(p.isOpen()){return this}this._oCloseTrigger=null;var $=jQuery("#sap-ui-blocklayer-popup");if($.length>0){var t=jQuery.device.is.iphone&&!this._bMessageType&&!this.hasStyleClass("sapMActionSheetDialog");$.toggleClass("sapMDialogTransparentBlk",t);$.toggleClass("sapMDialogBlockLayerInit",!t)}this.fireBeforeOpen();p.attachEvent(sap.ui.core.Popup.M_EVENTS.opened,this._handleOpened,this);p.setContent(this);if(jQuery.device.is.iphone&&!this._bMessageType){p.setPosition("center top","center bottom",document,"0 0","fit")}else{p.setPosition("center center","center center",document,"0 0","fit")}p.open();sap.m.InstanceManager.addDialogInstance(this);return this};
sap.m.Dialog.prototype.close=function(){var p=this.oPopup;var e=this.oPopup.getOpenState();if(!(e===sap.ui.core.OpenState.CLOSED||e===sap.ui.core.OpenState.CLOSING)){this.fireBeforeClose({origin:this._oCloseTrigger});p.attachEvent(sap.ui.core.Popup.M_EVENTS.closed,this._handleClosed,this);p.close()}return this};
sap.m.Dialog.prototype.isOpen=function(){return this.oPopup&&this.oPopup.isOpen()};
sap.m.Dialog.prototype._handleOpened=function(){this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.opened,this._handleOpened,this);this._$window.bind("resize",this._fOrientationChange);this.fireAfterOpen()};
sap.m.Dialog.prototype._handleClosed=function(){this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.closed,this._handleClosed,this);this._$window.unbind("resize",this._fOrientationChange);sap.m.InstanceManager.removeDialogInstance(this);this.fireAfterClose({origin:this._oCloseTrigger})};
sap.m.Dialog.prototype._openAnimation=function(r,R,o){r.css("display","block");if(jQuery.device.is.iphone&&!this._bMessageType){r.addClass("sapMDialogBottom").removeClass("sapMDialogHidden");window.setTimeout(function(){r.bind("webkitTransitionEnd",function(){r.unbind("webkitTransitionEnd");r.removeClass("sapMDialogSliding");o()});r.addClass("sapMDialogSliding").removeClass("sapMDialogBottom")},0)}else{r.bind("webkitAnimationEnd",function(){r.unbind("webkitAnimationEnd");o();r.removeClass("sapMDialogOpening")});r.addClass("sapMDialogOpening")}};
sap.m.Dialog.prototype._closeAnimation=function(r,R,c){if(jQuery.device.is.iphone&&!this._bMessageType){r.bind("webkitTransitionEnd",function(){r.unbind("webkitTransitionEnd");r.addClass("sapMDialogHidden").removeClass("sapMDialogBottom").removeClass("sapMDialogSliding");c()});r.addClass("sapMDialogSliding").addClass("sapMDialogBottom")}else{if(!jQuery.os.ios){r.bind("webkitAnimationEnd",function(){r.unbind("webkitAnimationEnd");c();r.removeClass("sapMDialogClosing")});r.addClass("sapMDialogClosing")}else{c()}}};
sap.m.Dialog.prototype._setDimensions=function(){this._$window=jQuery(window);var w=this._$window.width(),W=this._$window.height(),$=this.$(),h=jQuery.device.is.tablet?128:64,v=16,p=window.parseInt($.css("padding-left"),10),P=window.parseInt($.css("padding-right"),10),i=window.parseInt($.css("padding-top"),10),a=window.parseInt($.css("padding-bottom"),10),m=w-h-p-P,M=W-v-i-a,b,c=jQuery.sap.byId(this.getId()+"-cont");$.css({"width":"","height":"","min-width":"","max-width":"","left":"0px","top":"0px","max-height":""});c.css("max-height","");if(jQuery.device.is.tablet){$.css({"min-width":"400px","max-width":m+"px","max-height":M+"px"})}else{if(jQuery.device.is.iphone&&!this._bMessageType){$.css({width:"100%",height:"100%"})}else{if(jQuery.device.is.portrait){$.css({"width":m+"px","max-height":M+"px"})}else{b=W;$.css({"min-width":b+"px","max-width":m+"px","max-height":M+"px"})}}}};
sap.m.Dialog.prototype._adjustScrollingPane=function(){var w=this._$window.width(),W=this._$window.height(),$=this.$(),m=$.height(),h,f,a=jQuery.sap.byId(this.getId()+"-cont"),c=window.parseInt(a.css("padding-top"),10),C=window.parseInt(a.css("padding-bottom"),10),b=jQuery.sap.byId(this.getId()+"-scroll"),M,s;if(jQuery.os.ios&&!this._bMessageType){h=$.children(".sapMBar").outerHeight(true);f=0}else{h=$.children("header").outerHeight(true);f=$.children("footer").outerHeight(true)}M=m-h-f-c-C;a.css((jQuery.device.is.iphone&&!this._bMessageType)?"height":"max-height",M+"px");this._oScroller.refresh()};
sap.m.Dialog.prototype._reposition=function(){var t=this;var e=this.oPopup.getOpenState();if(e!==sap.ui.core.OpenState.OPEN||this._sAvoidRepeatTimer){return}if(jQuery.sap.touchEventMode==="ON"&&jQuery.os.ios&&jQuery.os.fVersion>=6){this._sAvoidRepeatTimer=window.setTimeout(function(){t._sAvoidRepeatTimer=null},50)}this.oPopup._applyPosition(this.oPopup._oLastPosition)};
sap.m.Dialog.prototype._createHeader=function(){if(jQuery.os.ios&&!this._bMessageType){if(!this._header){this._header=new sap.m.Bar(this.getId()+"-header").setParent(this,null,false)}}};
sap.m.Dialog.prototype._getHeader=function(){if(!this.getTitle()&&!this.getLeftButton()&!this.getRightButton()){return null}this._createHeader();if(this._header){this._header.addStyleClass("sapMHeader-CTX")}return this._header};
sap.m.Dialog.prototype._initBlockLayerAnimation=function(){if(!jQuery.device.is.iphone||this._bMessageType){this.oPopup._showBlockLayer=function(){sap.ui.core.Popup.prototype._showBlockLayer.call(this);var $=jQuery("#sap-ui-blocklayer-popup");if(jQuery.os.ios){$.addClass('sapMDialogBLyInit')}else{$.addClass("sapMDialogBlockLayerAnimation");setTimeout(function(){$.addClass("sapMDialogBlockLayer")},0)}};this.oPopup._hideBlockLayer=function(){var $=jQuery("#sap-ui-blocklayer-popup"),t=this;if(sap.ui.core.Popup.blStack.length>1){sap.ui.core.Popup.prototype._hideBlockLayer.call(t)}else{$.removeClass('sapMDialogBlockLayerInit');if(jQuery.os.ios){$.removeClass("sapMDialogBLyInit");sap.ui.core.Popup.prototype._hideBlockLayer.call(t)}else{$.removeClass("sapMDialogBlockLayer");$.bind("webkitTransitionEnd",function(){$.unbind("webkitTransitionEnd");sap.ui.core.Popup.prototype._hideBlockLayer.call(t);$.removeClass("sapMDialogBlockLayerAnimation")})}}}}else{this.oPopup._hideBlockLayer=function(){var $=jQuery("#sap-ui-blocklayer-popup");$.removeClass("sapMDialogTransparentBlk");sap.ui.core.Popup.prototype._hideBlockLayer.call(this)}}};
sap.m.Dialog.prototype._clearBlockLayerAnimation=function(){if(jQuery.device.is.iphone&&!this._bMessageType){delete this.oPopup._showBlockLayer;this.oPopup._hideBlockLayer=function(){var $=jQuery("#sap-ui-blocklayer-popup");$.removeClass("sapMDialogTransparentBlk");sap.ui.core.Popup.prototype._hideBlockLayer.call(this)}}};
sap.m.Dialog.prototype.getScrollDelegate=function(){return this._oScroller};
sap.m.Dialog.prototype.setLeftButton=function(b){var t=this;if(typeof(b)==="string"){b=sap.ui.getCore().byId(b)}var o=this.getLeftButton();if(b&&o===b.getId()){return this}if(jQuery.os.ios&&!this._bMessageType){this._createHeader();if(b){b.addDelegate({ontap:function(){t._oCloseTrigger=b}},true);if(o){this._header.removeAggregation("contentLeft",o,true)}this._header.addAggregation("contentLeft",b,true);this._header.invalidate()}else{if(o){this._header.removeContentLeft(o)}}}this.setAssociation("leftButton",b,jQuery.os.ios);return this};
sap.m.Dialog.prototype.setRightButton=function(b){var t=this;if(typeof(b)==="string"){b=sap.ui.getCore().byId(b)}var o=this.getRightButton();if(b&&o===b.getId()){return this}if(jQuery.os.ios&&!this._bMessageType){this._createHeader();if(b){b.addDelegate({ontap:function(){t._oCloseTrigger=b}},true);if(o){this._header.removeAggregation("contentRight",o,true)}this._header.addAggregation("contentRight",b,true);this._header.invalidate()}else{if(o){this._header.removeContentRight(o)}}}this.setAssociation("rightButton",b,jQuery.os.ios);return this};
sap.m.Dialog.prototype.setTitle=function(t){if(t){this.setProperty("title",t,true);if(this._headerTitle){this._headerTitle.setText(t)}else{this._headerTitle=new sap.m.Label(this.getId()+"-title",{text:t})}if(jQuery.os.ios&&!this._bMessageType){this._createHeader();this._header.addContentMiddle(this._headerTitle)}}else{this.setProperty("title",t,false)}return this};
sap.m.Dialog.prototype.setIcon=function(i){if(!jQuery.os.ios){if(i){if(i!==this.getIcon()){if(this._iconImage){this._iconImage.setSrc(i)}else{this._iconImage=new sap.m.Image(this.getId()+"-icon",{src:i})}}}else{if(this._iconImage){this._iconImage.destroy();this._iconImage=null}}}this.setProperty("icon",i,true);return this};
sap.m.Dialog.prototype.setType=function(t){var o=this.getType();var $=jQuery("#sap-ui-blocklayer-popup");if(o===t){return}this._bMessageType=(t===sap.m.DialogType.Message);if(jQuery.device.is.iphone){if(this._bMessageType){if($.length===0){this.oPopup.setModal(true,"sapMDialogBlockLayerInit")}else{$.removeClass("sapMDialogTransparentBlk").addClass("sapMDialogBlockLayerInit");if(this.oPopup.isOpen()){$.addClass("sapMBusyBLyInit sapMBusyBLyShown")}}this.oPopup.setPosition("center center","center center",document,"0 0","fit");this._initBlockLayerAnimation()}else{if($.length===0){this.oPopup.setModal(true,"sapMDialogTransparentBlk")}else{$.removeClass("sapMBusyBLyShown sapMBusyBLyInit").addClass("sapMDialogTransparentBlk")}this.oPopup.setPosition("center top","center bottom",document,"0 0","fit");this._clearBlockLayerAnimation()}}this.setProperty("type",t,false)};
