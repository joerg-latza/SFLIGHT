/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RadioButtonRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.ui.commons.RadioButtonRenderer={};
sap.ui.commons.RadioButtonRenderer.render=function(r,R){var a=r;if(!R.getVisible()){return}a.addClass("sapUiRb");a.write("<span");a.writeControlData(R);a.writeAccessibilityState(R,{role:"radio",checked:R.getSelected()===true,invalid:R.getValueState()==sap.ui.core.ValueState.Error,disabled:!R.getEditable()});var e=R.getEnabled()!=null&&R.getEnabled();var b=R.getEditable()!=null&&R.getEditable();var i=false;var c=false;if(R.getValueState()!=null){i=sap.ui.core.ValueState.Error==R.getValueState();c=sap.ui.core.ValueState.Warning==R.getValueState()}if(R.getSelected()){a.addClass("sapUiRbSel")}var m=0;var d=false;if(!e){m=-1;d=true;a.addClass("sapUiRbDis")}if(!b){d=true;a.addClass("sapUiRbRo")}if(i){a.addClass("sapUiRbErr")}else if(c){a.addClass("sapUiRbWarn")}if(e&&b&&!i&&!c){a.addClass("sapUiRbStd")}if(e&&b){a.addClass("sapUiRbInteractive")}a.writeClasses();if(R.getWidth()&&R.getWidth()!=''){a.writeAttribute("style","width:"+R.getWidth()+";")}a.writeAttribute("tabIndex",m);a.write(">");a.write("<input type='radio' tabindex='-1' id='");a.write(R.getId());a.write("-RB' name=\"");a.write(R.getGroupName());a.write("\" ");if(R.getSelected()){a.write(" checked='checked'")}if(!e){a.write(" disabled='disabled'")}var t=R.getTooltip_AsString();var f=sap.ui.core.ValueStateSupport.enrichTooltip(R,t?t:R.getText());if(f){a.writeAttributeEscaped("title",f)}if(d){a.write(" readonly='readonly'");a.write(" disabled='disabled'")}if(R.getKey()){a.writeAttributeEscaped("value",R.getKey())}a.write(" />");a.write("<label");if(f){a.writeAttributeEscaped("title",f)}a.writeAttribute("for",R.getId()+"-RB");if(!R.getText()){a.write(" class=\"sapUiRbNoText\"")}a.write(">");if(R.getText()){this.renderText(a,R.getText(),R.getTextDirection())}a.write("</label>");a.write("</span>")};
sap.ui.commons.RadioButtonRenderer.renderText=function(r,t,e){var a=r;if(!e||e==sap.ui.core.TextDirection.Inherit){a.writeEscaped(t)}else{a.write("<span dir=\""+e+"\">");a.writeEscaped(t);a.write("</span>")}};
sap.ui.commons.RadioButtonRenderer.setSelected=function(r,s){jQuery.sap.byId(r.getId()).toggleClass('sapUiRbSel',s).attr('aria-checked',s);if(s){jQuery.sap.domById(r.getId()+'-RB').checked=true;jQuery.sap.domById(r.getId()+'-RB').setAttribute('checked','checked')}else{jQuery.sap.domById(r.getId()+'-RB').checked=false;jQuery.sap.domById(r.getId()+'-RB').removeAttribute('checked')}};
