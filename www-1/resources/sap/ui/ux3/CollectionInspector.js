/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.CollectionInspector");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.CollectionInspector",{metadata:{library:"sap.ui.ux3",properties:{"sidebarVisible":{type:"boolean",group:"Appearance",defaultValue:true},"fitParent":{type:"boolean",group:"Appearance",defaultValue:true}},aggregations:{"collections":{type:"sap.ui.ux3.Collection",multiple:true,singularName:"collection"},"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},associations:{"selectedCollection":{type:"sap.ui.ux3.Collection",multiple:false}},events:{"collectionSelected":{},"itemSelectionChanged":{},"editCollection":{}}}});sap.ui.ux3.CollectionInspector.M_EVENTS={'collectionSelected':'collectionSelected','itemSelectionChanged':'itemSelectionChanged','editCollection':'editCollection'};jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
sap.ui.ux3.CollectionInspector.prototype.init=function(){var t=this;if(!this._oItemNavigation){this._oItemNavigation=new sap.ui.core.delegate.ItemNavigation();this._oItemNavigation.setCycling(false);this.addDelegate(this._oItemNavigation)}var T=new sap.ui.commons.ToggleButton(this.getId()+"-toggleButton");T.setParent(this);T.setTooltip("This button opens and closes the sidebar");T.attachPress(function(){if(T.getPressed()){t.openSidebar()}else{t.closeSidebar()}});this._oToggleButton=T;var c=new sap.ui.commons.SegmentedButton(this.getId()+"-selector");c.attachSelect(function(E){var C=this.indexOfButton(sap.ui.getCore().byId(this.getSelectedButton()));var o=t.getCollections()[C];t.setSelectedCollection(o);t.fireCollectionSelected({collection:o});t.openSidebar()});this._oCollectionSelector=c;var e=new sap.ui.commons.Button();e.addStyleClass("sapUiUx3EditCollectionButton");e.setText("Collection");e.setTooltip("This button opens an edit dialog for the current collection");e.attachPress(function(){t.fireEditCollection()});this._oEditButton=e};
sap.ui.ux3.CollectionInspector.prototype.exit=function(){this._oToggleButton.destroy();this._oToggleButton=null;this._oEditButton.destroy();this._oEditButton=null;this._oCollectionSelector.destroy();this._oCollectionSelector=null;if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}};
sap.ui.ux3.CollectionInspector.prototype.onBeforeRendering=function(){this._oToggleButton.setPressed(this.getSidebarVisible())};
sap.ui.ux3.CollectionInspector.prototype.onAfterRendering=function(){if(!this.getSelectedCollection()){if(this.getCollections().length>0){this.setSelectedCollection(this.getCollections()[0])}}else{var s=sap.ui.getCore().byId(this.getSelectedCollection());if(s.getSelectedItems().length==0&&s.getItems().length>0){s.addSelectedItem(s.getItems()[0])}}this.setElementsHeight();this.updateItemNavigation();this.refreshSelectionHighlighting()};
sap.ui.ux3.CollectionInspector.prototype.onclick=function(e){var t=e.target;if(jQuery(t).hasClass("sapUiUx3CICollectionListItem")){var s=sap.ui.getCore().byId(this.getSelectedCollection());var i=jQuery(t).index();if(jQuery.inArray(t.id,s.getSelectedItems())>=0){s.removeSelectedItem(t.id)}else{s.addSelectedItem(t.id)}this.refreshSelectionHighlighting();this.fireItemSelectionChanged({selectedItems:s.getSelectedItems()})}};
sap.ui.ux3.CollectionInspector.prototype.getToggleButton=function(){return this._oToggleButton};
sap.ui.ux3.CollectionInspector.prototype.getCollectionSelector=function(){return this._oCollectionSelector};
sap.ui.ux3.CollectionInspector.prototype.rerenderSidebar=function(){var c=sap.ui.getCore().byId(this.getSelectedCollection());if(c&&c.getEditable()){this._oEditButton.setVisible(true)}else{this._oEditButton.setVisible(false)}var C=jQuery.sap.byId(this.getId()+"-sidebar");if(C.length>0){var r=sap.ui.getCore().createRenderManager();this.getRenderer().renderSidebar(r,this);r.flush(C[0]);r.destroy()}if(c&&c.getEditable()){jQuery.sap.byId(this.getId()+"-sidebar").addClass("sapUiUx3CIWithEditButton")}else{jQuery.sap.byId(this.getId()+"-sidebar").removeClass("sapUiUx3CIWithEditButton")}this.updateItemNavigation();this.refreshSelectionHighlighting()};
sap.ui.ux3.CollectionInspector.prototype.updateItemNavigation=function(){var i=[];var I=jQuery.sap.byId(this.getId()+"-sidebar").find('li');jQuery.each(I,function(a,d){i.push(d)});this._oItemNavigation.setItemDomRefs(i);this._oItemNavigation.setRootDomRef(jQuery.sap.byId(this.getId()+"-sidebar ul")[0])};
sap.ui.ux3.CollectionInspector.prototype.rerenderContent=function(){var c=jQuery.sap.byId(this.getId()+"-content");if(c.length>0){var r=sap.ui.getCore().createRenderManager();this.getRenderer().renderContent(r,this);r.flush(c[0]);r.destroy()}this.setElementsHeight()};
sap.ui.ux3.CollectionInspector.prototype.setElementsHeight=function(){if(this.getFitParent())return;var s=jQuery.sap.byId(this.getId()+"-sidebar");var c=jQuery.sap.byId(this.getId()+"-content");var C=c.outerHeight(true);var i=c.outerHeight(true)-c.height();var S=s.outerHeight(true)-s.height();s.height(Math.max(200,C)-S);c.height(Math.max(200,C)-i)};
sap.ui.ux3.CollectionInspector.prototype.openSidebar=function(){var $=jQuery.sap.byId(this.getId());var s=jQuery.sap.byId(this.getId()+"-sidebar");var c=jQuery.sap.byId(this.getId()+"-content");s.stop(true,true).animate({width:150},300,function(){s.css('width','')});c.stop(true,true).animate({left:150},300,function(){c.css('left','')});$.removeClass("sapUiUx3CISidebarClosed");$.addClass("sapUiUx3CISidebarOpened");this._oToggleButton.setPressed(true)};
sap.ui.ux3.CollectionInspector.prototype.closeSidebar=function(){var $=jQuery.sap.byId(this.getId());var s=jQuery.sap.byId(this.getId()+"-sidebar");var c=jQuery.sap.byId(this.getId()+"-content");s.stop(true,true).animate({width:0},300,function(){s.css('width','')});c.stop(true,true).animate({left:0},300,function(){c.css('left','')});$.removeClass("sapUiUx3CISidebarOpened");$.addClass("sapUiUx3CISidebarClosed");this._oToggleButton.setPressed(false)};
sap.ui.ux3.CollectionInspector.prototype.insertCollection=function(c,i){var b=new sap.ui.commons.Button();b.setText(c.getTitle());var t=this;c.attachSelectionChanged(function(){t.refreshSelectionHighlighting()});c.attachPropertyChanged(function(){t.rerenderSidebar()});this._oCollectionSelector.insertButton(b,i);return this.insertAggregation("collections",c,i)};
sap.ui.ux3.CollectionInspector.prototype.addCollection=function(c){var b=new sap.ui.commons.Button();b.setText(c.getTitle());var t=this;c.attachSelectionChanged(function(){t.refreshSelectionHighlighting()});c.attachPropertyChanged(function(){t.rerenderSidebar()});this._oCollectionSelector.addButton(b);return this.addAggregation("collections",c)};
sap.ui.ux3.CollectionInspector.prototype.removeCollection=function(c){var i;if(typeof c=="object"){i=this.indexOfCollection(c)}else{i=this.indexOfCollection(sap.ui.getCore().byId(c))}var b=this._oCollectionSelector.getButtons()[i];this._oCollectionSelector.removeButton(b);var r=this.removeAggregation("collections",c);if(r&&this.getSelectedCollection()==r.getId()){this.setSelectedCollection(null)}return r};
sap.ui.ux3.CollectionInspector.prototype.removeAllCollections=function(){this._oCollectionSelector.removeAllButtons();this.setSelectedCollection(null);return this.removeAllAggregation("collections")};
sap.ui.ux3.CollectionInspector.prototype.setSelectedCollection=function(c){this.setAssociation("selectedCollection",c,true);if(!c){this._oEditButton.setVisible(false)}else{this._oCollectionSelector.setSelectedButton(this._oCollectionSelector.getButtons()[this.indexOfCollection(c)]);var s=sap.ui.getCore().byId(this.getSelectedCollection());if(s.getSelectedItems().length==0&&s.getItems().length>0){s.addSelectedItem(s.getItems()[0])}}this.rerenderSidebar();this.refreshSelectionHighlighting()};
sap.ui.ux3.CollectionInspector.prototype.insertContent=function(c,i){this.insertAggregation("content",c,i,true);this.rerenderContent()};
sap.ui.ux3.CollectionInspector.prototype.addContent=function(c){this.addAggregation("content",c,true);this.rerenderContent()};
sap.ui.ux3.CollectionInspector.prototype.removeContent=function(c){this.removeAggregation("content",c,true);this.rerenderContent()};
sap.ui.ux3.CollectionInspector.prototype.removeAllContent=function(){this.removeAllAggregation("content",true);this.rerenderContent()};
sap.ui.ux3.CollectionInspector.prototype.destroyContent=function(){this.destroyAggregation("content",true);this.rerenderContent()};
sap.ui.ux3.CollectionInspector.prototype.onfocusout=function(e){var t=jQuery(e.target);if(t.hasClass("sapUiUx3CICollectionListItem")){t.removeClass("sapUiUx3CISidebarFoc")}};
sap.ui.ux3.CollectionInspector.prototype.onfocusin=function(e){var t=jQuery(e.target);if(t.hasClass("sapUiUx3CICollectionListItem")){t.addClass("sapUiUx3CISidebarFoc")}};
sap.ui.ux3.CollectionInspector.prototype.onsapenter=function(e){var t=jQuery(e.target);if(t.hasClass("sapUiUx3CISidebarFoc")){this.onclick(e)}e.stopPropagation()};
sap.ui.ux3.CollectionInspector.prototype.onsapspace=function(e){var t=jQuery(e.target);if(t.hasClass("sapUiUx3CISidebarFoc")){this.onclick(e)}e.stopPropagation()};
sap.ui.ux3.CollectionInspector.prototype.refreshSelectionHighlighting=function(){var i=jQuery.sap.byId(this.getId()+"-sidebar").find('.sapUiUx3CICollectionListItem');var s;if(this.getSelectedCollection()){s=sap.ui.getCore().byId(this.getSelectedCollection()).getSelectedItems()}else{s=[]}jQuery.each(i,function(I,o){if(jQuery.inArray(o.id,s)>=0){jQuery(o).addClass("sapUiUx3CICollectionListItemSelected");jQuery(o).attr("aria-selected",true)}else{jQuery(o).removeClass("sapUiUx3CICollectionListItemSelected");jQuery(o).attr("aria-selected",false)}})};
sap.ui.ux3.CollectionInspector.prototype.getEditButton=function(){return this._oEditButton};
