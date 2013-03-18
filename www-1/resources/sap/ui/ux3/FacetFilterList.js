/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.FacetFilterList");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.FacetFilterList",{metadata:{library:"sap.ui.ux3",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"multiSelect":{type:"boolean",group:"Behavior",defaultValue:true},"displaySecondaryValues":{type:"boolean",group:"Misc",defaultValue:false},"selectedKeys":{type:"string[]",group:"Misc",defaultValue:null}},aggregations:{"items":{type:"sap.ui.core.ListItem",multiple:true,singularName:"item"}},events:{"select":{}}}});sap.ui.ux3.FacetFilterList.M_EVENTS={'select':'select'};jQuery.sap.require("sap.ui.commons.ListBox");(function(){sap.ui.ux3.FacetFilterList.getMetadata()._mHiddenAggregations={"controls":{multiple:true,type:"sap.ui.commons.ListBox"}};sap.ui.ux3.FacetFilterList.prototype.init=function(){this._oResBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");this._oListBox=new sap.ui.commons.ListBox(this.getId()+"-lb");this._oListBox.setVisibleItems(5);this._oListBox.setScrollTop(0);this._oListBox.setValueTextAlign("Begin");this._oListBox.setDisplaySecondaryValues(this.getDisplaySecondaryValues());this._oListBox.setDisplayIcons(false);this._oListBox.setEditable(true);this._oListBox.setEnabled(true);this._oListBox.setVisible(true);this._oListBox.setAllowMultiSelect(this.getMultiSelect());this._oListBox.addAriaLabelledBy(this.getId()+"-head-txt");var t=this;this._oListBox.attachSelect(function(e){t.onSelect(t,e)});this.addAggregation("controls",this._oListBox);this._oItemAll=new sap.ui.core.ListItem({text:this._oResBundle.getText("FACETFILTER_ALL",[0]),key:"sapUiFacetFilter_ALL"});this._oListBox.addItem(this._oItemAll)};sap.ui.ux3.FacetFilterList.prototype.setMultiSelect=function(m){this._oListBox.setAllowMultiSelect(m);this.setProperty("multiSelect",m,true)};sap.ui.ux3.FacetFilterList.prototype.setDisplaySecondaryValues=function(d){this._oListBox.setDisplaySecondaryValues(d);this.setProperty("displaySecondaryValues",d,true)};sap.ui.ux3.FacetFilterList.prototype.addItem=function(i){this._oListBox.addItem(i);if(!i.getKey()||jQuery.trim(i.getKey())==""){i.setKey("generatedkey"+this.indexOfItem(i))}this.updateText4All()};sap.ui.ux3.FacetFilterList.prototype.insertItem=function(i,I){this._oListBox.insertItem(i,I+1);if(!i.getKey()||jQuery.trim(i.getKey())==""){i.setKey("generatedkey"+this.indexOfItem(i))}this.updateText4All()};sap.ui.ux3.FacetFilterList.prototype.removeItem=function(i){this._oListBox.removeItem(i);this.updateText4All()};sap.ui.ux3.FacetFilterList.prototype.removeAllItems=function(){this._oListBox.removeAllItems();this._oListBox.addItem(this._oItemAll);this.updateText4All()};sap.ui.ux3.FacetFilterList.prototype.destroyItems=function(){this._oListBox.removeItem(this._oItemAll);this._oListBox.destroyItems();this._oListBox.addItem(this._oItemAll);this.updateText4All()};sap.ui.ux3.FacetFilterList.prototype.indexOfItem=function(i){var I=this._oListBox.indexOfItem(i);if(I>-1){I=I-1}return I};sap.ui.ux3.FacetFilterList.prototype.getItems=function(){var l=this._oListBox.getItems();var I=[];for(var i=1;i<l.length;i++){I.push(l[i])}return I};sap.ui.ux3.FacetFilterList.prototype.setSelectedKeys=function(s){this.setProperty("selectedKeys",s);this.invalidate()};sap.ui.ux3.FacetFilterList.prototype.updateText4All=function(){this._oItemAll.setText(this._oResBundle.getText("FACETFILTER_ALL",[this._oListBox.getItems().length-1]))};sap.ui.ux3.FacetFilterList.prototype.onBeforeRendering=function(){var k=this.getSelectedKeys();if(k&&k.length>0){this._oListBox.setSelectedKeys(k);this._bAllOnly=false}else{this._oListBox.setSelectedKeys(["sapUiFacetFilter_ALL"]);this._bAllOnly=true}};sap.ui.ux3.FacetFilterList.prototype.onSelect=function(f,e){var s=this._oListBox.getSelectedKeys();if(s.length==0){s=["sapUiFacetFilter_ALL"];this._bAllOnly=true;this._oListBox.setSelectedKeys(s)}var I=jQuery.inArray("sapUiFacetFilter_ALL",s);if(I>-1){if(s.length==1){this._bAllOnly=true}else{if(this._bAllOnly){s.splice(I,1);this._bAllOnly=false}else{s=["sapUiFacetFilter_ALL"];this._bAllOnly=true}this._oListBox.setSelectedKeys(s)}}else{this._bAllOnly=false}this.setProperty("selectedKeys",s,true);var S=[];var a=[];var A=this._oListBox.getSelectedItems();if(!this._bAllOnly){for(var i=0;i<A.length;i++){if(A[i]!=this._oItemAll){S.push(this.indexOfItem(A[i]));a.push(A[i])}}}this.fireSelect({id:f.getId(),all:this._bAllOnly,selectedIndices:S,selectedItems:a})}}());
