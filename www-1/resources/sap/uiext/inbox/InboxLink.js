/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
 jQuery.sap.declare("sap.uiext.inbox.InboxLink");
 
 sap.ui.commons.Link.extend("sap.uiext.inbox.InboxLink", {
    onclick : function(oEvent) {
			 if (this.getEnabled()) {
				 if (!this.firePress({windowEvent:oEvent})) {
					oEvent.preventDefault();
				}
			} else {
				oEvent.preventDefault();
			}
		},
		renderer: "sap.ui.commons.LinkRenderer"
});