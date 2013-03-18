/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.Collection");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.ux3.Collection",{metadata:{library:"sap.ui.ux3",properties:{"title":{type:"string",group:"Appearance",defaultValue:null},"editable":{type:"boolean",group:"Appearance",defaultValue:false},"multiSelection":{type:"boolean",group:"Accessibility",defaultValue:false}},aggregations:{"items":{type:"sap.ui.core.Item",multiple:true,singularName:"item"}},associations:{"selectedItems":{type:"sap.ui.core.Item",multiple:true,singularName:"selectedItem"}},events:{"selectionChanged":{},"propertyChanged":{}}}});sap.ui.ux3.Collection.M_EVENTS={'selectionChanged':'selectionChanged','propertyChanged':'propertyChanged'};jQuery.sap.require("sap.ui.model.SelectionModel");
sap.ui.ux3.Collection.prototype.init=function(){this.oCollectionSelection=new sap.ui.model.SelectionModel(sap.ui.model.SelectionModel.SINGLE_SELECTION)};
sap.ui.ux3.Collection.prototype.setMultiSelection=function(m){if(m){this.oCollectionSelection.setSelectionMode(sap.ui.model.SelectionModel.MULTI_SELECTION)}else{this.oCollectionSelection.setSelectionMode(sap.ui.model.SelectionModel.SINGLE_SELECTION);this.removeAllSelectedItems()}return this.setProperty("multiSelection",m)};
sap.ui.ux3.Collection.prototype.setEditable=function(e){this.setProperty("editable",e,true);this.firePropertyChanged()};
sap.ui.ux3.Collection.prototype.addSelectedItem=function(s){var S;if(typeof s=="object"){S=s}else{S=sap.ui.getCore().byId(s)}if(jQuery.inArray(S.getId(),this.getSelectedItems())>=0){return this}var i=this.indexOfItem(S);if(i>-1){if(this.oCollectionSelection.getSelectionMode()==sap.ui.model.SelectionModel.SINGLE_SELECTION){this.removeAllAssociation("selectedItems",true);this.oCollectionSelection.clearSelection()}this.oCollectionSelection.addSelectionInterval(i,i)}this.addAssociation("selectedItems",s,true);this.fireSelectionChanged();return this};
sap.ui.ux3.Collection.prototype.removeSelectedItem=function(s){if(this.getSelectedItems().length<=1){return}var r=this.removeAssociation("selectedItems",s,true);var i;if(typeof s=="object"){i=this.indexOfItem(s)}else{i=this.indexOfItem(sap.ui.getCore().byId(s))}if(i>-1){this.oCollectionSelection.removeSelectionInterval(i,i)}this.fireSelectionChanged();return r};
sap.ui.ux3.Collection.prototype.removeAllSelectedItems=function(){var r=this.removeAllAssociation("selectedItems",true);this.oCollectionSelection.clearSelection();if(this.getItems().length>0){this.addSelectedItem(this.getItems()[0])}else{this.fireSelectionChanged()}return r};
