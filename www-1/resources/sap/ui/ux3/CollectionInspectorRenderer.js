/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.ux3.CollectionInspectorRenderer");sap.ui.ux3.CollectionInspectorRenderer={};
sap.ui.ux3.CollectionInspectorRenderer.render=function(r,c){var a=r;a.write("<div");a.addClass("sapUiUx3CI");if(c.getSidebarVisible()){a.addClass("sapUiUx3CISidebarOpened")}else{a.addClass("sapUiUx3CISidebarClosed")}if(c.getFitParent()){a.addClass("sapUiUx3CIFitParent")}a.writeClasses();a.writeControlData(c);a.write(">");a.write("<div");a.addClass("sapUiUx3CIToolBar");a.writeClasses();a.write(">");this.renderToggleButton(a,c);this.renderCollectionSelector(a,c);a.write("</div>");a.write('<div');a.addClass("sapUiUx3CISidebar");a.writeClasses();a.writeAttribute("id",c.getId()+"-sidebar");a.write(">");this.renderSidebar(a,c);a.write("</div>");a.write("<div");a.addClass("sapUiUx3CIContent");a.writeAttribute("id",c.getId()+"-content");a.writeClasses();a.write(">");this.renderContent(a,c);a.write("</div>");a.write("<div");a.addClass("sapUiUx3CIClear");a.writeClasses();a.write(">");a.write("</div>");a.write("</div>")};
sap.ui.ux3.CollectionInspectorRenderer.renderToggleButton=function(r,c){if(c.getToggleButton()){r.write("<div");r.writeAttribute("id",c.getId()+"-togglebutton");r.addClass("sapUiUx3CIToggleButton");r.writeClasses();r.write(">");r.renderControl(c.getToggleButton());r.write("</div>")}};
sap.ui.ux3.CollectionInspectorRenderer.renderCollectionSelector=function(r,c){if(c.getCollectionSelector()){r.write("<div");r.addClass("sapUiUx3CICollectionSelector");r.writeClasses();r.write(">");r.renderControl(c.getCollectionSelector());r.write("</div>")}};
sap.ui.ux3.CollectionInspectorRenderer.renderSidebar=function(r,c){r.write("<div");r.addClass("sapUiUx3CICollectionListContainer");r.writeClasses();r.write(">");r.write('<ul tabindex="-1"');r.addClass("sapUiUx3CICollectionList");r.writeClasses();var C=sap.ui.getCore().byId(c.getSelectedCollection());if(c.getSelectedCollection()){r.writeAccessibilityState(C,{role:"listbox",multiselectable:C.getMultiSelection()})}r.write(">");if(c.getSelectedCollection()){var i=C.getItems().length;jQuery.each(C.getItems(),function(I,o){r.write('<li tabindex="-1"');r.writeElementData(o);r.writeAttributeEscaped("title",o.getText());r.addClass("sapUiUx3CICollectionListItem");r.writeClasses();r.writeAccessibilityState(o,{role:"option",selected:(jQuery.inArray(o.getId(),C.getSelectedItems())>=0),setsize:i,posinset:I});r.write(">"+o.getText()+"</li>")})}r.write("</ul></div>");r.renderControl(c.getEditButton())};
sap.ui.ux3.CollectionInspectorRenderer.renderContent=function(r,c){jQuery.each(c.getContent(),function(i,C){r.renderControl(C)})};
