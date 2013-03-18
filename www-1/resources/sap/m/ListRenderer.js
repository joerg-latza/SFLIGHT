/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ListRenderer");sap.m.ListRenderer={};
sap.m.ListRenderer.render=function(r,c){if(!c.getVisible()){return}var I=c.getInset();r.write("<div");r.addClass("sapMList");if(I){r.addClass("sapMListInsetBG")}r.writeClasses();r.writeControlData(c);if(c.getWidth()){r.addStyle("width",c.getWidth());r.writeStyles()}r.write(">");if(c.getHeaderText()){r.write("<header");r.writeAttribute("id",c.getId()+"-listHeader");if(I)r.addClass("sapMListHdrInset");else r.addClass("sapMListHdr");r.writeClasses();r.write(">");r.writeEscaped(c.getHeaderText());r.write("</header>")}r.write("<ul");r.writeAttribute("id",c.getId()+"-listUl");r.addClass("sapMListUl");if(I){r.addClass("sapMListInset");if(c.getHeaderText()){r.addClass("sapMListInsetHdr")}if(c.getFooterText()){r.addClass("sapMListInsetFtr")}}r.writeClasses();r.write(">");if(c._mode!=sap.m.ListMode.None&&c._mode!=c.getMode()){c._removeCurrentSelection()}c._mode=c.getMode();if(c._mode==sap.m.ListMode.SingleSelectMaster){c.setIncludeItemInSelection(true)}var a=c.getItems();for(var i=0;i<a.length;i++){a[i]._mode=c.getMode();a[i]._includeItemInSelection=c.getIncludeItemInSelection();a[i]._select=c._select;a[i]._delete=c._delete;a[i]._listId=c.getId();a[i]._showUnread=c.getShowUnread();r.renderControl(a[i])}if(a.length<=0&&c.getShowNoData()){var R=sap.ui.getCore().getLibraryResourceBundle("sap.m");if(!c.getNoDataText()){c.setNoDataText(R.getText("LIST_NO_DATA"))}r.write("<li class='sapMListNoData'>");r.writeEscaped(c.getNoDataText());r.write("</li>")}r.write("</ul>");if(this.renderGrowingListContent){this.renderGrowingListContent(r,c)}if(c.getFooterText()){r.write("<footer");r.writeAttribute("id",c.getId()+"-listFooter");if(I)r.addClass("sapMListFtrInset");else r.addClass("sapMListFtr");r.writeClasses();r.write(">");r.writeEscaped(c.getFooterText());r.write("</footer>")}r.write("</div>")};
