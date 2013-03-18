/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.type.Time");jQuery.sap.require("sap.ui.model.type.Date");sap.ui.model.type.Date.extend("sap.ui.model.type.Time",{constructor:function(){sap.ui.model.type.Date.apply(this,arguments);this.sName="Time"}});
sap.ui.model.type.Time.prototype.setFormatOptions=function(f){this.oFormatOptions=f;this.oOutputFormat=sap.ui.core.format.DateFormat.getTimeInstance(this.oFormatOptions);if(this.oFormatOptions.source){this.oInputFormat=sap.ui.core.format.DateFormat.getTimeInstance(this.oFormatOptions.source)}};
