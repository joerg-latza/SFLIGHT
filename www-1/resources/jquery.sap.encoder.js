/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("jquery.sap.encoder",false);(function(){function h(i,l){var g=i.toString(16);if(l){while(l>g.length){g="0"+g}}return g}var r=/[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,a=/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,H={"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;"};var f=function(g){var E=H[g];if(!E){if(a.test(g)){E="&#xfffd;"}else{E="&#x"+h(g.charCodeAt(0))+";"}H[g]=E}return E};jQuery.sap.encodeHTML=function(S){return S.replace(r,f)};jQuery.sap.encodeXML=function(S){return S.replace(r,f)};jQuery.sap.escapeHTML=function(S){return S.replace(r,f)};var b=/[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,j={};var J=function(g){var E=j[g];if(!E){var i=g.charCodeAt(0);if(i<256){E="\\x"+h(i,2)}else{E="\\u"+h(i,4)}j[g]=E}return E};jQuery.sap.encodeJS=function(S){return S.replace(b,J)};jQuery.sap.escapeJS=function(S){return S.replace(b,J)};var c=/[\x00-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,u={};var U=function(g){var E=u[g];if(!E){var i=g.charCodeAt(0);if(i<128){E="%"+h(i,2)}else if(i<2048){E="%"+h((i>>6)|192,2)+"%"+h((i&63)|128,2)}else{E="%"+h((i>>12)|224,2)+"%"+h(((i>>6)&63)|128,2)+"%"+h((i&63)|128,2)}u[g]=E}return E};jQuery.sap.encodeURL=function(S){return S.replace(c,U)};var d=/[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\uffff][0-9A-Fa-f]?/g;var C=function(g){var i=g.charCodeAt(0);if(g.length==1){return"\\"+h(i)}else{return"\\"+h(i)+" "+g.substr(1)}};jQuery.sap.encodeCSS=function(S){return S.replace(d,C)};function W(p,g,i,k){if(p){this.protocol=p.toUpperCase()}if(g){this.host=g.toUpperCase()}this.port=i;this.path=k}var w=new Array();jQuery.sap.clearUrlWhitelist=function(){w.splice(0,w.length)};jQuery.sap.addUrlWhitelist=function(p,g,i,k){var E=new W(p,g,i,k);var I=w.length;w[I]=E};jQuery.sap.removeUrlWhitelist=function(i){w.splice(i,1)};jQuery.sap.getUrlWhitelist=function(){return w.slice()};jQuery.sap.validateUrl=function(g){var k=/(?:([^:\/?#]+):)?(?:\/\/([^\/?#:]*)(?::([0-9]+))?)?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(g);if(!k){return k}var p=k[1],l=k[2],P=k[3],m=k[4],q=k[5],n=k[6];var o=/[\x00-\x24\x26-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/;if(p){p=p.toUpperCase();if(w.length<=0){if(!/^(https?|ftp)/i.test(p)){return false}}}if(l){l=l.toUpperCase()}if(m){var t=m.split("/");for(var i=0;i<t.length;i++){var v=o.test(t[i]);if(v){return false}}}if(q){var t=q.split("&");for(var i=0;i<t.length;i++){var x=t[i].search("=");if(x!=-1){var y=t[i].substring(0,x);var z=t[i].substring(x+1);var A=o.test(y);var B=o.test(z);if(A||B){return false}}}}if(n){if(o.test(n)){return false}}if(w.length>0){var F=false;for(var i=0;i<w.length;i++){if(!p||!w[i].protocol||p==w[i].protocol){var O=false;if(l&&w[i].host&&/^\*/.test(w[i].host)){var D=w[i].host.slice(1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");var E=RegExp(D+"$");if(E.test(l)){O=true}}else if(!l||!w[i].host||l==w[i].host){O=true}if(O){if(!w[i].port||P==w[i].port){if(w[i].path&&/\*$/.test(w[i].path)){var G=w[i].path.slice(0,-1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");var E=RegExp("^"+G);if(E.test(m)){F=true}}else if(!w[i].path||m==w[i].path){F=true}}}}if(F){break}}if(!F){return F}}return true};jQuery.sap._sanitizeHTML=function(g,o){return s(g,o||{uriRewriter:function(i){if(jQuery.sap.validateUrl(i)){return i}}})};jQuery.sap._setHTMLSanitizer=function(s){s=s||e};function e(g,o){if(!window.html||!window.html.sanitize){jQuery.sap.require("sap.ui.thirdparty.caja-html-sanitizer");}var t=o.tagPolicy||window.html.makeTagPolicy(o.uriRewriter,o.tokenPolicy);return window.html.sanitizeWithPolicy(g,t)}var s=e}());
