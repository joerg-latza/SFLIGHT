/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.SegmentedButton");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.SegmentedButton",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],library:"sap.ui.commons",properties:{"enabled":{type:"boolean",group:"Misc",defaultValue:true},"visible":{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{"buttons":{type:"sap.ui.commons.Button",multiple:true,singularName:"button"}},associations:{"selectedButton":{type:"sap.ui.commons.Button",multiple:false}},events:{"select":{}}}});sap.ui.commons.SegmentedButton.M_EVENTS={'select':'select'};jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
sap.ui.commons.SegmentedButton.prototype.init=function(){if(!this._oItemNavigation){this._oItemNavigation=new sap.ui.core.delegate.ItemNavigation();this._oItemNavigation.setCycling(false);this.addDelegate(this._oItemNavigation)}};
sap.ui.commons.SegmentedButton.prototype.exit=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}};
sap.ui.commons.SegmentedButton.prototype.onAfterRendering=function(){this._setItemNavigation()};
sap.ui.commons.SegmentedButton.prototype._buttonSelected=function(e){var o=sap.ui.getCore().byId(this.getSelectedButton()),n=e.getSource();if(n!==o){this.setSelectedButton(n);this.fireSelect({selectedButtonId:n.getId()})}};
sap.ui.commons.SegmentedButton.prototype._setItemNavigation=function(){if(this.getDomRef()){this._oItemNavigation.setRootDomRef(jQuery(this.getDomRef()).get(0));var I=[];var b=this.getButtons();for(var i=0;i<b.length;i++){I.push(b[i].getDomRef())}this._oItemNavigation.setItemDomRefs(I)}};
sap.ui.commons.SegmentedButton.prototype._rerenderButtons=function(){var $=jQuery.sap.byId(this.getId());if($.length>0){var r=sap.ui.getCore().createRenderManager();sap.ui.commons.SegmentedButtonRenderer.renderButtons(r,this);r.flush($[0]);r.destroy()}};
sap.ui.commons.SegmentedButton.prototype.addButton=function(b){this.addAggregation("buttons",b,true);b.attachPress(this._buttonSelected,this);this._rerenderButtons();return this};
sap.ui.commons.SegmentedButton.prototype.insertButton=function(b,i){this.insertAggregation("buttons",b,i,true);b.attachPress(this._buttonSelected,this);this._rerenderButtons();return this};
sap.ui.commons.SegmentedButton.prototype.removeButton=function(b){var r=this.removeAggregation("buttons",b,true);if(r){r.detachPress(this._buttonSelected,this);this._rerenderButtons()}return r};
sap.ui.commons.SegmentedButton.prototype.removeAllButtons=function(){var r=this.removeAllAggregation("buttons",true);jQuery.each(r,function(i,b){b.detachPress(this._buttonSelected,this)});this._rerenderButtons();return r};
sap.ui.commons.SegmentedButton.prototype.setSelectedButton=function(b){var B,o=sap.ui.getCore().byId(this.getSelectedButton());this.setAssociation("selectedButton",b,false);B=sap.ui.getCore().byId(this.getSelectedButton());if(o){o.removeStyleClass("sapUiSegButtonSelected")}if(o&&o._icon){o.setIcon(o._icon);o._icon=null}if(B){if(B.getIconHovered()){B._icon=B.getIcon();B.setIcon(B.getIconHovered())}B.addStyleClass("sapUiSegButtonSelected")}};
sap.ui.commons.SegmentedButton.prototype.setEnabled=function(e){jQuery.each(this.getButtons(),function(i,b){b.setEnabled(e)});if(this._oItemNavigation&&!e){this.removeDelegate(this._oItemNavigation)}else{this.addDelegate(this._oItemNavigation)}this.setProperty("enabled",e)};
sap.ui.commons.SegmentedButton.prototype.clone=function(I,l){var b=this.getButtons();for(var i=0;i<b.length;i++){var B=b[i];B.detachPress(this._buttonSelected,this)}var c=sap.ui.core.Element.prototype.clone.apply(this,arguments);for(var i=0;i<b.length;i++){var B=b[i];B.attachPress(this._buttonSelected,this)}return c};
