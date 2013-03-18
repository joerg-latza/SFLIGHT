/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TextAreaRenderer");sap.m.TextAreaRenderer={};
sap.m.TextAreaRenderer.render=function(r,t){var R="sapMInput";if(!t.getVisible()){return}r.write("<textarea");r.writeControlData(t);t.getHeight()&&r.addStyle("height",t.getHeight());t.getWidth()&&r.addStyle("width",t.getWidth());r.writeStyles();!t.getEnabled()&&r.addClass(R+"Disabled")&&r.writeAttribute("disabled",true);t.getValueState()!="None"&&r.addClass(R+t.getValueState());r.addClass(R);r.writeClasses();r.writeAttribute("rows",t.getRows());r.writeAttribute("cols",t.getCols());t.getMaxLength()>0&&r.writeAttribute("maxlength",t.getMaxLength());t.getPlaceholder()&&r.writeAttributeEscaped("placeholder",t.getPlaceholder());t.getWrapping()&&t.getWrapping()!="None"&&r.writeAttribute("wrap",t.getWrapping());r.write(">");r.writeEscaped(t.getValue());r.write("</textarea>")};
