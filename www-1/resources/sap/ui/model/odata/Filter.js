/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.odata.Filter");jQuery.sap.require("sap.ui.model.FilterOperator");sap.ui.base.Object.extend("sap.ui.model.odata.Filter",{constructor:function(p,v,a){this.sPath=p;this.aValues=v;this.bAND=a==undefined?true:a}});
