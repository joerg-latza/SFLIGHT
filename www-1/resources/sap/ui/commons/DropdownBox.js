/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.DropdownBox");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.ComboBox");sap.ui.commons.ComboBox.extend("sap.ui.commons.DropdownBox",{metadata:{publicMethods:["clearHistory"],library:"sap.ui.commons",properties:{"searchHelpEnabled":{type:"boolean",group:"Behavior",defaultValue:false},"searchHelpText":{type:"string",group:"Appearance",defaultValue:null},"searchHelpAdditionalText":{type:"string",group:"Appearance",defaultValue:null},"searchHelpIcon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"maxHistoryItems":{type:"int",group:"Behavior",defaultValue:0}},events:{"searchHelp":{}}}});sap.ui.commons.DropdownBox.M_EVENTS={'searchHelp':'searchHelp'};jQuery.sap.require("sap.ui.core.History");jQuery.sap.require("sap.ui.core.SeparatorItem");
sap.ui.commons.DropdownBox.prototype.init=function(){sap.ui.commons.ComboBox.prototype.init.apply(this,arguments);this._oValueBeforePaste=null;this._oValueBeforeOpen=null;this.__aItems=null;this._iCursorPosBeforeBackspace=null;this._searchHelpItem=null;this._iItemsForHistory=10;this._oHistory=new sap.ui.core.History(this.getId())};
sap.ui.commons.DropdownBox.prototype.exit=function(){var I=this.getId()+"-h-",i;if(this._searchHelpItem){this._searchHelpItem[0].destroy();this._searchHelpItem[1].destroy();this._searchHelpItem=null}sap.ui.commons.ComboBox.prototype.exit.apply(this,arguments);function r(a){var o=sap.ui.getCore().byId(a);o&&o.destroy()}for(var i=0;i<this.getMaxHistoryItems();i++){r(I+i)}if(this.__oSeparator){this.__oSeparator.destroy();this.__oSeparator=null}this._oHistory=null;this.__aItems=null;this._sWantedValue=undefined};
sap.ui.commons.DropdownBox.prototype.onAfterRendering=function(e){sap.ui.commons.ComboBox.prototype.onAfterRendering.apply(this,arguments);this.checkValueInItems()};
sap.ui.commons.DropdownBox.prototype.getItems=function(){if(this.oPopup&&this.oPopup.isOpen()){return this.__aItems}else{return sap.ui.commons.ComboBox.prototype.getItems.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.insertItem=function(i,I){if(this.oPopup&&this.oPopup.isOpen()){this.__aItems.splice(I,0,i);if(this.__aItems.length<=this._iItemsForHistory&&!this._searchHelpItem){this._getListBox().insertItem(i,I)}if(!this.bNoItemCheck){var r=jQuery(this.getInputDomRef());var c=r.cursorPos();this._doTypeAhead(r.val().substr(0,c),"")}return this}else{return sap.ui.commons.ComboBox.prototype.insertItem.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.addItem=function(i){if(this.oPopup&&this.oPopup.isOpen()){this.__aItems.push(i);if(this.__aItems.length<=this._iItemsForHistory&&!this._searchHelpItem){this._getListBox().addItem(i)}if(!this.bNoItemCheck){var r=jQuery(this.getInputDomRef());var c=r.cursorPos();this._doTypeAhead(r.val().substr(0,c),"")}return this}else{return sap.ui.commons.ComboBox.prototype.addItem.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.removeItem=function(e){if(this.oPopup&&this.oPopup.isOpen()){var I=null;var o=e;if(typeof(e)=="string"){e=sap.ui.getCore().byId(e)}if(typeof(e)=="object"){for(var i=0;i<this.__aItems.length;i++){if(this.__aItems[i]==e){e=i;break}}}if(typeof(e)=="number"){if(e<0||e>=this.__aItems.length){jQuery.sap.log.warning("Element.removeAggregation called with invalid index: Items, "+e)}else{I=this.__aItems[e];this.__aItems.splice(e,1)}}if(this.__aItems.length<=this._iItemsForHistory&&!this._searchHelpItem){this._getListBox().removeItem(o)}if(!this.bNoItemCheck){var r=jQuery(this.getInputDomRef());var c=r.cursorPos();this._doTypeAhead(r.val().substr(0,c),"")}return I}else{return sap.ui.commons.ComboBox.prototype.removeItem.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.removeAllItems=function(){if(this.oPopup&&this.oPopup.isOpen()){var i=this.__aItems;if(!i){return[]}sap.ui.commons.ComboBox.prototype.removeAllItems.apply(this,arguments);this.__aItems=new Array();return i}else{return sap.ui.commons.ComboBox.prototype.removeAllItems.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.indexOfItem=function(I){if(this.oPopup&&this.oPopup.isOpen()){if(this.__aItems){if(this.__aItems.length==undefined){return-2}for(var i=0;i<this.__aItems.length;i++){if(this.__aItems[i]==I){return i}}}return-1}else{return sap.ui.commons.ComboBox.prototype.indexOfItem.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.destroyItems=function(){if(this.oPopup&&this.oPopup.isOpen()){if(!this.__aItems){return this}this._getListBox().removeAllItems();for(var i=0;i<this.__aItems.length;i++){if(this.__aItems[i]){this.__aItems[i].destroy()}}this.__aItems=new Array();return this}else{return sap.ui.commons.ComboBox.prototype.destroyItems.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.updateItems=function(){sap.ui.commons.ComboBox.prototype.updateItems.apply(this,arguments);if(this.oPopup&&this.oPopup.isOpen()){var r=jQuery(this.getInputDomRef());var c=r.cursorPos();this._doTypeAhead(r.val().substr(0,c),"")}};
sap.ui.commons.DropdownBox.prototype._handleItemsChanged=function(e){if(this.bNoItemCheck){return}if(this.__aItems&&(!this.oPopup||!this.oPopup.isOpen())){throw new Error("DropdownBox "+this.getId()+" : this.__aItems is not empty!")}if(this.getListBox()&&this.oPopup&&this.oPopup.isOpen()){if(this.__aItems.length>this._iItemsForHistory||this._searchHelpItem){switch(e.getParameter("event")){case"destroyItems":for(var i=0;i<this.__aItems.length;i++){I=this.__aItems[i];if(!I.bIsDestroyed){I.destroy()}}this.__aItems=new Array();if(this.getSearchHelpEnabled()){this._searchHelpItem=null;this.setSearchHelpEnabled(this.getSearchHelpEnabled(),this.getSearchHelpText(),this.getSearchHelpAdditionalText(),this.getSearchHelpIcon())}break;case"removeAllItems":this.__aItems=new Array();break;case"removeItem":var I=e.getParameter("item");for(var i=0;i<this.__aItems.length;i++){if(this.__aItems[i]==I){this.__aItems.splice(i,1);break}}if(this.__aItems.length<=this._iItemsForHistory){this._getListBox().setItems(this.__aItems,false,true)}break;case"insertItem":this.__aItems.splice(e.getParameter("index"),0,e.getParameter("item"));break;case"addItem":this.__aItems.push(e.getParameter("item"));break;case"setItems":this.__aItems=e.getParameter("items");break;case"updateItems":for(var i=0;i<this.__aItems.length;i++){I=this.__aItems[i];if(!I.bIsDestroyed){I.destroy()}}if(this.getSearchHelpEnabled()){this._searchHelpItem=null;this.setSearchHelpEnabled(this.getSearchHelpEnabled(),this.getSearchHelpText(),this.getSearchHelpAdditionalText(),this.getSearchHelpIcon())}this.__aItems=this._getListBox().getItems();break;default:break}}else{this.__aItems=this._getListBox().getItems()}var r=jQuery(this.getInputDomRef());var c=r.cursorPos();this._doTypeAhead(r.val().substr(0,c),"")}sap.ui.commons.ComboBox.prototype._handleItemsChanged.apply(this,arguments);this.checkValueInItems()};
sap.ui.commons.DropdownBox.prototype.onclick=function(e){if(e.target!==this.getInputDomRef()){return sap.ui.commons.ComboBox.prototype.onclick.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.onmouseup=function(e){if(e.target==this.getF4ButtonDomRef()||this.mobile){return}if(e.target===this.getInputDomRef()&&this.oPopup&&this.oPopup.isOpen()){jQuery.sap.delayedCall(0,this,"_updateSelection",[0])}else{this._doSelect()}};
sap.ui.commons.DropdownBox.prototype.onsapshow=function(e){if(this.mobile){return}if(!this.getEnabled()||!this.getEditable()){e.preventDefault();e.stopImmediatePropagation();return}if(e.which===jQuery.sap.KeyCodes.F4&&this._searchHelpItem){this._close();this.fireSearchHelp({value:jQuery(this.getInputDomRef()).val()});e.preventDefault();e.stopImmediatePropagation();return}if(this.oPopup&&this.oPopup.isOpen()){this._close()}else{this._open();var l=this._getListBox();l.scrollToIndex(l.getSelectedIndex());this._doSelect()}e.preventDefault();e.stopImmediatePropagation()};
sap.ui.commons.DropdownBox.prototype.onkeydown=function(e){if(e.target.id==this.getId()+"-select"){return}if((jQuery.browser.msie&&(e.which==jQuery.sap.KeyCodes.DELETE||e.which==jQuery.sap.KeyCodes.BACKSPACE))||(jQuery.browser.webkit&&(e.which==jQuery.sap.KeyCodes.DELETE||e.which==jQuery.sap.KeyCodes.BACKSPACE))){this.onkeypress(e)}if(!jQuery.browser.msie||e.which!==jQuery.sap.KeyCodes.BACKSPACE){return}this._iCursorPosBeforeBackspace=jQuery(this.getInputDomRef()).cursorPos()};
sap.ui.commons.DropdownBox.prototype.onpaste=function(e){if(e.target.id==this.getId()+"-select"){return}if(this._oValueBeforePaste===null){this._oValueBeforePaste=jQuery(this.getInputDomRef()).val()}};
sap.ui.commons.DropdownBox.prototype.onkeyup=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.getEnabled()||!this.getEditable()){return}var k=e.which,K=jQuery.sap.KeyCodes;sap.ui.commons.TextField.prototype.onkeyup.apply(this,arguments);if(!(jQuery.browser.msie&&k===K.BACKSPACE)&&this._oValueBeforePaste===null||k===K.TAB){return}if(!this.oPopup||!this.oPopup.isOpen()){this._open()}var r=jQuery(this.getInputDomRef()),v=false;if(k===K.BACKSPACE&&this._iCursorPosBeforeBackspace!==null){var c=r.cursorPos();if(this._iCursorPosBeforeBackspace!==c){c++}this._iCursorPosBeforeBackspace=null;v=this._doTypeAhead(r.val().substr(0,c-1),"")}else if(!(v=this._doTypeAhead("",r.val()))){r.val(this._oValueBeforePaste)}if(v){this._getListBox().rerender()}this._oValueBeforePaste=null};
sap.ui.commons.DropdownBox.prototype.onsaphome=function(e){if(e.target.id==this.getId()+"-select"){return}if((!this.oPopup||!this.oPopup.isOpen())&&this.getEditable()&&this.getEnabled()){sap.ui.commons.TextField.prototype.onsaphome.apply(this,arguments);var r=jQuery(this.getInputDomRef());r.cursorPos(0);this._updateSelection();e.preventDefault()}else{sap.ui.commons.ComboBox.prototype.onsaphome.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.onsapdelete=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.oPopup||!this.oPopup.isOpen()){return}var l=this._getListBox(),i=l.getSelectedItem(),m=i.getId().match(/\-h\-([0-4])/),I=l.getSelectedIndex();if(m&&m.length===2){this._oHistory.remove(i.getText());l.removeItem(I);var L=this._oHistory.get().length;if(L===0){l.removeItem(0)}l.rerender();var n=I+(this._searchHelpItem?2:0);if(n==L){n++}l.setSelectedIndex(n);this.setValue(l.getSelectedItem().getText())}};
sap.ui.commons.DropdownBox.prototype.onkeypress=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.getEnabled()||!this.getEditable()){return}var k=e.which,K=e.keyCode,o=jQuery.sap.KeyCodes;if((sap.ui.commons.ComboBox._isHotKey(e)||(jQuery.browser.mozilla&&K===o.HOME)||K===o.F4&&e.which===0)&&!(e.ctrlKey&&e.which==120)){return}else if(K==o.ESCAPE){var v=this.getProperty("value");var i=this.getInputDomRef();if(i&&i.value!==v){jQuery(i).val(v)}return}var n=String.fromCharCode(k),r=jQuery(this.getInputDomRef()),c=r.cursorPos(),V=r.val();if(!this.oPopup||!this.oPopup.isOpen()){this.noTypeAheadByOpen=true;this._open();this.noTypeAheadByOpen=undefined}var b=false;if(k===o.BACKSPACE){b=this._doTypeAhead(V.substr(0,c-1),"")}else{b=this._doTypeAhead(V.substr(0,c),n)}e.preventDefault()};
sap.ui.commons.DropdownBox.prototype.onsapright=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.getEnabled()||!this.getEditable()){return}var r=sap.ui.getCore().getConfiguration().getRTL();if(!r){this._updateSelection(1)}else{this._updateSelection(-1)}e.preventDefault()};
sap.ui.commons.DropdownBox.prototype.onsapleft=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.getEnabled()||!this.getEditable()){return}var r=sap.ui.getCore().getConfiguration().getRTL();if(!r){this._updateSelection(-1)}else{this._updateSelection(1)}e.preventDefault()};
sap.ui.commons.DropdownBox.prototype.onfocusin=function(e){var r=jQuery(this.getInputDomRef()),l=r.val().length;if(l>0&&!this.mobile){this._doSelect(0,l)}sap.ui.commons.ComboBox.prototype.onfocusin.apply(this,arguments)};
sap.ui.commons.DropdownBox.prototype.onselect=function(e){if(this._bIgnoreSelect){this._bIgnoreSelect=false;this.iOldTimestamp=e.originalEvent.timeStamp;return}if(this.iOldTimestamp&&e.originalEvent.timeStamp-this.iOldTimestamp<50){return}this.iOldTimestamp=undefined;if(!this.getEnabled()||!this.getEditable()){return}var r=jQuery(this.getInputDomRef()),n=r.cursorPos(),v=r.val();if(v.length>0){this._doTypeAhead(v.substr(0,n),"");if(!this.oPopup||!this.oPopup.isOpen()){this._cleanupClose(this._getListBox())}}e.preventDefault()};
sap.ui.commons.DropdownBox.prototype._determinePosinset=function(i,n){var p=n+1;if(this.oPopup&&this.oPopup.isOpen()){this.dontSetPoisinset=undefined;var I=i[n];var h=i[0].getId().search(this.getId()+"-h-")!=-1;if(I.getId().search(this.getId()+"-h-")==-1){if(h){p=p-1}if(this._searchHelpItem){p=p-2}}}return p};
sap.ui.commons.DropdownBox.prototype._doSelect=function(s,e){this._bIgnoreSelect=true;var d=this.getInputDomRef();if(d){var r=jQuery(d);r.selectText(s?s:0,e?e:r.val().length)}return this};
sap.ui.commons.DropdownBox.prototype._updateSelection=function(m){var r=jQuery(this.getInputDomRef()),n=r.cursorPos()+(m||0),v=r.val();this._doTypeAhead(v.substr(0,n),"");if(!this.oPopup||!this.oPopup.isOpen()){this._cleanupClose(this._getListBox())}else{this._getListBox().rerender()}};
sap.ui.commons.DropdownBox.prototype._doTypeAhead=function(v,n,N){if(this.__doTypeAhead===true){return}this.__doTypeAhead=true;this._sWantedSelectedKey=undefined;this._sWantedSelectedItemId=undefined;this._sWantedValue=undefined;var l=this._getListBox(),m=this.getMaxPopupItems(),I=this.__aItems||l.getItems(),V=I.length,h=I.length>this._iItemsForHistory,f=!N&&h,o=v+n,s=new RegExp("[.*+?|()\\[\\]{}\\\\]","g"),r=o.toLowerCase().replace(s,"\\$&"),a=RegExp("^"+r+".*$"),M=n&&n.length||0,R=jQuery(this.getInputDomRef());this.__aItems=I;if(V<=0){this.__doTypeAhead=false;return false}var c,F=this._getFilteredItems(I,a),b=F.length>0;if(!b){f=false}if(f){c=F}else{c=I.slice(0)}var H=[];if(h){H=this._addHistoryItems(c,f&&a);l.setItems(c,false,true);V=c.length}l.setVisibleItems(m<V?m:V);var d,e=H.length;if(!f&&e>0&&b){H=this._getFilteredItems(H,a);d=H[0]}if(f){d=F[0]}else if(!d){if(F.length>0){d=F[0]}else{var O=R.val();for(var i=0;i<c.length;i++){var C=c[i];if(C.getEnabled()&&C.getText()==O){d=C;break}}if(!d){d=c[0]}}}var S=this._searchHelpItem;if(S){c.splice(e++,0,S[0],S[1]);l.setItems(c,false,true)}var i=l.indexOfItem(d),t=d.getText();var p=i+1;var g=c.length;if(H.length>0){g=g-1}if(S){g=g-2}if(p>H.length){if(H.length>0){p=p-1}if(S){p=p-2}}R.attr("aria-posinset",p);R.attr("aria-setsize",g);R.val(t);this._sTypedChars=o;this._doSelect(v.length+M,t.length);l.setSelectedIndex(i);l.scrollToIndex(i);this._iClosedUpDownIdx=i;if(!b){R=this.$();R.addClass("sapUiTfErr");jQuery.sap.delayedCall(300,R,"removeClass",["sapUiTfErr"]);R.cursorPos(v.length);this._doSelect(v.length,t.length)}this.__doTypeAhead=false;return b};
sap.ui.commons.DropdownBox.prototype._prepareOpen=function(l,p){this._oValueBeforeOpen=this.$().val();this._Opening=true;if(!this.noTypeAheadByOpen){this._doTypeAhead("",jQuery(this.getInputDomRef()).val(),true)}return this};
sap.ui.commons.DropdownBox.prototype._cleanupClose=function(l){if(this.__aItems){l.setItems(this.__aItems,false,true);this.__aItems=undefined}this._oValueBeforeOpen=null;this._Opening=undefined;return this};
sap.ui.commons.DropdownBox.prototype._getFilteredItems=function(I,r){var t=I.slice(0),o;for(var i=t.length-1;i>=0;i--){o=t[i];if(!r.test(o.getText().toLowerCase())||!o.getEnabled()){t.splice(i,1)}}return t};
sap.ui.commons.DropdownBox.prototype._addHistoryItems=function(I,r){var s=this.getId()+"-h-",o,h=this._oHistory.get(),l=h.length,n=[];for(var i=0,j=0;j<this.getMaxHistoryItems()&&i<l;i++){if(!r||r.test(h[i])){o=(o=sap.ui.getCore().byId(s+j))&&o.setText(h[i])||new sap.ui.core.ListItem(s+j,{text:h[i]});n.push(o);j++}}if(n.length>0){var S=s+"separator",a=this._getSeparator(S);n.push(a)}I.unshift.apply(I,n);return n};
sap.ui.commons.DropdownBox.prototype._getSeparator=function(s){if(!this.__oSeparator&&s){this.__oSeparator=sap.ui.getCore().byId(s)||new sap.ui.core.SeparatorItem(s)}return this.__oSeparator||null};
sap.ui.commons.DropdownBox.prototype.fireChange=function(a){this.fireEvent("change",a);if(a.newValue&&(this.getMaxHistoryItems()>0)){this._oHistory.add(a.newValue)}this._sWantedValue=undefined;return this};
sap.ui.commons.DropdownBox.prototype.setValue=function(v){v=(v===undefined||v===null||v==="")?"":v;var I=this.getItems(),t,V=false,f;for(var i=0,l=I.length;i<l&&!V;i++){var o=I[i];var e=o.getEnabled();t=o.getText();if(e&&!f){f=t}V=t===v&&e}if(V){sap.ui.commons.ComboBox.prototype.setValue.call(this,v);this._sWantedValue=undefined}else if(v===""&&I.length>0){sap.ui.commons.ComboBox.prototype.setValue.call(this,f)}else{this._sWantedValue=v}return this};
sap.ui.commons.DropdownBox.prototype.applyFocusInfo=function(f){var i=jQuery(this.getInputDomRef());if(jQuery.sap.startsWithIgnoreCase(this.getValue(),f.sTypedChars)){i.val(f.sTypedChars);this.focus();this._doTypeAhead(f.sTypedChars,"");if(!this._Opening&&(!this.oPopup||!this.oPopup.isOpen())){this._cleanupClose(this._getListBox())}}else{f.sTypedChars="";this.focus();this._doSelect()}return this};
sap.ui.commons.DropdownBox.prototype.getTooltip_AsString=function(){var t=sap.ui.commons.ComboBox.prototype.getTooltip_AsString.apply(this,arguments);if(!this._searchHelpItem){return t}else{var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");var s=r.getText("DDBX_SHI_ARIA");s=s==="DDBX_SHI_ARIA"?"Open search help via {0}":s;var a=this._searchHelpItem[0]&&this._searchHelpItem[0].getAdditionalText()||r.getText("DDBX_SHIF4");a=a==="DDBX_SHIF4"?"F4":a;s=s.replace("{0}",a);return(t?t+" - ":"")+s}};
sap.ui.commons.DropdownBox.prototype._handleSelect=function(c){if(this._searchHelpItem&&c.getParameter("selectedItem")===this._searchHelpItem[0]){var e=jQuery.Event("sapshow");e.which=jQuery.sap.KeyCodes.F4;this.onsapshow(e)}else{var i=c.getParameter("selectedItem");if(!i){i=sap.ui.getCore().byId(c.getParameter("selectedId"))}if(i.getId().search(this.getId()+"-h-")!=-1){var l=this._getListBox(),I=l.getItems();var L=this._oHistory.get().length;if(L>this.getMaxHistoryItems()){L=Math.max(this.getMaxHistoryItems(),0)}for(var a=L;a<I.length;a++){if(I[a].getText()==i.getText()&&I[a].getEnabled()){c.mParameters.selectedIndex=a;if(!c.getParameter("selectedIndices")){c.mParameters.selectedIndices=new Array(1);c.mParameters.aSelectedIndices=new Array(1)}c.mParameters.selectedIndices[0]=a;c.mParameters.aSelectedIndices[0]=a;c.mParameters.selectedItem=I[a];break}}}this._sWantedValue=undefined;return sap.ui.commons.ComboBox.prototype._handleSelect.apply(this,arguments)}};
sap.ui.commons.DropdownBox.prototype.setSearchHelpEnabled=function(e,t,a,i){this.setProperty("searchHelpEnabled",e);if(t){this.setProperty("searchHelpText",t)}else{t=this.getSearchHelpText()}if(a){this.setProperty("searchHelpAdditionalText",a)}else{a=this.getSearchHelpAdditionalText()}if(i){this.setProperty("searchHelpIcon",i)}else{i=this.getSearchHelpIcon()}if(e){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");if(r){t=t||r.getText("DDBX_SHI");t=t==="DDBX_SHI"?"Search Help":t;a=a||r.getText("DDBX_SHIF4");a=a==="DDBX_SHIF4"?"F4":a}i=i||sap.ui.resource("sap.ui.commons","images/dropdown/ico12_f4.gif");if(!this._searchHelpItem){this._searchHelpItem=[new sap.ui.core.ListItem(this.getId()+"_shi",{text:t,additionalText:a,enabled:true,icon:i}),new sap.ui.core.SeparatorItem()]}else{this._searchHelpItem[0].setText(t).setAdditionalText(a).setIcon(i)}}else{if(this._searchHelpItem){this._searchHelpItem[0].destroy();this._searchHelpItem[1].destroy();this._searchHelpItem=null}}return this};
sap.ui.commons.DropdownBox.prototype.setSearchHelpText=function(s){this.setProperty("searchHelpText",s);this.setSearchHelpEnabled(this.getSearchHelpEnabled(),s,this.getSearchHelpAdditionalText(),this.getSearchHelpIcon());return this};
sap.ui.commons.DropdownBox.prototype.setSearchHelpAdditionalText=function(s){this.setProperty("searchHelpAdditionalText",s);this.setSearchHelpEnabled(this.getSearchHelpEnabled(),this.getSearchHelpText(),s,this.getSearchHelpIcon());return this};
sap.ui.commons.DropdownBox.prototype.setSearchHelpIcon=function(s){this.setProperty("searchHelpIcon",s);this.setSearchHelpEnabled(this.getSearchHelpEnabled(),this.getSearchHelpText(),this.getSearchHelpAdditionalText(),s);return this};
sap.ui.commons.DropdownBox.prototype.checkValueInItems=function(){var v=this.getValue();var I=this.getItems();var w=this._sWantedSelectedKey;var W=this._sWantedSelectedItemId;if(I&&I.length>0){var V=false;var f;if(this._sWantedValue){for(var i=0,l=I.length;i<l&&!V;i++){var o=I[i];var e=o.getEnabled();var t=o.getText();if(e&&!f){f=t}V=t===this._sWantedValue&&e}if(V){v=this._sWantedValue;this._sWantedValue=undefined;w=undefined;W=undefined;sap.ui.commons.ComboBox.prototype.setValue.call(this,v)}}if(!V){for(var i=0,l=I.length;i<l&&!V;i++){var o=I[i];var e=o.getEnabled();var t=o.getText();if(e&&!f){f=t}V=t===v&&e}}if(!V){v=f;sap.ui.commons.ComboBox.prototype.setValue.call(this,v)}}else{v="";sap.ui.commons.ComboBox.prototype.setValue.call(this,v)}this._sWantedSelectedKey=w;this._sWantedSelectedItemId=W;return v};
sap.ui.commons.DropdownBox.prototype.setMaxHistoryItems=function(m){var o=this.getMaxHistoryItems();var I=this.getId()+"-h-";var a;this.setProperty('maxHistoryItems',m,true);if(m<o){var l=this._getListBox();for(var i=Math.max(m,0);i<o;i++){a=sap.ui.getCore().byId(I+i);if(a){l.removeItem(a);a.destroy()}}if(m<=0&&this.__oSeparator){l.removeItem(this.__oSeparator)}}};
sap.ui.commons.DropdownBox.prototype.clearHistory=function(){this._oHistory.clear();var I=this.getId()+"-h-";var l=this._getListBox();var o;for(var i=0;i<this.getMaxHistoryItems();i++){if(o=sap.ui.getCore().byId(I+i)){l.removeItem(o);o.destroy()}}if(this.__oSeparator){l.removeItem(this.__oSeparator)}};
