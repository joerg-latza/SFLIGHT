/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Button");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Button",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"Misc",defaultValue:null},"type":{type:"sap.m.ButtonType",group:"Appearance",defaultValue:sap.m.ButtonType.Default},"width":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:null},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"icon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"iconFirst":{type:"boolean",group:"Appearance",defaultValue:true},"activeIcon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null}},events:{"tap":{}}}});sap.m.Button.M_EVENTS={'tap':'tap'};jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.m.Button.prototype.init=function(){this.orientationProxy=jQuery.proxy(this._handleOrientationChange,this);jQuery(window).bind("orientationchange",this.orientationProxy)};
sap.m.Button.prototype.exit=function(e){if(this._image){this._image.destroy()}if(this._imageBtn){this._imageBtn.destroy()}if(this.orientationProxy){jQuery(window).unbind("orientationchange",this.orientationProxy)}};
sap.m.Button.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true;if((e.targetTouches&&e.targetTouches.length===1)||!e.targetTouches){this._touchedY=e.targetTouches[0].clientY;this._touchedX=e.targetTouches[0].clientX;if(!this._touchEndProxy){this._touchEndProxy=jQuery.proxy(this._ontouchend,this)}if(jQuery.sap.touchEventMode!=="ON"){jQuery(window.document).bind("mouseup",this._touchEndProxy)}else{this.$().bind("touchcancel touchend",this._touchEndProxy)}this._activeButton();this._target=e.target}};
sap.m.Button.prototype.ontouchmove=function(e){var t=e.targetTouches&&((Math.abs(this._touchedY-e.targetTouches[0].clientY)>10)||Math.abs(this._touchedX-e.targetTouches[0].clientX)>10);if(((!!this._target)&&(this._target!=e.target))||t){this._ontouchend(e)}};
sap.m.Button.prototype._ontouchend=function(e){this._inactiveButton();if(jQuery.sap.touchEventMode!=="ON"){jQuery(window.document).unbind("mouseup",this._touchEndProxy)}else{this.$().unbind("touchcancel touchend",this._touchEndProxy)}};
sap.m.Button.prototype.ontap=function(e){if(this.getEnabled()){if(!this._target){this._target=e.target}if((!!this._target)&&(this._target===e.target)){this.focus();this.fireTap({})}}delete this._target};
sap.m.Button.prototype._handleOrientationChange=function(){};
sap.m.Button.prototype._activeButton=function(){this.$().addClass("sapMBtnActive");if(this.getEnabled()){if(this.getIcon()&&this.getActiveIcon()){this._image.setSrc(this.getActiveIcon())}}};
sap.m.Button.prototype._inactiveButton=function(){this.$().removeClass("sapMBtnActive");if(this.getEnabled()){if(this.getIcon()&&this.getActiveIcon()){this._image.setSrc(this.getIcon())}}};
sap.m.Button.prototype._getImage=function(i,s,a){var I=this._image;if(!!I){I.setSrc(s);I.setActiveSrc(a)}else{I=new sap.m.Image(i,{src:s,activeSrc:a}).addStyleClass("sapMBtnCustomIcon").setParent(this,null,true)}return this._image=I};
sap.m.Button.prototype._getImageBtn=function(i,s,h,w){var I=this._imageBtn;if(!!I){I.setSrc(s);I.setHeight(h);I.setWidth(w)}else{I=new sap.m.Image(i,{src:s,height:h,width:w}).setParent(this,null,true);}return this._imageBtn=I};
